import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'


//data types
import * as d_in from "../../../../interface/generated/pareto/schemas/boekhouding/data_types/source"
import * as d_out from "../../../../interface/to_be_generated/aggregatie"

type Possibly_Relevant_Entry<T> = {
    'is relevant': boolean
    'entry': T
}

//dependencies

const o_filter_relevant = <T>($: _pi.Dictionary<Possibly_Relevant_Entry<T>>): _pi.Dictionary<T> => {
    return $.filter(($) => $['is relevant']
        ? _pt.set($['entry'])
        : _pt.not_set()
    )
}



export const Root: _pi.Transformer<d_in.Root, d_out.Root> =($) => {
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
                                        'is relevant': _pt.cc($.Type, ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return _pt.ss($, ($) => $['Balans item'].entry.Grootboekrekening.key === key)
                                                case 'Kosten': return _pt.ss($, ($) => false)
                                                default: return _pt.au($[0])
                                            }
                                        }),
                                        'entry': {
                                            'bron': $,
                                        },
                                    }
                                }))
                                return {
                                    'is relevant': !regels.is_empty(),
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
                                        'is relevant': _pt.cc($.Type, ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return _pt.ss($, ($) => false)
                                                case 'Kosten': return _pt.ss($, ($) => $.Grootboekrekening.key === key)
                                                default: return _pt.au($[0])
                                            }
                                        }),
                                        'entry': {
                                            'bron': $,
                                        },
                                    }
                                }))
                                return {
                                    'is relevant': !regels.is_empty(),
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
