
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Fiscaal_ {
    
    export type I = string
    
    export type O = i_out.Fiscaal
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Fiscaal_ = (
    context: Fiscaal_.I,
    abort: _pi.Abort<Fiscaal_.E>,
    parameters: {
        readonly 'document resource identifier': Fiscaal_.P.document_resource_identifier
        readonly 'indentation': Fiscaal_.P.indentation
    },
) => Fiscaal_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = string
    
    export type O = i_out.Grootboek_Categorieen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Grootboek_Categorieen_ = (
    context: Grootboek_Categorieen_.I,
    abort: _pi.Abort<Grootboek_Categorieen_.E>,
    parameters: {
        readonly 'document resource identifier': Grootboek_Categorieen_.P.document_resource_identifier
        readonly 'indentation': Grootboek_Categorieen_.P.indentation
    },
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = string
    
    export type O = i_out.Beheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Beheer_ = (
    context: Beheer_.I,
    abort: _pi.Abort<Beheer_.E>,
    parameters: {
        readonly 'document resource identifier': Beheer_.P.document_resource_identifier
        readonly 'indentation': Beheer_.P.indentation
    },
) => Beheer_.O

export namespace Grootboekrekeningen_ {
    
    export type I = string
    
    export type O = i_out.Grootboekrekeningen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Grootboekrekeningen_ = (
    context: Grootboekrekeningen_.I,
    abort: _pi.Abort<Grootboekrekeningen_.E>,
    parameters: {
        readonly 'document resource identifier': Grootboekrekeningen_.P.document_resource_identifier
        readonly 'indentation': Grootboekrekeningen_.P.indentation
    },
) => Grootboekrekeningen_.O

export namespace Jaarbeheer_ {
    
    export type I = string
    
    export type O = i_out.Jaarbeheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Jaarbeheer_ = (
    context: Jaarbeheer_.I,
    abort: _pi.Abort<Jaarbeheer_.E>,
    parameters: {
        readonly 'document resource identifier': Jaarbeheer_.P.document_resource_identifier
        readonly 'indentation': Jaarbeheer_.P.indentation
    },
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = string
    
    export type O = i_out.Overige_balans_item
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Overige_balans_item_ = (
    context: Overige_balans_item_.I,
    abort: _pi.Abort<Overige_balans_item_.E>,
    parameters: {
        readonly 'document resource identifier': Overige_balans_item_.P.document_resource_identifier
        readonly 'indentation': Overige_balans_item_.P.indentation
    },
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = string
    
    export type O = i_out.Verwijzing_naar_Informele_rekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    context: Verwijzing_naar_Informele_rekening_.I,
    abort: _pi.Abort<Verwijzing_naar_Informele_rekening_.E>,
    parameters: {
        readonly 'document resource identifier': Verwijzing_naar_Informele_rekening_.P.document_resource_identifier
        readonly 'indentation': Verwijzing_naar_Informele_rekening_.P.indentation
    },
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = string
    
    export type O = i_out.Verwijzing_naar_Bankrekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    context: Verwijzing_naar_Bankrekening_.I,
    abort: _pi.Abort<Verwijzing_naar_Bankrekening_.E>,
    parameters: {
        readonly 'document resource identifier': Verwijzing_naar_Bankrekening_.P.document_resource_identifier
        readonly 'indentation': Verwijzing_naar_Bankrekening_.P.indentation
    },
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = string
    
    export type O = i_out.Handelstransacties
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Handelstransacties_ = (
    context: Handelstransacties_.I,
    abort: _pi.Abort<Handelstransacties_.E>,
    parameters: {
        readonly 'document resource identifier': Handelstransacties_.P.document_resource_identifier
        readonly 'indentation': Handelstransacties_.P.indentation
    },
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = string
    
    export type O = i_out.Mutaties
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Mutaties_ = (
    context: Mutaties_.I,
    abort: _pi.Abort<Mutaties_.E>,
    parameters: {
        readonly 'document resource identifier': Mutaties_.P.document_resource_identifier
        readonly 'indentation': Mutaties_.P.indentation
    },
) => Mutaties_.O

export namespace Jaren_ {
    
    export type I = string
    
    export type O = i_out.Jaren
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Jaren_ = (
    context: Jaren_.I,
    abort: _pi.Abort<Jaren_.E>,
    parameters: {
        readonly 'document resource identifier': Jaren_.P.document_resource_identifier
        readonly 'indentation': Jaren_.P.indentation
    },
) => Jaren_.O

export namespace Balans_Resultaat_Mutatie_ {
    
    export type I = string
    
    export type O = i_out.Balans_Resultaat_Mutatie
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Balans_Resultaat_Mutatie_ = (
    context: Balans_Resultaat_Mutatie_.I,
    abort: _pi.Abort<Balans_Resultaat_Mutatie_.E>,
    parameters: {
        readonly 'document resource identifier': Balans_Resultaat_Mutatie_.P.document_resource_identifier
        readonly 'indentation': Balans_Resultaat_Mutatie_.P.indentation
    },
) => Balans_Resultaat_Mutatie_.O

export namespace Eerste_boekjaar_ {
    
    export type I = string
    
    export type O = i_out.Eerste_boekjaar
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Eerste_boekjaar_ = (
    context: Eerste_boekjaar_.I,
    abort: _pi.Abort<Eerste_boekjaar_.E>,
    parameters: {
        readonly 'document resource identifier': Eerste_boekjaar_.P.document_resource_identifier
        readonly 'indentation': Eerste_boekjaar_.P.indentation
    },
) => Eerste_boekjaar_.O

export namespace Root_ {
    
    export type I = string
    
    export type O = i_out.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: _pi.Abort<Root_.E>,
    parameters: {
        readonly 'document resource identifier': Root_.P.document_resource_identifier
        readonly 'indentation': Root_.P.indentation
    },
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
