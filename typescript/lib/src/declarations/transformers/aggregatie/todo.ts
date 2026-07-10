
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/data/prose"
import type * as d_in from "../../../interface/data/derived.js"


export type Root = p_.Transformer<
    d_in.Root,
    d_out.Paragraph
>