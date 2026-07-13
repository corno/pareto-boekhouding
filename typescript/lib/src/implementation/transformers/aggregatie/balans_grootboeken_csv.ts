import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/derived.js"
import * as s_out from "../../../interface/schemas/csv.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.CSV
    >
}

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

export const Root: declarations.Root = ($) => sh.CSV(
    p_.literal.set(sh.row(p_.literal.list([
        "jaar", "grootboekrekening", "begin", "eind",
    ]))),
    p_.from.dictionary($.jaren).flatten_to_list(
        ($, id) => {
            const $v_jaar = id
            return p_.from.dictionary($.jaarbeheer.balans.grootboekrekeningen).flatten_to_list(
                ($, id): p_di.List<s_out.Row> => p_.literal.list([
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