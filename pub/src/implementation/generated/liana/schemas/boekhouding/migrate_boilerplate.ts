
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"
export const Fiscaal: t_signatures.Fiscaal = ($,) => ({
    'Balans Hoofdcategorieen': _p.deprecated_cc($['Balans Hoofdcategorieen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Fiscaal.Balans_Hoofdcategorieen.dictionary.D.entry.Zijde.state => {
                        switch ($[0]) {
                            case 'Activa':
                                return _p.ss($, ($,) => ['Activa', null])
                            case 'Passiva':
                                return _p.ss($, ($,) => ['Passiva', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': null,
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Resultaat Hoofdcategorieen': _p.deprecated_cc($['Resultaat Hoofdcategorieen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Fiscaal.Resultaat_Hoofdcategorieen.dictionary.D.entry.Zijde.state => {
                        switch ($[0]) {
                            case 'Kosten':
                                return _p.ss($, ($,) => ['Kosten', null])
                            case 'Opbrengsten':
                                return _p.ss($, ($,) => ['Opbrengsten', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': null,
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($,) => ({
    'Correctietypes vennootschapsbelasting': _p.deprecated_cc($['Correctietypes vennootschapsbelasting'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Te corrigeren promillage': _p.deprecated_cc($['Te corrigeren promillage'], ($,) => $),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Balans': _p.deprecated_cc($['Balans'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Grootboek_Categorieen.Balans.dictionary.D.entry.Zijde.state => {
                        switch ($[0]) {
                            case 'Activa':
                                return _p.ss($, ($,) => ['Activa', null])
                            case 'Passiva':
                                return _p.ss($, ($,) => ['Passiva', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': ({
                            'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'key': $['key'],
                            })),
                            'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'key': $['key'],
                            })),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Resultaat': _p.deprecated_cc($['Resultaat'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Grootboek_Categorieen.Resultaat.dictionary.D.entry.Zijde.state => {
                        switch ($[0]) {
                            case 'Kosten':
                                return _p.ss($, ($,) => ['Kosten', null])
                            case 'Opbrengsten':
                                return _p.ss($, ($,) => ['Opbrengsten', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': ({
                            'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'key': $['key'],
                            })),
                            'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'key': $['key'],
                            })),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Beheer: t_signatures.Beheer = ($,) => ({
    'BTW-categorieen': _p.deprecated_cc($['BTW-categorieen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'BTW-heffing': _p.deprecated_cc($['BTW-heffing'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Beheer.BTW$mi_categorieen.dictionary.D.entry.BTW$mi_heffing.state => {
                        switch ($[0]) {
                            case 'Ja':
                                return _p.ss($, ($,) => ['Ja', ({
                                    'BTW-promillage': _p.deprecated_cc($['BTW-promillage'], ($,) => $),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($,) => ({
        'Balans': _p.deprecated_cc($['Balans'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': ({
                    'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                    'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                    'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Beheer.Grootboekrekeningen.Balans.dictionary.D.entry.Zijde.state => {
                            switch ($[0]) {
                                case 'Activa':
                                    return _p.ss($, ($,) => ['Activa', null])
                                case 'Passiva':
                                    return _p.ss($, ($,) => ['Passiva', null])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                }),
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': ({
                    'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                    'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                    'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Beheer.Grootboekrekeningen.Resultaat.dictionary.D.entry.Zijde.state => {
                            switch ($[0]) {
                                case 'Kosten':
                                    return _p.ss($, ($,) => ['Kosten', ({
                                        'Correctie op vennootschapsbelasting': _p.deprecated_cc($['Correctie op vennootschapsbelasting'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'state': _p.decide.state($, ($,): t_out.Beheer.Grootboekrekeningen.Resultaat.dictionary.D.entry.Zijde.state.Kosten.Correctie_op_vennootschapsbelasting.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss($, ($,) => ['Ja', ({
                                                            'Correctietype': _p.deprecated_cc($['Correctietype'], ($,) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'key': $['key'],
                                                            })),
                                                        })])
                                                    case 'Nee':
                                                        return _p.ss($, ($,) => ['Nee', null])
                                                    default:
                                                        return _p.au($[0])
                                                }
                                            }),
                                        })),
                                    })])
                                case 'Opbrengsten':
                                    return _p.ss($, ($,) => ['Opbrengsten', null])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                }),
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
    })),
    'Rekeningen': _p.deprecated_cc($['Rekeningen'], ($,) => ({
        'Bank': _p.deprecated_cc($['Bank'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': null,
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
        'Informeel': _p.deprecated_cc($['Informeel'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': null,
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
    })),
    'Gebruikers': _p.deprecated_cc($['Gebruikers'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Volledige naam': _p.deprecated_cc($['Volledige naam'], ($,) => $),
                'Wachtwoord': _p.deprecated_cc($['Wachtwoord'], ($,) => $),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Klanten': _p.deprecated_cc($['Klanten'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Licentieovereenkomsten': _p.deprecated_cc($['Licentieovereenkomsten'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': ({
                            'Periodes': _p.deprecated_cc($['Periodes'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(($,key,) => ({
                                    'entry': ({
                                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                                    }),
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                })),
                            })),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
                'Projecten': _p.deprecated_cc($['Projecten'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': ({
                            'Offertes': _p.deprecated_cc($['Offertes'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(($,key,) => ({
                                    'entry': ({
                                        'Opbrengsten': _p.deprecated_cc($['Opbrengsten'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'dictionary': $.__d_map(($,key,) => ({
                                                'entry': ({
                                                    'Type': _p.deprecated_cc($['Type'], ($,) => ({
                                                        'location': ({
                                                            'file': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        }),
                                                        'state': _p.decide.state($, ($,): t_out.Beheer.Klanten.dictionary.D.entry.Projecten.dictionary.D.entry.Offertes.dictionary.D.entry.Opbrengsten.dictionary.D.entry.Type.state => {
                                                            switch ($[0]) {
                                                                case 'Project':
                                                                    return _p.ss($, ($,) => ['Project', ({
                                                                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                                                                        'Betaaldatum': _p.deprecated_cc($['Betaaldatum'], ($,) => $),
                                                                    })])
                                                                default:
                                                                    return _p.au($[0])
                                                            }
                                                        }),
                                                    })),
                                                }),
                                                'location': ({
                                                    'file': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                }),
                                            })),
                                        })),
                                    }),
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                })),
                            })),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Leveranciers': _p.deprecated_cc($['Leveranciers'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': null,
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Medewerkers': _p.deprecated_cc($['Medewerkers'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': null,
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($,) => ({
    'Balans': _p.deprecated_cc($['Balans'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Type': _p.deprecated_cc($['Type'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Grootboekrekeningen.Balans.dictionary.D.entry.Type.state => {
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
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Resultaat': _p.deprecated_cc($['Resultaat'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': null,
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Jaarbeheer: t_signatures.Jaarbeheer = ($,) => ({
    'Resultaat': _p.deprecated_cc($['Resultaat'], ($,) => ({
        'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'key': $['key'],
        })),
        'Salarisrondes': _p.deprecated_cc($['Salarisrondes'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': null,
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
        'BTW periodes': _p.deprecated_cc($['BTW periodes'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': ({
                    '1. BTW-categorieen': _p.deprecated_cc($['1. BTW-categorieen'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(($,key,) => ({
                            'entry': null,
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })),
                    })),
                    'Documenten': _p.deprecated_cc($['Documenten'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(($,key,) => ({
                            'entry': ({
                                'Bestand': _p.deprecated_cc($['Bestand'], ($,) => $),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })),
                    })),
                    'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                    'Status': _p.deprecated_cc($['Status'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Jaarbeheer.Resultaat.BTW_periodes.dictionary.D.entry.Status.state => {
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
                        }),
                    })),
                }),
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
    })),
    'Balans': _p.deprecated_cc($['Balans'], ($,) => ({
        'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'key': $['key'],
        })),
        'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'key': $['key'],
        })),
        'Grootboekrekening voor winstreserve': _p.deprecated_cc($['Grootboekrekening voor winstreserve'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'key': $['key'],
        })),
        'Grootboekrekening voor Inkoop saldo': _p.deprecated_cc($['Grootboekrekening voor Inkoop saldo'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'key': $['key'],
        })),
        'Grootboekrekening voor Verkoop saldo': _p.deprecated_cc($['Grootboekrekening voor Verkoop saldo'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'key': $['key'],
        })),
        'Beginsaldo nog aan te geven BTW': _p.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($,) => $),
        'Beginsaldo winstreserve': _p.deprecated_cc($['Beginsaldo winstreserve'], ($,) => $),
        'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': ({
                    'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => $),
                    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                    'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Jaarbeheer.Balans.Informele_rekeningen.dictionary.D.entry.Nieuw.state => {
                            switch ($[0]) {
                                case 'Ja':
                                    return _p.ss($, ($,) => ['Ja', null])
                                case 'Nee':
                                    return _p.ss($, ($,) => ['Nee', ({
                                        'Rekening': _p.deprecated_cc($['Rekening'], ($,) => Verwijzing_naar_Informele_rekening($)),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                }),
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
        'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': ({
                    'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => $),
                    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                    'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Jaarbeheer.Balans.Bankrekeningen.dictionary.D.entry.Nieuw.state => {
                            switch ($[0]) {
                                case 'Ja':
                                    return _p.ss($, ($,) => ['Ja', null])
                                case 'Nee':
                                    return _p.ss($, ($,) => ['Nee', ({
                                        'Rekening': _p.deprecated_cc($['Rekening'], ($,) => Verwijzing_naar_Bankrekening($)),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                    'Mutaties': _p.deprecated_cc($['Mutaties'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(($,key,) => ({
                            'entry': ({
                                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                                'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })),
                    })),
                }),
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
        'Overige balans items': _p.deprecated_cc($['Overige balans items'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': Overige_balans_item($),
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
        'Verrekenposten': _p.deprecated_cc($['Verrekenposten'], ($,) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(($,key,) => ({
                'entry': null,
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
            })),
        })),
    })),
})
export const Overige_balans_item: t_signatures.Overige_balans_item = ($,) => ({
    'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => $),
    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'key': $['key'],
    })),
    'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Overige_balans_item.Nieuw.state => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss($, ($,) => ['Ja', null])
                case 'Nee':
                    return _p.ss($, ($,) => ['Nee', ({
                        'Balans item': _p.deprecated_cc($['Balans item'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'key': $['key'],
                        })),
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
})
export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'key': $['key'],
})
export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'key': $['key'],
})
export const Handelstransacties: t_signatures.Handelstransacties = ($,) => ({
    'Inkopen': _p.deprecated_cc($['Inkopen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Afhandeling.state => {
                        switch ($[0]) {
                            case 'Mutaties':
                                return _p.ss($, ($,) => ['Mutaties', null])
                            case 'Rekening courant':
                                return _p.ss($, ($,) => ['Rekening courant', ({
                                    'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Inkopen.dictionary.D.entry.BTW$mi_regime.state => {
                        switch ($[0]) {
                            case 'Binnenland: heffing verlegd':
                                return _p.ss($, ($,) => ['Binnenland: heffing verlegd', null])
                            case 'Geen BTW van toepassing':
                                return _p.ss($, ($,) => ['Geen BTW van toepassing', null])
                            case 'Import van buiten de EU':
                                return _p.ss($, ($,) => ['Import van buiten de EU', null])
                            case 'Intracommunautair':
                                return _p.ss($, ($,) => ['Intracommunautair', null])
                            case 'Standaard':
                                return _p.ss($, ($,) => ['Standaard', ({
                                    'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Brondocument': _p.deprecated_cc($['Brondocument'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Brondocument.state => {
                        switch ($[0]) {
                            case 'Toegevoegd':
                                return _p.ss($, ($,) => ['Toegevoegd', ({
                                    'Document': _p.deprecated_cc($['Document'], ($,) => $),
                                })])
                            case 'Niet van toepassing':
                                return _p.ss($, ($,) => ['Niet van toepassing', null])
                            case 'Ontbreekt':
                                return _p.ss($, ($,) => ['Ontbreekt', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                'Regels': _p.deprecated_cc($['Regels'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': ({
                            'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state($, ($,): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Regels.dictionary.D.entry.Bedrag.state => {
                                    switch ($[0]) {
                                        case 'Bekend':
                                            return _p.ss($, ($,) => ['Bekend', ({
                                                'BTW-bedrag': _p.deprecated_cc($['BTW-bedrag'], ($,) => $),
                                                'Bedrag inclusief geheven BTW': _p.deprecated_cc($['Bedrag inclusief geheven BTW'], ($,) => $),
                                            })])
                                        default:
                                            return _p.au($[0])
                                    }
                                }),
                            })),
                            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                            'Type': _p.deprecated_cc($['Type'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state($, ($,): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Regels.dictionary.D.entry.Type.state => {
                                    switch ($[0]) {
                                        case 'Balans':
                                            return _p.ss($, ($,) => ['Balans', ({
                                                'Balans item': _p.deprecated_cc($['Balans item'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        case 'Kosten':
                                            return _p.ss($, ($,) => ['Kosten', ({
                                                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        default:
                                            return _p.au($[0])
                                    }
                                }),
                            })),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
                'Type': _p.deprecated_cc($['Type'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Type.state => {
                        switch ($[0]) {
                            case 'Bonnetje':
                                return _p.ss($, ($,) => ['Bonnetje', null])
                            case 'Inkoop (met crediteur)':
                                return _p.ss($, ($,) => ['Inkoop (met crediteur)', ({
                                    'Crediteur': _p.deprecated_cc($['Crediteur'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                    'Factuurnummer': _p.deprecated_cc($['Factuurnummer'], ($,) => $),
                                })])
                            case 'Loonheffing':
                                return _p.ss($, ($,) => ['Loonheffing', ({
                                    'Ronde': _p.deprecated_cc($['Ronde'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            case 'Salaris':
                                return _p.ss($, ($,) => ['Salaris', ({
                                    'Ronde': _p.deprecated_cc($['Ronde'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                    'Medewerker': _p.deprecated_cc($['Medewerker'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Verkopen': _p.deprecated_cc($['Verkopen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Afhandeling.state => {
                        switch ($[0]) {
                            case 'Mutaties':
                                return _p.ss($, ($,) => ['Mutaties', null])
                            case 'Rekening courant':
                                return _p.ss($, ($,) => ['Rekening courant', ({
                                    'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Betalingstermijn': _p.deprecated_cc($['Betalingstermijn'], ($,) => $),
                'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'key': $['key'],
                })),
                'Brondocument': _p.deprecated_cc($['Brondocument'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Brondocument.state => {
                        switch ($[0]) {
                            case 'Toegevoegd':
                                return _p.ss($, ($,) => ['Toegevoegd', ({
                                    'Document': _p.deprecated_cc($['Document'], ($,) => $),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Debiteur': _p.deprecated_cc($['Debiteur'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'key': $['key'],
                })),
                'Contracttype': _p.deprecated_cc($['Contracttype'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Contracttype.state => {
                        switch ($[0]) {
                            case 'Project':
                                return _p.ss($, ($,) => ['Project', ({
                                    'Project': _p.deprecated_cc($['Project'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                    'Offerte': _p.deprecated_cc($['Offerte'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            case 'Licentieovereenkomst':
                                return _p.ss($, ($,) => ['Licentieovereenkomst', ({
                                    'Overeenkomst': _p.deprecated_cc($['Overeenkomst'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'key': $['key'],
                                    })),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                'Regels': _p.deprecated_cc($['Regels'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': ({
                            'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state($, ($,): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.BTW$mi_regime.state => {
                                    switch ($[0]) {
                                        case 'Intracommunautair':
                                            return _p.ss($, ($,) => ['Intracommunautair', null])
                                        case 'Standaard':
                                            return _p.ss($, ($,) => ['Standaard', ({
                                                'BTW-categorie': _p.deprecated_cc($['BTW-categorie'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        case 'Binnenland: heffing verlegd':
                                            return _p.ss($, ($,) => ['Binnenland: heffing verlegd', null])
                                        default:
                                            return _p.au($[0])
                                    }
                                }),
                            })),
                            'Bedrag exclusief BTW': _p.deprecated_cc($['Bedrag exclusief BTW'], ($,) => $),
                            'Contracttype': _p.deprecated_cc($['Contracttype'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state($, ($,): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.Contracttype.state => {
                                    switch ($[0]) {
                                        case 'Project':
                                            return _p.ss($, ($,) => ['Project', ({
                                                'Opbrengst': _p.deprecated_cc($['Opbrengst'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        case 'Los':
                                            return _p.ss($, ($,) => ['Los', null])
                                        case 'Licentieovereenkomst':
                                            return _p.ss($, ($,) => ['Licentieovereenkomst', ({
                                                'Periode': _p.deprecated_cc($['Periode'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        default:
                                            return _p.au($[0])
                                    }
                                }),
                            })),
                            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                            'Type': _p.deprecated_cc($['Type'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state($, ($,): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.Type.state => {
                                    switch ($[0]) {
                                        case 'Opbrengsten':
                                            return _p.ss($, ($,) => ['Opbrengsten', ({
                                                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        case 'Balans':
                                            return _p.ss($, ($,) => ['Balans', ({
                                                'Balans item': _p.deprecated_cc($['Balans item'], ($,) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'key': $['key'],
                                                })),
                                            })])
                                        default:
                                            return _p.au($[0])
                                    }
                                }),
                            })),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Mutaties: t_signatures.Mutaties = ($,) => ({
    'Verrekenpost mutaties': _p.deprecated_cc($['Verrekenpost mutaties'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'dictionary': $.__d_map(($,key,) => ({
                    'entry': ({
                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'state': _p.decide.state($, ($,): t_out.Mutaties.Verrekenpost_mutaties.dictionary.D.entry.dictionary.D.entry.Afhandeling.state => {
                                switch ($[0]) {
                                    case 'Resultaat':
                                        return _p.ss($, ($,) => ['Resultaat', Balans_Resultaat_Mutatie($)])
                                    case 'Balans':
                                        return _p.ss($, ($,) => ['Balans', ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'state': _p.decide.state($, ($,): t_out.Mutaties.Verrekenpost_mutaties.dictionary.D.entry.dictionary.D.entry.Afhandeling.state.Balans.state => {
                                                switch ($[0]) {
                                                    case 'Informele rekening':
                                                        return _p.ss($, ($,) => ['Informele rekening', ({
                                                            'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($,) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'key': $['key'],
                                                            })),
                                                        })])
                                                    default:
                                                        return _p.au($[0])
                                                }
                                            }),
                                        })])
                                    default:
                                        return _p.au($[0])
                                }
                            }),
                        })),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Bankrekening Mutatie Verwerkingen': _p.deprecated_cc($['Bankrekening Mutatie Verwerkingen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'dictionary': $.__d_map(($,key,) => ({
                    'entry': ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.dictionary.D.entry.dictionary.D.entry.state => {
                            switch ($[0]) {
                                case 'Resultaat':
                                    return _p.ss($, ($,) => ['Resultaat', Balans_Resultaat_Mutatie($)])
                                case 'Balans':
                                    return _p.ss($, ($,) => ['Balans', ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'state': _p.decide.state($, ($,): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.dictionary.D.entry.dictionary.D.entry.state.Balans.state => {
                                            switch ($[0]) {
                                                case 'Informele rekening':
                                                    return _p.ss($, ($,) => ['Informele rekening', ({
                                                        'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($,) => ({
                                                            'location': ({
                                                                'file': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                            'key': $['key'],
                                                        })),
                                                    })])
                                                case 'Verrekenpost':
                                                    return _p.ss($, ($,) => ['Verrekenpost', ({
                                                        'Verrekenpost': _p.deprecated_cc($['Verrekenpost'], ($,) => ({
                                                            'location': ({
                                                                'file': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                            'key': $['key'],
                                                        })),
                                                    })])
                                                default:
                                                    return _p.au($[0])
                                            }
                                        }),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'Memoriaal boekingen': _p.deprecated_cc($['Memoriaal boekingen'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'dictionary': $.__d_map(($,key,) => ({
                    'entry': ({
                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => $),
                        'Datum': _p.deprecated_cc($['Datum'], ($,) => $),
                        'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => $),
                        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'key': $['key'],
                        })),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Jaren: t_signatures.Jaren = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,key,) => ({
        'entry': ({
            'Afgesloten': _p.deprecated_cc($['Afgesloten'], ($,) => ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'state': _p.decide.state($, ($,): t_out.Jaren.dictionary.D.entry.Afgesloten.state => {
                    switch ($[0]) {
                        case 'Ja':
                            return _p.ss($, ($,) => ['Ja', null])
                        case 'Nee':
                            return _p.ss($, ($,) => ['Nee', null])
                        default:
                            return _p.au($[0])
                    }
                }),
            })),
            'Startdatum boekjaar': _p.deprecated_cc($['Startdatum boekjaar'], ($,) => $),
            'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($,) => Grootboekrekeningen($)),
            'Eerste boekjaar': _p.deprecated_cc($['Eerste boekjaar'], ($,) => Eerste_boekjaar($)),
            'Jaarbeheer': _p.deprecated_cc($['Jaarbeheer'], ($,) => Jaarbeheer($)),
            'Handelstransacties': _p.deprecated_cc($['Handelstransacties'], ($,) => Handelstransacties($)),
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($,) => Mutaties($)),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($,) => ({
    'Jaar': _p.deprecated_cc($['Jaar'], ($,) => $.__o_map(($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'key': $['key'],
    }))),
    'type': _p.deprecated_cc($['type'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Balans_Resultaat_Mutatie.type_.state => {
            switch ($[0]) {
                case 'Inkoop':
                    return _p.ss($, ($,) => ['Inkoop', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })])
                case 'Verkoop':
                    return _p.ss($, ($,) => ['Verkoop', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })])
                case 'BTW-periode':
                    return _p.ss($, ($,) => ['BTW-periode', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
})
export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Eerste_boekjaar.state => {
        switch ($[0]) {
            case 'Ja':
                return _p.ss($, ($,) => ['Ja', null])
            case 'Nee':
                return _p.ss($, ($,) => ['Nee', ({
                    'Vorig boekjaar': _p.deprecated_cc($['Vorig boekjaar'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'key': $['key'],
                    })),
                })])
            default:
                return _p.au($[0])
        }
    }),
})
export const Root: t_signatures.Root = ($,) => ({
    'Fiscaal': _p.deprecated_cc($['Fiscaal'], ($,) => Fiscaal($)),
    'Categorieen': _p.deprecated_cc($['Categorieen'], ($,) => Grootboek_Categorieen($)),
    'Beheer': _p.deprecated_cc($['Beheer'], ($,) => Beheer($)),
    'Jaren': _p.deprecated_cc($['Jaren'], ($,) => Jaren($)),
})
