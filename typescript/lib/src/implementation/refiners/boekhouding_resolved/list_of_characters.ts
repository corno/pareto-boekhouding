import * as p_ from 'pareto-core/implementation/refiner'

//schemas
import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_function from "../../../interface/schemas/deserialize_resolved.js"
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
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../../submodules/boekhouding_resolved/implementation/refiners/foo/unresolved.js"
import * as r_boekhouding_unresolved_from_loc from "../../../submodules/boekhouding_unresolved/implementation/refiners/foo/list_of_characters.js"

export const Root: declarations.Root = ($, abort, $p) => {
    return r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        r_boekhouding_unresolved_from_loc.Root(
            $,
            ($) => abort(['deserialize', $]),
            $p
        ),
        ($) => abort(['resolve error', $]),
        p_.literal.nothing(),
        p_.literal.nothing(),
    )
}