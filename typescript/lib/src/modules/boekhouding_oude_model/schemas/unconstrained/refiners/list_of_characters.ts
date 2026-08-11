
import * as p_ from 'pareto-core/implementation/refiner'

import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/schema"

import * as i_in from "astn-core/modules/deserialization/schemas/list_of_characters/schema"

import * as i_out from "../schema.js"

namespace declarations {
export namespace Root {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Root = (
    context: Root.I,
    abort: p_i.Abort<Root.E>,
    parameters: {
        readonly 'tab size': Root.P.tab_size
    },
) => Root.O
}

import * as v_deserialize from "astn-core/modules/deserialization/schemas/parse_tree/refiners/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const Root: declarations.Root = ($, abort, $p) => v_unmarshall.Root(
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