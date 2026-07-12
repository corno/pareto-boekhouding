
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as s_out from "../../../interface/schemas/derived.js"


export type Root = p_.Transformer<
    s_in.Root,
    s_out.Root
>

