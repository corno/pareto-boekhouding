import type * as p_di from 'pareto-core/interface/data'

import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-csv/interface/data/csv"
import type * as d_in from "../../../interface/schemas/derived.js"

export type Root = p_.Transformer<

    d_in.Root,
    d_out.CSV
>