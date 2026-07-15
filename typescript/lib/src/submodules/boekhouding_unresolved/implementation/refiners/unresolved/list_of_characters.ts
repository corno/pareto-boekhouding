
import * as p_ from 'pareto-core/implementation/refiner'

import * as t_signatures from "../../../declarations/refiners/unresolved/list_of_characters.js"

import * as v_deserialize from "astn-core/_implementation/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const Root: t_signatures.Root = ($, abort, $p) => v_unmarshall.Root(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)
