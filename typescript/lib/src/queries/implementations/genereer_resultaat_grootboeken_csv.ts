import * as p_ from 'pareto-core/implementation/query'

import type * as query_interfaces_file_in_file_out from "pareto-common/modules/file_in_file_out/queries/interfaces"

//dependencies
import * as t_resolved_to_derived from "../../schemas/boekhouding_resolved/transformers/generieke_boekhouding.js"
import * as t_csv_to_paragraph from "pareto-csv/schemas/csv/transformers/paragraph"
import * as t_aggregatie_to_resultaat_grootboeken_csv from "../../modules/generieke_boekhouding/schemas/interface/transformers/resultaat_grootboeken_csv.js"

import { $$ as q_load } from "./load_resolved.js"

export const $$: p_.Query_Implementation<
    query_interfaces_file_in_file_out.operation,
    {
        'tab size': number,
    },
    null
> = p_.query(
    (e, $s, $q) => e.query(
        ($d) => q_load(
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
