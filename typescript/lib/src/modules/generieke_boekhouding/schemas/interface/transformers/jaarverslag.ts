import * as p_ from 'pareto-core/transformer'

//schemas
import * as s_out from "pareto-static-html/schemas/static_html/schema"
import type * as s_in from "../schema.js"


namespace declarations {
    export type Root = p_.Transformer_With_Parameter<
        s_in.Root,
        s_out.Document,
        {
            'css': string
        }
    >
}

//dependencies
import * as t_to_aggregatie from "./aggregatie.js"
import * as t_aggregatie_to_jaarverslag_html from "../../aggregatie/transformers/jaarverslag_html.js"


export const Root: declarations.Root = ($, $p) => t_aggregatie_to_jaarverslag_html.Root(
    t_to_aggregatie.Root(
        $
    ),
    {
        'css': $p['css'],
    }
)