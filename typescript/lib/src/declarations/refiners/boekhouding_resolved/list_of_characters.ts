import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_in from "pareto-fountain-pen/interface/data/list_of_characters"
import type * as d_out from "../../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as d_function from "liana-core/interface/data/deserialize_resolved"



export type Root = p_.Refiner_With_Parameter<
    d_out.Root,
    d_function.Error,
    d_in.List_of_Characters,
    d_function.Parameters
>

