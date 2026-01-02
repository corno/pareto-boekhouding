import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as d_xx from "astn-sealed/dist/interface/to_be_generated/deserialize_resolved_model"

export type Signature = _pi.Deserializer_With_Parameters<string, d_xx.Error, d_xx.Parameters>

//data
import * as dummy_jaarverslag from "../../../data/temp_static_html_rapportage"

//dependencies
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"
import * as t_static_html_to_fp from "pareto-static-html/dist/implementation/manual/schemas/html/transformers/fountain_pen"


export const $$: Signature = ($) => s_fp.Group(//do nothing with the input file
    t_static_html_to_fp.Document(
        dummy_jaarverslag.rapportage
    ),
    {
        'indentation': `    `,
        'newline': `\n`,
    }
)