import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as sh_g from 'pareto-core-transformer/dist/deprecated_shorthands_for_unresolved'

import * as _i_out from "../../../../interface/generated/pareto/schemas/boekhouding/data_types/target"
import * as _i_signatures from "../../../../interface/signatures/transformers/boekhouding/oude_model"

export const Beheer: _i_signatures.Beheer = ($) => ({
    'BTW-categorieen': sh_g.wrap_dictionary(_pt.cc($.Beheer['BTW-categorieen'], ($) => $.map(($): _i_out.Beheer.BTW$mi_categorieen.D<_pi.Deprecated_Source_Location> => ({
        'BTW-heffing': _pt.cc($['BTW-heffing'], ($) => _pt.cc($, ($): _i_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', ({
                    'BTW-promillage': _pt.cc($['BTW-promillage'], ($) => $),
                })]))
                case 'Nee': return _pt.ss($, ($) => _pt.deprecated_panic("SDFS"))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Gebruikers': sh_g.wrap_dictionary(_pt.cc($.Beheer['Gebruikers'], ($) => $.map(($) => ({
        'Volledige naam': _pt.cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _pt.cc($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen<_pi.Deprecated_Source_Location> => ({
        'Balans': sh_g.wrap_dictionary(_pt.cc($.Beheer['Balans'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _pt.cc($['Hoofdcategorie'], ($) => sh_g.wrap_reference($)),
            'Subcategorie': _pt.cc($['Subcategorie'], ($) => sh_g.wrap_reference($)),
            'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Balans.D.Zijde<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Activa': return _pt.ss($, ($) => sh_g.wrap_state_group(['Activa', null]))
                    case 'Passiva': return _pt.ss($, ($) => sh_g.wrap_state_group(['Passiva', null]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Resultaat': sh_g.wrap_dictionary(_pt.cc($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _pt.cc($['Hoofdcategorie'], ($) => sh_g.wrap_reference($)),
            'Subcategorie': _pt.cc($['Subcategorie'], ($) => sh_g.wrap_reference($)),
            'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Kosten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _pt.cc($['Correctie op vennootschapsbelasting'], ($) => _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting<_pi.Deprecated_Source_Location> => {
                            switch ($[0]) {
                                case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', ({
                                    'Correctietype': _pt.cc($['Correctietype'], ($) => sh_g.wrap_reference($)),
                                })]))
                                case 'Nee': return _pt.ss($, ($) => sh_g.wrap_state_group(['Nee', null]))
                                default: return _pt.au($[0])
                            }
                        })),
                    })]))
                    case 'Opbrengsten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', null]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
    })),
    'Klanten': sh_g.wrap_dictionary(_pt.cc($['Klanten'], ($) => $.map(($) => ({
        'Licentieovereenkomsten': _pt.cc($['Licentieovereenkomsten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Periodes': _pt.cc($['Periodes'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Bedrag': _pt.cc($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _pt.cc($['Projecten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Offertes': _pt.cc($['Offertes'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Opbrengsten': _pt.cc($['Opbrengsten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                    'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type<_pi.Deprecated_Source_Location> => {
                        switch ($[0]) {
                            case 'Project': return _pt.ss($, ($) => sh_g.wrap_state_group(['Project', ({
                                'Bedrag': _pt.cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _pt.cc($['Betaaldatum'], ($) => $),
                            })]))
                            default: return _pt.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': sh_g.wrap_dictionary(_pt.cc($['Leveranciers'], ($) => $.map(($) => null))),
    'Medewerkers': sh_g.wrap_dictionary(_pt.cc($['Medewerkers'], ($) => $.map(($) => null))),
    'Rekeningen': _pt.cc($, ($) => ({
        'Bank': _pt.cc($.Bankrekeningen, ($) => sh_g.wrap_dictionary($.map(($) => null))),
        'Informeel': _pt.cc($['Informele rekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
    })),
})
export const Eerste_boekjaar: _i_signatures.Eerste_boekjaar = ($) => _pt.cc($, ($): _i_out.Eerste_boekjaar<_pi.Deprecated_Source_Location> => {
    switch ($[0]) {
        case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
        case 'Nee': return _pt.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
            'Vorig boekjaar': _pt.cc($['Vorig boekjaar'], ($) => sh_g.wrap_reference($)),
        })]))
        default: return _pt.au($[0])
    }
})
export const Fiscaal: _i_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _pt.cc($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Activa': return _pt.ss($, ($) => sh_g.wrap_state_group(['Activa', null]))
                case 'Passiva': return _pt.ss($, ($) => sh_g.wrap_state_group(['Passiva', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': sh_g.wrap_dictionary(_pt.cc($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Kosten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: _i_signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _pt.cc($.Beheer.Balans.Hoofdcategorieen, ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _pt.cc($['Hoofdcategorie fiscus'], ($) => sh_g.wrap_reference($)),
            'Subcategorie fiscus': _pt.cc($['Subcategorie fiscus'], ($) => sh_g.wrap_reference($)),
        })))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Grootboek_Categorieen.Balans.D.Zijde<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Activa': return _pt.ss($, ($) => sh_g.wrap_state_group(['Activa', null]))
                case 'Passiva': return _pt.ss($, ($) => sh_g.wrap_state_group(['Passiva', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _pt.cc($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Te corrigeren promillage': _pt.cc($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _pt.cc($.Beheer['Resultaat'].Hoofdcategorieen, ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _pt.cc($['Hoofdcategorie fiscus'], ($) => sh_g.wrap_reference($)),
            'Subcategorie fiscus': _pt.cc($['Subcategorie fiscus'], ($) => sh_g.wrap_reference($)),
        })))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Grootboek_Categorieen.Resultaat.D.Zijde<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Kosten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: _i_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _pt.cc($['Balans grootboekrekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Grootboekrekeningen.Balans.D.Type<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Bankrekening': return _pt.ss($, ($) => sh_g.wrap_state_group(['Bankrekening', null]))
                case 'Informele rekening': return _pt.ss($, ($) => sh_g.wrap_state_group(['Informele rekening', null]))
                case 'Overig': return _pt.ss($, ($) => sh_g.wrap_state_group(['Overig', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Resultaat': _pt.cc($['Resultaat grootboekrekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
})
export const Handelstransacties: _i_signatures.Handelstransacties = ($) => ({
    'Inkopen': _pt.cc($['Inkopen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Afhandeling': _pt.cc($['Afhandeling'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Afhandeling<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Mutaties': return _pt.ss($, ($) => sh_g.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _pt.ss($, ($) => sh_g.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _pt.cc($['Rekening courant'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'BTW-regime': _pt.cc($['BTW-regime'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.BTW$mi_regime<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _pt.ss($, ($) => sh_g.wrap_state_group(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _pt.ss($, ($) => sh_g.wrap_state_group(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _pt.ss($, ($) => sh_g.wrap_state_group(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _pt.ss($, ($) => sh_g.wrap_state_group(['Intracommunautair', null]))
                case 'Standaard': return _pt.ss($, ($) => sh_g.wrap_state_group(['Standaard', ({
                    'BTW-periode': _pt.cc($['BTW-periode'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'Brondocument': _pt.cc($['Brondocument'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Brondocument<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Niet van toepassing': return _pt.ss($, ($) => sh_g.wrap_state_group(['Niet van toepassing', null]))
                case 'Ontbreekt': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ontbreekt', null]))
                case 'Toegevoegd': return _pt.ss($, ($) => sh_g.wrap_state_group(['Toegevoegd', ({
                    'Document': _pt.cc($['Document'], ($) => $),
                })]))
                case 'Nog toevoegen': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ontbreekt', null]))//FIXME!!!!
                default: return _pt.au($[0])
            }
        })),
        'Datum': _pt.cc($['Datum'], ($) => $),
        'Regels': _pt.cc($['Regels'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Bedrag': _pt.cc($['Bedrag'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Bekend': return _pt.ss($, ($) => sh_g.wrap_state_group(['Bekend', ({
                        'BTW-bedrag': _pt.cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _pt.cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
            'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Type<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Balans': return _pt.ss($, ($) => sh_g.wrap_state_group(['Balans', ({
                        'Balans item': _pt.cc($['Balans item'], ($) => sh_g.wrap_reference($)),
                    })]))
                    case 'Kosten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Kosten', ({
                        'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Type<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Bonnetje': return _pt.ss($, ($) => sh_g.wrap_state_group(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _pt.ss($, ($) => sh_g.wrap_state_group(['Inkoop (met crediteur)', ({
                    'Crediteur': _pt.cc($['Crediteur'], ($) => sh_g.wrap_reference($)),
                    'Factuurnummer': _pt.cc($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _pt.ss($, ($) => sh_g.wrap_state_group(['Loonheffing', ({
                    'Ronde': _pt.cc($['Ronde'], ($) => sh_g.wrap_reference($)),
                })]))
                case 'Salaris': return _pt.ss($, ($) => sh_g.wrap_state_group(['Salaris', ({
                    'Medewerker': _pt.cc($['Medewerker'], ($) => sh_g.wrap_reference($)),
                    'Ronde': _pt.cc($['Ronde'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Verkopen': _pt.cc($['Verkopen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Afhandeling': _pt.cc($['Afhandeling'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Afhandeling<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Mutaties': return _pt.ss($, ($) => sh_g.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _pt.ss($, ($) => sh_g.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _pt.cc($['Rekening courant'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'BTW-periode': _pt.cc($['BTW-periode'], ($) => sh_g.wrap_reference($)),
        'Betalingstermijn': _pt.cc($['Betalingstermijn'], ($) => $),
        'Brondocument': _pt.cc($['Brondocument'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Brondocument<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Toegevoegd': return _pt.ss($, ($) => sh_g.wrap_state_group(['Toegevoegd', ({
                    'Document': _pt.cc($['Document'], ($) => $),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'Contracttype': _pt.cc($['Contracttype'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Contracttype<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _pt.ss($, ($) => sh_g.wrap_state_group(['Licentieovereenkomst', ({
                    'Overeenkomst': _pt.cc($['Overeenkomst'], ($) => sh_g.wrap_reference($)),
                })]))
                case 'Project': return _pt.ss($, ($) => sh_g.wrap_state_group(['Project', ({
                    'Offerte': _pt.cc($['Offerte'], ($) => sh_g.wrap_reference($)),
                    'Project': _pt.cc($['Project'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'Datum': _pt.cc($['Datum'], ($) => $),
        'Debiteur': _pt.cc($['Debiteur'], ($) => sh_g.wrap_reference($)),
        'Regels': _pt.cc($['Regels'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'BTW-regime': _pt.cc($['BTW-regime'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _pt.ss($, ($) => sh_g.wrap_state_group(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _pt.ss($, ($) => sh_g.wrap_state_group(['Intracommunautair', null]))
                    case 'Standaard': return _pt.ss($, ($) => sh_g.wrap_state_group(['Standaard', ({
                        'BTW-categorie': _pt.cc($['BTW-categorie'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _pt.cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _pt.cc($['Contracttype'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _pt.ss($, ($) => sh_g.wrap_state_group(['Licentieovereenkomst', ({
                        'Periode': _pt.cc($['Periode'], ($) => sh_g.wrap_reference($)),
                    })]))
                    case 'Los': return _pt.ss($, ($) => sh_g.wrap_state_group(['Los', null]))
                    case 'Project': return _pt.ss($, ($) => sh_g.wrap_state_group(['Project', ({
                        'Opbrengst': _pt.cc($['Opbrengst'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
            'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Type<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Balans': return _pt.ss($, ($) => sh_g.wrap_state_group(['Balans', ({
                        'Balans item': _pt.cc($['Balans item'], ($) => sh_g.wrap_reference($)),
                    })]))
                    case 'Opbrengsten': return _pt.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', ({
                        'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: _i_signatures.Jaarbeheer = ($) => ({
    'Balans': _pt.cc($, ($) => ({
        'Bankrekeningen': _pt.cc($['Bankrekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _pt.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
            'Mutaties': _pt.cc($['Mutaties'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Bedrag': _pt.cc($['Bedrag'], ($) => $),
                'Datum': _pt.cc($['Datum'], ($) => $),
                'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _pt.cc($['Nieuw'], ($) => _pt.cc($, ($): _i_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
                    case 'Nee': return _pt.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
                        'Rekening': _pt.cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                            null
                        )),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _pt.cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _pt.cc($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _pt.cc($['Inkoop saldo'].Grootboekrekening, ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor Verkoop saldo': _pt.cc($['Verkoop saldo'].Grootboekrekening, ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _pt.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor resultaat dit jaar': _pt.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor winstreserve': _pt.cc($['Grootboekrekening voor winstreserve'], ($) => sh_g.wrap_reference($)),
        'Informele rekeningen': _pt.cc($['Informele rekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _pt.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
            'Nieuw': _pt.cc($['Nieuw'], ($) => _pt.cc($, ($): _i_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
                    case 'Nee': return _pt.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
                        'Rekening': _pt.cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                            null
                        )),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Overige balans items': _pt.cc($['Overige balans items'], ($) => sh_g.wrap_dictionary($.map(($) => Overige_balans_item(
            $,
            null
        )))),
        'Verrekenposten': _pt.cc($['Verrekenposten'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
    })),
    'Resultaat': _pt.cc($, ($) => ({
        'BTW periodes': _pt.cc($['BTW periodes'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            '1. BTW-categorieen': _pt.cc($['1. BTW-categorieen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
            'Documenten': _pt.cc($['Documenten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Bestand': _pt.cc($['Bestand'], ($) => $),
            })))),
            'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            'Status': _pt.cc($['Status'], ($) => _pt.cc($, ($): _i_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Aangegeven': return _pt.ss($, ($) => sh_g.wrap_state_group(['Aangegeven', ({
                        'Afronding': _pt.cc($['Afronding'], ($) => $),
                        'Bedrag': _pt.cc($['Bedrag'], ($) => $),
                        'Datum': _pt.cc($['Datum'], ($) => $),
                    })]))
                    case 'Openstaand': return _pt.ss($, ($) => sh_g.wrap_state_group(['Openstaand', null]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _pt.cc($['Grootboekrekening voor BTW afrondingen'], ($) => sh_g.wrap_reference($)),
        'Salarisrondes': _pt.cc($['Salarisrondes'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
    })),
})
export const Jaren: _i_signatures.Jaren = ($, $p) => sh_g.wrap_dictionary($.Jaren.map(($, key) => ({
    'Afgesloten': _pt.cc($['Afgesloten'], ($) => _pt.cc($, ($): _i_out.Jaren.D.Afgesloten<_pi.Deprecated_Source_Location> => {
        switch ($[0]) {
            case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
            case 'Nee': return _pt.ss($, ($) => sh_g.wrap_state_group(['Nee', null]))
            default: return _pt.au($[0])
        }
    })),
    'Eerste boekjaar': _pt.cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
        null
    )),
    'Grootboekrekeningen': _pt.cc($, ($) => Grootboekrekeningen(
        $,
        null
    )),
    'Handelstransacties': _pt.cc($, ($) => Handelstransacties(
        $,
        null
    )),
    'Jaarbeheer': _pt.cc($, ($) => Jaarbeheer(
        $,
        null
    )),
    'Mutaties': _pt.cc($, ($) => Mutaties(
        $,
        {
            'jaar': key,
        }
    )),
    'Startdatum boekjaar': _pt.cc($['Startdatum boekjaar'], ($) => $),
})))
export const Mutaties: _i_signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _pt.cc($.Bankrekeningen, ($) => sh_g.wrap_dictionary($.map(($) => sh_g.wrap_dictionary($.Mutaties.filter(($) => _pt.cc($.Status, ($): _pi.Optional_Value<_i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<_pi.Deprecated_Source_Location>> => {
        switch ($[0]) {
            case 'Nog te verwerken': return _pt.ss($, ($) => _pt.not_set())
            case 'Verwerkt': return _pt.ss($, ($) => _pt.set(_pt.cc($.Afhandeling, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<_pi.Deprecated_Source_Location> => {
                switch ($[0]) {
                    case 'Informele rekening': return _pt.ss($, ($) => sh_g.wrap_state_group(['Balans', sh_g.wrap_state_group(['Informele rekening', ({
                        'Informele rekening': _pt.cc($['Informele rekening'], ($) => sh_g.wrap_reference($)),
                    })])]))

                    case 'Verrekenpost': return _pt.ss($, ($) => sh_g.wrap_state_group(['Balans', sh_g.wrap_state_group(['Verrekenpost', ({
                        'Verrekenpost': _pt.cc($['Verrekenpost'], ($) => sh_g.wrap_reference($)),
                    })])]))

                    case 'BTW-periode': return _pt.ss($, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<_pi.Deprecated_Source_Location> => sh_g.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _pt.not_set()
                            : _pt.set(sh_g.wrap_reference($.Jaar)),
                        'type': sh_g.wrap_state_group(['BTW-periode', sh_g.wrap_reference($['BTW-periode'])])
                    }]))
                    case 'Inkoop': return _pt.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _pt.not_set()
                            : _pt.set(sh_g.wrap_reference($.Jaar)),
                        'type': sh_g.wrap_state_group(['Inkoop', sh_g.wrap_reference($['Inkoop'])])
                    }]))
                    case 'Verkoop': return _pt.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _pt.not_set()
                            : _pt.set(sh_g.wrap_reference($.Jaar)),
                        'type': sh_g.wrap_state_group(['Verkoop', sh_g.wrap_reference($['Verkoop'])])
                    }]))
                    default: return _pt.au($[0])
                }
            })))
            default: return _pt.au($[0])
        }
    })))))),
    'Memoriaal boekingen': _pt.cc($['Overige balans items'], ($) => sh_g.wrap_dictionary($.map(($) => sh_g.wrap_dictionary($['Memoriaal boekingen'].map(($) => ({
        'Bedrag': _pt.cc($['Bedrag'], ($) => $),
        'Datum': _pt.cc($['Datum'], ($) => $),
        'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
        'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _pt.cc($.Verrekenposten, ($) => sh_g.wrap_dictionary($.map(($) => sh_g.wrap_dictionary($.Mutaties.map(($) => ({
        'Afhandeling': _pt.cc($['Afhandeling'], ($) => _pt.cc($, ($): _i_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'Informele rekening': return _pt.ss($, ($) => sh_g.wrap_state_group(['Balans', sh_g.wrap_state_group(['Informele rekening', ({
                    'Informele rekening': _pt.cc($['Informele rekening'], ($) => sh_g.wrap_reference($)),
                })])]))

                case 'BTW-periode': return _pt.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _pt.not_set()
                        : _pt.set(sh_g.wrap_reference($.Jaar)),
                    'type': sh_g.wrap_state_group(['BTW-periode', sh_g.wrap_reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _pt.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _pt.not_set()
                        : _pt.set(sh_g.wrap_reference($.Jaar)),
                    'type': sh_g.wrap_state_group(['Inkoop', sh_g.wrap_reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _pt.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _pt.not_set()
                        : _pt.set(sh_g.wrap_reference($.Jaar)),
                    'type': sh_g.wrap_state_group(['Verkoop', sh_g.wrap_reference($['Verkoop'])])
                }]))
                default: return _pt.au($[0])
            }
        })),
        'Bedrag': _pt.cc($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: _i_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _pt.cc($, ($) => $.Beginsaldo),
    'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
    'Nieuw': _pt.cc($['Nieuw'], ($) => _pt.cc($, ($): _i_out.Overige_balans_item.Nieuw<_pi.Deprecated_Source_Location> => {
        switch ($[0]) {
            case 'Ja': return _pt.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
            case 'Nee': return _pt.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
                'Balans item': _pt.cc($['Balans item'], ($) => sh_g.wrap_reference($)),
            })]))
            default: return _pt.au($[0])
        }
    })),
})
export const Root: _i_signatures.Root = ($) => ({
    'Beheer': _pt.cc($, ($) => Beheer(
        $,
        null
    )),
    'Categorieen': _pt.cc($, ($) => Grootboek_Categorieen(
        $,
        null
    )),
    'Fiscaal': _pt.cc($, ($) => Fiscaal(
        $,
        null
    )),
    'Jaren': _pt.cc($, ($) => Jaren(
        $,
        null
    )),
})
export const Verwijzing_naar_Bankrekening: _i_signatures.Verwijzing_naar_Bankrekening = ($) => sh_g.wrap_reference($)
export const Verwijzing_naar_Informele_rekening: _i_signatures.Verwijzing_naar_Informele_rekening = ($) => sh_g.wrap_reference($)
