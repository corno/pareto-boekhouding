
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/target"


export type Path_Error =
    | ['missing', null]
    | ['not valid', null]

export type Error =
    | ['in path', Path_Error]
    | ['out path', Path_Error]
    | ['too many arguments', null]

export type Parameters = {
    'in': d_path.Node_Path,
    'out': d_path.Node_Path,
}