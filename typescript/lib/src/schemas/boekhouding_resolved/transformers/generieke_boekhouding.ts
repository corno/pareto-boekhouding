import * as p_ from 'pareto-core/transformer'

//schemas
import type * as s_in from "../../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_out from "../../../modules/generieke_boekhouding/schemas/interface/schema.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
}

//dependencies
import * as t_to_derived from "./derived.js"
import * as t_derived_to_generieke_boekhouding_interface from "../../derived/transformers/generieke_boekhouding.js"

export const Root: declarations.Root = ($) => {
    return t_derived_to_generieke_boekhouding_interface.Root(
        t_to_derived.Root($)
    )
}
