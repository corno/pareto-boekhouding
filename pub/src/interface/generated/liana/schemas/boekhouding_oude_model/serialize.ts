    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_in from "./data"
    
    import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
    
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
    
    export { 
        Root_ as Root, 
        Bestandsnaam_ as Bestandsnaam, 
    }
