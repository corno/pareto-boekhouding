import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'


//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/aggregatie"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import * as d_temp_aggregatie_2 from "../../../../interface/to_be_generated/aggregatie_2"

//dependencies

export const escaped: _pi.Transformer_With_Parameter<
    d_text.Text,
    d_text.Text,
    {
        'escape character code': number
        'character code': number
    }
> = ($, $p) => _p_text_from_list(
    _p_iterate(
        _p_list_from_text($, ($) => $),
        null,
        (iter) => _p_list_build_deprecated<number>(
            ($i) => {
                iter.list({
                    has_more_items: () => true,
                    handle: ($) => {
                        iter.discard(() => null)
                        if ($ === $p['escape character code']) { // \
                            $i['add item']($p['escape character code'])
                            $i['add item']($p['escape character code'])
                        } else if ($ === $p['character code']) {
                            $i['add item']($p['escape character code'])
                            $i['add item']($p['character code'])
                        } else {
                            $i['add item']($)
                        }

                    }
                })
            }

        )
    ),
    ($) => $
)

const escape_name = (parent_id: string, child_id: string): string => escaped(
    parent_id,
    {
        'character code': 0x3A, //colon
        'escape character code': 0x5C, //backslash
    }
) + ":" + child_id


const integer_from_dictionary = <T>(
    dict: _pi.Dictionary<T>,
    get_value: ($: T) => number,
): number => _p.number.integer.from.list(
    _p.list.from.dictionary(
        dict
    ).convert(($) => $)
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

const filter_and_sum_dictionary = <T, Context>(
    dict: _pi.Dictionary<T>,
    context: Context,
    filter: ($: T, context: Context) => boolean,
    get_value: ($: T) => number,
): number => integer_from_dictionary(
    filter_dictionary(
        dict,
        context,
        filter
    ),
    get_value
)

export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($): d_out.Root => {
    const bron_root = $
    return {
        'bron': $,
        'jaren': $.Jaren.__d_map(($): d_out.Jaar => {
            const bron_jaar = $


            // const informele_rekeningen = _p.dictionary.from.dictionary(
            //     $.Jaarbeheer.Balans['Informele rekeningen'].__d_map(($) => ({
            //         'bron': $,
            //         'totaal mutaties': sum_dictionary(
            //             bron_jaar.Mutaties['Memoriaal boekingen']
            //         )
            //     }))
            // )
            const inkoop_regels = _p.dictionary.from.dictionary(
                bron_jaar.Handelstransacties.Inkopen,
            ).flatten(
                ($) => $.Regels,
                escape_name,
                // (parent_id, child_id) => parent_id + ":" + child_id,
                {
                    'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
                }
            )
            const verkoop_regels = _p.dictionary.from.dictionary(
                bron_jaar.Handelstransacties.Verkopen,
            ).flatten(
                ($) => $.Regels,
                escape_name,
                // (parent_id, child_id) => parent_id + ":" + child_id,
                {
                    'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
                }
            )

            const bankrekening_mutatie_verwerkingen = _p.dictionary.from.dictionary(
                bron_jaar.Mutaties.Bankrekeningen
            ).flatten(
                ($) => $['Mutatie Verwerkingen'],
                (parent_id, child_id) => parent_id + ":" + child_id,
                {
                    'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
                }
            )

            const bankrekeningen_mutaties = _p.dictionary.from.dictionary(
                bron_jaar.Jaarbeheer.Balans.Bankrekeningen
            ).flatten(
                ($) => $.Mutaties,
                (parent_id, child_id) => parent_id + ":" + child_id,
                {
                    'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
                }
            )


            const memoriaal_boekingen = _p.dictionary.from.dictionary(
                bron_jaar.Mutaties['Overige Balans Items']
            ).flatten(
                ($) => $['Memoriaal Boekingen'],
                (parent_id, child_id) => parent_id + ":" + child_id,
                {
                    'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
                }
            )

            const verrekenposten_mutaties = _p.dictionary.from.dictionary(
                bron_jaar.Mutaties.Verrekenposten
            ).flatten(
                ($) => $.Mutaties,
                (parent_id, child_id) => parent_id + ":" + child_id,
                {
                    'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
                }
            )

            const bankrekeningen = $.Jaarbeheer.Balans.Bankrekeningen


            const Resultaat_Grootboekrekeningen2 = ($: d_in.Grootboekrekeningen.Resultaat): d_out.Resultaat.Grootboek_Rekeningen => $.__d_map(($) => {
                const p_inkopen = filter_and_sum_dictionary(
                    inkoop_regels,
                    $,
                    ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Kosten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context)),
                    ($) => _p.decide.state($.Bedrag, ($): number => {
                        switch ($[0]) {
                            case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                            default: return _p.au($[0])
                        }
                    })
                )
                const p_verkopen = filter_and_sum_dictionary(
                    verkoop_regels,
                    $,
                    ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Opbrengsten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context)),
                    ($) => $['Bedrag exclusief BTW']
                )
                const p_memoriaal_boekingen = filter_and_sum_dictionary(
                    memoriaal_boekingen,
                    $,
                    ($, context) => $.Grootboekrekening['l entry'] === context,
                    ($) => - $.Bedrag
                )
                const p_btw_afrondingen = filter_and_sum_dictionary(
                    bron_jaar.Jaarbeheer.Resultaat['BTW periodes'],
                    $,
                    ($, context) => bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context,
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
                    'totaal': - p_inkopen + p_verkopen + p_memoriaal_boekingen + p_btw_afrondingen,
                }
            })



            const resultaat_grootboekrekeningen_afgeleid = Resultaat_Grootboekrekeningen2(bron_jaar.Grootboekrekeningen.Resultaat)
            const resultaat = integer_from_dictionary(
                resultaat_grootboekrekeningen_afgeleid,
                ($) => $.totaal
            )



            const Balans_Grootboekrekeningen = (
                $: d_in.Grootboekrekeningen.Balans,
                $p: {
                    'label': string
                    'teken omkeren': boolean
                }
            ): d_temp_aggregatie_2.Domein_Zijde => {
                const p_grootboekrekeningen = $.__d_map(($) => {

                    const p_inkoop_regels = filter_and_sum_dictionary(
                        inkoop_regels,
                        $,
                        ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context)),
                        ($) => _p.decide.state($.Bedrag, ($): number => {
                            switch ($[0]) {
                                case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'])
                                default: return _p.au($[0])
                            }
                        })
                    )
                    const p_verkoop_regels = filter_and_sum_dictionary(
                        verkoop_regels,
                        $,
                        ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context)),
                        ($) => $['Bedrag exclusief BTW']
                    )

                    const p_bankrekening_mutatie_verwerkingen = filter_and_sum_dictionary(
                        bankrekening_mutatie_verwerkingen,
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
                        }),
                        ($) => $.Stam.Bedrag
                    )

                    const p_bankrekeningen = filter_and_sum_dictionary(
                        bankrekeningen,
                        $,
                        ($, context) => $.Grootboekrekening['l entry'] === context,
                        ($) =>
                            + integer_from_dictionary(
                                $.Mutaties,
                                ($) => $.Bedrag
                            )
                            + $.Beginsaldo
                    )

                    const p_resultaat = bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === $ ? resultaat : 0

                    const p_beginsaldo_winstreserve = bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === $ ? bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'] : 0

                    const inkoop_saldo: number = bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === $
                        ? integer_from_dictionary(
                            inkoop_regels,
                            ($) => _p.decide.state($.Bedrag, ($) => {
                                switch ($[0]) {
                                    case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                                    default: return _p.au($[0])
                                }
                            })
                        )
                        : 0

                    const p_bedrag: number =
                        - p_inkoop_regels
                        + p_verkoop_regels
                        + p_bankrekening_mutatie_verwerkingen
                        + p_bankrekeningen
                        - p_resultaat
                        + p_beginsaldo_winstreserve

                    // "verkopen": aggregeer_dictionary(
                    //     bron_jaar.Handelstransacties.Verkopen,
                    //     $,
                    //     ($, context) => bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context,
                    //     ($) => _p.number.natural.from.dictionary(
                    //         $.Regels
                    //     ).
                    // )
                    //jaren->grootboekrekening inkoopsaldo
                    //jaren->grootboekrekening verkoopsaldo
                    //jaren->grootboekrekening BTW periode saldo
                    //jaren->grootboekrekening nog aan te geven BTW
                    //jaren->resultaat dit jaar
                    //jaren->grootboekrekening winstreserve
                    //informele rekeningen

                    return {
                        'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                        'subcategorie': $.Stam.Subcategorie['l id'],
                        'bedrag': p_bedrag,
                    }
                })
                return {
                    'label': $p.label,
                    'teken omkeren': $p['teken omkeren'],
                    'hoofdcategorieen': _p.dictionary.from.dictionary(p_grootboekrekeningen).group(($) => $.hoofdcategorie).__d_map(($) => {
                        const subcategorieen = _p.dictionary.from.dictionary(
                            $
                        ).group(($) => $.subcategorie).__d_map(($) => ({
                            'grootboekrekeningen': $,
                            'totaal': integer_from_dictionary(
                                $,
                                ($) => $.bedrag
                            )
                        }))
                        return {
                            'subcategorieen': subcategorieen,
                            'totaal': integer_from_dictionary(
                                subcategorieen,
                                ($) => $.totaal
                            )
                        }
                    }),
                    'totaal': integer_from_dictionary(
                        p_grootboekrekeningen,
                        ($) => $.bedrag
                    ),
                }
            }

            return {
                'bankrekeningen': _p.dictionary.from.dictionary(bankrekeningen).map(($) => {
                    const bron_bankrekening = $
                    const p_mutaties = integer_from_dictionary(
                        $.Mutaties,
                        ($) => $.Bedrag
                    )
                    const p_eindsaldo =
                        + $.Beginsaldo
                        + p_mutaties

                    const p_overgenomen = integer_from_dictionary(
                        bron_root.Jaren,
                        ($) => filter_and_sum_dictionary(
                            $.Jaarbeheer.Balans.Bankrekeningen,
                            bron_bankrekening,
                            ($, context) => _p.decide.state($.Nieuw, ($) => {
                                switch ($[0]) {
                                    case 'Ja': return _p.ss($, ($) => false)
                                    case 'Nee': return _p.ss($, ($) => $.Rekening['l entry'] === context)
                                    default: return _p.au($[0])
                                }
                            }),
                            ($) => $.Beginsaldo
                        )
                    )
                    return {
                        'bron': $,
                        'mutaties': p_mutaties,
                        'eindsaldo': p_eindsaldo,
                        'overgenomen': p_overgenomen,
                        'openstaand':
                            + p_eindsaldo
                            - p_overgenomen,
                    }
                }),
                'resultaat rekeningen': resultaat_grootboekrekeningen_afgeleid,
                'resultaat': resultaat,
                'balans rekeningen': {
                    'links': Balans_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Balans).filter(($) => $.Stam.Zijde[0] === 'Activa'), { 'label': "activa", 'teken omkeren': false }),
                    'rechts': Balans_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Balans).filter(($) => $.Stam.Zijde[0] === 'Passiva'), { 'label': "passiva", 'teken omkeren': true }),

                },
            }
        }),
    }
}