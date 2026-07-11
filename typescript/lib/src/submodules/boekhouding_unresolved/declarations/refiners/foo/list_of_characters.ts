
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/deserialize"

import * as i_in from "pareto-fountain-pen/interface/data/list_of_characters"

import * as i_out from "../../../interface/schemas/unresolved.js"

export namespace Root_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: p_i.Abort<Root_.E>,
    parameters: {
        readonly 'tab size': Root_.P.tab_size
    },
) => Root_.O

export namespace Fiscaal_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Fiscaal
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Fiscaal_ = (
    context: Fiscaal_.I,
    abort: p_i.Abort<Fiscaal_.E>,
    parameters: {
        readonly 'tab size': Fiscaal_.P.tab_size
    },
) => Fiscaal_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Grootboek_Categorieen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Grootboek_Categorieen_ = (
    context: Grootboek_Categorieen_.I,
    abort: p_i.Abort<Grootboek_Categorieen_.E>,
    parameters: {
        readonly 'tab size': Grootboek_Categorieen_.P.tab_size
    },
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Beheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Beheer_ = (
    context: Beheer_.I,
    abort: p_i.Abort<Beheer_.E>,
    parameters: {
        readonly 'tab size': Beheer_.P.tab_size
    },
) => Beheer_.O

export namespace Grootboekrekeningen_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Grootboekrekeningen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Grootboekrekeningen_ = (
    context: Grootboekrekeningen_.I,
    abort: p_i.Abort<Grootboekrekeningen_.E>,
    parameters: {
        readonly 'tab size': Grootboekrekeningen_.P.tab_size
    },
) => Grootboekrekeningen_.O

export namespace Jaarbeheer_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Jaarbeheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Jaarbeheer_ = (
    context: Jaarbeheer_.I,
    abort: p_i.Abort<Jaarbeheer_.E>,
    parameters: {
        readonly 'tab size': Jaarbeheer_.P.tab_size
    },
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Overige_balans_item
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Overige_balans_item_ = (
    context: Overige_balans_item_.I,
    abort: p_i.Abort<Overige_balans_item_.E>,
    parameters: {
        readonly 'tab size': Overige_balans_item_.P.tab_size
    },
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Verwijzing_naar_Informele_rekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    context: Verwijzing_naar_Informele_rekening_.I,
    abort: p_i.Abort<Verwijzing_naar_Informele_rekening_.E>,
    parameters: {
        readonly 'tab size': Verwijzing_naar_Informele_rekening_.P.tab_size
    },
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Verwijzing_naar_Bankrekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    context: Verwijzing_naar_Bankrekening_.I,
    abort: p_i.Abort<Verwijzing_naar_Bankrekening_.E>,
    parameters: {
        readonly 'tab size': Verwijzing_naar_Bankrekening_.P.tab_size
    },
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Handelstransacties
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Handelstransacties_ = (
    context: Handelstransacties_.I,
    abort: p_i.Abort<Handelstransacties_.E>,
    parameters: {
        readonly 'tab size': Handelstransacties_.P.tab_size
    },
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Mutaties
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Mutaties_ = (
    context: Mutaties_.I,
    abort: p_i.Abort<Mutaties_.E>,
    parameters: {
        readonly 'tab size': Mutaties_.P.tab_size
    },
) => Mutaties_.O

export namespace Jaren_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Jaren
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Jaren_ = (
    context: Jaren_.I,
    abort: p_i.Abort<Jaren_.E>,
    parameters: {
        readonly 'tab size': Jaren_.P.tab_size
    },
) => Jaren_.O

export namespace Rekening_Mutatie_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Rekening_Mutatie
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Rekening_Mutatie_ = (
    context: Rekening_Mutatie_.I,
    abort: p_i.Abort<Rekening_Mutatie_.E>,
    parameters: {
        readonly 'tab size': Rekening_Mutatie_.P.tab_size
    },
) => Rekening_Mutatie_.O

export namespace Eerste_boekjaar_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Eerste_boekjaar
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Eerste_boekjaar_ = (
    context: Eerste_boekjaar_.I,
    abort: p_i.Abort<Eerste_boekjaar_.E>,
    parameters: {
        readonly 'tab size': Eerste_boekjaar_.P.tab_size
    },
) => Eerste_boekjaar_.O

export type { 
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
    Rekening_Mutatie_ as Rekening_Mutatie, 
    Eerste_boekjaar_ as Eerste_boekjaar, 
}
