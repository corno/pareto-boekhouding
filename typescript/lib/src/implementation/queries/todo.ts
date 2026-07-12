import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"
import type * as s_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"

//dependencies
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived.js"
import * as t_prose_to_list_of_characters from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"
import * as t_aggregatie_to_todo from "../transformers/aggregatie/todo.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.process_file_data,
    {
        'tab size': number,
        'serialization parameters': s_serialize_prose.Parameters,
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
