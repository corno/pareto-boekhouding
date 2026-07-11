
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_out from "pareto-fountain-pen/interface/data/prose"
import type * as s_in from "../../../interface/schemas/derived.js"


export type Root = p_.Transformer<
    s_in.Root,
    s_out.Paragraph
>