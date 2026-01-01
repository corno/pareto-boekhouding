import * as _p from 'pareto-core-serializer'

import * as d_transform_file from "../../../../interface/to_be_generated/transform_file"

import * as s_file_in_file_out from "../../schemas/file_in_file_out/serializers"
import * as s_deserialize_resolved_model from "../../../../../../implementation/generated/pareto/generic/schemas/deserialize_resolved_model/serializers"

export const My_Error = ($: d_transform_file.Error): string => {
    return _p.cc($, ($): string => {
        switch ($[0]) {
            case 'processing': return _p.ss($, ($) => `error processing: ` + s_deserialize_resolved_model.Error($))
            case 'file in file out': return _p.ss($, ($) => `file in file out: ` + s_file_in_file_out.Command_Error($))
            default: return _p.au($[0])
        }
    })
}