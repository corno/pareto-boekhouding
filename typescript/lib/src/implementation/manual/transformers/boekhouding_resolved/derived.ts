import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'


//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/derived"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies

const number_from_dictionary_sum = <T>(
    dict: _pi.Dictionary<T>,
    get_value: ($: T) => number,
): number => _p.number.from.dictionary(
    dict
).sum(
    ($) => get_value($)
)

const filter_dictionary = <T, Context>(
    dict: _pi.Dictionary<T>,
    context: Context,
    filter: ($: T, context: Context) => boolean,
): _pi.Dictionary<T> => _p.dictionary.from.dictionary(
    dict
).filter(
    ($) => filter($, context)
)

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
                    'totaal btw': number_from_dictionary_sum(
                        $.Regels,
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
                    'totaal ex btw': number_from_dictionary_sum(
                        $.Regels,
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
                    'totaal btw': number_from_dictionary_sum(
                        $.Regels,
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
                    'totaal ex btw': number_from_dictionary_sum(
                        $.Regels,
                        ($) => $['Bedrag exclusief BTW']
                    ),
                }
            })

            const p_resultaat_rekeningen: d_out.Resultaat.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Resultaat.__d_map(($) => {
                const p_inkopen = number_from_dictionary_sum(
                    bron_jaar.Handelstransacties.Inkopen,
                    ($inkoop) => number_from_dictionary_sum(
                        filter_dictionary(
                            $inkoop.Regels,
                            $,
                            ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Kosten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                        ),
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
                const p_verkopen = number_from_dictionary_sum(
                    bron_jaar.Handelstransacties.Verkopen,
                    ($verkoop) => number_from_dictionary_sum(
                        filter_dictionary(
                            $verkoop.Regels,
                            $,
                            ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Opbrengsten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context))
                        ),
                        ($) => $['Bedrag exclusief BTW']
                    )
                )
                const p_memoriaal_boekingen = number_from_dictionary_sum(
                    bron_jaar.Mutaties['Overige Balans Items'],
                    ($item) => number_from_dictionary_sum(
                        filter_dictionary(
                            $item['Memoriaal Boekingen'],
                            $,
                            ($, context) => $.Grootboekrekening['l entry'] === context
                        ),
                        ($) => - $.Bedrag
                    )
                )
                const p_btw_afrondingen = number_from_dictionary_sum(
                    filter_dictionary(
                        bron_jaar.Jaarbeheer.Resultaat['BTW periodes'],
                        $,
                        ($, context) => bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context
                    ),
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
            const resultaat = number_from_dictionary_sum(
                p_resultaat_rekeningen,
                ($) => $.totaal
            )

            const p_balans_rekeningen: d_out.Balans.Grootboek_Rekeningen = bron_jaar.Grootboekrekeningen.Balans.__d_map(($) => {
                const p_inkoop_regels = number_from_dictionary_sum(
                    bron_jaar.Handelstransacties.Inkopen,
                    ($inkoop) => number_from_dictionary_sum(
                        filter_dictionary(
                            $inkoop.Regels,
                            $,
                            ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context))
                        ),
                        ($) => _p.decide.state($.Bedrag, ($): number => {
                            switch ($[0]) {
                                case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'])
                                default: return _p.au($[0])
                            }
                        })
                    )
                )
                const p_verkoop_regels = number_from_dictionary_sum(
                    bron_jaar.Handelstransacties.Verkopen,
                    ($verkoop) => number_from_dictionary_sum(
                        filter_dictionary(
                            $verkoop.Regels,
                            $,
                            ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context))
                        ),
                        ($) => $['Bedrag exclusief BTW']
                    )
                )

                const p_bankrekening_mutatie_verwerkingen = number_from_dictionary_sum(
                    bron_jaar.Mutaties.Bankrekeningen,
                    ($bankrekening) => number_from_dictionary_sum(
                        filter_dictionary(
                            $bankrekening['Mutatie Verwerkingen'],
                            $,
                            ($, context) => _p.decide.state($.type, ($) => {
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
                        ),
                        ($) => $.Stam.Bedrag
                    )
                )

                const p_bankrekeningen = number_from_dictionary_sum(
                    filter_dictionary(
                        bron_jaar.Jaarbeheer.Balans.Bankrekeningen,
                        $,
                        ($, context) => $.Grootboekrekening['l entry'] === context
                    ),
                    ($) =>
                        + number_from_dictionary_sum(
                            $.Mutaties,
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
                const p_mutaties = number_from_dictionary_sum(
                    $.Mutaties,
                    ($) => $.Bedrag
                )
                const p_eindsaldo =
                    + $.Beginsaldo
                    + p_mutaties

                const p_overgenomen = number_from_dictionary_sum(
                    bron_root.Jaren,
                    ($) => number_from_dictionary_sum(
                        filter_dictionary(
                            $.Jaarbeheer.Balans.Bankrekeningen,
                            bron_bankrekening,
                            ($, context) => _p.decide.state($.Nieuw, ($) => {
                                switch ($[0]) {
                                    case 'Ja': return _p.ss($, ($) => false)
                                    case 'Nee': return _p.ss($, ($) => $.Rekening['l entry'] === context)
                                    default: return _p.au($[0])
                                }
                            })
                        ),
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
                const p_memoriaal_mutaties = number_from_dictionary_sum(
                    filter_dictionary(
                        bron_jaar.Mutaties['Overige Balans Items'],
                        $,
                        ($, context) => $.Stam === context
                    ),
                    ($) => number_from_dictionary_sum(
                        $['Memoriaal Boekingen'],
                        ($) => - $.Bedrag
                    )

                )
                return {
                    'bron': $,
                    'memoriaal mutaties': p_memoriaal_mutaties,
                    'saldo':
                        + p_memoriaal_mutaties
                        + $.Beginsaldo
                }
            })


            const p_verrekenposten = _p.dictionary.from.dictionary(bron_jaar.Jaarbeheer.Balans.Verrekenposten).map(($) => {
                const bron_verrekenpost = $
                const p_eigen_mutaties = number_from_dictionary_sum(
                    filter_dictionary(
                        bron_jaar.Mutaties.Verrekenposten,
                        bron_verrekenpost,
                        ($, context) => $.Stam === context
                    ),
                    ($) => number_from_dictionary_sum(
                        $.Mutaties,
                        ($) => $.Bedrag
                    )
                )
                const p_bankrekening_mutaties = number_from_dictionary_sum(
                    bron_jaar.Mutaties.Bankrekeningen,
                    ($bankrekening) => number_from_dictionary_sum(
                        filter_dictionary(
                            $bankrekening['Mutatie Verwerkingen'],
                            bron_verrekenpost,
                            ($, context) => _p.decide.state($.type, ($) => {
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
                        ),
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
                const p_inkopen_x = number_from_dictionary_sum(
                    filter_dictionary(
                        p_inkopen,
                        $,
                        ($, context) => _p.decide.state($.bron['BTW-regime'], ($) => {
                            switch ($[0]) {
                                case 'Standaard': return _p.ss($, ($) => $['BTW-periode']['l entry'] === context)
                                default: return false
                            }
                        })
                    ),
                    ($) => $['totaal btw']
                )
                const p_verkopen_x = number_from_dictionary_sum(
                    filter_dictionary(
                        p_verkopen,
                        $,
                        ($, context) => $.bron['BTW-periode']['l entry'] === context
                    ),
                    ($) => $['totaal btw']
                )

                const p_betalingen = number_from_dictionary_sum(
                    bron_root.Jaren,
                    ($) => number_from_dictionary_sum(
                        $.Mutaties.Bankrekeningen,
                        ($) => number_from_dictionary_sum(
                            filter_dictionary(
                                $['Mutatie Verwerkingen'],
                                deze,
                                ($, context) => _p.decide.state($.type, ($) => {
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
                            ),
                            ($) => $.Stam.Bedrag
                        )
                    )
                )
                const p_verrekeningen = number_from_dictionary_sum(
                    bron_root.Jaren,
                    ($) => number_from_dictionary_sum(
                        $.Mutaties.Verrekenposten,
                        ($) => number_from_dictionary_sum(
                            filter_dictionary(
                                $.Mutaties,
                                deze,
                                ($, context) => _p.decide.state($.Afhandeling, ($) => {
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
                            ),
                            ($) => $.Bedrag
                        )
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