import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as interface_ from "../../declarations/queries.js"


//dependencies
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived.js"
import * as t_prose_to_list_of_characters from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"
import * as t_csv_to_prose from "pareto-csv/implementation/transformers/csv/prose"
import * as t_aggregatie_to_resultaat_grootboeken_csv from "../transformers/aggregatie/resultaat_grootboeken_csv.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: interface_.resultaat_grootboeken_csv = p_.query(
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
                t_csv_to_prose.CSV(
                    t_aggregatie_to_resultaat_grootboeken_csv.Root(
                        t_resolved_to_derived.Root(
                            $
                        )
                    ),
                    {
                        'separator': 0x2C, // ,
                    }
                ),
                {
                    'indentation': "    ",
                    'newline': "\n",
                }
            )
        })
    )
)
