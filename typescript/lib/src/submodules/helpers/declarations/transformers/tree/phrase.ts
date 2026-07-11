import * as p_ from 'pareto-core/interface/transformer'

//data types
import * as s_in from "../../../interface/schemas/tree.js"
import * as s_out from "pareto-fountain-pen/interface/data/prose"

export type Node = p_.Transformer<
    s_in.Node,
    s_out.Paragraph.sentences
>