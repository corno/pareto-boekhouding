import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'


//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/aggregatie"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

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

export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($) => ({
    'bron': $,
    'jaren': $.Jaren.__d_map(($) => {
        const bron_jaar = $


        const Inkoop_regels = _p.dictionary.from.dictionary(
            bron_jaar.Handelstransacties.Inkopen,
        ).flatten(
            ($) => $.Regels,
            (parent_id, child_id) => escaped(
                parent_id,
                {
                    'character code': 0x3A, //colon
                    'escape character code': 0x5C, //backslash
                }
            ) + ":" + child_id,
            // (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )


        const Balans_Grootboekrekeningen = ($: d_in.Grootboekrekeningen.Balans, label: string): d_out.Domein_Zijde => {
            const p_grootboekrekeningen = $.__d_map(($, id) => {

                const inkoop_regels = _p.dictionary.from.dictionary(
                    _p.dictionary.from.dictionary(Inkoop_regels).filter(($) => _p.decide.state($.Type, ($) => {
                        return $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l id'] === id)
                    }))
                ).map_optionally(($) => _p.decide.state($.Bedrag, ($): _pi.Optional_Value<number> => {
                    switch ($[0]) {
                        case 'Bekend': return _p.ss($, ($) => _p.optional.literal.set($['Bedrag inclusief geheven BTW']))
                        default: return _p.au($[0])
                    }
                }))

                return {
                    'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                    'subcategorie': $.Stam.Subcategorie['l id'],
                    'bedrag': _p.number.integer.from.list(
                        _p.list.from.dictionary(inkoop_regels).convert(($) => $)
                    ).sum(
                        ($) => $
                    ),
                }
            })
            return {
                'label': label,
                'hoofdcategorieen': _p.dictionary.from.dictionary(p_grootboekrekeningen).group(($, id) => $.hoofdcategorie).__d_map(($) => {
                    const subcategorieen = _p.dictionary.from.dictionary($).group(($, id) => $.subcategorie).__d_map(($) => ({
                        'grootboekrekeningen': $,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary($).convert(($) => $)
                        ).sum(
                            ($) => $.bedrag
                        )
                    }))
                    return {
                        'subcategorieen': subcategorieen,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary(subcategorieen).convert(($) => $.totaal)
                        ).sum(
                            ($) => $
                        )
                    }
                }),
                'totaal': _p.number.integer.from.list(_p.list.nested_literal_old([
                    _p.list.from.dictionary(p_grootboekrekeningen).convert(($) => $.bedrag)
                ])).sum(
                    ($) => $
                ),
            }
        }
        const Resultaat_Grootboekrekeningen = ($: d_in.Grootboekrekeningen.Resultaat, label: string): d_out.Domein_Zijde => {
            const p_grootboekrekeningen = $.__d_map(($, id) => {
                const inkoop_regels = _p.dictionary.from.dictionary(
                    _p.dictionary.from.dictionary(Inkoop_regels).filter(($) => _p.decide.state($.Type, ($) => $[0] === 'Kosten' && _p.ss($, ($) => $.Grootboekrekening['l id'] === id)))
                ).map_optionally(($) => _p.decide.state($.Bedrag, ($): _pi.Optional_Value<number> => {
                    switch ($[0]) {
                        case 'Bekend': return _p.ss($, ($) => _p.optional.literal.set($['Bedrag inclusief geheven BTW']))
                        default: return _p.au($[0])
                    }
                }))
                return {
                    'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                    'subcategorie': $.Stam.Subcategorie['l id'],
                    'bedrag': _p.number.integer.from.list(
                        _p.list.from.dictionary(inkoop_regels).convert(($) => $)
                    ).sum(
                        ($) => $
                    ),
                }
            })


            return {
                'label': label,
                'hoofdcategorieen': _p.dictionary.from.dictionary(p_grootboekrekeningen).group(($, id) => $.hoofdcategorie).__d_map(($) => {
                    const subcategorieen = _p.dictionary.from.dictionary($).group(($, id) => $.subcategorie).__d_map(($) => ({
                        'grootboekrekeningen': $,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary($).convert(($) => $)
                        ).sum(
                            ($) => $.bedrag
                        )
                    }))
                    return {
                        'subcategorieen': subcategorieen,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary(subcategorieen).convert(($) => $.totaal)
                        ).sum(
                            ($) => $
                        )
                    }
                }),
                'totaal': _p.number.integer.from.list(_p.list.nested_literal_old([
                    _p.list.from.dictionary(p_grootboekrekeningen).convert(($) => $.bedrag)
                ])).sum(
                    ($) => $
                ),
            }
        }

        // const balans_grootboekrekeningen = $.Grootboekrekeningen.Balans.__d_map(($, id): d_out.Grootboekrekening => {
        //     return {
        //         'bedrag': 123.23,
        //     }
        // })
        // const resultaat_grootboekrekeningen = $.Grootboekrekeningen.Resultaat.__d_map(($, id) => ({
        //     // 'bron': $,
        //     'bedrag': 123.23,
        //     // 'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.__d_map(($) => {

        //     //     const regels = o_filter_relevant($.Regels.__d_map(($) => {
        //     //         return {
        //     //             'is relevant': _p.decide.state($.Type, ($) => {
        //     //                 switch ($[0]) {
        //     //                     case 'Balans': return _p.ss($, ($) => false)
        //     //                     case 'Kosten': return _p.ss($, ($) => $.Grootboekrekening['l id'] === id)
        //     //                     default: return _p.au($[0])
        //     //                 }
        //     //             }),
        //     //             'entry': {
        //     //                 'bron': $,
        //     //             },
        //     //         }
        //     //     }))
        //     //     return {
        //     //         'is relevant': !(regels.__get_number_of_entries() === 0),
        //     //         'entry': {
        //     //             'bron': $,
        //     //             'regels': regels
        //     //         }
        //     //     }
        //     // })),
        // }))
        return {
            'grootboekrekeningen': {
                'balans': {
                    'links': Balans_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Balans).filter(($) => $.Stam.Zijde[0] === 'Activa'), "activa"),
                    'rechts': Balans_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Balans).filter(($) => $.Stam.Zijde[0] === 'Passiva'), "passiva"),

                },
                'resultaat': {
                    'links': Resultaat_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Resultaat).filter(($) => $.Stam.Zijde[0] === 'Kosten'), "kosten"),
                    'rechts': Resultaat_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Resultaat).filter(($) => $.Stam.Zijde[0] === 'Opbrengsten'), "opbrengsten"),
                }
            },
        }
    }),
})