import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as interface_ from "../../declarations/queries.js"

//dependencies
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived.js"
import * as t_prose_to_list_of_characters from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"
import * as t_aggregatie_to_todo from "../transformers/aggregatie/todo.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: interface_.todo = p_.query(
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
            'data': t_prose_to_list_of_characters.Paragraph(
                t_aggregatie_to_todo.Root(
                    t_resolved_to_derived.Root(
                        $
                    )
                ),
                {
                    'indentation': "    ",
                    'newline': "\n",
                }
            )
        })
    )
)
