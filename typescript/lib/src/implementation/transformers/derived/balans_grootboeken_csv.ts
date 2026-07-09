import type * as p_di from 'pareto-core/interface/data'
import * as p_ from 'pareto-core/implementation/transformer'
import p_log_debug_message from 'pareto-core-dev/log_debug_message'

import type * as interface_ from "../../../declarations/transformers/derived/jaarverslag_csv.js"

//data types
import type * as d_out from "pareto-csv/interface/data/csv"

//dependencies
import * as t_primitives_to_text from "../primitives/text.js"

const temp_integer_from_dictionary = <T extends p_di.Value>(
    dict: p_di.Dictionary<T>,
    get_value: ($: T) => number,
): number => p_.from.list(
    p_.from.dictionary(dict).convert_to_list(
        ($) => $
    )
).sum(
    ($) => get_value($)
)

//shorthands
import * as sh from "pareto-csv/shorthands/csv/target"

export const Root: interface_.Root = ($) => sh.CSV(
    p_.literal.set(sh.row(p_.literal.list([
        "jaar", "grootboekrekening", "begin", "eind",
    ]))),
    p_.from.dictionary($.jaren).flatten_to_list(
        ($, id) => {
            const $v_jaar = id
            return p_.from.dictionary($.jaarbeheer.balans.grootboekrekeningen).flatten_to_list(
                ($, id): p_di.List<d_out.Row> => p_.literal.list([
                    sh.row(p_.literal.list([
                        $v_jaar,
                        id,
                        t_primitives_to_text.fractional_decimal(
                            $.totaal.beginsaldo,
                            {
                                'number of fractional digits': 2,
                                'decimal separator character code': 46, // '.'
                                'thousand separator character code': p_.literal.not_set()
                            }
                        ),
                        t_primitives_to_text.fractional_decimal(
                            $.totaal.beginsaldo + $.totaal.mutaties,
                            {
                                'number of fractional digits': 2,
                                'decimal separator character code': 46, // ','
                                'thousand separator character code': p_.literal.not_set()
                            }
                        ),
                    ]))
                ])
            )
        }
    )
)