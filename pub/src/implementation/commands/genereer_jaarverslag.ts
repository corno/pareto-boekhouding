import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import { Signature } from "../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"

import { Error } from "../refiners/genereer_jaarverslag"
import { $ as r_generer_jaarverslag } from "../refiners/genereer_jaarverslag"

const settings = {
    'in': "./data/plicity-boekhouding.verbose.astn",
    'out filename': "./out/plicity-jaarverslag.astn",
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
        ($): d_main.Error => {
            _ed.log_debug_message(`fout bij schrijven jaarverslag naar ${settings['out filename']}`, () => { })
            return ({ 'exit code': 1 })
        },
        $r.queries['read file'](
            {
                'path': settings['in'],
                'escape spaces in path': true
            },
        ).transform_error_temp(($): d_main.Error => {
            _ed.log_debug_message(`fout tijdens lezen data`, () => { })
            return { 'exit code': 1 }
        }).process(
            ($) => r_generer_jaarverslag({
                'file content': $
            }),
            ($): d_main.Error => {
                _ed.log_debug_message(`fout tijdens genereren jaarverslag`, () => { })
                return { 'exit code': 1 }
            }
        ).transform(($) => {
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