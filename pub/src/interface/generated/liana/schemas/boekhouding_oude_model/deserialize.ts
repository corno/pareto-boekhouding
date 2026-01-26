
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Bestandsnaam_ {
    
    export type I = string
    
    export type O = i_out.Bestandsnaam
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Bestandsnaam_ = (
    context: Bestandsnaam_.I,
    abort: _pi.Abort<Bestandsnaam_.E>,
) => Bestandsnaam_.O

export namespace Root_ {
    
    export type I = string
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
) => Root_.O

export { 
    Bestandsnaam_ as Bestandsnaam, 
    Root_ as Root, 
}
