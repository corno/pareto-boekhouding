
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_in from "../../../interface/data/data.js"

import * as i_out from "pareto-fountain-pen/interface/data/prose"

export namespace Root_ {
    
    export type I = i_in.Root
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
) => Root_.O

export namespace Bestandsnaam_ {
    
    export type I = i_in.Bestandsnaam
    
    export type O = i_out.Paragraph
    
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
