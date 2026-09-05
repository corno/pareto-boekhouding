import type * as p_di from 'pareto-core/schema'
import * as p_ from 'pareto-core/transformer'

//schemas
import type * as s_in from "../schema.js"
import * as s_out from "pareto-csv/schemas/csv/schema"
import * as s_nested from "pareto-csv/schemas/nested/schema"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.CSV
    >
}

//dependencies
import * as ser_primitives from "../../primitives/serializers.js"
import * as t_nested_to_csv from "pareto-csv/schemas/nested/transformers/csv"


//shorthands
import * as sh from "pareto-csv/schemas/csv/shorthands/target"

export const Root: declarations.Root = ($) => sh.CSV(
    p_.literal.set(sh.row(p_.literal.list([
        "jaar", "grootboekrekening", "cluster", "dagboek", "mutatie", "bedrag",
    ]))),
    t_nested_to_csv.Composed_Dictionary(
        p_.from.dictionary($.jaren).map(
            ($): s_nested.Dictionary => ['composed', p_.from.dictionary($.balans['grootboekrekeningen']).map(
                ($): s_nested.Dictionary => {


                    return ['composed', p_.from.dictionary($.clusters).map(
                        ($): s_nested.Dictionary => ['composed', p_.from.dictionary($.dagboeken).map(
                            ($): s_nested.Dictionary => {
                                return ['leaf', p_.from.dictionary($.mutaties).map(
                                    ($) => sh.row(p_.literal.list([
                                        ser_primitives.Fractional_Decimal(
                                            $,
                                            {
                                                'number of fractional digits': 2,
                                                'decimal separator character code': 46, // '.'
                                                'thousand separator character code': p_.literal.not_set()
                                            }
                                        ),
                                    ]))
                                )]
                            }
                        )]
                    )]
                }
            )]
        )
    ),
)