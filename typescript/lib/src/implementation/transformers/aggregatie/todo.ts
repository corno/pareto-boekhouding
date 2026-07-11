import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/aggregatie/todo.js"

//data types
import * as d_tree from "../../../submodules/helpers/interface/schemas/tree.js"

//dependencies
import * as t_tree_to_phrase from "../../../submodules/helpers/implementation/transformers/tree/phrase.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/target"

export const Root: interface_.Root = ($) => sh.pg.sentences(
    t_tree_to_phrase.Node(
        p_.from.dictionary($.jaren).map(
            ($) => p_.literal.dictionary({
                "bankrekeningen": p_.from.dictionary($.bankrekeningen).map(
                    ($) => p_.from.dictionary($.mutaties).map_optionally(
                        ($) => p_.from.optional($['verwerking bron']).decide(
                            ($) => p_.literal.not_set(), //de mutatie is verwerkt, dus niet meer in de todo lijst
                            () => p_.literal.set(p_.literal.dictionary({})) //de mutatie is nog niet verwerkt, dus nog in de todo lijst
                        )
                    )
                )
            })
        )
    )
)