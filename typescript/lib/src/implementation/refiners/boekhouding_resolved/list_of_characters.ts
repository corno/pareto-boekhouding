import * as p_ from 'pareto-core/implementation/refiner'

import type * as interface_ from "../../../declarations/refiners/boekhouding_resolved/list_of_characters.js"

//dependencies
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../../modules/boekhouding_resolved/implementation/refiners/unresolved.js"
import * as r_boekhouding_unresolved_from_loc from "../../../modules/boekhouding_unresolved/implementation/refiners/list_of_characters.js"

export const Root: interface_.Root = ($, abort, $p) => {
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