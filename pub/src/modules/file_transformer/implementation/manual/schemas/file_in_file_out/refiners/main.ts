import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

//data types
import * as d_file_in_file_out from "../../../../../interface/to_be_generated/file_in_file_out"
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"

//dependencies
import * as p_file_in_file_out from "../productions/text"

export const Parameters: _pi.Refiner<
    d_file_in_file_out.Parameters,
    d_file_in_file_out.Error,
    d_main.Parameters
> = ($, abort) => {
    const iter = _p.create_iterator($.arguments)

    const current = iter['get current']()

    const in_path = p_file_in_file_out.Path(iter, ($) => abort(['in path', $]))
    const out_path = p_file_in_file_out.Path(iter, ($) => abort(['out path', $]))
    iter['get current']().transform(
        ($) => abort(['too many arguments', null]),
        () => { }
    )

    return {
        'in': in_path,
        'out': out_path,
    }
}