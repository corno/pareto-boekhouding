import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/derived"

//dependencies

export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($): d_out.Root => {
    const bron_root = $
    return {
        'bron': $,
        'jaren': $.Jaren.__d_map(($): d_out.Jaar => {
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
                                    + $['Bedrag inclusief geheven BTW']
                                    - $['BTW-bedrag']
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
                                case 'Bekend': return _p.ss($, ($) => $['BTW-bedrag'])
                                default: return _p.au($[0])
                            }
                        })
                    ),
                }
            })
            const p_verkopen: d_out.Jaar['handelstransacties']['verkopen'] = _p.dictionary.from.dictionary(
                bron_jaar.Handelstransacties.Verkopen
            ).map(($) => {
                return {
                    'bron': $,
                    'totaal btw': _p.number.from.dictionary(
                        $.Regels
                    ).sum(
                        ($) => $['Bedrag exclusief BTW'] * _p.decide.state($['BTW-regime'], ($): number => {
                            switch ($[0]) {
                                case 'Binnenland: heffing verlegd': return _p.ss($, ($) => 0)
                                case 'Intracommunautair': return _p.ss($, ($) => 0)
                                case 'Standaard': return _p.ss($, ($) => _p.decide.state($['BTW-categorie']['l entry']['BTW-heffing'], ($): number => {
                                    switch ($[0]) {
                                        case 'Nee': return _p.ss($, ($) => 0)
                                        case 'Ja': return _p.ss($, ($) => $['BTW-promillage'] / 100)
                                        default: return _p.au($[0])
                                    }
                                }))
                                default: return _p.au($[0])
                            }
                        })
                    ),
                    'totaal ex btw': _p.number.from.dictionary(
                        $.Regels
                    ).sum(
                        ($) => $['Bedrag exclusief BTW']
                    ),
                }
            })

            const p_resultaat_rekeningen: d_out.Resultaat.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Resultaat.__d_map(($) => {
                const context = $
                const p_inkopen = _p.number.from.dictionary(
                    bron_jaar.Handelstransacties.Inkopen
                ).sum(
                    ($inkoop) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $inkoop.Regels
                        ).filter(
                            ($) => _p.decide.state($.Type, ($) => $[0] === 'Kosten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                        )
                    ).sum(
                        ($) => _p.decide.state($.Bedrag, ($): number => {
                            switch ($[0]) {
                                case 'Bekend': return _p.ss($, ($) =>
                                    +$['Bedrag inclusief geheven BTW']
                                    - $['BTW-bedrag']
                                )
                                default: return _p.au($[0])
                            }
                        })
                    )
                )
                const p_verkopen = _p.number.from.dictionary(
                    bron_jaar.Handelstransacties.Verkopen
                ).sum(
                    ($verkoop) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $verkoop.Regels
                        ).filter(
                            ($) => _p.decide.state($.Type, ($) => $[0] === 'Opbrengsten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                        )
                    ).sum(
                        ($) => $['Bedrag exclusief BTW']
                    )
                )
                const p_memoriaal_boekingen = _p.number.from.dictionary(
                    bron_jaar.Mutaties['Overige Balans Items']
                ).sum(
                    ($item) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $item['Memoriaal Boekingen']
                        ).filter(
                            ($) => $.Grootboekrekening['l entry'] === context
                        )
                    ).sum(
                        ($) => - $.Bedrag
                    )
                )
                const p_btw_afrondingen = _p.number.from.dictionary(
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
                return {
                    'bron': $,
                    'inkopen': p_inkopen,
                    'verkopen': p_verkopen,
                    'memoriaal boekingen': p_memoriaal_boekingen,
                    'btw afrondingen': p_btw_afrondingen,
                    'totaal':
                        - p_inkopen
                        + p_verkopen
                        + p_memoriaal_boekingen
                        + p_btw_afrondingen,
                }
            })
            const resultaat = _p.number.from.dictionary(
                p_resultaat_rekeningen
            ).sum(
                ($) => $.totaal
            )

            const p_balans_rekeningen: d_out.Balans.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Balans.__d_map(($) => {
                const context = $
                const p_inkoop_regels = _p.number.from.dictionary(
                    bron_jaar.Handelstransacties.Inkopen
                ).sum(
                    ($inkoop) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $inkoop.Regels
                        ).filter(
                            ($) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context))
                        )
                    ).sum(
                        ($) => _p.decide.state($.Bedrag, ($): number => {
                            switch ($[0]) {
                                case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'])
                                default: return _p.au($[0])
                            }
                        })
                    )
                )
                const p_verkoop_regels = _p.number.from.dictionary(
                    bron_jaar.Handelstransacties.Verkopen
                ).sum(
                    ($verkoop) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $verkoop.Regels
                        ).filter(
                            ($) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context))
                        )
                    ).sum(
                        ($) => $['Bedrag exclusief BTW']
                    )
                )

                const p_bankrekening_mutatie_verwerkingen = _p.number.from.dictionary(
                    bron_jaar.Mutaties.Bankrekeningen
                ).sum(
                    ($bankrekening) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $bankrekening['Mutatie Verwerkingen']
                        ).filter(
                            ($) => _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'Resultaat': return _p.ss($, ($) => false)
                                    case 'Balans': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'Informele rekening': return _p.ss($, ($) => $['Informele rekening']['l entry'].Grootboekrekening['l entry'] === context)
                                            case 'Verrekenpost': return _p.ss($, ($) => false)
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        )
                    ).sum(
                        ($) => $.Stam.Bedrag
                    )
                )

                const p_bankrekeningen = _p.number.from.dictionary(
                    _p.dictionary.from.dictionary(
                        bron_jaar.Jaarbeheer.Balans.Bankrekeningen
                    ).filter(
                        ($) => $.Grootboekrekening['l entry'] === context
                    )
                ).sum(
                    ($) =>
                        + _p.number.from.dictionary(
                            $.Mutaties
                        ).sum(
                            ($) => $.Bedrag
                        )
                        + $.Beginsaldo
                )

                const p_resultaat = bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === $ ? resultaat : 0

                const p_beginsaldo_winstreserve = bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === $ ? bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'] : 0

                // const inkoop_saldo: number = bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === $
                //     ? number_from_dictionary_sum(
                //         inkoop_regels,
                //         ($) => _p.decide.state($.Bedrag, ($) => {
                //             switch ($[0]) {
                //                 case 'Bekend': return _p.ss($, ($) =>
                //                     + $['Bedrag inclusief geheven BTW']
                //                     - $['BTW-bedrag']
                //                 )
                //                 default: return _p.au($[0])
                //             }
                //         })
                //     )
                //     : 0

                const p_bedrag: number =
                    - p_inkoop_regels
                    + p_verkoop_regels
                    + p_bankrekening_mutatie_verwerkingen
                    + p_bankrekeningen
                    - p_resultaat
                    + p_beginsaldo_winstreserve
                return {
                    'bron': $,
                    'totaal': p_bedrag,
                }
            })

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
            ).map(($) => {
                const bron_overige_balans_item = $
                const context = $
                const p_memoriaal_mutaties = _p.number.from.dictionary(
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
                    ($inkoop) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $inkoop.Regels
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
                    ($verkoop) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $verkoop.Regels
                        ).filter(
                            ($) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'] === context))
                        )
                    ).sum(
                        ($) => $['Bedrag exclusief BTW']
                    )
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
                const p_saldo =
                    + $.Beginsaldo
                    - p_memoriaal_mutaties
                    + p_inkopen
                    - p_verkopen
                return {
                    'bron': $,
                    'memoriaal mutaties': p_memoriaal_mutaties,
                    'inkopen': p_inkopen,
                    'verkopen': p_verkopen,
                    'overgenomen': p_overgenomen,
                    'saldo': p_saldo,
                    'todo': p_saldo !== p_overgenomen,
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
                    ($bankrekening) => _p.number.from.dictionary(
                        _p.dictionary.from.dictionary(
                            $bankrekening['Mutatie Verwerkingen']
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

            const p_btw_periodes: _pi.Dictionary<d_out.Btw_Periode> = _p.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Resultaat['BTW periodes']).map(($) => {
                const deze = $
                const context = $
                const p_inkopen_x = _p.number.from.dictionary(
                    _p.dictionary.from.dictionary(
                        p_inkopen
                    ).filter(
                        ($) => _p.decide.state($.bron['BTW-regime'], ($) => {
                            switch ($[0]) {
                                case 'Standaard': return _p.ss($, ($) => $['BTW-periode']['l entry'] === context)
                                default: return false
                            }
                        })
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
                            const context = deze
                            return _p.number.from.dictionary(
                                _p.dictionary.from.dictionary(
                                    $['Mutatie Verwerkingen']
                                ).filter(
                                    ($) => _p.decide.state($.type, ($) => {
                                        switch ($[0]) {
                                            case 'Balans': return _p.ss($, ($) => false)
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
                            const context = deze
                            return _p.number.from.dictionary(
                                _p.dictionary.from.dictionary(
                                    $.Mutaties
                                ).filter(
                                    ($) => _p.decide.state($.Afhandeling, ($) => {
                                        switch ($[0]) {
                                            case 'Balans': return _p.ss($, ($) => false)
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

                return {
                    'bron': $,
                    'inkopen': p_inkopen_x,
                    'verkopen': p_verkopen_x,
                    'betalingen': p_betalingen,
                    'verrekeningen': p_verrekeningen,
                    'status': _p.decide.state($.Status, ($): d_out.Btw_Periode['status'] => {
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
                    }),
                }
            })

            return {
                'handelstransacties': {
                    'inkopen': p_inkopen,
                    'verkopen': p_verkopen,
                },
                'bankrekeningen': p_bankrekeningen,
                'verrekenposten': p_verrekenposten,
                'btw periodes': p_btw_periodes,
                'overige balans items': p_overige_balans_items,
                'resultaat grootboekrekeningen': p_resultaat_rekeningen,
                'resultaat': resultaat,
                'balans grootboekrekeningen': p_balans_rekeningen,
            }
        }),
    }
}