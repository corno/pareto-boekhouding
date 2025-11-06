import * as _ea from 'exupery-core-alg'
import * as _pt from 'exupery-core-types'
import * as _edev from 'exupery-core-dev'
import * as _ed from 'exupery-core-data'
import * as sh_g from 'exupery-core-data/dist/shorthands/unresolved_transformation'

import * as _i_out from "../../../../interface/generated/pareto/schemas/boekhouding/data_types/target"
import * as _i_signatures from "./signatures"

import { $$ as op_dictionary_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"
import { Signature } from "../../../../interface/algorithms/transformations/boekhouding_oude_model/boekhouding"


export const Beheer: _i_signatures.Beheer = ($) => ({
    'BTW-categorieen': sh_g.wrap_dictionary(_ea.cc($.Beheer['BTW-categorieen'], ($) => $.map(($): _i_out.Beheer.BTW$mi_categorieen.D<_ed.Source_Location> => ({
        'BTW-heffing': _ea.cc($['BTW-heffing'], ($) => _ea.cc($, ($): _i_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', ({
                    'BTW-promillage': _ea.cc($['BTW-promillage'], ($) => $),
                })]))
                default: return _ea.au($[0])
            }
        })),
    })))),
    'Gebruikers': sh_g.wrap_dictionary(_ea.cc($.Beheer['Gebruikers'], ($) => $.map(($) => ({
        'Volledige naam': _ea.cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _ea.cc($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _ea.cc($, ($): _i_out.Beheer.Grootboekrekeningen<_ed.Source_Location> => ({
        'Balans': sh_g.wrap_dictionary(_ea.cc($.Beheer['Balans'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _ea.cc($['Hoofdcategorie'], ($) => sh_g.wrap_reference($)),
            'Subcategorie': _ea.cc($['Subcategorie'], ($) => sh_g.wrap_reference($)),
            'Zijde': _ea.cc($['Zijde'], ($) => _ea.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Balans.D.Zijde<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Activa': return _ea.ss($, ($) => sh_g.wrap_state_group(['Activa', null]))
                    case 'Passiva': return _ea.ss($, ($) => sh_g.wrap_state_group(['Passiva', null]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
        'Resultaat': sh_g.wrap_dictionary(_ea.cc($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _ea.cc($['Hoofdcategorie'], ($) => sh_g.wrap_reference($)),
            'Subcategorie': _ea.cc($['Subcategorie'], ($) => sh_g.wrap_reference($)),
            'Zijde': _ea.cc($['Zijde'], ($) => _ea.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Kosten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _ea.cc($['Correctie op vennootschapsbelasting'], ($) => _ea.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting<_ed.Source_Location> => {
                            switch ($[0]) {
                                case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', ({
                                    'Correctietype': _ea.cc($['Correctietype'], ($) => sh_g.wrap_reference($)),
                                })]))
                                case 'Nee': return _ea.ss($, ($) => sh_g.wrap_state_group(['Nee', null]))
                                default: return _ea.au($[0])
                            }
                        })),
                    })]))
                    case 'Opbrengsten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', null]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
    })),
    'Klanten': sh_g.wrap_dictionary(_ea.cc($['Klanten'], ($) => $.map(($) => ({
        'Licentieovereenkomsten': _ea.cc($['Licentieovereenkomsten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Periodes': _ea.cc($['Periodes'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Bedrag': _ea.cc($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _ea.cc($['Projecten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Offertes': _ea.cc($['Offertes'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Opbrengsten': _ea.cc($['Opbrengsten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                    'Type': _ea.cc($['Type'], ($) => _ea.cc($, ($): _i_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type<_ed.Source_Location> => {
                        switch ($[0]) {
                            case 'Project': return _ea.ss($, ($) => sh_g.wrap_state_group(['Project', ({
                                'Bedrag': _ea.cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _ea.cc($['Betaaldatum'], ($) => $),
                            })]))
                            default: return _ea.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': sh_g.wrap_dictionary(_ea.cc($['Leveranciers'], ($) => $.map(($) => null))),
    'Medewerkers': sh_g.wrap_dictionary(_ea.cc($['Medewerkers'], ($) => $.map(($) => null))),
    'Rekeningen': _ea.cc($, ($) => ({
        'Bank': _ea.cc($.Bankrekeningen, ($) => sh_g.wrap_dictionary($.map(($) => null))),
        'Informeel': _ea.cc($['Informele rekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
    })),
})
export const Eerste_boekjaar: _i_signatures.Eerste_boekjaar = ($) => _ea.cc($, ($): _i_out.Eerste_boekjaar<_ed.Source_Location> => {
    switch ($[0]) {
        case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
        case 'Nee': return _ea.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
            'Vorig boekjaar': _ea.cc($['Vorig boekjaar'], ($) => sh_g.wrap_reference($)),
        })]))
        default: return _ea.au($[0])
    }
})
export const Fiscaal: _i_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _ea.cc($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _ea.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
        'Zijde': _ea.cc($['Zijde'], ($) => _ea.cc($, ($): _i_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Activa': return _ea.ss($, ($) => sh_g.wrap_state_group(['Activa', null]))
                case 'Passiva': return _ea.ss($, ($) => sh_g.wrap_state_group(['Passiva', null]))
                default: return _ea.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': sh_g.wrap_dictionary(_ea.cc($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.map(($) => ({
        'Subcategorieen': _ea.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
        'Zijde': _ea.cc($['Zijde'], ($) => _ea.cc($, ($): _i_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Kosten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', null]))
                default: return _ea.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: _i_signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _ea.cc($.Beheer.Balans.Hoofdcategorieen, ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _ea.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _ea.cc($['Hoofdcategorie fiscus'], ($) => sh_g.wrap_reference($)),
            'Subcategorie fiscus': _ea.cc($['Subcategorie fiscus'], ($) => sh_g.wrap_reference($)),
        })))),
        'Zijde': _ea.cc($['Zijde'], ($) => _ea.cc($, ($): _i_out.Grootboek_Categorieen.Balans.D.Zijde<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Activa': return _ea.ss($, ($) => sh_g.wrap_state_group(['Activa', null]))
                case 'Passiva': return _ea.ss($, ($) => sh_g.wrap_state_group(['Passiva', null]))
                default: return _ea.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _ea.cc($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Te corrigeren promillage': _ea.cc($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _ea.cc($.Beheer['Resultaat'].Hoofdcategorieen, ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _ea.cc($['Subcategorieen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _ea.cc($['Hoofdcategorie fiscus'], ($) => sh_g.wrap_reference($)),
            'Subcategorie fiscus': _ea.cc($['Subcategorie fiscus'], ($) => sh_g.wrap_reference($)),
        })))),
        'Zijde': _ea.cc($['Zijde'], ($) => _ea.cc($, ($): _i_out.Grootboek_Categorieen.Resultaat.D.Zijde<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Kosten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', null]))
                default: return _ea.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: _i_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _ea.cc($['Balans grootboekrekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Type': _ea.cc($['Type'], ($) => _ea.cc($, ($): _i_out.Grootboekrekeningen.Balans.D.Type<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Bankrekening': return _ea.ss($, ($) => sh_g.wrap_state_group(['Bankrekening', null]))
                case 'Informele rekening': return _ea.ss($, ($) => sh_g.wrap_state_group(['Informele rekening', null]))
                case 'Overig': return _ea.ss($, ($) => sh_g.wrap_state_group(['Overig', null]))
                default: return _ea.au($[0])
            }
        })),
    })))),
    'Resultaat': _ea.cc($['Resultaat grootboekrekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
})
export const Handelstransacties: _i_signatures.Handelstransacties = ($) => ({
    'Inkopen': _ea.cc($['Inkopen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Afhandeling': _ea.cc($['Afhandeling'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Afhandeling<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Mutaties': return _ea.ss($, ($) => sh_g.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _ea.ss($, ($) => sh_g.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _ea.cc($['Rekening courant'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _ea.au($[0])
            }
        })),
        'BTW-regime': _ea.cc($['BTW-regime'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Inkopen.D.BTW$mi_regime<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _ea.ss($, ($) => sh_g.wrap_state_group(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _ea.ss($, ($) => sh_g.wrap_state_group(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _ea.ss($, ($) => sh_g.wrap_state_group(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _ea.ss($, ($) => sh_g.wrap_state_group(['Intracommunautair', null]))
                case 'Standaard': return _ea.ss($, ($) => sh_g.wrap_state_group(['Standaard', ({
                    'BTW-periode': _ea.cc($['BTW-periode'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _ea.au($[0])
            }
        })),
        'Brondocument': _ea.cc($['Brondocument'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Brondocument<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Niet van toepassing': return _ea.ss($, ($) => sh_g.wrap_state_group(['Niet van toepassing', null]))
                case 'Ontbreekt': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ontbreekt', null]))
                case 'Toegevoegd': return _ea.ss($, ($) => sh_g.wrap_state_group(['Toegevoegd', ({
                    'Document': _ea.cc($['Document'], ($) => $),
                })]))
                case 'Nog toevoegen': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ontbreekt', null]))//FIXME!!!!
                default: return _ea.au($[0])
            }
        })),
        'Datum': _ea.cc($['Datum'], ($) => $),
        'Regels': _ea.cc($['Regels'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Bedrag': _ea.cc($['Bedrag'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Bekend': return _ea.ss($, ($) => sh_g.wrap_state_group(['Bekend', ({
                        'BTW-bedrag': _ea.cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _ea.cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
            'Omschrijving': _ea.cc($['Omschrijving'], ($) => $),
            'Type': _ea.cc($['Type'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Type<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Balans': return _ea.ss($, ($) => sh_g.wrap_state_group(['Balans', ({
                        'Balans item': _ea.cc($['Balans item'], ($) => sh_g.wrap_reference($)),
                    })]))
                    case 'Kosten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Kosten', ({
                        'Grootboekrekening': _ea.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
        'Type': _ea.cc($['Type'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Type<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Bonnetje': return _ea.ss($, ($) => sh_g.wrap_state_group(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _ea.ss($, ($) => sh_g.wrap_state_group(['Inkoop (met crediteur)', ({
                    'Crediteur': _ea.cc($['Crediteur'], ($) => sh_g.wrap_reference($)),
                    'Factuurnummer': _ea.cc($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _ea.ss($, ($) => sh_g.wrap_state_group(['Loonheffing', ({
                    'Ronde': _ea.cc($['Ronde'], ($) => sh_g.wrap_reference($)),
                })]))
                case 'Salaris': return _ea.ss($, ($) => sh_g.wrap_state_group(['Salaris', ({
                    'Medewerker': _ea.cc($['Medewerker'], ($) => sh_g.wrap_reference($)),
                    'Ronde': _ea.cc($['Ronde'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _ea.au($[0])
            }
        })),
    })))),
    'Verkopen': _ea.cc($['Verkopen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
        'Afhandeling': _ea.cc($['Afhandeling'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Afhandeling<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Mutaties': return _ea.ss($, ($) => sh_g.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _ea.ss($, ($) => sh_g.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _ea.cc($['Rekening courant'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _ea.au($[0])
            }
        })),
        'BTW-periode': _ea.cc($['BTW-periode'], ($) => sh_g.wrap_reference($)),
        'Betalingstermijn': _ea.cc($['Betalingstermijn'], ($) => $),
        'Brondocument': _ea.cc($['Brondocument'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Brondocument<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Toegevoegd': return _ea.ss($, ($) => sh_g.wrap_state_group(['Toegevoegd', ({
                    'Document': _ea.cc($['Document'], ($) => $),
                })]))
                default: return _ea.au($[0])
            }
        })),
        'Contracttype': _ea.cc($['Contracttype'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Contracttype<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _ea.ss($, ($) => sh_g.wrap_state_group(['Licentieovereenkomst', ({
                    'Overeenkomst': _ea.cc($['Overeenkomst'], ($) => sh_g.wrap_reference($)),
                })]))
                case 'Project': return _ea.ss($, ($) => sh_g.wrap_state_group(['Project', ({
                    'Offerte': _ea.cc($['Offerte'], ($) => sh_g.wrap_reference($)),
                    'Project': _ea.cc($['Project'], ($) => sh_g.wrap_reference($)),
                })]))
                default: return _ea.au($[0])
            }
        })),
        'Datum': _ea.cc($['Datum'], ($) => $),
        'Debiteur': _ea.cc($['Debiteur'], ($) => sh_g.wrap_reference($)),
        'Regels': _ea.cc($['Regels'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'BTW-regime': _ea.cc($['BTW-regime'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _ea.ss($, ($) => sh_g.wrap_state_group(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _ea.ss($, ($) => sh_g.wrap_state_group(['Intracommunautair', null]))
                    case 'Standaard': return _ea.ss($, ($) => sh_g.wrap_state_group(['Standaard', ({
                        'BTW-categorie': _ea.cc($['BTW-categorie'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _ea.cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _ea.cc($['Contracttype'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _ea.ss($, ($) => sh_g.wrap_state_group(['Licentieovereenkomst', ({
                        'Periode': _ea.cc($['Periode'], ($) => sh_g.wrap_reference($)),
                    })]))
                    case 'Los': return _ea.ss($, ($) => sh_g.wrap_state_group(['Los', null]))
                    case 'Project': return _ea.ss($, ($) => sh_g.wrap_state_group(['Project', ({
                        'Opbrengst': _ea.cc($['Opbrengst'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
            'Omschrijving': _ea.cc($['Omschrijving'], ($) => $),
            'Type': _ea.cc($['Type'], ($) => _ea.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Type<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Balans': return _ea.ss($, ($) => sh_g.wrap_state_group(['Balans', ({
                        'Balans item': _ea.cc($['Balans item'], ($) => sh_g.wrap_reference($)),
                    })]))
                    case 'Opbrengsten': return _ea.ss($, ($) => sh_g.wrap_state_group(['Opbrengsten', ({
                        'Grootboekrekening': _ea.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: _i_signatures.Jaarbeheer = ($) => ({
    'Balans': _ea.cc($, ($) => ({
        'Bankrekeningen': _ea.cc($['Bankrekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _ea.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _ea.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
            'Mutaties': _ea.cc($['Mutaties'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Bedrag': _ea.cc($['Bedrag'], ($) => $),
                'Datum': _ea.cc($['Datum'], ($) => $),
                'Omschrijving': _ea.cc($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _ea.cc($['Nieuw'], ($) => _ea.cc($, ($): _i_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
                    case 'Nee': return _ea.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
                        'Rekening': _ea.cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                            null
                        )),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _ea.cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _ea.cc($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _ea.cc($['Inkoop saldo'].Grootboekrekening, ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor Verkoop saldo': _ea.cc($['Verkoop saldo'].Grootboekrekening, ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _ea.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor resultaat dit jaar': _ea.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => sh_g.wrap_reference($)),
        'Grootboekrekening voor winstreserve': _ea.cc($['Grootboekrekening voor winstreserve'], ($) => sh_g.wrap_reference($)),
        'Informele rekeningen': _ea.cc($['Informele rekeningen'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _ea.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _ea.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
            'Nieuw': _ea.cc($['Nieuw'], ($) => _ea.cc($, ($): _i_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
                    case 'Nee': return _ea.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
                        'Rekening': _ea.cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                            null
                        )),
                    })]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
        'Overige balans items': _ea.cc($['Overige balans items'], ($) => sh_g.wrap_dictionary($.map(($) => Overige_balans_item(
            $,
            null
        )))),
        'Verrekenposten': _ea.cc($['Verrekenposten'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
    })),
    'Resultaat': _ea.cc($, ($) => ({
        'BTW periodes': _ea.cc($['BTW periodes'], ($) => sh_g.wrap_dictionary($.map(($) => ({
            '1. BTW-categorieen': _ea.cc($['1. BTW-categorieen'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
            'Documenten': _ea.cc($['Documenten'], ($) => sh_g.wrap_dictionary($.map(($) => ({
                'Bestand': _ea.cc($['Bestand'], ($) => $),
            })))),
            'Omschrijving': _ea.cc($['Omschrijving'], ($) => $),
            'Status': _ea.cc($['Status'], ($) => _ea.cc($, ($): _i_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Aangegeven': return _ea.ss($, ($) => sh_g.wrap_state_group(['Aangegeven', ({
                        'Afronding': _ea.cc($['Afronding'], ($) => $),
                        'Bedrag': _ea.cc($['Bedrag'], ($) => $),
                        'Datum': _ea.cc($['Datum'], ($) => $),
                    })]))
                    case 'Openstaand': return _ea.ss($, ($) => sh_g.wrap_state_group(['Openstaand', null]))
                    default: return _ea.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _ea.cc($['Grootboekrekening voor BTW afrondingen'], ($) => sh_g.wrap_reference($)),
        'Salarisrondes': _ea.cc($['Salarisrondes'], ($) => sh_g.wrap_dictionary($.map(($) => null))),
    })),
})
export const Jaren: _i_signatures.Jaren = ($, $p) => sh_g.wrap_dictionary($.Jaren.map(($, key) => ({
    'Afgesloten': _ea.cc($['Afgesloten'], ($) => _ea.cc($, ($): _i_out.Jaren.D.Afgesloten<_ed.Source_Location> => {
        switch ($[0]) {
            case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
            case 'Nee': return _ea.ss($, ($) => sh_g.wrap_state_group(['Nee', null]))
            default: return _ea.au($[0])
        }
    })),
    'Eerste boekjaar': _ea.cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
        null
    )),
    'Grootboekrekeningen': _ea.cc($, ($) => Grootboekrekeningen(
        $,
        null
    )),
    'Handelstransacties': _ea.cc($, ($) => Handelstransacties(
        $,
        null
    )),
    'Jaarbeheer': _ea.cc($, ($) => Jaarbeheer(
        $,
        null
    )),
    'Mutaties': _ea.cc($, ($) => Mutaties(
        $,
        {
            'jaar': key,
        }
    )),
    'Startdatum boekjaar': _ea.cc($['Startdatum boekjaar'], ($) => $),
})))
export const Mutaties: _i_signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _ea.cc($.Bankrekeningen, ($) => sh_g.wrap_dictionary($.map(($) => sh_g.wrap_dictionary(op_dictionary_filter($.Mutaties.map(($) => _ea.cc($.Status, ($): _pt.Optional_Value<_i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<_ed.Source_Location>> => {
        switch ($[0]) {
            case 'Nog te verwerken': return _ea.ss($, ($) => _ea.not_set())
            case 'Verwerkt': return _ea.ss($, ($) => _ea.set(_ea.cc($.Afhandeling, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<_ed.Source_Location> => {
                switch ($[0]) {
                    case 'Informele rekening': return _ea.ss($, ($) => sh_g.wrap_state_group(['Balans', sh_g.wrap_state_group(['Informele rekening', ({
                        'Informele rekening': _ea.cc($['Informele rekening'], ($) => sh_g.wrap_reference($)),
                    })])]))

                    case 'Verrekenpost': return _ea.ss($, ($) => sh_g.wrap_state_group(['Balans', sh_g.wrap_state_group(['Verrekenpost', ({
                        'Verrekenpost': _ea.cc($['Verrekenpost'], ($) => sh_g.wrap_reference($)),
                    })])]))

                    case 'BTW-periode': return _ea.ss($, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<_ed.Source_Location> => sh_g.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _ea.not_set()
                            : _ea.set(sh_g.wrap_reference($.Jaar)),
                        'type': sh_g.wrap_state_group(['BTW-periode', sh_g.wrap_reference($['BTW-periode'])])
                    }]))
                    case 'Inkoop': return _ea.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _ea.not_set()
                            : _ea.set(sh_g.wrap_reference($.Jaar)),
                        'type': sh_g.wrap_state_group(['Inkoop', sh_g.wrap_reference($['Inkoop'])])
                    }]))
                    case 'Verkoop': return _ea.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _ea.not_set()
                            : _ea.set(sh_g.wrap_reference($.Jaar)),
                        'type': sh_g.wrap_state_group(['Verkoop', sh_g.wrap_reference($['Verkoop'])])
                    }]))
                    default: return _ea.au($[0])
                }
            })))
            default: return _ea.au($[0])
        }
    }))))))),
    'Memoriaal boekingen': _ea.cc($['Overige balans items'], ($) => sh_g.wrap_dictionary($.map(($) => sh_g.wrap_dictionary($['Memoriaal boekingen'].map(($) => ({
        'Bedrag': _ea.cc($['Bedrag'], ($) => $),
        'Datum': _ea.cc($['Datum'], ($) => $),
        'Grootboekrekening': _ea.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
        'Omschrijving': _ea.cc($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _ea.cc($.Verrekenposten, ($) => sh_g.wrap_dictionary($.map(($) => sh_g.wrap_dictionary($.Mutaties.map(($) => ({
        'Afhandeling': _ea.cc($['Afhandeling'], ($) => _ea.cc($, ($): _i_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling<_ed.Source_Location> => {
            switch ($[0]) {
                case 'Informele rekening': return _ea.ss($, ($) => sh_g.wrap_state_group(['Balans', sh_g.wrap_state_group(['Informele rekening', ({
                    'Informele rekening': _ea.cc($['Informele rekening'], ($) => sh_g.wrap_reference($)),
                })])]))

                case 'BTW-periode': return _ea.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _ea.not_set()
                        : _ea.set(sh_g.wrap_reference($.Jaar)),
                    'type': sh_g.wrap_state_group(['BTW-periode', sh_g.wrap_reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _ea.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _ea.not_set()
                        : _ea.set(sh_g.wrap_reference($.Jaar)),
                    'type': sh_g.wrap_state_group(['Inkoop', sh_g.wrap_reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _ea.ss($, ($) => sh_g.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _ea.not_set()
                        : _ea.set(sh_g.wrap_reference($.Jaar)),
                    'type': sh_g.wrap_state_group(['Verkoop', sh_g.wrap_reference($['Verkoop'])])
                }]))
                default: return _ea.au($[0])
            }
        })),
        'Bedrag': _ea.cc($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: _i_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _ea.cc($, ($) => $.Beginsaldo),
    'Grootboekrekening': _ea.cc($['Grootboekrekening'], ($) => sh_g.wrap_reference($)),
    'Nieuw': _ea.cc($['Nieuw'], ($) => _ea.cc($, ($): _i_out.Overige_balans_item.Nieuw<_ed.Source_Location> => {
        switch ($[0]) {
            case 'Ja': return _ea.ss($, ($) => sh_g.wrap_state_group(['Ja', null]))
            case 'Nee': return _ea.ss($, ($) => sh_g.wrap_state_group(['Nee', ({
                'Balans item': _ea.cc($['Balans item'], ($) => sh_g.wrap_reference($)),
            })]))
            default: return _ea.au($[0])
        }
    })),
})
export const Root: _i_signatures.Root = ($) => ({
    'Beheer': _ea.cc($, ($) => Beheer(
        $,
        null
    )),
    'Categorieen': _ea.cc($, ($) => Grootboek_Categorieen(
        $,
        null
    )),
    'Fiscaal': _ea.cc($, ($) => Fiscaal(
        $,
        null
    )),
    'Jaren': _ea.cc($, ($) => Jaren(
        $,
        null
    )),
})
export const Verwijzing_naar_Bankrekening: _i_signatures.Verwijzing_naar_Bankrekening = ($) => sh_g.wrap_reference($)
export const Verwijzing_naar_Informele_rekening: _i_signatures.Verwijzing_naar_Informele_rekening = ($) => sh_g.wrap_reference($)
