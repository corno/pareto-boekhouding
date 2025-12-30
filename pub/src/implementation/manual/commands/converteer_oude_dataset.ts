import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_converteer_oude_dataset from "../primitives/text/deserializers/converteer_oude_dataset"

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

//dependencies
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"
import { $$ as ds_converteer_oude_dataset } from "../primitives/text/deserializers/converteer_oude_dataset"

import * as t_read_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/schemas/read_file/fountain_pen"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as s_fountain_pen from "pareto-fountain-pen/dist/implementation/serializers/schemas/block"


export const $$: signatures.commands.converteer_oude_dataset = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.query_without_error_transformation(
            $qr['read file'](
                t_path_to_path.create_node_path(
                    ds_path.Context_Path(settings['in']['dir']),
                    settings['in']['file'],
                ),
                ($) => {
                    _pdev.log_debug_message(`kon bestand niet lezen ${s_fountain_pen.Block_Part(t_read_file_to_fountain_pen.Error($), { 'indentation': `    `, 'newline': `\n` })}`, () => { })
                    return { 'exit code': 1 }
                }
            ).refine_without_error_transformation(
                ($, abort) => ds_converteer_oude_dataset(
                    $,
                    ($) => {
                        _pdev.log_debug_message(`fout tijdens genereren jaarverslag`, () => { })
                        return abort({ 'exit code': 1 })
                    }
                )
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
                    ($) => {
                        _pdev.log_debug_message(`failed to write converted dataset to ${settings['out']['file']}`, () => { })
                        return ({ 'exit code': 1 })
                    },

                )
            ]

        )
    ]



)