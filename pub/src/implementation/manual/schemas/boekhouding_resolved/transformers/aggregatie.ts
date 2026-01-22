import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'


//data types
import * as d_in from "../../../../../interface/generated/liana/schemas/boekhouding/data"
import * as d_out from "../../../../../interface/to_be_generated/aggregatie"

type Possibly_Relevant_Entry<T> = {
    'is relevant': boolean
    'entry': T
}

//dependencies

const o_filter_relevant = <T>($: _pi.Dictionary<Possibly_Relevant_Entry<T>>): _pi.Dictionary<T> => {
    return _p.dictionary.filter(
        $,
        ($) => $['is relevant']
            ? _p.optional.set($['entry'])
            : _p.optional.not_set()

    )
}



export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($) => ({
    'bron': $,
    'jaren': $.Jaren.dictionary.__d_map(($) => {
        const bron_jaar = $
        return {
            'bron': $,
            'grootboekrekeningen': {
                'balans': $.Grootboekrekeningen.Balans.__d_map(($, key): d_out.Balans_Grootboekrekening => {
                    return {
                        'bron': $,
                        'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.__d_map(($) => {

                            const regels: d_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.__d_map(($) => ({
                                'is relevant': _p.sg($.Type, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return _p.ss($, ($) => $['Balans item'].entry.Grootboekrekening.key === key)
                                        case 'Kosten': return _p.ss($, ($) => false)
                                        default: return _p.au($[0])
                                    }
                                }),
                                'entry': {
                                    'bron': $,
                                },
                            })))
                            return {
                                'is relevant': !(regels.__get_number_of_entries() === 0),
                                'entry': {
                                    'bron': $,
                                    'regels': regels
                                }
                            }
                        })),
                    }
                }),
                'resultaat': $.Grootboekrekeningen.Resultaat.__d_map(($, key) => ({
                    'bron': $,
                    'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.__d_map(($) => {

                        const regels: d_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.__d_map(($) => {
                            return {
                                'is relevant': _p.sg($.Type, ($) => {
                                    switch ($[0]) {
                                        case 'Balans': return _p.ss($, ($) => false)
                                        case 'Kosten': return _p.ss($, ($) => $.Grootboekrekening.key === key)
                                        default: return _p.au($[0])
                                    }
                                }),
                                'entry': {
                                    'bron': $,
                                },
                            }
                        }))
                        return {
                            'is relevant': !(regels.__get_number_of_entries() === 0),
                            'entry': {
                                'bron': $,
                                'regels': regels
                            }
                        }
                    })),
                })),
            },
        }
    }),
})