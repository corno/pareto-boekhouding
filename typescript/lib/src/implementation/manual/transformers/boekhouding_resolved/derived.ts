import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_cc from 'pareto-core/dist/_p_change_context'
import _p_variables from 'pareto-core/dist/_p_variables'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/derived"
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

//dependencies

export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($): d_out.Root => {
    const bron_root = $
    return {
        'bron': $,
        'jaren': _p.dictionary.from.dictionary(
            $.Jaren
        ).resolve_static(
            ($, id, $al): d_out.Jaar => {
                const bron_jaar = $

                const p_inkopen: d_out.Jaar['handelstransacties']['inkopen'] = _p.dictionary.from.dictionary(
                    bron_jaar.Handelstransacties.Inkopen
                ).map(($) => {
                    return {
                        'bron': $,
                        'totaal btw': _p.number.from.dictionary(
                            $.Regels
                        ).sum(
                            ($) => _p.decide.state($.Bedrag, ($) => {
                                switch ($[0]) {
                                    case 'Bekend': return _p.ss($, ($) =>
                                        // + $['Bedrag inclusief geheven BTW']
                                        + $['BTW-bedrag']
                                    )
                                    default: return _p.au($[0])
                                }
                            })
                        ),
                        'totaal ex btw': _p.number.from.dictionary(
                            $.Regels
                        ).sum(
                            ($) => _p.decide.state($.Bedrag, ($) => {
                                switch ($[0]) {
                                    case 'Bekend': return _p.ss($, ($) =>
                                        + $['Bedrag inclusief geheven BTW']
                                        - $['BTW-bedrag']
                                    )
                                    default: return _p.au($[0])
                                }
                            })
                        ),
                    }
                })
                const p_verkopen: d_out.Jaar['handelstransacties']['verkopen'] = _p.dictionary.from.dictionary(
                    bron_jaar.Handelstransacties.Verkopen
                ).map(($) => {

                    const p_regels = _p.dictionary.from.dictionary(
                        $.Regels
                    ).map(($): d_out.Verkoop_Regel => {

                        const btw_bedrag = _p.number.from.number.divide(
                            $['Bedrag exclusief BTW'] * _p.decide.state($['BTW-regime'], ($): number => {
                                switch ($[0]) {
                                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => 0)
                                    case 'Intracommunautair': return _p.ss($, ($) => 0)
                                    case 'Standaard': return _p.ss($, ($) => _p.decide.state($['BTW-categorie']['l entry']['BTW-heffing'], ($): number => {
                                        switch ($[0]) {
                                            case 'Nee': return _p.ss($, ($) => 1000)
                                            case 'Ja': return _p.ss($, ($) => ($['BTW-promillage']))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            }),
                            1000,
                            ['towards nearest', null],
                            {
                                'divided_by_zero': () => _p_unreachable_code_path("divisor is 1000"),
                            }
                        )
                        return {
                            'bron': $,
                            'btw bedrag': btw_bedrag,
                            'bedrag inclusief btw': $['Bedrag exclusief BTW'] + btw_bedrag,
                        }
                    })
                    return {
                        'bron': $,
                        'regels': p_regels,
                        'totaal btw': _p.number.from.dictionary(
                            p_regels
                        ).sum(
                            ($) => $['btw bedrag']
                        ),
                        'totaal ex btw': _p.number.from.dictionary(
                            p_regels
                        ).sum(
                            ($) => $.bron['Bedrag exclusief BTW']
                        ),
                    }
                })

                const p_resultaat_grootboekrekeningen: d_out.Resultaat.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Resultaat.__d_map(($): d_out.Resultaat.Grootboekrekening => {
                    const context = $
                    const p_postgroepen = _p.dictionary.literal({
                        "inkopen": {
                            'totaal': _p.number.from.dictionary(
                                bron_jaar.Handelstransacties.Inkopen
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => _p.decide.state($.Type, ($) => $[0] === 'Kosten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => _p.decide.state($.Bedrag, ($): number => {
                                        switch ($[0]) {
                                            case 'Bekend': return _p.ss($, ($) =>
                                                - $['Bedrag inclusief geheven BTW']
                                                + $['BTW-bedrag']
                                            )
                                            default: return _p.au($[0])
                                        }
                                    })
                                )
                            )
                        },
                        "verkopen": {
                            'totaal': _p.number.from.dictionary(
                                bron_jaar.Handelstransacties.Verkopen
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => _p.decide.state($.Type, ($) => $[0] === 'Opbrengsten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => $['Bedrag exclusief BTW']
                                )
                            )
                        },
                        "memoriaal boekingen": {
                            'totaal': _p.number.from.dictionary(
                                bron_jaar.Mutaties['Overige Balans Items']
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
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
                            'totaal': _p.number.from.dictionary(
                                _p.dictionary.from.dictionary(
                                    bron_jaar.Jaarbeheer.Resultaat['BTW periodes']
                                ).filter(
                                    ($) => bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context
                                )
                            ).sum(
                                ($) => _p.decide.state($.Status, ($) => {
                                    switch ($[0]) {
                                        case 'Aangegeven': return _p.ss($, ($) => $.Afronding)
                                        case 'Openstaand': return _p.ss($, ($) => 0)
                                        default: return _p.au($[0])
                                    }
                                })
                            )
                        }
                    })


                    return {
                        'bron': $,
                        'postgroepen': p_postgroepen,
                        'totaal': _p.number.from.dictionary(
                            p_postgroepen
                        ).sum(
                            ($) => $.totaal
                        )
                    }
                })
                const resultaat = _p.number.from.dictionary(
                    p_resultaat_grootboekrekeningen
                ).sum(
                    ($) => $.totaal
                )
                const p_informele_rekeningen = _p.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans['Informele rekeningen']).map(($): d_out.Informele_Rekening => {
                    const context = $


                    const p_bankrekening_mutatie_verwerkingen = _p.number.from.dictionary(
                        bron_jaar.Mutaties.Bankrekeningen
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            _p.dictionary.from.dictionary(
                                $['Mutatie Verwerkingen']
                            ).filter(
                                ($) => _p.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Informele rekening': return _p.ss($, ($) => $['Informele rekening']['l entry'] === context)
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
                    const p_verrekenpost_mutaties: number = _p.number.from.dictionary(
                        bron_jaar.Mutaties.Verrekenposten
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            _p.dictionary.from.dictionary(
                                $.Mutaties
                            ).filter(
                                ($) => _p.decide.state($.Afhandeling, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Informele rekening': return _p.ss($, ($) => $['Informele rekening']['l entry'] === context)
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
                    const p_inkopen_x: number = _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            p_inkopen
                        ).filter(
                            ($) => _p.decide.state($.bron.Afhandeling, ($) => {
                                switch ($[0]) {
                                    case 'Rekening courant': return _p.ss($, ($) => $['Rekening courant']['l entry'] === context)
                                    default: return false
                                }
                            })
                        )
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            $.bron.Regels
                        ).sum(
                            ($) => _p.decide.state($.Bedrag, ($): number => {
                                switch ($[0]) {
                                    case 'Bekend': return _p.ss($, ($) => - $['Bedrag inclusief geheven BTW'])
                                    default: return 0
                                }
                            })
                        )
                    )
                    const p_verkopen_x: number = _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            p_verkopen
                        ).filter(
                            ($) => _p.decide.state($.bron.Afhandeling, ($) => {
                                switch ($[0]) {
                                    case 'Rekening courant': return _p.ss($, ($) => $['Rekening courant']['l entry'] === context)
                                    default: return false
                                }
                            })
                        )
                    ).sum(
                        ($) => _p.number.from.dictionary(
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

                    const p_overgenomen = _p.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            _p.dictionary.from.dictionary(
                                $.Jaarbeheer.Balans['Informele rekeningen']
                            ).filter(
                                ($) => _p.decide.state($.Nieuw, ($) => {
                                    switch ($[0]) {
                                        case 'Nee': return _p.ss($, ($) => $.Rekening['l entry'] === context)
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


                // const btw_mutaties = _p_variables(

                //     (): number => {

                //         const p_btw_periodes_x = _p.number.from.dictionary(
                //             p_btw_periodes
                //         ).sum(
                //             ($) => $.inkopensss
                //         )
                //         const p_betalingen = _p.number.from.dictionary(
                //             $.Mutaties.Bankrekeningen
                //         ).sum(
                //             ($) => {
                //                 return _p.number.from.dictionary(
                //                     _p.dictionary.from.dictionary(
                //                         $['Mutatie Verwerkingen']
                //                     ).filter(
                //                         ($) => _p.decide.state($.type, ($) => {
                //                             switch ($[0]) {
                //                                 case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                //                                     switch ($[0]) {
                //                                         case 'Inkoop': return _p.ss($, ($) => true)
                //                                         default: return false
                //                                     }
                //                                 }))
                //                                 default: return false
                //                             }
                //                         })
                //                     )
                //                 ).sum(
                //                     ($) => $.Stam.Bedrag
                //                 )
                //             }
                //         )
                //         const p_verrekeningen = _p.number.from.dictionary(
                //             $.Mutaties.Verrekenposten
                //         ).sum(
                //             ($) => {
                //                 return _p.number.from.dictionary(
                //                     _p.dictionary.from.dictionary(
                //                         $.Mutaties
                //                     ).filter(
                //                         ($) => _p.decide.state($.Afhandeling, ($) => {
                //                             switch ($[0]) {
                //                                 case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                //                                     switch ($[0]) {
                //                                         case 'Inkoop': return _p.ss($, ($) => true)
                //                                         default: return false
                //                                     }
                //                                 }))
                //                                 default: return false
                //                             }
                //                         })
                //                     )
                //                 ).sum(
                //                     ($) => $.Bedrag
                //                 )
                //             }
                //         )
                //         return + p_inkopen
                //             - p_betalingen
                //             - p_verrekeningen
                //     }
                // )

                const p_berekende_beginsaldo_nog_aan_te_geven_btw = bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                    ? 0
                    : _p_cc(
                        $al.get_entry(
                            bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                            {
                                'cycle_detected': () => _p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                'no_context_lookup': () => _p_unreachable_code_path("??"),
                                'no_such_entry': () => _p_unreachable_code_path("??"),
                            }
                        ),
                        ($) => $.jaarbeheer.resultaat['eindsaldo nog aan te geven BTW']
                    )

                const p_btw_periodes: _pi.Dictionary<d_out.Btw_Periode> = _p.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Resultaat['BTW periodes']).map(($) => {
                    const context = $
                    const p_inkopen_x = _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            p_inkopen
                        ).filter(
                            ($) => $.bron['BTW-periode']['l entry'] === context
                        )
                    ).sum(
                        ($) => $['totaal btw']
                    )
                    const p_verkopen_x = _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            p_verkopen
                        ).filter(
                            ($) => $.bron['BTW-periode']['l entry'] === context
                        )
                    ).sum(
                        ($) => $['totaal btw']
                    )

                    const p_betalingen = _p.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            $.Mutaties.Bankrekeningen
                        ).sum(
                            ($) => {
                                return _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
                                        $['Mutatie Verwerkingen']
                                    ).filter(
                                        ($) => _p.decide.state($.type, ($) => {
                                            switch ($[0]) {
                                                case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'BTW-periode': return _p.ss($, ($) => $['l entry'] === context)
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
                            }
                        )
                    )
                    const p_verrekeningen = _p.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            $.Mutaties.Verrekenposten
                        ).sum(
                            ($) => {
                                return _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
                                        $.Mutaties
                                    ).filter(
                                        ($) => _p.decide.state($.Afhandeling, ($) => {
                                            switch ($[0]) {
                                                case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'BTW-periode': return _p.ss($, ($) => $['l entry'] === context)
                                                        default: return false
                                                    }
                                                }))
                                                default: return false
                                            }
                                        })
                                    )
                                ).sum(
                                    ($) => $.Bedrag
                                )
                            }
                        )
                    )

                    const p_status: d_out.Btw_Periode['status'] = _p.decide.state($.Status, ($): d_out.Btw_Periode['status'] => {
                        switch ($[0]) {
                            case 'Aangegeven': return _p.ss($, ($) => ['aangegeven', {
                                'bron': $,
                                'todo niet gelijk':
                                    - $.Bedrag
                                    !==
                                    (
                                        + p_verrekeningen
                                        + p_betalingen
                                    ),

                            }])
                            case 'Openstaand': return _p.ss($, ($) => ['openstaand', {
                                'bron': $,
                            }])
                            default: return _p.au($[0])
                        }
                    })

                    const p_nog_aan_te_geven =
                        - p_inkopen_x
                        + p_verkopen_x
                        - _p.decide.state(p_status, ($): number => {
                            switch ($[0]) {
                                case 'aangegeven': return _p.ss($, ($) => $.bron.Bedrag + $.bron.Afronding)
                                case 'openstaand': return _p.ss($, ($) => 0)
                                default: return _p.au($[0])
                            }
                        })

                    return {
                        'bron': $,
                        'mutaties': {
                            'inkopen': p_inkopen_x,
                            'verkopen': p_verkopen_x,
                        },
                        'afhandeling': {
                            'betalingen': p_betalingen,
                            'verrekeningen': p_verrekeningen,
                        },
                        'status': p_status,
                        'nog aan te geven': p_nog_aan_te_geven,
                    }
                })

                const p_eindsaldo_nog_aan_te_geven_btw =
                    // + bron_jaar.Jaarbeheer.Balans['Beginsaldo nog aan te geven BTW']
                    + p_berekende_beginsaldo_nog_aan_te_geven_btw
                    + _p.number.from.dictionary(
                        p_btw_periodes
                    ).sum(
                        ($) =>
                            - $.mutaties.inkopen
                            + $.mutaties.verkopen
                            - _p.decide.state($.status, ($): number => {
                                switch ($[0]) {
                                    case 'aangegeven': return _p.ss($, ($) => $.bron.Bedrag)
                                    case 'openstaand': return _p.ss($, ($) => 0)
                                    default: return _p.au($[0])
                                }
                            })
                    )

                const p_bankrekeningen = _p.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans.Bankrekeningen).map(($) => {
                    const bron_bankrekening = $
                    const p_mutaties = _p.number.from.dictionary(
                        $.Mutaties
                    ).sum(
                        ($) => $.Bedrag
                    )
                    const p_eindsaldo =
                        + $.Beginsaldo
                        + p_mutaties

                    const context = bron_bankrekening
                    const p_overgenomen = _p.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            _p.dictionary.from.dictionary(
                                $.Jaarbeheer.Balans.Bankrekeningen
                            ).filter(
                                ($) => _p.decide.state($.Nieuw, ($) => {
                                    switch ($[0]) {
                                        case 'Ja': return _p.ss($, ($) => false)
                                        case 'Nee': return _p.ss($, ($) => $.Rekening['l entry'] === context)
                                        default: return _p.au($[0])
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


                const p_overige_balans_items: d_out.Jaar['overige balans items'] = _p.dictionary.from.dictionary(
                    bron_jaar.Jaarbeheer.Balans['Overige balans items']
                ).map(($): d_out.Overige_Balans_Item => {
                    const context = $

                    const p_mutaties = _p_variables(
                        (): d_out.Overige_Balans_Item['mutaties'] => {
                            const p_memoriaal_boekingen = _p.number.from.dictionary(
                                _p.dictionary.from.dictionary(
                                    bron_jaar.Mutaties['Overige Balans Items']
                                ).filter(
                                    ($) => $.Stam === context
                                )
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    $['Memoriaal Boekingen']
                                ).sum(
                                    ($) => - $.Bedrag
                                )

                            )
                            const p_inkopen = _p.number.from.dictionary(
                                bron_jaar.Handelstransacties.Inkopen
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => _p.decide.state($.Bedrag, ($): number => {
                                        switch ($[0]) {
                                            case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                                            default: return _p.au($[0])
                                        }
                                    })
                                )
                            )

                            const p_verkopen = _p.number.from.dictionary(
                                bron_jaar.Handelstransacties.Verkopen
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    _p.dictionary.from.dictionary(
                                        $.Regels
                                    ).filter(
                                        ($) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'] === context))
                                    )
                                ).sum(
                                    ($) => $['Bedrag exclusief BTW']
                                )
                            )
                            return {
                                'memoriaal boekingen': p_memoriaal_boekingen,
                                'inkopen': p_inkopen,
                                'verkopen': p_verkopen,
                                'totaal':
                                    + p_memoriaal_boekingen
                                    + p_inkopen
                                    - p_verkopen
                            }
                        }
                    )
                    const p_overgenomen = _p.number.from.dictionary(
                        bron_root.Jaren
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            _p.dictionary.from.dictionary(
                                $.Jaarbeheer.Balans['Overige balans items']
                            ).filter(
                                ($) => _p.decide.state($.Nieuw, ($) => {
                                    switch ($[0]) {
                                        case 'Ja': return _p.ss($, ($) => false)
                                        case 'Nee': return _p.ss($, ($) => $['Balans item']['l entry'] === context)
                                        default: return _p.au($[0])
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


                const p_verrekenposten = _p.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans.Verrekenposten).map(($) => {
                    const bron_verrekenpost = $
                    const context = bron_verrekenpost
                    const p_eigen_mutaties = _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            bron_jaar.Mutaties.Verrekenposten
                        ).filter(
                            ($) => $.Stam === context
                        )
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            $.Mutaties
                        ).sum(
                            ($) => $.Bedrag
                        )
                    )


                    const p_bankrekening_mutaties = _p.number.from.dictionary(
                        bron_jaar.Mutaties.Bankrekeningen
                    ).sum(
                        ($) => _p.number.from.dictionary(
                            _p.dictionary.from.dictionary(
                                $['Mutatie Verwerkingen']
                            ).filter(
                                ($) => _p.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Verrekenpost': return _p.ss($, ($) => $.Verrekenpost['l entry'] === context)
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

                const p_crediteuren = _p_variables(
                    (): d_out.Balans.Post => {
                        const p_beginsaldo = bron_jaar['Eerste boekjaar'][0] === 'Ja'
                            ? 0
                            : _p_cc(
                                $al.get_entry(
                                    bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => _p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => _p_unreachable_code_path("??"),
                                        'no_such_entry': () => _p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.crediteuren.beginsaldo + $.crediteuren.mutaties
                            )
                        const p_mutaties = _p_variables(

                            (): number => {

                                const p_inkopen = _p.number.from.dictionary(
                                    bron_jaar.Handelstransacties.Inkopen
                                ).sum(
                                    ($) => _p.number.from.dictionary(
                                        _p.dictionary.from.dictionary(
                                            $.Regels
                                        ).filter(
                                            ($) => _p.decide.state($.Type, ($) => $[0] === 'Kosten')
                                        )
                                    ).sum(
                                        ($) => _p.decide.state($.Bedrag, ($): number => {
                                            switch ($[0]) {
                                                case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                                                default: return _p.au($[0])
                                            }
                                        })
                                    )
                                )
                                const p_betalingen = _p.number.from.dictionary(
                                    bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => {
                                        return _p.number.from.dictionary(
                                            _p.dictionary.from.dictionary(
                                                $['Mutatie Verwerkingen']
                                            ).filter(
                                                ($) => _p.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return _p.ss($, ($) => true)
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
                                    }
                                )
                                const p_verrekeningen = _p.number.from.dictionary(
                                    bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => {
                                        return _p.number.from.dictionary(
                                            _p.dictionary.from.dictionary(
                                                $.Mutaties
                                            ).filter(
                                                ($) => _p.decide.state($.Afhandeling, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return _p.ss($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                        default: return false
                                                    }
                                                })
                                            )
                                        ).sum(
                                            ($) => $.Bedrag
                                        )
                                    }
                                )
                                return + p_inkopen
                                    - p_betalingen
                                    - p_verrekeningen
                            }
                        )
                        return {
                            'beginsaldo': p_beginsaldo,
                            'mutaties': p_mutaties,
                        }
                    }
                )

                const p_debiteuren = _p_variables(
                    (): d_out.Balans.Post => {
                        const p_beginsaldo = bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : _p_cc(
                                $al.get_entry(
                                    bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => _p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => _p_unreachable_code_path("??"),
                                        'no_such_entry': () => _p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.debiteuren.beginsaldo + $.debiteuren.mutaties
                            )
                        const p_mutaties = _p_variables(

                            (): number => {

                                const p_verkopen_x = _p.number.from.dictionary(
                                    p_verkopen
                                ).sum(
                                    ($) => _p.number.from.dictionary(
                                        _p.dictionary.from.dictionary(
                                            $.regels
                                        ).filter(
                                            ($) => _p.decide.state($.bron.Type, ($) => $[0] === 'Opbrengsten')
                                        )
                                    ).sum(
                                        ($) => $['bedrag inclusief btw']
                                    )
                                )
                                const p_betalingen = _p.number.from.dictionary(
                                    bron_jaar.Mutaties.Bankrekeningen
                                ).sum(
                                    ($) => {
                                        return _p.number.from.dictionary(
                                            _p.dictionary.from.dictionary(
                                                $['Mutatie Verwerkingen']
                                            ).filter(
                                                ($) => _p.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return _p.ss($, ($) => true)
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
                                    }
                                )
                                const p_verrekeningen = _p.number.from.dictionary(
                                    bron_jaar.Mutaties.Verrekenposten
                                ).sum(
                                    ($) => {
                                        return _p.number.from.dictionary(
                                            _p.dictionary.from.dictionary(
                                                $.Mutaties
                                            ).filter(
                                                ($) => _p.decide.state($.Afhandeling, ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return _p.ss($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                        default: return false
                                                    }
                                                })
                                            )
                                        ).sum(
                                            ($) => $.Bedrag
                                        )
                                    }
                                )
                                return + p_verkopen_x
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

                const p_balans_grootboekrekeningen: d_out.Balans.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Balans.__d_map(($): d_out.Balans.Grootboekrekening => {
                    const context = $

                    const p_postgroepen: d_out.Balans.Grootboekrekening['postgroepen'] = _p_variables(
                        (): d_out.Balans.Grootboekrekening['postgroepen'] => {

                            return _p.dictionary.literal<d_out.Balans.Post_Groep>({
                                "winstreserve": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === context
                                        ? _p.dictionary.literal({
                                            ".": {
                                                'beginsaldo': - bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'],
                                                'mutaties': 0
                                            }
                                        })
                                        : _p.dictionary.literal({})
                                },
                                "resultaat": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === context
                                        ? _p.dictionary.literal({
                                            ".": {
                                                'beginsaldo': 0,
                                                'mutaties': - resultaat,
                                            }
                                        })
                                        : _p.dictionary.literal({})
                                },

                                "crediteuren": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context
                                        ? _p.dictionary.literal({
                                            ".": p_crediteuren
                                        })
                                        : _p.dictionary.literal({}),
                                },
                                "debiteuren": {
                                    'posten': bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l entry'] === context
                                        ? _p.dictionary.literal({
                                            ".": p_debiteuren
                                        })
                                        : _p.dictionary.literal({}),
                                },
                                "bankrekeningen": {
                                    'posten': _p.dictionary.from.dictionary(
                                        p_bankrekeningen
                                    ).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    ).__d_map(($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': $.mutaties,
                                    }))
                                },
                                "informele rekeningen": {
                                    'posten': _p.dictionary.from.dictionary(
                                        p_informele_rekeningen
                                    ).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    ).__d_map(($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': $['mutatie totaal'],
                                    }))
                                },
                                // "btw periodes": _p.optional.literal.set(_p_variables(
                                //     (): d_out.Balans.Post => {
                                //         const p_beginsaldo = 0
                                //         const p_mutaties = 0



                                //         // const p_btw_periodes_x = _p.number.from.dictionary(
                                //         //     _p.dictionary.from.dictionary(
                                //         //         p_btw_periodes
                                //         //     ).filter(
                                //         //         ($) => bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                //         //     )
                                //         // ).sum(
                                //         //     ($) =>
                                //         //         - $.mutaties.inkopen
                                //         //         + $.mutaties.verkopen
                                //         // )
                                //         return {
                                //             'beginsaldo': p_beginsaldo,
                                //             'mutaties': p_mutaties,
                                //         }
                                //     }
                                // )),
                                "overige balans items": {
                                    'posten': _p.dictionary.from.dictionary(
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
                            'beginsaldo': _p.number.from.dictionary(
                                p_postgroepen
                            ).sum(
                                ($) => _p.number.from.dictionary(
                                    $.posten
                                ).sum(
                                    ($) => $.beginsaldo
                                )
                            ),
                            'mutaties': _p.number.from.dictionary(
                                p_postgroepen
                            ).sum(
                                ($) => _p.number.from.dictionary(
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
                    'crediteuren': p_crediteuren,
                    'debiteuren': p_debiteuren,
                    'jaarbeheer': {
                        'resultaat': {
                            'btw periodes': p_btw_periodes,
                            'eindsaldo nog aan te geven BTW': p_eindsaldo_nog_aan_te_geven_btw,
                            'grootboekrekeningen': p_resultaat_grootboekrekeningen,
                            'resultaat': resultaat,

                        },
                        'balans': {
                            'grootboekrekeningen': p_balans_grootboekrekeningen,
                            'check balans': {
                                'begin': _p.number.from.dictionary(
                                    p_balans_grootboekrekeningen
                                ).sum(
                                    ($) => $.totaal.beginsaldo
                                ) !== 0,
                                'eind': _p.number.from.dictionary(
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