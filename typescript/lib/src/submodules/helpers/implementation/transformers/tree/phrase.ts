import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/tree/phrase.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/target"

export const Node: interface_.Node = ($) => p_.from.dictionary($).convert_to_list(
    ($, id) => sh.sentence(
        p_.literal.list([
            sh.ph.literal(id),
            sh.ph.indent(sh.pg.sentences(
                Node($)
            )),
        ])
    ),
)