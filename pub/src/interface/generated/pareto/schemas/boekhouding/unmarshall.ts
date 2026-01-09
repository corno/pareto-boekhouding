import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "../../core/astn_source"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Fiscaal = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Fiscaal<_i_in._T_Range>

export type _T_Grootboek_Categorieen = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Grootboek_Categorieen<_i_in._T_Range>

export type _T_Beheer = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Beheer<_i_in._T_Range>

export type _T_Grootboekrekeningen = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Grootboekrekeningen<_i_in._T_Range>

export type _T_Jaarbeheer = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Jaarbeheer<_i_in._T_Range>

export type _T_Overige_balans_item = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Overige_balans_item<_i_in._T_Range>

export type _T_Verwijzing_naar_Informele_rekening = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Verwijzing_naar_Informele_rekening<_i_in._T_Range>

export type _T_Verwijzing_naar_Bankrekening = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Verwijzing_naar_Bankrekening<_i_in._T_Range>

export type _T_Handelstransacties = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Handelstransacties<_i_in._T_Range>

export type _T_Mutaties = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Mutaties<_i_in._T_Range>

export type _T_Jaren = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Jaren<_i_in._T_Range>

export type _T_Balans_Resultaat_Mutatie = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Balans_Resultaat_Mutatie<_i_in._T_Range>

export type _T_Eerste_boekjaar = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Eerste_boekjaar<_i_in._T_Range>

export type _T_Root = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Root<_i_in._T_Range>

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
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Fiscaal<_i_in._T_Range>
}

export namespace _T_Grootboek_Categorieen {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Grootboek_Categorieen<_i_in._T_Range>
}

export namespace _T_Beheer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Beheer<_i_in._T_Range>
}

export namespace _T_Grootboekrekeningen {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Grootboekrekeningen<_i_in._T_Range>
}

export namespace _T_Jaarbeheer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Jaarbeheer<_i_in._T_Range>
}

export namespace _T_Overige_balans_item {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Overige_balans_item<_i_in._T_Range>
}

export namespace _T_Verwijzing_naar_Informele_rekening {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Verwijzing_naar_Informele_rekening<_i_in._T_Range>
}

export namespace _T_Verwijzing_naar_Bankrekening {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Verwijzing_naar_Bankrekening<_i_in._T_Range>
}

export namespace _T_Handelstransacties {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Handelstransacties<_i_in._T_Range>
}

export namespace _T_Mutaties {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Mutaties<_i_in._T_Range>
}

export namespace _T_Jaren {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Jaren<_i_in._T_Range>
}

export namespace _T_Balans_Resultaat_Mutatie {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Balans_Resultaat_Mutatie<_i_in._T_Range>
}

export namespace _T_Eerste_boekjaar {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Eerste_boekjaar<_i_in._T_Range>
}

export namespace _T_Root {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Root<_i_in._T_Range>
}

// *** ALIASES FOR NESTED TYPES

export namespace Fiscaal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Fiscaal<_i_in._T_Range>
}

export namespace Grootboek_Categorieen {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Grootboek_Categorieen<_i_in._T_Range>
}

export namespace Beheer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Beheer<_i_in._T_Range>
}

export namespace Grootboekrekeningen {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Grootboekrekeningen<_i_in._T_Range>
}

export namespace Jaarbeheer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Jaarbeheer<_i_in._T_Range>
}

export namespace Overige_balans_item {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Overige_balans_item<_i_in._T_Range>
}

export namespace Verwijzing_naar_Informele_rekening {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Verwijzing_naar_Informele_rekening<_i_in._T_Range>
}

export namespace Verwijzing_naar_Bankrekening {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Verwijzing_naar_Bankrekening<_i_in._T_Range>
}

export namespace Handelstransacties {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Handelstransacties<_i_in._T_Range>
}

export namespace Mutaties {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Mutaties<_i_in._T_Range>
}

export namespace Jaren {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Jaren<_i_in._T_Range>
}

export namespace Balans_Resultaat_Mutatie {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Balans_Resultaat_Mutatie<_i_in._T_Range>
}

export namespace Eerste_boekjaar {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Eerste_boekjaar<_i_in._T_Range>
}

export namespace Root {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Root<_i_in._T_Range>
}
