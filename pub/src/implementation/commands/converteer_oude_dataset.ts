import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

//data


const settings = {
    // 'in': "../../../pareto-rosetta/accounting_ruwe_data/out/temp/plicity/boekhouding.verbose.astn",
    'in': {
        'dir': "../../../pareto-rosetta/accounting_ruwe_data/data/accounting_on_alan_platform/dump/mindustries",
        'file': "instance.json"
    },
    'out': {
        'dir': "./out",
        'file': "plicity-boekhouding.verbose.astn"
    }
}

//interface


import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

export type Query_Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}


import { Signature } from "../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"


export type Procedure = _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources>

//dependencies

import { $$ as r_converteer_oude_dataset } from "../refiners/converteer_oude_dataset"

import * as t_read_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/read_file/fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/algorithms/transformations/block/text"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/path/path"
import * as r_path_from_text from "exupery-resources/dist/implementation/refiners/context_path/text"


export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.query_without_error_transformation(
            $qr['read file'](
                {
                    'path': t_path_to_path.create_node_path(
                        r_path_from_text.Context_Path(settings['in']['dir']),
                        settings['in']['file'],
                    ),
                    'escape spaces in path': true
                },
                ($) => {
                    _ed.log_debug_message(`kon bestand niet lezen ${t_fountain_pen_to_text.Block_Part(t_read_file_to_fountain_pen.Error($), { 'indentation': `    ` })}`, () => { })
                    return { 'exit code': 1 }
                }
            ).refine(
                ($) => r_converteer_oude_dataset({
                    'file content': $
                }),
                ($): d_main.Error => {
                    _ed.log_debug_message(`fout tijdens genereren jaarverslag`, () => { })
                    return { 'exit code': 1 }
                }
            ).transform_result(($) => {
                return {
                    'path': {
                        'path': t_path_to_path.create_node_path(
                            r_path_from_text.Context_Path(settings['out']['dir']),
                            settings['out']['file'],
                        ),
                        'escape spaces in path': true,
                    },
                    'data': $
                }
            }),
            ($v) => [
                $cr['write file'].execute(
                    $v,
                    ($) => {
                        _ed.log_debug_message(`failed to write converted dataset to ${settings['out']['file']}`, () => { })
                        return ({ 'exit code': 1 })
                    },

                )
            ]

        )
    ]



)