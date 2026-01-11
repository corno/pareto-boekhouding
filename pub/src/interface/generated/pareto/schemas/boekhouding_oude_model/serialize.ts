import * as _pi from "pareto-core-interface"
    
    import * as _i_in from "./data_types/source"
    import * as _i_vs from "./value_serializers"
    
    // **** TYPES
    
    export type _T_Bestandsnaam = (
        $$_: _i_in._T_Bestandsnaam,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    export type _T_Root = (
        $$_: _i_in._T_Root,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => string
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Bestandsnaam = _T_Bestandsnaam
    
    export type Root = _T_Root
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Bestandsnaam {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Bestandsnaam
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace _T_Root {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Root
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Bestandsnaam {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Bestandsnaam
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
    
    export namespace Root {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Root
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        export type RESULT = string
    }
