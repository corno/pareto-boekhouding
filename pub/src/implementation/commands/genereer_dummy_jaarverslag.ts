import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

//data

const settings = {
    'out': {
        'dir': "./out",
        'file': "rapportage.html",
    },
}

import * as dummy_jaarverslag from "../../temp_static_html_rapportage"

//interface

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import { Signature } from "../../interface/algorithms/procedures/unguaranteed/genereer_jaarverslag"

import { Error } from "../refiners/genereer_jaarverslag"

export type Query_Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}


export type Procedure = _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources>


//dependencies

import { $ as r_genereer_jaarverslag } from "../refiners/genereer_jaarverslag"

import * as t_static_html_to_fp from "pareto-static-html/dist/implementation/algorithms/transformations/html/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/algorithms/transformations/block/text"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/path/path"
import * as r_path_from_text from "exupery-resources/dist/implementation/refiners/context_path/text"


export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [


        $cr['write file'].execute(
            {
                'path': t_path_to_path.create_node_path(
                    r_path_from_text.Context_Path(settings['out']['dir']),
                    settings['out']['file'],
                ),
                'data': t_fp_to_text.Group(
                    t_static_html_to_fp.Document(
                        dummy_jaarverslag.rapportage
                    ),
                    {
                        'indentation': `    `,
                    }
                )
            },
            ($): d_main.Error => {
                _ed.log_debug_message(`fout bij schrijven jaarverslag naar ${settings['out']['file']}`, () => { })
                return ({ 'exit code': 1 })
            },

        )
    ]
)

