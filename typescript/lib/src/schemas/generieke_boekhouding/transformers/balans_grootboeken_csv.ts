import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'

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
        "jaar", "grootboekrekening", "type", "bedrag",
    ]))),
    t_nested_to_csv.Composed_Dictionary(
        p_.from.dictionary($.jaren2).map(
            ($): s_nested.Dictionary => ['composed', p_.from.dictionary($.balans['grootboekrekeningen']).map(
                ($): s_nested.Dictionary => ['leaf', p_.literal.dictionary({
                    "begin": sh.row(p_.literal.list([
                        ser_primitives.Fractional_Decimal(
                            $.totaal.beginsaldo,
                            {
                                'number of fractional digits': 2,
                                'decimal separator character code': 46, // '.'
                                'thousand separator character code': p_.literal.not_set()
                            }
                        ),
                    ])),
                    "mutaties": sh.row(p_.literal.list([
                        ser_primitives.Fractional_Decimal(
                            $.totaal.mutaties.totaal,
                            {
                                'number of fractional digits': 2,
                                'decimal separator character code': 46, // ','
                                'thousand separator character code': p_.literal.not_set()
                            }
                        ),
                    ])),
                    "eind": sh.row(p_.literal.list([
                        ser_primitives.Fractional_Decimal(
                            $.totaal.beginsaldo + $.totaal.mutaties.totaal,
                            {
                                'number of fractional digits': 2,
                                'decimal separator character code': 46, // ','
                                'thousand separator character code': p_.literal.not_set()
                            }
                        ),
                    ])),
                })]
            )]
        )
    ),
)