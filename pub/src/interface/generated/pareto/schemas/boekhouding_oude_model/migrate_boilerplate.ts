
import * as _pi from "pareto-core-interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Bestandsnaam_ {
    
    export type I = i_in.Bestandsnaam
    
    export type O = i_out.Bestandsnaam
    
    export namespace P {
        
    }
    
}

export type Bestandsnaam_ = (
    $$_: Bestandsnaam_.I,
) => Bestandsnaam_.O

export namespace Root_ {
    
    export type I = i_in.Root
    
    export type O = i_out.Root
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    $$_: Root_.I,
) => Root_.O

export { 
    Bestandsnaam_ as Bestandsnaam, 
    Root_ as Root, 
}
