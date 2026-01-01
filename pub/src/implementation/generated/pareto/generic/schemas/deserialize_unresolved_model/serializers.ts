
import * as _ps from 'pareto-core-serializer'

import * as d_serialize_unresolved_model from "../../../../../../interface/to_be_generated/deserialize_unresolved_model"

import * as s_parse_astn_source from "../parse_astn_source/serializers"

export const Error = ($: d_serialize_unresolved_model.Error): string => {
    return _ps.cc($, ($): string => {
        switch ($[0]) {
            case 'parse error': return _ps.ss($, ($) => `parse error: ` + s_parse_astn_source.Error($))
            case 'primitive deserialization': return _ps.ss($, ($) => `primitive deserialization error: ` + $)
            default: return _ps.au($[0])
        }
    })
}