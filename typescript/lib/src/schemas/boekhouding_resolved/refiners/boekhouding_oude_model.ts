import * as p_ from 'pareto-core/refiner'

//schemas
import type * as s_in from "../../../modules/boekhouding_oude_model/schemas/unconstrained/schema.js"
import type * as s_function from "liana-core/modules/resolved_document_deserialization/schemas/resolving/schema"
import type * as s_out from "../schema.js"

namespace declarations {
    export type Root = p_.Refiner<
        s_out.Root,
        s_function.Error,
        s_in.Root
    >
}


//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated"


//dependencies
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../../modules/boekhouding/schemas/resolved/refiners/unresolved.js"
import * as r_boekhouding_unresolved_from_boekhouding_oude_model from "../../boekhouding_unresolved/refiners/boekhouding_oude_model.js"

export const Root: declarations.Root = ($, abort) => {
    return r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        r_boekhouding_unresolved_from_boekhouding_oude_model.Root(
            $,
        ),
        ($) => abort($),
        p_.literal.nothing(),
        p_.literal.nothing(),
    )
}