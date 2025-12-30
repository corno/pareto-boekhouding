import * as _ps from 'pareto-core-serializer'

import * as d_file_in_file_out from "../../../../interface/to_be_generated/file_in_file_out"

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