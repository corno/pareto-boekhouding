import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_temp from 'pareto-core/dist/implementation/refiner'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'
import p_variables from 'pareto-core/dist/implementation/transformer/specials/variables'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/data/derived"
import $p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'

//dependencies

export const Root: p_i.Transformer<d_in.Root, d_out.Root> = ($) => {
    const bron_root = $
    return {
        'bron': $,
        'jaren': p_temp.from.dictionary($.Jaren
        ).resolve(
            ($, id, $al): d_out.Jaar => {
                const $v_bron_jaar = $

                const $p_inkopen: d_out.Jaar['handelstransacties']['inkopen'] = p_.from.dictionary($v_bron_jaar.Handelstransacties.Inkopen
                ).map(
                    ($) => {
                        return {
                            'bron': $,
                            'totaal btw': p_.from.dictionary($.Regels
                            ).sum(
                                ($) => p_.from.state($.Bedrag).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Bekend': return p_.ss($, ($) =>
                                                // + $['Bedrag inclusief geheven BTW']
                                                + $['BTW-bedrag']
                                            )
                                            default: return p_.au($[0])
                                        }
                                    })
                            ),
                            'totaal ex btw': p_.from.dictionary($.Regels
                            ).sum(
                                ($) => p_.from.state($.Bedrag).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Bekend': return p_.ss($, ($) =>
                                                + $['Bedrag inclusief geheven BTW']
                                                - $['BTW-bedrag']
                                            )
                                            default: return p_.au($[0])
                                        }
                                    })
                            ),
                        }
                    })
                const $p_verkopen: d_out.Jaar['handelstransacties']['verkopen'] = p_.from.dictionary($v_bron_jaar.Handelstransacties.Verkopen
                ).map(
                    ($) => {

                        const $p_regels = p_.from.dictionary($.Regels
                        ).map(
                            ($): d_out.Verkoop_Regel => {

                                const btw_bedrag = p_.from.number(
                                    $['Bedrag exclusief BTW'] * p_.from.state($['BTW-regime']).decide(
                                        ($): number => {
                                            switch ($[0]) {
                                                case 'Binnenland: heffing verlegd': return p_.ss($, ($) => 0)
                                                case 'Intracommunautair': return p_.ss($, ($) => 0)
                                                case 'Standaard': return p_.ss($, ($) => p_.from.state($['BTW-categorie']['l entry']['BTW-heffing']).decide(
                                                    ($): number => {
                                                        switch ($[0]) {
                                                            case 'Nee': return p_.ss($, ($) => 0)
                                                            case 'Ja': return p_.ss($, ($) => ($['BTW-promillage']))
                                                            default: return p_.au($[0])
                                                        }
                                                    }))
                                                default: return p_.au($[0])
                                            }
                                        })
                                ).divide(
                                    1000,
                                    ['towards nearest', null],
                                    {
                                        'divided_by_zero': () => $p_unreachable_code_path("divisor is 1000"),
                                    }
                                )
                                return {
                                    'bron': $,
                                    'btw bedrag': btw_bedrag,
                                    'bedrag inclusief btw': $['Bedrag exclusief BTW'] + btw_bedrag,

                                }
                            })
                        const totaal_btw = p_.from.dictionary($p_regels
                        ).sum(
                            ($) => $['btw bedrag']
                        )
                        const totaal_ex_btw = p_.from.dictionary($p_regels
                        ).sum(
                            ($) => $.bron['Bedrag exclusief BTW']
                        )
                        return {
                            'bron': $,
                            'regels': $p_regels,
                            'totaal btw': totaal_btw,
                            'totaal ex btw': totaal_ex_btw,
                            'totaal inclusief btw': totaal_ex_btw + totaal_btw,
                        }
                    })

                const $p_resultaat_grootboekrekeningen: d_out.Resultaat.Grootboek_Rekeningen = $v_bron_jaar.Grootboekrekeningen.Resultaat.__d_map_deprecated(
                    ($): d_out.Resultaat.Grootboekrekening => {
                        const context = $
                        const $p_postgroepen = p_.literal.dictionary({
                            "inkopen": {
                                'totaal': p_.from.dictionary($v_bron_jaar.Handelstransacties.Inkopen
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($.Regels
                                        ).filter(
                                            ($) => p_.from.state($.Type).decide(
                                                ($) => $[0] === 'Kosten' && p_.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                                        )
                                    ).sum(
                                        ($) => p_.from.state($.Bedrag).decide(
                                            ($): number => {
                                                switch ($[0]) {
                                                    case 'Bekend': return p_.ss($, ($) =>
                                                        - $['Bedrag inclusief geheven BTW']
                                                        + $['BTW-bedrag']
                                                    )
                                                    default: return p_.au($[0])
                                                }
                                            })
                                    )
                                )
                            },
                            "verkopen": {
                                'totaal': p_.from.dictionary($v_bron_jaar.Handelstransacties.Verkopen
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($.Regels
                                        ).filter(
                                            ($) => p_.from.state($.Type).decide(
                                                ($) => $[0] === 'Opbrengsten' && p_.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                                        )
                                    ).sum(
                                        ($) => $['Bedrag exclusief BTW']
                                    )
                                )
                            },
                            "memoriaal boekingen": {
                                'totaal': p_.from.dictionary($v_bron_jaar.Mutaties['Overige Balans Items']
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($['Memoriaal Boekingen']
                                        ).filter(
                                            ($) => $.Grootboekrekening['l entry'] === context
                                        )
                                    ).sum(
                                        ($) => $.Bedrag
                                    )
                                )
                            },
                            "btw afrondingen": {
                                'totaal': p_.from.dictionary(p_.from.dictionary($v_bron_jaar.Jaarbeheer.Resultaat['BTW periodes']
                                    ).filter(
                                        ($) => $v_bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context
                                    )
                                ).sum(
                                    ($) => p_.from.state($.Status).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Aangegeven': return p_.ss($, ($) => $.Afronding)
                                                case 'Openstaand': return p_.ss($, ($) => 0)
                                                default: return p_.au($[0])
                                            }
                                        })
                                )
                            }
                        })


                        return {
                            'bron': $,
                            'postgroepen': $p_postgroepen,
                            'totaal': p_.from.dictionary($p_postgroepen
                            ).sum(
                                ($) => $.totaal
                            )
                        }
                    })
                const resultaat = p_.from.dictionary($p_resultaat_grootboekrekeningen
                ).sum(
                    ($) => $.totaal
                )
                const $p_informele_rekeningen = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans['Informele rekeningen']
                ).map(
                    ($): d_out.Informele_Rekening => {
                        const context = $


                        const $p_bankrekening_mutatie_verwerkingen = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen
                        ).sum(
                            ($) => p_.from.dictionary(p_.from.dictionary($['Mutatie Verwerkingen']
                                ).filter(
                                    ($) => p_.from.state($.type).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return p_.ss($, ($) => p_.from.state($).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Informele rekening': return p_.ss($, ($) => $['Informele rekening']['l entry'] === context)
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
                        const $p_verrekenpost_mutaties: number = p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten
                        ).sum(
                            ($) => p_.from.dictionary(p_.from.dictionary($.Mutaties
                                ).filter(
                                    ($) => p_.from.state($.Afhandeling).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return p_.ss($, ($) => p_.from.state($).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Informele rekening': return p_.ss($, ($) => $['Informele rekening']['l entry'] === context)
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
                        const $p_inkopen_x: number = p_.from.dictionary(p_.from.dictionary($p_inkopen
                            ).filter(
                                ($) => p_.from.state($.bron.Afhandeling).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Rekening courant': return p_.ss($, ($) => $['Rekening courant']['l entry'] === context)
                                            default: return false
                                        }
                                    })
                            )
                        ).sum(
                            ($) => p_.from.dictionary($.bron.Regels
                            ).sum(
                                ($) => p_.from.state($.Bedrag).decide(
                                    ($): number => {
                                        switch ($[0]) {
                                            case 'Bekend': return p_.ss($, ($) => - $['Bedrag inclusief geheven BTW'])
                                            default: return 0
                                        }
                                    })
                            )
                        )
                        const $p_verkopen_x: number = p_.from.dictionary(p_.from.dictionary($p_verkopen
                            ).filter(
                                ($) => p_.from.state($.bron.Afhandeling).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Rekening courant': return p_.ss($, ($) => $['Rekening courant']['l entry'] === context)
                                            default: return false
                                        }
                                    })
                            )
                        ).sum(
                            ($) => p_.from.dictionary($.regels
                            ).sum(
                                ($) => $['bedrag inclusief btw']
                            )
                        )

                        const $p_mutaties =
                            + $p_inkopen_x
                            + $p_verkopen_x
                            + $p_bankrekening_mutatie_verwerkingen
                            + $p_verrekenpost_mutaties

                        const $p_eindsaldo = $.Beginsaldo + $p_mutaties

                        const $p_overgenomen = p_.from.dictionary(bron_root.Jaren
                        ).sum(
                            ($) => p_.from.dictionary(p_.from.dictionary($.Jaarbeheer.Balans['Informele rekeningen']
                                ).filter(
                                    ($) => p_.from.state($.Nieuw).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Nee': return p_.ss($, ($) => $.Rekening['l entry'] === context)
                                                default: return false
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Beginsaldo
                            )
                        )

                        const $p_openstaand =
                            + $p_eindsaldo
                            - $p_overgenomen
                        return {
                            'bron': $,
                            'mutaties': {
                                'inkopen': $p_inkopen_x,
                                'verkopen': $p_verkopen_x,
                                'bankrekening mutatie verwerkingen': $p_bankrekening_mutatie_verwerkingen,
                                'verrekenpost mutaties': $p_verrekenpost_mutaties,
                            },
                            'mutatie totaal': $p_mutaties,
                            'eindsaldo': $p_eindsaldo,
                            'overgenomen': $p_overgenomen,
                            'openstaand': $p_openstaand,
                            'todo': $p_openstaand !== 0,
                        }
                    })


                const $p_btw_periodes = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Resultaat['BTW periodes']).map(
                    ($): d_out.Btw_Periode => {
                        const context = $
                        const $p_inkopen_x = p_.from.dictionary(p_.from.dictionary($p_inkopen
                            ).filter(
                                ($) => $.bron['BTW-periode']['l entry'] === context
                            )
                        ).sum(
                            ($) => $['totaal btw']
                        )
                        const $p_verkopen_x = p_.from.dictionary(p_.from.dictionary($p_verkopen
                            ).filter(
                                ($) => $.bron['BTW-periode']['l entry'] === context
                            )
                        ).sum(
                            ($) => -$['totaal btw']
                        )

                        const $p_handelsmutaties =
                            + $p_inkopen_x
                            + $p_verkopen_x

                        const $p_bankrekening_mutaties = p_.from.dictionary(bron_root.Jaren
                        ).sum(
                            ($) => p_.from.dictionary($.Mutaties.Bankrekeningen
                            ).sum(
                                ($) => {
                                    return p_.from.dictionary(p_.from.dictionary($['Mutatie Verwerkingen']
                                        ).filter(
                                            ($) => p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.ss($, ($) => $['l entry'] === context)
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
                        const $p_verrekenpost_mutaties = p_.from.dictionary(bron_root.Jaren
                        ).sum(
                            ($) => p_.from.dictionary($.Mutaties.Verrekenposten
                            ).sum(
                                ($) => {
                                    return p_.from.dictionary(p_.from.dictionary($.Mutaties
                                        ).filter(
                                            ($) => p_.from.state($.Afhandeling).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.ss($, ($) => $['l entry'] === context)
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
                        // const $p_mutaties_totaal =
                        //     + $p_inkopen_x
                        //     + $p_verkopen_x
                        //     + $p_bankrekening_mutaties
                        //     + $p_verrekenpost_mutaties

                        const $p_afhandelings_mutaties = + $p_bankrekening_mutaties + $p_verrekenpost_mutaties

                        const $p_status: d_out.Btw_Periode['status'] = p_.from.state($.Status).decide(
                            ($): d_out.Btw_Periode['status'] => {
                                switch ($[0]) {
                                    case 'Aangegeven': return p_.ss($, ($) => {
                                        const $p_totaal_aangegeven_plus_afronding = + $.Bedrag + $.Afronding
                                        return ['aangegeven', {
                                            'bron': $,
                                            'totaal aangegeven + afronding': $p_totaal_aangegeven_plus_afronding,
                                            'todo niet volledig afgesloten':
                                                $p_afhandelings_mutaties
                                                !==
                                                - $p_totaal_aangegeven_plus_afronding,
                                            'te veel aangegeven':
                                                + $p_totaal_aangegeven_plus_afronding
                                                + $p_handelsmutaties,
                                        }]
                                    })
                                    case 'Openstaand': return p_.ss($, ($) => ['openstaand', {
                                        'bron': $,
                                    }])
                                    default: return p_.au($[0])
                                }
                            })


                        return {
                            'bron': $,
                            'handelsmutaties': {
                                'inkopen': $p_inkopen_x,
                                'verkopen': $p_verkopen_x,
                            },
                            'afhandeling': {
                                'betalingen': $p_bankrekening_mutaties,
                                'verrekeningen': $p_verrekenpost_mutaties,
                            },
                            'status': $p_status,
                        }
                    })

                const $p_bankrekeningen = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans.Bankrekeningen).map(
                    ($) => {
                        const bron_bankrekening = $
                        const $p_mutaties = p_.from.dictionary($.Mutaties
                        ).sum(
                            ($) => $.Bedrag
                        )
                        const $p_eindsaldo =
                            + $.Beginsaldo
                            + $p_mutaties

                        const context = bron_bankrekening
                        const $p_overgenomen = p_.from.dictionary(bron_root.Jaren
                        ).sum(
                            ($) => p_.from.dictionary(p_.from.dictionary($.Jaarbeheer.Balans.Bankrekeningen
                                ).filter(
                                    ($) => p_.from.state($.Nieuw).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Ja': return p_.ss($, ($) => false)
                                                case 'Nee': return p_.ss($, ($) => $.Rekening['l entry'] === context)
                                                default: return p_.au($[0])
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Beginsaldo
                            )
                        )
                        const $p_openstaand =
                            + $p_eindsaldo
                            - $p_overgenomen
                        return {
                            'bron': $,
                            'mutaties': $p_mutaties,
                            'eindsaldo': $p_eindsaldo,
                            'overgenomen': $p_overgenomen,
                            'openstaand': $p_openstaand,
                            'todo': $p_openstaand !== 0,
                        }
                    })


                const $p_overige_balans_items: d_out.Jaar['overige balans items'] = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans['Overige balans items']
                ).map(
                    ($): d_out.Overige_Balans_Item => {
                        const context = $

                        const $p_mutaties = p_variables(
                            (): d_out.Overige_Balans_Item['mutaties'] => {
                                const $p_memoriaal_boekingen = p_.from.dictionary(p_.from.dictionary($v_bron_jaar.Mutaties['Overige Balans Items']
                                    ).filter(
                                        ($) => $.Stam === context
                                    )
                                ).sum(
                                    ($) => p_.from.dictionary($['Memoriaal Boekingen']
                                    ).sum(
                                        ($) => $.Bedrag
                                    )

                                )
                                const $p_inkopen = p_.from.dictionary($v_bron_jaar.Handelstransacties.Inkopen
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($.Regels
                                        ).filter(
                                            ($) => p_.from.state($.Type).decide(
                                                ($) => $[0] === 'Balans' && p_.ss($, ($) => $['Balans item']['l entry'] === context))
                                        )
                                    ).sum(
                                        ($) => p_.from.state($.Bedrag).decide(
                                            ($): number => {
                                                switch ($[0]) {
                                                    case 'Bekend': return p_.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                                                    default: return p_.au($[0])
                                                }
                                            })
                                    )
                                )

                                const $p_verkopen = p_.from.dictionary($v_bron_jaar.Handelstransacties.Verkopen
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($.Regels
                                        ).filter(
                                            ($) => p_.from.state($.Type).decide(
                                                ($) => $[0] === 'Balans' && p_.ss($, ($) => $['Balans item']['l entry'] === context))
                                        )
                                    ).sum(
                                        ($) => - $['Bedrag exclusief BTW']
                                    )
                                )
                                return {
                                    'memoriaal boekingen': $p_memoriaal_boekingen,
                                    'inkopen': $p_inkopen,
                                    'verkopen': $p_verkopen,
                                    'totaal':
                                        + $p_memoriaal_boekingen
                                        + $p_inkopen
                                        + $p_verkopen
                                }
                            }
                        )
                        const $p_overgenomen = p_.from.dictionary(bron_root.Jaren
                        ).sum(
                            ($) => p_.from.dictionary(p_.from.dictionary($.Jaarbeheer.Balans['Overige balans items']
                                ).filter(
                                    ($) => p_.from.state($.Nieuw).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Ja': return p_.ss($, ($) => false)
                                                case 'Nee': return p_.ss($, ($) => $['Balans item']['l entry'] === context)
                                                default: return p_.au($[0])
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Beginsaldo
                            )
                        )
                        const $p_eindsaldo =
                            + $.Beginsaldo
                            + $p_mutaties.totaal
                        return {
                            'bron': $,
                            'mutaties': $p_mutaties,
                            'eindsaldo': $p_eindsaldo,
                            'overgenomen': $p_overgenomen,
                            'todo': $p_eindsaldo !== $p_overgenomen,
                        }
                    })


                const $p_verrekenposten = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans.Verrekenposten).map(
                    ($) => {
                        const bron_verrekenpost = $
                        const context = bron_verrekenpost
                        const $p_eigen_mutaties = p_.from.dictionary(p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten
                            ).filter(
                                ($) => $.Stam === context
                            )
                        ).sum(
                            ($) => p_.from.dictionary($.Mutaties
                            ).sum(
                                ($) => $.Bedrag
                            )
                        )


                        const $p_bankrekening_mutaties = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen
                        ).sum(
                            ($) => p_.from.dictionary(p_.from.dictionary($['Mutatie Verwerkingen']
                                ).filter(
                                    ($) => p_.from.state($.type).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return p_.ss($, ($) => p_.from.state($).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Verrekenpost': return p_.ss($, ($) => $.Verrekenpost['l entry'] === context)
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
                        const $p_saldo =
                            + $p_eigen_mutaties
                            - $p_bankrekening_mutaties
                        return {
                            'bron': $,
                            'eigen mutaties': $p_eigen_mutaties,
                            'bankrekening mutaties': $p_bankrekening_mutaties,
                            'saldo': $p_saldo,
                            'todo': $p_saldo !== 0,
                        }
                    })

                const $p_inkoopsaldo = p_variables(
                    (): d_out.Balans.Post => {
                        const $p_beginsaldo = $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : p_change_context(
                                $al.get_entry(
                                    $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => $p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => $p_unreachable_code_path("??"),
                                        'no_such_entry': () => $p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.inkoopsaldo.beginsaldo + $.inkoopsaldo.mutaties
                            )
                        const $p_mutaties = p_variables(

                            (): number => {

                                const $p_inkopen_x = p_.from.dictionary(p_.from.dictionary($p_inkopen
                                    ).filter(
                                        ($) => p_.from.state($.bron.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Mutaties': return p_.ss($, ($) => true)
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => - $['totaal ex btw'] - $['totaal btw']
                                )
                                const $p_betalingen = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => {
                                        return p_.from.dictionary(p_.from.dictionary($['Mutatie Verwerkingen']
                                            ).filter(
                                                ($) => p_.from.state($.type).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                                ($) => {
                                                                    switch ($[0]) {
                                                                        case 'Inkoop': return p_.ss($, ($) => true)
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
                                const $p_verrekeningen = p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => {
                                        return p_.from.dictionary(p_.from.dictionary($.Mutaties
                                            ).filter(
                                                ($) => p_.from.state($.Afhandeling).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                                ($) => {
                                                                    switch ($[0]) {
                                                                        case 'Inkoop': return p_.ss($, ($) => true)
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
                                return + $p_inkopen_x
                                    + $p_betalingen
                                    + $p_verrekeningen
                            }
                        )
                        return {
                            'beginsaldo': $p_beginsaldo,
                            'mutaties': $p_mutaties,
                        }
                    }
                )

                const $p_verkoopsaldo = p_variables(
                    (): d_out.Balans.Post => {
                        const $p_beginsaldo = $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : p_change_context(
                                $al.get_entry(
                                    $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => $p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => $p_unreachable_code_path("??"),
                                        'no_such_entry': () => $p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.verkoopsaldo.beginsaldo + $.verkoopsaldo.mutaties
                            )
                        const $p_mutaties = p_variables(

                            (): number => {

                                const $p_verkopen_x = p_.from.dictionary(
                                    p_.from.dictionary($p_verkopen
                                    ).filter(
                                        ($) => p_.from.state($.bron.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Mutaties': return p_.ss($, ($) => true)
                                                    default: return false
                                                }
                                            })
                                    )).sum(
                                        ($) => $['totaal inclusief btw']
                                    )
                                const $p_bankrekening_mutaties = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => {
                                        return p_.from.dictionary(p_.from.dictionary($['Mutatie Verwerkingen']
                                            ).filter(
                                                ($) => p_.from.state($.type).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                                ($) => {
                                                                    switch ($[0]) {
                                                                        case 'Verkoop': return p_.ss($, ($) => true)
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
                                const $p_verrekening_mutaties = p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => {
                                        return p_.from.dictionary(p_.from.dictionary($.Mutaties
                                            ).filter(
                                                ($) => p_.from.state($.Afhandeling).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                                ($) => {
                                                                    switch ($[0]) {
                                                                        case 'Verkoop': return p_.ss($, ($) => true)
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
                                return + $p_verkopen_x
                                    + $p_bankrekening_mutaties
                                    + $p_verrekening_mutaties
                            }
                        )
                        return {
                            'beginsaldo': $p_beginsaldo,
                            'mutaties': $p_mutaties,
                        }
                    }
                )
                const $p_btw_te_veel_aangegeven = p_variables(
                    (): d_out.Balans.Post => {
                        return {
                            'beginsaldo': $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                                ? 0
                                : p_change_context(
                                    $al.get_entry(
                                        $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                        {
                                            'cycle_detected': () => $p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                            'no_context_lookup': () => $p_unreachable_code_path("??"),
                                            'no_such_entry': () => $p_unreachable_code_path("??"),
                                        }
                                    ),
                                    ($) => $.btw['te veel aangegeven'].beginsaldo + $.btw['te veel aangegeven'].mutaties
                                ),
                            'mutaties': p_.from.dictionary($p_btw_periodes
                            ).sum(
                                ($) => {
                                    return p_.from.state($.status).decide(
                                        ($): number => {
                                            switch ($[0]) {
                                                case 'aangegeven': return p_.ss($, ($) => $['te veel aangegeven'])
                                                case 'openstaand': return p_.ss($, ($) => 0)
                                                default: return p_.au($[0])
                                            }
                                        })
                                }
                            ),
                        }
                    }
                )
                const $p_btw_nog_aan_te_geven = p_variables(
                    (): d_out.Balans.Post => {
                        return {
                            'beginsaldo': $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                                ? 0
                                : p_change_context(
                                    $al.get_entry(
                                        $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                        {
                                            'cycle_detected': () => $p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                            'no_context_lookup': () => $p_unreachable_code_path("??"),
                                            'no_such_entry': () => $p_unreachable_code_path("??"),
                                        }
                                    ),
                                    ($) => $.btw['nog aan te geven'].beginsaldo + $.btw['nog aan te geven'].mutaties
                                ),
                            'mutaties': p_.from.dictionary(p_.from.dictionary($p_btw_periodes
                                ).filter(
                                    ($) => p_.from.state($.status).decide(
                                        ($): boolean => {
                                            switch ($[0]) {
                                                case 'openstaand': return p_.ss($, ($) => true)
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
                const $p_btw_openstaand = p_variables(
                    (): d_out.Balans.Post => {
                        return {
                            'beginsaldo': $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                                ? 0
                                : p_change_context(
                                    $al.get_entry(
                                        $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                        {
                                            'cycle_detected': () => $p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                            'no_context_lookup': () => $p_unreachable_code_path("??"),
                                            'no_such_entry': () => $p_unreachable_code_path("??"),
                                        }
                                    ),
                                    ($) => $.btw.openstaand.beginsaldo + $.btw.openstaand.mutaties
                                ),
                            'mutaties':
                                + p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($['Mutatie Verwerkingen']
                                        ).filter(
                                            ($) => p_.from.state($.type).decide(
                                                ($): boolean => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                            ($): boolean => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.ss($, ($) => true)
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
                                + p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => p_.from.dictionary(p_.from.dictionary($.Mutaties
                                        ).filter(
                                            ($) => p_.from.state($.Afhandeling).decide(
                                                ($): boolean => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.ss($, ($) => p_.from.state($.type).decide(
                                                            ($): boolean => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.ss($, ($) => true)
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
                                + p_.from.dictionary($p_btw_periodes
                                ).sum(
                                    ($) => {
                                        return - p_.from.state($.status).decide(
                                            ($): number => {
                                                switch ($[0]) {
                                                    case 'aangegeven': return p_.ss($, ($) => $.bron.Bedrag)
                                                    case 'openstaand': return p_.ss($, ($) => 0)
                                                    default: return p_.au($[0])
                                                }
                                            })
                                    }
                                ),
                        }
                    }
                )

                const $p_balans_grootboekrekeningen: d_out.Balans.Grootboek_Rekeningen = $v_bron_jaar.Grootboekrekeningen.Balans.__d_map_deprecated(
                    ($): d_out.Balans.Grootboekrekening => {
                        const context = $

                        const $p_postgroepen: d_out.Balans.Grootboekrekening['postgroepen'] = p_variables(
                            (): d_out.Balans.Grootboekrekening['postgroepen'] => {

                                return p_.literal.dictionary<d_out.Balans.Post_Groep>({
                                    "winstreserve": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": {
                                                    'beginsaldo': - $v_bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'],
                                                    'mutaties': 0
                                                }
                                            })
                                            : p_.literal.dictionary({})
                                    },
                                    "resultaat": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": {
                                                    'beginsaldo': 0,
                                                    'mutaties': - resultaat,
                                                }
                                            })
                                            : p_.literal.dictionary({})
                                    },

                                    "inkoopsaldo": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": $p_inkoopsaldo
                                            })
                                            : p_.literal.dictionary({}),
                                    },
                                    "verkoopsaldo": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": $p_verkoopsaldo
                                            })
                                            : p_.literal.dictionary({}),
                                    },
                                    "btw te veel aangegeven": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": $p_btw_te_veel_aangegeven
                                            })
                                            : p_.literal.dictionary({}),
                                    },
                                    "btw openstaand": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": $p_btw_openstaand
                                            })
                                            : p_.literal.dictionary({}),
                                    },
                                    "btw nog aan te geven": {
                                        'posten': $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                            ? p_.literal.dictionary({
                                                ".": $p_btw_nog_aan_te_geven
                                            })
                                            : p_.literal.dictionary({}),
                                    },
                                    "bankrekeningen": {
                                        'posten': p_.from.dictionary($p_bankrekeningen
                                        ).map_optionally(
                                            ($) => $.bron.Grootboekrekening['l entry'] === context
                                                ? p_.literal.set({
                                                    'beginsaldo': $.bron.Beginsaldo,
                                                    'mutaties': $.mutaties,
                                                })
                                                : p_.literal.not_set()
                                        )
                                    },
                                    // "weg te boeken bankrekening mutaties": {
                                    //     'posten': p_.from.dictionary(//         bron_jaar.Mutaties.Bankrekeningen
                                    //     ).ma$p_optionally<number>(
                                    //         ($) => {
                                    //             const openstaand: number = xxxx

                                    //             return openstaand !== 0
                                    //                 ? p_.literal.set(openstaand)
                                    //                 : p_.literal.not_set()
                                    //         }
                                    //     ).__d_ map_deprecated(
                                    // ($) => ({
                                    //         'beginsaldo': 0,
                                    //         'mutaties': $,
                                    //     }))
                                    // },
                                    "informele rekeningen": {
                                        'posten': p_.from.dictionary($p_informele_rekeningen
                                        ).filter(
                                            ($) => $.bron.Grootboekrekening['l entry'] === context
                                        ).__d_map_deprecated(
                                            ($) => ({
                                                'beginsaldo': $.bron.Beginsaldo,
                                                'mutaties': $['mutatie totaal'],
                                            }))
                                    },
                                    "overige balans items": {
                                        'posten': p_.from.dictionary($p_overige_balans_items
                                        ).filter(
                                            ($) => $.bron.Grootboekrekening['l entry'] === context
                                        ).__d_map_deprecated(
                                            ($) => ({
                                                'beginsaldo': $.bron.Beginsaldo,
                                                'mutaties': $.mutaties.totaal,
                                            }))
                                    },
                                })
                            }
                        )
                        return {
                            'bron': $,
                            'postgroepen': $p_postgroepen,
                            'totaal': {
                                'beginsaldo': p_.from.dictionary($p_postgroepen
                                ).sum(
                                    ($) => p_.from.dictionary($.posten
                                    ).sum(
                                        ($) => $.beginsaldo
                                    )
                                ),
                                'mutaties': p_.from.dictionary($p_postgroepen
                                ).sum(
                                    ($) => p_.from.dictionary($.posten
                                    ).sum(
                                        ($) => $.mutaties
                                    )
                                ),
                            }
                        }
                    })

                return {
                    'bron': $v_bron_jaar,
                    'handelstransacties': {
                        'inkopen': $p_inkopen,
                        'verkopen': $p_verkopen,
                    },
                    'informele rekeningen': $p_informele_rekeningen,
                    'bankrekeningen': $p_bankrekeningen,
                    'verrekenposten': $p_verrekenposten,
                    'inkoopsaldo': $p_inkoopsaldo,
                    'verkoopsaldo': $p_verkoopsaldo,
                    'btw': {
                        'te veel aangegeven': $p_btw_te_veel_aangegeven,
                        'nog aan te geven': $p_btw_nog_aan_te_geven,
                        'openstaand': $p_btw_openstaand,
                    },
                    'jaarbeheer': {
                        'resultaat': {
                            'btw periodes': $p_btw_periodes,
                            'grootboekrekeningen': $p_resultaat_grootboekrekeningen,
                            'resultaat': resultaat,

                        },
                        'balans': {
                            'grootboekrekeningen': $p_balans_grootboekrekeningen,
                            'check balans': {
                                'begin': p_.from.dictionary($p_balans_grootboekrekeningen
                                ).sum(
                                    ($) => $.totaal.beginsaldo
                                ) !== 0,
                                'eind': p_.from.dictionary($p_balans_grootboekrekeningen
                                ).sum(
                                    ($) => $.totaal.beginsaldo + $.totaal.mutaties
                                ) !== 0,
                            },
                        }

                    },
                    'overige balans items': $p_overige_balans_items,
                }
            }),
    }
}