import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

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

//interface

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"


import { Error } from "../deserializers/primitives/text/genereer_jaarverslag"

export type Query_Resources = {
    'read file': resources_exupery.queries.read_file
}

import * as resources_exupery from "exupery-resources/dist/interface/resources"


export type Command_Resources = {
    'write file': resources_exupery.commands.write_file
}

export type Procedure = _pi.Command_Procedure<resources_exupery.commands.main, Command_Resources, Query_Resources>

//dependencies

import { $ as r_genereer_jaarverslag } from "../deserializers/primitives/text/genereer_jaarverslag"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"


export const $$: Procedure = _pc.create_command_procedure(
    ($p, $cr, $qr) => [_pc.query_without_error_transformation(
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
            ($) => _pinternals.deprecated_create_refinement_context<string, Error>((abort) => r_genereer_jaarverslag($, abort)),
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

