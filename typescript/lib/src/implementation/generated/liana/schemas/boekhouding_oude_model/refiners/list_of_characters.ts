
import * as p_ from 'pareto-core/dist/implementation/refiner'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/signatures/refiners/list_of_characters"

import * as v_deserialize from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree"

export const Root: t_signatures.Root = ($, abort, $p) => v_unmarshall.Root(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Bestandsnaam: t_signatures.Bestandsnaam = ($, abort, $p) => v_unmarshall.Bestandsnaam(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
