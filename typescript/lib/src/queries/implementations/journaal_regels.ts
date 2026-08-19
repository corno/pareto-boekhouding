import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_file_in_file_out from "pareto-common/modules/file_in_file_out/queries/interfaces"


//dependencies
import * as t_resolved_to_derived from "../../schemas/boekhouding_resolved/transformers/derived.js"
import * as t_csv_to_paragraph from "pareto-csv/schemas/csv/transformers/paragraph"
import * as t_aggregatie2_to_journaal_regels from "../../schemas/aggregatie2/transformers/journaalregels.js"
import * as t_derived_to_aggregatie2 from "../../schemas/derived/transformers/aggregatie2.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: p_.Query_Implementation<
    query_interfaces_file_in_file_out.operation,
    {
        'tab size': number,
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
            'paragraph': t_csv_to_paragraph.CSV(
                t_aggregatie2_to_journaal_regels.Root(
                    t_derived_to_aggregatie2.Root(
                        t_resolved_to_derived.Root(
                            $
                        )
                    )
                ),
                {
                    'separator': 0x2C, // ,
                }
            )
        })
    )
)
