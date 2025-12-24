import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

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


import { Error } from "../refiners/genereer_jaarverslag"

export type Query_Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}

import { Signature } from "../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"


export type Procedure = _et.Command_Procedure<_et.Command<d_main.Error, d_main.Parameters>, Command_Resources, Query_Resources>

//dependencies

import { $ as r_genereer_jaarverslag } from "../refiners/genereer_jaarverslag"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"


export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [_easync.p.query_without_error_transformation(
        $qr['read file'](
            t_path_to_path.create_node_path(
                ds_path.Context_Path(settings['in']['dir']),
                settings['in']['file'],
            ),
            ($): d_main.Error => {
                _ed.log_debug_message(`fout tijdens lezen data`, () => { })
                return { 'exit code': 1 }
            }
        ).deprecated_refine_old(
            ($) => r_genereer_jaarverslag({
                'file content': $
            }),
            ($): d_main.Error => {
                _ed.log_debug_message(`fout tijdens genereren jaarverslag`, () => { })
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
                    _ed.log_debug_message(`fout bij schrijven jaarverslag naar ${settings['out']['file']}`, () => { })
                    return ({ 'exit code': 1 })
                },

            )
        ]
    )
    ]
)

