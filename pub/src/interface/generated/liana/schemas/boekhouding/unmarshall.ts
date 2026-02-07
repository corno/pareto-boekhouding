
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Fiscaal_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Fiscaal
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Fiscaal_ = (
    context: Fiscaal_.I,
    abort: _pi.Abort<Fiscaal_.E>,
) => Fiscaal_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Grootboek_Categorieen
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Grootboek_Categorieen_ = (
    context: Grootboek_Categorieen_.I,
    abort: _pi.Abort<Grootboek_Categorieen_.E>,
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Beheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Beheer_ = (
    context: Beheer_.I,
    abort: _pi.Abort<Beheer_.E>,
) => Beheer_.O

export namespace Grootboekrekeningen_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Grootboekrekeningen
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Grootboekrekeningen_ = (
    context: Grootboekrekeningen_.I,
    abort: _pi.Abort<Grootboekrekeningen_.E>,
) => Grootboekrekeningen_.O

export namespace Jaarbeheer_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Jaarbeheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Jaarbeheer_ = (
    context: Jaarbeheer_.I,
    abort: _pi.Abort<Jaarbeheer_.E>,
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Overige_balans_item
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Overige_balans_item_ = (
    context: Overige_balans_item_.I,
    abort: _pi.Abort<Overige_balans_item_.E>,
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Verwijzing_naar_Informele_rekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    context: Verwijzing_naar_Informele_rekening_.I,
    abort: _pi.Abort<Verwijzing_naar_Informele_rekening_.E>,
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Verwijzing_naar_Bankrekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    context: Verwijzing_naar_Bankrekening_.I,
    abort: _pi.Abort<Verwijzing_naar_Bankrekening_.E>,
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Handelstransacties
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Handelstransacties_ = (
    context: Handelstransacties_.I,
    abort: _pi.Abort<Handelstransacties_.E>,
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Mutaties
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Mutaties_ = (
    context: Mutaties_.I,
    abort: _pi.Abort<Mutaties_.E>,
) => Mutaties_.O

export namespace Jaren_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Jaren
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Jaren_ = (
    context: Jaren_.I,
    abort: _pi.Abort<Jaren_.E>,
) => Jaren_.O

export namespace Balans_Resultaat_Mutatie_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Balans_Resultaat_Mutatie
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Balans_Resultaat_Mutatie_ = (
    context: Balans_Resultaat_Mutatie_.I,
    abort: _pi.Abort<Balans_Resultaat_Mutatie_.E>,
) => Balans_Resultaat_Mutatie_.O

export namespace Eerste_boekjaar_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Eerste_boekjaar
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Eerste_boekjaar_ = (
    context: Eerste_boekjaar_.I,
    abort: _pi.Abort<Eerste_boekjaar_.E>,
) => Eerste_boekjaar_.O

export namespace Root_ {
    
    export type I = i_in.Value
    
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
    Root_ as Root, 
}
