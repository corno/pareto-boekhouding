import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/aggregatie/todo.js"


//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Root: interface_.Root = ($) => sh.pg.sentences(
    p_.from.dictionary($.jaren).convert_to_list(
        ($, id) => sh.sentence([])
    )
)