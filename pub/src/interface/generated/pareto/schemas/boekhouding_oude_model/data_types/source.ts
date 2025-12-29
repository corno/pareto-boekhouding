import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Bestandsnaam = string

export type _T_Root = {
    readonly 'Bankrekeningen': _i_core._T_Dictionary<null, null>
    readonly 'Beheer': {
        readonly 'Balans': {
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        readonly 'BTW-categorieen': _i_core._T_Dictionary<null, {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
                | readonly ['Nee', null]
            >
        }>
        readonly 'Gebruikers': _i_core._T_Dictionary<null, {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }>
        readonly 'Huidige datum': number
        readonly 'Resultaat': {
            readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
    }
    readonly 'Informele rekeningen': _i_core._T_Dictionary<null, null>
    readonly 'Jaren': _i_core._T_Dictionary<null, {
        readonly 'Afgesloten': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Balans grootboekrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Nog te verwerken', null]
                    | readonly ['Verwerkt', {
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                        >
                    }]
                >
            }>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Rekening': string
                }]
            >
        }>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'BTW periode saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'BTW periodes': _i_core._T_Dictionary<null, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
            readonly 'Documenten': _i_core._T_Dictionary<null, {
                readonly 'Bestand': _T_Bestandsnaam
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<null, 
                | readonly ['Aangegeven', {
                    readonly 'Afronding': number
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                }]
                | readonly ['Openstaand', null]
            >
        }>
        readonly 'Eerste boekjaar': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Vorig boekjaar': string
            }]
        >
        readonly 'Grootboekrekening voor BTW afrondingen': string
        readonly 'Grootboekrekening voor nog aan te geven BTW': string
        readonly 'Grootboekrekening voor resultaat dit jaar': string
        readonly 'Grootboekrekening voor winstreserve': string
        readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Rekening': string
                }]
            >
        }>
        readonly 'Inkopen': _i_core._T_Dictionary<null, {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': string
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', {
                    readonly 'BTW-periode': string
                }]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': string
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': _T_Bestandsnaam
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
                | readonly ['Nog toevoegen', null]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': _i_core._T_State_Group<null, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Balans', {
                        readonly 'Balans item': string
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': string
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': string
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': string
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': string
                    readonly 'Medewerker': string
                }]
            >
        }>
        readonly 'Inkoop saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'Overige balans items': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Grootboekrekening': string
                readonly 'Omschrijving': string
            }>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Balans item': string
                }]
            >
        }>
        readonly 'Resultaat grootboekrekeningen': _i_core._T_Dictionary<null, null>
        readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
        readonly 'Startdatum boekjaar': number
        readonly 'Verkoop saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'Verkopen': _i_core._T_Dictionary<null, {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': string
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': string
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': _T_Bestandsnaam
                }]
            >
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': string
                    readonly 'Offerte': string
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': string
                }]
            >
            readonly 'Datum': number
            readonly 'Debiteur': string
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': string
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': string
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': string
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': string
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': string
                    }]
                >
            }>
        }>
        readonly 'Verrekenposten': _i_core._T_Dictionary<null, {
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Inkoop', {
                        readonly 'Jaar': string
                        readonly 'Inkoop': string
                    }]
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': string
                    }]
                    | readonly ['Verkoop', {
                        readonly 'Jaar': string
                        readonly 'Verkoop': string
                    }]
                    | readonly ['BTW-periode', {
                        readonly 'Jaar': string
                        readonly 'BTW-periode': string
                    }]
                >
            }>
        }>
    }>
    readonly 'Klanten': _i_core._T_Dictionary<null, {
        readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<null, {
            readonly 'Periodes': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
            }>
        }>
        readonly 'Projecten': _i_core._T_Dictionary<null, {
            readonly 'Offertes': _i_core._T_Dictionary<null, {
                readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Bedrag': number
                            readonly 'Betaaldatum': number
                        }]
                    >
                }>
            }>
        }>
    }>
    readonly 'Leveranciers': _i_core._T_Dictionary<null, null>
    readonly 'Medewerkers': _i_core._T_Dictionary<null, null>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Bestandsnaam = _T_Bestandsnaam

export type Root = _T_Root

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Root {
    
    export namespace Bankrekeningen {
        
        export namespace D {
        }
        export type D = null
    }
    export type Bankrekeningen = _i_core._T_Dictionary<null, null>
    
    export namespace Beheer {
        
        export namespace Balans {
            
            export namespace Grootboekrekeningen {
                
                export namespace D {
                    export type Hoofdcategorie = string
                    export type Subcategorie = string
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Activa {
                            }
                            export type Activa = null
                            
                            export namespace Passiva {
                            }
                            export type Passiva = null
                        }
                        export type SG = 
                            | readonly ['Activa', null]
                            | readonly ['Passiva', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                }
                export type D = {
                    readonly 'Hoofdcategorie': string
                    readonly 'Subcategorie': string
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                }
            }
            export type Grootboekrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            
            export namespace Hoofdcategorieen {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Activa {
                            }
                            export type Activa = null
                            
                            export namespace Passiva {
                            }
                            export type Passiva = null
                        }
                        export type SG = 
                            | readonly ['Activa', null]
                            | readonly ['Passiva', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                            export type Hoofdcategorie_fiscus = string
                            export type Subcategorie_fiscus = string
                        }
                        export type D = {
                            readonly 'Hoofdcategorie fiscus': string
                            readonly 'Subcategorie fiscus': string
                        }
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
            }
            export type Hoofdcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            
            export namespace Hoofdcategorieen_fiscus {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Activa {
                            }
                            export type Activa = null
                            
                            export namespace Passiva {
                            }
                            export type Passiva = null
                        }
                        export type SG = 
                            | readonly ['Activa', null]
                            | readonly ['Passiva', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                        }
                        export type D = null
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, null>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
                }
            }
            export type Hoofdcategorieen_fiscus = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        export type Balans = {
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        
        export namespace BTW$mi_categorieen {
            
            export namespace D {
                
                export namespace BTW$mi_heffing {
                    
                    export namespace SG {
                        
                        export namespace Ja {
                            export type BTW$mi_promillage = number
                        }
                        export type Ja = {
                            readonly 'BTW-promillage': number
                        }
                        
                        export namespace Nee {
                        }
                        export type Nee = null
                    }
                    export type SG = 
                        | readonly ['Ja', {
                            readonly 'BTW-promillage': number
                        }]
                        | readonly ['Nee', null]
                }
                export type BTW$mi_heffing = _i_core._T_State_Group<null, 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
                    | readonly ['Nee', null]
                >
            }
            export type D = {
                readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
                    | readonly ['Nee', null]
                >
            }
        }
        export type BTW$mi_categorieen = _i_core._T_Dictionary<null, {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
                | readonly ['Nee', null]
            >
        }>
        
        export namespace Gebruikers {
            
            export namespace D {
                export type Volledige_naam = string
                export type Wachtwoord = string
            }
            export type D = {
                readonly 'Volledige naam': string
                readonly 'Wachtwoord': string
            }
        }
        export type Gebruikers = _i_core._T_Dictionary<null, {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }>
        export type Huidige_datum = number
        
        export namespace Resultaat {
            
            export namespace Correctietypes_vennootschapsbelasting {
                
                export namespace D {
                    export type Te_corrigeren_promillage = number
                }
                export type D = {
                    readonly 'Te corrigeren promillage': number
                }
            }
            export type Correctietypes_vennootschapsbelasting = _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            
            export namespace Grootboekrekeningen {
                
                export namespace D {
                    export type Hoofdcategorie = string
                    export type Subcategorie = string
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Kosten {
                                
                                export namespace Correctie_op_vennootschapsbelasting {
                                    
                                    export namespace SG {
                                        
                                        export namespace Ja {
                                            export type Correctietype = string
                                        }
                                        export type Ja = {
                                            readonly 'Correctietype': string
                                        }
                                        
                                        export namespace Nee {
                                        }
                                        export type Nee = null
                                    }
                                    export type SG = 
                                        | readonly ['Ja', {
                                            readonly 'Correctietype': string
                                        }]
                                        | readonly ['Nee', null]
                                }
                                export type Correctie_op_vennootschapsbelasting = _i_core._T_State_Group<null, 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': string
                                    }]
                                    | readonly ['Nee', null]
                                >
                            }
                            export type Kosten = {
                                readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': string
                                    }]
                                    | readonly ['Nee', null]
                                >
                            }
                            
                            export namespace Opbrengsten {
                            }
                            export type Opbrengsten = null
                        }
                        export type SG = 
                            | readonly ['Kosten', {
                                readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': string
                                    }]
                                    | readonly ['Nee', null]
                                >
                            }]
                            | readonly ['Opbrengsten', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': string
                                }]
                                | readonly ['Nee', null]
                            >
                        }]
                        | readonly ['Opbrengsten', null]
                    >
                }
                export type D = {
                    readonly 'Hoofdcategorie': string
                    readonly 'Subcategorie': string
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': string
                                }]
                                | readonly ['Nee', null]
                            >
                        }]
                        | readonly ['Opbrengsten', null]
                    >
                }
            }
            export type Grootboekrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            
            export namespace Hoofdcategorieen {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Kosten {
                            }
                            export type Kosten = null
                            
                            export namespace Opbrengsten {
                            }
                            export type Opbrengsten = null
                        }
                        export type SG = 
                            | readonly ['Kosten', null]
                            | readonly ['Opbrengsten', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                            export type Hoofdcategorie_fiscus = string
                            export type Subcategorie_fiscus = string
                        }
                        export type D = {
                            readonly 'Hoofdcategorie fiscus': string
                            readonly 'Subcategorie fiscus': string
                        }
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
            }
            export type Hoofdcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            
            export namespace Hoofdcategorieen_fiscus {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Kosten {
                            }
                            export type Kosten = null
                            
                            export namespace Opbrengsten {
                            }
                            export type Opbrengsten = null
                        }
                        export type SG = 
                            | readonly ['Kosten', null]
                            | readonly ['Opbrengsten', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                        }
                        export type D = null
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, null>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
                }
            }
            export type Hoofdcategorieen_fiscus = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        export type Resultaat = {
            readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
    }
    export type Beheer = {
        readonly 'Balans': {
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        readonly 'BTW-categorieen': _i_core._T_Dictionary<null, {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
                | readonly ['Nee', null]
            >
        }>
        readonly 'Gebruikers': _i_core._T_Dictionary<null, {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }>
        readonly 'Huidige datum': number
        readonly 'Resultaat': {
            readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
    }
    
    export namespace Informele_rekeningen {
        
        export namespace D {
        }
        export type D = null
    }
    export type Informele_rekeningen = _i_core._T_Dictionary<null, null>
    
    export namespace Jaren {
        
        export namespace D {
            
            export namespace Afgesloten {
                
                export namespace SG {
                    
                    export namespace Ja {
                    }
                    export type Ja = null
                    
                    export namespace Nee {
                    }
                    export type Nee = null
                }
                export type SG = 
                    | readonly ['Ja', null]
                    | readonly ['Nee', null]
            }
            export type Afgesloten = _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', null]
            >
            
            export namespace Balans_grootboekrekeningen {
                
                export namespace D {
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Bankrekening {
                            }
                            export type Bankrekening = null
                            
                            export namespace Overig {
                            }
                            export type Overig = null
                            
                            export namespace Informele_rekening {
                            }
                            export type Informele_rekening = null
                        }
                        export type SG = 
                            | readonly ['Bankrekening', null]
                            | readonly ['Overig', null]
                            | readonly ['Informele rekening', null]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Bankrekening', null]
                        | readonly ['Overig', null]
                        | readonly ['Informele rekening', null]
                    >
                }
                export type D = {
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Bankrekening', null]
                        | readonly ['Overig', null]
                        | readonly ['Informele rekening', null]
                    >
                }
            }
            export type Balans_grootboekrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bankrekening', null]
                    | readonly ['Overig', null]
                    | readonly ['Informele rekening', null]
                >
            }>
            
            export namespace Bankrekeningen {
                
                export namespace D {
                    export type Beginsaldo = number
                    export type Grootboekrekening = string
                    
                    export namespace Mutaties {
                        
                        export namespace D {
                            export type Bedrag = number
                            export type Datum = number
                            export type Omschrijving = string
                            
                            export namespace Status {
                                
                                export namespace SG {
                                    
                                    export namespace Nog_te_verwerken {
                                    }
                                    export type Nog_te_verwerken = null
                                    
                                    export namespace Verwerkt {
                                        
                                        export namespace Afhandeling {
                                            
                                            export namespace SG {
                                                
                                                export namespace Inkoop {
                                                    export type Jaar = string
                                                    export type Inkoop = string
                                                }
                                                export type Inkoop = {
                                                    readonly 'Jaar': string
                                                    readonly 'Inkoop': string
                                                }
                                                
                                                export namespace Verrekenpost {
                                                    export type Verrekenpost = string
                                                }
                                                export type Verrekenpost = {
                                                    readonly 'Verrekenpost': string
                                                }
                                                
                                                export namespace BTW$mi_periode {
                                                    export type Jaar = string
                                                    export type BTW$mi_periode = string
                                                }
                                                export type BTW$mi_periode = {
                                                    readonly 'Jaar': string
                                                    readonly 'BTW-periode': string
                                                }
                                                
                                                export namespace Verkoop {
                                                    export type Jaar = string
                                                    export type Verkoop = string
                                                }
                                                export type Verkoop = {
                                                    readonly 'Jaar': string
                                                    readonly 'Verkoop': string
                                                }
                                                
                                                export namespace Informele_rekening {
                                                    export type Informele_rekening = string
                                                }
                                                export type Informele_rekening = {
                                                    readonly 'Informele rekening': string
                                                }
                                            }
                                            export type SG = 
                                                | readonly ['Inkoop', {
                                                    readonly 'Jaar': string
                                                    readonly 'Inkoop': string
                                                }]
                                                | readonly ['Verrekenpost', {
                                                    readonly 'Verrekenpost': string
                                                }]
                                                | readonly ['BTW-periode', {
                                                    readonly 'Jaar': string
                                                    readonly 'BTW-periode': string
                                                }]
                                                | readonly ['Verkoop', {
                                                    readonly 'Jaar': string
                                                    readonly 'Verkoop': string
                                                }]
                                                | readonly ['Informele rekening', {
                                                    readonly 'Informele rekening': string
                                                }]
                                        }
                                        export type Afhandeling = _i_core._T_State_Group<null, 
                                            | readonly ['Inkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Inkoop': string
                                            }]
                                            | readonly ['Verrekenpost', {
                                                readonly 'Verrekenpost': string
                                            }]
                                            | readonly ['BTW-periode', {
                                                readonly 'Jaar': string
                                                readonly 'BTW-periode': string
                                            }]
                                            | readonly ['Verkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Verkoop': string
                                            }]
                                            | readonly ['Informele rekening', {
                                                readonly 'Informele rekening': string
                                            }]
                                        >
                                    }
                                    export type Verwerkt = {
                                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                            | readonly ['Inkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Inkoop': string
                                            }]
                                            | readonly ['Verrekenpost', {
                                                readonly 'Verrekenpost': string
                                            }]
                                            | readonly ['BTW-periode', {
                                                readonly 'Jaar': string
                                                readonly 'BTW-periode': string
                                            }]
                                            | readonly ['Verkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Verkoop': string
                                            }]
                                            | readonly ['Informele rekening', {
                                                readonly 'Informele rekening': string
                                            }]
                                        >
                                    }
                                }
                                export type SG = 
                                    | readonly ['Nog te verwerken', null]
                                    | readonly ['Verwerkt', {
                                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                            | readonly ['Inkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Inkoop': string
                                            }]
                                            | readonly ['Verrekenpost', {
                                                readonly 'Verrekenpost': string
                                            }]
                                            | readonly ['BTW-periode', {
                                                readonly 'Jaar': string
                                                readonly 'BTW-periode': string
                                            }]
                                            | readonly ['Verkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Verkoop': string
                                            }]
                                            | readonly ['Informele rekening', {
                                                readonly 'Informele rekening': string
                                            }]
                                        >
                                    }]
                            }
                            export type Status = _i_core._T_State_Group<null, 
                                | readonly ['Nog te verwerken', null]
                                | readonly ['Verwerkt', {
                                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                        | readonly ['Inkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Inkoop': string
                                        }]
                                        | readonly ['Verrekenpost', {
                                            readonly 'Verrekenpost': string
                                        }]
                                        | readonly ['BTW-periode', {
                                            readonly 'Jaar': string
                                            readonly 'BTW-periode': string
                                        }]
                                        | readonly ['Verkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Verkoop': string
                                        }]
                                        | readonly ['Informele rekening', {
                                            readonly 'Informele rekening': string
                                        }]
                                    >
                                }]
                            >
                        }
                        export type D = {
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                            readonly 'Omschrijving': string
                            readonly 'Status': _i_core._T_State_Group<null, 
                                | readonly ['Nog te verwerken', null]
                                | readonly ['Verwerkt', {
                                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                        | readonly ['Inkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Inkoop': string
                                        }]
                                        | readonly ['Verrekenpost', {
                                            readonly 'Verrekenpost': string
                                        }]
                                        | readonly ['BTW-periode', {
                                            readonly 'Jaar': string
                                            readonly 'BTW-periode': string
                                        }]
                                        | readonly ['Verkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Verkoop': string
                                        }]
                                        | readonly ['Informele rekening', {
                                            readonly 'Informele rekening': string
                                        }]
                                    >
                                }]
                            >
                        }
                    }
                    export type Mutaties = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                        readonly 'Status': _i_core._T_State_Group<null, 
                            | readonly ['Nog te verwerken', null]
                            | readonly ['Verwerkt', {
                                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                    | readonly ['Inkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }]
                                    | readonly ['Verrekenpost', {
                                        readonly 'Verrekenpost': string
                                    }]
                                    | readonly ['BTW-periode', {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }]
                                    | readonly ['Verkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }]
                                    | readonly ['Informele rekening', {
                                        readonly 'Informele rekening': string
                                    }]
                                >
                            }]
                        >
                    }>
                    
                    export namespace Nieuw {
                        
                        export namespace SG {
                            
                            export namespace Ja {
                            }
                            export type Ja = null
                            
                            export namespace Nee {
                                export type Jaar = string
                                export type Rekening = string
                            }
                            export type Nee = {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }
                        }
                        export type SG = 
                            | readonly ['Ja', null]
                            | readonly ['Nee', {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }]
                    }
                    export type Nieuw = _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Beginsaldo': number
                    readonly 'Grootboekrekening': string
                    readonly 'Mutaties': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                        readonly 'Status': _i_core._T_State_Group<null, 
                            | readonly ['Nog te verwerken', null]
                            | readonly ['Verwerkt', {
                                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                    | readonly ['Inkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }]
                                    | readonly ['Verrekenpost', {
                                        readonly 'Verrekenpost': string
                                    }]
                                    | readonly ['BTW-periode', {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }]
                                    | readonly ['Verkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }]
                                    | readonly ['Informele rekening', {
                                        readonly 'Informele rekening': string
                                    }]
                                >
                            }]
                        >
                    }>
                    readonly 'Nieuw': _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
            }
            export type Bankrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                    readonly 'Status': _i_core._T_State_Group<null, 
                        | readonly ['Nog te verwerken', null]
                        | readonly ['Verwerkt', {
                            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Verrekenpost', {
                                    readonly 'Verrekenpost': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                            >
                        }]
                    >
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            export type Beginsaldo_nog_aan_te_geven_BTW = number
            export type Beginsaldo_winstreserve = number
            
            export namespace BTW_periode_saldo {
                export type Grootboekrekening = string
            }
            export type BTW_periode_saldo = {
                readonly 'Grootboekrekening': string
            }
            
            export namespace BTW_periodes {
                
                export namespace D {
                    
                    export namespace _11$pe__BTW$mi_categorieen {
                        
                        export namespace D {
                        }
                        export type D = null
                    }
                    export type _11$pe__BTW$mi_categorieen = _i_core._T_Dictionary<null, null>
                    
                    export namespace Documenten {
                        
                        export namespace D {
                            
                            export namespace Bestand {
                            }
                            export type Bestand = _T_Bestandsnaam
                        }
                        export type D = {
                            readonly 'Bestand': _T_Bestandsnaam
                        }
                    }
                    export type Documenten = _i_core._T_Dictionary<null, {
                        readonly 'Bestand': _T_Bestandsnaam
                    }>
                    export type Omschrijving = string
                    
                    export namespace Status {
                        
                        export namespace SG {
                            
                            export namespace Aangegeven {
                                export type Afronding = number
                                export type Bedrag = number
                                export type Datum = number
                            }
                            export type Aangegeven = {
                                readonly 'Afronding': number
                                readonly 'Bedrag': number
                                readonly 'Datum': number
                            }
                            
                            export namespace Openstaand {
                            }
                            export type Openstaand = null
                        }
                        export type SG = 
                            | readonly ['Aangegeven', {
                                readonly 'Afronding': number
                                readonly 'Bedrag': number
                                readonly 'Datum': number
                            }]
                            | readonly ['Openstaand', null]
                    }
                    export type Status = _i_core._T_State_Group<null, 
                        | readonly ['Aangegeven', {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }]
                        | readonly ['Openstaand', null]
                    >
                }
                export type D = {
                    readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
                    readonly 'Documenten': _i_core._T_Dictionary<null, {
                        readonly 'Bestand': _T_Bestandsnaam
                    }>
                    readonly 'Omschrijving': string
                    readonly 'Status': _i_core._T_State_Group<null, 
                        | readonly ['Aangegeven', {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }]
                        | readonly ['Openstaand', null]
                    >
                }
            }
            export type BTW_periodes = _i_core._T_Dictionary<null, {
                readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
                readonly 'Documenten': _i_core._T_Dictionary<null, {
                    readonly 'Bestand': _T_Bestandsnaam
                }>
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }>
            
            export namespace Eerste_boekjaar {
                
                export namespace SG {
                    
                    export namespace Ja {
                    }
                    export type Ja = null
                    
                    export namespace Nee {
                        export type Vorig_boekjaar = string
                    }
                    export type Nee = {
                        readonly 'Vorig boekjaar': string
                    }
                }
                export type SG = 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Vorig boekjaar': string
                    }]
            }
            export type Eerste_boekjaar = _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Vorig boekjaar': string
                }]
            >
            export type Grootboekrekening_voor_BTW_afrondingen = string
            export type Grootboekrekening_voor_nog_aan_te_geven_BTW = string
            export type Grootboekrekening_voor_resultaat_dit_jaar = string
            export type Grootboekrekening_voor_winstreserve = string
            
            export namespace Informele_rekeningen {
                
                export namespace D {
                    export type Beginsaldo = number
                    export type Grootboekrekening = string
                    
                    export namespace Nieuw {
                        
                        export namespace SG {
                            
                            export namespace Ja {
                            }
                            export type Ja = null
                            
                            export namespace Nee {
                                export type Jaar = string
                                export type Rekening = string
                            }
                            export type Nee = {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }
                        }
                        export type SG = 
                            | readonly ['Ja', null]
                            | readonly ['Nee', {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }]
                    }
                    export type Nieuw = _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Beginsaldo': number
                    readonly 'Grootboekrekening': string
                    readonly 'Nieuw': _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
            }
            export type Informele_rekeningen = _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            
            export namespace Inkopen {
                
                export namespace D {
                    
                    export namespace Afhandeling {
                        
                        export namespace SG {
                            
                            export namespace Mutaties {
                            }
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                export type Rekening_courant = string
                            }
                            export type Rekening_courant = {
                                readonly 'Rekening courant': string
                            }
                        }
                        export type SG = 
                            | readonly ['Mutaties', null]
                            | readonly ['Rekening courant', {
                                readonly 'Rekening courant': string
                            }]
                    }
                    export type Afhandeling = _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    
                    export namespace BTW$mi_regime {
                        
                        export namespace SG {
                            
                            export namespace Binnenland$cl__heffing_verlegd {
                            }
                            export type Binnenland$cl__heffing_verlegd = null
                            
                            export namespace Geen_BTW_van_toepassing {
                                export type BTW$mi_periode = string
                            }
                            export type Geen_BTW_van_toepassing = {
                                readonly 'BTW-periode': string
                            }
                            
                            export namespace Import_van_buiten_de_EU {
                            }
                            export type Import_van_buiten_de_EU = null
                            
                            export namespace Intracommunautair {
                            }
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                export type BTW$mi_periode = string
                            }
                            export type Standaard = {
                                readonly 'BTW-periode': string
                            }
                        }
                        export type SG = 
                            | readonly ['Binnenland: heffing verlegd', null]
                            | readonly ['Geen BTW van toepassing', {
                                readonly 'BTW-periode': string
                            }]
                            | readonly ['Import van buiten de EU', null]
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-periode': string
                            }]
                    }
                    export type BTW$mi_regime = _i_core._T_State_Group<null, 
                        | readonly ['Binnenland: heffing verlegd', null]
                        | readonly ['Geen BTW van toepassing', {
                            readonly 'BTW-periode': string
                        }]
                        | readonly ['Import van buiten de EU', null]
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-periode': string
                        }]
                    >
                    
                    export namespace Brondocument {
                        
                        export namespace SG {
                            
                            export namespace Toegevoegd {
                                
                                export namespace Document {
                                }
                                export type Document = _T_Bestandsnaam
                            }
                            export type Toegevoegd = {
                                readonly 'Document': _T_Bestandsnaam
                            }
                            
                            export namespace Niet_van_toepassing {
                            }
                            export type Niet_van_toepassing = null
                            
                            export namespace Ontbreekt {
                            }
                            export type Ontbreekt = null
                            
                            export namespace Nog_toevoegen {
                            }
                            export type Nog_toevoegen = null
                        }
                        export type SG = 
                            | readonly ['Toegevoegd', {
                                readonly 'Document': _T_Bestandsnaam
                            }]
                            | readonly ['Niet van toepassing', null]
                            | readonly ['Ontbreekt', null]
                            | readonly ['Nog toevoegen', null]
                    }
                    export type Brondocument = _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                        | readonly ['Niet van toepassing', null]
                        | readonly ['Ontbreekt', null]
                        | readonly ['Nog toevoegen', null]
                    >
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export namespace D {
                            
                            export namespace Bedrag {
                                
                                export namespace SG {
                                    
                                    export namespace Bekend {
                                        export type BTW$mi_bedrag = number
                                        export type Bedrag_inclusief_geheven_BTW = number
                                    }
                                    export type Bekend = {
                                        readonly 'BTW-bedrag': number
                                        readonly 'Bedrag inclusief geheven BTW': number
                                    }
                                }
                                export type SG = 
                                    | readonly ['Bekend', {
                                        readonly 'BTW-bedrag': number
                                        readonly 'Bedrag inclusief geheven BTW': number
                                    }]
                            }
                            export type Bedrag = _i_core._T_State_Group<null, 
                                | readonly ['Bekend', {
                                    readonly 'BTW-bedrag': number
                                    readonly 'Bedrag inclusief geheven BTW': number
                                }]
                            >
                            export type Omschrijving = string
                            
                            export namespace Type {
                                
                                export namespace SG {
                                    
                                    export namespace Balans {
                                        export type Balans_item = string
                                    }
                                    export type Balans = {
                                        readonly 'Balans item': string
                                    }
                                    
                                    export namespace Kosten {
                                        export type Grootboekrekening = string
                                    }
                                    export type Kosten = {
                                        readonly 'Grootboekrekening': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Balans', {
                                        readonly 'Balans item': string
                                    }]
                                    | readonly ['Kosten', {
                                        readonly 'Grootboekrekening': string
                                    }]
                            }
                            export type Type = _i_core._T_State_Group<null, 
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                                | readonly ['Kosten', {
                                    readonly 'Grootboekrekening': string
                                }]
                            >
                        }
                        export type D = {
                            readonly 'Bedrag': _i_core._T_State_Group<null, 
                                | readonly ['Bekend', {
                                    readonly 'BTW-bedrag': number
                                    readonly 'Bedrag inclusief geheven BTW': number
                                }]
                            >
                            readonly 'Omschrijving': string
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                                | readonly ['Kosten', {
                                    readonly 'Grootboekrekening': string
                                }]
                            >
                        }
                    }
                    export type Regels = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': _i_core._T_State_Group<null, 
                            | readonly ['Bekend', {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': string
                            }]
                        >
                    }>
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Bonnetje {
                            }
                            export type Bonnetje = null
                            
                            export namespace Inkoop_$po_met_crediteur$pc_ {
                                export type Crediteur = string
                                export type Factuurnummer = string
                            }
                            export type Inkoop_$po_met_crediteur$pc_ = {
                                readonly 'Crediteur': string
                                readonly 'Factuurnummer': string
                            }
                            
                            export namespace Loonheffing {
                                export type Ronde = string
                            }
                            export type Loonheffing = {
                                readonly 'Ronde': string
                            }
                            
                            export namespace Salaris {
                                export type Ronde = string
                                export type Medewerker = string
                            }
                            export type Salaris = {
                                readonly 'Ronde': string
                                readonly 'Medewerker': string
                            }
                        }
                        export type SG = 
                            | readonly ['Bonnetje', null]
                            | readonly ['Inkoop (met crediteur)', {
                                readonly 'Crediteur': string
                                readonly 'Factuurnummer': string
                            }]
                            | readonly ['Loonheffing', {
                                readonly 'Ronde': string
                            }]
                            | readonly ['Salaris', {
                                readonly 'Ronde': string
                                readonly 'Medewerker': string
                            }]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Bonnetje', null]
                        | readonly ['Inkoop (met crediteur)', {
                            readonly 'Crediteur': string
                            readonly 'Factuurnummer': string
                        }]
                        | readonly ['Loonheffing', {
                            readonly 'Ronde': string
                        }]
                        | readonly ['Salaris', {
                            readonly 'Ronde': string
                            readonly 'Medewerker': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Binnenland: heffing verlegd', null]
                        | readonly ['Geen BTW van toepassing', {
                            readonly 'BTW-periode': string
                        }]
                        | readonly ['Import van buiten de EU', null]
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-periode': string
                        }]
                    >
                    readonly 'Brondocument': _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                        | readonly ['Niet van toepassing', null]
                        | readonly ['Ontbreekt', null]
                        | readonly ['Nog toevoegen', null]
                    >
                    readonly 'Datum': number
                    readonly 'Regels': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': _i_core._T_State_Group<null, 
                            | readonly ['Bekend', {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': string
                            }]
                        >
                    }>
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Bonnetje', null]
                        | readonly ['Inkoop (met crediteur)', {
                            readonly 'Crediteur': string
                            readonly 'Factuurnummer': string
                        }]
                        | readonly ['Loonheffing', {
                            readonly 'Ronde': string
                        }]
                        | readonly ['Salaris', {
                            readonly 'Ronde': string
                            readonly 'Medewerker': string
                        }]
                    >
                }
            }
            export type Inkopen = _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', {
                        readonly 'BTW-periode': string
                    }]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': string
                    }]
                >
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
                    | readonly ['Nog toevoegen', null]
                >
                readonly 'Datum': number
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': _i_core._T_State_Group<null, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': string
                        }]
                    >
                }>
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': string
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': string
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': string
                        readonly 'Medewerker': string
                    }]
                >
            }>
            
            export namespace Inkoop_saldo {
                export type Grootboekrekening = string
            }
            export type Inkoop_saldo = {
                readonly 'Grootboekrekening': string
            }
            
            export namespace Overige_balans_items {
                
                export namespace D {
                    export type Beginsaldo = number
                    export type Grootboekrekening = string
                    
                    export namespace Memoriaal_boekingen {
                        
                        export namespace D {
                            export type Bedrag = number
                            export type Datum = number
                            export type Grootboekrekening = string
                            export type Omschrijving = string
                        }
                        export type D = {
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                            readonly 'Grootboekrekening': string
                            readonly 'Omschrijving': string
                        }
                    }
                    export type Memoriaal_boekingen = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Grootboekrekening': string
                        readonly 'Omschrijving': string
                    }>
                    
                    export namespace Nieuw {
                        
                        export namespace SG {
                            
                            export namespace Ja {
                            }
                            export type Ja = null
                            
                            export namespace Nee {
                                export type Jaar = string
                                export type Balans_item = string
                            }
                            export type Nee = {
                                readonly 'Jaar': string
                                readonly 'Balans item': string
                            }
                        }
                        export type SG = 
                            | readonly ['Ja', null]
                            | readonly ['Nee', {
                                readonly 'Jaar': string
                                readonly 'Balans item': string
                            }]
                    }
                    export type Nieuw = _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Balans item': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Beginsaldo': number
                    readonly 'Grootboekrekening': string
                    readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Grootboekrekening': string
                        readonly 'Omschrijving': string
                    }>
                    readonly 'Nieuw': _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Balans item': string
                        }]
                    >
                }
            }
            export type Overige_balans_items = _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Grootboekrekening': string
                    readonly 'Omschrijving': string
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Balans item': string
                    }]
                >
            }>
            
            export namespace Resultaat_grootboekrekeningen {
                
                export namespace D {
                }
                export type D = null
            }
            export type Resultaat_grootboekrekeningen = _i_core._T_Dictionary<null, null>
            
            export namespace Salarisrondes {
                
                export namespace D {
                }
                export type D = null
            }
            export type Salarisrondes = _i_core._T_Dictionary<null, null>
            export type Startdatum_boekjaar = number
            
            export namespace Verkoop_saldo {
                export type Grootboekrekening = string
            }
            export type Verkoop_saldo = {
                readonly 'Grootboekrekening': string
            }
            
            export namespace Verkopen {
                
                export namespace D {
                    
                    export namespace Afhandeling {
                        
                        export namespace SG {
                            
                            export namespace Mutaties {
                            }
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                export type Rekening_courant = string
                            }
                            export type Rekening_courant = {
                                readonly 'Rekening courant': string
                            }
                        }
                        export type SG = 
                            | readonly ['Mutaties', null]
                            | readonly ['Rekening courant', {
                                readonly 'Rekening courant': string
                            }]
                    }
                    export type Afhandeling = _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    export type Betalingstermijn = number
                    export type BTW$mi_periode = string
                    
                    export namespace Brondocument {
                        
                        export namespace SG {
                            
                            export namespace Toegevoegd {
                                
                                export namespace Document {
                                }
                                export type Document = _T_Bestandsnaam
                            }
                            export type Toegevoegd = {
                                readonly 'Document': _T_Bestandsnaam
                            }
                        }
                        export type SG = 
                            | readonly ['Toegevoegd', {
                                readonly 'Document': _T_Bestandsnaam
                            }]
                    }
                    export type Brondocument = _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                    >
                    
                    export namespace Contracttype {
                        
                        export namespace SG {
                            
                            export namespace Project {
                                export type Project = string
                                export type Offerte = string
                            }
                            export type Project = {
                                readonly 'Project': string
                                readonly 'Offerte': string
                            }
                            
                            export namespace Licentieovereenkomst {
                                export type Overeenkomst = string
                            }
                            export type Licentieovereenkomst = {
                                readonly 'Overeenkomst': string
                            }
                        }
                        export type SG = 
                            | readonly ['Project', {
                                readonly 'Project': string
                                readonly 'Offerte': string
                            }]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Overeenkomst': string
                            }]
                    }
                    export type Contracttype = _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Project': string
                            readonly 'Offerte': string
                        }]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Overeenkomst': string
                        }]
                    >
                    export type Datum = number
                    export type Debiteur = string
                    
                    export namespace Regels {
                        
                        export namespace D {
                            
                            export namespace BTW$mi_regime {
                                
                                export namespace SG {
                                    
                                    export namespace Intracommunautair {
                                    }
                                    export type Intracommunautair = null
                                    
                                    export namespace Standaard {
                                        export type BTW$mi_categorie = string
                                    }
                                    export type Standaard = {
                                        readonly 'BTW-categorie': string
                                    }
                                    
                                    export namespace Binnenland$cl__heffing_verlegd {
                                    }
                                    export type Binnenland$cl__heffing_verlegd = null
                                }
                                export type SG = 
                                    | readonly ['Intracommunautair', null]
                                    | readonly ['Standaard', {
                                        readonly 'BTW-categorie': string
                                    }]
                                    | readonly ['Binnenland: heffing verlegd', null]
                            }
                            export type BTW$mi_regime = _i_core._T_State_Group<null, 
                                | readonly ['Intracommunautair', null]
                                | readonly ['Standaard', {
                                    readonly 'BTW-categorie': string
                                }]
                                | readonly ['Binnenland: heffing verlegd', null]
                            >
                            export type Bedrag_exclusief_BTW = number
                            
                            export namespace Contracttype {
                                
                                export namespace SG {
                                    
                                    export namespace Project {
                                        export type Opbrengst = string
                                    }
                                    export type Project = {
                                        readonly 'Opbrengst': string
                                    }
                                    
                                    export namespace Los {
                                    }
                                    export type Los = null
                                    
                                    export namespace Licentieovereenkomst {
                                        export type Periode = string
                                    }
                                    export type Licentieovereenkomst = {
                                        readonly 'Periode': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Project', {
                                        readonly 'Opbrengst': string
                                    }]
                                    | readonly ['Los', null]
                                    | readonly ['Licentieovereenkomst', {
                                        readonly 'Periode': string
                                    }]
                            }
                            export type Contracttype = _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Opbrengst': string
                                }]
                                | readonly ['Los', null]
                                | readonly ['Licentieovereenkomst', {
                                    readonly 'Periode': string
                                }]
                            >
                            export type Omschrijving = string
                            
                            export namespace Type {
                                
                                export namespace SG {
                                    
                                    export namespace Opbrengsten {
                                        export type Grootboekrekening = string
                                    }
                                    export type Opbrengsten = {
                                        readonly 'Grootboekrekening': string
                                    }
                                    
                                    export namespace Balans {
                                        export type Balans_item = string
                                    }
                                    export type Balans = {
                                        readonly 'Balans item': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Opbrengsten', {
                                        readonly 'Grootboekrekening': string
                                    }]
                                    | readonly ['Balans', {
                                        readonly 'Balans item': string
                                    }]
                            }
                            export type Type = _i_core._T_State_Group<null, 
                                | readonly ['Opbrengsten', {
                                    readonly 'Grootboekrekening': string
                                }]
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                            >
                        }
                        export type D = {
                            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                                | readonly ['Intracommunautair', null]
                                | readonly ['Standaard', {
                                    readonly 'BTW-categorie': string
                                }]
                                | readonly ['Binnenland: heffing verlegd', null]
                            >
                            readonly 'Bedrag exclusief BTW': number
                            readonly 'Contracttype': _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Opbrengst': string
                                }]
                                | readonly ['Los', null]
                                | readonly ['Licentieovereenkomst', {
                                    readonly 'Periode': string
                                }]
                            >
                            readonly 'Omschrijving': string
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Opbrengsten', {
                                    readonly 'Grootboekrekening': string
                                }]
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                            >
                        }
                    }
                    export type Regels = _i_core._T_Dictionary<null, {
                        readonly 'BTW-regime': _i_core._T_State_Group<null, 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': string
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                        >
                        readonly 'Bedrag exclusief BTW': number
                        readonly 'Contracttype': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Opbrengst': string
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': string
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': string
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                        >
                    }>
                }
                export type D = {
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    readonly 'Betalingstermijn': number
                    readonly 'BTW-periode': string
                    readonly 'Brondocument': _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                    >
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Project': string
                            readonly 'Offerte': string
                        }]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Overeenkomst': string
                        }]
                    >
                    readonly 'Datum': number
                    readonly 'Debiteur': string
                    readonly 'Regels': _i_core._T_Dictionary<null, {
                        readonly 'BTW-regime': _i_core._T_State_Group<null, 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': string
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                        >
                        readonly 'Bedrag exclusief BTW': number
                        readonly 'Contracttype': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Opbrengst': string
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': string
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': string
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                        >
                    }>
                }
            }
            export type Verkopen = _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'Betalingstermijn': number
                readonly 'BTW-periode': string
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                >
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Project': string
                        readonly 'Offerte': string
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': string
                    }]
                >
                readonly 'Datum': number
                readonly 'Debiteur': string
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': string
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': string
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': string
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': string
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                    >
                }>
            }>
            
            export namespace Verrekenposten {
                
                export namespace D {
                    
                    export namespace Mutaties {
                        
                        export namespace D {
                            export type Bedrag = number
                            
                            export namespace Afhandeling {
                                
                                export namespace SG {
                                    
                                    export namespace Inkoop {
                                        export type Jaar = string
                                        export type Inkoop = string
                                    }
                                    export type Inkoop = {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }
                                    
                                    export namespace Informele_rekening {
                                        export type Informele_rekening = string
                                    }
                                    export type Informele_rekening = {
                                        readonly 'Informele rekening': string
                                    }
                                    
                                    export namespace Verkoop {
                                        export type Jaar = string
                                        export type Verkoop = string
                                    }
                                    export type Verkoop = {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }
                                    
                                    export namespace BTW$mi_periode {
                                        export type Jaar = string
                                        export type BTW$mi_periode = string
                                    }
                                    export type BTW$mi_periode = {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Inkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }]
                                    | readonly ['Informele rekening', {
                                        readonly 'Informele rekening': string
                                    }]
                                    | readonly ['Verkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }]
                                    | readonly ['BTW-periode', {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }]
                            }
                            export type Afhandeling = _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                            >
                        }
                        export type D = {
                            readonly 'Bedrag': number
                            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                            >
                        }
                    }
                    export type Mutaties = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                        >
                    }>
                }
                export type D = {
                    readonly 'Mutaties': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                        >
                    }>
                }
            }
            export type Verrekenposten = _i_core._T_Dictionary<null, {
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Inkoop', {
                            readonly 'Jaar': string
                            readonly 'Inkoop': string
                        }]
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': string
                        }]
                        | readonly ['Verkoop', {
                            readonly 'Jaar': string
                            readonly 'Verkoop': string
                        }]
                        | readonly ['BTW-periode', {
                            readonly 'Jaar': string
                            readonly 'BTW-periode': string
                        }]
                    >
                }>
            }>
        }
        export type D = {
            readonly 'Afgesloten': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', null]
            >
            readonly 'Balans grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bankrekening', null]
                    | readonly ['Overig', null]
                    | readonly ['Informele rekening', null]
                >
            }>
            readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                    readonly 'Status': _i_core._T_State_Group<null, 
                        | readonly ['Nog te verwerken', null]
                        | readonly ['Verwerkt', {
                            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Verrekenpost', {
                                    readonly 'Verrekenpost': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                            >
                        }]
                    >
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            readonly 'Beginsaldo nog aan te geven BTW': number
            readonly 'Beginsaldo winstreserve': number
            readonly 'BTW periode saldo': {
                readonly 'Grootboekrekening': string
            }
            readonly 'BTW periodes': _i_core._T_Dictionary<null, {
                readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
                readonly 'Documenten': _i_core._T_Dictionary<null, {
                    readonly 'Bestand': _T_Bestandsnaam
                }>
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }>
            readonly 'Eerste boekjaar': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Vorig boekjaar': string
                }]
            >
            readonly 'Grootboekrekening voor BTW afrondingen': string
            readonly 'Grootboekrekening voor nog aan te geven BTW': string
            readonly 'Grootboekrekening voor resultaat dit jaar': string
            readonly 'Grootboekrekening voor winstreserve': string
            readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            readonly 'Inkopen': _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', {
                        readonly 'BTW-periode': string
                    }]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': string
                    }]
                >
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
                    | readonly ['Nog toevoegen', null]
                >
                readonly 'Datum': number
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': _i_core._T_State_Group<null, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': string
                        }]
                    >
                }>
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': string
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': string
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': string
                        readonly 'Medewerker': string
                    }]
                >
            }>
            readonly 'Inkoop saldo': {
                readonly 'Grootboekrekening': string
            }
            readonly 'Overige balans items': _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Grootboekrekening': string
                    readonly 'Omschrijving': string
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Balans item': string
                    }]
                >
            }>
            readonly 'Resultaat grootboekrekeningen': _i_core._T_Dictionary<null, null>
            readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
            readonly 'Startdatum boekjaar': number
            readonly 'Verkoop saldo': {
                readonly 'Grootboekrekening': string
            }
            readonly 'Verkopen': _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'Betalingstermijn': number
                readonly 'BTW-periode': string
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                >
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Project': string
                        readonly 'Offerte': string
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': string
                    }]
                >
                readonly 'Datum': number
                readonly 'Debiteur': string
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': string
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': string
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': string
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': string
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                    >
                }>
            }>
            readonly 'Verrekenposten': _i_core._T_Dictionary<null, {
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Inkoop', {
                            readonly 'Jaar': string
                            readonly 'Inkoop': string
                        }]
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': string
                        }]
                        | readonly ['Verkoop', {
                            readonly 'Jaar': string
                            readonly 'Verkoop': string
                        }]
                        | readonly ['BTW-periode', {
                            readonly 'Jaar': string
                            readonly 'BTW-periode': string
                        }]
                    >
                }>
            }>
        }
    }
    export type Jaren = _i_core._T_Dictionary<null, {
        readonly 'Afgesloten': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Balans grootboekrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Nog te verwerken', null]
                    | readonly ['Verwerkt', {
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                        >
                    }]
                >
            }>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Rekening': string
                }]
            >
        }>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'BTW periode saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'BTW periodes': _i_core._T_Dictionary<null, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
            readonly 'Documenten': _i_core._T_Dictionary<null, {
                readonly 'Bestand': _T_Bestandsnaam
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<null, 
                | readonly ['Aangegeven', {
                    readonly 'Afronding': number
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                }]
                | readonly ['Openstaand', null]
            >
        }>
        readonly 'Eerste boekjaar': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Vorig boekjaar': string
            }]
        >
        readonly 'Grootboekrekening voor BTW afrondingen': string
        readonly 'Grootboekrekening voor nog aan te geven BTW': string
        readonly 'Grootboekrekening voor resultaat dit jaar': string
        readonly 'Grootboekrekening voor winstreserve': string
        readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Rekening': string
                }]
            >
        }>
        readonly 'Inkopen': _i_core._T_Dictionary<null, {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': string
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', {
                    readonly 'BTW-periode': string
                }]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': string
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': _T_Bestandsnaam
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
                | readonly ['Nog toevoegen', null]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': _i_core._T_State_Group<null, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Balans', {
                        readonly 'Balans item': string
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': string
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': string
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': string
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': string
                    readonly 'Medewerker': string
                }]
            >
        }>
        readonly 'Inkoop saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'Overige balans items': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Grootboekrekening': string
                readonly 'Omschrijving': string
            }>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Balans item': string
                }]
            >
        }>
        readonly 'Resultaat grootboekrekeningen': _i_core._T_Dictionary<null, null>
        readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
        readonly 'Startdatum boekjaar': number
        readonly 'Verkoop saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'Verkopen': _i_core._T_Dictionary<null, {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': string
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': string
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': _T_Bestandsnaam
                }]
            >
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': string
                    readonly 'Offerte': string
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': string
                }]
            >
            readonly 'Datum': number
            readonly 'Debiteur': string
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': string
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': string
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': string
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': string
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': string
                    }]
                >
            }>
        }>
        readonly 'Verrekenposten': _i_core._T_Dictionary<null, {
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Inkoop', {
                        readonly 'Jaar': string
                        readonly 'Inkoop': string
                    }]
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': string
                    }]
                    | readonly ['Verkoop', {
                        readonly 'Jaar': string
                        readonly 'Verkoop': string
                    }]
                    | readonly ['BTW-periode', {
                        readonly 'Jaar': string
                        readonly 'BTW-periode': string
                    }]
                >
            }>
        }>
    }>
    
    export namespace Klanten {
        
        export namespace D {
            
            export namespace Licentieovereenkomsten {
                
                export namespace D {
                    
                    export namespace Periodes {
                        
                        export namespace D {
                            export type Bedrag = number
                        }
                        export type D = {
                            readonly 'Bedrag': number
                        }
                    }
                    export type Periodes = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                    }>
                }
                export type D = {
                    readonly 'Periodes': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                    }>
                }
            }
            export type Licentieovereenkomsten = _i_core._T_Dictionary<null, {
                readonly 'Periodes': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                }>
            }>
            
            export namespace Projecten {
                
                export namespace D {
                    
                    export namespace Offertes {
                        
                        export namespace D {
                            
                            export namespace Opbrengsten {
                                
                                export namespace D {
                                    
                                    export namespace Type {
                                        
                                        export namespace SG {
                                            
                                            export namespace Project {
                                                export type Bedrag = number
                                                export type Betaaldatum = number
                                            }
                                            export type Project = {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }
                                        }
                                        export type SG = 
                                            | readonly ['Project', {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }]
                                    }
                                    export type Type = _i_core._T_State_Group<null, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                                export type D = {
                                    readonly 'Type': _i_core._T_State_Group<null, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                            }
                            export type Opbrengsten = _i_core._T_Dictionary<null, {
                                readonly 'Type': _i_core._T_State_Group<null, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                        export type D = {
                            readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                                readonly 'Type': _i_core._T_State_Group<null, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                    }
                    export type Offertes = _i_core._T_Dictionary<null, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
                export type D = {
                    readonly 'Offertes': _i_core._T_Dictionary<null, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
            }
            export type Projecten = _i_core._T_Dictionary<null, {
                readonly 'Offertes': _i_core._T_Dictionary<null, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Bedrag': number
                                readonly 'Betaaldatum': number
                            }]
                        >
                    }>
                }>
            }>
        }
        export type D = {
            readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<null, {
                readonly 'Periodes': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                }>
            }>
            readonly 'Projecten': _i_core._T_Dictionary<null, {
                readonly 'Offertes': _i_core._T_Dictionary<null, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Bedrag': number
                                readonly 'Betaaldatum': number
                            }]
                        >
                    }>
                }>
            }>
        }
    }
    export type Klanten = _i_core._T_Dictionary<null, {
        readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<null, {
            readonly 'Periodes': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
            }>
        }>
        readonly 'Projecten': _i_core._T_Dictionary<null, {
            readonly 'Offertes': _i_core._T_Dictionary<null, {
                readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Bedrag': number
                            readonly 'Betaaldatum': number
                        }]
                    >
                }>
            }>
        }>
    }>
    
    export namespace Leveranciers {
        
        export namespace D {
        }
        export type D = null
    }
    export type Leveranciers = _i_core._T_Dictionary<null, null>
    
    export namespace Medewerkers {
        
        export namespace D {
        }
        export type D = null
    }
    export type Medewerkers = _i_core._T_Dictionary<null, null>
}

// *** ALIASES FOR NESTED TYPES

export namespace Root {
    
    export namespace Bankrekeningen {
        
        export namespace D {
        }
        export type D = null
    }
    export type Bankrekeningen = _i_core._T_Dictionary<null, null>
    
    export namespace Beheer {
        
        export namespace Balans {
            
            export namespace Grootboekrekeningen {
                
                export namespace D {
                    export type Hoofdcategorie = string
                    export type Subcategorie = string
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Activa {
                            }
                            export type Activa = null
                            
                            export namespace Passiva {
                            }
                            export type Passiva = null
                        }
                        export type SG = 
                            | readonly ['Activa', null]
                            | readonly ['Passiva', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                }
                export type D = {
                    readonly 'Hoofdcategorie': string
                    readonly 'Subcategorie': string
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                }
            }
            export type Grootboekrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            
            export namespace Hoofdcategorieen {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Activa {
                            }
                            export type Activa = null
                            
                            export namespace Passiva {
                            }
                            export type Passiva = null
                        }
                        export type SG = 
                            | readonly ['Activa', null]
                            | readonly ['Passiva', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                            export type Hoofdcategorie_fiscus = string
                            export type Subcategorie_fiscus = string
                        }
                        export type D = {
                            readonly 'Hoofdcategorie fiscus': string
                            readonly 'Subcategorie fiscus': string
                        }
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
            }
            export type Hoofdcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            
            export namespace Hoofdcategorieen_fiscus {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Activa {
                            }
                            export type Activa = null
                            
                            export namespace Passiva {
                            }
                            export type Passiva = null
                        }
                        export type SG = 
                            | readonly ['Activa', null]
                            | readonly ['Passiva', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                        }
                        export type D = null
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, null>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
                }
            }
            export type Hoofdcategorieen_fiscus = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        export type Balans = {
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        
        export namespace BTW$mi_categorieen {
            
            export namespace D {
                
                export namespace BTW$mi_heffing {
                    
                    export namespace SG {
                        
                        export namespace Ja {
                            export type BTW$mi_promillage = number
                        }
                        export type Ja = {
                            readonly 'BTW-promillage': number
                        }
                        
                        export namespace Nee {
                        }
                        export type Nee = null
                    }
                    export type SG = 
                        | readonly ['Ja', {
                            readonly 'BTW-promillage': number
                        }]
                        | readonly ['Nee', null]
                }
                export type BTW$mi_heffing = _i_core._T_State_Group<null, 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
                    | readonly ['Nee', null]
                >
            }
            export type D = {
                readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
                    | readonly ['Nee', null]
                >
            }
        }
        export type BTW$mi_categorieen = _i_core._T_Dictionary<null, {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
                | readonly ['Nee', null]
            >
        }>
        
        export namespace Gebruikers {
            
            export namespace D {
                export type Volledige_naam = string
                export type Wachtwoord = string
            }
            export type D = {
                readonly 'Volledige naam': string
                readonly 'Wachtwoord': string
            }
        }
        export type Gebruikers = _i_core._T_Dictionary<null, {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }>
        export type Huidige_datum = number
        
        export namespace Resultaat {
            
            export namespace Correctietypes_vennootschapsbelasting {
                
                export namespace D {
                    export type Te_corrigeren_promillage = number
                }
                export type D = {
                    readonly 'Te corrigeren promillage': number
                }
            }
            export type Correctietypes_vennootschapsbelasting = _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            
            export namespace Grootboekrekeningen {
                
                export namespace D {
                    export type Hoofdcategorie = string
                    export type Subcategorie = string
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Kosten {
                                
                                export namespace Correctie_op_vennootschapsbelasting {
                                    
                                    export namespace SG {
                                        
                                        export namespace Ja {
                                            export type Correctietype = string
                                        }
                                        export type Ja = {
                                            readonly 'Correctietype': string
                                        }
                                        
                                        export namespace Nee {
                                        }
                                        export type Nee = null
                                    }
                                    export type SG = 
                                        | readonly ['Ja', {
                                            readonly 'Correctietype': string
                                        }]
                                        | readonly ['Nee', null]
                                }
                                export type Correctie_op_vennootschapsbelasting = _i_core._T_State_Group<null, 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': string
                                    }]
                                    | readonly ['Nee', null]
                                >
                            }
                            export type Kosten = {
                                readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': string
                                    }]
                                    | readonly ['Nee', null]
                                >
                            }
                            
                            export namespace Opbrengsten {
                            }
                            export type Opbrengsten = null
                        }
                        export type SG = 
                            | readonly ['Kosten', {
                                readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': string
                                    }]
                                    | readonly ['Nee', null]
                                >
                            }]
                            | readonly ['Opbrengsten', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': string
                                }]
                                | readonly ['Nee', null]
                            >
                        }]
                        | readonly ['Opbrengsten', null]
                    >
                }
                export type D = {
                    readonly 'Hoofdcategorie': string
                    readonly 'Subcategorie': string
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': string
                                }]
                                | readonly ['Nee', null]
                            >
                        }]
                        | readonly ['Opbrengsten', null]
                    >
                }
            }
            export type Grootboekrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            
            export namespace Hoofdcategorieen {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Kosten {
                            }
                            export type Kosten = null
                            
                            export namespace Opbrengsten {
                            }
                            export type Opbrengsten = null
                        }
                        export type SG = 
                            | readonly ['Kosten', null]
                            | readonly ['Opbrengsten', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                            export type Hoofdcategorie_fiscus = string
                            export type Subcategorie_fiscus = string
                        }
                        export type D = {
                            readonly 'Hoofdcategorie fiscus': string
                            readonly 'Subcategorie fiscus': string
                        }
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                        readonly 'Hoofdcategorie fiscus': string
                        readonly 'Subcategorie fiscus': string
                    }>
                }
            }
            export type Hoofdcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            
            export namespace Hoofdcategorieen_fiscus {
                
                export namespace D {
                    
                    export namespace Zijde {
                        
                        export namespace SG {
                            
                            export namespace Kosten {
                            }
                            export type Kosten = null
                            
                            export namespace Opbrengsten {
                            }
                            export type Opbrengsten = null
                        }
                        export type SG = 
                            | readonly ['Kosten', null]
                            | readonly ['Opbrengsten', null]
                    }
                    export type Zijde = _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    
                    export namespace Subcategorieen {
                        
                        export namespace D {
                        }
                        export type D = null
                    }
                    export type Subcategorieen = _i_core._T_Dictionary<null, null>
                }
                export type D = {
                    readonly 'Zijde': _i_core._T_State_Group<null, 
                        | readonly ['Kosten', null]
                        | readonly ['Opbrengsten', null]
                    >
                    readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
                }
            }
            export type Hoofdcategorieen_fiscus = _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        export type Resultaat = {
            readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
    }
    export type Beheer = {
        readonly 'Balans': {
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
        readonly 'BTW-categorieen': _i_core._T_Dictionary<null, {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
                | readonly ['Nee', null]
            >
        }>
        readonly 'Gebruikers': _i_core._T_Dictionary<null, {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }>
        readonly 'Huidige datum': number
        readonly 'Resultaat': {
            readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<null, {
                readonly 'Te corrigeren promillage': number
            }>
            readonly 'Grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie': string
                readonly 'Subcategorie': string
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': string
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }>
            readonly 'Hoofdcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                    readonly 'Hoofdcategorie fiscus': string
                    readonly 'Subcategorie fiscus': string
                }>
            }>
            readonly 'Hoofdcategorieen fiscus': _i_core._T_Dictionary<null, {
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
                >
                readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
            }>
        }
    }
    
    export namespace Informele_rekeningen {
        
        export namespace D {
        }
        export type D = null
    }
    export type Informele_rekeningen = _i_core._T_Dictionary<null, null>
    
    export namespace Jaren {
        
        export namespace D {
            
            export namespace Afgesloten {
                
                export namespace SG {
                    
                    export namespace Ja {
                    }
                    export type Ja = null
                    
                    export namespace Nee {
                    }
                    export type Nee = null
                }
                export type SG = 
                    | readonly ['Ja', null]
                    | readonly ['Nee', null]
            }
            export type Afgesloten = _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', null]
            >
            
            export namespace Balans_grootboekrekeningen {
                
                export namespace D {
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Bankrekening {
                            }
                            export type Bankrekening = null
                            
                            export namespace Overig {
                            }
                            export type Overig = null
                            
                            export namespace Informele_rekening {
                            }
                            export type Informele_rekening = null
                        }
                        export type SG = 
                            | readonly ['Bankrekening', null]
                            | readonly ['Overig', null]
                            | readonly ['Informele rekening', null]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Bankrekening', null]
                        | readonly ['Overig', null]
                        | readonly ['Informele rekening', null]
                    >
                }
                export type D = {
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Bankrekening', null]
                        | readonly ['Overig', null]
                        | readonly ['Informele rekening', null]
                    >
                }
            }
            export type Balans_grootboekrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bankrekening', null]
                    | readonly ['Overig', null]
                    | readonly ['Informele rekening', null]
                >
            }>
            
            export namespace Bankrekeningen {
                
                export namespace D {
                    export type Beginsaldo = number
                    export type Grootboekrekening = string
                    
                    export namespace Mutaties {
                        
                        export namespace D {
                            export type Bedrag = number
                            export type Datum = number
                            export type Omschrijving = string
                            
                            export namespace Status {
                                
                                export namespace SG {
                                    
                                    export namespace Nog_te_verwerken {
                                    }
                                    export type Nog_te_verwerken = null
                                    
                                    export namespace Verwerkt {
                                        
                                        export namespace Afhandeling {
                                            
                                            export namespace SG {
                                                
                                                export namespace Inkoop {
                                                    export type Jaar = string
                                                    export type Inkoop = string
                                                }
                                                export type Inkoop = {
                                                    readonly 'Jaar': string
                                                    readonly 'Inkoop': string
                                                }
                                                
                                                export namespace Verrekenpost {
                                                    export type Verrekenpost = string
                                                }
                                                export type Verrekenpost = {
                                                    readonly 'Verrekenpost': string
                                                }
                                                
                                                export namespace BTW$mi_periode {
                                                    export type Jaar = string
                                                    export type BTW$mi_periode = string
                                                }
                                                export type BTW$mi_periode = {
                                                    readonly 'Jaar': string
                                                    readonly 'BTW-periode': string
                                                }
                                                
                                                export namespace Verkoop {
                                                    export type Jaar = string
                                                    export type Verkoop = string
                                                }
                                                export type Verkoop = {
                                                    readonly 'Jaar': string
                                                    readonly 'Verkoop': string
                                                }
                                                
                                                export namespace Informele_rekening {
                                                    export type Informele_rekening = string
                                                }
                                                export type Informele_rekening = {
                                                    readonly 'Informele rekening': string
                                                }
                                            }
                                            export type SG = 
                                                | readonly ['Inkoop', {
                                                    readonly 'Jaar': string
                                                    readonly 'Inkoop': string
                                                }]
                                                | readonly ['Verrekenpost', {
                                                    readonly 'Verrekenpost': string
                                                }]
                                                | readonly ['BTW-periode', {
                                                    readonly 'Jaar': string
                                                    readonly 'BTW-periode': string
                                                }]
                                                | readonly ['Verkoop', {
                                                    readonly 'Jaar': string
                                                    readonly 'Verkoop': string
                                                }]
                                                | readonly ['Informele rekening', {
                                                    readonly 'Informele rekening': string
                                                }]
                                        }
                                        export type Afhandeling = _i_core._T_State_Group<null, 
                                            | readonly ['Inkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Inkoop': string
                                            }]
                                            | readonly ['Verrekenpost', {
                                                readonly 'Verrekenpost': string
                                            }]
                                            | readonly ['BTW-periode', {
                                                readonly 'Jaar': string
                                                readonly 'BTW-periode': string
                                            }]
                                            | readonly ['Verkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Verkoop': string
                                            }]
                                            | readonly ['Informele rekening', {
                                                readonly 'Informele rekening': string
                                            }]
                                        >
                                    }
                                    export type Verwerkt = {
                                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                            | readonly ['Inkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Inkoop': string
                                            }]
                                            | readonly ['Verrekenpost', {
                                                readonly 'Verrekenpost': string
                                            }]
                                            | readonly ['BTW-periode', {
                                                readonly 'Jaar': string
                                                readonly 'BTW-periode': string
                                            }]
                                            | readonly ['Verkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Verkoop': string
                                            }]
                                            | readonly ['Informele rekening', {
                                                readonly 'Informele rekening': string
                                            }]
                                        >
                                    }
                                }
                                export type SG = 
                                    | readonly ['Nog te verwerken', null]
                                    | readonly ['Verwerkt', {
                                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                            | readonly ['Inkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Inkoop': string
                                            }]
                                            | readonly ['Verrekenpost', {
                                                readonly 'Verrekenpost': string
                                            }]
                                            | readonly ['BTW-periode', {
                                                readonly 'Jaar': string
                                                readonly 'BTW-periode': string
                                            }]
                                            | readonly ['Verkoop', {
                                                readonly 'Jaar': string
                                                readonly 'Verkoop': string
                                            }]
                                            | readonly ['Informele rekening', {
                                                readonly 'Informele rekening': string
                                            }]
                                        >
                                    }]
                            }
                            export type Status = _i_core._T_State_Group<null, 
                                | readonly ['Nog te verwerken', null]
                                | readonly ['Verwerkt', {
                                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                        | readonly ['Inkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Inkoop': string
                                        }]
                                        | readonly ['Verrekenpost', {
                                            readonly 'Verrekenpost': string
                                        }]
                                        | readonly ['BTW-periode', {
                                            readonly 'Jaar': string
                                            readonly 'BTW-periode': string
                                        }]
                                        | readonly ['Verkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Verkoop': string
                                        }]
                                        | readonly ['Informele rekening', {
                                            readonly 'Informele rekening': string
                                        }]
                                    >
                                }]
                            >
                        }
                        export type D = {
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                            readonly 'Omschrijving': string
                            readonly 'Status': _i_core._T_State_Group<null, 
                                | readonly ['Nog te verwerken', null]
                                | readonly ['Verwerkt', {
                                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                        | readonly ['Inkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Inkoop': string
                                        }]
                                        | readonly ['Verrekenpost', {
                                            readonly 'Verrekenpost': string
                                        }]
                                        | readonly ['BTW-periode', {
                                            readonly 'Jaar': string
                                            readonly 'BTW-periode': string
                                        }]
                                        | readonly ['Verkoop', {
                                            readonly 'Jaar': string
                                            readonly 'Verkoop': string
                                        }]
                                        | readonly ['Informele rekening', {
                                            readonly 'Informele rekening': string
                                        }]
                                    >
                                }]
                            >
                        }
                    }
                    export type Mutaties = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                        readonly 'Status': _i_core._T_State_Group<null, 
                            | readonly ['Nog te verwerken', null]
                            | readonly ['Verwerkt', {
                                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                    | readonly ['Inkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }]
                                    | readonly ['Verrekenpost', {
                                        readonly 'Verrekenpost': string
                                    }]
                                    | readonly ['BTW-periode', {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }]
                                    | readonly ['Verkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }]
                                    | readonly ['Informele rekening', {
                                        readonly 'Informele rekening': string
                                    }]
                                >
                            }]
                        >
                    }>
                    
                    export namespace Nieuw {
                        
                        export namespace SG {
                            
                            export namespace Ja {
                            }
                            export type Ja = null
                            
                            export namespace Nee {
                                export type Jaar = string
                                export type Rekening = string
                            }
                            export type Nee = {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }
                        }
                        export type SG = 
                            | readonly ['Ja', null]
                            | readonly ['Nee', {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }]
                    }
                    export type Nieuw = _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Beginsaldo': number
                    readonly 'Grootboekrekening': string
                    readonly 'Mutaties': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                        readonly 'Status': _i_core._T_State_Group<null, 
                            | readonly ['Nog te verwerken', null]
                            | readonly ['Verwerkt', {
                                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                    | readonly ['Inkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }]
                                    | readonly ['Verrekenpost', {
                                        readonly 'Verrekenpost': string
                                    }]
                                    | readonly ['BTW-periode', {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }]
                                    | readonly ['Verkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }]
                                    | readonly ['Informele rekening', {
                                        readonly 'Informele rekening': string
                                    }]
                                >
                            }]
                        >
                    }>
                    readonly 'Nieuw': _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
            }
            export type Bankrekeningen = _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                    readonly 'Status': _i_core._T_State_Group<null, 
                        | readonly ['Nog te verwerken', null]
                        | readonly ['Verwerkt', {
                            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Verrekenpost', {
                                    readonly 'Verrekenpost': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                            >
                        }]
                    >
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            export type Beginsaldo_nog_aan_te_geven_BTW = number
            export type Beginsaldo_winstreserve = number
            
            export namespace BTW_periode_saldo {
                export type Grootboekrekening = string
            }
            export type BTW_periode_saldo = {
                readonly 'Grootboekrekening': string
            }
            
            export namespace BTW_periodes {
                
                export namespace D {
                    
                    export namespace _11$pe__BTW$mi_categorieen {
                        
                        export namespace D {
                        }
                        export type D = null
                    }
                    export type _11$pe__BTW$mi_categorieen = _i_core._T_Dictionary<null, null>
                    
                    export namespace Documenten {
                        
                        export namespace D {
                            
                            export namespace Bestand {
                            }
                            export type Bestand = _T_Bestandsnaam
                        }
                        export type D = {
                            readonly 'Bestand': _T_Bestandsnaam
                        }
                    }
                    export type Documenten = _i_core._T_Dictionary<null, {
                        readonly 'Bestand': _T_Bestandsnaam
                    }>
                    export type Omschrijving = string
                    
                    export namespace Status {
                        
                        export namespace SG {
                            
                            export namespace Aangegeven {
                                export type Afronding = number
                                export type Bedrag = number
                                export type Datum = number
                            }
                            export type Aangegeven = {
                                readonly 'Afronding': number
                                readonly 'Bedrag': number
                                readonly 'Datum': number
                            }
                            
                            export namespace Openstaand {
                            }
                            export type Openstaand = null
                        }
                        export type SG = 
                            | readonly ['Aangegeven', {
                                readonly 'Afronding': number
                                readonly 'Bedrag': number
                                readonly 'Datum': number
                            }]
                            | readonly ['Openstaand', null]
                    }
                    export type Status = _i_core._T_State_Group<null, 
                        | readonly ['Aangegeven', {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }]
                        | readonly ['Openstaand', null]
                    >
                }
                export type D = {
                    readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
                    readonly 'Documenten': _i_core._T_Dictionary<null, {
                        readonly 'Bestand': _T_Bestandsnaam
                    }>
                    readonly 'Omschrijving': string
                    readonly 'Status': _i_core._T_State_Group<null, 
                        | readonly ['Aangegeven', {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }]
                        | readonly ['Openstaand', null]
                    >
                }
            }
            export type BTW_periodes = _i_core._T_Dictionary<null, {
                readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
                readonly 'Documenten': _i_core._T_Dictionary<null, {
                    readonly 'Bestand': _T_Bestandsnaam
                }>
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }>
            
            export namespace Eerste_boekjaar {
                
                export namespace SG {
                    
                    export namespace Ja {
                    }
                    export type Ja = null
                    
                    export namespace Nee {
                        export type Vorig_boekjaar = string
                    }
                    export type Nee = {
                        readonly 'Vorig boekjaar': string
                    }
                }
                export type SG = 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Vorig boekjaar': string
                    }]
            }
            export type Eerste_boekjaar = _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Vorig boekjaar': string
                }]
            >
            export type Grootboekrekening_voor_BTW_afrondingen = string
            export type Grootboekrekening_voor_nog_aan_te_geven_BTW = string
            export type Grootboekrekening_voor_resultaat_dit_jaar = string
            export type Grootboekrekening_voor_winstreserve = string
            
            export namespace Informele_rekeningen {
                
                export namespace D {
                    export type Beginsaldo = number
                    export type Grootboekrekening = string
                    
                    export namespace Nieuw {
                        
                        export namespace SG {
                            
                            export namespace Ja {
                            }
                            export type Ja = null
                            
                            export namespace Nee {
                                export type Jaar = string
                                export type Rekening = string
                            }
                            export type Nee = {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }
                        }
                        export type SG = 
                            | readonly ['Ja', null]
                            | readonly ['Nee', {
                                readonly 'Jaar': string
                                readonly 'Rekening': string
                            }]
                    }
                    export type Nieuw = _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Beginsaldo': number
                    readonly 'Grootboekrekening': string
                    readonly 'Nieuw': _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Rekening': string
                        }]
                    >
                }
            }
            export type Informele_rekeningen = _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            
            export namespace Inkopen {
                
                export namespace D {
                    
                    export namespace Afhandeling {
                        
                        export namespace SG {
                            
                            export namespace Mutaties {
                            }
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                export type Rekening_courant = string
                            }
                            export type Rekening_courant = {
                                readonly 'Rekening courant': string
                            }
                        }
                        export type SG = 
                            | readonly ['Mutaties', null]
                            | readonly ['Rekening courant', {
                                readonly 'Rekening courant': string
                            }]
                    }
                    export type Afhandeling = _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    
                    export namespace BTW$mi_regime {
                        
                        export namespace SG {
                            
                            export namespace Binnenland$cl__heffing_verlegd {
                            }
                            export type Binnenland$cl__heffing_verlegd = null
                            
                            export namespace Geen_BTW_van_toepassing {
                                export type BTW$mi_periode = string
                            }
                            export type Geen_BTW_van_toepassing = {
                                readonly 'BTW-periode': string
                            }
                            
                            export namespace Import_van_buiten_de_EU {
                            }
                            export type Import_van_buiten_de_EU = null
                            
                            export namespace Intracommunautair {
                            }
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                export type BTW$mi_periode = string
                            }
                            export type Standaard = {
                                readonly 'BTW-periode': string
                            }
                        }
                        export type SG = 
                            | readonly ['Binnenland: heffing verlegd', null]
                            | readonly ['Geen BTW van toepassing', {
                                readonly 'BTW-periode': string
                            }]
                            | readonly ['Import van buiten de EU', null]
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-periode': string
                            }]
                    }
                    export type BTW$mi_regime = _i_core._T_State_Group<null, 
                        | readonly ['Binnenland: heffing verlegd', null]
                        | readonly ['Geen BTW van toepassing', {
                            readonly 'BTW-periode': string
                        }]
                        | readonly ['Import van buiten de EU', null]
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-periode': string
                        }]
                    >
                    
                    export namespace Brondocument {
                        
                        export namespace SG {
                            
                            export namespace Toegevoegd {
                                
                                export namespace Document {
                                }
                                export type Document = _T_Bestandsnaam
                            }
                            export type Toegevoegd = {
                                readonly 'Document': _T_Bestandsnaam
                            }
                            
                            export namespace Niet_van_toepassing {
                            }
                            export type Niet_van_toepassing = null
                            
                            export namespace Ontbreekt {
                            }
                            export type Ontbreekt = null
                            
                            export namespace Nog_toevoegen {
                            }
                            export type Nog_toevoegen = null
                        }
                        export type SG = 
                            | readonly ['Toegevoegd', {
                                readonly 'Document': _T_Bestandsnaam
                            }]
                            | readonly ['Niet van toepassing', null]
                            | readonly ['Ontbreekt', null]
                            | readonly ['Nog toevoegen', null]
                    }
                    export type Brondocument = _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                        | readonly ['Niet van toepassing', null]
                        | readonly ['Ontbreekt', null]
                        | readonly ['Nog toevoegen', null]
                    >
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export namespace D {
                            
                            export namespace Bedrag {
                                
                                export namespace SG {
                                    
                                    export namespace Bekend {
                                        export type BTW$mi_bedrag = number
                                        export type Bedrag_inclusief_geheven_BTW = number
                                    }
                                    export type Bekend = {
                                        readonly 'BTW-bedrag': number
                                        readonly 'Bedrag inclusief geheven BTW': number
                                    }
                                }
                                export type SG = 
                                    | readonly ['Bekend', {
                                        readonly 'BTW-bedrag': number
                                        readonly 'Bedrag inclusief geheven BTW': number
                                    }]
                            }
                            export type Bedrag = _i_core._T_State_Group<null, 
                                | readonly ['Bekend', {
                                    readonly 'BTW-bedrag': number
                                    readonly 'Bedrag inclusief geheven BTW': number
                                }]
                            >
                            export type Omschrijving = string
                            
                            export namespace Type {
                                
                                export namespace SG {
                                    
                                    export namespace Balans {
                                        export type Balans_item = string
                                    }
                                    export type Balans = {
                                        readonly 'Balans item': string
                                    }
                                    
                                    export namespace Kosten {
                                        export type Grootboekrekening = string
                                    }
                                    export type Kosten = {
                                        readonly 'Grootboekrekening': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Balans', {
                                        readonly 'Balans item': string
                                    }]
                                    | readonly ['Kosten', {
                                        readonly 'Grootboekrekening': string
                                    }]
                            }
                            export type Type = _i_core._T_State_Group<null, 
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                                | readonly ['Kosten', {
                                    readonly 'Grootboekrekening': string
                                }]
                            >
                        }
                        export type D = {
                            readonly 'Bedrag': _i_core._T_State_Group<null, 
                                | readonly ['Bekend', {
                                    readonly 'BTW-bedrag': number
                                    readonly 'Bedrag inclusief geheven BTW': number
                                }]
                            >
                            readonly 'Omschrijving': string
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                                | readonly ['Kosten', {
                                    readonly 'Grootboekrekening': string
                                }]
                            >
                        }
                    }
                    export type Regels = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': _i_core._T_State_Group<null, 
                            | readonly ['Bekend', {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': string
                            }]
                        >
                    }>
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Bonnetje {
                            }
                            export type Bonnetje = null
                            
                            export namespace Inkoop_$po_met_crediteur$pc_ {
                                export type Crediteur = string
                                export type Factuurnummer = string
                            }
                            export type Inkoop_$po_met_crediteur$pc_ = {
                                readonly 'Crediteur': string
                                readonly 'Factuurnummer': string
                            }
                            
                            export namespace Loonheffing {
                                export type Ronde = string
                            }
                            export type Loonheffing = {
                                readonly 'Ronde': string
                            }
                            
                            export namespace Salaris {
                                export type Ronde = string
                                export type Medewerker = string
                            }
                            export type Salaris = {
                                readonly 'Ronde': string
                                readonly 'Medewerker': string
                            }
                        }
                        export type SG = 
                            | readonly ['Bonnetje', null]
                            | readonly ['Inkoop (met crediteur)', {
                                readonly 'Crediteur': string
                                readonly 'Factuurnummer': string
                            }]
                            | readonly ['Loonheffing', {
                                readonly 'Ronde': string
                            }]
                            | readonly ['Salaris', {
                                readonly 'Ronde': string
                                readonly 'Medewerker': string
                            }]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Bonnetje', null]
                        | readonly ['Inkoop (met crediteur)', {
                            readonly 'Crediteur': string
                            readonly 'Factuurnummer': string
                        }]
                        | readonly ['Loonheffing', {
                            readonly 'Ronde': string
                        }]
                        | readonly ['Salaris', {
                            readonly 'Ronde': string
                            readonly 'Medewerker': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Binnenland: heffing verlegd', null]
                        | readonly ['Geen BTW van toepassing', {
                            readonly 'BTW-periode': string
                        }]
                        | readonly ['Import van buiten de EU', null]
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-periode': string
                        }]
                    >
                    readonly 'Brondocument': _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                        | readonly ['Niet van toepassing', null]
                        | readonly ['Ontbreekt', null]
                        | readonly ['Nog toevoegen', null]
                    >
                    readonly 'Datum': number
                    readonly 'Regels': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': _i_core._T_State_Group<null, 
                            | readonly ['Bekend', {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': string
                            }]
                        >
                    }>
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Bonnetje', null]
                        | readonly ['Inkoop (met crediteur)', {
                            readonly 'Crediteur': string
                            readonly 'Factuurnummer': string
                        }]
                        | readonly ['Loonheffing', {
                            readonly 'Ronde': string
                        }]
                        | readonly ['Salaris', {
                            readonly 'Ronde': string
                            readonly 'Medewerker': string
                        }]
                    >
                }
            }
            export type Inkopen = _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', {
                        readonly 'BTW-periode': string
                    }]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': string
                    }]
                >
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
                    | readonly ['Nog toevoegen', null]
                >
                readonly 'Datum': number
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': _i_core._T_State_Group<null, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': string
                        }]
                    >
                }>
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': string
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': string
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': string
                        readonly 'Medewerker': string
                    }]
                >
            }>
            
            export namespace Inkoop_saldo {
                export type Grootboekrekening = string
            }
            export type Inkoop_saldo = {
                readonly 'Grootboekrekening': string
            }
            
            export namespace Overige_balans_items {
                
                export namespace D {
                    export type Beginsaldo = number
                    export type Grootboekrekening = string
                    
                    export namespace Memoriaal_boekingen {
                        
                        export namespace D {
                            export type Bedrag = number
                            export type Datum = number
                            export type Grootboekrekening = string
                            export type Omschrijving = string
                        }
                        export type D = {
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                            readonly 'Grootboekrekening': string
                            readonly 'Omschrijving': string
                        }
                    }
                    export type Memoriaal_boekingen = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Grootboekrekening': string
                        readonly 'Omschrijving': string
                    }>
                    
                    export namespace Nieuw {
                        
                        export namespace SG {
                            
                            export namespace Ja {
                            }
                            export type Ja = null
                            
                            export namespace Nee {
                                export type Jaar = string
                                export type Balans_item = string
                            }
                            export type Nee = {
                                readonly 'Jaar': string
                                readonly 'Balans item': string
                            }
                        }
                        export type SG = 
                            | readonly ['Ja', null]
                            | readonly ['Nee', {
                                readonly 'Jaar': string
                                readonly 'Balans item': string
                            }]
                    }
                    export type Nieuw = _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Balans item': string
                        }]
                    >
                }
                export type D = {
                    readonly 'Beginsaldo': number
                    readonly 'Grootboekrekening': string
                    readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Grootboekrekening': string
                        readonly 'Omschrijving': string
                    }>
                    readonly 'Nieuw': _i_core._T_State_Group<null, 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Jaar': string
                            readonly 'Balans item': string
                        }]
                    >
                }
            }
            export type Overige_balans_items = _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Grootboekrekening': string
                    readonly 'Omschrijving': string
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Balans item': string
                    }]
                >
            }>
            
            export namespace Resultaat_grootboekrekeningen {
                
                export namespace D {
                }
                export type D = null
            }
            export type Resultaat_grootboekrekeningen = _i_core._T_Dictionary<null, null>
            
            export namespace Salarisrondes {
                
                export namespace D {
                }
                export type D = null
            }
            export type Salarisrondes = _i_core._T_Dictionary<null, null>
            export type Startdatum_boekjaar = number
            
            export namespace Verkoop_saldo {
                export type Grootboekrekening = string
            }
            export type Verkoop_saldo = {
                readonly 'Grootboekrekening': string
            }
            
            export namespace Verkopen {
                
                export namespace D {
                    
                    export namespace Afhandeling {
                        
                        export namespace SG {
                            
                            export namespace Mutaties {
                            }
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                export type Rekening_courant = string
                            }
                            export type Rekening_courant = {
                                readonly 'Rekening courant': string
                            }
                        }
                        export type SG = 
                            | readonly ['Mutaties', null]
                            | readonly ['Rekening courant', {
                                readonly 'Rekening courant': string
                            }]
                    }
                    export type Afhandeling = _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    export type Betalingstermijn = number
                    export type BTW$mi_periode = string
                    
                    export namespace Brondocument {
                        
                        export namespace SG {
                            
                            export namespace Toegevoegd {
                                
                                export namespace Document {
                                }
                                export type Document = _T_Bestandsnaam
                            }
                            export type Toegevoegd = {
                                readonly 'Document': _T_Bestandsnaam
                            }
                        }
                        export type SG = 
                            | readonly ['Toegevoegd', {
                                readonly 'Document': _T_Bestandsnaam
                            }]
                    }
                    export type Brondocument = _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                    >
                    
                    export namespace Contracttype {
                        
                        export namespace SG {
                            
                            export namespace Project {
                                export type Project = string
                                export type Offerte = string
                            }
                            export type Project = {
                                readonly 'Project': string
                                readonly 'Offerte': string
                            }
                            
                            export namespace Licentieovereenkomst {
                                export type Overeenkomst = string
                            }
                            export type Licentieovereenkomst = {
                                readonly 'Overeenkomst': string
                            }
                        }
                        export type SG = 
                            | readonly ['Project', {
                                readonly 'Project': string
                                readonly 'Offerte': string
                            }]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Overeenkomst': string
                            }]
                    }
                    export type Contracttype = _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Project': string
                            readonly 'Offerte': string
                        }]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Overeenkomst': string
                        }]
                    >
                    export type Datum = number
                    export type Debiteur = string
                    
                    export namespace Regels {
                        
                        export namespace D {
                            
                            export namespace BTW$mi_regime {
                                
                                export namespace SG {
                                    
                                    export namespace Intracommunautair {
                                    }
                                    export type Intracommunautair = null
                                    
                                    export namespace Standaard {
                                        export type BTW$mi_categorie = string
                                    }
                                    export type Standaard = {
                                        readonly 'BTW-categorie': string
                                    }
                                    
                                    export namespace Binnenland$cl__heffing_verlegd {
                                    }
                                    export type Binnenland$cl__heffing_verlegd = null
                                }
                                export type SG = 
                                    | readonly ['Intracommunautair', null]
                                    | readonly ['Standaard', {
                                        readonly 'BTW-categorie': string
                                    }]
                                    | readonly ['Binnenland: heffing verlegd', null]
                            }
                            export type BTW$mi_regime = _i_core._T_State_Group<null, 
                                | readonly ['Intracommunautair', null]
                                | readonly ['Standaard', {
                                    readonly 'BTW-categorie': string
                                }]
                                | readonly ['Binnenland: heffing verlegd', null]
                            >
                            export type Bedrag_exclusief_BTW = number
                            
                            export namespace Contracttype {
                                
                                export namespace SG {
                                    
                                    export namespace Project {
                                        export type Opbrengst = string
                                    }
                                    export type Project = {
                                        readonly 'Opbrengst': string
                                    }
                                    
                                    export namespace Los {
                                    }
                                    export type Los = null
                                    
                                    export namespace Licentieovereenkomst {
                                        export type Periode = string
                                    }
                                    export type Licentieovereenkomst = {
                                        readonly 'Periode': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Project', {
                                        readonly 'Opbrengst': string
                                    }]
                                    | readonly ['Los', null]
                                    | readonly ['Licentieovereenkomst', {
                                        readonly 'Periode': string
                                    }]
                            }
                            export type Contracttype = _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Opbrengst': string
                                }]
                                | readonly ['Los', null]
                                | readonly ['Licentieovereenkomst', {
                                    readonly 'Periode': string
                                }]
                            >
                            export type Omschrijving = string
                            
                            export namespace Type {
                                
                                export namespace SG {
                                    
                                    export namespace Opbrengsten {
                                        export type Grootboekrekening = string
                                    }
                                    export type Opbrengsten = {
                                        readonly 'Grootboekrekening': string
                                    }
                                    
                                    export namespace Balans {
                                        export type Balans_item = string
                                    }
                                    export type Balans = {
                                        readonly 'Balans item': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Opbrengsten', {
                                        readonly 'Grootboekrekening': string
                                    }]
                                    | readonly ['Balans', {
                                        readonly 'Balans item': string
                                    }]
                            }
                            export type Type = _i_core._T_State_Group<null, 
                                | readonly ['Opbrengsten', {
                                    readonly 'Grootboekrekening': string
                                }]
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                            >
                        }
                        export type D = {
                            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                                | readonly ['Intracommunautair', null]
                                | readonly ['Standaard', {
                                    readonly 'BTW-categorie': string
                                }]
                                | readonly ['Binnenland: heffing verlegd', null]
                            >
                            readonly 'Bedrag exclusief BTW': number
                            readonly 'Contracttype': _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Opbrengst': string
                                }]
                                | readonly ['Los', null]
                                | readonly ['Licentieovereenkomst', {
                                    readonly 'Periode': string
                                }]
                            >
                            readonly 'Omschrijving': string
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Opbrengsten', {
                                    readonly 'Grootboekrekening': string
                                }]
                                | readonly ['Balans', {
                                    readonly 'Balans item': string
                                }]
                            >
                        }
                    }
                    export type Regels = _i_core._T_Dictionary<null, {
                        readonly 'BTW-regime': _i_core._T_State_Group<null, 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': string
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                        >
                        readonly 'Bedrag exclusief BTW': number
                        readonly 'Contracttype': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Opbrengst': string
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': string
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': string
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                        >
                    }>
                }
                export type D = {
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Mutaties', null]
                        | readonly ['Rekening courant', {
                            readonly 'Rekening courant': string
                        }]
                    >
                    readonly 'Betalingstermijn': number
                    readonly 'BTW-periode': string
                    readonly 'Brondocument': _i_core._T_State_Group<null, 
                        | readonly ['Toegevoegd', {
                            readonly 'Document': _T_Bestandsnaam
                        }]
                    >
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Project': string
                            readonly 'Offerte': string
                        }]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Overeenkomst': string
                        }]
                    >
                    readonly 'Datum': number
                    readonly 'Debiteur': string
                    readonly 'Regels': _i_core._T_Dictionary<null, {
                        readonly 'BTW-regime': _i_core._T_State_Group<null, 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': string
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                        >
                        readonly 'Bedrag exclusief BTW': number
                        readonly 'Contracttype': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Opbrengst': string
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': string
                            }]
                        >
                        readonly 'Omschrijving': string
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': string
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': string
                            }]
                        >
                    }>
                }
            }
            export type Verkopen = _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'Betalingstermijn': number
                readonly 'BTW-periode': string
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                >
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Project': string
                        readonly 'Offerte': string
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': string
                    }]
                >
                readonly 'Datum': number
                readonly 'Debiteur': string
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': string
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': string
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': string
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': string
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                    >
                }>
            }>
            
            export namespace Verrekenposten {
                
                export namespace D {
                    
                    export namespace Mutaties {
                        
                        export namespace D {
                            export type Bedrag = number
                            
                            export namespace Afhandeling {
                                
                                export namespace SG {
                                    
                                    export namespace Inkoop {
                                        export type Jaar = string
                                        export type Inkoop = string
                                    }
                                    export type Inkoop = {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }
                                    
                                    export namespace Informele_rekening {
                                        export type Informele_rekening = string
                                    }
                                    export type Informele_rekening = {
                                        readonly 'Informele rekening': string
                                    }
                                    
                                    export namespace Verkoop {
                                        export type Jaar = string
                                        export type Verkoop = string
                                    }
                                    export type Verkoop = {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }
                                    
                                    export namespace BTW$mi_periode {
                                        export type Jaar = string
                                        export type BTW$mi_periode = string
                                    }
                                    export type BTW$mi_periode = {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }
                                }
                                export type SG = 
                                    | readonly ['Inkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Inkoop': string
                                    }]
                                    | readonly ['Informele rekening', {
                                        readonly 'Informele rekening': string
                                    }]
                                    | readonly ['Verkoop', {
                                        readonly 'Jaar': string
                                        readonly 'Verkoop': string
                                    }]
                                    | readonly ['BTW-periode', {
                                        readonly 'Jaar': string
                                        readonly 'BTW-periode': string
                                    }]
                            }
                            export type Afhandeling = _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                            >
                        }
                        export type D = {
                            readonly 'Bedrag': number
                            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                            >
                        }
                    }
                    export type Mutaties = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                        >
                    }>
                }
                export type D = {
                    readonly 'Mutaties': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                        >
                    }>
                }
            }
            export type Verrekenposten = _i_core._T_Dictionary<null, {
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Inkoop', {
                            readonly 'Jaar': string
                            readonly 'Inkoop': string
                        }]
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': string
                        }]
                        | readonly ['Verkoop', {
                            readonly 'Jaar': string
                            readonly 'Verkoop': string
                        }]
                        | readonly ['BTW-periode', {
                            readonly 'Jaar': string
                            readonly 'BTW-periode': string
                        }]
                    >
                }>
            }>
        }
        export type D = {
            readonly 'Afgesloten': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', null]
            >
            readonly 'Balans grootboekrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bankrekening', null]
                    | readonly ['Overig', null]
                    | readonly ['Informele rekening', null]
                >
            }>
            readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                    readonly 'Status': _i_core._T_State_Group<null, 
                        | readonly ['Nog te verwerken', null]
                        | readonly ['Verwerkt', {
                            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                                | readonly ['Inkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Inkoop': string
                                }]
                                | readonly ['Verrekenpost', {
                                    readonly 'Verrekenpost': string
                                }]
                                | readonly ['BTW-periode', {
                                    readonly 'Jaar': string
                                    readonly 'BTW-periode': string
                                }]
                                | readonly ['Verkoop', {
                                    readonly 'Jaar': string
                                    readonly 'Verkoop': string
                                }]
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': string
                                }]
                            >
                        }]
                    >
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            readonly 'Beginsaldo nog aan te geven BTW': number
            readonly 'Beginsaldo winstreserve': number
            readonly 'BTW periode saldo': {
                readonly 'Grootboekrekening': string
            }
            readonly 'BTW periodes': _i_core._T_Dictionary<null, {
                readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
                readonly 'Documenten': _i_core._T_Dictionary<null, {
                    readonly 'Bestand': _T_Bestandsnaam
                }>
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }>
            readonly 'Eerste boekjaar': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Vorig boekjaar': string
                }]
            >
            readonly 'Grootboekrekening voor BTW afrondingen': string
            readonly 'Grootboekrekening voor nog aan te geven BTW': string
            readonly 'Grootboekrekening voor resultaat dit jaar': string
            readonly 'Grootboekrekening voor winstreserve': string
            readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Rekening': string
                    }]
                >
            }>
            readonly 'Inkopen': _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', {
                        readonly 'BTW-periode': string
                    }]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': string
                    }]
                >
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
                    | readonly ['Nog toevoegen', null]
                >
                readonly 'Datum': number
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': _i_core._T_State_Group<null, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': string
                        }]
                    >
                }>
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': string
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': string
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': string
                        readonly 'Medewerker': string
                    }]
                >
            }>
            readonly 'Inkoop saldo': {
                readonly 'Grootboekrekening': string
            }
            readonly 'Overige balans items': _i_core._T_Dictionary<null, {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': string
                readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Grootboekrekening': string
                    readonly 'Omschrijving': string
                }>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Jaar': string
                        readonly 'Balans item': string
                    }]
                >
            }>
            readonly 'Resultaat grootboekrekeningen': _i_core._T_Dictionary<null, null>
            readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
            readonly 'Startdatum boekjaar': number
            readonly 'Verkoop saldo': {
                readonly 'Grootboekrekening': string
            }
            readonly 'Verkopen': _i_core._T_Dictionary<null, {
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': string
                    }]
                >
                readonly 'Betalingstermijn': number
                readonly 'BTW-periode': string
                readonly 'Brondocument': _i_core._T_State_Group<null, 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': _T_Bestandsnaam
                    }]
                >
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Project': string
                        readonly 'Offerte': string
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': string
                    }]
                >
                readonly 'Datum': number
                readonly 'Debiteur': string
                readonly 'Regels': _i_core._T_Dictionary<null, {
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': string
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': string
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': string
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': string
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': string
                        }]
                    >
                }>
            }>
            readonly 'Verrekenposten': _i_core._T_Dictionary<null, {
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Afhandeling': _i_core._T_State_Group<null, 
                        | readonly ['Inkoop', {
                            readonly 'Jaar': string
                            readonly 'Inkoop': string
                        }]
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': string
                        }]
                        | readonly ['Verkoop', {
                            readonly 'Jaar': string
                            readonly 'Verkoop': string
                        }]
                        | readonly ['BTW-periode', {
                            readonly 'Jaar': string
                            readonly 'BTW-periode': string
                        }]
                    >
                }>
            }>
        }
    }
    export type Jaren = _i_core._T_Dictionary<null, {
        readonly 'Afgesloten': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Balans grootboekrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<null, 
                    | readonly ['Nog te verwerken', null]
                    | readonly ['Verwerkt', {
                        readonly 'Afhandeling': _i_core._T_State_Group<null, 
                            | readonly ['Inkoop', {
                                readonly 'Jaar': string
                                readonly 'Inkoop': string
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': string
                            }]
                            | readonly ['BTW-periode', {
                                readonly 'Jaar': string
                                readonly 'BTW-periode': string
                            }]
                            | readonly ['Verkoop', {
                                readonly 'Jaar': string
                                readonly 'Verkoop': string
                            }]
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': string
                            }]
                        >
                    }]
                >
            }>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Rekening': string
                }]
            >
        }>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'BTW periode saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'BTW periodes': _i_core._T_Dictionary<null, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
            readonly 'Documenten': _i_core._T_Dictionary<null, {
                readonly 'Bestand': _T_Bestandsnaam
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<null, 
                | readonly ['Aangegeven', {
                    readonly 'Afronding': number
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                }]
                | readonly ['Openstaand', null]
            >
        }>
        readonly 'Eerste boekjaar': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Vorig boekjaar': string
            }]
        >
        readonly 'Grootboekrekening voor BTW afrondingen': string
        readonly 'Grootboekrekening voor nog aan te geven BTW': string
        readonly 'Grootboekrekening voor resultaat dit jaar': string
        readonly 'Grootboekrekening voor winstreserve': string
        readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Rekening': string
                }]
            >
        }>
        readonly 'Inkopen': _i_core._T_Dictionary<null, {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': string
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', {
                    readonly 'BTW-periode': string
                }]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': string
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': _T_Bestandsnaam
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
                | readonly ['Nog toevoegen', null]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': _i_core._T_State_Group<null, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Balans', {
                        readonly 'Balans item': string
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': string
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': string
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': string
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': string
                    readonly 'Medewerker': string
                }]
            >
        }>
        readonly 'Inkoop saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'Overige balans items': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': string
            readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Grootboekrekening': string
                readonly 'Omschrijving': string
            }>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Jaar': string
                    readonly 'Balans item': string
                }]
            >
        }>
        readonly 'Resultaat grootboekrekeningen': _i_core._T_Dictionary<null, null>
        readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
        readonly 'Startdatum boekjaar': number
        readonly 'Verkoop saldo': {
            readonly 'Grootboekrekening': string
        }
        readonly 'Verkopen': _i_core._T_Dictionary<null, {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': string
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': string
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': _T_Bestandsnaam
                }]
            >
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': string
                    readonly 'Offerte': string
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': string
                }]
            >
            readonly 'Datum': number
            readonly 'Debiteur': string
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': string
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': string
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': string
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': string
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': string
                    }]
                >
            }>
        }>
        readonly 'Verrekenposten': _i_core._T_Dictionary<null, {
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Inkoop', {
                        readonly 'Jaar': string
                        readonly 'Inkoop': string
                    }]
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': string
                    }]
                    | readonly ['Verkoop', {
                        readonly 'Jaar': string
                        readonly 'Verkoop': string
                    }]
                    | readonly ['BTW-periode', {
                        readonly 'Jaar': string
                        readonly 'BTW-periode': string
                    }]
                >
            }>
        }>
    }>
    
    export namespace Klanten {
        
        export namespace D {
            
            export namespace Licentieovereenkomsten {
                
                export namespace D {
                    
                    export namespace Periodes {
                        
                        export namespace D {
                            export type Bedrag = number
                        }
                        export type D = {
                            readonly 'Bedrag': number
                        }
                    }
                    export type Periodes = _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                    }>
                }
                export type D = {
                    readonly 'Periodes': _i_core._T_Dictionary<null, {
                        readonly 'Bedrag': number
                    }>
                }
            }
            export type Licentieovereenkomsten = _i_core._T_Dictionary<null, {
                readonly 'Periodes': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                }>
            }>
            
            export namespace Projecten {
                
                export namespace D {
                    
                    export namespace Offertes {
                        
                        export namespace D {
                            
                            export namespace Opbrengsten {
                                
                                export namespace D {
                                    
                                    export namespace Type {
                                        
                                        export namespace SG {
                                            
                                            export namespace Project {
                                                export type Bedrag = number
                                                export type Betaaldatum = number
                                            }
                                            export type Project = {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }
                                        }
                                        export type SG = 
                                            | readonly ['Project', {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }]
                                    }
                                    export type Type = _i_core._T_State_Group<null, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                                export type D = {
                                    readonly 'Type': _i_core._T_State_Group<null, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                            }
                            export type Opbrengsten = _i_core._T_Dictionary<null, {
                                readonly 'Type': _i_core._T_State_Group<null, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                        export type D = {
                            readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                                readonly 'Type': _i_core._T_State_Group<null, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                    }
                    export type Offertes = _i_core._T_Dictionary<null, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
                export type D = {
                    readonly 'Offertes': _i_core._T_Dictionary<null, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                            readonly 'Type': _i_core._T_State_Group<null, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
            }
            export type Projecten = _i_core._T_Dictionary<null, {
                readonly 'Offertes': _i_core._T_Dictionary<null, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Bedrag': number
                                readonly 'Betaaldatum': number
                            }]
                        >
                    }>
                }>
            }>
        }
        export type D = {
            readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<null, {
                readonly 'Periodes': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                }>
            }>
            readonly 'Projecten': _i_core._T_Dictionary<null, {
                readonly 'Offertes': _i_core._T_Dictionary<null, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                        readonly 'Type': _i_core._T_State_Group<null, 
                            | readonly ['Project', {
                                readonly 'Bedrag': number
                                readonly 'Betaaldatum': number
                            }]
                        >
                    }>
                }>
            }>
        }
    }
    export type Klanten = _i_core._T_Dictionary<null, {
        readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<null, {
            readonly 'Periodes': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
            }>
        }>
        readonly 'Projecten': _i_core._T_Dictionary<null, {
            readonly 'Offertes': _i_core._T_Dictionary<null, {
                readonly 'Opbrengsten': _i_core._T_Dictionary<null, {
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Bedrag': number
                            readonly 'Betaaldatum': number
                        }]
                    >
                }>
            }>
        }>
    }>
    
    export namespace Leveranciers {
        
        export namespace D {
        }
        export type D = null
    }
    export type Leveranciers = _i_core._T_Dictionary<null, null>
    
    export namespace Medewerkers {
        
        export namespace D {
        }
        export type D = null
    }
    export type Medewerkers = _i_core._T_Dictionary<null, null>
}
