
import type * as p_i from 'pareto-core/interface/transformer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

export namespace d_function {
    export type Parameters = {
        'number of fractional digits': number
        'decimal separator character code': number
        'thousand separator character code': number
    }

}

export type fractional_decimal = p_i.Transformer_With_Parameter<
    number,
    d_out.Text,
    d_function.Parameters
>

