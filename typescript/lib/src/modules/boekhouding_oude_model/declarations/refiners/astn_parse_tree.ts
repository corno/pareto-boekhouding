
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../interface/data/data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Root_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: p_i.Abort<Root_.E>,
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
    abort: p_i.Abort<Bestandsnaam_.E>,
) => Bestandsnaam_.O

export type { 
    Root_ as Root, 
    Bestandsnaam_ as Bestandsnaam, 
}
