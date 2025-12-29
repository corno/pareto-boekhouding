import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'


import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Signature = _pi.Command_Procedure<
    resources_exupery.commands.main,
    {
        'write file': resources_exupery.commands.write_file
    },
    {
        'read file': resources_exupery.queries.read_file
    }
>

//data types
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_genereer_jaarverslag from "../deserializers/primitives/text/genereer_jaarverslag"

//data
const settings = {
    'in': {
        'dir': "./data",
        'file': "plicity-boekhouding.verbose.astn",
    },
    'out': {
        'dir': "./out",
        'file': "plicity-jaarverslag.astn",
    }
}

//dependencies
import { $ as ds_genereer_jaarverslag } from "../deserializers/primitives/text/genereer_jaarverslag"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"


export const $$: Signature = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.query_without_error_transformation(
            $qr['read file'](
                t_path_to_path.create_node_path(
                    ds_path.Context_Path(settings['in']['dir']),
                    settings['in']['file'],
                ),
                ($): d_main.Error => {
                    _pdev.log_debug_message(`fout tijdens lezen data`, () => { })
                    return { 'exit code': 1 }
                }
            ).deprecated_refine_old(
                ($) => _pinternals.deprecated_create_refinement_context<string, d_genereer_jaarverslag.Error>((abort) => ds_genereer_jaarverslag($, abort)),
                ($): d_main.Error => {
                    _pdev.log_debug_message(`fout tijdens genereren jaarverslag`, () => { })
                    return { 'exit code': 1 }
                }
            ).transform_result(($) => {
                return {
                    'path': t_path_to_path.create_node_path(
                        ds_path.Context_Path(settings['out']['dir']),
                        settings['out']['file'],
                    ),
                    'data': $
                }
            }),
            ($v) => [
                $cr['write file'].execute(
                    $v,
                    ($): d_main.Error => {
                        _pdev.log_debug_message(`fout bij schrijven jaarverslag naar ${settings['out']['file']}`, () => { })
                        return ({ 'exit code': 1 })
                    },

                )
            ]
        )
    ]
)

