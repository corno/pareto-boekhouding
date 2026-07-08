import type * as p_i from 'pareto-core/interface/refiner'

//data types
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"
import type * as d_out from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved.js"
import type * as d_function from "liana-core/interface/data/deserialize_resolved"

export namespace interface_ {

    export type Root = p_i.Refiner_With_Parameter<
        d_out.Root,
        d_function.Error,
        d_in.List_of_Characters,
        d_function.Parameters
    >
}
