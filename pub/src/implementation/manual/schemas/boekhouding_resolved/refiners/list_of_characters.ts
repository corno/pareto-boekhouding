import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_deserialize from "liana-core/dist/interface/to_be_generated/deserialize_resolved"

//dependencies
// import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../generated/liana/schemas/boekhouding/resolved/refiners/unresolved"
namespace r_boekhouding_resolved_from_boekhouding_unresolved {
    export const Root = ($: any) => _pdev.implement_me("fix generated code")
}
import * as r_boekhouding_unresolved_from_loc from "../../../../generated/liana/schemas/boekhouding/unresolved/refiners/list_of_characters"


export type Root = _pi.Refiner_With_Parameter<
    d_out.Root,
    d_deserialize.Error,
    d_in.List_of_Characters,
    d_deserialize.Parameters
>

export const Root: Root = ($, abort, $p): d_out.Root => {
    return r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        r_boekhouding_unresolved_from_loc.Root(
            $,
            ($) => abort(['deserialize', $]),
            $p
        )
    )
}