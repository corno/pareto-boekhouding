import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_function from "../../../interface/schemas/deserialize_resolved.js"
import type * as s_out from "../../../interface/schemas/boekhouding_resolved.js"


export type Root = p_.Refiner_With_Parameter<
    s_out.Root,
    s_function.Error,
    s_in.List_of_Characters,
    s_function.Parameters
>

