import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"

//dependencies
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived.js"
import * as t_csv_to_prose from "pareto-csv/implementation/serializers/csv"
import * as t_aggregatie_to_resultaat_grootboeken_csv from "../transformers/aggregatie/resultaat_grootboeken_csv.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.file_in_file_out,
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
            'paragraph': t_csv_to_prose.CSV(
                t_aggregatie_to_resultaat_grootboeken_csv.Root(
                    t_resolved_to_derived.Root(
                        $
                    )
                ),
                {
                    'separator': 0x2C, // ,
                }
            )
        })
    )
)
