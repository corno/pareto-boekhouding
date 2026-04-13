
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "../../../data/unresolved"

import * as i_in from "../../../data/resolved"

export namespace Root_ {
    
    export type I = i_in.Root
    
    export type O = i_out.Root
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
) => Root_.O

export namespace Fiscaal_ {
    
    export type I = i_in.Fiscaal
    
    export type O = i_out.Fiscaal
    
    export namespace P {
        
    }
    
}

export type Fiscaal_ = (
    context: Fiscaal_.I,
) => Fiscaal_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = i_in.Grootboek_Categorieen
    
    export type O = i_out.Grootboek_Categorieen
    
    export namespace P {
        
    }
    
}

export type Grootboek_Categorieen_ = (
    context: Grootboek_Categorieen_.I,
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = i_in.Beheer
    
    export type O = i_out.Beheer
    
    export namespace P {
        
    }
    
}

export type Beheer_ = (
    context: Beheer_.I,
) => Beheer_.O

export namespace Grootboekrekeningen_ {
    
    export type I = i_in.Grootboekrekeningen
    
    export type O = i_out.Grootboekrekeningen
    
    export namespace P {
        
    }
    
}

export type Grootboekrekeningen_ = (
    context: Grootboekrekeningen_.I,
) => Grootboekrekeningen_.O

export namespace Jaarbeheer_ {
    
    export type I = i_in.Jaarbeheer
    
    export type O = i_out.Jaarbeheer
    
    export namespace P {
        
    }
    
}

export type Jaarbeheer_ = (
    context: Jaarbeheer_.I,
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = i_in.Overige_balans_item
    
    export type O = i_out.Overige_balans_item
    
    export namespace P {
        
    }
    
}

export type Overige_balans_item_ = (
    context: Overige_balans_item_.I,
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = i_in.Verwijzing_naar_Informele_rekening
    
    export type O = i_out.Verwijzing_naar_Informele_rekening
    
    export namespace P {
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    context: Verwijzing_naar_Informele_rekening_.I,
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = i_in.Verwijzing_naar_Bankrekening
    
    export type O = i_out.Verwijzing_naar_Bankrekening
    
    export namespace P {
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    context: Verwijzing_naar_Bankrekening_.I,
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = i_in.Handelstransacties
    
    export type O = i_out.Handelstransacties
    
    export namespace P {
        
    }
    
}

export type Handelstransacties_ = (
    context: Handelstransacties_.I,
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = i_in.Mutaties
    
    export type O = i_out.Mutaties
    
    export namespace P {
        
    }
    
}

export type Mutaties_ = (
    context: Mutaties_.I,
) => Mutaties_.O

export namespace Jaren_ {
    
    export type I = i_in.Jaren
    
    export type O = i_out.Jaren
    
    export namespace P {
        
    }
    
}

export type Jaren_ = (
    context: Jaren_.I,
) => Jaren_.O

export namespace Balans_Resultaat_Mutatie_ {
    
    export type I = i_in.Balans_Resultaat_Mutatie
    
    export type O = i_out.Balans_Resultaat_Mutatie
    
    export namespace P {
        
    }
    
}

export type Balans_Resultaat_Mutatie_ = (
    context: Balans_Resultaat_Mutatie_.I,
) => Balans_Resultaat_Mutatie_.O

export namespace Eerste_boekjaar_ {
    
    export type I = i_in.Eerste_boekjaar
    
    export type O = i_out.Eerste_boekjaar
    
    export namespace P {
        
    }
    
}

export type Eerste_boekjaar_ = (
    context: Eerste_boekjaar_.I,
) => Eerste_boekjaar_.O

export { 
    Root_ as Root, 
    Fiscaal_ as Fiscaal, 
    Grootboek_Categorieen_ as Grootboek_Categorieen, 
    Beheer_ as Beheer, 
    Grootboekrekeningen_ as Grootboekrekeningen, 
    Jaarbeheer_ as Jaarbeheer, 
    Overige_balans_item_ as Overige_balans_item, 
    Verwijzing_naar_Informele_rekening_ as Verwijzing_naar_Informele_rekening, 
    Verwijzing_naar_Bankrekening_ as Verwijzing_naar_Bankrekening, 
    Handelstransacties_ as Handelstransacties, 
    Mutaties_ as Mutaties, 
    Jaren_ as Jaren, 
    Balans_Resultaat_Mutatie_ as Balans_Resultaat_Mutatie, 
    Eerste_boekjaar_ as Eerste_boekjaar, 
}
