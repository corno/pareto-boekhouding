import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"

import { $$ as temp_func } from "../../../temp_funcs/genereer_jaarverslag"

const settings = {
    'in': "./data/plicity-boekhouding.verbose.astn",
    'out filename': "./out/plicity-jaarverslag.astn",
}

export type Resources = {
    'queries': {
        'read file': _et.Unguaranteed_Query<d_read_file.Parameters, d_read_file.Result, d_read_file.Error, null>
    },
    'procedures': {
        'write file': _et.Unguaranteed_Procedure<d_write_file.Parameters, d_write_file.Error, null>
    }
}

export const $$: _et.Unguaranteed_Procedure<_eb.Parameters, _eb.Error, Resources> = ($p, $r) => {
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_error) => {
            $r.queries['read file'](
                {
                    'path': settings['in'],
                    'escape spaces in path': true
                },
                null,
            ).__start(
                (file_content) => {
                    temp_func(file_content).process(
                        ($) => {
                            $r.procedures['write file'](
                                {
                                    'path': {
                                        'path': settings['out filename'],
                                        'escape spaces in path': true,
                                    },
                                    'data': $
                                },
                                null,
                            ).__start(
                                on_success,
                                ($) => {
                                    on_error({ 'exit code': 1 })

                                }
                            )
                        },
                        ($) => {
                            _ed.log_debug_message($[0], () => { })
                            on_error({ 'exit code': 1 })
                        }
                    )

                },
                () => {
                    _ed.log_debug_message("Could not read input file", () => { })
                    on_error({ 'exit code': 1 })
                }
            )
        }
    })
}