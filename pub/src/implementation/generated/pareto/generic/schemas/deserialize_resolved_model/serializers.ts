import * as _ps from 'pareto-core-serializer'

import * as d_serialize_resolved_model from "../../../../../../interface/to_be_generated/deserialize_resolved_model"

import * as s_deserialize_unresolved_model from "../deserialize_unresolved_model/serializers"

export const Error = ($: d_serialize_resolved_model.Error): string => {
    return _ps.cc($, ($): string => {
        switch ($[0]) {
            case 'pre resolving': return _ps.ss($, ($) => `pre resolving: ` + s_deserialize_unresolved_model.Error($))
            case 'resolving': return _ps.ss($, ($) => `resolving: ` )
            default: return _ps.au($[0])
        }
    })
}