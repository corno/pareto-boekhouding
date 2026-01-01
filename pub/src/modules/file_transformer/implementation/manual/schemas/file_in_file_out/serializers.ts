import * as _ps from 'pareto-core-serializer'

//data types
import * as d_file_in_file_out from "../../../../interface/to_be_generated/file_in_file_out"

//dependencies
import * as t_read_file from "pareto-resources/dist/implementation/manual/schemas/read_file/transformers/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"
import * as s_file_in_file_out from "./serializers"
import * as s_deserialize_resolved_schema from "../../../../../../implementation/generated/pareto/generic/schemas/deserialize_resolved_model/serializers"

export const Path_Error = ($: d_file_in_file_out.Path_Error): string => {
    return _ps.cc($, ($) => {
        switch ($[0]) {
            case 'missing': return _ps.ss($, ($) => `missing`)
            case 'not valid': return _ps.ss($, ($) => `not valid`)
            default: return _ps.au($[0])
        }
    })
}


export const Error = ($: d_file_in_file_out.Error): string => {
    return _ps.cc($, ($): string => {
        switch ($[0]) {
            case 'too many arguments': return _ps.ss($, ($) => `too many arguments`)
            case 'in path': return _ps.ss($, ($) => `in path: ` + Path_Error($))
            case 'out path': return _ps.ss($, ($) => `out path: ` + Path_Error($))
            default: return _ps.au($[0])
        }
    })
}

export const Command_Error = ($: d_file_in_file_out.Command_Error): string => {
    return _ps.cc($, ($): string => {
        switch ($[0]) {
            case 'command line arguments': return _ps.ss($, ($) => `command line arguments: ` + s_file_in_file_out.Error($))
            case 'reading file': return _ps.ss($, ($) => `error reading: ` + s_fp.Block_Part(t_read_file.Error($), { 'indentation': `    `, 'newline': '\n' }))
            case 'deserializing': return _ps.ss($, ($) => `error deserializing: ` + s_deserialize_resolved_schema.Error($))
            case 'writing file': return _ps.ss($, ($) => `error writing file`)
            default: return _ps.au($[0])
        }
    })
}