import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"

//data
import * as dummy_jaarverslag from "../../../data/temp_static_html_rapportage"
const settings = {
    'out': {
        'dir': "./out",
        'file': "rapportage.html",
    },
}

//dependencies
import { $ as ds_genereer_jaarverslag } from "../primitives/text/deserializers/genereer_jaarverslag"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"

import * as t_static_html_to_fp from "pareto-static-html/dist/implementation/transformers/schemas/html/fountain_pen"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as s_fp from "pareto-fountain-pen/dist/implementation/serializers/schemas/block"


export const $$: signatures.commands.genereer_dummy_jaarverslag = _pc.create_command_procedure(
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
                _pdev.log_debug_message(`fout bij schrijven jaarverslag naar ${settings['out']['file']}`, () => { })
                return ({ 'exit code': 1 })
            },

        )
    ]
)

