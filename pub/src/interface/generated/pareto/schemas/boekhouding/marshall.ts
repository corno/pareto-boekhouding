import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "../../core/astn_target"
    import * as _i_in from "./data_types/source"
    import * as _i_vs from "./value_serializers"
    
    // **** TYPES
    
    export type _T_Fiscaal = (
        $$_: _i_in._T_Fiscaal,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Grootboek_Categorieen = (
        $$_: _i_in._T_Grootboek_Categorieen,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Beheer = (
        $$_: _i_in._T_Beheer,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Grootboekrekeningen = (
        $$_: _i_in._T_Grootboekrekeningen,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Jaarbeheer = (
        $$_: _i_in._T_Jaarbeheer,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Overige_balans_item = (
        $$_: _i_in._T_Overige_balans_item,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Verwijzing_naar_Informele_rekening = (
        $$_: _i_in._T_Verwijzing_naar_Informele_rekening,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Verwijzing_naar_Bankrekening = (
        $$_: _i_in._T_Verwijzing_naar_Bankrekening,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Handelstransacties = (
        $$_: _i_in._T_Handelstransacties,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Mutaties = (
        $$_: _i_in._T_Mutaties,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Jaren = (
        $$_: _i_in._T_Jaren,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Balans_Resultaat_Mutatie = (
        $$_: _i_in._T_Balans_Resultaat_Mutatie,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Eerste_boekjaar = (
        $$_: _i_in._T_Eerste_boekjaar,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    export type _T_Root = (
        $$_: _i_in._T_Root,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Fiscaal = _T_Fiscaal
    
    export type Grootboek_Categorieen = _T_Grootboek_Categorieen
    
    export type Beheer = _T_Beheer
    
    export type Grootboekrekeningen = _T_Grootboekrekeningen
    
    export type Jaarbeheer = _T_Jaarbeheer
    
    export type Overige_balans_item = _T_Overige_balans_item
    
    export type Verwijzing_naar_Informele_rekening = _T_Verwijzing_naar_Informele_rekening
    
    export type Verwijzing_naar_Bankrekening = _T_Verwijzing_naar_Bankrekening
    
    export type Handelstransacties = _T_Handelstransacties
    
    export type Mutaties = _T_Mutaties
    
    export type Jaren = _T_Jaren
    
    export type Balans_Resultaat_Mutatie = _T_Balans_Resultaat_Mutatie
    
    export type Eerste_boekjaar = _T_Eerste_boekjaar
    
    export type Root = _T_Root
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Fiscaal {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Fiscaal
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Grootboek_Categorieen {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Grootboek_Categorieen
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Beheer {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Beheer
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Grootboekrekeningen {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Grootboekrekeningen
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Jaarbeheer {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Jaarbeheer
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Overige_balans_item {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Overige_balans_item
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Verwijzing_naar_Informele_rekening {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Verwijzing_naar_Informele_rekening
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Verwijzing_naar_Bankrekening {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Verwijzing_naar_Bankrekening
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Handelstransacties {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Handelstransacties
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Mutaties {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Mutaties
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Jaren {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Jaren
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Balans_Resultaat_Mutatie {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Balans_Resultaat_Mutatie
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace _T_Eerste_boekjaar {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Eerste_boekjaar
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
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
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Fiscaal {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Fiscaal
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Grootboek_Categorieen {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Grootboek_Categorieen
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Beheer {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Beheer
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Grootboekrekeningen {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Grootboekrekeningen
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Jaarbeheer {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Jaarbeheer
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Overige_balans_item {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Overige_balans_item
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Verwijzing_naar_Informele_rekening {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Verwijzing_naar_Informele_rekening
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Verwijzing_naar_Bankrekening {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Verwijzing_naar_Bankrekening
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Handelstransacties {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Handelstransacties
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Mutaties {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Mutaties
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Jaren {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Jaren
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Balans_Resultaat_Mutatie {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Balans_Resultaat_Mutatie
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    export namespace Eerste_boekjaar {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Eerste_boekjaar
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
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
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
