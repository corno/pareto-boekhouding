import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'


import * as q_read_file from "exupery-resources/dist/implementation/algorithms/queries/unguaranteed/read_file"
import * as p_write_file from "exupery-resources/dist/implementation/algorithms/procedures/unguaranteed/write_file"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"

import { $$ as temp_func } from "../../../temp_funcs/converteer_oude_dataset"

const settings = {
    'in': "../../accounting_ruwe_data/out/temp/schraverus/boekhouding.verbose.astn",
    'out filename': "./out/mindustries-boekhouding.verbose.astn",
}


export const $$: _easync.Unguaranteed_Procedure<_eb.Parameters, _eb.Error, null> = () => {
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_error) => {
            q_read_file.$$(
                {
                    'path': settings['in'],
                    'escape spaces in path': true
                },
                null,
            ).__start(
                (file_content) => {
                    temp_func(file_content).process(
                        ($) => {
                            p_write_file.$$(
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
                            _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'parse error': return _ea.ss($, ($) => {
                                        _ed.log_debug_message(`${$.range.start.relative.line}:${$.range.start.relative.column}-${$.range.end.relative.line}:${$.range.end.relative.column}`, () => { })
                                        _ea.cc($.type, ($) => {
                                            switch ($[0]) {
                                                case 'lexer': return _ea.ss($, ($) => {
                                                    _ed.log_debug_message(`Lexer error: ${$[0]}`, () => { })
                                                })
                                                case 'parser': return _ea.ss($, ($) => {
                                                    _ed.log_debug_message(`Parser error: ${$.cause[0]}`, () => { })
                                                })
                                                default: return _ea.au($[0])
                                            }
                                        })
                                    })
                                    default: return _ea.au($[0])
                                }
                            })
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