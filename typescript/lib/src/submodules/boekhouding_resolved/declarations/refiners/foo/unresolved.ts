
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'
import * as p_ri from 'pareto-core/interface/refiner'

import * as i_generic from "liana-core/interface/data/resolve"

import * as i_resolved from "../../../interface/data/resolved.js"

import * as i_unresolved from "../../../../boekhouding_unresolved/interface/data/unresolved.js"

export namespace Fiscaal_ {
    
    export type I = i_unresolved.Fiscaal
    
    export type O = i_resolved.Fiscaal
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Fiscaal_ = (
    context: Fiscaal_.I,
    abort: p_i.Abort<Fiscaal_.E>,
    lookups: symbol,
    parameters: symbol,
) => Fiscaal_.O

export namespace Grootboekrekeningen_ {
    
    export type I = i_unresolved.Grootboekrekeningen
    
    export type O = i_resolved.Grootboekrekeningen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
    }
    
}

export type Grootboekrekeningen_ = (
    context: Grootboekrekeningen_.I,
    abort: p_i.Abort<Grootboekrekeningen_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Beheer': Grootboekrekeningen_.P.Beheer
    },
) => Grootboekrekeningen_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = i_unresolved.Grootboek_Categorieen
    
    export type O = i_resolved.Grootboek_Categorieen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Fiscaal = i_resolved.Fiscaal_
        
    }
    
}

export type Grootboek_Categorieen_ = (
    context: Grootboek_Categorieen_.I,
    abort: p_i.Abort<Grootboek_Categorieen_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Fiscaal': Grootboek_Categorieen_.P.Fiscaal
    },
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = i_unresolved.Beheer
    
    export type O = i_resolved.Beheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Grootboek_Categorieen = i_resolved.Grootboek_Categorieen_
        
    }
    
}

export type Beheer_ = (
    context: Beheer_.I,
    abort: p_i.Abort<Beheer_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Grootboek Categorieen': Beheer_.P.Grootboek_Categorieen
    },
) => Beheer_.O

export namespace Jaarbeheer_ {
    
    export type I = i_unresolved.Jaarbeheer
    
    export type O = i_resolved.Jaarbeheer
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Eerste_boekjaar = i_resolved.Eerste_boekjaar_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
    }
    
}

export type Jaarbeheer_ = (
    context: Jaarbeheer_.I,
    abort: p_i.Abort<Jaarbeheer_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Jaarbeheer_.L.Jaren>
    },
    parameters: {
        readonly 'Eerste boekjaar': Jaarbeheer_.P.Eerste_boekjaar
        readonly 'Grootboekrekeningen': Jaarbeheer_.P.Grootboekrekeningen
    },
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = i_unresolved.Overige_balans_item
    
    export type O = i_resolved.Overige_balans_item
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Eerste_boekjaar = i_resolved.Eerste_boekjaar_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
    }
    
}

export type Overige_balans_item_ = (
    context: Overige_balans_item_.I,
    abort: p_i.Abort<Overige_balans_item_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Overige_balans_item_.L.Jaren>
    },
    parameters: {
        readonly 'Eerste boekjaar': Overige_balans_item_.P.Eerste_boekjaar
        readonly 'Grootboekrekeningen': Overige_balans_item_.P.Grootboekrekeningen
    },
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = i_unresolved.Verwijzing_naar_Informele_rekening
    
    export type O = i_resolved.Verwijzing_naar_Informele_rekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    context: Verwijzing_naar_Informele_rekening_.I,
    abort: p_i.Abort<Verwijzing_naar_Informele_rekening_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Jaarbeheer': Verwijzing_naar_Informele_rekening_.P.Jaarbeheer
    },
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = i_unresolved.Verwijzing_naar_Bankrekening
    
    export type O = i_resolved.Verwijzing_naar_Bankrekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    context: Verwijzing_naar_Bankrekening_.I,
    abort: p_i.Abort<Verwijzing_naar_Bankrekening_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Jaarbeheer': Verwijzing_naar_Bankrekening_.P.Jaarbeheer
    },
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = i_unresolved.Handelstransacties
    
    export type O = i_resolved.Handelstransacties
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Handelstransacties_ = (
    context: Handelstransacties_.I,
    abort: p_i.Abort<Handelstransacties_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Beheer': Handelstransacties_.P.Beheer
        readonly 'Grootboekrekeningen': Handelstransacties_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Handelstransacties_.P.Jaarbeheer
    },
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = i_unresolved.Mutaties
    
    export type O = i_resolved.Mutaties
    
    export type E = i_generic.Error
    
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
    context: Mutaties_.I,
    abort: p_i.Abort<Mutaties_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Mutaties_.L.Jaren>
    },
    parameters: {
        readonly 'Beheer': Mutaties_.P.Beheer
        readonly 'Grootboekrekeningen': Mutaties_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Mutaties_.P.Jaarbeheer
        readonly 'Handelstransacties': Mutaties_.P.Handelstransacties
    },
) => Mutaties_.O

export namespace Rekening_Mutatie_ {
    
    export type I = i_unresolved.Rekening_Mutatie
    
    export type O = i_resolved.Rekening_Mutatie
    
    export type E = i_generic.Error
    
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

export type Rekening_Mutatie_ = (
    context: Rekening_Mutatie_.I,
    abort: p_i.Abort<Rekening_Mutatie_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Rekening_Mutatie_.L.Jaren>
    },
    parameters: {
        readonly 'Beheer': Rekening_Mutatie_.P.Beheer
        readonly 'Grootboekrekeningen': Rekening_Mutatie_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Rekening_Mutatie_.P.Jaarbeheer
        readonly 'Handelstransacties': Rekening_Mutatie_.P.Handelstransacties
    },
) => Rekening_Mutatie_.O

export namespace Jaren_ {
    
    export type I = i_unresolved.Jaren
    
    export type O = i_resolved.Jaren
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
    }
    
}

export type Jaren_ = (
    context: Jaren_.I,
    abort: p_i.Abort<Jaren_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Beheer': Jaren_.P.Beheer
    },
) => Jaren_.O

export namespace Root_ {
    
    export type I = i_unresolved.Root
    
    export type O = i_resolved.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: p_i.Abort<Root_.E>,
    lookups: symbol,
    parameters: symbol,
) => Root_.O

export namespace Eerste_boekjaar_ {
    
    export type I = i_unresolved.Eerste_boekjaar
    
    export type O = i_resolved.Eerste_boekjaar
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Eerste_boekjaar_ = (
    context: Eerste_boekjaar_.I,
    abort: p_i.Abort<Eerste_boekjaar_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Eerste_boekjaar_.L.Jaren>
    },
    parameters: symbol,
) => Eerste_boekjaar_.O

export type { 
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
    Rekening_Mutatie_ as Rekening_Mutatie, 
    Jaren_ as Jaren, 
    Root_ as Root, 
    Eerste_boekjaar_ as Eerste_boekjaar, 
}
