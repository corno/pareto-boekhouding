
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as d_out from "../../../interface/schemas/derived.js"


export type Root = p_.Transformer<
    d_in.Root,
    d_out.Root
>

