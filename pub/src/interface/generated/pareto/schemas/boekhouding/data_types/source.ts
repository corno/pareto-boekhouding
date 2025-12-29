import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Fiscaal = {
    readonly 'Balans Hoofdcategorieen': _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
    }>
    readonly 'Resultaat Hoofdcategorieen': _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
    }>
}

export type _T_Grootboek_Categorieen = {
    readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<null, {
        readonly 'Te corrigeren promillage': number
    }>
    readonly 'Balans': _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
        }>
    }>
    readonly 'Resultaat': _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
        }>
    }>
}

export type _T_Beheer = {
    readonly 'BTW-categorieen': _i_core._T_Dictionary<null, {
        readonly 'BTW-heffing': _i_core._T_State_Group<null, 
            | readonly ['Ja', {
                readonly 'BTW-promillage': number
            }]
        >
    }>
    readonly 'Grootboekrekeningen': {
        readonly 'Balans': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        readonly 'Resultaat': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    readonly 'Rekeningen': {
        readonly 'Bank': _i_core._T_Dictionary<null, null>
        readonly 'Informeel': _i_core._T_Dictionary<null, null>
    }
    readonly 'Gebruikers': _i_core._T_Dictionary<null, {
        readonly 'Volledige naam': string
        readonly 'Wachtwoord': string
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

export type _T_Grootboekrekeningen = {
    readonly 'Balans': _i_core._T_Dictionary<null, {
        readonly 'Type': _i_core._T_State_Group<null, 
            | readonly ['Bankrekening', null]
            | readonly ['Overig', null]
            | readonly ['Informele rekening', null]
        >
    }>
    readonly 'Resultaat': _i_core._T_Dictionary<null, null>
}

export type _T_Jaarbeheer = {
    readonly 'Resultaat': {
        readonly 'Grootboekrekening voor BTW afrondingen': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
        readonly 'BTW periodes': _i_core._T_Dictionary<null, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
            readonly 'Documenten': _i_core._T_Dictionary<null, {
                readonly 'Bestand': string
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
    }
    readonly 'Balans': {
        readonly 'Grootboekrekening voor nog aan te geven BTW': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor resultaat dit jaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor winstreserve': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor Inkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor Verkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                }]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        readonly 'Overige balans items': _i_core._T_Dictionary<null, _T_Overige_balans_item>
        readonly 'Verrekenposten': _i_core._T_Dictionary<null, null>
    }
}

export type _T_Overige_balans_item = {
    readonly 'Beginsaldo': number
    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
    readonly 'Nieuw': _i_core._T_State_Group<null, 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
        }]
    >
}

export type _T_Verwijzing_naar_Informele_rekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>

export type _T_Verwijzing_naar_Bankrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Bankrekeningen.D>

export type _T_Handelstransacties = {
    readonly 'Inkopen': _i_core._T_Dictionary<null, {
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
        >
        readonly 'BTW-regime': _i_core._T_State_Group<null, 
            | readonly ['Binnenland: heffing verlegd', null]
            | readonly ['Geen BTW van toepassing', null]
            | readonly ['Import van buiten de EU', null]
            | readonly ['Intracommunautair', null]
            | readonly ['Standaard', {
                readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            }]
        >
        readonly 'Brondocument': _i_core._T_State_Group<null, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
            | readonly ['Niet van toepassing', null]
            | readonly ['Ontbreekt', null]
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
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                }]
                | readonly ['Kosten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                }]
            >
        }>
        readonly 'Type': _i_core._T_State_Group<null, 
            | readonly ['Bonnetje', null]
            | readonly ['Inkoop (met crediteur)', {
                readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                readonly 'Factuurnummer': string
            }]
            | readonly ['Loonheffing', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
            }]
            | readonly ['Salaris', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
            }]
        >
    }>
    readonly 'Verkopen': _i_core._T_Dictionary<null, {
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
        >
        readonly 'Betalingstermijn': number
        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
        readonly 'Brondocument': _i_core._T_State_Group<null, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
        >
        readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
        readonly 'Contracttype': _i_core._T_State_Group<null, 
            | readonly ['Project', {
                readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
            }]
            | readonly ['Licentieovereenkomst', {
                readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
            }]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<null, {
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                }]
                | readonly ['Binnenland: heffing verlegd', null]
            >
            readonly 'Bedrag exclusief BTW': number
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                }]
                | readonly ['Los', null]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Opbrengsten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                }]
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                }]
            >
        }>
    }>
}

export type _T_Mutaties = {
    readonly 'Verrekenpost mutaties': _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, {
        readonly 'Bedrag': number
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
            | readonly ['Balans', _i_core._T_State_Group<null, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >]
        >
    }>>
    readonly 'Bankrekening Mutatie Verwerkingen': _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
        | readonly ['Balans', _i_core._T_State_Group<null, 
            | readonly ['Informele rekening', {
                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
            | readonly ['Verrekenpost', {
                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
            }]
        >]
    >>>
    readonly 'Memoriaal boekingen': _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, {
        readonly 'Bedrag': number
        readonly 'Datum': number
        readonly 'Omschrijving': string
        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
    }>>
}

export type _T_Jaren = _i_core._T_Ordered_Dictionary<null, {
    readonly 'Afgesloten': _i_core._T_State_Group<null, 
        | readonly ['Ja', null]
        | readonly ['Nee', null]
    >
    readonly 'Startdatum boekjaar': number
    readonly 'Grootboekrekeningen': _T_Grootboekrekeningen
    readonly 'Eerste boekjaar': _T_Eerste_boekjaar
    readonly 'Jaarbeheer': _T_Jaarbeheer
    readonly 'Handelstransacties': _T_Handelstransacties
    readonly 'Mutaties': _T_Mutaties
}>

export type _T_Balans_Resultaat_Mutatie = {
    readonly 'Jaar': _et.Optional_Value<_i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>>
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>]
        | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>]
        | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>]
    >
}

export type _T_Eerste_boekjaar = _i_core._T_State_Group<null, 
    | readonly ['Ja', null]
    | readonly ['Nee', {
        readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
    }]
>

export type _T_Root = {
    readonly 'Fiscaal': _T_Fiscaal
    readonly 'Categorieen': _T_Grootboek_Categorieen
    readonly 'Beheer': _T_Beheer
    readonly 'Jaren': _T_Jaren
}

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
    
    export namespace Balans_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa = null
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
    export type Balans_Hoofdcategorieen = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
    }>
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten = null
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
    export type Resultaat_Hoofdcategorieen = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
    }>
}

export namespace _T_Grootboek_Categorieen {
    
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
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa = null
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
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Balans_Hoofdcategorieen.D
                    }
                    export type Hoofdcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D
                    }
                    export type Subcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
                }
                export type D = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
                }
            }
            export type Subcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
        export type D = {
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
    }
    export type Balans = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
        }>
    }>
    
    export namespace Resultaat {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten = null
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
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Resultaat_Hoofdcategorieen.D
                    }
                    export type Hoofdcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D
                    }
                    export type Subcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
                }
                export type D = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
                }
            }
            export type Subcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
        export type D = {
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
    }
    export type Resultaat = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
        }>
    }>
}

export namespace _T_Beheer {
    
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
                }
                export type SG = 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
            }
            export type BTW$mi_heffing = _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
        export type D = {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
    }
    export type BTW$mi_categorieen = _i_core._T_Dictionary<null, {
        readonly 'BTW-heffing': _i_core._T_State_Group<null, 
            | readonly ['Ja', {
                readonly 'BTW-promillage': number
            }]
        >
    }>
    
    export namespace Grootboekrekeningen {
        
        export namespace Balans {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Balans.D
                }
                export type Hoofdcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D
                }
                export type Subcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        export type Activa = null
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
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }
        }
        export type Balans = _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        
        export namespace Resultaat {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Resultaat.D
                }
                export type Hoofdcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D
                }
                export type Subcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        
                        export namespace Kosten {
                            
                            export namespace Correctie_op_vennootschapsbelasting {
                                
                                export namespace SG {
                                    
                                    export namespace Ja {
                                        
                                        export namespace Correctietype {
                                            
                                            export namespace Dictionary_Entry {
                                            }
                                            export type Dictionary_Entry = _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D
                                        }
                                        export type Correctietype = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                    }
                                    export type Ja = {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                    }
                                    export type Nee = null
                                }
                                export type SG = 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                    }]
                                    | readonly ['Nee', null]
                            }
                            export type Correctie_op_vennootschapsbelasting = _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Kosten = {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Opbrengsten = null
                    }
                    export type SG = 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
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
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
            export type D = {
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
        }
        export type Resultaat = _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    export type Grootboekrekeningen = {
        readonly 'Balans': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        readonly 'Resultaat': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    
    export namespace Rekeningen {
        
        export namespace Bank {
            export type D = null
        }
        export type Bank = _i_core._T_Dictionary<null, null>
        
        export namespace Informeel {
            export type D = null
        }
        export type Informeel = _i_core._T_Dictionary<null, null>
    }
    export type Rekeningen = {
        readonly 'Bank': _i_core._T_Dictionary<null, null>
        readonly 'Informeel': _i_core._T_Dictionary<null, null>
    }
    
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
        export type D = null
    }
    export type Leveranciers = _i_core._T_Dictionary<null, null>
    
    export namespace Medewerkers {
        export type D = null
    }
    export type Medewerkers = _i_core._T_Dictionary<null, null>
}

export namespace _T_Grootboekrekeningen {
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Type {
                
                export namespace SG {
                    export type Bankrekening = null
                    export type Overig = null
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
    export type Balans = _i_core._T_Dictionary<null, {
        readonly 'Type': _i_core._T_State_Group<null, 
            | readonly ['Bankrekening', null]
            | readonly ['Overig', null]
            | readonly ['Informele rekening', null]
        >
    }>
    
    export namespace Resultaat {
        export type D = null
    }
    export type Resultaat = _i_core._T_Dictionary<null, null>
}

export namespace _T_Jaarbeheer {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
        }
        export type Grootboekrekening_voor_BTW_afrondingen = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        
        export namespace Salarisrondes {
            export type D = null
        }
        export type Salarisrondes = _i_core._T_Dictionary<null, null>
        
        export namespace BTW_periodes {
            
            export namespace D {
                
                export namespace _11$pe__BTW$mi_categorieen {
                    export type D = null
                }
                export type _11$pe__BTW$mi_categorieen = _i_core._T_Dictionary<null, null>
                
                export namespace Documenten {
                    
                    export namespace D {
                        export type Bestand = string
                    }
                    export type D = {
                        readonly 'Bestand': string
                    }
                }
                export type Documenten = _i_core._T_Dictionary<null, {
                    readonly 'Bestand': string
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
                    readonly 'Bestand': string
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
                readonly 'Bestand': string
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
    }
    export type Resultaat = {
        readonly 'Grootboekrekening voor BTW afrondingen': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
        readonly 'BTW periodes': _i_core._T_Dictionary<null, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
            readonly 'Documenten': _i_core._T_Dictionary<null, {
                readonly 'Bestand': string
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
    }
    
    export namespace Balans {
        
        export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_resultaat_dit_jaar = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_winstreserve = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_Inkoop_saldo = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_Verkoop_saldo = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        export type Beginsaldo_nog_aan_te_geven_BTW = number
        export type Beginsaldo_winstreserve = number
        
        export namespace Informele_rekeningen {
            
            export namespace D {
                export type Beginsaldo = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
                }
                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening = _T_Verwijzing_naar_Informele_rekening
                        }
                        export type Nee = {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                        }
                    }
                    export type SG = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                        }]
                }
                export type Nieuw = _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                    }]
                >
            }
            export type D = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                    }]
                >
            }
        }
        export type Informele_rekeningen = _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                }]
            >
        }>
        
        export namespace Bankrekeningen {
            
            export namespace D {
                export type Beginsaldo = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
                }
                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening = _T_Verwijzing_naar_Bankrekening
                        }
                        export type Nee = {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                        }
                    }
                    export type SG = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                        }]
                }
                export type Nieuw = _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                    }]
                >
                
                export namespace Mutaties {
                    
                    export namespace D {
                        export type Bedrag = number
                        export type Datum = number
                        export type Omschrijving = string
                    }
                    export type D = {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                    }
                }
                export type Mutaties = _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
            export type D = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                    }]
                >
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
        }
        export type Bankrekeningen = _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        
        export namespace Overige_balans_items {
            
            export namespace D {
            }
            export type D = _T_Overige_balans_item
        }
        export type Overige_balans_items = _i_core._T_Dictionary<null, _T_Overige_balans_item>
        
        export namespace Verrekenposten {
            export type D = null
        }
        export type Verrekenposten = _i_core._T_Dictionary<null, null>
    }
    export type Balans = {
        readonly 'Grootboekrekening voor nog aan te geven BTW': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor resultaat dit jaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor winstreserve': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor Inkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor Verkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                }]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        readonly 'Overige balans items': _i_core._T_Dictionary<null, _T_Overige_balans_item>
        readonly 'Verrekenposten': _i_core._T_Dictionary<null, null>
    }
}

export namespace _T_Overige_balans_item {
    export type Beginsaldo = number
    
    export namespace Grootboekrekening {
        
        export namespace Dictionary_Entry {
        }
        export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
    }
    export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
    
    export namespace Nieuw {
        
        export namespace SG {
            export type Ja = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Overige_balans_items.D
                }
                export type Balans_item = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
            }
            export type Nee = {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
            }
        }
        export type SG = 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
            }]
    }
    export type Nieuw = _i_core._T_State_Group<null, 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
        }]
    >
}

export namespace _T_Verwijzing_naar_Informele_rekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
}

export namespace _T_Verwijzing_naar_Bankrekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Bankrekeningen.D
}

export namespace _T_Handelstransacties {
    
    export namespace Inkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                        }
                        export type Rekening_courant = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                    export type Rekening_courant = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                }
                export type SG = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
            }
            export type Afhandeling = _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            
            export namespace BTW$mi_regime {
                
                export namespace SG {
                    export type Binnenland$cl__heffing_verlegd = null
                    export type Geen_BTW_van_toepassing = null
                    export type Import_van_buiten_de_EU = null
                    export type Intracommunautair = null
                    
                    export namespace Standaard {
                        
                        export namespace BTW$mi_periode {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.BTW_periodes.D
                        }
                        export type BTW$mi_periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                    }
                    export type Standaard = {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                    }
                }
                export type SG = 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', null]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                    }]
            }
            export type BTW$mi_regime = _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                }]
            >
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document = string
                    }
                    export type Toegevoegd = {
                        readonly 'Document': string
                    }
                    export type Niet_van_toepassing = null
                    export type Ontbreekt = null
                }
                export type SG = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
            }
            export type Brondocument = _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
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
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Overige_balans_items.D
                                }
                                export type Balans_item = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                            export type Balans = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                            
                            export namespace Kosten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
                                }
                                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                            export type Kosten = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
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
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
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
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                >
            }>
            
            export namespace Type {
                
                export namespace SG {
                    export type Bonnetje = null
                    
                    export namespace Inkoop_$po_met_crediteur$pc_ {
                        
                        export namespace Crediteur {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Leveranciers.D
                        }
                        export type Crediteur = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                        export type Factuurnummer = string
                    }
                    export type Inkoop_$po_met_crediteur$pc_ = {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                        readonly 'Factuurnummer': string
                    }
                    
                    export namespace Loonheffing {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.Salarisrondes.D
                        }
                        export type Ronde = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    }
                    export type Loonheffing = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    }
                    
                    export namespace Salaris {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.Salarisrondes.D
                        }
                        export type Ronde = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                        
                        export namespace Medewerker {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Medewerkers.D
                        }
                        export type Medewerker = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                    }
                    export type Salaris = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                    }
                }
                export type SG = 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                    }]
            }
            export type Type = _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                }]
            >
        }
        export type D = {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
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
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                }]
            >
        }
    }
    export type Inkopen = _i_core._T_Dictionary<null, {
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
        >
        readonly 'BTW-regime': _i_core._T_State_Group<null, 
            | readonly ['Binnenland: heffing verlegd', null]
            | readonly ['Geen BTW van toepassing', null]
            | readonly ['Import van buiten de EU', null]
            | readonly ['Intracommunautair', null]
            | readonly ['Standaard', {
                readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            }]
        >
        readonly 'Brondocument': _i_core._T_State_Group<null, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
            | readonly ['Niet van toepassing', null]
            | readonly ['Ontbreekt', null]
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
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                }]
                | readonly ['Kosten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                }]
            >
        }>
        readonly 'Type': _i_core._T_State_Group<null, 
            | readonly ['Bonnetje', null]
            | readonly ['Inkoop (met crediteur)', {
                readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                readonly 'Factuurnummer': string
            }]
            | readonly ['Loonheffing', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
            }]
            | readonly ['Salaris', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
            }]
        >
    }>
    
    export namespace Verkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                        }
                        export type Rekening_courant = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                    export type Rekening_courant = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                }
                export type SG = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
            }
            export type Afhandeling = _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            export type Betalingstermijn = number
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.BTW_periodes.D
            }
            export type BTW$mi_periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document = string
                    }
                    export type Toegevoegd = {
                        readonly 'Document': string
                    }
                }
                export type SG = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
            }
            export type Brondocument = _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            
            export namespace Debiteur {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Beheer.Klanten.D
            }
            export type Debiteur = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
            
            export namespace Contracttype {
                
                export namespace SG {
                    
                    export namespace Project {
                        
                        export namespace Project {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Klanten.D.Projecten.D
                        }
                        export type Project = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                        
                        export namespace Offerte {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Klanten.D.Projecten.D.Offertes.D
                        }
                        export type Offerte = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                    }
                    export type Project = {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                    }
                    
                    export namespace Licentieovereenkomst {
                        
                        export namespace Overeenkomst {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Klanten.D.Licentieovereenkomsten.D
                        }
                        export type Overeenkomst = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                    }
                    export type Licentieovereenkomst = {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                    }
                }
                export type SG = 
                    | readonly ['Project', {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                    }]
            }
            export type Contracttype = _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                }]
            >
            export type Datum = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace BTW$mi_regime {
                        
                        export namespace SG {
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                
                                export namespace BTW$mi_categorie {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Beheer.BTW$mi_categorieen.D
                                }
                                export type BTW$mi_categorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                            }
                            export type Standaard = {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                            }
                            export type Binnenland$cl__heffing_verlegd = null
                        }
                        export type SG = 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                    }
                    export type BTW$mi_regime = _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    export type Bedrag_exclusief_BTW = number
                    
                    export namespace Contracttype {
                        
                        export namespace SG {
                            
                            export namespace Project {
                                
                                export namespace Opbrengst {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D
                                }
                                export type Opbrengst = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                            }
                            export type Project = {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                            }
                            export type Los = null
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Periode {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D
                                }
                                export type Periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                            }
                            export type Licentieovereenkomst = {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Project', {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                            }]
                    }
                    export type Contracttype = _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                        }]
                    >
                    export type Omschrijving = string
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Opbrengsten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
                                }
                                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                            export type Opbrengsten = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                            
                            export namespace Balans {
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Overige_balans_items.D
                                }
                                export type Balans_item = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                            export type Balans = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                    >
                }
                export type D = {
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                    >
                }
            }
            export type Regels = _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                >
            }>
        }
        export type D = {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                }]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                >
            }>
        }
    }
    export type Verkopen = _i_core._T_Dictionary<null, {
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
        >
        readonly 'Betalingstermijn': number
        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
        readonly 'Brondocument': _i_core._T_State_Group<null, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
        >
        readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
        readonly 'Contracttype': _i_core._T_State_Group<null, 
            | readonly ['Project', {
                readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
            }]
            | readonly ['Licentieovereenkomst', {
                readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
            }]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<null, {
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                }]
                | readonly ['Binnenland: heffing verlegd', null]
            >
            readonly 'Bedrag exclusief BTW': number
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                }]
                | readonly ['Los', null]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Opbrengsten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                }]
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                }]
            >
        }>
    }>
}

export namespace _T_Mutaties {
    
    export namespace Verrekenpost_mutaties {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag = number
                
                export namespace Afhandeling {
                    
                    export namespace SG {
                        
                        export namespace Resultaat {
                        }
                        export type Resultaat = _T_Balans_Resultaat_Mutatie
                        
                        export namespace Balans {
                            
                            export namespace SG {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Informele_rekening {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                                    }
                                    export type Informele_rekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                                }
                                export type Informele_rekening = {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                                }
                            }
                            export type SG = 
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                                }]
                        }
                        export type Balans = _i_core._T_State_Group<null, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }]
                        >
                    }
                    export type SG = 
                        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                        | readonly ['Balans', _i_core._T_State_Group<null, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }]
                        >]
                }
                export type Afhandeling = _i_core._T_State_Group<null, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                    | readonly ['Balans', _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                    >]
                >
            }
            export type D = {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                    | readonly ['Balans', _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                    >]
                >
            }
        }
        export type D = _i_core._T_Dictionary<null, {
            readonly 'Bedrag': number
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                | readonly ['Balans', _i_core._T_State_Group<null, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
                >]
            >
        }>
    }
    export type Verrekenpost_mutaties = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, {
        readonly 'Bedrag': number
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
            | readonly ['Balans', _i_core._T_State_Group<null, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >]
        >
    }>>
    
    export namespace Bankrekening_Mutatie_Verwerkingen {
        
        export namespace D {
            
            export namespace D {
                
                export namespace SG {
                    
                    export namespace Resultaat {
                    }
                    export type Resultaat = _T_Balans_Resultaat_Mutatie
                    
                    export namespace Balans {
                        
                        export namespace SG {
                            
                            export namespace Informele_rekening {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                                }
                                export type Informele_rekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }
                            export type Informele_rekening = {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }
                            
                            export namespace Verrekenpost {
                                
                                export namespace Verrekenpost {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Verrekenposten.D
                                }
                                export type Verrekenpost = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                            }
                            export type Verrekenpost = {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                            }]
                    }
                    export type Balans = _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                        }]
                    >
                }
                export type SG = 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                    | readonly ['Balans', _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                        }]
                    >]
            }
            export type D = _i_core._T_State_Group<null, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                | readonly ['Balans', _i_core._T_State_Group<null, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
                    | readonly ['Verrekenpost', {
                        readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                    }]
                >]
            >
        }
        export type D = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
            | readonly ['Balans', _i_core._T_State_Group<null, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
                | readonly ['Verrekenpost', {
                    readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                }]
            >]
        >>
    }
    export type Bankrekening_Mutatie_Verwerkingen = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
        | readonly ['Balans', _i_core._T_State_Group<null, 
            | readonly ['Informele rekening', {
                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
            | readonly ['Verrekenpost', {
                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
            }]
        >]
    >>>
    
    export namespace Memoriaal_boekingen {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag = number
                export type Datum = number
                export type Omschrijving = string
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
                }
                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
            }
            export type D = {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
            }
        }
        export type D = _i_core._T_Dictionary<null, {
            readonly 'Bedrag': number
            readonly 'Datum': number
            readonly 'Omschrijving': string
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        }>
    }
    export type Memoriaal_boekingen = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, {
        readonly 'Bedrag': number
        readonly 'Datum': number
        readonly 'Omschrijving': string
        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
    }>>
}

export namespace _T_Jaren {
    
    export namespace D {
        
        export namespace Afgesloten {
            
            export namespace SG {
                export type Ja = null
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
        export type Startdatum_boekjaar = number
        
        export namespace Grootboekrekeningen {
        }
        export type Grootboekrekeningen = _T_Grootboekrekeningen
        
        export namespace Eerste_boekjaar {
        }
        export type Eerste_boekjaar = _T_Eerste_boekjaar
        
        export namespace Jaarbeheer {
        }
        export type Jaarbeheer = _T_Jaarbeheer
        
        export namespace Handelstransacties {
        }
        export type Handelstransacties = _T_Handelstransacties
        
        export namespace Mutaties {
        }
        export type Mutaties = _T_Mutaties
    }
    export type D = {
        readonly 'Afgesloten': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Startdatum boekjaar': number
        readonly 'Grootboekrekeningen': _T_Grootboekrekeningen
        readonly 'Eerste boekjaar': _T_Eerste_boekjaar
        readonly 'Jaarbeheer': _T_Jaarbeheer
        readonly 'Handelstransacties': _T_Handelstransacties
        readonly 'Mutaties': _T_Mutaties
    }
}

export namespace _T_Balans_Resultaat_Mutatie {
    
    export namespace Jaar {
        
        export namespace O {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Jaren.D
        }
        export type O = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
    }
    export type Jaar = _et.Optional_Value<_i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace Inkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Handelstransacties.Inkopen.D
            }
            export type Inkoop = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>
            
            export namespace Verkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Handelstransacties.Verkopen.D
            }
            export type Verkoop = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.BTW_periodes.D
            }
            export type BTW$mi_periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
        }
        export type SG = 
            | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>]
            | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>]
            | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>]
        | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>]
        | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>]
    >
}

export namespace _T_Eerste_boekjaar {
    
    export namespace SG {
        export type Ja = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Jaren.D
            }
            export type Vorig_boekjaar = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
        }
        export type Nee = {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
        }
    }
    export type SG = 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
        }]
}

export namespace _T_Root {
    
    export namespace Fiscaal {
    }
    export type Fiscaal = _T_Fiscaal
    
    export namespace Categorieen {
    }
    export type Categorieen = _T_Grootboek_Categorieen
    
    export namespace Beheer {
    }
    export type Beheer = _T_Beheer
    
    export namespace Jaren {
    }
    export type Jaren = _T_Jaren
}

// *** ALIASES FOR NESTED TYPES

export namespace Fiscaal {
    
    export namespace Balans_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa = null
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
    export type Balans_Hoofdcategorieen = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
    }>
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten = null
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
    export type Resultaat_Hoofdcategorieen = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, null>
    }>
}

export namespace Grootboek_Categorieen {
    
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
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa = null
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
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Balans_Hoofdcategorieen.D
                    }
                    export type Hoofdcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D
                    }
                    export type Subcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
                }
                export type D = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
                }
            }
            export type Subcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
        export type D = {
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
    }
    export type Balans = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D>
        }>
    }>
    
    export namespace Resultaat {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten = null
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
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Resultaat_Hoofdcategorieen.D
                    }
                    export type Hoofdcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D
                    }
                    export type Subcategorie_fiscus = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
                }
                export type D = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
                }
            }
            export type Subcategorieen = _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
        export type D = {
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
            }>
        }
    }
    export type Resultaat = _i_core._T_Dictionary<null, {
        readonly 'Zijde': _i_core._T_State_Group<null, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D>
        }>
    }>
}

export namespace Beheer {
    
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
                }
                export type SG = 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
            }
            export type BTW$mi_heffing = _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
        export type D = {
            readonly 'BTW-heffing': _i_core._T_State_Group<null, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
    }
    export type BTW$mi_categorieen = _i_core._T_Dictionary<null, {
        readonly 'BTW-heffing': _i_core._T_State_Group<null, 
            | readonly ['Ja', {
                readonly 'BTW-promillage': number
            }]
        >
    }>
    
    export namespace Grootboekrekeningen {
        
        export namespace Balans {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Balans.D
                }
                export type Hoofdcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D
                }
                export type Subcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        export type Activa = null
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
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }
        }
        export type Balans = _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        
        export namespace Resultaat {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Resultaat.D
                }
                export type Hoofdcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D
                }
                export type Subcategorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        
                        export namespace Kosten {
                            
                            export namespace Correctie_op_vennootschapsbelasting {
                                
                                export namespace SG {
                                    
                                    export namespace Ja {
                                        
                                        export namespace Correctietype {
                                            
                                            export namespace Dictionary_Entry {
                                            }
                                            export type Dictionary_Entry = _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D
                                        }
                                        export type Correctietype = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                    }
                                    export type Ja = {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                    }
                                    export type Nee = null
                                }
                                export type SG = 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                    }]
                                    | readonly ['Nee', null]
                            }
                            export type Correctie_op_vennootschapsbelasting = _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Kosten = {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Opbrengsten = null
                    }
                    export type SG = 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
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
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
            export type D = {
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
                readonly 'Zijde': _i_core._T_State_Group<null, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
        }
        export type Resultaat = _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    export type Grootboekrekeningen = {
        readonly 'Balans': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        readonly 'Resultaat': _i_core._T_Dictionary<null, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D>
            readonly 'Zijde': _i_core._T_State_Group<null, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<null, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    
    export namespace Rekeningen {
        
        export namespace Bank {
            export type D = null
        }
        export type Bank = _i_core._T_Dictionary<null, null>
        
        export namespace Informeel {
            export type D = null
        }
        export type Informeel = _i_core._T_Dictionary<null, null>
    }
    export type Rekeningen = {
        readonly 'Bank': _i_core._T_Dictionary<null, null>
        readonly 'Informeel': _i_core._T_Dictionary<null, null>
    }
    
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
        export type D = null
    }
    export type Leveranciers = _i_core._T_Dictionary<null, null>
    
    export namespace Medewerkers {
        export type D = null
    }
    export type Medewerkers = _i_core._T_Dictionary<null, null>
}

export namespace Grootboekrekeningen {
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Type {
                
                export namespace SG {
                    export type Bankrekening = null
                    export type Overig = null
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
    export type Balans = _i_core._T_Dictionary<null, {
        readonly 'Type': _i_core._T_State_Group<null, 
            | readonly ['Bankrekening', null]
            | readonly ['Overig', null]
            | readonly ['Informele rekening', null]
        >
    }>
    
    export namespace Resultaat {
        export type D = null
    }
    export type Resultaat = _i_core._T_Dictionary<null, null>
}

export namespace Jaarbeheer {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
        }
        export type Grootboekrekening_voor_BTW_afrondingen = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        
        export namespace Salarisrondes {
            export type D = null
        }
        export type Salarisrondes = _i_core._T_Dictionary<null, null>
        
        export namespace BTW_periodes {
            
            export namespace D {
                
                export namespace _11$pe__BTW$mi_categorieen {
                    export type D = null
                }
                export type _11$pe__BTW$mi_categorieen = _i_core._T_Dictionary<null, null>
                
                export namespace Documenten {
                    
                    export namespace D {
                        export type Bestand = string
                    }
                    export type D = {
                        readonly 'Bestand': string
                    }
                }
                export type Documenten = _i_core._T_Dictionary<null, {
                    readonly 'Bestand': string
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
                    readonly 'Bestand': string
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
                readonly 'Bestand': string
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
    }
    export type Resultaat = {
        readonly 'Grootboekrekening voor BTW afrondingen': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        readonly 'Salarisrondes': _i_core._T_Dictionary<null, null>
        readonly 'BTW periodes': _i_core._T_Dictionary<null, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<null, null>
            readonly 'Documenten': _i_core._T_Dictionary<null, {
                readonly 'Bestand': string
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
    }
    
    export namespace Balans {
        
        export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_resultaat_dit_jaar = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_winstreserve = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_Inkoop_saldo = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
        }
        export type Grootboekrekening_voor_Verkoop_saldo = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        export type Beginsaldo_nog_aan_te_geven_BTW = number
        export type Beginsaldo_winstreserve = number
        
        export namespace Informele_rekeningen {
            
            export namespace D {
                export type Beginsaldo = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
                }
                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening = _T_Verwijzing_naar_Informele_rekening
                        }
                        export type Nee = {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                        }
                    }
                    export type SG = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                        }]
                }
                export type Nieuw = _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                    }]
                >
            }
            export type D = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                    }]
                >
            }
        }
        export type Informele_rekeningen = _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                }]
            >
        }>
        
        export namespace Bankrekeningen {
            
            export namespace D {
                export type Beginsaldo = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
                }
                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening = _T_Verwijzing_naar_Bankrekening
                        }
                        export type Nee = {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                        }
                    }
                    export type SG = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                        }]
                }
                export type Nieuw = _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                    }]
                >
                
                export namespace Mutaties {
                    
                    export namespace D {
                        export type Bedrag = number
                        export type Datum = number
                        export type Omschrijving = string
                    }
                    export type D = {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                    }
                }
                export type Mutaties = _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
            export type D = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
                readonly 'Nieuw': _i_core._T_State_Group<null, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                    }]
                >
                readonly 'Mutaties': _i_core._T_Dictionary<null, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
        }
        export type Bankrekeningen = _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        
        export namespace Overige_balans_items {
            
            export namespace D {
            }
            export type D = _T_Overige_balans_item
        }
        export type Overige_balans_items = _i_core._T_Dictionary<null, _T_Overige_balans_item>
        
        export namespace Verrekenposten {
            export type D = null
        }
        export type Verrekenposten = _i_core._T_Dictionary<null, null>
    }
    export type Balans = {
        readonly 'Grootboekrekening voor nog aan te geven BTW': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor resultaat dit jaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor winstreserve': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor Inkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Grootboekrekening voor Verkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'Informele rekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening
                }]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<null, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
            readonly 'Nieuw': _i_core._T_State_Group<null, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<null, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        readonly 'Overige balans items': _i_core._T_Dictionary<null, _T_Overige_balans_item>
        readonly 'Verrekenposten': _i_core._T_Dictionary<null, null>
    }
}

export namespace Overige_balans_item {
    export type Beginsaldo = number
    
    export namespace Grootboekrekening {
        
        export namespace Dictionary_Entry {
        }
        export type Dictionary_Entry = _T_Grootboekrekeningen.Balans.D
    }
    export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Balans.D>
    
    export namespace Nieuw {
        
        export namespace SG {
            export type Ja = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Overige_balans_items.D
                }
                export type Balans_item = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
            }
            export type Nee = {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
            }
        }
        export type SG = 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
            }]
    }
    export type Nieuw = _i_core._T_State_Group<null, 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
        }]
    >
}

export namespace Verwijzing_naar_Informele_rekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
}

export namespace Verwijzing_naar_Bankrekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Bankrekeningen.D
}

export namespace Handelstransacties {
    
    export namespace Inkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                        }
                        export type Rekening_courant = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                    export type Rekening_courant = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                }
                export type SG = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
            }
            export type Afhandeling = _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            
            export namespace BTW$mi_regime {
                
                export namespace SG {
                    export type Binnenland$cl__heffing_verlegd = null
                    export type Geen_BTW_van_toepassing = null
                    export type Import_van_buiten_de_EU = null
                    export type Intracommunautair = null
                    
                    export namespace Standaard {
                        
                        export namespace BTW$mi_periode {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.BTW_periodes.D
                        }
                        export type BTW$mi_periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                    }
                    export type Standaard = {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                    }
                }
                export type SG = 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', null]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                    }]
            }
            export type BTW$mi_regime = _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                }]
            >
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document = string
                    }
                    export type Toegevoegd = {
                        readonly 'Document': string
                    }
                    export type Niet_van_toepassing = null
                    export type Ontbreekt = null
                }
                export type SG = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
            }
            export type Brondocument = _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
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
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Overige_balans_items.D
                                }
                                export type Balans_item = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                            export type Balans = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                            
                            export namespace Kosten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
                                }
                                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                            export type Kosten = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
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
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
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
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                >
            }>
            
            export namespace Type {
                
                export namespace SG {
                    export type Bonnetje = null
                    
                    export namespace Inkoop_$po_met_crediteur$pc_ {
                        
                        export namespace Crediteur {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Leveranciers.D
                        }
                        export type Crediteur = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                        export type Factuurnummer = string
                    }
                    export type Inkoop_$po_met_crediteur$pc_ = {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                        readonly 'Factuurnummer': string
                    }
                    
                    export namespace Loonheffing {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.Salarisrondes.D
                        }
                        export type Ronde = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    }
                    export type Loonheffing = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    }
                    
                    export namespace Salaris {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.Salarisrondes.D
                        }
                        export type Ronde = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                        
                        export namespace Medewerker {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Medewerkers.D
                        }
                        export type Medewerker = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                    }
                    export type Salaris = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                    }
                }
                export type SG = 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                    }]
            }
            export type Type = _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                }]
            >
        }
        export type D = {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
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
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
                }]
            >
        }
    }
    export type Inkopen = _i_core._T_Dictionary<null, {
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
        >
        readonly 'BTW-regime': _i_core._T_State_Group<null, 
            | readonly ['Binnenland: heffing verlegd', null]
            | readonly ['Geen BTW van toepassing', null]
            | readonly ['Import van buiten de EU', null]
            | readonly ['Intracommunautair', null]
            | readonly ['Standaard', {
                readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            }]
        >
        readonly 'Brondocument': _i_core._T_State_Group<null, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
            | readonly ['Niet van toepassing', null]
            | readonly ['Ontbreekt', null]
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
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                }]
                | readonly ['Kosten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                }]
            >
        }>
        readonly 'Type': _i_core._T_State_Group<null, 
            | readonly ['Bonnetje', null]
            | readonly ['Inkoop (met crediteur)', {
                readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Leveranciers.D>
                readonly 'Factuurnummer': string
            }]
            | readonly ['Loonheffing', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
            }]
            | readonly ['Salaris', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.Salarisrondes.D>
                readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Medewerkers.D>
            }]
        >
    }>
    
    export namespace Verkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                        }
                        export type Rekening_courant = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                    export type Rekening_courant = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }
                }
                export type SG = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
            }
            export type Afhandeling = _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            export type Betalingstermijn = number
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.BTW_periodes.D
            }
            export type BTW$mi_periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document = string
                    }
                    export type Toegevoegd = {
                        readonly 'Document': string
                    }
                }
                export type SG = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
            }
            export type Brondocument = _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            
            export namespace Debiteur {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Beheer.Klanten.D
            }
            export type Debiteur = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
            
            export namespace Contracttype {
                
                export namespace SG {
                    
                    export namespace Project {
                        
                        export namespace Project {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Klanten.D.Projecten.D
                        }
                        export type Project = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                        
                        export namespace Offerte {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Klanten.D.Projecten.D.Offertes.D
                        }
                        export type Offerte = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                    }
                    export type Project = {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                    }
                    
                    export namespace Licentieovereenkomst {
                        
                        export namespace Overeenkomst {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry = _T_Beheer.Klanten.D.Licentieovereenkomsten.D
                        }
                        export type Overeenkomst = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                    }
                    export type Licentieovereenkomst = {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                    }
                }
                export type SG = 
                    | readonly ['Project', {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                    }]
            }
            export type Contracttype = _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                }]
            >
            export type Datum = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace BTW$mi_regime {
                        
                        export namespace SG {
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                
                                export namespace BTW$mi_categorie {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Beheer.BTW$mi_categorieen.D
                                }
                                export type BTW$mi_categorie = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                            }
                            export type Standaard = {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                            }
                            export type Binnenland$cl__heffing_verlegd = null
                        }
                        export type SG = 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                    }
                    export type BTW$mi_regime = _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    export type Bedrag_exclusief_BTW = number
                    
                    export namespace Contracttype {
                        
                        export namespace SG {
                            
                            export namespace Project {
                                
                                export namespace Opbrengst {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D
                                }
                                export type Opbrengst = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                            }
                            export type Project = {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                            }
                            export type Los = null
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Periode {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D
                                }
                                export type Periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                            }
                            export type Licentieovereenkomst = {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Project', {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                            }]
                    }
                    export type Contracttype = _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                        }]
                    >
                    export type Omschrijving = string
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Opbrengsten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
                                }
                                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                            export type Opbrengsten = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }
                            
                            export namespace Balans {
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Overige_balans_items.D
                                }
                                export type Balans_item = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                            export type Balans = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                            }]
                    }
                    export type Type = _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                    >
                }
                export type D = {
                    readonly 'BTW-regime': _i_core._T_State_Group<null, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<null, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<null, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                        }]
                    >
                }
            }
            export type Regels = _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                >
            }>
        }
        export type D = {
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
            readonly 'Brondocument': _i_core._T_State_Group<null, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
                }]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<null, {
                readonly 'BTW-regime': _i_core._T_State_Group<null, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<null, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<null, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                    }]
                >
            }>
        }
    }
    export type Verkopen = _i_core._T_Dictionary<null, {
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
        >
        readonly 'Betalingstermijn': number
        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
        readonly 'Brondocument': _i_core._T_State_Group<null, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
        >
        readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D>
        readonly 'Contracttype': _i_core._T_State_Group<null, 
            | readonly ['Project', {
                readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D>
                readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D>
            }]
            | readonly ['Licentieovereenkomst', {
                readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D>
            }]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<null, {
            readonly 'BTW-regime': _i_core._T_State_Group<null, 
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.BTW$mi_categorieen.D>
                }]
                | readonly ['Binnenland: heffing verlegd', null]
            >
            readonly 'Bedrag exclusief BTW': number
            readonly 'Contracttype': _i_core._T_State_Group<null, 
                | readonly ['Project', {
                    readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D>
                }]
                | readonly ['Los', null]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D>
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<null, 
                | readonly ['Opbrengsten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
                }]
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Overige_balans_items.D>
                }]
            >
        }>
    }>
}

export namespace Mutaties {
    
    export namespace Verrekenpost_mutaties {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag = number
                
                export namespace Afhandeling {
                    
                    export namespace SG {
                        
                        export namespace Resultaat {
                        }
                        export type Resultaat = _T_Balans_Resultaat_Mutatie
                        
                        export namespace Balans {
                            
                            export namespace SG {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Informele_rekening {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                                    }
                                    export type Informele_rekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                                }
                                export type Informele_rekening = {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                                }
                            }
                            export type SG = 
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                                }]
                        }
                        export type Balans = _i_core._T_State_Group<null, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }]
                        >
                    }
                    export type SG = 
                        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                        | readonly ['Balans', _i_core._T_State_Group<null, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }]
                        >]
                }
                export type Afhandeling = _i_core._T_State_Group<null, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                    | readonly ['Balans', _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                    >]
                >
            }
            export type D = {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<null, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                    | readonly ['Balans', _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                    >]
                >
            }
        }
        export type D = _i_core._T_Dictionary<null, {
            readonly 'Bedrag': number
            readonly 'Afhandeling': _i_core._T_State_Group<null, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                | readonly ['Balans', _i_core._T_State_Group<null, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
                >]
            >
        }>
    }
    export type Verrekenpost_mutaties = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, {
        readonly 'Bedrag': number
        readonly 'Afhandeling': _i_core._T_State_Group<null, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
            | readonly ['Balans', _i_core._T_State_Group<null, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
            >]
        >
    }>>
    
    export namespace Bankrekening_Mutatie_Verwerkingen {
        
        export namespace D {
            
            export namespace D {
                
                export namespace SG {
                    
                    export namespace Resultaat {
                    }
                    export type Resultaat = _T_Balans_Resultaat_Mutatie
                    
                    export namespace Balans {
                        
                        export namespace SG {
                            
                            export namespace Informele_rekening {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Informele_rekeningen.D
                                }
                                export type Informele_rekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }
                            export type Informele_rekening = {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }
                            
                            export namespace Verrekenpost {
                                
                                export namespace Verrekenpost {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry = _T_Jaarbeheer.Balans.Verrekenposten.D
                                }
                                export type Verrekenpost = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                            }
                            export type Verrekenpost = {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                            }
                        }
                        export type SG = 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                            }]
                    }
                    export type Balans = _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                        }]
                    >
                }
                export type SG = 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                    | readonly ['Balans', _i_core._T_State_Group<null, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                        }]
                    >]
            }
            export type D = _i_core._T_State_Group<null, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
                | readonly ['Balans', _i_core._T_State_Group<null, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                    }]
                    | readonly ['Verrekenpost', {
                        readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                    }]
                >]
            >
        }
        export type D = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
            | readonly ['Balans', _i_core._T_State_Group<null, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
                }]
                | readonly ['Verrekenpost', {
                    readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
                }]
            >]
        >>
    }
    export type Bankrekening_Mutatie_Verwerkingen = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie]
        | readonly ['Balans', _i_core._T_State_Group<null, 
            | readonly ['Informele rekening', {
                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Informele_rekeningen.D>
            }]
            | readonly ['Verrekenpost', {
                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Balans.Verrekenposten.D>
            }]
        >]
    >>>
    
    export namespace Memoriaal_boekingen {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag = number
                export type Datum = number
                export type Omschrijving = string
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Grootboekrekeningen.Resultaat.D
                }
                export type Grootboekrekening = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
            }
            export type D = {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
            }
        }
        export type D = _i_core._T_Dictionary<null, {
            readonly 'Bedrag': number
            readonly 'Datum': number
            readonly 'Omschrijving': string
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
        }>
    }
    export type Memoriaal_boekingen = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, {
        readonly 'Bedrag': number
        readonly 'Datum': number
        readonly 'Omschrijving': string
        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Grootboekrekeningen.Resultaat.D>
    }>>
}

export namespace Jaren {
    
    export namespace D {
        
        export namespace Afgesloten {
            
            export namespace SG {
                export type Ja = null
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
        export type Startdatum_boekjaar = number
        
        export namespace Grootboekrekeningen {
        }
        export type Grootboekrekeningen = _T_Grootboekrekeningen
        
        export namespace Eerste_boekjaar {
        }
        export type Eerste_boekjaar = _T_Eerste_boekjaar
        
        export namespace Jaarbeheer {
        }
        export type Jaarbeheer = _T_Jaarbeheer
        
        export namespace Handelstransacties {
        }
        export type Handelstransacties = _T_Handelstransacties
        
        export namespace Mutaties {
        }
        export type Mutaties = _T_Mutaties
    }
    export type D = {
        readonly 'Afgesloten': _i_core._T_State_Group<null, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Startdatum boekjaar': number
        readonly 'Grootboekrekeningen': _T_Grootboekrekeningen
        readonly 'Eerste boekjaar': _T_Eerste_boekjaar
        readonly 'Jaarbeheer': _T_Jaarbeheer
        readonly 'Handelstransacties': _T_Handelstransacties
        readonly 'Mutaties': _T_Mutaties
    }
}

export namespace Balans_Resultaat_Mutatie {
    
    export namespace Jaar {
        
        export namespace O {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Jaren.D
        }
        export type O = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
    }
    export type Jaar = _et.Optional_Value<_i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace Inkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Handelstransacties.Inkopen.D
            }
            export type Inkoop = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>
            
            export namespace Verkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Handelstransacties.Verkopen.D
            }
            export type Verkoop = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Jaarbeheer.Resultaat.BTW_periodes.D
            }
            export type BTW$mi_periode = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>
        }
        export type SG = 
            | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>]
            | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>]
            | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Inkopen.D>]
        | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Handelstransacties.Verkopen.D>]
        | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaarbeheer.Resultaat.BTW_periodes.D>]
    >
}

export namespace Eerste_boekjaar {
    
    export namespace SG {
        export type Ja = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry = _T_Jaren.D
            }
            export type Vorig_boekjaar = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
        }
        export type Nee = {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
        }
    }
    export type SG = 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Jaren.D>
        }]
}

export namespace Root {
    
    export namespace Fiscaal {
    }
    export type Fiscaal = _T_Fiscaal
    
    export namespace Categorieen {
    }
    export type Categorieen = _T_Grootboek_Categorieen
    
    export namespace Beheer {
    }
    export type Beheer = _T_Beheer
    
    export namespace Jaren {
    }
    export type Jaren = _T_Jaren
}
