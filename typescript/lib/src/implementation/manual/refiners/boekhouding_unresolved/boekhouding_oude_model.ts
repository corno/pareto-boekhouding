import * as p_ from 'pareto-core/implementation/refiner'
import * as p_temp from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/data'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as sh from 'pareto-core-shorthands/unresolved_data'

import type * as d_in from "../../../../interface/generated/liana/schemas/boekhouding_oude_model/data.js"
import type * as d_out from "../../../../interface/generated/liana/schemas/boekhouding/data/unresolved.js"

export type Rekening_Mutatie = (
    $$_: d_in.Root,
) => d_out.Rekening_Mutatie

export type Beheer = (
    $$_: d_in.Root,
) => d_out.Beheer

export type Eerste_boekjaar = (
    $$_: d_in.Root.Jaren.D.Eerste_boekjaar,
) => d_out.Eerste_boekjaar

export type Fiscaal = (
    $$_: d_in.Root,
) => d_out.Fiscaal

export type Grootboek_Categorieen = (
    $$_: d_in.Root,
) => d_out.Grootboek_Categorieen

export type Grootboekrekeningen = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Grootboekrekeningen

export type Handelstransacties = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Handelstransacties

export type Jaarbeheer = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Jaarbeheer

export type Jaren = (
    $$_: d_in.Root,
) => d_out.Jaren

export type Mutaties = (
    $$_: d_in.Root.Jaren.D,
    $$pt: {
        'jaar': string
    },
) => d_out.Mutaties

export type Overige_balans_item = (
    $$_: d_in.Root.Jaren.D.Overige_balans_items.D,
) => d_out.Overige_balans_item

export type Root = (
    $$_: d_in.Root,
) => d_out.Root

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
) => d_out.Verwijzing_naar_Bankrekening

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
) => d_out.Verwijzing_naar_Informele_rekening


const fix_date = ($: number) => {
    return $ - 2432895 // the date of the universal declaration of human rights (1948-12-10) in julian days, rounded down to the nearest day to avoid the strange noon changeover)
}

export const Beheer: Beheer = ($) => ({
    'BTW-categorieen': sh.dictionary(p_change_context($.Beheer['BTW-categorieen'], ($) => p_.from.dictionary($).map(
        ($): d_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry => ({
            'BTW-heffing': p_change_context($['BTW-heffing'], ($) => p_.from.state($).decide(
                ($): d_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
                    switch ($[0]) {
                        case 'Ja': return p_.option($, ($) => sh.state(['Ja', ({
                            'BTW-promillage': p_change_context($['BTW-promillage'], ($) => $),
                        })]))
                        case 'Nee': return p_.option($, ($) => sh.state(['Nee', null]))
                        default: return p_.exhaustive($[0])
                    }
                })),
        })))),
    'Gebruikers': sh.dictionary(p_change_context($.Beheer['Gebruikers'], ($) => p_.from.dictionary($).map(
        ($) => ({
            'Volledige naam': p_change_context($['Volledige naam'], ($) => $),
            'Wachtwoord': p_change_context($['Wachtwoord'], ($) => $),
        })))),
    'Grootboekrekeningen': p_change_context($, ($): d_out.Beheer.Grootboekrekeningen => ({
        'Balans': sh.dictionary(p_change_context($.Beheer['Balans'].Grootboekrekeningen, ($) => p_.from.dictionary($).map(
            ($) => ({
                'Hoofdcategorie': p_change_context($['Hoofdcategorie'], ($) => sh.reference($)),
                'Subcategorie': p_change_context($['Subcategorie'], ($) => sh.reference($)),
                'Zijde': p_change_context($['Zijde'], ($) => p_.from.state($).decide(
                    ($): d_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                        switch ($[0]) {
                            case 'Activa': return p_.option($, ($) => sh.state(['Activa', null]))
                            case 'Passiva': return p_.option($, ($) => sh.state(['Passiva', null]))
                            default: return p_.exhaustive($[0])
                        }
                    })),
            })))),
        'Resultaat': sh.dictionary(p_change_context($.Beheer['Resultaat'].Grootboekrekeningen, ($) => p_.from.dictionary($).map(
            ($) => ({
                'Hoofdcategorie': p_change_context($['Hoofdcategorie'], ($) => sh.reference($)),
                'Subcategorie': p_change_context($['Subcategorie'], ($) => sh.reference($)),
                'Zijde': p_change_context($['Zijde'], ($) => p_.from.state($).decide(
                    ($): d_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                        switch ($[0]) {
                            case 'Kosten': return p_.option($, ($) => sh.state(['Kosten', ({
                                'Correctie op vennootschapsbelasting': p_change_context($['Correctie op vennootschapsbelasting'], ($) => p_.from.state($).decide(
                                    ($): d_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                                        switch ($[0]) {
                                            case 'Ja': return p_.option($, ($) => sh.state(['Ja', ({
                                                'Correctietype': p_change_context($['Correctietype'], ($) => sh.reference($)),
                                            })]))
                                            case 'Nee': return p_.option($, ($) => sh.state(['Nee', null]))
                                            default: return p_.exhaustive($[0])
                                        }
                                    })),
                            })]))
                            case 'Opbrengsten': return p_.option($, ($) => sh.state(['Opbrengsten', null]))
                            default: return p_.exhaustive($[0])
                        }
                    })),
            })))),
    })),
    'Klanten': sh.dictionary(p_change_context($['Klanten'], ($) => p_.from.dictionary($).map(
        ($) => ({
            'Licentieovereenkomsten': p_change_context($['Licentieovereenkomsten'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => ({
                    'Periodes': p_change_context($['Periodes'], ($) => sh.dictionary(p_.from.dictionary($).map(
                        ($) => ({
                            'Bedrag': p_change_context($['Bedrag'], ($) => $),
                        })))),
                })))),
            'Projecten': p_change_context($['Projecten'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => ({
                    'Offertes': p_change_context($['Offertes'], ($) => sh.dictionary(p_.from.dictionary($).map(
                        ($) => ({
                            'Opbrengsten': p_change_context($['Opbrengsten'], ($) => sh.dictionary(p_.from.dictionary($).map(
                                ($) => ({
                                    'Type': p_change_context($['Type'], ($) => p_.from.state($).decide(
                                        ($): d_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                                            switch ($[0]) {
                                                case 'Project': return p_.option($, ($) => sh.state(['Project', ({
                                                    'Bedrag': p_change_context($['Bedrag'], ($) => $),
                                                    'Betaaldatum': p_change_context($['Betaaldatum'], ($) => fix_date($)),
                                                })]))
                                                default: return p_.exhaustive($[0])
                                            }
                                        })),
                                })))),
                        })))),
                })))),
        })))),
    'Leveranciers': sh.dictionary(p_change_context($['Leveranciers'], ($) => p_.from.dictionary($).map(
        ($) => null))),
    'Medewerkers': sh.dictionary(p_change_context($['Medewerkers'], ($) => p_.from.dictionary($).map(
        ($) => null))),
    'Rekeningen': p_change_context($, ($) => ({
        'Bank': p_change_context($.Bankrekeningen, ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => null))),
        'Informeel': p_change_context($['Informele rekeningen'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => null))),
    })),
})
export const Eerste_boekjaar: Eerste_boekjaar = ($) => p_.from.state($).decide(
    ($): d_out.Eerste_boekjaar => {
        switch ($[0]) {
            case 'Ja': return p_.option($, ($) => sh.state(['Ja', null]))
            case 'Nee': return p_.option($, ($) => sh.state(['Nee', ({
                'Vorig boekjaar': p_change_context($['Vorig boekjaar'], ($) => sh.reference($)),
            })]))
            default: return p_.exhaustive($[0])
        }
    })
export const Fiscaal: Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': p_change_context($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Subcategorieen': p_change_context($['Subcategorieen'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => null))),
            'Zijde': p_change_context($['Zijde'], ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'Activa': return p_.option($, ($) => sh.state(['Activa', null]))
                        case 'Passiva': return p_.option($, ($) => sh.state(['Passiva', null]))
                        default: return p_.exhaustive($[0])
                    }
                })),
        })))),
    'Resultaat Hoofdcategorieen': sh.dictionary(p_change_context($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => p_.from.dictionary($).map(
        ($) => ({
            'Subcategorieen': p_change_context($['Subcategorieen'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => null))),
            'Zijde': p_change_context($['Zijde'], ($) => p_.from.state($).decide(
                ($): d_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                    switch ($[0]) {
                        case 'Kosten': return p_.option($, ($) => sh.state(['Kosten', null]))
                        case 'Opbrengsten': return p_.option($, ($) => sh.state(['Opbrengsten', null]))
                        default: return p_.exhaustive($[0])
                    }
                })),
        })))),
})
export const Grootboek_Categorieen: Grootboek_Categorieen = ($) => ({
    'Balans': p_change_context($.Beheer.Balans.Hoofdcategorieen, ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Subcategorieen': p_change_context($['Subcategorieen'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => ({
                    'Hoofdcategorie fiscus': p_change_context($['Hoofdcategorie fiscus'], ($) => sh.reference($)),
                    'Subcategorie fiscus': p_change_context($['Subcategorie fiscus'], ($) => sh.reference($)),
                })))),
            'Zijde': p_change_context($['Zijde'], ($) => p_.from.state($).decide(
                ($): d_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
                    switch ($[0]) {
                        case 'Activa': return p_.option($, ($) => sh.state(['Activa', null]))
                        case 'Passiva': return p_.option($, ($) => sh.state(['Passiva', null]))
                        default: return p_.exhaustive($[0])
                    }
                })),
        })))),
    'Correctietypes vennootschapsbelasting': p_change_context($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Te corrigeren promillage': p_change_context($['Te corrigeren promillage'], ($) => $),
        })))),
    'Resultaat': p_change_context($.Beheer['Resultaat'].Hoofdcategorieen, ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Subcategorieen': p_change_context($['Subcategorieen'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => ({
                    'Hoofdcategorie fiscus': p_change_context($['Hoofdcategorie fiscus'], ($) => sh.reference($)),
                    'Subcategorie fiscus': p_change_context($['Subcategorie fiscus'], ($) => sh.reference($)),
                })))),
            'Zijde': p_change_context($['Zijde'], ($) => p_.from.state($).decide(
                ($): d_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                    switch ($[0]) {
                        case 'Kosten': return p_.option($, ($) => sh.state(['Kosten', null]))
                        case 'Opbrengsten': return p_.option($, ($) => sh.state(['Opbrengsten', null]))
                        default: return p_.exhaustive($[0])
                    }
                })),
        })))),
})
export const Grootboekrekeningen: Grootboekrekeningen = ($) => ({
    'Balans': p_change_context($['Balans grootboekrekeningen'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Stam': null,
            // 'Type': p_change_context($['Type'], ($) => p_.from.state($).decide(
            // ($): d_out.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Type => {
            //     switch ($[0]) {
            //         case 'Bankrekening': return p_.option($, ($) => sh.state(['Bankrekening', null]))
            //         case 'Informele rekening': return p_.option($, ($) => sh.state(['Informele rekening', null]))
            //         case 'Overig': return p_.option($, ($) => sh.state(['Overig', null]))
            //         default: return p_.exhaustive($[0])
            //     }
            // })),
        })))),
    'Resultaat': p_change_context($['Resultaat grootboekrekeningen'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Stam': null,
        })))),
})
export const Handelstransacties: Handelstransacties = ($) => ({
    'Inkopen': p_change_context($['Inkopen'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Afhandeling': p_change_context($['Afhandeling'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
                    switch ($[0]) {
                        case 'Mutaties': return p_.option($, ($) => sh.state(['Mutaties', null]))
                        case 'Nog te betalen': return p_.option($, ($) => sh.state(['Nog te betalen', {
                            'Betalingstermijn': p_change_context($['Betalingstermijn'], ($) => $),
                        }]))
                        case 'Rekening courant': return p_.option($, ($) => sh.state(['Rekening courant', ({
                            'Rekening courant': p_change_context($['Rekening courant'], ($) => sh.reference($)),
                        })]))
                        default: return p_.exhaustive($[0])
                    }
                })),
            'BTW-periode': p_change_context($['BTW-regime'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.BTW$mi_periode => {
                    switch ($[0]) {
                        case 'Binnenland: heffing verlegd': return p_.option($, ($) => p_change_context($['BTW-periode'], ($) => sh.reference($)))
                        case 'Geen BTW van toepassing': return p_.option($, ($) => p_change_context($['BTW-periode'], ($) => sh.reference($)))
                        case 'Import van buiten de EU': return p_.option($, ($) => p_change_context($['BTW-periode'], ($) => sh.reference($)))
                        case 'Intracommunautair': return p_.option($, ($) => p_change_context($['BTW-periode'], ($) => sh.reference($)))
                        case 'Standaard': return p_.option($, ($) => p_change_context($['BTW-periode'], ($) => sh.reference($)))
                        default: return p_.exhaustive($[0])
                    }
                })),

            // 'BTW-regime': p_change_context($['BTW-regime'], ($) => p_.from.state($).decide(
            // ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.BTW$mi_regime => {
            //     switch ($[0]) {
            //         case 'Binnenland: heffing verlegd': return p_.option($, ($) => sh.state(['Binnenland: heffing verlegd', null]))
            //         case 'Geen BTW van toepassing': return p_.option($, ($) => sh.state(['Geen BTW van toepassing', null]))
            //         case 'Import van buiten de EU': return p_.option($, ($) => sh.state(['Import van buiten de EU', null]))
            //         case 'Intracommunautair': return p_.option($, ($) => sh.state(['Intracommunautair', null]))
            //         case 'Standaard': return p_.option($, ($) => sh.state(['Standaard', ({
            //             'BTW-periode': p_change_context($['BTW-periode'], ($) => sh.reference($)),
            //         })]))
            //         default: return p_.exhaustive($[0])
            //     }
            // })),
            'Brondocument': p_change_context($['Brondocument'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
                    switch ($[0]) {
                        case 'Niet van toepassing': return p_.option($, ($) => sh.state(['Niet van toepassing', null]))
                        case 'Ontbreekt': return p_.option($, ($) => sh.state(['Ontbreekt', null]))
                        case 'Toegevoegd': return p_.option($, ($) => sh.state(['Toegevoegd', ({
                            'Document': p_change_context($['Document'], ($) => $.stem + "." + $.extension),
                        })]))
                        case 'Nog toevoegen': return p_.option($, ($) => sh.state(['Ontbreekt', null]))//FIXME!!!!
                        default: return p_.exhaustive($[0])
                    }
                })),
            'Datum': p_change_context($['Datum'], ($) => fix_date($)),
            'Regels': p_change_context($['Regels'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => ({
                    'Bedrag': p_change_context($['Bedrag'], ($) => p_.from.state($).decide(
                        ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                            switch ($[0]) {
                                case 'Bekend': return p_.option($, ($) => sh.state(['Bekend', ({
                                    'BTW-bedrag': p_change_context($['BTW-bedrag'], ($) => $),
                                    'Bedrag inclusief geheven BTW': p_change_context($['Bedrag inclusief geheven BTW'], ($) => $),
                                })]))
                                default: return p_.exhaustive($[0])
                            }
                        })),
                    'Omschrijving': p_change_context($['Omschrijving'], ($) => $),
                    'Type': p_change_context($['Type'], ($) => p_.from.state($).decide(
                        ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                            switch ($[0]) {
                                case 'Balans': return p_.option($, ($) => sh.state(['Balans', ({
                                    'Balans item': p_change_context($['Balans item'], ($) => sh.reference($)),
                                })]))
                                case 'Kosten': return p_.option($, ($) => sh.state(['Kosten', ({
                                    'Grootboekrekening': p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                                })]))
                                default: return p_.exhaustive($[0])
                            }
                        })),
                })))),
            'Type': p_change_context($['Type'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
                    switch ($[0]) {
                        case 'Bonnetje': return p_.option($, ($) => sh.state(['Bonnetje', null]))
                        case 'Inkoop (met crediteur)': return p_.option($, ($) => sh.state(['Inkoop (met crediteur)', ({
                            'Crediteur': p_change_context($['Crediteur'], ($) => sh.reference($)),
                            'Factuurnummer': p_change_context($['Factuurnummer'], ($) => $),
                        })]))
                        case 'Loonheffing': return p_.option($, ($) => sh.state(['Loonheffing', ({
                            'Ronde': p_change_context($['Ronde'], ($) => sh.reference($)),
                        })]))
                        case 'Salaris': return p_.option($, ($) => sh.state(['Salaris', ({
                            'Medewerker': p_change_context($['Medewerker'], ($) => sh.reference($)),
                            'Ronde': p_change_context($['Ronde'], ($) => sh.reference($)),
                        })]))
                        default: return p_.exhaustive($[0])
                    }
                })),
        })))),
    'Verkopen': p_change_context($['Verkopen'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Afhandeling': p_change_context($['Afhandeling'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
                    switch ($[0]) {
                        case 'Mutaties': return p_.option($, ($) => sh.state(['Mutaties', null]))
                        case 'Rekening courant': return p_.option($, ($) => sh.state(['Rekening courant', ({
                            'Rekening courant': p_change_context($['Rekening courant'], ($) => sh.reference($)),
                        })]))
                        default: return p_.exhaustive($[0])
                    }
                })),
            'BTW-periode': p_change_context($['BTW-periode'], ($) => sh.reference($)),
            'Betalingstermijn': p_change_context($['Betalingstermijn'], ($) => $),
            'Brondocument': p_change_context($['Brondocument'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
                    switch ($[0]) {
                        case 'Toegevoegd': return p_.option($, ($) => sh.state(['Toegevoegd', ({
                            'Document': p_change_context($['Document'], ($) => $.stem + "." + $.extension),
                        })]))
                        default: return p_.exhaustive($[0])
                    }
                })),
            'Contracttype': p_change_context($['Contracttype'], ($) => p_.from.state($).decide(
                ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
                    switch ($[0]) {
                        case 'Licentieovereenkomst': return p_.option($, ($) => sh.state(['Licentieovereenkomst', ({
                            'Overeenkomst': p_change_context($['Overeenkomst'], ($) => sh.reference($)),
                        })]))
                        case 'Project': return p_.option($, ($) => sh.state(['Project', ({
                            'Offerte': p_change_context($['Offerte'], ($) => sh.reference($)),
                            'Project': p_change_context($['Project'], ($) => sh.reference($)),
                        })]))
                        default: return p_.exhaustive($[0])
                    }
                })),
            'Datum': p_change_context($['Datum'], ($) => fix_date($)),
            'Debiteur': p_change_context($['Debiteur'], ($) => sh.reference($)),
            'Regels': p_change_context($['Regels'], ($) => sh.dictionary(p_.from.dictionary($).map(
                ($) => ({
                    'BTW-regime': p_change_context($['BTW-regime'], ($) => p_.from.state($).decide(
                        ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                            switch ($[0]) {
                                case 'Binnenland: heffing verlegd': return p_.option($, ($) => sh.state(['Binnenland: heffing verlegd', null]))
                                case 'Intracommunautair': return p_.option($, ($) => sh.state(['Intracommunautair', null]))
                                case 'Standaard': return p_.option($, ($) => sh.state(['Standaard', ({
                                    'BTW-categorie': p_change_context($['BTW-categorie'], ($) => sh.reference($)),
                                })]))
                                default: return p_.exhaustive($[0])
                            }
                        })),
                    'Bedrag exclusief BTW': p_change_context($['Bedrag exclusief BTW'], ($) => $),
                    'Contracttype': p_change_context($['Contracttype'], ($) => p_.from.state($).decide(
                        ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                            switch ($[0]) {
                                case 'Licentieovereenkomst': return p_.option($, ($) => sh.state(['Licentieovereenkomst', ({
                                    'Periode': p_change_context($['Periode'], ($) => sh.reference($)),
                                })]))
                                case 'Los': return p_.option($, ($) => sh.state(['Los', null]))
                                case 'Project': return p_.option($, ($) => sh.state(['Project', ({
                                    'Opbrengst': p_change_context($['Opbrengst'], ($) => sh.reference($)),
                                })]))
                                default: return p_.exhaustive($[0])
                            }
                        })),
                    'Omschrijving': p_change_context($['Omschrijving'], ($) => $),
                    'Type': p_change_context($['Type'], ($) => p_.from.state($).decide(
                        ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                            switch ($[0]) {
                                case 'Balans': return p_.option($, ($) => sh.state(['Balans', ({
                                    'Balans item': p_change_context($['Balans item'], ($) => sh.reference($)),
                                })]))
                                case 'Opbrengsten': return p_.option($, ($) => sh.state(['Opbrengsten', ({
                                    'Grootboekrekening': p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                                })]))
                                default: return p_.exhaustive($[0])
                            }
                        })),
                })))),
        })))),
})
export const Jaarbeheer: Jaarbeheer = ($) => ({
    'Balans': p_change_context($, ($) => ({
        'Bankrekeningen': p_change_context($['Bankrekeningen'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => ({
                'Beginsaldo': p_change_context($['Beginsaldo'], ($) => $),
                'Grootboekrekening': p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                'Mutaties': p_change_context($['Mutaties'], ($) => sh.dictionary(p_.from.dictionary($).map(
                    ($) => ({
                        'Bedrag': p_change_context($['Bedrag'], ($) => $),
                        'Datum': p_change_context($['Datum'], ($) => fix_date($)),
                        'Omschrijving': p_change_context($['Omschrijving'], ($) => $),
                    })))),
                'Nieuw': p_change_context($['Nieuw'], ($) => p_.from.state($).decide(
                    ($): d_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                        switch ($[0]) {
                            case 'Ja': return p_.option($, ($) => sh.state(['Ja', null]))
                            case 'Nee': return p_.option($, ($) => sh.state(['Nee', ({
                                'Rekening': p_change_context($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                                    $,
                                )),
                            })]))
                            default: return p_.exhaustive($[0])
                        }
                    })),
            })))),
        'Beginsaldo nog aan te geven BTW': p_change_context($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': p_change_context($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': p_change_context($['Inkoop saldo'].Grootboekrekening, ($) => sh.reference($)),
        'Grootboekrekening voor Verkoop saldo': p_change_context($['Verkoop saldo'].Grootboekrekening, ($) => sh.reference($)),
        'Grootboekrekening voor nog aan te geven BTW': p_change_context($['Grootboekrekening voor nog aan te geven BTW'], ($) => sh.reference($)),
        'Grootboekrekening voor resultaat dit jaar': p_change_context($['Grootboekrekening voor resultaat dit jaar'], ($) => sh.reference($)),
        'Grootboekrekening voor winstreserve': p_change_context($['Grootboekrekening voor winstreserve'], ($) => sh.reference($)),
        'Informele rekeningen': p_change_context($['Informele rekeningen'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => ({
                'Beginsaldo': p_change_context($['Beginsaldo'], ($) => $),
                'Grootboekrekening': p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                'Nieuw': p_change_context($['Nieuw'], ($) => p_.from.state($).decide(
                    ($): d_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                        switch ($[0]) {
                            case 'Ja': return p_.option($, ($) => sh.state(['Ja', null]))
                            case 'Nee': return p_.option($, ($) => sh.state(['Nee', ({
                                'Rekening': p_change_context($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                                    $,
                                )),
                            })]))
                            default: return p_.exhaustive($[0])
                        }
                    })),
            })))),
        'Overige balans items': p_change_context($['Overige balans items'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => Overige_balans_item(
                $,
            )))),
        'Verrekenposten': p_change_context($['Verrekenposten'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => null))),
    })),
    'Resultaat': p_change_context($, ($) => ({
        'BTW periodes': p_change_context($['BTW periodes'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => ({
                '1. BTW-categorieen': p_change_context($['1. BTW-categorieen'], ($) => sh.dictionary(p_.from.dictionary($).map(
                    ($) => null))),
                'Documenten': p_change_context($['Documenten'], ($) => sh.dictionary(p_.from.dictionary($).map(
                    ($) => ({
                        'Bestand': p_change_context($['Bestand'], ($) => $.stem + "." + $.extension),
                    })))),
                'Omschrijving': p_change_context($['Omschrijving'], ($) => $),
                'Status': p_change_context($['Status'], ($) => p_.from.state($).decide(
                    ($): d_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                        switch ($[0]) {
                            case 'Aangegeven': return p_.option($, ($) => sh.state(['Aangegeven', ({
                                'Afronding': p_change_context($['Afronding'], ($) => $),
                                'Bedrag': p_change_context($['Bedrag'], ($) => $),
                                'Datum': p_change_context($['Datum'], ($) => fix_date($)),
                            })]))
                            case 'Openstaand': return p_.option($, ($) => sh.state(['Openstaand', null]))
                            default: return p_.exhaustive($[0])
                        }
                    })),
            })))),
        'Grootboekrekening voor BTW afrondingen': p_change_context($['Grootboekrekening voor BTW afrondingen'], ($) => sh.reference($)),
        'Salarisrondes': p_change_context($['Salarisrondes'], ($) => sh.dictionary(p_.from.dictionary($).map(
            ($) => null))),
    })),
})
export const Jaren: Jaren = ($) => sh.dictionary(p_.from.dictionary($.Jaren).map(
    ($, id) => ({
        'Afgesloten': p_change_context($['Afgesloten'], ($) => p_.from.state($).decide(
            ($): d_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
                switch ($[0]) {
                    case 'Ja': return p_.option($, ($) => sh.state(['Ja', null]))
                    case 'Nee': return p_.option($, ($) => sh.state(['Nee', null]))
                    default: return p_.exhaustive($[0])
                }
            })),
        'Eerste boekjaar': p_change_context($['Eerste boekjaar'], ($) => Eerste_boekjaar(
            $,
        )),
        'Grootboekrekeningen': p_change_context($, ($) => Grootboekrekeningen(
            $,
        )),
        'Handelstransacties': p_change_context($, ($) => Handelstransacties(
            $,
        )),
        'Jaarbeheer': p_change_context($, ($) => Jaarbeheer(
            $,
        )),
        'Mutaties': p_change_context($, ($) => Mutaties(
            $,
            {
                'jaar': id,
            }
        )),
        'Startdatum boekjaar': p_change_context($['Startdatum boekjaar'], ($) => fix_date($)),
    })))
export const Mutaties: Mutaties = ($, $p) => ({
    'Bankrekeningen': p_change_context($.Bankrekeningen, ($) => sh.dictionary(p_.from.dictionary($).map(
        ($): d_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry => {
            return {
                'Stam': null,
                'Mutatie Verwerkingen': sh.dictionary(p_temp.from.dictionary($.Mutaties).map_optionally(
                    ($) => p_.from.state($.Status).decide(
                        ($): p_di.Optional_Value<d_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry> => {
                            switch ($[0]) {
                                case 'Nog te verwerken': return p_.option($, ($) => p_.literal.not_set())
                                case 'Verwerkt': return p_.option($, ($): p_di.Optional_Value<d_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry> => p_.literal.set({
                                    'Stam': null,
                                    'type': p_.from.state($.Afhandeling).decide(
                                        ($): d_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_ => {
                                            switch ($[0]) {
                                                case 'Informele rekening': return p_.option($, ($) => sh.state(['Balans', sh.state(['Informele rekening', ({
                                                    'Informele rekening': p_change_context($['Informele rekening'], ($) => sh.reference($)),
                                                })])]))

                                                case 'Verrekenpost': return p_.option($, ($) => sh.state(['Balans', sh.state(['Verrekenpost', ({
                                                    'Verrekenpost': p_change_context($['Verrekenpost'], ($) => sh.reference($)),
                                                })])]))

                                                case 'BTW-periode': return p_.option($, ($): d_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_ => sh.state(['Resultaat', {
                                                    'Jaar': $.Jaar === $p.jaar
                                                        ? p_.literal.not_set()
                                                        : p_.literal.set(
sh.reference($.Jaar)),
                                                    'type': sh.state(['BTW-periode', sh.reference($['BTW-periode'])])
                                                }]))
                                                case 'Inkoop': return p_.option($, ($) => sh.state(['Resultaat', {
                                                    'Jaar': $.Jaar === $p.jaar
                                                        ? p_.literal.not_set()
                                                        : p_.literal.set(
sh.reference($.Jaar)),
                                                    'type': sh.state(['Inkoop', sh.reference($['Inkoop'])])
                                                }]))
                                                case 'Verkoop': return p_.option($, ($) => sh.state(['Resultaat', {
                                                    'Jaar': $.Jaar === $p.jaar
                                                        ? p_.literal.not_set()
                                                        : p_.literal.set(
sh.reference($.Jaar)),
                                                    'type': sh.state(['Verkoop', sh.reference($['Verkoop'])])
                                                }]))
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        })
                ))
            }
        }))),
    'Overige Balans Items': p_change_context($['Overige balans items'], ($) => sh.dictionary(p_.from.dictionary($).map(
        ($): d_out.Mutaties.Overige_Balans_Items.l_dictionary.D.l_entry => ({
            'Stam': null,
            'Memoriaal Boekingen': sh.dictionary(p_.from.dictionary($['Memoriaal boekingen']).map(
                ($) => ({
                    'Bedrag': p_change_context($['Bedrag'], ($) => $),
                    'Datum': p_change_context($['Datum'], ($) => fix_date($)),
                    'Grootboekrekening': p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                    'Omschrijving': p_change_context($['Omschrijving'], ($) => $),
                })))
        })))),
    'Verrekenposten': p_change_context($.Verrekenposten, ($) => sh.dictionary(p_.from.dictionary($).map(
        ($) => ({
            'Stam': null,
            'Mutaties': sh.dictionary(p_.from.dictionary($.Mutaties).map(
                ($): d_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry => ({
                    'Afhandeling': p_change_context($['Afhandeling'], ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'Informele rekening': return p_.option($, ($) => sh.state(['Balans', sh.state(['Informele rekening', ({
                                    'Informele rekening': p_change_context($['Informele rekening'], ($) => sh.reference($)),
                                })])]))

                                case 'BTW-periode': return p_.option($, ($) => sh.state(['Resultaat', {
                                    'Jaar': $.Jaar === $p.jaar
                                        ? p_.literal.not_set()
                                        : p_.literal.set(
sh.reference($.Jaar)),
                                    'type': sh.state(['BTW-periode', sh.reference($['BTW-periode'])])
                                }]))
                                case 'Inkoop': return p_.option($, ($) => sh.state(['Resultaat', {
                                    'Jaar': $.Jaar === $p.jaar
                                        ? p_.literal.not_set()
                                        : p_.literal.set(
sh.reference($.Jaar)),
                                    'type': sh.state(['Inkoop', sh.reference($['Inkoop'])])
                                }]))
                                case 'Verkoop': return p_.option($, ($) => sh.state(['Resultaat', {
                                    'Jaar': $.Jaar === $p.jaar
                                        ? p_.literal.not_set()
                                        : p_.literal.set(
sh.reference($.Jaar)),
                                    'type': sh.state(['Verkoop', sh.reference($['Verkoop'])])
                                }]))
                                default: return p_.exhaustive($[0])
                            }
                        })),
                    'Bedrag': p_change_context($['Bedrag'], ($) => $),
                })))
        })))),
})
export const Overige_balans_item: Overige_balans_item = ($) => ({
    'Beginsaldo': p_change_context($, ($) => $.Beginsaldo),
    'Grootboekrekening': p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
    'Nieuw': p_change_context($['Nieuw'], ($) => p_.from.state($).decide(
        ($): d_out.Overige_balans_item.Nieuw => {
            switch ($[0]) {
                case 'Ja': return p_.option($, ($) => sh.state(['Ja', null]))
                case 'Nee': return p_.option($, ($) => sh.state(['Nee', ({
                    'Balans item': p_change_context($['Balans item'], ($) => sh.reference($)),
                })]))
                default: return p_.exhaustive($[0])
            }
        })),
})
export const Root: Root = ($) => ({
    'Beheer': p_change_context($, ($) => Beheer(
        $,
    )),
    'Categorieen': p_change_context($, ($) => Grootboek_Categorieen(
        $,
    )),
    'Fiscaal': p_change_context($, ($) => Fiscaal(
        $,
    )),
    'Jaren': p_change_context($, ($) => Jaren(
        $,
    )),
})
export const Verwijzing_naar_Bankrekening: Verwijzing_naar_Bankrekening = ($) => sh.reference($)
export const Verwijzing_naar_Informele_rekening: Verwijzing_naar_Informele_rekening = ($) => sh.reference($)
