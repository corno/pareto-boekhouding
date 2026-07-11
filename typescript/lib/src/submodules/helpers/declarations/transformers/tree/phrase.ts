import * as p_ from 'pareto-core/interface/transformer'

//data types
import * as d_in from "../../../interface/schemas/tree.js"
import * as d_out from "pareto-fountain-pen/interface/data/prose"

export type Node = p_.Transformer<
    d_in.Node,
    d_out.Paragraph.sentences
>