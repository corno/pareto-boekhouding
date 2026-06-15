import * as pt from 'pareto-core/dist/implementation/transformer'
import p_change_context from 'pareto-core/dist/implementation/specials/change_context'
import p_variables from 'pareto-core/dist/implementation/specials/variables'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/data/derived"
import p_unreachable_code_path from 'pareto-core/dist/implementation/specials/unreachable_code_path'

//dependencies

export const Root: p_i.Transformer<d_in.Root, d_out.Root> = ($) => {
    const bron_root = $
    return {
        'bron': $,
        'jaren': pt.dictionary.from.dictionary(
            $.Jaren
        ).resolve_static(
            ($, id, $al): d_out.Jaar => {
                const bron_jaar = $

                const p_inkopen: d_out.Jaar['handelstransacties']['inkopen'] = pt.dictionary.from.dictionary(
                    bron_jaar.Handelstransacties.Inkopen
                ).map(($) => {
                    return {
                        'bron': $,
                        'totaal btw': pt.number.from.dictionary(
                            $.Regels
                        ).sum(
                            ($) => pt.decide.state($.Bedrag, ($) => {
                                switch ($[0]) {
                                    case 'Bekend': return pt.ss($, ($) =>
                                        // + $['Bedrag inclusief geheven BTW']
                                        + $['BTW-bedrag']
                                    )
                                    default: return pt.au($[0])
                                }
                            })
                        ),
                        'totaal ex btw': pt.number.from.dictionary(
                            $.Regels
                        ).sum(
                            ($) => pt.decide.state($.Bedrag, ($) => {
                                switch ($[0]) {
                                    case 'Bekend': return pt.ss($, ($) =>
                                        + $['Bedrag inclusief geheven BTW']
                                        - $['BTW-bedrag']
                                    )
                                    default: return pt.au($[0])
                                }
                            })
                        ),
                    }
                })
                const p_verkopen: d_out.Jaar['handelstransacties']['verkopen'] = pt.dictionary.from.dictionary(
                    bron_jaar.Handelstransacties.Verkopen
                ).map(($) => {

                    const p_regels = pt.dictionary.from.dictionary(
                        $.Regels
                    ).map(($): d_out.Verkoop_Regel => {

                        const btw_bedrag = pt.number.from.number.divide(
                            $['Bedrag exclusief BTW'] * pt.decide.state($['BTW-regime'], ($): number => {
                                switch ($[0]) {
                                    case 'Binnenland: heffing verlegd': return pt.ss($, ($) => 0)
                                    case 'Intracommunautair': return pt.ss($, ($) => 0)
                                    case 'Standaard': return pt.ss($, ($) => pt.decide.state($['BTW-categorie']['l entry']['BTW-heffing'], ($): number => {
                                        switch ($[0]) {
                                            case 'Nee': return pt.ss($, ($) => 0)
                                            case 'Ja': return pt.ss($, ($) => ($['BTW-promillage']))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            }),
                            1000,
                            ['towards nearest', null],
                            {
                                'divided_by_zero': () => p_unreachable_code_path("divisor is 1000"),
                            }
                        )
                        return {
                            'bron': $,
                            'btw bedrag': btw_bedrag,
                            'bedrag inclusief btw': $['Bedrag exclusief BTW'] + btw_bedrag,
                            
                        }
                    })
                    const totaal_btw = pt.number.from.dictionary(
                        p_regels
                    ).sum(
                        ($) => $['btw bedrag']
                    )
                    const totaal_ex_btw = pt.number.from.dictionary(
                        p_regels
                    ).sum(
                        ($) => $.bron['Bedrag exclusief BTW']
                    )
                    return {
                        'bron': $,
                        'regels': p_regels,
                        'totaal btw': totaal_btw,
                        'totaal ex btw': totaal_ex_btw,
                        'totaal inclusief btw': totaal_ex_btw + totaal_btw,
                    }
                })

                const p_resultaat_grootboekrekeningen: d_out.Resultaat.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Resultaat.__d_map(($): d_out.Resultaat.Grootboekrekening => {
                    const context = $
                    const p_postgroepen = pt.literal.dictionary({
                        "inkopen": {
                            'totaal': pt.number.from.dictionary(
                                bron_jaar.Handelstransacties.Inkopen
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => pt.decide.state($.Type, ($) => $[0] === 'Kosten' && pt.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => pt.decide.state($.Bedrag, ($): number => {
                                        switch ($[0]) {
                                            case 'Bekend': return pt.ss($, ($) =>
                                                - $['Bedrag inclusief geheven BTW']
                                                + $['BTW-bedrag']
                                            )
                                            default: return pt.au($[0])
                                        }
                                    })
                                )
                            )
                        },
                        "verkopen": {
                            'totaal': pt.number.from.dictionary(
                                bron_jaar.Handelstransacties.Verkopen
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => pt.decide.state($.Type, ($) => $[0] === 'Opbrengsten' && pt.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => $['Bedrag exclusief BTW']
                                )
                            )
                        },
                        "memoriaal boekingen": {
                            'totaal': pt.number.from.dictionary(
                                bron_jaar.Mutaties['Overige Balans Items']
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $['Memoriaal Boekingen']
                                    ).filter(
                                        ($) => $.Grootboekrekening['l entry'] === context
                                    )
                                ).sum(
                                    ($) => $.Bedrag
                                )
                            )
                        },
                        "btw afrondingen": {
                            'totaal': pt.number.from.dictionary(
                                pt.dictionary.from.dictionary(
                                    bron_jaar.Jaarbeheer.Resultaat['BTW periodes']
                                ).filter(
                                    ($) => bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context
                                )
                            ).sum(
                                ($) => pt.decide.state($.Status, ($) => {
                                    switch ($[0]) {
                                        case 'Aangegeven': return pt.ss($, ($) => $.Afronding)
                                        case 'Openstaand': return pt.ss($, ($) => 0)
                                        default: return pt.au($[0])
                                    }
                                })
                            )
                        }
                    })


                    return {
                        'bron': $,
                        'postgroepen': p_postgroepen,
                        'totaal': pt.number.from.dictionary(
                            p_postgroepen
                        ).sum(
                            ($) => $.totaal
                        )
                    }
                })
                const resultaat = pt.number.from.dictionary(
                    p_resultaat_grootboekrekeningen
                ).sum(
                    ($) => $.totaal
                )
                const p_informele_rekeningen = pt.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans['Informele rekeningen']).map(($): d_out.Informele_Rekening => {
                    const context = $


                    const p_bankrekening_mutatie_verwerkingen = pt.number.from.dictionary(
                        bron_jaar.Mutaties.Bankrekeningen
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            pt.dictionary.from.dictionary(
                                $['Mutatie Verwerkingen']
                            ).filter(
                                ($) => pt.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Informele rekening': return pt.ss($, ($) => $['Informele rekening']['l entry'] === context)
                                                default: return false
                                            }
                                        }))
                                        default: return false
                                    }
                                })
                            )
                        ).sum(
                            ($) => -$.Stam.Bedrag
                        )
                    )
                    const p_verrekenpost_mutaties: number = pt.number.from.dictionary(
                        bron_jaar.Mutaties.Verrekenposten
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            pt.dictionary.from.dictionary(
                                $.Mutaties
                            ).filter(
                                ($) => pt.decide.state($.Afhandeling, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Informele rekening': return pt.ss($, ($) => $['Informele rekening']['l entry'] === context)
                                                default: return false
                                            }
                                        }))
                                        default: return false
                                    }
                                })
                            )
                        ).sum(
                            ($) => - $.Bedrag
                        )
                    )
                    const p_inkopen_x: number = pt.number.from.dictionary(
                        pt.dictionary.from.dictionary(
                            p_inkopen
                        ).filter(
                            ($) => pt.decide.state($.bron.Afhandeling, ($) => {
                                switch ($[0]) {
                                    case 'Rekening courant': return pt.ss($, ($) => $['Rekening courant']['l entry'] === context)
                                    default: return false
                                }
                            })
                        )
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            $.bron.Regels
                        ).sum(
                            ($) => pt.decide.state($.Bedrag, ($): number => {
                                switch ($[0]) {
                                    case 'Bekend': return pt.ss($, ($) => - $['Bedrag inclusief geheven BTW'])
                                    default: return 0
                                }
                            })
                        )
                    )
                    const p_verkopen_x: number = pt.number.from.dictionary(
                        pt.dictionary.from.dictionary(
                            p_verkopen
                        ).filter(
                            ($) => pt.decide.state($.bron.Afhandeling, ($) => {
                                switch ($[0]) {
                                    case 'Rekening courant': return pt.ss($, ($) => $['Rekening courant']['l entry'] === context)
                                    default: return false
                                }
                            })
                        )
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            $.regels
                        ).sum(
                            ($) => $['bedrag inclusief btw']
                        )
                    )

                    const p_mutaties =
                        + p_inkopen_x
                        + p_verkopen_x
                        + p_bankrekening_mutatie_verwerkingen
                        + p_verrekenpost_mutaties

                    const p_eindsaldo = $.Beginsaldo + p_mutaties

                    const p_overgenomen = pt.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            pt.dictionary.from.dictionary(
                                $.Jaarbeheer.Balans['Informele rekeningen']
                            ).filter(
                                ($) => pt.decide.state($.Nieuw, ($) => {
                                    switch ($[0]) {
                                        case 'Nee': return pt.ss($, ($) => $.Rekening['l entry'] === context)
                                        default: return false
                                    }
                                })
                            )
                        ).sum(
                            ($) => $.Beginsaldo
                        )
                    )

                    const p_openstaand =
                        + p_eindsaldo
                        - p_overgenomen
                    return {
                        'bron': $,
                        'mutaties': {
                            'inkopen': p_inkopen_x,
                            'verkopen': p_verkopen_x,
                            'bankrekening mutatie verwerkingen': p_bankrekening_mutatie_verwerkingen,
                            'verrekenpost mutaties': p_verrekenpost_mutaties,
                        },
                        'mutatie totaal': p_mutaties,
                        'eindsaldo': p_eindsaldo,
                        'overgenomen': p_overgenomen,
                        'openstaand': p_openstaand,
                        'todo': p_openstaand !== 0,
                    }
                })


                const p_btw_periodes = pt.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Resultaat['BTW periodes']).map(($): d_out.Btw_Periode => {
                    const context = $
                    const p_inkopen_x = pt.number.from.dictionary(
                        pt.dictionary.from.dictionary(
                            p_inkopen
                        ).filter(
                            ($) => $.bron['BTW-periode']['l entry'] === context
                        )
                    ).sum(
                        ($) => $['totaal btw']
                    )
                    const p_verkopen_x = pt.number.from.dictionary(
                        pt.dictionary.from.dictionary(
                            p_verkopen
                        ).filter(
                            ($) => $.bron['BTW-periode']['l entry'] === context
                        )
                    ).sum(
                        ($) => -$['totaal btw']
                    )

                    const p_handelsmutaties =
                        + p_inkopen_x
                        + p_verkopen_x

                    const p_bankrekening_mutaties = pt.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            $.Mutaties.Bankrekeningen
                        ).sum(
                            ($) => {
                                return pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $['Mutatie Verwerkingen']
                                    ).filter(
                                        ($) => pt.decide.state($.type, ($) => {
                                            switch ($[0]) {
                                                case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'BTW-periode': return pt.ss($, ($) => $['l entry'] === context)
                                                        default: return false
                                                    }
                                                }))
                                                default: return false
                                            }
                                        })
                                    )
                                ).sum(
                                    ($) => -$.Stam.Bedrag
                                )
                            }
                        )
                    )
                    const p_verrekenpost_mutaties = pt.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            $.Mutaties.Verrekenposten
                        ).sum(
                            ($) => {
                                return pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $.Mutaties
                                    ).filter(
                                        ($) => pt.decide.state($.Afhandeling, ($) => {
                                            switch ($[0]) {
                                                case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'BTW-periode': return pt.ss($, ($) => $['l entry'] === context)
                                                        default: return false
                                                    }
                                                }))
                                                default: return false
                                            }
                                        })
                                    )
                                ).sum(
                                    ($) => -$.Bedrag
                                )
                            }
                        )
                    )
                    // const p_mutaties_totaal =
                    //     + p_inkopen_x
                    //     + p_verkopen_x
                    //     + p_bankrekening_mutaties
                    //     + p_verrekenpost_mutaties

                    const p_afhandelings_mutaties = + p_bankrekening_mutaties + p_verrekenpost_mutaties

                    const p_status: d_out.Btw_Periode['status'] = pt.decide.state($.Status, ($): d_out.Btw_Periode['status'] => {
                        switch ($[0]) {
                            case 'Aangegeven': return pt.ss($, ($) => {
                                const p_totaal_aangegeven_plus_afronding = + $.Bedrag + $.Afronding
                                return ['aangegeven', {
                                    'bron': $,
                                    'totaal aangegeven + afronding': p_totaal_aangegeven_plus_afronding,
                                    'todo niet volledig afgesloten':
                                        p_afhandelings_mutaties
                                        !==
                                        - p_totaal_aangegeven_plus_afronding,
                                    'te veel aangegeven':
                                        + p_totaal_aangegeven_plus_afronding
                                        + p_handelsmutaties,
                                }]
                            })
                            case 'Openstaand': return pt.ss($, ($) => ['openstaand', {
                                'bron': $,
                            }])
                            default: return pt.au($[0])
                        }
                    })


                    return {
                        'bron': $,
                        'handelsmutaties': {
                            'inkopen': p_inkopen_x,
                            'verkopen': p_verkopen_x,
                        },
                        'afhandeling': {
                            'betalingen': p_bankrekening_mutaties,
                            'verrekeningen': p_verrekenpost_mutaties,
                        },
                        'status': p_status,
                    }
                })

                const p_bankrekeningen = pt.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans.Bankrekeningen).map(($) => {
                    const bron_bankrekening = $
                    const p_mutaties = pt.number.from.dictionary(
                        $.Mutaties
                    ).sum(
                        ($) => $.Bedrag
                    )
                    const p_eindsaldo =
                        + $.Beginsaldo
                        + p_mutaties

                    const context = bron_bankrekening
                    const p_overgenomen = pt.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            pt.dictionary.from.dictionary(
                                $.Jaarbeheer.Balans.Bankrekeningen
                            ).filter(
                                ($) => pt.decide.state($.Nieuw, ($) => {
                                    switch ($[0]) {
                                        case 'Ja': return pt.ss($, ($) => false)
                                        case 'Nee': return pt.ss($, ($) => $.Rekening['l entry'] === context)
                                        default: return pt.au($[0])
                                    }
                                })
                            )
                        ).sum(
                            ($) => $.Beginsaldo
                        )
                    )
                    const p_openstaand =
                        + p_eindsaldo
                        - p_overgenomen
                    return {
                        'bron': $,
                        'mutaties': p_mutaties,
                        'eindsaldo': p_eindsaldo,
                        'overgenomen': p_overgenomen,
                        'openstaand': p_openstaand,
                        'todo': p_openstaand !== 0,
                    }
                })


                const p_overige_balans_items: d_out.Jaar['overige balans items'] = pt.dictionary.from.dictionary(
                    bron_jaar.Jaarbeheer.Balans['Overige balans items']
                ).map(($): d_out.Overige_Balans_Item => {
                    const context = $

                    const p_mutaties = p_variables(
                        (): d_out.Overige_Balans_Item['mutaties'] => {
                            const p_memoriaal_boekingen = pt.number.from.dictionary(
                                pt.dictionary.from.dictionary(
                                    bron_jaar.Mutaties['Overige Balans Items']
                                ).filter(
                                    ($) => $.Stam === context
                                )
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    $['Memoriaal Boekingen']
                                ).sum(
                                    ($) => $.Bedrag
                                )

                            )
                            const p_inkopen = pt.number.from.dictionary(
                                bron_jaar.Handelstransacties.Inkopen
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => pt.decide.state($.Type, ($) => $[0] === 'Balans' && pt.ss($, ($) => $['Balans item']['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => pt.decide.state($.Bedrag, ($): number => {
                                        switch ($[0]) {
                                            case 'Bekend': return pt.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                                            default: return pt.au($[0])
                                        }
                                    })
                                )
                            )

                            const p_verkopen = pt.number.from.dictionary(
                                bron_jaar.Handelstransacties.Verkopen
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => pt.decide.state($.Type, ($) => $[0] === 'Balans' && pt.ss($, ($) => $['Balans item']['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => - $['Bedrag exclusief BTW']
                                )
                            )
                            return {
                                'memoriaal boekingen': p_memoriaal_boekingen,
                                'inkopen': p_inkopen,
                                'verkopen': p_verkopen,
                                'totaal':
                                    + p_memoriaal_boekingen
                                    + p_inkopen
                                    + p_verkopen
                            }
                        }
                    )
                    const p_overgenomen = pt.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            pt.dictionary.from.dictionary(
                                $.Jaarbeheer.Balans['Overige balans items']
                            ).filter(
                                ($) => pt.decide.state($.Nieuw, ($) => {
                                    switch ($[0]) {
                                        case 'Ja': return pt.ss($, ($) => false)
                                        case 'Nee': return pt.ss($, ($) => $['Balans item']['l entry'] === context)
                                        default: return pt.au($[0])
                                    }
                                })
                            )
                        ).sum(
                            ($) => $.Beginsaldo
                        )
                    )
                    const p_eindsaldo =
                        + $.Beginsaldo
                        + p_mutaties.totaal
                    return {
                        'bron': $,
                        'mutaties': p_mutaties,
                        'eindsaldo': p_eindsaldo,
                        'overgenomen': p_overgenomen,
                        'todo': p_eindsaldo !== p_overgenomen,
                    }
                })


                const p_verrekenposten = pt.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans.Verrekenposten).map(($) => {
                    const bron_verrekenpost = $
                    const context = bron_verrekenpost
                    const p_eigen_mutaties = pt.number.from.dictionary(
                        pt.dictionary.from.dictionary(
                            bron_jaar.Mutaties.Verrekenposten
                        ).filter(
                            ($) => $.Stam === context
                        )
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            $.Mutaties
                        ).sum(
                            ($) => $.Bedrag
                        )
                    )


                    const p_bankrekening_mutaties = pt.number.from.dictionary(
                        bron_jaar.Mutaties.Bankrekeningen
                    ).sum(
                        ($) => pt.number.from.dictionary(
                            pt.dictionary.from.dictionary(
                                $['Mutatie Verwerkingen']
                            ).filter(
                                ($) => pt.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Verrekenpost': return pt.ss($, ($) => $.Verrekenpost['l entry'] === context)
                                                default: return false
                                            }
                                        }))
                                        default: return false
                                    }
                                })
                            )
                        ).sum(
                            ($) => $.Stam.Bedrag
                        )
                    )
                    const p_saldo =
                        + p_eigen_mutaties
                        - p_bankrekening_mutaties
                    return {
                        'bron': $,
                        'eigen mutaties': p_eigen_mutaties,
                        'bankrekening mutaties': p_bankrekening_mutaties,
                        'saldo': p_saldo,
                        'todo': p_saldo !== 0,
                    }
                })

                const p_inkoopsaldo = p_variables(
                    (): d_out.Balans.Post => {
                        const p_beginsaldo = bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : p_change_context(
                                $al.get_entry(
                                    bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => p_unreachable_code_path("??"),
                                        'no_such_entry': () => p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.inkoopsaldo.beginsaldo + $.inkoopsaldo.mutaties
                            )
                        const p_mutaties = p_variables(

                            (): number => {

                                const p_inkopen_x = pt.number.from.dictionary(
                                    pt.dictionary.from.dictionary(
                                        p_inkopen
                                    ).filter(
                                        ($) => pt.decide.state($.bron.Afhandeling, ($) => {
                                            switch ($[0]) {
                                                case 'Mutaties': return pt.ss($, ($) => true)
                                                default: return false
                                            }
                                        })
                                    )
                                ).sum(
                                    ($) => - $['totaal ex btw'] - $['totaal btw']
                                )
                                const p_betalingen = pt.number.from.dictionary(
                                    bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => {
                                        return pt.number.from.dictionary(
                                            pt.dictionary.from.dictionary(
                                                $['Mutatie Verwerkingen']
                                            ).filter(
                                                ($) => pt.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return pt.ss($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                        default: return false
                                                    }
                                                })
                                            )
                                        ).sum(
                                            ($) => -$.Stam.Bedrag
                                        )
                                    }
                                )
                                const p_verrekeningen = pt.number.from.dictionary(
                                    bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => {
                                        return pt.number.from.dictionary(
                                            pt.dictionary.from.dictionary(
                                                $.Mutaties
                                            ).filter(
                                                ($) => pt.decide.state($.Afhandeling, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return pt.ss($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                        default: return false
                                                    }
                                                })
                                            )
                                        ).sum(
                                            ($) => -$.Bedrag
                                        )
                                    }
                                )
                                return + p_inkopen_x
                                    + p_betalingen
                                    + p_verrekeningen
                            }
                        )
                        return {
                            'beginsaldo': p_beginsaldo,
                            'mutaties': p_mutaties,
                        }
                    }
                )

                const p_verkoopsaldo = p_variables(
                    (): d_out.Balans.Post => {
                        const p_beginsaldo = bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : p_change_context(
                                $al.get_entry(
                                    bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => p_unreachable_code_path("??"),
                                        'no_such_entry': () => p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.verkoopsaldo.beginsaldo + $.verkoopsaldo.mutaties
                            )
                        const p_mutaties = p_variables(

                            (): number => {

                                const p_verkopen_x = pt.number.from.dictionary(

                                    pt.dictionary.from.dictionary(
                                        p_verkopen
                                    ).filter(
                                        ($) => pt.decide.state($.bron.Afhandeling, ($) => {
                                            switch ($[0]) {
                                                case 'Mutaties': return pt.ss($, ($) => true)
                                                default: return false
                                            }
                                        })
                                    )).sum(
                                        ($) => $['totaal inclusief btw']
                                    )
                                const p_bankrekening_mutaties = pt.number.from.dictionary(
                                    bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => {
                                        return pt.number.from.dictionary(
                                            pt.dictionary.from.dictionary(
                                                $['Mutatie Verwerkingen']
                                            ).filter(
                                                ($) => pt.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Verkoop': return pt.ss($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                        default: return false
                                                    }
                                                })
                                            )
                                        ).sum(
                                            ($) => -$.Stam.Bedrag
                                        )
                                    }
                                )
                                const p_verrekening_mutaties = pt.number.from.dictionary(
                                    bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => {
                                        return pt.number.from.dictionary(
                                            pt.dictionary.from.dictionary(
                                                $.Mutaties
                                            ).filter(
                                                ($) => pt.decide.state($.Afhandeling, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Verkoop': return pt.ss($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                        default: return false
                                                    }
                                                })
                                            )
                                        ).sum(
                                            ($) => -$.Bedrag
                                        )
                                    }
                                )
                                return + p_verkopen_x
                                    + p_bankrekening_mutaties
                                    + p_verrekening_mutaties
                            }
                        )
                        return {
                            'beginsaldo': p_beginsaldo,
                            'mutaties': p_mutaties,
                        }
                    }
                )
                const p_btw_te_veel_aangegeven = p_variables(
                    (): d_out.Balans.Post => {
                        return {
                            'beginsaldo': bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                                ? 0
                                : p_change_context(
                                    $al.get_entry(
                                        bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                        {
                                            'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                            'no_context_lookup': () => p_unreachable_code_path("??"),
                                            'no_such_entry': () => p_unreachable_code_path("??"),
                                        }
                                    ),
                                    ($) => $.btw['te veel aangegeven'].beginsaldo + $.btw['te veel aangegeven'].mutaties
                                ),
                            'mutaties': pt.number.from.dictionary(
                                p_btw_periodes
                            ).sum(
                                ($) => {
                                    return pt.decide.state($.status, ($): number => {
                                        switch ($[0]) {
                                            case 'aangegeven': return pt.ss($, ($) => $['te veel aangegeven'])
                                            case 'openstaand': return pt.ss($, ($) => 0)
                                            default: return pt.au($[0])
                                        }
                                    })
                                }
                            ),
                        }
                    }
                )
                const p_btw_nog_aan_te_geven = p_variables(
                    (): d_out.Balans.Post => {
                        return {
                            'beginsaldo': bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                                ? 0
                                : p_change_context(
                                    $al.get_entry(
                                        bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                        {
                                            'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                            'no_context_lookup': () => p_unreachable_code_path("??"),
                                            'no_such_entry': () => p_unreachable_code_path("??"),
                                        }
                                    ),
                                    ($) => $.btw['nog aan te geven'].beginsaldo + $.btw['nog aan te geven'].mutaties
                                ),
                            'mutaties': pt.number.from.dictionary(
                                pt.dictionary.from.dictionary(
                                    p_btw_periodes
                                ).filter(($) => pt.decide.state($.status, ($): boolean => {
                                    switch ($[0]) {
                                        case 'openstaand': return pt.ss($, ($) => true)
                                        default: return false
                                    }
                                }))
                            ).sum(
                                ($) => {
                                    return + $.handelsmutaties.inkopen
                                        + $.handelsmutaties.verkopen
                                }
                            ),
                        }
                    }
                )
                const p_btw_openstaand = p_variables(
                    (): d_out.Balans.Post => {
                        return {
                            'beginsaldo': bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                                ? 0
                                : p_change_context(
                                    $al.get_entry(
                                        bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                        {
                                            'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                            'no_context_lookup': () => p_unreachable_code_path("??"),
                                            'no_such_entry': () => p_unreachable_code_path("??"),
                                        }
                                    ),
                                    ($) => $.btw.openstaand.beginsaldo + $.btw.openstaand.mutaties
                                ),
                            'mutaties':
                                + pt.number.from.dictionary(
                                    bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => pt.number.from.dictionary(
                                        pt.dictionary.from.dictionary(
                                            $['Mutatie Verwerkingen']
                                        ).filter(
                                            ($) => pt.decide.state($.type, ($): boolean => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($): boolean => {
                                                        switch ($[0]) {
                                                            case 'BTW-periode': return pt.ss($, ($) => true)
                                                            default: return false
                                                        }
                                                    }))
                                                    default: return false
                                                }
                                            })
                                        )
                                    ).sum(
                                        ($) => - $.Stam.Bedrag
                                    )
                                )
                                + pt.number.from.dictionary(
                                    bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => pt.number.from.dictionary(
                                        pt.dictionary.from.dictionary(
                                            $.Mutaties
                                        ).filter(
                                            ($) => pt.decide.state($.Afhandeling, ($): boolean => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return pt.ss($, ($) => pt.decide.state($.type, ($): boolean => {
                                                        switch ($[0]) {
                                                            case 'BTW-periode': return pt.ss($, ($) => true)
                                                            default: return false
                                                        }
                                                    }))
                                                    default: return false
                                                }
                                            })
                                        )
                                    ).sum(
                                        ($) => - $.Bedrag
                                    )
                                )
                                + pt.number.from.dictionary(
                                    p_btw_periodes
                                ).sum(
                                    ($) => {
                                        return - pt.decide.state($.status, ($): number => {
                                            switch ($[0]) {
                                                case 'aangegeven': return pt.ss($, ($) => $.bron.Bedrag)
                                                case 'openstaand': return pt.ss($, ($) => 0)
                                                default: return pt.au($[0])
                                            }
                                        })
                                    }
                                ),
                        }
                    }
                )

                const p_balans_grootboekrekeningen: d_out.Balans.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Balans.__d_map(($): d_out.Balans.Grootboekrekening => {
                    const context = $

                    const p_postgroepen: d_out.Balans.Grootboekrekening['postgroepen'] = p_variables(
                        (): d_out.Balans.Grootboekrekening['postgroepen'] => {

                            return pt.literal.dictionary<d_out.Balans.Post_Groep>({
                                "winstreserve": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": {
                                                'beginsaldo': - bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'],
                                                'mutaties': 0
                                            }
                                        })
                                        : pt.literal.dictionary({})
                                },
                                "resultaat": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": {
                                                'beginsaldo': 0,
                                                'mutaties': - resultaat,
                                            }
                                        })
                                        : pt.literal.dictionary({})
                                },

                                "inkoopsaldo": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": p_inkoopsaldo
                                        })
                                        : pt.literal.dictionary({}),
                                },
                                "verkoopsaldo": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": p_verkoopsaldo
                                        })
                                        : pt.literal.dictionary({}),
                                },
                                "btw te veel aangegeven": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": p_btw_te_veel_aangegeven
                                        })
                                        : pt.literal.dictionary({}),
                                },
                                "btw openstaand": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": p_btw_openstaand
                                        })
                                        : pt.literal.dictionary({}),
                                },
                                "btw nog aan te geven": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? pt.literal.dictionary({
                                            ".": p_btw_nog_aan_te_geven
                                        })
                                        : pt.literal.dictionary({}),
                                },
                                "bankrekeningen": {
                                    'posten': pt.dictionary.from.dictionary(
                                        p_bankrekeningen
                                    ).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    ).__d_map(($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': $.mutaties,
                                    }))
                                },
                                // "weg te boeken bankrekening mutaties": {
                                //     'posten': pt.dictionary.from.dictionary(
                                //         bron_jaar.Mutaties.Bankrekeningen
                                //     ).map_optionally<number>(
                                //         ($) => {
                                //             const openstaand: number = xxxx

                                //             return openstaand !== 0
                                //                 ? pt.literal.set(openstaand)
                                //                 : pt.literal.not_set()
                                //         }
                                //     ).__d_map(($) => ({
                                //         'beginsaldo': 0,
                                //         'mutaties': $,
                                //     }))
                                // },
                                "informele rekeningen": {
                                    'posten': pt.dictionary.from.dictionary(
                                        p_informele_rekeningen
                                    ).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    ).__d_map(($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': $['mutatie totaal'],
                                    }))
                                },
                                "overige balans items": {
                                    'posten': pt.dictionary.from.dictionary(
                                        p_overige_balans_items
                                    ).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    ).__d_map(($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': $.mutaties.totaal,
                                    }))
                                },
                            })
                        }
                    )
                    return {
                        'bron': $,
                        'postgroepen': p_postgroepen,
                        'totaal': {
                            'beginsaldo': pt.number.from.dictionary(
                                p_postgroepen
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    $.posten
                                ).sum(
                                    ($) => $.beginsaldo
                                )
                            ),
                            'mutaties': pt.number.from.dictionary(
                                p_postgroepen
                            ).sum(
                                ($) => pt.number.from.dictionary(
                                    $.posten
                                ).sum(
                                    ($) => $.mutaties
                                )
                            ),
                        }
                    }
                })

                return {
                    'bron': bron_jaar,
                    'handelstransacties': {
                        'inkopen': p_inkopen,
                        'verkopen': p_verkopen,
                    },
                    'informele rekeningen': p_informele_rekeningen,
                    'bankrekeningen': p_bankrekeningen,
                    'verrekenposten': p_verrekenposten,
                    'inkoopsaldo': p_inkoopsaldo,
                    'verkoopsaldo': p_verkoopsaldo,
                    'btw': {
                        'te veel aangegeven': p_btw_te_veel_aangegeven,
                        'nog aan te geven': p_btw_nog_aan_te_geven,
                        'openstaand': p_btw_openstaand,
                    },
                    'jaarbeheer': {
                        'resultaat': {
                            'btw periodes': p_btw_periodes,
                            'grootboekrekeningen': p_resultaat_grootboekrekeningen,
                            'resultaat': resultaat,

                        },
                        'balans': {
                            'grootboekrekeningen': p_balans_grootboekrekeningen,
                            'check balans': {
                                'begin': pt.number.from.dictionary(
                                    p_balans_grootboekrekeningen
                                ).sum(
                                    ($) => $.totaal.beginsaldo
                                ) !== 0,
                                'eind': pt.number.from.dictionary(
                                    p_balans_grootboekrekeningen
                                ).sum(
                                    ($) => $.totaal.beginsaldo + $.totaal.mutaties
                                ) !== 0,
                            },
                        }

                    },
                    'overige balans items': p_overige_balans_items,
                }
            }),
    }
}