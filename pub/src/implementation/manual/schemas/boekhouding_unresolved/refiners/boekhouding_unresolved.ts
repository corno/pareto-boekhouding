import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import * as _pds from 'pareto-core/dist/deserializer'
import { _p_cc } from 'pareto-core/dist/change_context'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"
import * as signatures from "../../../../../interface/signatures/refiners/boekhouding_unresolved/boekhouding_oude_model"

export const Beheer: signatures.Beheer = ($) => ({
    'BTW-categorieen': sh.dictionary(_p_cc($.Beheer['BTW-categorieen'], ($) => $.__d_map(($): d_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry => ({
        'BTW-heffing': _p_cc($['BTW-heffing'], ($) => _p.decide.state($, ($): d_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => sh.state(['Ja', ({
                    'BTW-promillage': _p_cc($['BTW-promillage'], ($) => $),
                })]))
                case 'Nee': return _p.ss($, ($) => _pdev.implement_me("SDFS"))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Gebruikers': sh.dictionary(_p_cc($.Beheer['Gebruikers'], ($) => $.__d_map(($) => ({
        'Volledige naam': _p_cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _p_cc($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _p_cc($, ($): d_out.Beheer.Grootboekrekeningen => ({
        'Balans': sh.dictionary(_p_cc($.Beheer['Balans'].Grootboekrekeningen, ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p_cc($['Hoofdcategorie'], ($) => sh.reference($)),
            'Subcategorie': _p_cc($['Subcategorie'], ($) => sh.reference($)),
            'Zijde': _p_cc($['Zijde'], ($) => _p.decide.state($, ($): d_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => sh.state(['Activa', null]))
                    case 'Passiva': return _p.ss($, ($) => sh.state(['Passiva', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Resultaat': sh.dictionary(_p_cc($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p_cc($['Hoofdcategorie'], ($) => sh.reference($)),
            'Subcategorie': _p_cc($['Subcategorie'], ($) => sh.reference($)),
            'Zijde': _p_cc($['Zijde'], ($) => _p.decide.state($, ($): d_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _p_cc($['Correctie op vennootschapsbelasting'], ($) => _p.decide.state($, ($): d_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                            switch ($[0]) {
                                case 'Ja': return _p.ss($, ($) => sh.state(['Ja', ({
                                    'Correctietype': _p_cc($['Correctietype'], ($) => sh.reference($)),
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
    'Klanten': sh.dictionary(_p_cc($['Klanten'], ($) => $.__d_map(($) => ({
        'Licentieovereenkomsten': _p_cc($['Licentieovereenkomsten'], ($) => sh.dictionary($.__d_map(($) => ({
            'Periodes': _p_cc($['Periodes'], ($) => sh.dictionary($.__d_map(($) => ({
                'Bedrag': _p_cc($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _p_cc($['Projecten'], ($) => sh.dictionary($.__d_map(($) => ({
            'Offertes': _p_cc($['Offertes'], ($) => sh.dictionary($.__d_map(($) => ({
                'Opbrengsten': _p_cc($['Opbrengsten'], ($) => sh.dictionary($.__d_map(($) => ({
                    'Type': _p_cc($['Type'], ($) => _p.decide.state($, ($): d_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                        switch ($[0]) {
                            case 'Project': return _p.ss($, ($) => sh.state(['Project', ({
                                'Bedrag': _p_cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _p_cc($['Betaaldatum'], ($) => $),
                            })]))
                            default: return _p.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': sh.dictionary(_p_cc($['Leveranciers'], ($) => $.__d_map(($) => null))),
    'Medewerkers': sh.dictionary(_p_cc($['Medewerkers'], ($) => $.__d_map(($) => null))),
    'Rekeningen': _p_cc($, ($) => ({
        'Bank': _p_cc($.Bankrekeningen, ($) => sh.dictionary($.__d_map(($) => null))),
        'Informeel': _p_cc($['Informele rekeningen'], ($) => sh.dictionary($.__d_map(($) => null))),
    })),
})
export const Eerste_boekjaar: signatures.Eerste_boekjaar = ($) => _p.decide.state($, ($): d_out.Eerste_boekjaar => {
    switch ($[0]) {
        case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
        case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
            'Vorig boekjaar': _p_cc($['Vorig boekjaar'], ($) => sh.reference($)),
        })]))
        default: return _p.au($[0])
    }
})
export const Fiscaal: signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p_cc($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => sh.dictionary($.__d_map(($) => ({
        'Subcategorieen': _p_cc($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => null))),
        'Zijde': _p_cc($['Zijde'], ($) => _p.decide.state($, ($): d_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => sh.state(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => sh.state(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': sh.dictionary(_p_cc($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.__d_map(($) => ({
        'Subcategorieen': _p_cc($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => null))),
        'Zijde': _p_cc($['Zijde'], ($) => _p.decide.state($, ($): d_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _p_cc($.Beheer.Balans.Hoofdcategorieen, ($) => sh.dictionary($.__d_map(($) => ({
        'Subcategorieen': _p_cc($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p_cc($['Hoofdcategorie fiscus'], ($) => sh.reference($)),
            'Subcategorie fiscus': _p_cc($['Subcategorie fiscus'], ($) => sh.reference($)),
        })))),
        'Zijde': _p_cc($['Zijde'], ($) => _p.decide.state($, ($): d_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => sh.state(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => sh.state(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _p_cc($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => sh.dictionary($.__d_map(($) => ({
        'Te corrigeren promillage': _p_cc($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _p_cc($.Beheer['Resultaat'].Hoofdcategorieen, ($) => sh.dictionary($.__d_map(($) => ({
        'Subcategorieen': _p_cc($['Subcategorieen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p_cc($['Hoofdcategorie fiscus'], ($) => sh.reference($)),
            'Subcategorie fiscus': _p_cc($['Subcategorie fiscus'], ($) => sh.reference($)),
        })))),
        'Zijde': _p_cc($['Zijde'], ($) => _p.decide.state($, ($): d_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p_cc($['Balans grootboekrekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Type': _p_cc($['Type'], ($) => _p.decide.state($, ($): d_out.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Type => {
            switch ($[0]) {
                case 'Bankrekening': return _p.ss($, ($) => sh.state(['Bankrekening', null]))
                case 'Informele rekening': return _p.ss($, ($) => sh.state(['Informele rekening', null]))
                case 'Overig': return _p.ss($, ($) => sh.state(['Overig', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat': _p_cc($['Resultaat grootboekrekeningen'], ($) => sh.dictionary($.__d_map(($) => null))),
})
export const Handelstransacties: signatures.Handelstransacties = ($) => ({
    'Inkopen': _p_cc($['Inkopen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Afhandeling': _p_cc($['Afhandeling'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => sh.state(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => sh.state(['Rekening courant', ({
                    'Rekening courant': _p_cc($['Rekening courant'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-regime': _p_cc($['BTW-regime'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.BTW$mi_regime => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _p.ss($, ($) => sh.state(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _p.ss($, ($) => sh.state(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _p.ss($, ($) => sh.state(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _p.ss($, ($) => sh.state(['Intracommunautair', null]))
                case 'Standaard': return _p.ss($, ($) => sh.state(['Standaard', ({
                    'BTW-periode': _p_cc($['BTW-periode'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Brondocument': _p_cc($['Brondocument'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
            switch ($[0]) {
                case 'Niet van toepassing': return _p.ss($, ($) => sh.state(['Niet van toepassing', null]))
                case 'Ontbreekt': return _p.ss($, ($) => sh.state(['Ontbreekt', null]))
                case 'Toegevoegd': return _p.ss($, ($) => sh.state(['Toegevoegd', ({
                    'Document': _p_cc($['Document'], ($) => $),
                })]))
                case 'Nog toevoegen': return _p.ss($, ($) => sh.state(['Ontbreekt', null]))//FIXME!!!!
                default: return _p.au($[0])
            }
        })),
        'Datum': _p_cc($['Datum'], ($) => $),
        'Regels': _p_cc($['Regels'], ($) => sh.dictionary($.__d_map(($) => ({
            'Bedrag': _p_cc($['Bedrag'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                switch ($[0]) {
                    case 'Bekend': return _p.ss($, ($) => sh.state(['Bekend', ({
                        'BTW-bedrag': _p_cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _p_cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p_cc($['Omschrijving'], ($) => $),
            'Type': _p_cc($['Type'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => sh.state(['Balans', ({
                        'Balans item': _p_cc($['Balans item'], ($) => sh.reference($)),
                    })]))
                    case 'Kosten': return _p.ss($, ($) => sh.state(['Kosten', ({
                        'Grootboekrekening': _p_cc($['Grootboekrekening'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Type': _p_cc($['Type'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
            switch ($[0]) {
                case 'Bonnetje': return _p.ss($, ($) => sh.state(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _p.ss($, ($) => sh.state(['Inkoop (met crediteur)', ({
                    'Crediteur': _p_cc($['Crediteur'], ($) => sh.reference($)),
                    'Factuurnummer': _p_cc($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _p.ss($, ($) => sh.state(['Loonheffing', ({
                    'Ronde': _p_cc($['Ronde'], ($) => sh.reference($)),
                })]))
                case 'Salaris': return _p.ss($, ($) => sh.state(['Salaris', ({
                    'Medewerker': _p_cc($['Medewerker'], ($) => sh.reference($)),
                    'Ronde': _p_cc($['Ronde'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Verkopen': _p_cc($['Verkopen'], ($) => sh.dictionary($.__d_map(($) => ({
        'Afhandeling': _p_cc($['Afhandeling'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => sh.state(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => sh.state(['Rekening courant', ({
                    'Rekening courant': _p_cc($['Rekening courant'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-periode': _p_cc($['BTW-periode'], ($) => sh.reference($)),
        'Betalingstermijn': _p_cc($['Betalingstermijn'], ($) => $),
        'Brondocument': _p_cc($['Brondocument'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
            switch ($[0]) {
                case 'Toegevoegd': return _p.ss($, ($) => sh.state(['Toegevoegd', ({
                    'Document': _p_cc($['Document'], ($) => $),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Contracttype': _p_cc($['Contracttype'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _p.ss($, ($) => sh.state(['Licentieovereenkomst', ({
                    'Overeenkomst': _p_cc($['Overeenkomst'], ($) => sh.reference($)),
                })]))
                case 'Project': return _p.ss($, ($) => sh.state(['Project', ({
                    'Offerte': _p_cc($['Offerte'], ($) => sh.reference($)),
                    'Project': _p_cc($['Project'], ($) => sh.reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Datum': _p_cc($['Datum'], ($) => $),
        'Debiteur': _p_cc($['Debiteur'], ($) => sh.reference($)),
        'Regels': _p_cc($['Regels'], ($) => sh.dictionary($.__d_map(($) => ({
            'BTW-regime': _p_cc($['BTW-regime'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => sh.state(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _p.ss($, ($) => sh.state(['Intracommunautair', null]))
                    case 'Standaard': return _p.ss($, ($) => sh.state(['Standaard', ({
                        'BTW-categorie': _p_cc($['BTW-categorie'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _p_cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _p_cc($['Contracttype'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _p.ss($, ($) => sh.state(['Licentieovereenkomst', ({
                        'Periode': _p_cc($['Periode'], ($) => sh.reference($)),
                    })]))
                    case 'Los': return _p.ss($, ($) => sh.state(['Los', null]))
                    case 'Project': return _p.ss($, ($) => sh.state(['Project', ({
                        'Opbrengst': _p_cc($['Opbrengst'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p_cc($['Omschrijving'], ($) => $),
            'Type': _p_cc($['Type'], ($) => _p.decide.state($, ($): d_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => sh.state(['Balans', ({
                        'Balans item': _p_cc($['Balans item'], ($) => sh.reference($)),
                    })]))
                    case 'Opbrengsten': return _p.ss($, ($) => sh.state(['Opbrengsten', ({
                        'Grootboekrekening': _p_cc($['Grootboekrekening'], ($) => sh.reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: signatures.Jaarbeheer = ($) => ({
    'Balans': _p_cc($, ($) => ({
        'Bankrekeningen': _p_cc($['Bankrekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Beginsaldo': _p_cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p_cc($['Grootboekrekening'], ($) => sh.reference($)),
            'Mutaties': _p_cc($['Mutaties'], ($) => sh.dictionary($.__d_map(($) => ({
                'Bedrag': _p_cc($['Bedrag'], ($) => $),
                'Datum': _p_cc($['Datum'], ($) => $),
                'Omschrijving': _p_cc($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _p_cc($['Nieuw'], ($) => _p.decide.state($, ($): d_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
                        'Rekening': _p_cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _p_cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _p_cc($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _p_cc($['Inkoop saldo'].Grootboekrekening, ($) => sh.reference($)),
        'Grootboekrekening voor Verkoop saldo': _p_cc($['Verkoop saldo'].Grootboekrekening, ($) => sh.reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _p_cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => sh.reference($)),
        'Grootboekrekening voor resultaat dit jaar': _p_cc($['Grootboekrekening voor resultaat dit jaar'], ($) => sh.reference($)),
        'Grootboekrekening voor winstreserve': _p_cc($['Grootboekrekening voor winstreserve'], ($) => sh.reference($)),
        'Informele rekeningen': _p_cc($['Informele rekeningen'], ($) => sh.dictionary($.__d_map(($) => ({
            'Beginsaldo': _p_cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p_cc($['Grootboekrekening'], ($) => sh.reference($)),
            'Nieuw': _p_cc($['Nieuw'], ($) => _p.decide.state($, ($): d_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
                        'Rekening': _p_cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Overige balans items': _p_cc($['Overige balans items'], ($) => sh.dictionary($.__d_map(($) => Overige_balans_item(
            $,
        )))),
        'Verrekenposten': _p_cc($['Verrekenposten'], ($) => sh.dictionary($.__d_map(($) => null))),
    })),
    'Resultaat': _p_cc($, ($) => ({
        'BTW periodes': _p_cc($['BTW periodes'], ($) => sh.dictionary($.__d_map(($) => ({
            '1. BTW-categorieen': _p_cc($['1. BTW-categorieen'], ($) => sh.dictionary($.__d_map(($) => null))),
            'Documenten': _p_cc($['Documenten'], ($) => sh.dictionary($.__d_map(($) => ({
                'Bestand': _p_cc($['Bestand'], ($) => $),
            })))),
            'Omschrijving': _p_cc($['Omschrijving'], ($) => $),
            'Status': _p_cc($['Status'], ($) => _p.decide.state($, ($): d_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                switch ($[0]) {
                    case 'Aangegeven': return _p.ss($, ($) => sh.state(['Aangegeven', ({
                        'Afronding': _p_cc($['Afronding'], ($) => $),
                        'Bedrag': _p_cc($['Bedrag'], ($) => $),
                        'Datum': _p_cc($['Datum'], ($) => $),
                    })]))
                    case 'Openstaand': return _p.ss($, ($) => sh.state(['Openstaand', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _p_cc($['Grootboekrekening voor BTW afrondingen'], ($) => sh.reference($)),
        'Salarisrondes': _p_cc($['Salarisrondes'], ($) => sh.dictionary($.__d_map(($) => null))),
    })),
})
export const Jaren: signatures.Jaren = ($) => sh.dictionary($.Jaren.__d_map(($, id) => ({
    'Afgesloten': _p_cc($['Afgesloten'], ($) => _p.decide.state($, ($): d_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => sh.state(['Nee', null]))
            default: return _p.au($[0])
        }
    })),
    'Eerste boekjaar': _p_cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
    )),
    'Grootboekrekeningen': _p_cc($, ($) => Grootboekrekeningen(
        $,
    )),
    'Handelstransacties': _p_cc($, ($) => Handelstransacties(
        $,
    )),
    'Jaarbeheer': _p_cc($, ($) => Jaarbeheer(
        $,
    )),
    'Mutaties': _p_cc($, ($) => Mutaties(
        $,
        {
            'jaar': id,
        }
    )),
    'Startdatum boekjaar': _p_cc($['Startdatum boekjaar'], ($) => $),
})))
export const Mutaties: signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _p_cc($.Bankrekeningen, ($) => sh.dictionary($.__d_map(($) => sh.dictionary(_p.dictionary.filter($.Mutaties, ($) => _p.decide.state($.Status, ($): _pi.Optional_Value<d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry> => {
        switch ($[0]) {
            case 'Nog te verwerken': return _p.ss($, ($) => _p.optional.not_set())
            case 'Verwerkt': return _p.ss($, ($) => _p.optional.set(_p.decide.state($.Afhandeling, ($): d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry => {
                switch ($[0]) {
                    case 'Informele rekening': return _p.ss($, ($) => sh.state(['Balans', sh.state(['Informele rekening', ({
                        'Informele rekening': _p_cc($['Informele rekening'], ($) => sh.reference($)),
                    })])]))

                    case 'Verrekenpost': return _p.ss($, ($) => sh.state(['Balans', sh.state(['Verrekenpost', ({
                        'Verrekenpost': _p_cc($['Verrekenpost'], ($) => sh.reference($)),
                    })])]))

                    case 'BTW-periode': return _p.ss($, ($): d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry => sh.state(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.optional.not_set()
                            : _p.optional.set(sh.reference($.Jaar)),
                        'type': sh.state(['BTW-periode', sh.reference($['BTW-periode'])])
                    }]))
                    case 'Inkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.optional.not_set()
                            : _p.optional.set(sh.reference($.Jaar)),
                        'type': sh.state(['Inkoop', sh.reference($['Inkoop'])])
                    }]))
                    case 'Verkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.optional.not_set()
                            : _p.optional.set(sh.reference($.Jaar)),
                        'type': sh.state(['Verkoop', sh.reference($['Verkoop'])])
                    }]))
                    default: return _p.au($[0])
                }
            })))
            default: return _p.au($[0])
        }
    })))))),
    'Memoriaal boekingen': _p_cc($['Overige balans items'], ($) => sh.dictionary($.__d_map(($) => sh.dictionary($['Memoriaal boekingen'].__d_map(($) => ({
        'Bedrag': _p_cc($['Bedrag'], ($) => $),
        'Datum': _p_cc($['Datum'], ($) => $),
        'Grootboekrekening': _p_cc($['Grootboekrekening'], ($) => sh.reference($)),
        'Omschrijving': _p_cc($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _p_cc($.Verrekenposten, ($) => sh.dictionary($.__d_map(($) => sh.dictionary($.Mutaties.__d_map(($) => ({
        'Afhandeling': _p_cc($['Afhandeling'], ($) => _p.decide.state($, ($): d_out.Mutaties.Verrekenpost_mutaties.l_dictionary.D.l_entry.l_dictionary.D.l_entry.Afhandeling => {
            switch ($[0]) {
                case 'Informele rekening': return _p.ss($, ($) => sh.state(['Balans', sh.state(['Informele rekening', ({
                    'Informele rekening': _p_cc($['Informele rekening'], ($) => sh.reference($)),
                })])]))

                case 'BTW-periode': return _p.ss($, ($) => sh.state(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.not_set()
                        : _p.optional.set(sh.reference($.Jaar)),
                    'type': sh.state(['BTW-periode', sh.reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.not_set()
                        : _p.optional.set(sh.reference($.Jaar)),
                    'type': sh.state(['Inkoop', sh.reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _p.ss($, ($) => sh.state(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.not_set()
                        : _p.optional.set(sh.reference($.Jaar)),
                    'type': sh.state(['Verkoop', sh.reference($['Verkoop'])])
                }]))
                default: return _p.au($[0])
            }
        })),
        'Bedrag': _p_cc($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _p_cc($, ($) => $.Beginsaldo),
    'Grootboekrekening': _p_cc($['Grootboekrekening'], ($) => sh.reference($)),
    'Nieuw': _p_cc($['Nieuw'], ($) => _p.decide.state($, ($): d_out.Overige_balans_item.Nieuw => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => sh.state(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => sh.state(['Nee', ({
                'Balans item': _p_cc($['Balans item'], ($) => sh.reference($)),
            })]))
            default: return _p.au($[0])
        }
    })),
})
export const Root: signatures.Root = ($) => ({
    'Beheer': _p_cc($, ($) => Beheer(
        $,
    )),
    'Categorieen': _p_cc($, ($) => Grootboek_Categorieen(
        $,
    )),
    'Fiscaal': _p_cc($, ($) => Fiscaal(
        $,
    )),
    'Jaren': _p_cc($, ($) => Jaren(
        $,
    )),
})
export const Verwijzing_naar_Bankrekening: signatures.Verwijzing_naar_Bankrekening = ($) => sh.reference($)
export const Verwijzing_naar_Informele_rekening: signatures.Verwijzing_naar_Informele_rekening = ($) => sh.reference($)
