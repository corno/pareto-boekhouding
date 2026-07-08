
import * as p_temp from 'pareto-core/implementation/refiner'
import type * as p_i from 'pareto-core/interface/transformer'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'
import p_variables from 'pareto-core/implementation/transformer/specials/variables'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_in from "../../../generated/liana/schemas/boekhouding/data/resolved.js"
import type * as d_out from "../../../data/derived.js"


    export type Root = p_i.Transformer<
        d_in.Root,
        d_out.Root
    >

