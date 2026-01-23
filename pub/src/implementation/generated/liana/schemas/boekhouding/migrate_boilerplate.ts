
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"
export const Fiscaal: t_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p.deprecated_cc($['Balans Hoofdcategorieen'], ($) => $.__d_map(($) => ({
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): t_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => ['Activa', null])
                case 'Passiva': return _p.ss($, ($) => ['Passiva', null])
                default: return _p.au($[0])
            }
        })),
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => $.__d_map(($) => null)),
    }))),
    'Resultaat Hoofdcategorieen': _p.deprecated_cc($['Resultaat Hoofdcategorieen'], ($) => $.__d_map(($) => ({
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => ['Kosten', null])
                case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', null])
                default: return _p.au($[0])
            }
        })),
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => $.__d_map(($) => null)),
    }))),
})
export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ({
    'Correctietypes vennootschapsbelasting': _p.deprecated_cc($['Correctietypes vennootschapsbelasting'], ($) => $.__d_map(($) => ({
        'Te corrigeren promillage': _p.deprecated_cc($['Te corrigeren promillage'], ($) => $),
    }))),
    'Balans': _p.deprecated_cc($['Balans'], ($) => $.__d_map(($) => ({
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): t_out.Grootboek_Categorieen.Balans.D.Zijde => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => ['Activa', null])
                case 'Passiva': return _p.ss($, ($) => ['Passiva', null])
                default: return _p.au($[0])
            }
        })),
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => $.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($) => $['key']),
            'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($) => $['key']),
        }))),
    }))),
    'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => $.__d_map(($) => ({
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): t_out.Grootboek_Categorieen.Resultaat.D.Zijde => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => ['Kosten', null])
                case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', null])
                default: return _p.au($[0])
            }
        })),
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => $.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($) => $['key']),
            'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($) => $['key']),
        }))),
    }))),
})
export const Beheer: t_signatures.Beheer = ($) => ({
    'BTW-categorieen': _p.deprecated_cc($['BTW-categorieen'], ($) => $.__d_map(($) => ({
        'BTW-heffing': _p.deprecated_cc($['BTW-heffing'], ($) => _p.deprecated_cc($, ($): t_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => ['Ja', ({
                    'BTW-promillage': _p.deprecated_cc($['BTW-promillage'], ($) => $),
                })])
                default: return _p.au($[0])
            }
        })),
    }))),
    'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($) => ({
        'Balans': _p.deprecated_cc($['Balans'], ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($) => $['key']),
            'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($) => $['key']),
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): t_out.Beheer.Grootboekrekeningen.Balans.D.Zijde => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => ['Activa', null])
                    case 'Passiva': return _p.ss($, ($) => ['Passiva', null])
                    default: return _p.au($[0])
                }
            })),
        }))),
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($) => $['key']),
            'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($) => $['key']),
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): t_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => ['Kosten', ({
                        'Correctie op vennootschapsbelasting': _p.deprecated_cc($['Correctie op vennootschapsbelasting'], ($) => _p.deprecated_cc($, ($): t_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                            switch ($[0]) {
                                case 'Ja': return _p.ss($, ($) => ['Ja', ({
                                    'Correctietype': _p.deprecated_cc($['Correctietype'], ($) => $['key']),
                                })])
                                case 'Nee': return _p.ss($, ($) => ['Nee', null])
                                default: return _p.au($[0])
                            }
                        })),
                    })])
                    case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', null])
                    default: return _p.au($[0])
                }
            })),
        }))),
    })),
    'Rekeningen': _p.deprecated_cc($['Rekeningen'], ($) => ({
        'Bank': _p.deprecated_cc($['Bank'], ($) => $.__d_map(($) => null)),
        'Informeel': _p.deprecated_cc($['Informeel'], ($) => $.__d_map(($) => null)),
    })),
    'Gebruikers': _p.deprecated_cc($['Gebruikers'], ($) => $.__d_map(($) => ({
        'Volledige naam': _p.deprecated_cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _p.deprecated_cc($['Wachtwoord'], ($) => $),
    }))),
    'Klanten': _p.deprecated_cc($['Klanten'], ($) => $.__d_map(($) => ({
        'Licentieovereenkomsten': _p.deprecated_cc($['Licentieovereenkomsten'], ($) => $.__d_map(($) => ({
            'Periodes': _p.deprecated_cc($['Periodes'], ($) => $.__d_map(($) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
            }))),
        }))),
        'Projecten': _p.deprecated_cc($['Projecten'], ($) => $.__d_map(($) => ({
            'Offertes': _p.deprecated_cc($['Offertes'], ($) => $.__d_map(($) => ({
                'Opbrengsten': _p.deprecated_cc($['Opbrengsten'], ($) => $.__d_map(($) => ({
                    'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                        switch ($[0]) {
                            case 'Project': return _p.ss($, ($) => ['Project', ({
                                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _p.deprecated_cc($['Betaaldatum'], ($) => $),
                            })])
                            default: return _p.au($[0])
                        }
                    })),
                }))),
            }))),
        }))),
    }))),
    'Leveranciers': _p.deprecated_cc($['Leveranciers'], ($) => $.__d_map(($) => null)),
    'Medewerkers': _p.deprecated_cc($['Medewerkers'], ($) => $.__d_map(($) => null)),
})
export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p.deprecated_cc($['Balans'], ($) => $.__d_map(($) => ({
        'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): t_out.Grootboekrekeningen.Balans.D.Type => {
            switch ($[0]) {
                case 'Bankrekening': return _p.ss($, ($) => ['Bankrekening', null])
                case 'Overig': return _p.ss($, ($) => ['Overig', null])
                case 'Informele rekening': return _p.ss($, ($) => ['Informele rekening', null])
                default: return _p.au($[0])
            }
        })),
    }))),
    'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => $.__d_map(($) => null)),
})
export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ({
    'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => ({
        'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($) => $['key']),
        'Salarisrondes': _p.deprecated_cc($['Salarisrondes'], ($) => $.__d_map(($) => null)),
        'BTW periodes': _p.deprecated_cc($['BTW periodes'], ($) => $.__d_map(($) => ({
            '1. BTW-categorieen': _p.deprecated_cc($['1. BTW-categorieen'], ($) => $.__d_map(($) => null)),
            'Documenten': _p.deprecated_cc($['Documenten'], ($) => $.__d_map(($) => ({
                'Bestand': _p.deprecated_cc($['Bestand'], ($) => $),
            }))),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            'Status': _p.deprecated_cc($['Status'], ($) => _p.deprecated_cc($, ($): t_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status => {
                switch ($[0]) {
                    case 'Aangegeven': return _p.ss($, ($) => ['Aangegeven', ({
                        'Afronding': _p.deprecated_cc($['Afronding'], ($) => $),
                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
                        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
                    })])
                    case 'Openstaand': return _p.ss($, ($) => ['Openstaand', null])
                    default: return _p.au($[0])
                }
            })),
        }))),
    })),
    'Balans': _p.deprecated_cc($['Balans'], ($) => ({
        'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => $['key']),
        'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($) => $['key']),
        'Grootboekrekening voor winstreserve': _p.deprecated_cc($['Grootboekrekening voor winstreserve'], ($) => $['key']),
        'Grootboekrekening voor Inkoop saldo': _p.deprecated_cc($['Grootboekrekening voor Inkoop saldo'], ($) => $['key']),
        'Grootboekrekening voor Verkoop saldo': _p.deprecated_cc($['Grootboekrekening voor Verkoop saldo'], ($) => $['key']),
        'Beginsaldo nog aan te geven BTW': _p.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _p.deprecated_cc($['Beginsaldo winstreserve'], ($) => $),
        'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($) => $.__d_map(($) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => $['key']),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => _p.deprecated_cc($, ($): t_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => ['Ja', null])
                    case 'Nee': return _p.ss($, ($) => ['Nee', ({
                        'Rekening': _p.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $
                        )),
                    })])
                    default: return _p.au($[0])
                }
            })),
        }))),
        'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($) => $.__d_map(($) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => $['key']),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => _p.deprecated_cc($, ($): t_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => ['Ja', null])
                    case 'Nee': return _p.ss($, ($) => ['Nee', ({
                        'Rekening': _p.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $
                        )),
                    })])
                    default: return _p.au($[0])
                }
            })),
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($) => $.__d_map(($) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
                'Datum': _p.deprecated_cc($['Datum'], ($) => $),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            }))),
        }))),
        'Overige balans items': _p.deprecated_cc($['Overige balans items'], ($) => $.__d_map(($) => Overige_balans_item(
            $
        ))),
        'Verrekenposten': _p.deprecated_cc($['Verrekenposten'], ($) => $.__d_map(($) => null)),
    })),
})
export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => $),
    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => $['key']),
    'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => _p.deprecated_cc($, ($): t_out.Overige_balans_item.Nieuw => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => ['Ja', null])
            case 'Nee': return _p.ss($, ($) => ['Nee', ({
                'Balans item': _p.deprecated_cc($['Balans item'], ($) => $['key']),
            })])
            default: return _p.au($[0])
        }
    })),
})
export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => $['key']
export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => $['key']
export const Handelstransacties: t_signatures.Handelstransacties = ($) => ({
    'Inkopen': _p.deprecated_cc($['Inkopen'], ($) => $.__d_map(($) => ({
        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Inkopen.D.Afhandeling => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => ['Mutaties', null])
                case 'Rekening courant': return _p.ss($, ($) => ['Rekening courant', ({
                    'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($) => $['key']),
                })])
                default: return _p.au($[0])
            }
        })),
        'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Inkopen.D.BTW$mi_regime => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _p.ss($, ($) => ['Binnenland: heffing verlegd', null])
                case 'Geen BTW van toepassing': return _p.ss($, ($) => ['Geen BTW van toepassing', null])
                case 'Import van buiten de EU': return _p.ss($, ($) => ['Import van buiten de EU', null])
                case 'Intracommunautair': return _p.ss($, ($) => ['Intracommunautair', null])
                case 'Standaard': return _p.ss($, ($) => ['Standaard', ({
                    'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($) => $['key']),
                })])
                default: return _p.au($[0])
            }
        })),
        'Brondocument': _p.deprecated_cc($['Brondocument'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Inkopen.D.Brondocument => {
            switch ($[0]) {
                case 'Toegevoegd': return _p.ss($, ($) => ['Toegevoegd', ({
                    'Document': _p.deprecated_cc($['Document'], ($) => $),
                })])
                case 'Niet van toepassing': return _p.ss($, ($) => ['Niet van toepassing', null])
                case 'Ontbreekt': return _p.ss($, ($) => ['Ontbreekt', null])
                default: return _p.au($[0])
            }
        })),
        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
        'Regels': _p.deprecated_cc($['Regels'], ($) => $.__d_map(($) => ({
            'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag => {
                switch ($[0]) {
                    case 'Bekend': return _p.ss($, ($) => ['Bekend', ({
                        'BTW-bedrag': _p.deprecated_cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _p.deprecated_cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })])
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Inkopen.D.Regels.D.Type => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => ['Balans', ({
                        'Balans item': _p.deprecated_cc($['Balans item'], ($) => $['key']),
                    })])
                    case 'Kosten': return _p.ss($, ($) => ['Kosten', ({
                        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => $['key']),
                    })])
                    default: return _p.au($[0])
                }
            })),
        }))),
        'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Inkopen.D.Type => {
            switch ($[0]) {
                case 'Bonnetje': return _p.ss($, ($) => ['Bonnetje', null])
                case 'Inkoop (met crediteur)': return _p.ss($, ($) => ['Inkoop (met crediteur)', ({
                    'Crediteur': _p.deprecated_cc($['Crediteur'], ($) => $['key']),
                    'Factuurnummer': _p.deprecated_cc($['Factuurnummer'], ($) => $),
                })])
                case 'Loonheffing': return _p.ss($, ($) => ['Loonheffing', ({
                    'Ronde': _p.deprecated_cc($['Ronde'], ($) => $['key']),
                })])
                case 'Salaris': return _p.ss($, ($) => ['Salaris', ({
                    'Ronde': _p.deprecated_cc($['Ronde'], ($) => $['key']),
                    'Medewerker': _p.deprecated_cc($['Medewerker'], ($) => $['key']),
                })])
                default: return _p.au($[0])
            }
        })),
    }))),
    'Verkopen': _p.deprecated_cc($['Verkopen'], ($) => $.__d_map(($) => ({
        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Verkopen.D.Afhandeling => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => ['Mutaties', null])
                case 'Rekening courant': return _p.ss($, ($) => ['Rekening courant', ({
                    'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($) => $['key']),
                })])
                default: return _p.au($[0])
            }
        })),
        'Betalingstermijn': _p.deprecated_cc($['Betalingstermijn'], ($) => $),
        'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($) => $['key']),
        'Brondocument': _p.deprecated_cc($['Brondocument'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Verkopen.D.Brondocument => {
            switch ($[0]) {
                case 'Toegevoegd': return _p.ss($, ($) => ['Toegevoegd', ({
                    'Document': _p.deprecated_cc($['Document'], ($) => $),
                })])
                default: return _p.au($[0])
            }
        })),
        'Debiteur': _p.deprecated_cc($['Debiteur'], ($) => $['key']),
        'Contracttype': _p.deprecated_cc($['Contracttype'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Verkopen.D.Contracttype => {
            switch ($[0]) {
                case 'Project': return _p.ss($, ($) => ['Project', ({
                    'Project': _p.deprecated_cc($['Project'], ($) => $['key']),
                    'Offerte': _p.deprecated_cc($['Offerte'], ($) => $['key']),
                })])
                case 'Licentieovereenkomst': return _p.ss($, ($) => ['Licentieovereenkomst', ({
                    'Overeenkomst': _p.deprecated_cc($['Overeenkomst'], ($) => $['key']),
                })])
                default: return _p.au($[0])
            }
        })),
        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
        'Regels': _p.deprecated_cc($['Regels'], ($) => $.__d_map(($) => ({
            'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime => {
                switch ($[0]) {
                    case 'Intracommunautair': return _p.ss($, ($) => ['Intracommunautair', null])
                    case 'Standaard': return _p.ss($, ($) => ['Standaard', ({
                        'BTW-categorie': _p.deprecated_cc($['BTW-categorie'], ($) => $['key']),
                    })])
                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => ['Binnenland: heffing verlegd', null])
                    default: return _p.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _p.deprecated_cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _p.deprecated_cc($['Contracttype'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype => {
                switch ($[0]) {
                    case 'Project': return _p.ss($, ($) => ['Project', ({
                        'Opbrengst': _p.deprecated_cc($['Opbrengst'], ($) => $['key']),
                    })])
                    case 'Los': return _p.ss($, ($) => ['Los', null])
                    case 'Licentieovereenkomst': return _p.ss($, ($) => ['Licentieovereenkomst', ({
                        'Periode': _p.deprecated_cc($['Periode'], ($) => $['key']),
                    })])
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): t_out.Handelstransacties.Verkopen.D.Regels.D.Type => {
                switch ($[0]) {
                    case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', ({
                        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => $['key']),
                    })])
                    case 'Balans': return _p.ss($, ($) => ['Balans', ({
                        'Balans item': _p.deprecated_cc($['Balans item'], ($) => $['key']),
                    })])
                    default: return _p.au($[0])
                }
            })),
        }))),
    }))),
})
export const Mutaties: t_signatures.Mutaties = ($) => ({
    'Verrekenpost mutaties': _p.deprecated_cc($['Verrekenpost mutaties'], ($) => $.__d_map(($) => $.__d_map(($) => ({
        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => _p.deprecated_cc($, ($): t_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling => {
            switch ($[0]) {
                case 'Resultaat': return _p.ss($, ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                    $
                )])
                case 'Balans': return _p.ss($, ($) => ['Balans', _p.deprecated_cc($, ($): t_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.Balans => {
                    switch ($[0]) {
                        case 'Informele rekening': return _p.ss($, ($) => ['Informele rekening', ({
                            'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($) => $['key']),
                        })])
                        default: return _p.au($[0])
                    }
                })])
                default: return _p.au($[0])
            }
        })),
    })))),
    'Bankrekening Mutatie Verwerkingen': _p.deprecated_cc($['Bankrekening Mutatie Verwerkingen'], ($) => $.__d_map(($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D => {
        switch ($[0]) {
            case 'Resultaat': return _p.ss($, ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                $
            )])
            case 'Balans': return _p.ss($, ($) => ['Balans', _p.deprecated_cc($, ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.Balans => {
                switch ($[0]) {
                    case 'Informele rekening': return _p.ss($, ($) => ['Informele rekening', ({
                        'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($) => $['key']),
                    })])
                    case 'Verrekenpost': return _p.ss($, ($) => ['Verrekenpost', ({
                        'Verrekenpost': _p.deprecated_cc($['Verrekenpost'], ($) => $['key']),
                    })])
                    default: return _p.au($[0])
                }
            })])
            default: return _p.au($[0])
        }
    })))),
    'Memoriaal boekingen': _p.deprecated_cc($['Memoriaal boekingen'], ($) => $.__d_map(($) => $.__d_map(($) => ({
        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
        'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => $['key']),
    })))),
})
export const Jaren: t_signatures.Jaren = ($) => $.__d_map(($) => ({
    'Afgesloten': _p.deprecated_cc($['Afgesloten'], ($) => _p.deprecated_cc($, ($): t_out.Jaren.D.Afgesloten => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => ['Ja', null])
            case 'Nee': return _p.ss($, ($) => ['Nee', null])
            default: return _p.au($[0])
        }
    })),
    'Startdatum boekjaar': _p.deprecated_cc($['Startdatum boekjaar'], ($) => $),
    'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($) => Grootboekrekeningen(
        $
    )),
    'Eerste boekjaar': _p.deprecated_cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $
    )),
    'Jaarbeheer': _p.deprecated_cc($['Jaarbeheer'], ($) => Jaarbeheer(
        $
    )),
    'Handelstransacties': _p.deprecated_cc($['Handelstransacties'], ($) => Handelstransacties(
        $
    )),
    'Mutaties': _p.deprecated_cc($['Mutaties'], ($) => Mutaties(
        $
    )),
}))
export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($) => ({
    'Jaar': _p.deprecated_cc($['Jaar'], ($) => $.__o_map(($) => $['key'])),
    'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Balans_Resultaat_Mutatie.type_ => {
        switch ($[0]) {
            case 'Inkoop': return _p.ss($, ($) => ['Inkoop', $['key']])
            case 'Verkoop': return _p.ss($, ($) => ['Verkoop', $['key']])
            case 'BTW-periode': return _p.ss($, ($) => ['BTW-periode', $['key']])
            default: return _p.au($[0])
        }
    })),
})
export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => _p.deprecated_cc($, ($): t_out.Eerste_boekjaar => {
    switch ($[0]) {
        case 'Ja': return _p.ss($, ($) => ['Ja', null])
        case 'Nee': return _p.ss($, ($) => ['Nee', ({
            'Vorig boekjaar': _p.deprecated_cc($['Vorig boekjaar'], ($) => $['key']),
        })])
        default: return _p.au($[0])
    }
})
export const Root: t_signatures.Root = ($) => ({
    'Fiscaal': _p.deprecated_cc($['Fiscaal'], ($) => Fiscaal(
        $
    )),
    'Categorieen': _p.deprecated_cc($['Categorieen'], ($) => Grootboek_Categorieen(
        $
    )),
    'Beheer': _p.deprecated_cc($['Beheer'], ($) => Beheer(
        $
    )),
    'Jaren': _p.deprecated_cc($['Jaren'], ($) => Jaren(
        $
    )),
})
