
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../../interface/data/data.js"

export namespace Root_ {
    
    export type I = i_in.Root
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
) => Root_.O

export namespace Bestandsnaam_ {
    
    export type I = i_in.Bestandsnaam
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Bestandsnaam_ = (
    context: Bestandsnaam_.I,
) => Bestandsnaam_.O

export type { 
    Root_ as Root, 
    Bestandsnaam_ as Bestandsnaam, 
}
