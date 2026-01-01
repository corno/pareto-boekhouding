
import * as _p from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'

//data
import * as dummy_jaarverslag from "../../../data/temp_static_html_rapportage"

//dependencies
import { $$ as create_file_transformer } from "../../../modules/file_transformer/implementation/manual/command_creators/transform_file"

import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"
import * as t_static_html_to_fp from "pareto-static-html/dist/implementation/manual/schemas/html/transformers/fountain_pen"

export const $$ = create_file_transformer(
    () => null, //do nothing with the input file
    ($) => s_fp.Group(
        t_static_html_to_fp.Document(
            dummy_jaarverslag.rapportage
        ),
        {
            'indentation': `    `,
            'newline': `\n`,
        }
    )
)