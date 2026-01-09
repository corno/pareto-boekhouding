import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/unresolved"

// **** TYPES

export type _T_Fiscaal<M_Source> = {
    readonly 'Balans Hoofdcategorieen': _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
    }>
    readonly 'Resultaat Hoofdcategorieen': _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
    }>
}

export type _T_Grootboek_Categorieen<M_Source> = {
    readonly 'Correctietypes vennootschapsbelasting': _i_core._T_Dictionary<M_Source, {
        readonly 'Te corrigeren promillage': number
    }>
    readonly 'Balans': _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
        }>
    }>
    readonly 'Resultaat': _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
        }>
    }>
}

export type _T_Beheer<M_Source> = {
    readonly 'BTW-categorieen': _i_core._T_Dictionary<M_Source, {
        readonly 'BTW-heffing': _i_core._T_State_Group<M_Source, 
            | readonly ['Ja', {
                readonly 'BTW-promillage': number
            }]
        >
    }>
    readonly 'Grootboekrekeningen': {
        readonly 'Balans': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        readonly 'Resultaat': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    readonly 'Rekeningen': {
        readonly 'Bank': _i_core._T_Dictionary<M_Source, null>
        readonly 'Informeel': _i_core._T_Dictionary<M_Source, null>
    }
    readonly 'Gebruikers': _i_core._T_Dictionary<M_Source, {
        readonly 'Volledige naam': string
        readonly 'Wachtwoord': string
    }>
    readonly 'Klanten': _i_core._T_Dictionary<M_Source, {
        readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<M_Source, {
            readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
            }>
        }>
        readonly 'Projecten': _i_core._T_Dictionary<M_Source, {
            readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                        | readonly ['Project', {
                            readonly 'Bedrag': number
                            readonly 'Betaaldatum': number
                        }]
                    >
                }>
            }>
        }>
    }>
    readonly 'Leveranciers': _i_core._T_Dictionary<M_Source, null>
    readonly 'Medewerkers': _i_core._T_Dictionary<M_Source, null>
}

export type _T_Grootboekrekeningen<M_Source> = {
    readonly 'Balans': _i_core._T_Dictionary<M_Source, {
        readonly 'Type': _i_core._T_State_Group<M_Source, 
            | readonly ['Bankrekening', null]
            | readonly ['Overig', null]
            | readonly ['Informele rekening', null]
        >
    }>
    readonly 'Resultaat': _i_core._T_Dictionary<M_Source, null>
}

export type _T_Jaarbeheer<M_Source> = {
    readonly 'Resultaat': {
        readonly 'Grootboekrekening voor BTW afrondingen': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        readonly 'Salarisrondes': _i_core._T_Dictionary<M_Source, null>
        readonly 'BTW periodes': _i_core._T_Dictionary<M_Source, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
            readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                readonly 'Bestand': string
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<M_Source, 
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
        readonly 'Grootboekrekening voor nog aan te geven BTW': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor resultaat dit jaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor winstreserve': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor Inkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor Verkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'Informele rekeningen': _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                }]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        readonly 'Overige balans items': _i_core._T_Dictionary<M_Source, _T_Overige_balans_item<M_Source>>
        readonly 'Verrekenposten': _i_core._T_Dictionary<M_Source, null>
    }
}

export type _T_Overige_balans_item<M_Source> = {
    readonly 'Beginsaldo': number
    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
    readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
        }]
    >
}

export type _T_Verwijzing_naar_Informele_rekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>

export type _T_Verwijzing_naar_Bankrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Bankrekeningen.D<M_Source>>

export type _T_Handelstransacties<M_Source> = {
    readonly 'Inkopen': _i_core._T_Dictionary<M_Source, {
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
        >
        readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
            | readonly ['Binnenland: heffing verlegd', null]
            | readonly ['Geen BTW van toepassing', null]
            | readonly ['Import van buiten de EU', null]
            | readonly ['Intracommunautair', null]
            | readonly ['Standaard', {
                readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            }]
        >
        readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
            | readonly ['Niet van toepassing', null]
            | readonly ['Ontbreekt', null]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                | readonly ['Bekend', {
                    readonly 'BTW-bedrag': number
                    readonly 'Bedrag inclusief geheven BTW': number
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                }]
                | readonly ['Kosten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                }]
            >
        }>
        readonly 'Type': _i_core._T_State_Group<M_Source, 
            | readonly ['Bonnetje', null]
            | readonly ['Inkoop (met crediteur)', {
                readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                readonly 'Factuurnummer': string
            }]
            | readonly ['Loonheffing', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
            }]
            | readonly ['Salaris', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
            }]
        >
    }>
    readonly 'Verkopen': _i_core._T_Dictionary<M_Source, {
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
        >
        readonly 'Betalingstermijn': number
        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
        readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
        >
        readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
        readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
            | readonly ['Project', {
                readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
            }]
            | readonly ['Licentieovereenkomst', {
                readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
            }]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<M_Source, {
            readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                }]
                | readonly ['Binnenland: heffing verlegd', null]
            >
            readonly 'Bedrag exclusief BTW': number
            readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                }]
                | readonly ['Los', null]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Opbrengsten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                }]
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                }]
            >
        }>
    }>
}

export type _T_Mutaties<M_Source> = {
    readonly 'Verrekenpost mutaties': _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, {
        readonly 'Bedrag': number
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
            | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >]
        >
    }>>
    readonly 'Bankrekening Mutatie Verwerkingen': _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
        | readonly ['Balans', _i_core._T_State_Group<M_Source, 
            | readonly ['Informele rekening', {
                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
            | readonly ['Verrekenpost', {
                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
            }]
        >]
    >>>
    readonly 'Memoriaal boekingen': _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, {
        readonly 'Bedrag': number
        readonly 'Datum': number
        readonly 'Omschrijving': string
        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
    }>>
}

export type _T_Jaren<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, {
    readonly 'Afgesloten': _i_core._T_State_Group<M_Source, 
        | readonly ['Ja', null]
        | readonly ['Nee', null]
    >
    readonly 'Startdatum boekjaar': number
    readonly 'Grootboekrekeningen': _T_Grootboekrekeningen<M_Source>
    readonly 'Eerste boekjaar': _T_Eerste_boekjaar<M_Source>
    readonly 'Jaarbeheer': _T_Jaarbeheer<M_Source>
    readonly 'Handelstransacties': _T_Handelstransacties<M_Source>
    readonly 'Mutaties': _T_Mutaties<M_Source>
}>

export type _T_Balans_Resultaat_Mutatie<M_Source> = {
    readonly 'Jaar': _pi.Optional_Value<_i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>>
    readonly 'type': _i_core._T_State_Group<M_Source, 
        | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>]
        | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>]
        | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>]
    >
}

export type _T_Eerste_boekjaar<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['Ja', null]
    | readonly ['Nee', {
        readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
    }]
>

export type _T_Root<M_Source> = {
    readonly 'Fiscaal': _T_Fiscaal<M_Source>
    readonly 'Categorieen': _T_Grootboek_Categorieen<M_Source>
    readonly 'Beheer': _T_Beheer<M_Source>
    readonly 'Jaren': _T_Jaren<M_Source>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Fiscaal<M_Source> = _T_Fiscaal<M_Source>

export type Grootboek_Categorieen<M_Source> = _T_Grootboek_Categorieen<M_Source>

export type Beheer<M_Source> = _T_Beheer<M_Source>

export type Grootboekrekeningen<M_Source> = _T_Grootboekrekeningen<M_Source>

export type Jaarbeheer<M_Source> = _T_Jaarbeheer<M_Source>

export type Overige_balans_item<M_Source> = _T_Overige_balans_item<M_Source>

export type Verwijzing_naar_Informele_rekening<M_Source> = _T_Verwijzing_naar_Informele_rekening<M_Source>

export type Verwijzing_naar_Bankrekening<M_Source> = _T_Verwijzing_naar_Bankrekening<M_Source>

export type Handelstransacties<M_Source> = _T_Handelstransacties<M_Source>

export type Mutaties<M_Source> = _T_Mutaties<M_Source>

export type Jaren<M_Source> = _T_Jaren<M_Source>

export type Balans_Resultaat_Mutatie<M_Source> = _T_Balans_Resultaat_Mutatie<M_Source>

export type Eerste_boekjaar<M_Source> = _T_Eerste_boekjaar<M_Source>

export type Root<M_Source> = _T_Root<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Fiscaal {
    
    export namespace Balans_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa<M_Source> = null
                    export type Passiva<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            
            export namespace Subcategorieen {
                export type D<M_Source> = null
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, null>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
        }
    }
    export type Balans_Hoofdcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
    }>
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten<M_Source> = null
                    export type Opbrengsten<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            
            export namespace Subcategorieen {
                export type D<M_Source> = null
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, null>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
        }
    }
    export type Resultaat_Hoofdcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
    }>
}

export namespace _T_Grootboek_Categorieen {
    
    export namespace Correctietypes_vennootschapsbelasting {
        
        export namespace D {
            export type Te_corrigeren_promillage<M_Source> = number
        }
        export type D<M_Source> = {
            readonly 'Te corrigeren promillage': number
        }
    }
    export type Correctietypes_vennootschapsbelasting<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Te corrigeren promillage': number
    }>
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa<M_Source> = null
                    export type Passiva<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            
            export namespace Subcategorieen {
                
                export namespace D {
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>
                    }
                    export type Hoofdcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>
                    }
                    export type Subcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
                export type D<M_Source> = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
    }
    export type Balans<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
        }>
    }>
    
    export namespace Resultaat {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten<M_Source> = null
                    export type Opbrengsten<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            
            export namespace Subcategorieen {
                
                export namespace D {
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>
                    }
                    export type Hoofdcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>
                    }
                    export type Subcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
                export type D<M_Source> = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
    }
    export type Resultaat<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
        }>
    }>
}

export namespace _T_Beheer {
    
    export namespace BTW$mi_categorieen {
        
        export namespace D {
            
            export namespace BTW$mi_heffing {
                
                export namespace SG {
                    
                    export namespace Ja {
                        export type BTW$mi_promillage<M_Source> = number
                    }
                    export type Ja<M_Source> = {
                        readonly 'BTW-promillage': number
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
            }
            export type BTW$mi_heffing<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
        export type D<M_Source> = {
            readonly 'BTW-heffing': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
    }
    export type BTW$mi_categorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'BTW-heffing': _i_core._T_State_Group<M_Source, 
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
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Balans.D<M_Source>
                }
                export type Hoofdcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>
                }
                export type Subcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        export type Activa<M_Source> = null
                        export type Passiva<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                }
                export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }
            export type D<M_Source> = {
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
                readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }
        }
        export type Balans<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        
        export namespace Resultaat {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Resultaat.D<M_Source>
                }
                export type Hoofdcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>
                }
                export type Subcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        
                        export namespace Kosten {
                            
                            export namespace Correctie_op_vennootschapsbelasting {
                                
                                export namespace SG {
                                    
                                    export namespace Ja {
                                        
                                        export namespace Correctietype {
                                            
                                            export namespace Dictionary_Entry {
                                            }
                                            export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>
                                        }
                                        export type Correctietype<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                    }
                                    export type Ja<M_Source> = {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                    }
                                    export type Nee<M_Source> = null
                                }
                                export type SG<M_Source> = 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                    }]
                                    | readonly ['Nee', null]
                            }
                            export type Correctie_op_vennootschapsbelasting<M_Source> = _i_core._T_State_Group<M_Source, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Kosten<M_Source> = {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Opbrengsten<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                }]
                                | readonly ['Nee', null]
                            >
                        }]
                        | readonly ['Opbrengsten', null]
                }
                export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
            export type D<M_Source> = {
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
                readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
        }
        export type Resultaat<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    export type Grootboekrekeningen<M_Source> = {
        readonly 'Balans': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        readonly 'Resultaat': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
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
            export type D<M_Source> = null
        }
        export type Bank<M_Source> = _i_core._T_Dictionary<M_Source, null>
        
        export namespace Informeel {
            export type D<M_Source> = null
        }
        export type Informeel<M_Source> = _i_core._T_Dictionary<M_Source, null>
    }
    export type Rekeningen<M_Source> = {
        readonly 'Bank': _i_core._T_Dictionary<M_Source, null>
        readonly 'Informeel': _i_core._T_Dictionary<M_Source, null>
    }
    
    export namespace Gebruikers {
        
        export namespace D {
            export type Volledige_naam<M_Source> = string
            export type Wachtwoord<M_Source> = string
        }
        export type D<M_Source> = {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }
    }
    export type Gebruikers<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Volledige naam': string
        readonly 'Wachtwoord': string
    }>
    
    export namespace Klanten {
        
        export namespace D {
            
            export namespace Licentieovereenkomsten {
                
                export namespace D {
                    
                    export namespace Periodes {
                        
                        export namespace D {
                            export type Bedrag<M_Source> = number
                        }
                        export type D<M_Source> = {
                            readonly 'Bedrag': number
                        }
                    }
                    export type Periodes<M_Source> = _i_core._T_Dictionary<M_Source, {
                        readonly 'Bedrag': number
                    }>
                }
                export type D<M_Source> = {
                    readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                        readonly 'Bedrag': number
                    }>
                }
            }
            export type Licentieovereenkomsten<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
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
                                                export type Bedrag<M_Source> = number
                                                export type Betaaldatum<M_Source> = number
                                            }
                                            export type Project<M_Source> = {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }
                                        }
                                        export type SG<M_Source> = 
                                            | readonly ['Project', {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }]
                                    }
                                    export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                                export type D<M_Source> = {
                                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                            }
                            export type Opbrengsten<M_Source> = _i_core._T_Dictionary<M_Source, {
                                readonly 'Type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                        export type D<M_Source> = {
                            readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                                readonly 'Type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                    }
                    export type Offertes<M_Source> = _i_core._T_Dictionary<M_Source, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                            readonly 'Type': _i_core._T_State_Group<M_Source, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
                export type D<M_Source> = {
                    readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                            readonly 'Type': _i_core._T_State_Group<M_Source, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
            }
            export type Projecten<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                        readonly 'Type': _i_core._T_State_Group<M_Source, 
                            | readonly ['Project', {
                                readonly 'Bedrag': number
                                readonly 'Betaaldatum': number
                            }]
                        >
                    }>
                }>
            }>
        }
        export type D<M_Source> = {
            readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<M_Source, {
                readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                    readonly 'Bedrag': number
                }>
            }>
            readonly 'Projecten': _i_core._T_Dictionary<M_Source, {
                readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                        readonly 'Type': _i_core._T_State_Group<M_Source, 
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
    export type Klanten<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<M_Source, {
            readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
            }>
        }>
        readonly 'Projecten': _i_core._T_Dictionary<M_Source, {
            readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
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
        export type D<M_Source> = null
    }
    export type Leveranciers<M_Source> = _i_core._T_Dictionary<M_Source, null>
    
    export namespace Medewerkers {
        export type D<M_Source> = null
    }
    export type Medewerkers<M_Source> = _i_core._T_Dictionary<M_Source, null>
}

export namespace _T_Grootboekrekeningen {
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Type {
                
                export namespace SG {
                    export type Bankrekening<M_Source> = null
                    export type Overig<M_Source> = null
                    export type Informele_rekening<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Bankrekening', null]
                    | readonly ['Overig', null]
                    | readonly ['Informele rekening', null]
            }
            export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }
        export type D<M_Source> = {
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }
    }
    export type Balans<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Type': _i_core._T_State_Group<M_Source, 
            | readonly ['Bankrekening', null]
            | readonly ['Overig', null]
            | readonly ['Informele rekening', null]
        >
    }>
    
    export namespace Resultaat {
        export type D<M_Source> = null
    }
    export type Resultaat<M_Source> = _i_core._T_Dictionary<M_Source, null>
}

export namespace _T_Jaarbeheer {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
        }
        export type Grootboekrekening_voor_BTW_afrondingen<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        
        export namespace Salarisrondes {
            export type D<M_Source> = null
        }
        export type Salarisrondes<M_Source> = _i_core._T_Dictionary<M_Source, null>
        
        export namespace BTW_periodes {
            
            export namespace D {
                
                export namespace _11$pe__BTW$mi_categorieen {
                    export type D<M_Source> = null
                }
                export type _11$pe__BTW$mi_categorieen<M_Source> = _i_core._T_Dictionary<M_Source, null>
                
                export namespace Documenten {
                    
                    export namespace D {
                        export type Bestand<M_Source> = string
                    }
                    export type D<M_Source> = {
                        readonly 'Bestand': string
                    }
                }
                export type Documenten<M_Source> = _i_core._T_Dictionary<M_Source, {
                    readonly 'Bestand': string
                }>
                export type Omschrijving<M_Source> = string
                
                export namespace Status {
                    
                    export namespace SG {
                        
                        export namespace Aangegeven {
                            export type Afronding<M_Source> = number
                            export type Bedrag<M_Source> = number
                            export type Datum<M_Source> = number
                        }
                        export type Aangegeven<M_Source> = {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }
                        export type Openstaand<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['Aangegeven', {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }]
                        | readonly ['Openstaand', null]
                }
                export type Status<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }
            export type D<M_Source> = {
                readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
                readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                    readonly 'Bestand': string
                }>
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<M_Source, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }
        }
        export type BTW_periodes<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
            readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                readonly 'Bestand': string
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<M_Source, 
                | readonly ['Aangegeven', {
                    readonly 'Afronding': number
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                }]
                | readonly ['Openstaand', null]
            >
        }>
    }
    export type Resultaat<M_Source> = {
        readonly 'Grootboekrekening voor BTW afrondingen': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        readonly 'Salarisrondes': _i_core._T_Dictionary<M_Source, null>
        readonly 'BTW periodes': _i_core._T_Dictionary<M_Source, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
            readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                readonly 'Bestand': string
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<M_Source, 
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
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_resultaat_dit_jaar<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_winstreserve<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_Inkoop_saldo<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_Verkoop_saldo<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        export type Beginsaldo_nog_aan_te_geven_BTW<M_Source> = number
        export type Beginsaldo_winstreserve<M_Source> = number
        
        export namespace Informele_rekeningen {
            
            export namespace D {
                export type Beginsaldo<M_Source> = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
                }
                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja<M_Source> = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening<M_Source> = _T_Verwijzing_naar_Informele_rekening<M_Source>
                        }
                        export type Nee<M_Source> = {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                        }
                    }
                    export type SG<M_Source> = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                        }]
                }
                export type Nieuw<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                    }]
                >
            }
            export type D<M_Source> = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                    }]
                >
            }
        }
        export type Informele_rekeningen<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                }]
            >
        }>
        
        export namespace Bankrekeningen {
            
            export namespace D {
                export type Beginsaldo<M_Source> = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
                }
                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja<M_Source> = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening<M_Source> = _T_Verwijzing_naar_Bankrekening<M_Source>
                        }
                        export type Nee<M_Source> = {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                        }
                    }
                    export type SG<M_Source> = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                        }]
                }
                export type Nieuw<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                    }]
                >
                
                export namespace Mutaties {
                    
                    export namespace D {
                        export type Bedrag<M_Source> = number
                        export type Datum<M_Source> = number
                        export type Omschrijving<M_Source> = string
                    }
                    export type D<M_Source> = {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                    }
                }
                export type Mutaties<M_Source> = _i_core._T_Dictionary<M_Source, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
            export type D<M_Source> = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                    }]
                >
                readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
        }
        export type Bankrekeningen<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        
        export namespace Overige_balans_items {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Overige_balans_item<M_Source>
        }
        export type Overige_balans_items<M_Source> = _i_core._T_Dictionary<M_Source, _T_Overige_balans_item<M_Source>>
        
        export namespace Verrekenposten {
            export type D<M_Source> = null
        }
        export type Verrekenposten<M_Source> = _i_core._T_Dictionary<M_Source, null>
    }
    export type Balans<M_Source> = {
        readonly 'Grootboekrekening voor nog aan te geven BTW': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor resultaat dit jaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor winstreserve': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor Inkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor Verkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'Informele rekeningen': _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                }]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        readonly 'Overige balans items': _i_core._T_Dictionary<M_Source, _T_Overige_balans_item<M_Source>>
        readonly 'Verrekenposten': _i_core._T_Dictionary<M_Source, null>
    }
}

export namespace _T_Overige_balans_item {
    export type Beginsaldo<M_Source> = number
    
    export namespace Grootboekrekening {
        
        export namespace Dictionary_Entry {
        }
        export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
    }
    export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
    
    export namespace Nieuw {
        
        export namespace SG {
            export type Ja<M_Source> = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>
                }
                export type Balans_item<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
            }
            export type Nee<M_Source> = {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
            }
        }
        export type SG<M_Source> = 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
            }]
    }
    export type Nieuw<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
        }]
    >
}

export namespace _T_Verwijzing_naar_Informele_rekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
}

export namespace _T_Verwijzing_naar_Bankrekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Bankrekeningen.D<M_Source>
}

export namespace _T_Handelstransacties {
    
    export namespace Inkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties<M_Source> = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                        }
                        export type Rekening_courant<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                    export type Rekening_courant<M_Source> = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
            }
            export type Afhandeling<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            
            export namespace BTW$mi_regime {
                
                export namespace SG {
                    export type Binnenland$cl__heffing_verlegd<M_Source> = null
                    export type Geen_BTW_van_toepassing<M_Source> = null
                    export type Import_van_buiten_de_EU<M_Source> = null
                    export type Intracommunautair<M_Source> = null
                    
                    export namespace Standaard {
                        
                        export namespace BTW$mi_periode {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>
                        }
                        export type BTW$mi_periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                    }
                    export type Standaard<M_Source> = {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', null]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                    }]
            }
            export type BTW$mi_regime<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                }]
            >
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document<M_Source> = string
                    }
                    export type Toegevoegd<M_Source> = {
                        readonly 'Document': string
                    }
                    export type Niet_van_toepassing<M_Source> = null
                    export type Ontbreekt<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
            }
            export type Brondocument<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
            >
            export type Datum<M_Source> = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace Bedrag {
                        
                        export namespace SG {
                            
                            export namespace Bekend {
                                export type BTW$mi_bedrag<M_Source> = number
                                export type Bedrag_inclusief_geheven_BTW<M_Source> = number
                            }
                            export type Bekend<M_Source> = {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Bekend', {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }]
                    }
                    export type Bedrag<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    export type Omschrijving<M_Source> = string
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Balans {
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>
                                }
                                export type Balans_item<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                            export type Balans<M_Source> = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                            
                            export namespace Kosten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
                                }
                                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                            export type Kosten<M_Source> = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }]
                    }
                    export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                    >
                }
                export type D<M_Source> = {
                    readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                    >
                }
            }
            export type Regels<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                >
            }>
            
            export namespace Type {
                
                export namespace SG {
                    export type Bonnetje<M_Source> = null
                    
                    export namespace Inkoop_$po_met_crediteur$pc_ {
                        
                        export namespace Crediteur {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Leveranciers.D<M_Source>
                        }
                        export type Crediteur<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                        export type Factuurnummer<M_Source> = string
                    }
                    export type Inkoop_$po_met_crediteur$pc_<M_Source> = {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                        readonly 'Factuurnummer': string
                    }
                    
                    export namespace Loonheffing {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>
                        }
                        export type Ronde<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    }
                    export type Loonheffing<M_Source> = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    }
                    
                    export namespace Salaris {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>
                        }
                        export type Ronde<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                        
                        export namespace Medewerker {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Medewerkers.D<M_Source>
                        }
                        export type Medewerker<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                    }
                    export type Salaris<M_Source> = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                    }]
            }
            export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                }]
            >
        }
        export type D<M_Source> = {
            readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                }]
            >
        }
    }
    export type Inkopen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
        >
        readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
            | readonly ['Binnenland: heffing verlegd', null]
            | readonly ['Geen BTW van toepassing', null]
            | readonly ['Import van buiten de EU', null]
            | readonly ['Intracommunautair', null]
            | readonly ['Standaard', {
                readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            }]
        >
        readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
            | readonly ['Niet van toepassing', null]
            | readonly ['Ontbreekt', null]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                | readonly ['Bekend', {
                    readonly 'BTW-bedrag': number
                    readonly 'Bedrag inclusief geheven BTW': number
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                }]
                | readonly ['Kosten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                }]
            >
        }>
        readonly 'Type': _i_core._T_State_Group<M_Source, 
            | readonly ['Bonnetje', null]
            | readonly ['Inkoop (met crediteur)', {
                readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                readonly 'Factuurnummer': string
            }]
            | readonly ['Loonheffing', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
            }]
            | readonly ['Salaris', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
            }]
        >
    }>
    
    export namespace Verkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties<M_Source> = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                        }
                        export type Rekening_courant<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                    export type Rekening_courant<M_Source> = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
            }
            export type Afhandeling<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            export type Betalingstermijn<M_Source> = number
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>
            }
            export type BTW$mi_periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document<M_Source> = string
                    }
                    export type Toegevoegd<M_Source> = {
                        readonly 'Document': string
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
            }
            export type Brondocument<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            
            export namespace Debiteur {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D<M_Source>
            }
            export type Debiteur<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
            
            export namespace Contracttype {
                
                export namespace SG {
                    
                    export namespace Project {
                        
                        export namespace Project {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Projecten.D<M_Source>
                        }
                        export type Project<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                        
                        export namespace Offerte {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>
                        }
                        export type Offerte<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                    }
                    export type Project<M_Source> = {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                    }
                    
                    export namespace Licentieovereenkomst {
                        
                        export namespace Overeenkomst {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>
                        }
                        export type Overeenkomst<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                    }
                    export type Licentieovereenkomst<M_Source> = {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Project', {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                    }]
            }
            export type Contracttype<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                }]
            >
            export type Datum<M_Source> = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace BTW$mi_regime {
                        
                        export namespace SG {
                            export type Intracommunautair<M_Source> = null
                            
                            export namespace Standaard {
                                
                                export namespace BTW$mi_categorie {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Beheer.BTW$mi_categorieen.D<M_Source>
                                }
                                export type BTW$mi_categorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                            }
                            export type Standaard<M_Source> = {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                            }
                            export type Binnenland$cl__heffing_verlegd<M_Source> = null
                        }
                        export type SG<M_Source> = 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                    }
                    export type BTW$mi_regime<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    export type Bedrag_exclusief_BTW<M_Source> = number
                    
                    export namespace Contracttype {
                        
                        export namespace SG {
                            
                            export namespace Project {
                                
                                export namespace Opbrengst {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>
                                }
                                export type Opbrengst<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                            }
                            export type Project<M_Source> = {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                            }
                            export type Los<M_Source> = null
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Periode {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>
                                }
                                export type Periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                            }
                            export type Licentieovereenkomst<M_Source> = {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Project', {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                            }]
                    }
                    export type Contracttype<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                        }]
                    >
                    export type Omschrijving<M_Source> = string
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Opbrengsten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
                                }
                                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                            export type Opbrengsten<M_Source> = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                            
                            export namespace Balans {
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>
                                }
                                export type Balans_item<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                            export type Balans<M_Source> = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }]
                    }
                    export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                    >
                }
                export type D<M_Source> = {
                    readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                    >
                }
            }
            export type Regels<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                >
            }>
        }
        export type D<M_Source> = {
            readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
            readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                }]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<M_Source, {
                readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                >
            }>
        }
    }
    export type Verkopen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
        >
        readonly 'Betalingstermijn': number
        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
        readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
        >
        readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
        readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
            | readonly ['Project', {
                readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
            }]
            | readonly ['Licentieovereenkomst', {
                readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
            }]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<M_Source, {
            readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                }]
                | readonly ['Binnenland: heffing verlegd', null]
            >
            readonly 'Bedrag exclusief BTW': number
            readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                }]
                | readonly ['Los', null]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Opbrengsten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                }]
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                }]
            >
        }>
    }>
}

export namespace _T_Mutaties {
    
    export namespace Verrekenpost_mutaties {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag<M_Source> = number
                
                export namespace Afhandeling {
                    
                    export namespace SG {
                        
                        export namespace Resultaat {
                        }
                        export type Resultaat<M_Source> = _T_Balans_Resultaat_Mutatie<M_Source>
                        
                        export namespace Balans {
                            
                            export namespace SG {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Informele_rekening {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                                    }
                                    export type Informele_rekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                                }
                                export type Informele_rekening<M_Source> = {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                                }
                            }
                            export type SG<M_Source> = 
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                                }]
                        }
                        export type Balans<M_Source> = _i_core._T_State_Group<M_Source, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }]
                        >
                    }
                    export type SG<M_Source> = 
                        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                        | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }]
                        >]
                }
                export type Afhandeling<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                    | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                    >]
                >
            }
            export type D<M_Source> = {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                    | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                    >]
                >
            }
        }
        export type D<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': number
            readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
                >]
            >
        }>
    }
    export type Verrekenpost_mutaties<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, {
        readonly 'Bedrag': number
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
            | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
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
                    export type Resultaat<M_Source> = _T_Balans_Resultaat_Mutatie<M_Source>
                    
                    export namespace Balans {
                        
                        export namespace SG {
                            
                            export namespace Informele_rekening {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                                }
                                export type Informele_rekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }
                            export type Informele_rekening<M_Source> = {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }
                            
                            export namespace Verrekenpost {
                                
                                export namespace Verrekenpost {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>
                                }
                                export type Verrekenpost<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                            }
                            export type Verrekenpost<M_Source> = {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                            }]
                    }
                    export type Balans<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                        }]
                    >
                }
                export type SG<M_Source> = 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                    | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                        }]
                    >]
            }
            export type D<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
                    | readonly ['Verrekenpost', {
                        readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                    }]
                >]
            >
        }
        export type D<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
            | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
                | readonly ['Verrekenpost', {
                    readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                }]
            >]
        >>
    }
    export type Bankrekening_Mutatie_Verwerkingen<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
        | readonly ['Balans', _i_core._T_State_Group<M_Source, 
            | readonly ['Informele rekening', {
                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
            | readonly ['Verrekenpost', {
                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
            }]
        >]
    >>>
    
    export namespace Memoriaal_boekingen {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag<M_Source> = number
                export type Datum<M_Source> = number
                export type Omschrijving<M_Source> = string
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
                }
                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
            }
            export type D<M_Source> = {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
            }
        }
        export type D<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': number
            readonly 'Datum': number
            readonly 'Omschrijving': string
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        }>
    }
    export type Memoriaal_boekingen<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, {
        readonly 'Bedrag': number
        readonly 'Datum': number
        readonly 'Omschrijving': string
        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
    }>>
}

export namespace _T_Jaren {
    
    export namespace D {
        
        export namespace Afgesloten {
            
            export namespace SG {
                export type Ja<M_Source> = null
                export type Nee<M_Source> = null
            }
            export type SG<M_Source> = 
                | readonly ['Ja', null]
                | readonly ['Nee', null]
        }
        export type Afgesloten<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        export type Startdatum_boekjaar<M_Source> = number
        
        export namespace Grootboekrekeningen {
        }
        export type Grootboekrekeningen<M_Source> = _T_Grootboekrekeningen<M_Source>
        
        export namespace Eerste_boekjaar {
        }
        export type Eerste_boekjaar<M_Source> = _T_Eerste_boekjaar<M_Source>
        
        export namespace Jaarbeheer {
        }
        export type Jaarbeheer<M_Source> = _T_Jaarbeheer<M_Source>
        
        export namespace Handelstransacties {
        }
        export type Handelstransacties<M_Source> = _T_Handelstransacties<M_Source>
        
        export namespace Mutaties {
        }
        export type Mutaties<M_Source> = _T_Mutaties<M_Source>
    }
    export type D<M_Source> = {
        readonly 'Afgesloten': _i_core._T_State_Group<M_Source, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Startdatum boekjaar': number
        readonly 'Grootboekrekeningen': _T_Grootboekrekeningen<M_Source>
        readonly 'Eerste boekjaar': _T_Eerste_boekjaar<M_Source>
        readonly 'Jaarbeheer': _T_Jaarbeheer<M_Source>
        readonly 'Handelstransacties': _T_Handelstransacties<M_Source>
        readonly 'Mutaties': _T_Mutaties<M_Source>
    }
}

export namespace _T_Balans_Resultaat_Mutatie {
    
    export namespace Jaar {
        
        export namespace O {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Jaren.D<M_Source>
        }
        export type O<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
    }
    export type Jaar<M_Source> = _pi.Optional_Value<_i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace Inkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Handelstransacties.Inkopen.D<M_Source>
            }
            export type Inkoop<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>
            
            export namespace Verkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Handelstransacties.Verkopen.D<M_Source>
            }
            export type Verkoop<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>
            }
            export type BTW$mi_periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>]
            | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>]
            | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>]
        | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>]
        | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>]
    >
}

export namespace _T_Eerste_boekjaar {
    
    export namespace SG {
        export type Ja<M_Source> = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Jaren.D<M_Source>
            }
            export type Vorig_boekjaar<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
        }
        export type Nee<M_Source> = {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
        }
    }
    export type SG<M_Source> = 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
        }]
}

export namespace _T_Root {
    
    export namespace Fiscaal {
    }
    export type Fiscaal<M_Source> = _T_Fiscaal<M_Source>
    
    export namespace Categorieen {
    }
    export type Categorieen<M_Source> = _T_Grootboek_Categorieen<M_Source>
    
    export namespace Beheer {
    }
    export type Beheer<M_Source> = _T_Beheer<M_Source>
    
    export namespace Jaren {
    }
    export type Jaren<M_Source> = _T_Jaren<M_Source>
}

// *** ALIASES FOR NESTED TYPES

export namespace Fiscaal {
    
    export namespace Balans_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa<M_Source> = null
                    export type Passiva<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            
            export namespace Subcategorieen {
                export type D<M_Source> = null
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, null>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
        }
    }
    export type Balans_Hoofdcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
    }>
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten<M_Source> = null
                    export type Opbrengsten<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            
            export namespace Subcategorieen {
                export type D<M_Source> = null
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, null>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
        }
    }
    export type Resultaat_Hoofdcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, null>
    }>
}

export namespace Grootboek_Categorieen {
    
    export namespace Correctietypes_vennootschapsbelasting {
        
        export namespace D {
            export type Te_corrigeren_promillage<M_Source> = number
        }
        export type D<M_Source> = {
            readonly 'Te corrigeren promillage': number
        }
    }
    export type Correctietypes_vennootschapsbelasting<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Te corrigeren promillage': number
    }>
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Activa<M_Source> = null
                    export type Passiva<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            
            export namespace Subcategorieen {
                
                export namespace D {
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>
                    }
                    export type Hoofdcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>
                    }
                    export type Subcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
                export type D<M_Source> = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
    }
    export type Balans<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Activa', null]
            | readonly ['Passiva', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D<M_Source>>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
        }>
    }>
    
    export namespace Resultaat {
        
        export namespace D {
            
            export namespace Zijde {
                
                export namespace SG {
                    export type Kosten<M_Source> = null
                    export type Opbrengsten<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Kosten', null]
                    | readonly ['Opbrengsten', null]
            }
            export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            
            export namespace Subcategorieen {
                
                export namespace D {
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>
                    }
                    export type Hoofdcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                    
                    export namespace Subcategorie_fiscus {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>
                    }
                    export type Subcategorie_fiscus<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
                export type D<M_Source> = {
                    readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                    readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
                }
            }
            export type Subcategorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
        export type D<M_Source> = {
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', null]
                | readonly ['Opbrengsten', null]
            >
            readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
                readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
                readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
            }>
        }
    }
    export type Resultaat<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Zijde': _i_core._T_State_Group<M_Source, 
            | readonly ['Kosten', null]
            | readonly ['Opbrengsten', null]
        >
        readonly 'Subcategorieen': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D<M_Source>>
            readonly 'Subcategorie fiscus': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D<M_Source>>
        }>
    }>
}

export namespace Beheer {
    
    export namespace BTW$mi_categorieen {
        
        export namespace D {
            
            export namespace BTW$mi_heffing {
                
                export namespace SG {
                    
                    export namespace Ja {
                        export type BTW$mi_promillage<M_Source> = number
                    }
                    export type Ja<M_Source> = {
                        readonly 'BTW-promillage': number
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Ja', {
                        readonly 'BTW-promillage': number
                    }]
            }
            export type BTW$mi_heffing<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
        export type D<M_Source> = {
            readonly 'BTW-heffing': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', {
                    readonly 'BTW-promillage': number
                }]
            >
        }
    }
    export type BTW$mi_categorieen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'BTW-heffing': _i_core._T_State_Group<M_Source, 
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
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Balans.D<M_Source>
                }
                export type Hoofdcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>
                }
                export type Subcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        export type Activa<M_Source> = null
                        export type Passiva<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['Activa', null]
                        | readonly ['Passiva', null]
                }
                export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }
            export type D<M_Source> = {
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
                readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                    | readonly ['Activa', null]
                    | readonly ['Passiva', null]
                >
            }
        }
        export type Balans<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        
        export namespace Resultaat {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Resultaat.D<M_Source>
                }
                export type Hoofdcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
                
                export namespace Subcategorie {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>
                }
                export type Subcategorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
                
                export namespace Zijde {
                    
                    export namespace SG {
                        
                        export namespace Kosten {
                            
                            export namespace Correctie_op_vennootschapsbelasting {
                                
                                export namespace SG {
                                    
                                    export namespace Ja {
                                        
                                        export namespace Correctietype {
                                            
                                            export namespace Dictionary_Entry {
                                            }
                                            export type Dictionary_Entry<M_Source> = _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>
                                        }
                                        export type Correctietype<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                    }
                                    export type Ja<M_Source> = {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                    }
                                    export type Nee<M_Source> = null
                                }
                                export type SG<M_Source> = 
                                    | readonly ['Ja', {
                                        readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                    }]
                                    | readonly ['Nee', null]
                            }
                            export type Correctie_op_vennootschapsbelasting<M_Source> = _i_core._T_State_Group<M_Source, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Kosten<M_Source> = {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                }]
                                | readonly ['Nee', null]
                            >
                        }
                        export type Opbrengsten<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['Kosten', {
                            readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                                | readonly ['Ja', {
                                    readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                                }]
                                | readonly ['Nee', null]
                            >
                        }]
                        | readonly ['Opbrengsten', null]
                }
                export type Zijde<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
            export type D<M_Source> = {
                readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
                readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
                readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                    | readonly ['Kosten', {
                        readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                            | readonly ['Ja', {
                                readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                            }]
                            | readonly ['Nee', null]
                        >
                    }]
                    | readonly ['Opbrengsten', null]
                >
            }
        }
        export type Resultaat<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
                        }]
                        | readonly ['Nee', null]
                    >
                }]
                | readonly ['Opbrengsten', null]
            >
        }>
    }
    export type Grootboekrekeningen<M_Source> = {
        readonly 'Balans': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Balans.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Activa', null]
                | readonly ['Passiva', null]
            >
        }>
        readonly 'Resultaat': _i_core._T_Dictionary<M_Source, {
            readonly 'Hoofdcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D<M_Source>>
            readonly 'Subcategorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D<M_Source>>
            readonly 'Zijde': _i_core._T_State_Group<M_Source, 
                | readonly ['Kosten', {
                    readonly 'Correctie op vennootschapsbelasting': _i_core._T_State_Group<M_Source, 
                        | readonly ['Ja', {
                            readonly 'Correctietype': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D<M_Source>>
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
            export type D<M_Source> = null
        }
        export type Bank<M_Source> = _i_core._T_Dictionary<M_Source, null>
        
        export namespace Informeel {
            export type D<M_Source> = null
        }
        export type Informeel<M_Source> = _i_core._T_Dictionary<M_Source, null>
    }
    export type Rekeningen<M_Source> = {
        readonly 'Bank': _i_core._T_Dictionary<M_Source, null>
        readonly 'Informeel': _i_core._T_Dictionary<M_Source, null>
    }
    
    export namespace Gebruikers {
        
        export namespace D {
            export type Volledige_naam<M_Source> = string
            export type Wachtwoord<M_Source> = string
        }
        export type D<M_Source> = {
            readonly 'Volledige naam': string
            readonly 'Wachtwoord': string
        }
    }
    export type Gebruikers<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Volledige naam': string
        readonly 'Wachtwoord': string
    }>
    
    export namespace Klanten {
        
        export namespace D {
            
            export namespace Licentieovereenkomsten {
                
                export namespace D {
                    
                    export namespace Periodes {
                        
                        export namespace D {
                            export type Bedrag<M_Source> = number
                        }
                        export type D<M_Source> = {
                            readonly 'Bedrag': number
                        }
                    }
                    export type Periodes<M_Source> = _i_core._T_Dictionary<M_Source, {
                        readonly 'Bedrag': number
                    }>
                }
                export type D<M_Source> = {
                    readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                        readonly 'Bedrag': number
                    }>
                }
            }
            export type Licentieovereenkomsten<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
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
                                                export type Bedrag<M_Source> = number
                                                export type Betaaldatum<M_Source> = number
                                            }
                                            export type Project<M_Source> = {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }
                                        }
                                        export type SG<M_Source> = 
                                            | readonly ['Project', {
                                                readonly 'Bedrag': number
                                                readonly 'Betaaldatum': number
                                            }]
                                    }
                                    export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                                export type D<M_Source> = {
                                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                                        | readonly ['Project', {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }]
                                    >
                                }
                            }
                            export type Opbrengsten<M_Source> = _i_core._T_Dictionary<M_Source, {
                                readonly 'Type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                        export type D<M_Source> = {
                            readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                                readonly 'Type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['Project', {
                                        readonly 'Bedrag': number
                                        readonly 'Betaaldatum': number
                                    }]
                                >
                            }>
                        }
                    }
                    export type Offertes<M_Source> = _i_core._T_Dictionary<M_Source, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                            readonly 'Type': _i_core._T_State_Group<M_Source, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
                export type D<M_Source> = {
                    readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                        readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                            readonly 'Type': _i_core._T_State_Group<M_Source, 
                                | readonly ['Project', {
                                    readonly 'Bedrag': number
                                    readonly 'Betaaldatum': number
                                }]
                            >
                        }>
                    }>
                }
            }
            export type Projecten<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                        readonly 'Type': _i_core._T_State_Group<M_Source, 
                            | readonly ['Project', {
                                readonly 'Bedrag': number
                                readonly 'Betaaldatum': number
                            }]
                        >
                    }>
                }>
            }>
        }
        export type D<M_Source> = {
            readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<M_Source, {
                readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                    readonly 'Bedrag': number
                }>
            }>
            readonly 'Projecten': _i_core._T_Dictionary<M_Source, {
                readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                    readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                        readonly 'Type': _i_core._T_State_Group<M_Source, 
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
    export type Klanten<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Licentieovereenkomsten': _i_core._T_Dictionary<M_Source, {
            readonly 'Periodes': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
            }>
        }>
        readonly 'Projecten': _i_core._T_Dictionary<M_Source, {
            readonly 'Offertes': _i_core._T_Dictionary<M_Source, {
                readonly 'Opbrengsten': _i_core._T_Dictionary<M_Source, {
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
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
        export type D<M_Source> = null
    }
    export type Leveranciers<M_Source> = _i_core._T_Dictionary<M_Source, null>
    
    export namespace Medewerkers {
        export type D<M_Source> = null
    }
    export type Medewerkers<M_Source> = _i_core._T_Dictionary<M_Source, null>
}

export namespace Grootboekrekeningen {
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Type {
                
                export namespace SG {
                    export type Bankrekening<M_Source> = null
                    export type Overig<M_Source> = null
                    export type Informele_rekening<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Bankrekening', null]
                    | readonly ['Overig', null]
                    | readonly ['Informele rekening', null]
            }
            export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }
        export type D<M_Source> = {
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Bankrekening', null]
                | readonly ['Overig', null]
                | readonly ['Informele rekening', null]
            >
        }
    }
    export type Balans<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Type': _i_core._T_State_Group<M_Source, 
            | readonly ['Bankrekening', null]
            | readonly ['Overig', null]
            | readonly ['Informele rekening', null]
        >
    }>
    
    export namespace Resultaat {
        export type D<M_Source> = null
    }
    export type Resultaat<M_Source> = _i_core._T_Dictionary<M_Source, null>
}

export namespace Jaarbeheer {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
        }
        export type Grootboekrekening_voor_BTW_afrondingen<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        
        export namespace Salarisrondes {
            export type D<M_Source> = null
        }
        export type Salarisrondes<M_Source> = _i_core._T_Dictionary<M_Source, null>
        
        export namespace BTW_periodes {
            
            export namespace D {
                
                export namespace _11$pe__BTW$mi_categorieen {
                    export type D<M_Source> = null
                }
                export type _11$pe__BTW$mi_categorieen<M_Source> = _i_core._T_Dictionary<M_Source, null>
                
                export namespace Documenten {
                    
                    export namespace D {
                        export type Bestand<M_Source> = string
                    }
                    export type D<M_Source> = {
                        readonly 'Bestand': string
                    }
                }
                export type Documenten<M_Source> = _i_core._T_Dictionary<M_Source, {
                    readonly 'Bestand': string
                }>
                export type Omschrijving<M_Source> = string
                
                export namespace Status {
                    
                    export namespace SG {
                        
                        export namespace Aangegeven {
                            export type Afronding<M_Source> = number
                            export type Bedrag<M_Source> = number
                            export type Datum<M_Source> = number
                        }
                        export type Aangegeven<M_Source> = {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }
                        export type Openstaand<M_Source> = null
                    }
                    export type SG<M_Source> = 
                        | readonly ['Aangegeven', {
                            readonly 'Afronding': number
                            readonly 'Bedrag': number
                            readonly 'Datum': number
                        }]
                        | readonly ['Openstaand', null]
                }
                export type Status<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }
            export type D<M_Source> = {
                readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
                readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                    readonly 'Bestand': string
                }>
                readonly 'Omschrijving': string
                readonly 'Status': _i_core._T_State_Group<M_Source, 
                    | readonly ['Aangegeven', {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }]
                    | readonly ['Openstaand', null]
                >
            }
        }
        export type BTW_periodes<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
            readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                readonly 'Bestand': string
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<M_Source, 
                | readonly ['Aangegeven', {
                    readonly 'Afronding': number
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                }]
                | readonly ['Openstaand', null]
            >
        }>
    }
    export type Resultaat<M_Source> = {
        readonly 'Grootboekrekening voor BTW afrondingen': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        readonly 'Salarisrondes': _i_core._T_Dictionary<M_Source, null>
        readonly 'BTW periodes': _i_core._T_Dictionary<M_Source, {
            readonly '1. BTW-categorieen': _i_core._T_Dictionary<M_Source, null>
            readonly 'Documenten': _i_core._T_Dictionary<M_Source, {
                readonly 'Bestand': string
            }>
            readonly 'Omschrijving': string
            readonly 'Status': _i_core._T_State_Group<M_Source, 
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
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_resultaat_dit_jaar<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_winstreserve<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_Inkoop_saldo<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
        }
        export type Grootboekrekening_voor_Verkoop_saldo<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        export type Beginsaldo_nog_aan_te_geven_BTW<M_Source> = number
        export type Beginsaldo_winstreserve<M_Source> = number
        
        export namespace Informele_rekeningen {
            
            export namespace D {
                export type Beginsaldo<M_Source> = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
                }
                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja<M_Source> = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening<M_Source> = _T_Verwijzing_naar_Informele_rekening<M_Source>
                        }
                        export type Nee<M_Source> = {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                        }
                    }
                    export type SG<M_Source> = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                        }]
                }
                export type Nieuw<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                    }]
                >
            }
            export type D<M_Source> = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                    }]
                >
            }
        }
        export type Informele_rekeningen<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                }]
            >
        }>
        
        export namespace Bankrekeningen {
            
            export namespace D {
                export type Beginsaldo<M_Source> = number
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
                }
                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                
                export namespace Nieuw {
                    
                    export namespace SG {
                        export type Ja<M_Source> = null
                        
                        export namespace Nee {
                            
                            export namespace Rekening {
                            }
                            export type Rekening<M_Source> = _T_Verwijzing_naar_Bankrekening<M_Source>
                        }
                        export type Nee<M_Source> = {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                        }
                    }
                    export type SG<M_Source> = 
                        | readonly ['Ja', null]
                        | readonly ['Nee', {
                            readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                        }]
                }
                export type Nieuw<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                    }]
                >
                
                export namespace Mutaties {
                    
                    export namespace D {
                        export type Bedrag<M_Source> = number
                        export type Datum<M_Source> = number
                        export type Omschrijving<M_Source> = string
                    }
                    export type D<M_Source> = {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                    }
                }
                export type Mutaties<M_Source> = _i_core._T_Dictionary<M_Source, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
            export type D<M_Source> = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
                readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                    | readonly ['Ja', null]
                    | readonly ['Nee', {
                        readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                    }]
                >
                readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                    readonly 'Bedrag': number
                    readonly 'Datum': number
                    readonly 'Omschrijving': string
                }>
            }
        }
        export type Bankrekeningen<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        
        export namespace Overige_balans_items {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Overige_balans_item<M_Source>
        }
        export type Overige_balans_items<M_Source> = _i_core._T_Dictionary<M_Source, _T_Overige_balans_item<M_Source>>
        
        export namespace Verrekenposten {
            export type D<M_Source> = null
        }
        export type Verrekenposten<M_Source> = _i_core._T_Dictionary<M_Source, null>
    }
    export type Balans<M_Source> = {
        readonly 'Grootboekrekening voor nog aan te geven BTW': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor resultaat dit jaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor winstreserve': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor Inkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Grootboekrekening voor Verkoop saldo': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo winstreserve': number
        readonly 'Informele rekeningen': _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Informele_rekening<M_Source>
                }]
            >
        }>
        readonly 'Bankrekeningen': _i_core._T_Dictionary<M_Source, {
            readonly 'Beginsaldo': number
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
            readonly 'Nieuw': _i_core._T_State_Group<M_Source, 
                | readonly ['Ja', null]
                | readonly ['Nee', {
                    readonly 'Rekening': _T_Verwijzing_naar_Bankrekening<M_Source>
                }]
            >
            readonly 'Mutaties': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
            }>
        }>
        readonly 'Overige balans items': _i_core._T_Dictionary<M_Source, _T_Overige_balans_item<M_Source>>
        readonly 'Verrekenposten': _i_core._T_Dictionary<M_Source, null>
    }
}

export namespace Overige_balans_item {
    export type Beginsaldo<M_Source> = number
    
    export namespace Grootboekrekening {
        
        export namespace Dictionary_Entry {
        }
        export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Balans.D<M_Source>
    }
    export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Balans.D<M_Source>>
    
    export namespace Nieuw {
        
        export namespace SG {
            export type Ja<M_Source> = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>
                }
                export type Balans_item<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
            }
            export type Nee<M_Source> = {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
            }
        }
        export type SG<M_Source> = 
            | readonly ['Ja', null]
            | readonly ['Nee', {
                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
            }]
    }
    export type Nieuw<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
        }]
    >
}

export namespace Verwijzing_naar_Informele_rekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
}

export namespace Verwijzing_naar_Bankrekening {
    
    export namespace Dictionary_Entry {
    }
    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Bankrekeningen.D<M_Source>
}

export namespace Handelstransacties {
    
    export namespace Inkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties<M_Source> = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                        }
                        export type Rekening_courant<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                    export type Rekening_courant<M_Source> = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
            }
            export type Afhandeling<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            
            export namespace BTW$mi_regime {
                
                export namespace SG {
                    export type Binnenland$cl__heffing_verlegd<M_Source> = null
                    export type Geen_BTW_van_toepassing<M_Source> = null
                    export type Import_van_buiten_de_EU<M_Source> = null
                    export type Intracommunautair<M_Source> = null
                    
                    export namespace Standaard {
                        
                        export namespace BTW$mi_periode {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>
                        }
                        export type BTW$mi_periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                    }
                    export type Standaard<M_Source> = {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Binnenland: heffing verlegd', null]
                    | readonly ['Geen BTW van toepassing', null]
                    | readonly ['Import van buiten de EU', null]
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                    }]
            }
            export type BTW$mi_regime<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                }]
            >
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document<M_Source> = string
                    }
                    export type Toegevoegd<M_Source> = {
                        readonly 'Document': string
                    }
                    export type Niet_van_toepassing<M_Source> = null
                    export type Ontbreekt<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
                    | readonly ['Niet van toepassing', null]
                    | readonly ['Ontbreekt', null]
            }
            export type Brondocument<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
            >
            export type Datum<M_Source> = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace Bedrag {
                        
                        export namespace SG {
                            
                            export namespace Bekend {
                                export type BTW$mi_bedrag<M_Source> = number
                                export type Bedrag_inclusief_geheven_BTW<M_Source> = number
                            }
                            export type Bekend<M_Source> = {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Bekend', {
                                readonly 'BTW-bedrag': number
                                readonly 'Bedrag inclusief geheven BTW': number
                            }]
                    }
                    export type Bedrag<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    export type Omschrijving<M_Source> = string
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Balans {
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>
                                }
                                export type Balans_item<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                            export type Balans<M_Source> = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                            
                            export namespace Kosten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
                                }
                                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                            export type Kosten<M_Source> = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }]
                            | readonly ['Kosten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }]
                    }
                    export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                    >
                }
                export type D<M_Source> = {
                    readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                        | readonly ['Bekend', {
                            readonly 'BTW-bedrag': number
                            readonly 'Bedrag inclusief geheven BTW': number
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                        | readonly ['Kosten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                    >
                }
            }
            export type Regels<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                >
            }>
            
            export namespace Type {
                
                export namespace SG {
                    export type Bonnetje<M_Source> = null
                    
                    export namespace Inkoop_$po_met_crediteur$pc_ {
                        
                        export namespace Crediteur {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Leveranciers.D<M_Source>
                        }
                        export type Crediteur<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                        export type Factuurnummer<M_Source> = string
                    }
                    export type Inkoop_$po_met_crediteur$pc_<M_Source> = {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                        readonly 'Factuurnummer': string
                    }
                    
                    export namespace Loonheffing {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>
                        }
                        export type Ronde<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    }
                    export type Loonheffing<M_Source> = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    }
                    
                    export namespace Salaris {
                        
                        export namespace Ronde {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>
                        }
                        export type Ronde<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                        
                        export namespace Medewerker {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Medewerkers.D<M_Source>
                        }
                        export type Medewerker<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                    }
                    export type Salaris<M_Source> = {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Bonnetje', null]
                    | readonly ['Inkoop (met crediteur)', {
                        readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                        readonly 'Factuurnummer': string
                    }]
                    | readonly ['Loonheffing', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    }]
                    | readonly ['Salaris', {
                        readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                        readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                    }]
            }
            export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                }]
            >
        }
        export type D<M_Source> = {
            readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                | readonly ['Binnenland: heffing verlegd', null]
                | readonly ['Geen BTW van toepassing', null]
                | readonly ['Import van buiten de EU', null]
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
                }]
            >
            readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
                | readonly ['Niet van toepassing', null]
                | readonly ['Ontbreekt', null]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<M_Source, {
                readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                    | readonly ['Bekend', {
                        readonly 'BTW-bedrag': number
                        readonly 'Bedrag inclusief geheven BTW': number
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                    | readonly ['Kosten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                >
            }>
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Bonnetje', null]
                | readonly ['Inkoop (met crediteur)', {
                    readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                    readonly 'Factuurnummer': string
                }]
                | readonly ['Loonheffing', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                }]
                | readonly ['Salaris', {
                    readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                    readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
                }]
            >
        }
    }
    export type Inkopen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
        >
        readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
            | readonly ['Binnenland: heffing verlegd', null]
            | readonly ['Geen BTW van toepassing', null]
            | readonly ['Import van buiten de EU', null]
            | readonly ['Intracommunautair', null]
            | readonly ['Standaard', {
                readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            }]
        >
        readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
            | readonly ['Niet van toepassing', null]
            | readonly ['Ontbreekt', null]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': _i_core._T_State_Group<M_Source, 
                | readonly ['Bekend', {
                    readonly 'BTW-bedrag': number
                    readonly 'Bedrag inclusief geheven BTW': number
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                }]
                | readonly ['Kosten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                }]
            >
        }>
        readonly 'Type': _i_core._T_State_Group<M_Source, 
            | readonly ['Bonnetje', null]
            | readonly ['Inkoop (met crediteur)', {
                readonly 'Crediteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Leveranciers.D<M_Source>>
                readonly 'Factuurnummer': string
            }]
            | readonly ['Loonheffing', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
            }]
            | readonly ['Salaris', {
                readonly 'Ronde': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.Salarisrondes.D<M_Source>>
                readonly 'Medewerker': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Medewerkers.D<M_Source>>
            }]
        >
    }>
    
    export namespace Verkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export namespace SG {
                    export type Mutaties<M_Source> = null
                    
                    export namespace Rekening_courant {
                        
                        export namespace Rekening_courant {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                        }
                        export type Rekening_courant<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                    export type Rekening_courant<M_Source> = {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Mutaties', null]
                    | readonly ['Rekening courant', {
                        readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
            }
            export type Afhandeling<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            export type Betalingstermijn<M_Source> = number
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>
            }
            export type BTW$mi_periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            
            export namespace Brondocument {
                
                export namespace SG {
                    
                    export namespace Toegevoegd {
                        export type Document<M_Source> = string
                    }
                    export type Toegevoegd<M_Source> = {
                        readonly 'Document': string
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Toegevoegd', {
                        readonly 'Document': string
                    }]
            }
            export type Brondocument<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            
            export namespace Debiteur {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D<M_Source>
            }
            export type Debiteur<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
            
            export namespace Contracttype {
                
                export namespace SG {
                    
                    export namespace Project {
                        
                        export namespace Project {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Projecten.D<M_Source>
                        }
                        export type Project<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                        
                        export namespace Offerte {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>
                        }
                        export type Offerte<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                    }
                    export type Project<M_Source> = {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                    }
                    
                    export namespace Licentieovereenkomst {
                        
                        export namespace Overeenkomst {
                            
                            export namespace Dictionary_Entry {
                            }
                            export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>
                        }
                        export type Overeenkomst<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                    }
                    export type Licentieovereenkomst<M_Source> = {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                    }
                }
                export type SG<M_Source> = 
                    | readonly ['Project', {
                        readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                        readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                    }]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                    }]
            }
            export type Contracttype<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                }]
            >
            export type Datum<M_Source> = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace BTW$mi_regime {
                        
                        export namespace SG {
                            export type Intracommunautair<M_Source> = null
                            
                            export namespace Standaard {
                                
                                export namespace BTW$mi_categorie {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Beheer.BTW$mi_categorieen.D<M_Source>
                                }
                                export type BTW$mi_categorie<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                            }
                            export type Standaard<M_Source> = {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                            }
                            export type Binnenland$cl__heffing_verlegd<M_Source> = null
                        }
                        export type SG<M_Source> = 
                            | readonly ['Intracommunautair', null]
                            | readonly ['Standaard', {
                                readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                            }]
                            | readonly ['Binnenland: heffing verlegd', null]
                    }
                    export type BTW$mi_regime<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    export type Bedrag_exclusief_BTW<M_Source> = number
                    
                    export namespace Contracttype {
                        
                        export namespace SG {
                            
                            export namespace Project {
                                
                                export namespace Opbrengst {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>
                                }
                                export type Opbrengst<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                            }
                            export type Project<M_Source> = {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                            }
                            export type Los<M_Source> = null
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Periode {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>
                                }
                                export type Periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                            }
                            export type Licentieovereenkomst<M_Source> = {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Project', {
                                readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                            }]
                            | readonly ['Los', null]
                            | readonly ['Licentieovereenkomst', {
                                readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                            }]
                    }
                    export type Contracttype<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                        }]
                    >
                    export type Omschrijving<M_Source> = string
                    
                    export namespace Type {
                        
                        export namespace SG {
                            
                            export namespace Opbrengsten {
                                
                                export namespace Grootboekrekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
                                }
                                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                            export type Opbrengsten<M_Source> = {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }
                            
                            export namespace Balans {
                                
                                export namespace Balans_item {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>
                                }
                                export type Balans_item<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                            export type Balans<M_Source> = {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Opbrengsten', {
                                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                            }]
                            | readonly ['Balans', {
                                readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                            }]
                    }
                    export type Type<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                    >
                }
                export type D<M_Source> = {
                    readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                        | readonly ['Intracommunautair', null]
                        | readonly ['Standaard', {
                            readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                        }]
                        | readonly ['Binnenland: heffing verlegd', null]
                    >
                    readonly 'Bedrag exclusief BTW': number
                    readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                        | readonly ['Project', {
                            readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                        }]
                        | readonly ['Los', null]
                        | readonly ['Licentieovereenkomst', {
                            readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                        }]
                    >
                    readonly 'Omschrijving': string
                    readonly 'Type': _i_core._T_State_Group<M_Source, 
                        | readonly ['Opbrengsten', {
                            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                        }]
                        | readonly ['Balans', {
                            readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                        }]
                    >
                }
            }
            export type Regels<M_Source> = _i_core._T_Dictionary<M_Source, {
                readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                >
            }>
        }
        export type D<M_Source> = {
            readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                | readonly ['Mutaties', null]
                | readonly ['Rekening courant', {
                    readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
            >
            readonly 'Betalingstermijn': number
            readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
            readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
                | readonly ['Toegevoegd', {
                    readonly 'Document': string
                }]
            >
            readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
            readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                    readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
                }]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
                }]
            >
            readonly 'Datum': number
            readonly 'Regels': _i_core._T_Dictionary<M_Source, {
                readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                    | readonly ['Intracommunautair', null]
                    | readonly ['Standaard', {
                        readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                    }]
                    | readonly ['Binnenland: heffing verlegd', null]
                >
                readonly 'Bedrag exclusief BTW': number
                readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                    | readonly ['Project', {
                        readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                    }]
                    | readonly ['Los', null]
                    | readonly ['Licentieovereenkomst', {
                        readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                    }]
                >
                readonly 'Omschrijving': string
                readonly 'Type': _i_core._T_State_Group<M_Source, 
                    | readonly ['Opbrengsten', {
                        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                    }]
                    | readonly ['Balans', {
                        readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                    }]
                >
            }>
        }
    }
    export type Verkopen<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Mutaties', null]
            | readonly ['Rekening courant', {
                readonly 'Rekening courant': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
        >
        readonly 'Betalingstermijn': number
        readonly 'BTW-periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
        readonly 'Brondocument': _i_core._T_State_Group<M_Source, 
            | readonly ['Toegevoegd', {
                readonly 'Document': string
            }]
        >
        readonly 'Debiteur': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D<M_Source>>
        readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
            | readonly ['Project', {
                readonly 'Project': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D<M_Source>>
                readonly 'Offerte': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D<M_Source>>
            }]
            | readonly ['Licentieovereenkomst', {
                readonly 'Overeenkomst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D<M_Source>>
            }]
        >
        readonly 'Datum': number
        readonly 'Regels': _i_core._T_Dictionary<M_Source, {
            readonly 'BTW-regime': _i_core._T_State_Group<M_Source, 
                | readonly ['Intracommunautair', null]
                | readonly ['Standaard', {
                    readonly 'BTW-categorie': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.BTW$mi_categorieen.D<M_Source>>
                }]
                | readonly ['Binnenland: heffing verlegd', null]
            >
            readonly 'Bedrag exclusief BTW': number
            readonly 'Contracttype': _i_core._T_State_Group<M_Source, 
                | readonly ['Project', {
                    readonly 'Opbrengst': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D<M_Source>>
                }]
                | readonly ['Los', null]
                | readonly ['Licentieovereenkomst', {
                    readonly 'Periode': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D<M_Source>>
                }]
            >
            readonly 'Omschrijving': string
            readonly 'Type': _i_core._T_State_Group<M_Source, 
                | readonly ['Opbrengsten', {
                    readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
                }]
                | readonly ['Balans', {
                    readonly 'Balans item': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Overige_balans_items.D<M_Source>>
                }]
            >
        }>
    }>
}

export namespace Mutaties {
    
    export namespace Verrekenpost_mutaties {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag<M_Source> = number
                
                export namespace Afhandeling {
                    
                    export namespace SG {
                        
                        export namespace Resultaat {
                        }
                        export type Resultaat<M_Source> = _T_Balans_Resultaat_Mutatie<M_Source>
                        
                        export namespace Balans {
                            
                            export namespace SG {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Informele_rekening {
                                        
                                        export namespace Dictionary_Entry {
                                        }
                                        export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                                    }
                                    export type Informele_rekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                                }
                                export type Informele_rekening<M_Source> = {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                                }
                            }
                            export type SG<M_Source> = 
                                | readonly ['Informele rekening', {
                                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                                }]
                        }
                        export type Balans<M_Source> = _i_core._T_State_Group<M_Source, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }]
                        >
                    }
                    export type SG<M_Source> = 
                        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                        | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }]
                        >]
                }
                export type Afhandeling<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                    | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                    >]
                >
            }
            export type D<M_Source> = {
                readonly 'Bedrag': number
                readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                    | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                    >]
                >
            }
        }
        export type D<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': number
            readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
                >]
            >
        }>
    }
    export type Verrekenpost_mutaties<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, {
        readonly 'Bedrag': number
        readonly 'Afhandeling': _i_core._T_State_Group<M_Source, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
            | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
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
                    export type Resultaat<M_Source> = _T_Balans_Resultaat_Mutatie<M_Source>
                    
                    export namespace Balans {
                        
                        export namespace SG {
                            
                            export namespace Informele_rekening {
                                
                                export namespace Informele_rekening {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>
                                }
                                export type Informele_rekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }
                            export type Informele_rekening<M_Source> = {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }
                            
                            export namespace Verrekenpost {
                                
                                export namespace Verrekenpost {
                                    
                                    export namespace Dictionary_Entry {
                                    }
                                    export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>
                                }
                                export type Verrekenpost<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                            }
                            export type Verrekenpost<M_Source> = {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['Informele rekening', {
                                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                            }]
                            | readonly ['Verrekenpost', {
                                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                            }]
                    }
                    export type Balans<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                        }]
                    >
                }
                export type SG<M_Source> = 
                    | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                    | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                        | readonly ['Informele rekening', {
                            readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                        }]
                        | readonly ['Verrekenpost', {
                            readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                        }]
                    >]
            }
            export type D<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
                | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                    | readonly ['Informele rekening', {
                        readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                    }]
                    | readonly ['Verrekenpost', {
                        readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                    }]
                >]
            >
        }
        export type D<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
            | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
            | readonly ['Balans', _i_core._T_State_Group<M_Source, 
                | readonly ['Informele rekening', {
                    readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
                }]
                | readonly ['Verrekenpost', {
                    readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
                }]
            >]
        >>
    }
    export type Bankrekening_Mutatie_Verwerkingen<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
        | readonly ['Resultaat', _T_Balans_Resultaat_Mutatie<M_Source>]
        | readonly ['Balans', _i_core._T_State_Group<M_Source, 
            | readonly ['Informele rekening', {
                readonly 'Informele rekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Informele_rekeningen.D<M_Source>>
            }]
            | readonly ['Verrekenpost', {
                readonly 'Verrekenpost': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Balans.Verrekenposten.D<M_Source>>
            }]
        >]
    >>>
    
    export namespace Memoriaal_boekingen {
        
        export namespace D {
            
            export namespace D {
                export type Bedrag<M_Source> = number
                export type Datum<M_Source> = number
                export type Omschrijving<M_Source> = string
                
                export namespace Grootboekrekening {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Grootboekrekeningen.Resultaat.D<M_Source>
                }
                export type Grootboekrekening<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
            }
            export type D<M_Source> = {
                readonly 'Bedrag': number
                readonly 'Datum': number
                readonly 'Omschrijving': string
                readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
            }
        }
        export type D<M_Source> = _i_core._T_Dictionary<M_Source, {
            readonly 'Bedrag': number
            readonly 'Datum': number
            readonly 'Omschrijving': string
            readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
        }>
    }
    export type Memoriaal_boekingen<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_Dictionary<M_Source, {
        readonly 'Bedrag': number
        readonly 'Datum': number
        readonly 'Omschrijving': string
        readonly 'Grootboekrekening': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Grootboekrekeningen.Resultaat.D<M_Source>>
    }>>
}

export namespace Jaren {
    
    export namespace D {
        
        export namespace Afgesloten {
            
            export namespace SG {
                export type Ja<M_Source> = null
                export type Nee<M_Source> = null
            }
            export type SG<M_Source> = 
                | readonly ['Ja', null]
                | readonly ['Nee', null]
        }
        export type Afgesloten<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        export type Startdatum_boekjaar<M_Source> = number
        
        export namespace Grootboekrekeningen {
        }
        export type Grootboekrekeningen<M_Source> = _T_Grootboekrekeningen<M_Source>
        
        export namespace Eerste_boekjaar {
        }
        export type Eerste_boekjaar<M_Source> = _T_Eerste_boekjaar<M_Source>
        
        export namespace Jaarbeheer {
        }
        export type Jaarbeheer<M_Source> = _T_Jaarbeheer<M_Source>
        
        export namespace Handelstransacties {
        }
        export type Handelstransacties<M_Source> = _T_Handelstransacties<M_Source>
        
        export namespace Mutaties {
        }
        export type Mutaties<M_Source> = _T_Mutaties<M_Source>
    }
    export type D<M_Source> = {
        readonly 'Afgesloten': _i_core._T_State_Group<M_Source, 
            | readonly ['Ja', null]
            | readonly ['Nee', null]
        >
        readonly 'Startdatum boekjaar': number
        readonly 'Grootboekrekeningen': _T_Grootboekrekeningen<M_Source>
        readonly 'Eerste boekjaar': _T_Eerste_boekjaar<M_Source>
        readonly 'Jaarbeheer': _T_Jaarbeheer<M_Source>
        readonly 'Handelstransacties': _T_Handelstransacties<M_Source>
        readonly 'Mutaties': _T_Mutaties<M_Source>
    }
}

export namespace Balans_Resultaat_Mutatie {
    
    export namespace Jaar {
        
        export namespace O {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Jaren.D<M_Source>
        }
        export type O<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
    }
    export type Jaar<M_Source> = _pi.Optional_Value<_i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace Inkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Handelstransacties.Inkopen.D<M_Source>
            }
            export type Inkoop<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>
            
            export namespace Verkoop {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Handelstransacties.Verkopen.D<M_Source>
            }
            export type Verkoop<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>
            
            export namespace BTW$mi_periode {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>
            }
            export type BTW$mi_periode<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>
        }
        export type SG<M_Source> = 
            | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>]
            | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>]
            | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['Inkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Inkopen.D<M_Source>>]
        | readonly ['Verkoop', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Handelstransacties.Verkopen.D<M_Source>>]
        | readonly ['BTW-periode', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaarbeheer.Resultaat.BTW_periodes.D<M_Source>>]
    >
}

export namespace Eerste_boekjaar {
    
    export namespace SG {
        export type Ja<M_Source> = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export namespace Dictionary_Entry {
                }
                export type Dictionary_Entry<M_Source> = _T_Jaren.D<M_Source>
            }
            export type Vorig_boekjaar<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
        }
        export type Nee<M_Source> = {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
        }
    }
    export type SG<M_Source> = 
        | readonly ['Ja', null]
        | readonly ['Nee', {
            readonly 'Vorig boekjaar': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Jaren.D<M_Source>>
        }]
}

export namespace Root {
    
    export namespace Fiscaal {
    }
    export type Fiscaal<M_Source> = _T_Fiscaal<M_Source>
    
    export namespace Categorieen {
    }
    export type Categorieen<M_Source> = _T_Grootboek_Categorieen<M_Source>
    
    export namespace Beheer {
    }
    export type Beheer<M_Source> = _T_Beheer<M_Source>
    
    export namespace Jaren {
    }
    export type Jaren<M_Source> = _T_Jaren<M_Source>
}
