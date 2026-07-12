import type * as p_di from 'pareto-core/interface/data'
import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/aggregatie/resultaat_grootboeken_csv.js"

//schemas
import type * as s_out from "pareto-csv/interface/data/csv"

//dependencies
import * as t_primitives_to_text from "../primitives/text.js"

//shorthands
import * as sh from "pareto-csv/shorthands/csv/target"
    
export const Root: interface_.Root = ($) => sh.CSV(
    p_.literal.set(sh.row(p_.literal.list([
        "jaar", "grootboekrekening", "bedrag",
    ]))),
    p_.from.dictionary($.jaren).flatten_to_list(
        ($, id) => {
            const $v_jaar = id
            return p_.from.dictionary($.jaarbeheer.resultaat.grootboekrekeningen).flatten_to_list(
                ($, id): p_di.List<s_out.Row> => p_.literal.list([
                    sh.row(p_.literal.list([
                        $v_jaar,
                        id,
                        t_primitives_to_text.fractional_decimal(
                            $.totaal,
                            {
                                'number of fractional digits': 2,
                                'decimal separator character code': 46, // '.'
                                'thousand separator character code': p_.literal.not_set()
                            }
                        ),
                    ]))
                ])
            )
        }
    )
)