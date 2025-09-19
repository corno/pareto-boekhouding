import * as _pt from 'exupery-core-types'

import * as _i_resolve from "../../../core/resolve"
import * as _i_resolved from "./resolved"
import * as _i_unresolved from "./unresolved"

// **** TYPES

export type _T_Balans_Resultaat_Mutatie = <F_Source>(
    $$_: _i_unresolved._T_Balans_Resultaat_Mutatie<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    },
) => _i_resolved._T_Balans_Resultaat_Mutatie

export type _T_Beheer = <F_Source>(
    $$_: _i_unresolved._T_Beheer<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Grootboek Categorieen': _i_resolved._T_Grootboek_Categorieen
            }
        }
    },
) => _i_resolved._T_Beheer

export type _T_Eerste_boekjaar = <F_Source>(
    $$_: _i_unresolved._T_Eerste_boekjaar<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': null
        }
    },
) => _i_resolved._T_Eerste_boekjaar

export type _T_Fiscaal = <F_Source>(
    $$_: _i_unresolved._T_Fiscaal<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Fiscaal

export type _T_Grootboek_Categorieen = <F_Source>(
    $$_: _i_unresolved._T_Grootboek_Categorieen<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Fiscaal': _i_resolved._T_Fiscaal
            }
        }
    },
) => _i_resolved._T_Grootboek_Categorieen

export type _T_Grootboekrekeningen = <F_Source>(
    $$_: _i_unresolved._T_Grootboekrekeningen<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Grootboekrekeningen

export type _T_Handelstransacties = <F_Source>(
    $$_: _i_unresolved._T_Handelstransacties<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    },
) => _i_resolved._T_Handelstransacties

export type _T_Jaarbeheer = <F_Source>(
    $$_: _i_unresolved._T_Jaarbeheer<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
    },
) => _i_resolved._T_Jaarbeheer

export type _T_Jaren = <F_Source>(
    $$_: _i_unresolved._T_Jaren<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
            }
        }
    },
) => _i_resolved._T_Jaren

export type _T_Mutaties = <F_Source>(
    $$_: _i_unresolved._T_Mutaties<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    },
) => _i_resolved._T_Mutaties

export type _T_Overige_balans_item = <F_Source>(
    $$_: _i_unresolved._T_Overige_balans_item<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
    },
) => _i_resolved._T_Overige_balans_item

export type _T_Root = <F_Source>(
    $$_: _i_unresolved._T_Root<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': null
        }
    },
) => _i_resolved._T_Root

export type _T_Verwijzing_naar_Bankrekening = <F_Source>(
    $$_: _i_unresolved._T_Verwijzing_naar_Bankrekening<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    },
) => _i_resolved._T_Verwijzing_naar_Bankrekening

export type _T_Verwijzing_naar_Informele_rekening = <F_Source>(
    $$_: _i_unresolved._T_Verwijzing_naar_Informele_rekening<F_Source>,
    $$_p: {
        readonly 'location 2 string': _i_resolve._T_Location_2_String<F_Source>
        readonly 'parameters': {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    },
) => _i_resolved._T_Verwijzing_naar_Informele_rekening

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Balans_Resultaat_Mutatie = _T_Balans_Resultaat_Mutatie

export type Beheer = _T_Beheer

export type Eerste_boekjaar = _T_Eerste_boekjaar

export type Fiscaal = _T_Fiscaal

export type Grootboek_Categorieen = _T_Grootboek_Categorieen

export type Grootboekrekeningen = _T_Grootboekrekeningen

export type Handelstransacties = _T_Handelstransacties

export type Jaarbeheer = _T_Jaarbeheer

export type Jaren = _T_Jaren

export type Mutaties = _T_Mutaties

export type Overige_balans_item = _T_Overige_balans_item

export type Root = _T_Root

export type Verwijzing_naar_Bankrekening = _T_Verwijzing_naar_Bankrekening

export type Verwijzing_naar_Informele_rekening = _T_Verwijzing_naar_Informele_rekening

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Balans_Resultaat_Mutatie {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Balans_Resultaat_Mutatie<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
                
                export namespace Handelstransacties {
                }
                export type Handelstransacties<F_Source> = _i_resolved._T_Handelstransacties
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Balans_Resultaat_Mutatie
}

export namespace _T_Beheer {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Beheer<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Grootboek_Categorieen {
                }
                export type Grootboek_Categorieen<F_Source> = _i_resolved._T_Grootboek_Categorieen
            }
            export type values<F_Source> = {
                readonly 'Grootboek Categorieen': _i_resolved._T_Grootboek_Categorieen
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Grootboek Categorieen': _i_resolved._T_Grootboek_Categorieen
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Beheer
}

export namespace _T_Eerste_boekjaar {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Eerste_boekjaar<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Eerste_boekjaar
}

export namespace _T_Fiscaal {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Fiscaal<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Fiscaal
}

export namespace _T_Grootboek_Categorieen {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Grootboek_Categorieen<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Fiscaal {
                }
                export type Fiscaal<F_Source> = _i_resolved._T_Fiscaal
            }
            export type values<F_Source> = {
                readonly 'Fiscaal': _i_resolved._T_Fiscaal
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Fiscaal': _i_resolved._T_Fiscaal
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Grootboek_Categorieen
}

export namespace _T_Grootboekrekeningen {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Grootboekrekeningen<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Grootboekrekeningen
}

export namespace _T_Handelstransacties {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Handelstransacties<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Handelstransacties
}

export namespace _T_Jaarbeheer {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Jaarbeheer<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Eerste_boekjaar {
                }
                export type Eerste_boekjaar<F_Source> = _i_resolved._T_Eerste_boekjaar
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
            }
            export type values<F_Source> = {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Jaarbeheer
}

export namespace _T_Jaren {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Jaren<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Jaren
}

export namespace _T_Mutaties {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Mutaties<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
                
                export namespace Handelstransacties {
                }
                export type Handelstransacties<F_Source> = _i_resolved._T_Handelstransacties
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Mutaties
}

export namespace _T_Overige_balans_item {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Overige_balans_item<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Eerste_boekjaar {
                }
                export type Eerste_boekjaar<F_Source> = _i_resolved._T_Eerste_boekjaar
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
            }
            export type values<F_Source> = {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Overige_balans_item
}

export namespace _T_Root {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Root<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Root
}

export namespace _T_Verwijzing_naar_Bankrekening {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Verwijzing_naar_Bankrekening<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Verwijzing_naar_Bankrekening
}

export namespace _T_Verwijzing_naar_Informele_rekening {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Verwijzing_naar_Informele_rekening<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Verwijzing_naar_Informele_rekening
}

// *** ALIASES FOR NESTED TYPES

export namespace Balans_Resultaat_Mutatie {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Balans_Resultaat_Mutatie<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
                
                export namespace Handelstransacties {
                }
                export type Handelstransacties<F_Source> = _i_resolved._T_Handelstransacties
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Balans_Resultaat_Mutatie
}

export namespace Beheer {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Beheer<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Grootboek_Categorieen {
                }
                export type Grootboek_Categorieen<F_Source> = _i_resolved._T_Grootboek_Categorieen
            }
            export type values<F_Source> = {
                readonly 'Grootboek Categorieen': _i_resolved._T_Grootboek_Categorieen
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Grootboek Categorieen': _i_resolved._T_Grootboek_Categorieen
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Beheer
}

export namespace Eerste_boekjaar {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Eerste_boekjaar<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Eerste_boekjaar
}

export namespace Fiscaal {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Fiscaal<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Fiscaal
}

export namespace Grootboek_Categorieen {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Grootboek_Categorieen<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Fiscaal {
                }
                export type Fiscaal<F_Source> = _i_resolved._T_Fiscaal
            }
            export type values<F_Source> = {
                readonly 'Fiscaal': _i_resolved._T_Fiscaal
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Fiscaal': _i_resolved._T_Fiscaal
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Grootboek_Categorieen
}

export namespace Grootboekrekeningen {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Grootboekrekeningen<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Grootboekrekeningen
}

export namespace Handelstransacties {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Handelstransacties<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Handelstransacties
}

export namespace Jaarbeheer {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Jaarbeheer<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Eerste_boekjaar {
                }
                export type Eerste_boekjaar<F_Source> = _i_resolved._T_Eerste_boekjaar
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
            }
            export type values<F_Source> = {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Jaarbeheer
}

export namespace Jaren {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Jaren<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Jaren
}

export namespace Mutaties {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Mutaties<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Beheer {
                }
                export type Beheer<F_Source> = _i_resolved._T_Beheer
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
                
                export namespace Handelstransacties {
                }
                export type Handelstransacties<F_Source> = _i_resolved._T_Handelstransacties
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Beheer': _i_resolved._T_Beheer
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
                readonly 'Handelstransacties': _i_resolved._T_Handelstransacties
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Mutaties
}

export namespace Overige_balans_item {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Overige_balans_item<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
                
                export namespace Jaren {
                    
                    export namespace T {
                    }
                    export type T<F_Source> = _i_resolved._T_Jaren.D
                }
                export type Jaren<F_Source> = _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            export type lookups<F_Source> = {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            
            export namespace values {
                
                export namespace Eerste_boekjaar {
                }
                export type Eerste_boekjaar<F_Source> = _i_resolved._T_Eerste_boekjaar
                
                export namespace Grootboekrekeningen {
                }
                export type Grootboekrekeningen<F_Source> = _i_resolved._T_Grootboekrekeningen
            }
            export type values<F_Source> = {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': {
                readonly 'Jaren': _i_resolve._T_Acyclic_Lookup<_i_resolved._T_Jaren.D>
            }
            readonly 'values': {
                readonly 'Eerste boekjaar': _i_resolved._T_Eerste_boekjaar
                readonly 'Grootboekrekeningen': _i_resolved._T_Grootboekrekeningen
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Overige_balans_item
}

export namespace Root {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Root<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
            }
            export type values<F_Source> = null
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': null
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Root
}

export namespace Verwijzing_naar_Bankrekening {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Verwijzing_naar_Bankrekening<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Verwijzing_naar_Bankrekening
}

export namespace Verwijzing_naar_Informele_rekening {
    
    export namespace CONTEXT {
        export type Source<F_Source> = F_Source
    }
    export type CONTEXT<F_Source> = _i_unresolved._T_Verwijzing_naar_Informele_rekening<F_Source>
    
    export namespace PARAMS {
        
        export namespace location_2_string {
            export type Source<F_Source> = F_Source
        }
        export type location_2_string<F_Source> = _i_resolve._T_Location_2_String<F_Source>
        
        export namespace parameters {
            
            export namespace lookups {
            }
            export type lookups<F_Source> = null
            
            export namespace values {
                
                export namespace Jaarbeheer {
                }
                export type Jaarbeheer<F_Source> = _i_resolved._T_Jaarbeheer
            }
            export type values<F_Source> = {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
        export type parameters<F_Source> = {
            readonly 'lookups': null
            readonly 'values': {
                readonly 'Jaarbeheer': _i_resolved._T_Jaarbeheer
            }
        }
    }
    
    export namespace RESULT {
    }
    export type RESULT<F_Source> = _i_resolved._T_Verwijzing_naar_Informele_rekening
}
