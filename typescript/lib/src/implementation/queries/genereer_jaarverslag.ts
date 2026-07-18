import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_file_in_file_out from "pareto-common/modules/file_in_file_out/interface/queries"


//dependencies
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived.js"

import * as t_html_to_paragraph from "pareto-static-html/_implementation/transformers/static_html/paragraph"
import * as t_aggregatie_to_jaarverslag_html from "../transformers/aggregatie/jaarverslag_html.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: p_.Query_Implementation<
    query_interfaces_file_in_file_out.operation,
    {
        'tab size': number,
        'css': string
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(
        q_load(
            {
                'tab size': $s['tab size']
            },
            null
        )(
            $d,
            ($) => $,
        )
    ).transform(
        ($) => ({
            'paragraph': t_html_to_paragraph.Document(
                t_aggregatie_to_jaarverslag_html.Root(
                    t_resolved_to_derived.Root(
                        $
                    ),
                    {
                        'css': $s['css'],
                    }
                )
            )
        })
    )
)
