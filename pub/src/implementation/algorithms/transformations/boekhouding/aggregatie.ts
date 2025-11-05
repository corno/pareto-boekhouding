import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _i_in from "../../../../interface/generated/pareto/schemas/boekhouding/data_types/source"

import { $$ as o_filter } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/filter"
import { $$ as o_is_empty } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/is_empty"

type Possibly_Relevant_Entry<T> = {
    'is related': boolean
    'entry': T
}

const o_filter_relevant = <T>($: _et.Dictionary<Possibly_Relevant_Entry<T>>): _et.Dictionary<T> => {
    return o_filter($.map(($) => $['is related']
        ? _ea.set($['entry'])
        : _ea.not_set()
    ))
}

namespace _i_out {
    export type Root = {
        'bron': _i_in.Root
        'jaren': _et.Dictionary<Jaar>
    }

    export type Jaar = {
        'bron': _i_in.Jaren.D
        'grootboekrekeningen': {
            'balans': _et.Dictionary<Balans_Grootboekrekening>
            'resultaat': _et.Dictionary<Resultaat_Grootboekrekening>
        }
    }

    export type Balans_Grootboekrekening = {
        'bron': _i_in.Grootboekrekeningen.Balans.D
        'gerelateerde inkopen': _et.Dictionary<{
            'bron': _i_in.Handelstransacties.Inkopen.D
            'regels': _et.Dictionary<_i_out.Gerelateerde_Inkoop_Regel>
        }>
    }

    export type Gerelateerde_Inkoop_Regels = _et.Dictionary<Gerelateerde_Inkoop_Regel>

    export type Gerelateerde_Inkoop_Regel = {
        'bron': _i_in.Handelstransacties.Inkopen.D.Regels.D
    }

    export type Resultaat_Grootboekrekening = {
        'bron': _i_in.Grootboekrekeningen.Resultaat.D
    }
}

export const Root = ($: _i_in.Root): _i_out.Root => {
    const bron_root = $
    return {
        'bron': $,
        'jaren': $.Jaren.dictionary.map(($) => {
            const bron_jaar = $
            return {
                'bron': $,
                'grootboekrekeningen': {
                    'balans': $.Grootboekrekeningen.Balans.map(($): _i_out.Balans_Grootboekrekening => {
                        const bron_grootboekrekening = $
                        return {
                            'bron': $,
                            'gerelateerde inkopen': o_filter_relevant(bron_jaar.Handelstransacties.Inkopen.map(($) => {

                                const regels: _i_out.Gerelateerde_Inkoop_Regels = o_filter_relevant($.Regels.map(($) => {
                                    return {
                                        'is related': _ea.cc($.Type, ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return _ea.ss($, ($) => $['Balans item'].entry.Grootboekrekening.entry ===  bron_grootboekrekening)
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
                                    'is related': true,
                                    'entry': {
                                        'bron': $,
                                        'regels': regels
                                    }
                                }
                            })),
                        }
                    }),
                    'resultaat': $.Grootboekrekeningen.Resultaat.map(($) => ({
                        'bron': $,
                    })),
                },
            }
        }),
    }
}
