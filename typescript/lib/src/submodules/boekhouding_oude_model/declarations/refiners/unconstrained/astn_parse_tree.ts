
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "../../../interface/schemas/unmarshalling.js"

import * as i_out from "../../../interface/schemas/data.js"

import * as i_in from "../../../interface/schemas/parse_tree.js"

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
