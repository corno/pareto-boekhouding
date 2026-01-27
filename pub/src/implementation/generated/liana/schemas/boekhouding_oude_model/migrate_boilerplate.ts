
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding_oude_model/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding_oude_model/data"
export const Bestandsnaam: t_signatures.Bestandsnaam = ($,) => $
export const Root: t_signatures.Root = ($,) => ({
    'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($,) => $.__d_map(($,id,) => null)),
    'Beheer': _p.deprecated_cc($['Beheer'], ($,) => ({
        'Balans': _p.deprecated_cc($['Balans'], ($,) => ({
            'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($,) => $.__d_map(($,id,) => ({
                'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($,) => $),
                'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($,) => $),
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Balans.Grootboekrekeningen.D.Zijde => {
                    switch ($[0]) {
                        case 'Activa':
                            return _p.ss($, ($,) => ['Activa', null])
                        case 'Passiva':
                            return _p.ss($, ($,) => ['Passiva', null])
                        default:
                            return _p.au($[0])
                    }
                })),
            }))),
            'Hoofdcategorieen': _p.deprecated_cc($['Hoofdcategorieen'], ($,) => $.__d_map(($,id,) => ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Balans.Hoofdcategorieen.D.Zijde => {
                    switch ($[0]) {
                        case 'Activa':
                            return _p.ss($, ($,) => ['Activa', null])
                        case 'Passiva':
                            return _p.ss($, ($,) => ['Passiva', null])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => $.__d_map(($,id,) => ({
                    'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($,) => $),
                    'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($,) => $),
                }))),
            }))),
            'Hoofdcategorieen fiscus': _p.deprecated_cc($['Hoofdcategorieen fiscus'], ($,) => $.__d_map(($,id,) => ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde => {
                    switch ($[0]) {
                        case 'Activa':
                            return _p.ss($, ($,) => ['Activa', null])
                        case 'Passiva':
                            return _p.ss($, ($,) => ['Passiva', null])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => $.__d_map(($,id,) => null)),
            }))),
        })),
        'BTW-categorieen': _p.deprecated_cc($['BTW-categorieen'], ($,) => $.__d_map(($,id,) => ({
            'BTW-heffing': _p.deprecated_cc($['BTW-heffing'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ['Ja', ({
                            'BTW-promillage': _p.deprecated_cc($['BTW-promillage'], ($,) => $),
                        })])
                    case 'Nee':
                        return _p.ss($, ($,) => ['Nee', null])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Gebruikers': _p.deprecated_cc($['Gebruikers'], ($,) => $.__d_map(($,id,) => ({
            'Volledige naam': _p.deprecated_cc($['Volledige naam'], ($,) => $),
            'Wachtwoord': _p.deprecated_cc($['Wachtwoord'], ($,) => $),
        }))),
        'Huidige datum': _p.deprecated_cc($['Huidige datum'], ($,) => $),
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($,) => ({
            'Correctietypes vennootschapsbelasting': _p.deprecated_cc($['Correctietypes vennootschapsbelasting'], ($,) => $.__d_map(($,id,) => ({
                'Te corrigeren promillage': _p.deprecated_cc($['Te corrigeren promillage'], ($,) => $),
            }))),
            'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($,) => $.__d_map(($,id,) => ({
                'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($,) => $),
                'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($,) => $),
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde => {
                    switch ($[0]) {
                        case 'Kosten':
                            return _p.ss($, ($,) => ['Kosten', ({
                                'Correctie op vennootschapsbelasting': _p.deprecated_cc($['Correctie op vennootschapsbelasting'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return _p.ss($, ($,) => ['Ja', ({
                                                'Correctietype': _p.deprecated_cc($['Correctietype'], ($,) => $),
                                            })])
                                        case 'Nee':
                                            return _p.ss($, ($,) => ['Nee', null])
                                        default:
                                            return _p.au($[0])
                                    }
                                })),
                            })])
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ['Opbrengsten', null])
                        default:
                            return _p.au($[0])
                    }
                })),
            }))),
            'Hoofdcategorieen': _p.deprecated_cc($['Hoofdcategorieen'], ($,) => $.__d_map(($,id,) => ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde => {
                    switch ($[0]) {
                        case 'Kosten':
                            return _p.ss($, ($,) => ['Kosten', null])
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ['Opbrengsten', null])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => $.__d_map(($,id,) => ({
                    'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($,) => $),
                    'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($,) => $),
                }))),
            }))),
            'Hoofdcategorieen fiscus': _p.deprecated_cc($['Hoofdcategorieen fiscus'], ($,) => $.__d_map(($,id,) => ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => _p.decide.state($, ($,): t_out.Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde => {
                    switch ($[0]) {
                        case 'Kosten':
                            return _p.ss($, ($,) => ['Kosten', null])
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ['Opbrengsten', null])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => $.__d_map(($,id,) => null)),
            }))),
        })),
    })),
    'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($,) => $.__d_map(($,id,) => null)),
    'Jaren': _p.deprecated_cc($['Jaren'], ($,) => $.__d_map(($,id,) => ({
        'Afgesloten': _p.deprecated_cc($['Afgesloten'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Afgesloten => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss($, ($,) => ['Ja', null])
                case 'Nee':
                    return _p.ss($, ($,) => ['Nee', null])
                default:
                    return _p.au($[0])
            }
        })),
        'Balans grootboekrekeningen': _p.deprecated_cc($['Balans grootboekrekeningen'], ($,) => $.__d_map(($,id,) => ({
            'Type': _p.deprecated_cc($['Type'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Balans_grootboekrekeningen.D.Type => {
                switch ($[0]) {
                    case 'Bankrekening':
                        return _p.ss($, ($,) => ['Bankrekening', null])
                    case 'Overig':
                        return _p.ss($, ($,) => ['Overig', null])
                    case 'Informele rekening':
                        return _p.ss($, ($,) => ['Informele rekening', null])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($,) => $.__d_map(($,id,) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($,) => $.__d_map(($,id,) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                'Status': _p.deprecated_cc($['Status'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status => {
                    switch ($[0]) {
                        case 'Nog te verwerken':
                            return _p.ss($, ($,) => ['Nog te verwerken', null])
                        case 'Verwerkt':
                            return _p.ss($, ($,) => ['Verwerkt', ({
                                'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.Verwerkt.Afhandeling => {
                                    switch ($[0]) {
                                        case 'Inkoop':
                                            return _p.ss($, ($,) => ['Inkoop', ({
                                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                                                'Inkoop': _p.deprecated_cc($['Inkoop'], ($,) => $),
                                            })])
                                        case 'Verrekenpost':
                                            return _p.ss($, ($,) => ['Verrekenpost', ({
                                                'Verrekenpost': _p.deprecated_cc($['Verrekenpost'], ($,) => $),
                                            })])
                                        case 'BTW-periode':
                                            return _p.ss($, ($,) => ['BTW-periode', ({
                                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                                                'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => $),
                                            })])
                                        case 'Verkoop':
                                            return _p.ss($, ($,) => ['Verkoop', ({
                                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                                                'Verkoop': _p.deprecated_cc($['Verkoop'], ($,) => $),
                                            })])
                                        case 'Informele rekening':
                                            return _p.ss($, ($,) => ['Informele rekening', ({
                                                'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($,) => $),
                                            })])
                                        default:
                                            return _p.au($[0])
                                    }
                                })),
                            })])
                        default:
                            return _p.au($[0])
                    }
                })),
            }))),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Bankrekeningen.D.Nieuw => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ['Ja', null])
                    case 'Nee':
                        return _p.ss($, ($,) => ['Nee', ({
                            'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                            'Rekening': _p.deprecated_cc($['Rekening'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Beginsaldo nog aan te geven BTW': _p.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($,) => $),
        'Beginsaldo winstreserve': _p.deprecated_cc($['Beginsaldo winstreserve'], ($,) => $),
        'BTW periode saldo': _p.deprecated_cc($['BTW periode saldo'], ($,) => ({
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
        })),
        'BTW periodes': _p.deprecated_cc($['BTW periodes'], ($,) => $.__d_map(($,id,) => ({
            '1. BTW-categorieen': _p.deprecated_cc($['1. BTW-categorieen'], ($,) => $.__d_map(($,id,) => null)),
            'Documenten': _p.deprecated_cc($['Documenten'], ($,) => $.__d_map(($,id,) => ({
                'Bestand': _p.deprecated_cc($['Bestand'], ($,) => Bestandsnaam($)),
            }))),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
            'Status': _p.deprecated_cc($['Status'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.BTW_periodes.D.Status => {
                switch ($[0]) {
                    case 'Aangegeven':
                        return _p.ss($, ($,) => ['Aangegeven', ({
                            'Afronding': _p.deprecated_cc($['Afronding'], ($,) => $),
                            'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                            'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                        })])
                    case 'Openstaand':
                        return _p.ss($, ($,) => ['Openstaand', null])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Eerste boekjaar': _p.deprecated_cc($['Eerste boekjaar'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Eerste_boekjaar => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss($, ($,) => ['Ja', null])
                case 'Nee':
                    return _p.ss($, ($,) => ['Nee', ({
                        'Vorig boekjaar': _p.deprecated_cc($['Vorig boekjaar'], ($,) => $),
                    })])
                default:
                    return _p.au($[0])
            }
        })),
        'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($,) => $),
        'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($,) => $),
        'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($,) => $),
        'Grootboekrekening voor winstreserve': _p.deprecated_cc($['Grootboekrekening voor winstreserve'], ($,) => $),
        'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($,) => $.__d_map(($,id,) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Informele_rekeningen.D.Nieuw => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ['Ja', null])
                    case 'Nee':
                        return _p.ss($, ($,) => ['Nee', ({
                            'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                            'Rekening': _p.deprecated_cc($['Rekening'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Inkopen': _p.deprecated_cc($['Inkopen'], ($,) => $.__d_map(($,id,) => ({
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Inkopen.D.Afhandeling => {
                switch ($[0]) {
                    case 'Mutaties':
                        return _p.ss($, ($,) => ['Mutaties', null])
                    case 'Rekening courant':
                        return _p.ss($, ($,) => ['Rekening courant', ({
                            'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
            'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Inkopen.D.BTW$mi_regime => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd':
                        return _p.ss($, ($,) => ['Binnenland: heffing verlegd', null])
                    case 'Geen BTW van toepassing':
                        return _p.ss($, ($,) => ['Geen BTW van toepassing', ({
                            'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => $),
                        })])
                    case 'Import van buiten de EU':
                        return _p.ss($, ($,) => ['Import van buiten de EU', null])
                    case 'Intracommunautair':
                        return _p.ss($, ($,) => ['Intracommunautair', null])
                    case 'Standaard':
                        return _p.ss($, ($,) => ['Standaard', ({
                            'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
            'Brondocument': _p.deprecated_cc($['Brondocument'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Inkopen.D.Brondocument => {
                switch ($[0]) {
                    case 'Toegevoegd':
                        return _p.ss($, ($,) => ['Toegevoegd', ({
                            'Document': _p.deprecated_cc($['Document'], ($,) => Bestandsnaam($)),
                        })])
                    case 'Niet van toepassing':
                        return _p.ss($, ($,) => ['Niet van toepassing', null])
                    case 'Ontbreekt':
                        return _p.ss($, ($,) => ['Ontbreekt', null])
                    case 'Nog toevoegen':
                        return _p.ss($, ($,) => ['Nog toevoegen', null])
                    default:
                        return _p.au($[0])
                }
            })),
            'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
            'Regels': _p.deprecated_cc($['Regels'], ($,) => $.__d_map(($,id,) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Bedrag => {
                    switch ($[0]) {
                        case 'Bekend':
                            return _p.ss($, ($,) => ['Bekend', ({
                                'BTW-bedrag': _p.deprecated_cc($['BTW-bedrag'], ($,) => $),
                                'Bedrag inclusief geheven BTW': _p.deprecated_cc($['Bedrag inclusief geheven BTW'], ($,) => $),
                            })])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                'Type': _p.deprecated_cc($['Type'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Type => {
                    switch ($[0]) {
                        case 'Balans':
                            return _p.ss($, ($,) => ['Balans', ({
                                'Balans item': _p.deprecated_cc($['Balans item'], ($,) => $),
                            })])
                        case 'Kosten':
                            return _p.ss($, ($,) => ['Kosten', ({
                                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
                            })])
                        default:
                            return _p.au($[0])
                    }
                })),
            }))),
            'Type': _p.deprecated_cc($['Type'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Inkopen.D.Type => {
                switch ($[0]) {
                    case 'Bonnetje':
                        return _p.ss($, ($,) => ['Bonnetje', null])
                    case 'Inkoop (met crediteur)':
                        return _p.ss($, ($,) => ['Inkoop (met crediteur)', ({
                            'Crediteur': _p.deprecated_cc($['Crediteur'], ($,) => $),
                            'Factuurnummer': _p.deprecated_cc($['Factuurnummer'], ($,) => $),
                        })])
                    case 'Loonheffing':
                        return _p.ss($, ($,) => ['Loonheffing', ({
                            'Ronde': _p.deprecated_cc($['Ronde'], ($,) => $),
                        })])
                    case 'Salaris':
                        return _p.ss($, ($,) => ['Salaris', ({
                            'Ronde': _p.deprecated_cc($['Ronde'], ($,) => $),
                            'Medewerker': _p.deprecated_cc($['Medewerker'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Inkoop saldo': _p.deprecated_cc($['Inkoop saldo'], ($,) => ({
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
        })),
        'Overige balans items': _p.deprecated_cc($['Overige balans items'], ($,) => $.__d_map(($,id,) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
            'Memoriaal boekingen': _p.deprecated_cc($['Memoriaal boekingen'], ($,) => $.__d_map(($,id,) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
            }))),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Overige_balans_items.D.Nieuw => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ['Ja', null])
                    case 'Nee':
                        return _p.ss($, ($,) => ['Nee', ({
                            'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                            'Balans item': _p.deprecated_cc($['Balans item'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
        }))),
        'Resultaat grootboekrekeningen': _p.deprecated_cc($['Resultaat grootboekrekeningen'], ($,) => $.__d_map(($,id,) => null)),
        'Salarisrondes': _p.deprecated_cc($['Salarisrondes'], ($,) => $.__d_map(($,id,) => null)),
        'Startdatum boekjaar': _p.deprecated_cc($['Startdatum boekjaar'], ($,) => $),
        'Verkoop saldo': _p.deprecated_cc($['Verkoop saldo'], ($,) => ({
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
        })),
        'Verkopen': _p.deprecated_cc($['Verkopen'], ($,) => $.__d_map(($,id,) => ({
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verkopen.D.Afhandeling => {
                switch ($[0]) {
                    case 'Mutaties':
                        return _p.ss($, ($,) => ['Mutaties', null])
                    case 'Rekening courant':
                        return _p.ss($, ($,) => ['Rekening courant', ({
                            'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
            'Betalingstermijn': _p.deprecated_cc($['Betalingstermijn'], ($,) => $),
            'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => $),
            'Brondocument': _p.deprecated_cc($['Brondocument'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verkopen.D.Brondocument => {
                switch ($[0]) {
                    case 'Toegevoegd':
                        return _p.ss($, ($,) => ['Toegevoegd', ({
                            'Document': _p.deprecated_cc($['Document'], ($,) => Bestandsnaam($)),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
            'Contracttype': _p.deprecated_cc($['Contracttype'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verkopen.D.Contracttype => {
                switch ($[0]) {
                    case 'Project':
                        return _p.ss($, ($,) => ['Project', ({
                            'Project': _p.deprecated_cc($['Project'], ($,) => $),
                            'Offerte': _p.deprecated_cc($['Offerte'], ($,) => $),
                        })])
                    case 'Licentieovereenkomst':
                        return _p.ss($, ($,) => ['Licentieovereenkomst', ({
                            'Overeenkomst': _p.deprecated_cc($['Overeenkomst'], ($,) => $),
                        })])
                    default:
                        return _p.au($[0])
                }
            })),
            'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
            'Debiteur': _p.deprecated_cc($['Debiteur'], ($,) => $),
            'Regels': _p.deprecated_cc($['Regels'], ($,) => $.__d_map(($,id,) => ({
                'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime => {
                    switch ($[0]) {
                        case 'Intracommunautair':
                            return _p.ss($, ($,) => ['Intracommunautair', null])
                        case 'Standaard':
                            return _p.ss($, ($,) => ['Standaard', ({
                                'BTW-categorie': _p.deprecated_cc($['BTW-categorie'], ($,) => $),
                            })])
                        case 'Binnenland: heffing verlegd':
                            return _p.ss($, ($,) => ['Binnenland: heffing verlegd', null])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Bedrag exclusief BTW': _p.deprecated_cc($['Bedrag exclusief BTW'], ($,) => $),
                'Contracttype': _p.deprecated_cc($['Contracttype'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Contracttype => {
                    switch ($[0]) {
                        case 'Project':
                            return _p.ss($, ($,) => ['Project', ({
                                'Opbrengst': _p.deprecated_cc($['Opbrengst'], ($,) => $),
                            })])
                        case 'Los':
                            return _p.ss($, ($,) => ['Los', null])
                        case 'Licentieovereenkomst':
                            return _p.ss($, ($,) => ['Licentieovereenkomst', ({
                                'Periode': _p.deprecated_cc($['Periode'], ($,) => $),
                            })])
                        default:
                            return _p.au($[0])
                    }
                })),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                'Type': _p.deprecated_cc($['Type'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Type => {
                    switch ($[0]) {
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ['Opbrengsten', ({
                                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => $),
                            })])
                        case 'Balans':
                            return _p.ss($, ($,) => ['Balans', ({
                                'Balans item': _p.deprecated_cc($['Balans item'], ($,) => $),
                            })])
                        default:
                            return _p.au($[0])
                    }
                })),
            }))),
        }))),
        'Verrekenposten': _p.deprecated_cc($['Verrekenposten'], ($,) => $.__d_map(($,id,) => ({
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($,) => $.__d_map(($,id,) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => _p.decide.state($, ($,): t_out.Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return _p.ss($, ($,) => ['Inkoop', ({
                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                                'Inkoop': _p.deprecated_cc($['Inkoop'], ($,) => $),
                            })])
                        case 'Informele rekening':
                            return _p.ss($, ($,) => ['Informele rekening', ({
                                'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($,) => $),
                            })])
                        case 'Verkoop':
                            return _p.ss($, ($,) => ['Verkoop', ({
                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                                'Verkoop': _p.deprecated_cc($['Verkoop'], ($,) => $),
                            })])
                        case 'BTW-periode':
                            return _p.ss($, ($,) => ['BTW-periode', ({
                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $),
                                'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => $),
                            })])
                        default:
                            return _p.au($[0])
                    }
                })),
            }))),
        }))),
    }))),
    'Klanten': _p.deprecated_cc($['Klanten'], ($,) => $.__d_map(($,id,) => ({
        'Licentieovereenkomsten': _p.deprecated_cc($['Licentieovereenkomsten'], ($,) => $.__d_map(($,id,) => ({
            'Periodes': _p.deprecated_cc($['Periodes'], ($,) => $.__d_map(($,id,) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
            }))),
        }))),
        'Projecten': _p.deprecated_cc($['Projecten'], ($,) => $.__d_map(($,id,) => ({
            'Offertes': _p.deprecated_cc($['Offertes'], ($,) => $.__d_map(($,id,) => ({
                'Opbrengsten': _p.deprecated_cc($['Opbrengsten'], ($,) => $.__d_map(($,id,) => ({
                    'Type': _p.deprecated_cc($['Type'], ($,) => _p.decide.state($, ($,): t_out.Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                        switch ($[0]) {
                            case 'Project':
                                return _p.ss($, ($,) => ['Project', ({
                                    'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                                    'Betaaldatum': _p.deprecated_cc($['Betaaldatum'], ($,) => $),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    })),
                }))),
            }))),
        }))),
    }))),
    'Leveranciers': _p.deprecated_cc($['Leveranciers'], ($,) => $.__d_map(($,id,) => null)),
    'Medewerkers': _p.deprecated_cc($['Medewerkers'], ($,) => $.__d_map(($,id,) => null)),
})
