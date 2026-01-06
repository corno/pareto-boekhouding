import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'


//data types
import * as d_in from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/source"
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
    'jaren': $.Jaren.dictionary.map(($) => {
        const bron_jaar = $
        return {
            'bron': $,
            'grootboekrekeningen': {
                'balans': $.Grootboekrekeningen.Balans.map(($, key): d_out.Balans_Grootboekrekening => {
                    return {
                        'bron': $,
                        'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.map(($) => {

                            const regels: d_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.map(($) => ({
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
                'resultaat': $.Grootboekrekeningen.Resultaat.map(($, key) => ({
                    'bron': $,
                    'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.map(($) => {

                        const regels: d_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.map(($) => {
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