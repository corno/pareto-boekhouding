
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "../../../interface/schemas/unresolved_document_deserialization.js"

import * as i_in from "../../../interface/schemas/list_of_characters.js"

import * as i_out from "../../../interface/schemas/data.js"

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
