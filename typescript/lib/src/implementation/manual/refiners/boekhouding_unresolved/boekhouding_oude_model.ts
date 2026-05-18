import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_out from "../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"
import * as signatures from "../../../../interface/signatures/refiners/boekhouding_unresolved/boekhouding_oude_model"


const fix_date = ($: number) => {
    return $ - 	2432895 // the date of the universal declaration of human rights (1948-12-10) in julian days, rounded down to the nearest day to avoid the strange noon changeover)
}

export const Beheer: signatures.Beheer = ($) => ({
    'BTW-categorieen': sh.dictionary(_p_change_context($.Beheer['BTW-categorieen'], ($) => $.__d_map(($): d_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry => ({
        'BTW-heffing': _p_change_context($['BTW-heffing'], ($) => _p.decide.state($, ($): d_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => sh.state(['Ja', ({
                    'BTW-promillage': _p_change_context($['BTW-promillage'], ($) => $),
                })]))
                case 'Nee': return _p.ss($, ($) => sh.state(['Nee', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Gebruikers': sh.dictionary(_p_change_context($.Beheer['Gebruikers'], ($) => $.__d_map(($) => ({
        'Volledige naam': _p_change_context($['Volledige naam'], ($) => $),
        'Wachtwoord': _p_change_context($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _p_change_context($, ($): d_out.Beheer.Grootboekrekeningen => ({
        'Balans': sh.dictionary(_p_change_context($.Beheer['Balans'].Grootboekrekeningen, ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p_change_context($['Hoofdcategorie'], ($) => sh.reference($)),
            'Subcategorie': _p_change_context($['Subcategorie'], ($) => sh.reference($)),
            'Zijde': _p_change_context($['Zijde'], ($) => _p.decide.state($, ($): d_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => sh.state(['Activa', null]))
                    case 'Passiva': return _p.ss($, ($) => sh.state(['Passiva', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Resultaat': sh.dictionary(_p_change_context($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p_change_context($['Hoofdcategorie'], ($) => sh.reference($)),
            'Subcategorie': _p_change_context($['Subcategorie'], ($) => sh.reference($)),
            'Zijde': _p_change_context($['Zijde'], ($) => _p.decide.state($, ($): d_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _p_change_context($['Correctie op vennootschapsbelasting'], ($) => _p.decide.state($, ($): d_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                            switch ($[0]) {
                                case 'Ja': return _p.ss($, ($) => sh.state(['Ja', ({
                                    'Correctietype': _p_change_context($['Correctietype'], ($) => sh.reference($)),
                                })]))
                                case 'Nee': return _p.ss($, ($) => sh.state(['Nee', null]))
                                default: return _p.au($[0])
                            }
                        })),
                    })]))
                    case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
    })),
    'Klanten': sh.dictionary(_p_change_context($['Klanten'], ($) => $.__d_map(($) => ({
        'Licentieovereenkomsten': _p_change_context($['Licentieovereenkomsten'], ($) => sh.dictionary($.__d_map(($) => ({
            'Periodes': _p_change_context($['Periodes'], ($) => sh.dictionary($.__d_map(($) => ({
                'Bedrag': _p_change_context($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _p_change_context($['Projecten'], ($) => sh.dictionary($.__d_map(($) => ({
            'Offertes': _p_change_context($['Offertes'], ($) => sh.dictionary($.__d_map(($) => ({
                'Opbrengsten': _p_change_context($['Opbrengsten'], ($) => sh.dictionary($.__d_map(($) => ({
                    'Type': _p_change_context($['Type'], ($) => _p.decide.state($, ($): d_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                        switch ($[0]) {
                            case 'Project': return _p.ss($, ($) => sh.state(['Project', ({
                                'Bedrag': _p_change_context($['Bedrag'], ($) => $),
                                'Betaaldatum': _p_change_context($['Betaaldatum'], ($) => fix_date($)),
                            })]))
                            default: return _p.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': sh.dictionary(_p_change_context($['Leveranciers'], ($) => $.__d_map(($) => null))),
    'Medewerkers': sh.dictionary(_p_change_context($['Medewerkers'], ($) => $.__d_map(($) => null))),
    'Rekeningen': _p_change_context($, ($) => ({
        'Bank': _p_change_context($.Bankrekeningen, ($) => sh.dictionary($.__d_map(($) => null))),
        'Informeel': _p_change_context($['Informele rekeningen'], ($) => sh.dictionary($.__d_map(($) => null))),
    })),
})
export const Eerste_boekjaar: signatures.Eerste_boekjaar = ($) => _p.decide.state($, ($): d_out.Eerste_boekjaar => {
    switch ($[0]) {
        case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
        case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
            'Vorig boekjaar': _p_change_context($['Vorig boekjaar'], ($) => sh.reference($)),
        })]))
        default: return _p.au($[0])
    }
})
export const Fiscaal: signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p_change_context($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => sh.dictionary($.__d_map(($) => ({
        'Subcategorieen': _p_change_context($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => null))),
        'Zijde': _p_change_context($['Zijde'], ($) => _p.decide.state($, ($): d_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => sh.state(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => sh.state(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': sh.dictionary(_p_change_context($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.__d_map(($) => ({
        'Subcategorieen': _p_change_context($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => null))),
        'Zijde': _p_change_context($['Zijde'], ($) => _p.decide.state($, ($): d_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _p_change_context($.Beheer.Balans.Hoofdcategorieen, ($) => sh.dictionary($.__d_map(($) => ({
        'Subcategorieen': _p_change_context($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p_change_context($['Hoofdcategorie fiscus'], ($) => sh.reference($)),
            'Subcategorie fiscus': _p_change_context($['Subcategorie fiscus'], ($) => sh.reference($)),
        })))),
        'Zijde': _p_change_context($['Zijde'], ($) => _p.decide.state($, ($): d_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => sh.state(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => sh.state(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _p_change_context($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => sh.dictionary($.__d_map(($) => ({
        'Te corrigeren promillage': _p_change_context($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _p_change_context($.Beheer['Resultaat'].Hoofdcategorieen, ($) => sh.dictionary($.__d_map(($) => ({
        'Subcategorieen': _p_change_context($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p_change_context($['Hoofdcategorie fiscus'], ($) => sh.reference($)),
            'Subcategorie fiscus': _p_change_context($['Subcategorie fiscus'], ($) => sh.reference($)),
        })))),
        'Zijde': _p_change_context($['Zijde'], ($) => _p.decide.state($, ($): d_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p_change_context($['Balans grootboekrekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Stam': null,
        'Type': _p_change_context($['Type'], ($) => _p.decide.state($, ($): d_out.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Type => {
            switch ($[0]) {
                case 'Bankrekening': return _p.ss($, ($) => sh.state(['Bankrekening', null]))
                case 'Informele rekening': return _p.ss($, ($) => sh.state(['Informele rekening', null]))
                case 'Overig': return _p.ss($, ($) => sh.state(['Overig', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat': _p_change_context($['Resultaat grootboekrekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Stam': null,
    })))),
})
export const Handelstransacties: signatures.Handelstransacties = ($) => ({
    'Inkopen': _p_change_context($['Inkopen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Afhandeling': _p_change_context($['Afhandeling'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => sh.state(['Mutaties', null]))
                case 'Nog te betalen': return _p.ss($, ($) => sh.state(['Nog te betalen', {
                    'Betalingstermijn': _p_change_context($['Betalingstermijn'], ($) => $),
                }]))
                case 'Rekening courant': return _p.ss($, ($) => sh.state(['Rekening courant', ({
                    'Rekening courant': _p_change_context($['Rekening courant'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-regime': _p_change_context($['BTW-regime'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.BTW$mi_regime => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _p.ss($, ($) => sh.state(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _p.ss($, ($) => sh.state(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _p.ss($, ($) => sh.state(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _p.ss($, ($) => sh.state(['Intracommunautair', null]))
                case 'Standaard': return _p.ss($, ($) => sh.state(['Standaard', ({
                    'BTW-periode': _p_change_context($['BTW-periode'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Brondocument': _p_change_context($['Brondocument'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
            switch ($[0]) {
                case 'Niet van toepassing': return _p.ss($, ($) => sh.state(['Niet van toepassing', null]))
                case 'Ontbreekt': return _p.ss($, ($) => sh.state(['Ontbreekt', null]))
                case 'Toegevoegd': return _p.ss($, ($) => sh.state(['Toegevoegd', ({
                    'Document': _p_change_context($['Document'], ($) => $.stem + "." + $.extension),
                })]))
                case 'Nog toevoegen': return _p.ss($, ($) => sh.state(['Ontbreekt', null]))//FIXME!!!!
                default: return _p.au($[0])
            }
        })),
        'Datum': _p_change_context($['Datum'], ($) => fix_date($)),
        'Regels': _p_change_context($['Regels'], ($) => sh.dictionary($.__d_map(($) => ({
            'Bedrag': _p_change_context($['Bedrag'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                switch ($[0]) {
                    case 'Bekend': return _p.ss($, ($) => sh.state(['Bekend', ({
                        'BTW-bedrag': _p_change_context($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _p_change_context($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p_change_context($['Omschrijving'], ($) => $),
            'Type': _p_change_context($['Type'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => sh.state(['Balans', ({
                        'Balans item': _p_change_context($['Balans item'], ($) => sh.reference($)),
                    })]))
                    case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', ({
                        'Grootboekrekening': _p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Type': _p_change_context($['Type'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
            switch ($[0]) {
                case 'Bonnetje': return _p.ss($, ($) => sh.state(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _p.ss($, ($) => sh.state(['Inkoop (met crediteur)', ({
                    'Crediteur': _p_change_context($['Crediteur'], ($) => sh.reference($)),
                    'Factuurnummer': _p_change_context($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _p.ss($, ($) => sh.state(['Loonheffing', ({
                    'Ronde': _p_change_context($['Ronde'], ($) => sh.reference($)),
                })]))
                case 'Salaris': return _p.ss($, ($) => sh.state(['Salaris', ({
                    'Medewerker': _p_change_context($['Medewerker'], ($) => sh.reference($)),
                    'Ronde': _p_change_context($['Ronde'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Verkopen': _p_change_context($['Verkopen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Afhandeling': _p_change_context($['Afhandeling'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => sh.state(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => sh.state(['Rekening courant', ({
                    'Rekening courant': _p_change_context($['Rekening courant'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-periode': _p_change_context($['BTW-periode'], ($) => sh.reference($)),
        'Betalingstermijn': _p_change_context($['Betalingstermijn'], ($) => $),
        'Brondocument': _p_change_context($['Brondocument'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
            switch ($[0]) {
                case 'Toegevoegd': return _p.ss($, ($) => sh.state(['Toegevoegd', ({
                    'Document': _p_change_context($['Document'], ($) => $.stem + "." + $.extension),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Contracttype': _p_change_context($['Contracttype'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _p.ss($, ($) => sh.state(['Licentieovereenkomst', ({
                    'Overeenkomst': _p_change_context($['Overeenkomst'], ($) => sh.reference($)),
                })]))
                case 'Project': return _p.ss($, ($) => sh.state(['Project', ({
                    'Offerte': _p_change_context($['Offerte'], ($) => sh.reference($)),
                    'Project': _p_change_context($['Project'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Datum': _p_change_context($['Datum'], ($) => fix_date($)),
        'Debiteur': _p_change_context($['Debiteur'], ($) => sh.reference($)),
        'Regels': _p_change_context($['Regels'], ($) => sh.dictionary($.__d_map(($) => ({
            'BTW-regime': _p_change_context($['BTW-regime'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => sh.state(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _p.ss($, ($) => sh.state(['Intracommunautair', null]))
                    case 'Standaard': return _p.ss($, ($) => sh.state(['Standaard', ({
                        'BTW-categorie': _p_change_context($['BTW-categorie'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _p_change_context($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _p_change_context($['Contracttype'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _p.ss($, ($) => sh.state(['Licentieovereenkomst', ({
                        'Periode': _p_change_context($['Periode'], ($) => sh.reference($)),
                    })]))
                    case 'Los': return _p.ss($, ($) => sh.state(['Los', null]))
                    case 'Project': return _p.ss($, ($) => sh.state(['Project', ({
                        'Opbrengst': _p_change_context($['Opbrengst'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p_change_context($['Omschrijving'], ($) => $),
            'Type': _p_change_context($['Type'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => sh.state(['Balans', ({
                        'Balans item': _p_change_context($['Balans item'], ($) => sh.reference($)),
                    })]))
                    case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', ({
                        'Grootboekrekening': _p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: signatures.Jaarbeheer = ($) => ({
    'Balans': _p_change_context($, ($) => ({
        'Bankrekeningen': _p_change_context($['Bankrekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Beginsaldo': _p_change_context($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
            'Mutaties': _p_change_context($['Mutaties'], ($) => sh.dictionary($.__d_map(($) => ({
                'Bedrag': _p_change_context($['Bedrag'], ($) => $),
                'Datum': _p_change_context($['Datum'], ($) => fix_date($)),
                'Omschrijving': _p_change_context($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _p_change_context($['Nieuw'], ($) => _p.decide.state($, ($): d_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
                        'Rekening': _p_change_context($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _p_change_context($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _p_change_context($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _p_change_context($['Inkoop saldo'].Grootboekrekening, ($) => sh.reference($)),
        'Grootboekrekening voor Verkoop saldo': _p_change_context($['Verkoop saldo'].Grootboekrekening, ($) => sh.reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _p_change_context($['Grootboekrekening voor nog aan te geven BTW'], ($) => sh.reference($)),
        'Grootboekrekening voor resultaat dit jaar': _p_change_context($['Grootboekrekening voor resultaat dit jaar'], ($) => sh.reference($)),
        'Grootboekrekening voor winstreserve': _p_change_context($['Grootboekrekening voor winstreserve'], ($) => sh.reference($)),
        'Informele rekeningen': _p_change_context($['Informele rekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Beginsaldo': _p_change_context($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
            'Nieuw': _p_change_context($['Nieuw'], ($) => _p.decide.state($, ($): d_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
                        'Rekening': _p_change_context($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Overige balans items': _p_change_context($['Overige balans items'], ($) => sh.dictionary($.__d_map(($) => Overige_balans_item(
            $,
        )))),
        'Verrekenposten': _p_change_context($['Verrekenposten'], ($) => sh.dictionary($.__d_map(($) => null))),
    })),
    'Resultaat': _p_change_context($, ($) => ({
        'BTW periodes': _p_change_context($['BTW periodes'], ($) => sh.dictionary($.__d_map(($) => ({
            '1. BTW-categorieen': _p_change_context($['1. BTW-categorieen'], ($) => sh.dictionary($.__d_map(($) => null))),
            'Documenten': _p_change_context($['Documenten'], ($) => sh.dictionary($.__d_map(($) => ({
                'Bestand': _p_change_context($['Bestand'], ($) => $.stem + "." + $.extension),
            })))),
            'Omschrijving': _p_change_context($['Omschrijving'], ($) => $),
            'Status': _p_change_context($['Status'], ($) => _p.decide.state($, ($): d_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                switch ($[0]) {
                    case 'Aangegeven': return _p.ss($, ($) => sh.state(['Aangegeven', ({
                        'Afronding': _p_change_context($['Afronding'], ($) => $),
                        'Bedrag': _p_change_context($['Bedrag'], ($) => $),
                        'Datum': _p_change_context($['Datum'], ($) => fix_date($)),
                    })]))
                    case 'Openstaand': return _p.ss($, ($) => sh.state(['Openstaand', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _p_change_context($['Grootboekrekening voor BTW afrondingen'], ($) => sh.reference($)),
        'Salarisrondes': _p_change_context($['Salarisrondes'], ($) => sh.dictionary($.__d_map(($) => null))),
    })),
})
export const Jaren: signatures.Jaren = ($) => sh.dictionary($.Jaren.__d_map(($, id) => ({
    'Afgesloten': _p_change_context($['Afgesloten'], ($) => _p.decide.state($, ($): d_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => sh.state(['Nee', null]))
            default: return _p.au($[0])
        }
    })),
    'Eerste boekjaar': _p_change_context($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
    )),
    'Grootboekrekeningen': _p_change_context($, ($) => Grootboekrekeningen(
        $,
    )),
    'Handelstransacties': _p_change_context($, ($) => Handelstransacties(
        $,
    )),
    'Jaarbeheer': _p_change_context($, ($) => Jaarbeheer(
        $,
    )),
    'Mutaties': _p_change_context($, ($) => Mutaties(
        $,
        {
            'jaar': id,
        }
    )),
    'Startdatum boekjaar': _p_change_context($['Startdatum boekjaar'], ($) => fix_date($)),
})))
export const Mutaties: signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _p_change_context($.Bankrekeningen, ($) => sh.dictionary($.__d_map(($) => sh.dictionary(_p.dictionary.from.dictionary(
        $.Mutaties,
    ).map_optionally(
        ($) => _p.decide.state($.Status, ($): _pi.Optional_Value<d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry> => {
            switch ($[0]) {
                case 'Nog te verwerken': return _p.ss($, ($) => _p.optional.literal.not_set())
                case 'Verwerkt': return _p.ss($, ($) => _p.optional.literal.set(_p.decide.state($.Afhandeling, ($): d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry => {
                    switch ($[0]) {
                        case 'Informele rekening': return _p.ss($, ($) => sh.state(['Balans', sh.state(['Informele rekening', ({
                            'Informele rekening': _p_change_context($['Informele rekening'], ($) => sh.reference($)),
                        })])]))

                        case 'Verrekenpost': return _p.ss($, ($) => sh.state(['Balans', sh.state(['Verrekenpost', ({
                            'Verrekenpost': _p_change_context($['Verrekenpost'], ($) => sh.reference($)),
                        })])]))

                        case 'BTW-periode': return _p.ss($, ($): d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry => sh.state(['Resultaat', {
                            'Jaar': $.Jaar === $p.jaar
                                ? _p.optional.literal.not_set()
                                : _p.optional.literal.set(sh.reference($.Jaar)),
                            'type': sh.state(['BTW-periode', sh.reference($['BTW-periode'])])
                        }]))
                        case 'Inkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                            'Jaar': $.Jaar === $p.jaar
                                ? _p.optional.literal.not_set()
                                : _p.optional.literal.set(sh.reference($.Jaar)),
                            'type': sh.state(['Inkoop', sh.reference($['Inkoop'])])
                        }]))
                        case 'Verkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                            'Jaar': $.Jaar === $p.jaar
                                ? _p.optional.literal.not_set()
                                : _p.optional.literal.set(sh.reference($.Jaar)),
                            'type': sh.state(['Verkoop', sh.reference($['Verkoop'])])
                        }]))
                        default: return _p.au($[0])
                    }
                })))
                default: return _p.au($[0])
            }
        })))))),
    'Memoriaal boekingen': _p_change_context($['Overige balans items'], ($) => sh.dictionary($.__d_map(($) => sh.dictionary($['Memoriaal boekingen'].__d_map(($) => ({
        'Bedrag': _p_change_context($['Bedrag'], ($) => $),
        'Datum': _p_change_context($['Datum'], ($) => fix_date($)),
        'Grootboekrekening': _p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
        'Omschrijving': _p_change_context($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _p_change_context($.Verrekenposten, ($) => sh.dictionary($.__d_map(($) => sh.dictionary($.Mutaties.__d_map(($) => ({
        'Afhandeling': _p_change_context($['Afhandeling'], ($) => _p.decide.state($, ($): d_out.Mutaties.Verrekenpost_mutaties.l_dictionary.D.l_entry.l_dictionary.D.l_entry.Afhandeling => {
            switch ($[0]) {
                case 'Informele rekening': return _p.ss($, ($) => sh.state(['Balans', sh.state(['Informele rekening', ({
                    'Informele rekening': _p_change_context($['Informele rekening'], ($) => sh.reference($)),
                })])]))

                case 'BTW-periode': return _p.ss($, ($) => sh.state(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.literal.not_set()
                        : _p.optional.literal.set(sh.reference($.Jaar)),
                    'type': sh.state(['BTW-periode', sh.reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.literal.not_set()
                        : _p.optional.literal.set(sh.reference($.Jaar)),
                    'type': sh.state(['Inkoop', sh.reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.literal.not_set()
                        : _p.optional.literal.set(sh.reference($.Jaar)),
                    'type': sh.state(['Verkoop', sh.reference($['Verkoop'])])
                }]))
                default: return _p.au($[0])
            }
        })),
        'Bedrag': _p_change_context($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _p_change_context($, ($) => $.Beginsaldo),
    'Grootboekrekening': _p_change_context($['Grootboekrekening'], ($) => sh.reference($)),
    'Nieuw': _p_change_context($['Nieuw'], ($) => _p.decide.state($, ($): d_out.Overige_balans_item.Nieuw => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
                'Balans item': _p_change_context($['Balans item'], ($) => sh.reference($)),
            })]))
            default: return _p.au($[0])
        }
    })),
})
export const Root: signatures.Root = ($) => ({
    'Beheer': _p_change_context($, ($) => Beheer(
        $,
    )),
    'Categorieen': _p_change_context($, ($) => Grootboek_Categorieen(
        $,
    )),
    'Fiscaal': _p_change_context($, ($) => Fiscaal(
        $,
    )),
    'Jaren': _p_change_context($, ($) => Jaren(
        $,
    )),
})
export const Verwijzing_naar_Bankrekening: signatures.Verwijzing_naar_Bankrekening = ($) => sh.reference($)
export const Verwijzing_naar_Informele_rekening: signatures.Verwijzing_naar_Informele_rekening = ($) => sh.reference($)
