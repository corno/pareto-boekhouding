
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../modules/boekhouding_resolved/interface/data/resolved.js"
import type * as d_out from "../../../interface/data/derived.js"


export type Root = p_.Transformer<
    d_in.Root,
    d_out.Root
>

