import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../schema.js"
import * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"
namespace declarations {
    export type Node = p_.Transformer<
        s_in.Node,
        s_out.Paragraph.sentences
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/target"

export const Node: declarations.Node = ($) => p_.from.dictionary($).convert_to_list(
    ($, id) => sh.sentence(
        p_.literal.list([
            sh.ph.text(id),
            sh.ph.indent(sh.pg.sentences(
                Node($)
            )),
        ])
    ),
)