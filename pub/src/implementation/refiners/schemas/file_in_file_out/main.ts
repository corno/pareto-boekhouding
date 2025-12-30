import * as _pr from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

//data types
import * as d_file_in_file_out from "../../../../interface/to_be_generated/file_in_file_out"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/target"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"

//dependencies
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/node_path"

type Production<Iterartor_Element, Result, Error> = (
    iterator: _pi.Iterator<Iterartor_Element>,
    abort: _pi.Abort<Error>
) => Result


const path: Production<string, d_path.Node_Path, d_file_in_file_out.Path_Error> = (iterator, abort) => {
    const current = iterator['get current']()

    return ds_path.Node_Path(
        current.transform(
            ($) => {
                iterator.consume()
                return $
            },
            () => abort(['missing', null])
        ),
        {
            'pedantic': true,
        },
        ($) => abort(['not valid', null]),
    )
}

export const Parameters: _pi.Refiner<d_file_in_file_out.Parameters, d_file_in_file_out.Error, d_main.Parameters> = ($, abort) => {
    const iter = _pr.create_iterator($.arguments)

    const current = iter['get current']()

    const in_path = path(iter, ($) => abort(['in path', $]))
    const out_path = path(iter, ($) => abort(['out path', $]))
    iter['get current']().transform(
        ($) => abort(['too many arguments', null]),
        () => { }
    )

    return {
        'in': in_path,
        'out': out_path,
    }
}