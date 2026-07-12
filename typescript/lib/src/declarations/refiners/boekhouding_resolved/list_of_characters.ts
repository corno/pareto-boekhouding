import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_in from "pareto-fountain-pen/interface/data/list_of_characters"
import type * as s_out from "../../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as s_function from "liana-core/interface/data/deserialize_resolved"



export type Root = p_.Refiner_With_Parameter<
    s_out.Root,
    s_function.Error,
    s_in.List_of_Characters,
    s_function.Parameters
>

