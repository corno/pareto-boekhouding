import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_function from "../../../../../interface/to_be_generated/file_in_file_out"
import * as d_out from "pareto-resources/dist/interface/generated/liana/schemas/path/data"

export type Signature = _pi.Production<d_out.Node_Path, d_function.Path_Error, string>

//dependencies
import * as r_node_path_from_text from "pareto-resources/dist/implementation/manual/refiners/node_path/text"

export const Path: Signature = (iterator, abort) => r_node_path_from_text.Node_Path(
    iterator.consume(
        ($) => $,
        {
            no_more_tokens: () => abort(['missing', null])
        }
    ),
    ($) => abort(['not valid', null]),
    {
        'pedantic': true,
    },
)