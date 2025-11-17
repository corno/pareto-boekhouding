import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'


import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"

import { $$ as temp_func } from "../../../refiners/converteer_oude_dataset"

const settings = {
    'in': "../../accounting_ruwe_data/out/temp/schraverus/boekhouding.verbose.astn",
    'out filename': "./out/mindustries-boekhouding.verbose.astn",
}

export type Resources = {
    'queries': {
        'read file': _et.Data_Preparer<d_read_file.Parameters, d_read_file.Result, d_read_file.Error>
    },
    'commands': {
        'write file': _et.Command<d_write_file.Parameters, d_write_file.Error>
    }
}

export type Procedure = _et.Command_Procedure<d_main.Parameters, d_main.Error, Resources>


export const $$: Procedure = _easync.create_command_procedure(
    ($r, $p) => $r.commands['write file'].execute.prepare(
        ($) => {
            _ed.log_debug_message(`failed to write converted dataset to ${settings['out filename']}`, () => { })
            return ({ 'exit code': 1 })
        },
        $r.queries['read file'](
            {
                'path': settings['in'],
                'escape spaces in path': true
            },
        ).transform_error_temp(($) => {
            return { 'exit code': 1 }
        }).transform(($) => {
            return {
                'path': {
                    'path': settings['out filename'],
                    'escape spaces in path': true,
                },
                'data': $
            }
        })
    )
)

// {
// 'path': {
//     'path': settings['out filename'],
//         'escape spaces in path': true,
//             },
// 'data': $
// },


// export const $$_: Procedure = ($r) => {
//     return ($p) => _easync.__create_procedure_promise({
//         'execute': (on_success, on_error) => {
//             $r.queries['read file'](
//                 {
//                     'path': settings['in'],
//                     'escape spaces in path': true
//                 },
//             ).__start(
//                 (file_content) => {
//                     temp_func(file_content).process(
//                         ($) => {
//                             $r.commands['write file'](
//                                 {
//                                     'path': {
//                                         'path': settings['out filename'],
//                                         'escape spaces in path': true,
//                                     },
//                                     'data': $
//                                 },
//                             ).__start(
//                                 on_success,
//                                 ($) => {
//                                     on_error({ 'exit code': 1 })

//                                 }
//                             )
//                         },
//                         ($) => {
//                             _ea.cc($, ($) => {
//                                 switch ($[0]) {
//                                     case 'parse error': return _ea.ss($, ($) => {
//                                         _ed.log_debug_message(`${$.range.start.relative.line}:${$.range.start.relative.column}-${$.range.end.relative.line}:${$.range.end.relative.column}`, () => { })
//                                         _ea.cc($.type, ($) => {
//                                             switch ($[0]) {
//                                                 case 'lexer': return _ea.ss($, ($) => {
//                                                     _ed.log_debug_message(`Lexer error: ${$[0]}`, () => { })
//                                                 })
//                                                 case 'parser': return _ea.ss($, ($) => {
//                                                     _ed.log_debug_message(`Parser error: ${$.cause[0]}`, () => { })
//                                                 })
//                                                 default: return _ea.au($[0])
//                                             }
//                                         })
//                                     })
//                                     default: return _ea.au($[0])
//                                 }
//                             })
//                             _ed.log_debug_message($[0], () => { })
//                             on_error({ 'exit code': 1 })
//                         }
//                     )

//                 },
//                 () => {
//                     _ed.log_debug_message("Could not read input file", () => { })
//                     on_error({ 'exit code': 1 })
//                 }
//             )
//         }
//     })
// }