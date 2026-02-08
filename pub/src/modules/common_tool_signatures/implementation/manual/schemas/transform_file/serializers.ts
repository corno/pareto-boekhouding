import * as _p from 'pareto-core/dist/assign'

import * as d_transform_file from "../../../../interface/to_be_generated/transform_file"

import * as s_file_in_file_out from "../file_in_file_out/transformers/fountain_pen"

// export const My_Error = ($: d_transform_file.Error): string => {
//     return _p.decide.state($, ($): string => {
//         switch ($[0]) {
//             case 'processing': return _p.ss($, ($) => "error processing: " plus $)
//             case 'file in file out': return _p.ss($, ($) => "file in file out: " plus s_file_in_file_out.Command_Error($))
//             default: return _p.au($[0])
//         }
//     })
// }