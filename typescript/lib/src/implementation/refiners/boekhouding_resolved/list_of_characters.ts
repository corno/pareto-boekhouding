import * as p_ from 'pareto-core/implementation/refiner'

//schemas
import type * as s_in from "astn-core/interface/schemas/list_of_characters"
import type * as s_function from "liana-core/interface/schemas/resolved_document_deserialization"
import type * as s_out from "../../../interface/schemas/boekhouding_resolved.js"

namespace declarations {
export type Root = p_.Refiner_With_Parameter<
    s_out.Root,
    s_function.Error,
    s_in.List_Of_Characters,
    s_function.Parameters
>
}



//dependencies
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../../submodules/boekhouding_resolved/implementation/refiners/resolved/unresolved.js"
import * as r_boekhouding_unresolved_from_loc from "../../../submodules/boekhouding_unresolved/implementation/refiners/unresolved/list_of_characters.js"

export const Root: declarations.Root = ($, abort, $p) => {
    return r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        r_boekhouding_unresolved_from_loc.Root(
            $,
            ($) => abort(['unresolved document deserialization', $]),
            $p
        ),
        ($) => abort(['resolving', $]),
        p_.literal.nothing(),
        p_.literal.nothing(),
    )
}