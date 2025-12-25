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

import * as dummy_jaarverslag from "../../data/temp_static_html_rapportage"

//interface

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"

import { Error } from "../deserializers/primitives/text/genereer_jaarverslag"

import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Query_Resources = {
    'read file': resources_exupery.queries.read_file
}

export type Command_Resources = {
    'write file': resources_exupery.commands.write_file
}


export type Procedure = _et.Command_Procedure<resources_exupery.commands.main, Command_Resources, Query_Resources>


//dependencies

import { $ as r_genereer_jaarverslag } from "../deserializers/primitives/text/genereer_jaarverslag"

import * as t_static_html_to_fp from "pareto-static-html/dist/implementation/transformations/html/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/serializers/block"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"


export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [


        $cr['write file'].execute(
            {
                'path': t_path_to_path.create_node_path(
                    ds_path.Context_Path(settings['out']['dir']),
                    settings['out']['file'],
                ),
                'data': s_fp.Group(
                    t_static_html_to_fp.Document(
                        dummy_jaarverslag.rapportage
                    ),
                    {
                        'indentation': `    `,
                        'newline': `\n`,
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

