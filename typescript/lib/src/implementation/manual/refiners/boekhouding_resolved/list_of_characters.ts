import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_i from 'pareto-core/dist/interface/refiner'


//data types
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_out from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_function from "liana-core/dist/interface/data/deserialize_resolved"

//dependencies
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../../generated/liana/schemas/boekhouding/resolved/refiners/unresolved"

import * as r_boekhouding_unresolved_from_loc from "../../../generated/liana/schemas/boekhouding/unresolved/refiners/list_of_characters"


export type Root = p_i.Refiner_With_Parameter<
    d_out.Root,
    d_function.Error,
    d_in.List_of_Characters,
    d_function.Parameters
>

export const Root: Root = ($, abort, $p) => {
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