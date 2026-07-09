
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

export namespace d_function {
    export type Parameters = {
        'number of fractional digits': number
        'decimal separator character code': number
        'thousand separator character code': number
    }

}

export type fractional_decimal = p_.Transformer_With_Parameter<
    number,
    d_out.Text,
    d_function.Parameters
>

