import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/derived.js"
import type * as s_out from "../../../interface/schemas/todo.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Paragraph
    >
}

//schemas
import * as s_tree from "../../../submodules/helpers/interface/schemas/tree.js"

//dependencies
import * as t_tree_to_phrase from "../../../submodules/helpers/implementation/transformers/tree/phrase.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_extended/target"

export const Root: declarations.Root = ($) => sh.pg.sentences(
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