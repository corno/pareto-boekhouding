
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "./data"

export namespace Root_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
    parameters: {
        readonly 'document resource identifier': Root_.P.document_resource_identifier
        readonly 'tab size': Root_.P.tab_size
    },
) => Root_.O

export namespace Bestandsnaam_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Bestandsnaam
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Bestandsnaam_ = (
    context: Bestandsnaam_.I,
    abort: _pi.Abort<Bestandsnaam_.E>,
    parameters: {
        readonly 'document resource identifier': Bestandsnaam_.P.document_resource_identifier
        readonly 'tab size': Bestandsnaam_.P.tab_size
    },
) => Bestandsnaam_.O

export { 
    Root_ as Root, 
    Bestandsnaam_ as Bestandsnaam, 
}
