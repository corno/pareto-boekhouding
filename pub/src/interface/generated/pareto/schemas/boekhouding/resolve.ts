
import * as _pi from "pareto-core/dist/interface"

import * as i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Fiscaal_ {
    
    export type I = i_unresolved.Fiscaal
    
    export type O = i_resolved.Fiscaal
    
    export namespace P {
        
    }
    
}

export type Fiscaal_ = (
    $$_: Fiscaal_.I,
    $$_lookups: null,
    $$_p: null,
) => Fiscaal_.O

export namespace Grootboekrekeningen_ {
    
    export type I = i_unresolved.Grootboekrekeningen
    
    export type O = i_resolved.Grootboekrekeningen
    
    export namespace P {
        
    }
    
}

export type Grootboekrekeningen_ = (
    $$_: Grootboekrekeningen_.I,
    $$_lookups: null,
    $$_p: null,
) => Grootboekrekeningen_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = i_unresolved.Grootboek_Categorieen
    
    export type O = i_resolved.Grootboek_Categorieen
    
    export namespace P {
        
        export type Fiscaal = i_resolved.Fiscaal_
        
    }
    
}

export type Grootboek_Categorieen_ = (
    $$_: Grootboek_Categorieen_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'Fiscaal': Grootboek_Categorieen_.P.Fiscaal
    },
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = i_unresolved.Beheer
    
    export type O = i_resolved.Beheer
    
    export namespace P {
        
        export type Grootboek_Categorieen = i_resolved.Grootboek_Categorieen_
        
    }
    
}

export type Beheer_ = (
    $$_: Beheer_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'Grootboek Categorieen': Beheer_.P.Grootboek_Categorieen
    },
) => Beheer_.O

export namespace Jaarbeheer_ {
    
    export type I = i_unresolved.Jaarbeheer
    
    export type O = i_resolved.Jaarbeheer
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Eerste_boekjaar = i_resolved.Eerste_boekjaar_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
    }
    
}

export type Jaarbeheer_ = (
    $$_: Jaarbeheer_.I,
    $$_lookups: {
        readonly 'Jaren': _pi.Acyclic_Lookup<Jaarbeheer_.L.Jaren>
    },
    $$_p: {
        readonly 'Eerste boekjaar': Jaarbeheer_.P.Eerste_boekjaar
        readonly 'Grootboekrekeningen': Jaarbeheer_.P.Grootboekrekeningen
    },
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = i_unresolved.Overige_balans_item
    
    export type O = i_resolved.Overige_balans_item
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Eerste_boekjaar = i_resolved.Eerste_boekjaar_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
    }
    
}

export type Overige_balans_item_ = (
    $$_: Overige_balans_item_.I,
    $$_lookups: {
        readonly 'Jaren': _pi.Acyclic_Lookup<Overige_balans_item_.L.Jaren>
    },
    $$_p: {
        readonly 'Eerste boekjaar': Overige_balans_item_.P.Eerste_boekjaar
        readonly 'Grootboekrekeningen': Overige_balans_item_.P.Grootboekrekeningen
    },
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = i_unresolved.Verwijzing_naar_Informele_rekening
    
    export type O = i_resolved.Verwijzing_naar_Informele_rekening
    
    export namespace P {
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    $$_: Verwijzing_naar_Informele_rekening_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'Jaarbeheer': Verwijzing_naar_Informele_rekening_.P.Jaarbeheer
    },
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = i_unresolved.Verwijzing_naar_Bankrekening
    
    export type O = i_resolved.Verwijzing_naar_Bankrekening
    
    export namespace P {
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    $$_: Verwijzing_naar_Bankrekening_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'Jaarbeheer': Verwijzing_naar_Bankrekening_.P.Jaarbeheer
    },
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = i_unresolved.Handelstransacties
    
    export type O = i_resolved.Handelstransacties
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Handelstransacties_ = (
    $$_: Handelstransacties_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'Beheer': Handelstransacties_.P.Beheer
        readonly 'Grootboekrekeningen': Handelstransacties_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Handelstransacties_.P.Jaarbeheer
    },
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = i_unresolved.Mutaties
    
    export type O = i_resolved.Mutaties
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
        export type Handelstransacties = i_resolved.Handelstransacties_
        
    }
    
}

export type Mutaties_ = (
    $$_: Mutaties_.I,
    $$_lookups: {
        readonly 'Jaren': _pi.Acyclic_Lookup<Mutaties_.L.Jaren>
    },
    $$_p: {
        readonly 'Beheer': Mutaties_.P.Beheer
        readonly 'Grootboekrekeningen': Mutaties_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Mutaties_.P.Jaarbeheer
        readonly 'Handelstransacties': Mutaties_.P.Handelstransacties
    },
) => Mutaties_.O

export namespace Balans_Resultaat_Mutatie_ {
    
    export type I = i_unresolved.Balans_Resultaat_Mutatie
    
    export type O = i_resolved.Balans_Resultaat_Mutatie
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
        export type Handelstransacties = i_resolved.Handelstransacties_
        
    }
    
}

export type Balans_Resultaat_Mutatie_ = (
    $$_: Balans_Resultaat_Mutatie_.I,
    $$_lookups: {
        readonly 'Jaren': _pi.Acyclic_Lookup<Balans_Resultaat_Mutatie_.L.Jaren>
    },
    $$_p: {
        readonly 'Beheer': Balans_Resultaat_Mutatie_.P.Beheer
        readonly 'Grootboekrekeningen': Balans_Resultaat_Mutatie_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Balans_Resultaat_Mutatie_.P.Jaarbeheer
        readonly 'Handelstransacties': Balans_Resultaat_Mutatie_.P.Handelstransacties
    },
) => Balans_Resultaat_Mutatie_.O

export namespace Jaren_ {
    
    export type I = i_unresolved.Jaren
    
    export type O = i_resolved.Jaren
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
    }
    
}

export type Jaren_ = (
    $$_: Jaren_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'Beheer': Jaren_.P.Beheer
    },
) => Jaren_.O

export namespace Root_ {
    
    export type I = i_unresolved.Root
    
    export type O = i_resolved.Root
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    $$_: Root_.I,
    $$_lookups: null,
    $$_p: null,
) => Root_.O

export namespace Eerste_boekjaar_ {
    
    export type I = i_unresolved.Eerste_boekjaar
    
    export type O = i_resolved.Eerste_boekjaar
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Eerste_boekjaar_ = (
    $$_: Eerste_boekjaar_.I,
    $$_lookups: {
        readonly 'Jaren': _pi.Acyclic_Lookup<Eerste_boekjaar_.L.Jaren>
    },
    $$_p: null,
) => Eerste_boekjaar_.O

export { 
    Fiscaal_ as Fiscaal, 
    Grootboekrekeningen_ as Grootboekrekeningen, 
    Grootboek_Categorieen_ as Grootboek_Categorieen, 
    Beheer_ as Beheer, 
    Jaarbeheer_ as Jaarbeheer, 
    Overige_balans_item_ as Overige_balans_item, 
    Verwijzing_naar_Informele_rekening_ as Verwijzing_naar_Informele_rekening, 
    Verwijzing_naar_Bankrekening_ as Verwijzing_naar_Bankrekening, 
    Handelstransacties_ as Handelstransacties, 
    Mutaties_ as Mutaties, 
    Balans_Resultaat_Mutatie_ as Balans_Resultaat_Mutatie, 
    Jaren_ as Jaren, 
    Root_ as Root, 
    Eerste_boekjaar_ as Eerste_boekjaar, 
}
