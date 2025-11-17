import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../interface/generated/pareto/schemas/boekhouding/data_types/source"

import * as d_out from "../../../interface/aggregatie"

import { $$ as o_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"
import { $$ as o_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/is_empty"

type Possibly_Relevant_Entry<T> = {
    'is relevant': boolean
    'entry': T
}

const o_filter_relevant = <T>($: _et.Dictionary<Possibly_Relevant_Entry<T>>): _et.Dictionary<T> => {
    return o_filter($.map(($) => $['is relevant']
        ? _ea.set($['entry'])
        : _ea.not_set()
    ))
}

export const Root = ($: d_in.Root): d_out.Root => {
    const bron_root = $
    return {
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

                                const regels: d_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.map(($) => {
                                    return {
                                        'is relevant': _ea.cc($.Type, ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return _ea.ss($, ($) => $['Balans item'].entry.Grootboekrekening.key === key)
                                                case 'Kosten': return _ea.ss($, ($) => false)
                                                default: return _ea.au($[0])
                                            }
                                        }),
                                        'entry': {
                                            'bron': $,
                                        },
                                    }
                                }))
                                return {
                                    'is relevant': regels.__get_number_of_entries() > 0,
                                    'entry': {
                                        'bron': $,
                                        'regels': regels
                                    }
                                }
                            })),
                        }
                    }),
                    'resultaat': $.Grootboekrekeningen.Resultaat.map(($, key) => {
                        return {
                            'bron': $,
                            'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.map(($) => {

                                const regels: d_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.map(($) => {
                                    return {
                                        'is relevant': _ea.cc($.Type, ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return _ea.ss($, ($) => false)
                                                case 'Kosten': return _ea.ss($, ($) => $.Grootboekrekening.key === key)
                                                default: return _ea.au($[0])
                                            }
                                        }),
                                        'entry': {
                                            'bron': $,
                                        },
                                    }
                                }))
                                return {
                                    'is relevant': regels.__get_number_of_entries() > 0,
                                    'entry': {
                                        'bron': $,
                                        'regels': regels
                                    }
                                }
                            })),
                        }
                    }),
                },
            }
        }),
    }
}
