
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Root_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
) => Root_.O

export namespace Bestandsnaam_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Bestandsnaam
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Bestandsnaam_ = (
    context: Bestandsnaam_.I,
    abort: _pi.Abort<Bestandsnaam_.E>,
) => Bestandsnaam_.O

export { 
    Root_ as Root, 
    Bestandsnaam_ as Bestandsnaam, 
}
