import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'


//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/aggregatie"

type Possibly_Relevant_Entry<T> = {
    'is relevant': boolean
    'entry': T
}

//dependencies

const o_filter_relevant = <T>($: _pi.Dictionary<Possibly_Relevant_Entry<T>>): _pi.Dictionary<T> => {
    return _p.dictionary.from.dictionary(
        $,
    ).map_optionally(
        ($) => $['is relevant']
            ? _p.optional.literal.set($['entry'])
            : _p.optional.literal.not_set()

    )
}

export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($) => ({
    'bron': $,
    'jaren': $.Jaren.__d_map(($) => {
        const bron_jaar = $


        const Balans_Grootboekrekeningen = ($: d_in.Grootboekrekeningen.Balans, label: string): d_out.Domein_Zijde => {
            const gbr = $.__d_map(($) => ({
                'bedrag': 12345,
            }))
            return {
                'label': label,
                'grootboekrekeningen': gbr,
                'totaal': _p.number.integer.from.list(
                    _p.list.from.dictionary(gbr).convert(($, $i) => $)
                ).sum(
                    ($) => $.bedrag
                ),
            }
        }
        const Resultaat_Grootboekrekeningen = ($: d_in.Grootboekrekeningen.Resultaat, label: string): d_out.Domein_Zijde => {
            const gbr = $.__d_map(($) => ({
                'bedrag': 12345,
            }))
            return {
                'label': label,
                'grootboekrekeningen': gbr,
                'totaal': _p.number.integer.from.list(
                    _p.list.from.dictionary(gbr).convert(($, $i) => $)
                ).sum(
                    ($) => $.bedrag
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