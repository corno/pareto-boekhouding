
import type * as p_ from 'pareto-core/interface/transformer'
import * as p_di from 'pareto-core/interface/data'

//schemas
import type * as s_out from "pareto-fountain-pen/interface/data/text"

export namespace s_function {
    export type Parameters = {
        'number of fractional digits': number
        'decimal separator character code': number
        'thousand separator character code': p_di.Optional_Value<number>
    }

}

export type fractional_decimal = p_.Transformer_With_Parameter<
    number,
    s_out.Text,
    s_function.Parameters
>

