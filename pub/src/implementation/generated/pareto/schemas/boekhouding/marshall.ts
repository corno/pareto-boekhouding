    import * as _p from 'pareto-core/dist/transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/marshall"
    import * as _i_out from "../../../../../interface/generated/liana/generic/astn_target"
    
    
    export const Fiscaal: _i_signatures._T_Fiscaal = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Balans Hoofdcategorieen': _p.deprecated_cc($['Balans Hoofdcategorieen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => ({
                        'state': "Activa",
                        'value': ['nothing', null],
                    }))
                    case 'Passiva': return _p.ss($, ($) => ({
                        'state': "Passiva",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
        })])]),
        'Resultaat Hoofdcategorieen': _p.deprecated_cc($['Resultaat Hoofdcategorieen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => ({
                        'state': "Kosten",
                        'value': ['nothing', null],
                    }))
                    case 'Opbrengsten': return _p.ss($, ($) => ({
                        'state': "Opbrengsten",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
        })])]),
    })]
    export const Grootboek_Categorieen: _i_signatures._T_Grootboek_Categorieen = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Correctietypes vennootschapsbelasting': _p.deprecated_cc($['Correctietypes vennootschapsbelasting'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Te corrigeren promillage': _p.deprecated_cc($['Te corrigeren promillage'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Promillage'](
                    $,
                    null
                ),
            })]),
        })])]),
        'Balans': _p.deprecated_cc($['Balans'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => ({
                        'state': "Activa",
                        'value': ['nothing', null],
                    }))
                    case 'Passiva': return _p.ss($, ($) => ({
                        'state': "Passiva",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
            })])]),
        })])]),
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => ({
                        'state': "Kosten",
                        'value': ['nothing', null],
                    }))
                    case 'Opbrengsten': return _p.ss($, ($) => ({
                        'state': "Opbrengsten",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
            })])]),
        })])]),
    })]
    export const Beheer: _i_signatures._T_Beheer = ($, $p) => ['verbose group', _p.dictionary.literal({
        'BTW-categorieen': _p.deprecated_cc($['BTW-categorieen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'BTW-heffing': _p.deprecated_cc($['BTW-heffing'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['verbose group', _p.dictionary.literal({
                            'BTW-promillage': _p.deprecated_cc($['BTW-promillage'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Promillage'](
                                    $,
                                    null
                                ),
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
        })])]),
        'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($) => ['verbose group', _p.dictionary.literal({
            'Balans': _p.deprecated_cc($['Balans'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Zijde': _p.deprecated_cc($['Zijde'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Activa': return _p.ss($, ($) => ({
                            'state': "Activa",
                            'value': ['nothing', null],
                        }))
                        case 'Passiva': return _p.ss($, ($) => ({
                            'state': "Passiva",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })])]),
            'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Zijde': _p.deprecated_cc($['Zijde'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Kosten': return _p.ss($, ($) => ({
                            'state': "Kosten",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Correctie op vennootschapsbelasting': _p.deprecated_cc($['Correctie op vennootschapsbelasting'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'Ja': return _p.ss($, ($) => ({
                                            'state': "Ja",
                                            'value': ['verbose group', _p.dictionary.literal({
                                                'Correctietype': _p.deprecated_cc($['Correctietype'], ($) => ['text', ({
                                                    'delimiter': ['backtick', null],
                                                    'value': $['key'],
                                                })]),
                                            })],
                                        }))
                                        case 'Nee': return _p.ss($, ($) => ({
                                            'state': "Nee",
                                            'value': ['nothing', null],
                                        }))
                                        default: return _p.au($[0])
                                    }
                                })]),
                            })],
                        }))
                        case 'Opbrengsten': return _p.ss($, ($) => ({
                            'state': "Opbrengsten",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })])]),
        })]),
        'Rekeningen': _p.deprecated_cc($['Rekeningen'], ($) => ['verbose group', _p.dictionary.literal({
            'Bank': _p.deprecated_cc($['Bank'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
            'Informeel': _p.deprecated_cc($['Informeel'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
        })]),
        'Gebruikers': _p.deprecated_cc($['Gebruikers'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Volledige naam': _p.deprecated_cc($['Volledige naam'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Wachtwoord': _p.deprecated_cc($['Wachtwoord'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })])]),
        'Klanten': _p.deprecated_cc($['Klanten'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Licentieovereenkomsten': _p.deprecated_cc($['Licentieovereenkomsten'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Periodes': _p.deprecated_cc($['Periodes'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                    'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['custom numbers']['Bedrag'](
                            $,
                            null
                        ),
                    })]),
                })])]),
            })])]),
            'Projecten': _p.deprecated_cc($['Projecten'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Offertes': _p.deprecated_cc($['Offertes'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                    'Opbrengsten': _p.deprecated_cc($['Opbrengsten'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                        'Type': _p.deprecated_cc($['Type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'Project': return _p.ss($, ($) => ({
                                    'state': "Project",
                                    'value': ['verbose group', _p.dictionary.literal({
                                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['custom numbers']['Bedrag'](
                                                $,
                                                null
                                            ),
                                        })]),
                                        'Betaaldatum': _p.deprecated_cc($['Betaaldatum'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $p['value serializers']['custom numbers']['Datum'](
                                                $,
                                                null
                                            ),
                                        })]),
                                    })],
                                }))
                                default: return _p.au($[0])
                            }
                        })]),
                    })])]),
                })])]),
            })])]),
        })])]),
        'Leveranciers': _p.deprecated_cc($['Leveranciers'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
        'Medewerkers': _p.deprecated_cc($['Medewerkers'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
    })]
    export const Grootboekrekeningen: _i_signatures._T_Grootboekrekeningen = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Balans': _p.deprecated_cc($['Balans'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Type': _p.deprecated_cc($['Type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Bankrekening': return _p.ss($, ($) => ({
                        'state': "Bankrekening",
                        'value': ['nothing', null],
                    }))
                    case 'Overig': return _p.ss($, ($) => ({
                        'state': "Overig",
                        'value': ['nothing', null],
                    }))
                    case 'Informele rekening': return _p.ss($, ($) => ({
                        'state': "Informele rekening",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
        })])]),
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
    })]
    export const Jaarbeheer: _i_signatures._T_Jaarbeheer = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($) => ['verbose group', _p.dictionary.literal({
            'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Salarisrondes': _p.deprecated_cc($['Salarisrondes'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
            'BTW periodes': _p.deprecated_cc($['BTW periodes'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                '1. BTW-categorieen': _p.deprecated_cc($['1. BTW-categorieen'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
                'Documenten': _p.deprecated_cc($['Documenten'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                    'Bestand': _p.deprecated_cc($['Bestand'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })])]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Status': _p.deprecated_cc($['Status'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Aangegeven': return _p.ss($, ($) => ({
                            'state': "Aangegeven",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Afronding': _p.deprecated_cc($['Afronding'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                                        $,
                                        null
                                    ),
                                })]),
                                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                                        $,
                                        null
                                    ),
                                })]),
                                'Datum': _p.deprecated_cc($['Datum'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Datum'](
                                        $,
                                        null
                                    ),
                                })]),
                            })],
                        }))
                        case 'Openstaand': return _p.ss($, ($) => ({
                            'state': "Openstaand",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })])]),
        })]),
        'Balans': _p.deprecated_cc($['Balans'], ($) => ['verbose group', _p.dictionary.literal({
            'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Grootboekrekening voor winstreserve': _p.deprecated_cc($['Grootboekrekening voor winstreserve'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Grootboekrekening voor Inkoop saldo': _p.deprecated_cc($['Grootboekrekening voor Inkoop saldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Grootboekrekening voor Verkoop saldo': _p.deprecated_cc($['Grootboekrekening voor Verkoop saldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Beginsaldo nog aan te geven BTW': _p.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Beginsaldo winstreserve': _p.deprecated_cc($['Beginsaldo winstreserve'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Ja': return _p.ss($, ($) => ({
                            'state': "Ja",
                            'value': ['nothing', null],
                        }))
                        case 'Nee': return _p.ss($, ($) => ({
                            'state': "Nee",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Rekening': _p.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })])]),
            'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
                'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Ja': return _p.ss($, ($) => ({
                            'state': "Ja",
                            'value': ['nothing', null],
                        }))
                        case 'Nee': return _p.ss($, ($) => ({
                            'state': "Nee",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Rekening': _p.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'Mutaties': _p.deprecated_cc($['Mutaties'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                    'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['custom numbers']['Bedrag'](
                            $,
                            null
                        ),
                    })]),
                    'Datum': _p.deprecated_cc($['Datum'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['custom numbers']['Datum'](
                            $,
                            null
                        ),
                    })]),
                    'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })])]),
            })])]),
            'Overige balans items': _p.deprecated_cc($['Overige balans items'], ($) => ['dictionary', $.__d_map(($) => Overige_balans_item(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))]),
            'Verrekenposten': _p.deprecated_cc($['Verrekenposten'], ($) => ['dictionary', $.__d_map(($) => ['nothing', null])]),
        })]),
    })]
    export const Overige_balans_item: _i_signatures._T_Overige_balans_item = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => ({
                    'state': "Ja",
                    'value': ['nothing', null],
                }))
                case 'Nee': return _p.ss($, ($) => ({
                    'state': "Nee",
                    'value': ['verbose group', _p.dictionary.literal({
                        'Balans item': _p.deprecated_cc($['Balans item'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
    })]
    export const Verwijzing_naar_Informele_rekening: _i_signatures._T_Verwijzing_naar_Informele_rekening = ($, $p) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]
    export const Verwijzing_naar_Bankrekening: _i_signatures._T_Verwijzing_naar_Bankrekening = ($, $p) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]
    export const Handelstransacties: _i_signatures._T_Handelstransacties = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Inkopen': _p.deprecated_cc($['Inkopen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Mutaties': return _p.ss($, ($) => ({
                        'state': "Mutaties",
                        'value': ['nothing', null],
                    }))
                    case 'Rekening courant': return _p.ss($, ($) => ({
                        'state': "Rekening courant",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => ({
                        'state': "Binnenland: heffing verlegd",
                        'value': ['nothing', null],
                    }))
                    case 'Geen BTW van toepassing': return _p.ss($, ($) => ({
                        'state': "Geen BTW van toepassing",
                        'value': ['nothing', null],
                    }))
                    case 'Import van buiten de EU': return _p.ss($, ($) => ({
                        'state': "Import van buiten de EU",
                        'value': ['nothing', null],
                    }))
                    case 'Intracommunautair': return _p.ss($, ($) => ({
                        'state': "Intracommunautair",
                        'value': ['nothing', null],
                    }))
                    case 'Standaard': return _p.ss($, ($) => ({
                        'state': "Standaard",
                        'value': ['verbose group', _p.dictionary.literal({
                            'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Brondocument': _p.deprecated_cc($['Brondocument'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Toegevoegd': return _p.ss($, ($) => ({
                        'state': "Toegevoegd",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Document': _p.deprecated_cc($['Document'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    case 'Niet van toepassing': return _p.ss($, ($) => ({
                        'state': "Niet van toepassing",
                        'value': ['nothing', null],
                    }))
                    case 'Ontbreekt': return _p.ss($, ($) => ({
                        'state': "Ontbreekt",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Datum': _p.deprecated_cc($['Datum'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Datum'](
                    $,
                    null
                ),
            })]),
            'Regels': _p.deprecated_cc($['Regels'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Bekend': return _p.ss($, ($) => ({
                            'state': "Bekend",
                            'value': ['verbose group', _p.dictionary.literal({
                                'BTW-bedrag': _p.deprecated_cc($['BTW-bedrag'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                                        $,
                                        null
                                    ),
                                })]),
                                'Bedrag inclusief geheven BTW': _p.deprecated_cc($['Bedrag inclusief geheven BTW'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                                        $,
                                        null
                                    ),
                                })]),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Type': _p.deprecated_cc($['Type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Balans': return _p.ss($, ($) => ({
                            'state': "Balans",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Balans item': _p.deprecated_cc($['Balans item'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'Kosten': return _p.ss($, ($) => ({
                            'state': "Kosten",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })])]),
            'Type': _p.deprecated_cc($['Type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Bonnetje': return _p.ss($, ($) => ({
                        'state': "Bonnetje",
                        'value': ['nothing', null],
                    }))
                    case 'Inkoop (met crediteur)': return _p.ss($, ($) => ({
                        'state': "Inkoop (met crediteur)",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Crediteur': _p.deprecated_cc($['Crediteur'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'Factuurnummer': _p.deprecated_cc($['Factuurnummer'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    case 'Loonheffing': return _p.ss($, ($) => ({
                        'state': "Loonheffing",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Ronde': _p.deprecated_cc($['Ronde'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Salaris': return _p.ss($, ($) => ({
                        'state': "Salaris",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Ronde': _p.deprecated_cc($['Ronde'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'Medewerker': _p.deprecated_cc($['Medewerker'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
        })])]),
        'Verkopen': _p.deprecated_cc($['Verkopen'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Mutaties': return _p.ss($, ($) => ({
                        'state': "Mutaties",
                        'value': ['nothing', null],
                    }))
                    case 'Rekening courant': return _p.ss($, ($) => ({
                        'state': "Rekening courant",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Betalingstermijn': _p.deprecated_cc($['Betalingstermijn'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Dagen'](
                    $,
                    null
                ),
            })]),
            'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Brondocument': _p.deprecated_cc($['Brondocument'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Toegevoegd': return _p.ss($, ($) => ({
                        'state': "Toegevoegd",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Document': _p.deprecated_cc($['Document'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Debiteur': _p.deprecated_cc($['Debiteur'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Contracttype': _p.deprecated_cc($['Contracttype'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Project': return _p.ss($, ($) => ({
                        'state': "Project",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Project': _p.deprecated_cc($['Project'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'Offerte': _p.deprecated_cc($['Offerte'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Licentieovereenkomst': return _p.ss($, ($) => ({
                        'state': "Licentieovereenkomst",
                        'value': ['verbose group', _p.dictionary.literal({
                            'Overeenkomst': _p.deprecated_cc($['Overeenkomst'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
            'Datum': _p.deprecated_cc($['Datum'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Datum'](
                    $,
                    null
                ),
            })]),
            'Regels': _p.deprecated_cc($['Regels'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Intracommunautair': return _p.ss($, ($) => ({
                            'state': "Intracommunautair",
                            'value': ['nothing', null],
                        }))
                        case 'Standaard': return _p.ss($, ($) => ({
                            'state': "Standaard",
                            'value': ['verbose group', _p.dictionary.literal({
                                'BTW-categorie': _p.deprecated_cc($['BTW-categorie'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'Binnenland: heffing verlegd': return _p.ss($, ($) => ({
                            'state': "Binnenland: heffing verlegd",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'Bedrag exclusief BTW': _p.deprecated_cc($['Bedrag exclusief BTW'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Contracttype': _p.deprecated_cc($['Contracttype'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Project': return _p.ss($, ($) => ({
                            'state': "Project",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Opbrengst': _p.deprecated_cc($['Opbrengst'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'Los': return _p.ss($, ($) => ({
                            'state': "Los",
                            'value': ['nothing', null],
                        }))
                        case 'Licentieovereenkomst': return _p.ss($, ($) => ({
                            'state': "Licentieovereenkomst",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Periode': _p.deprecated_cc($['Periode'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Type': _p.deprecated_cc($['Type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Opbrengsten': return _p.ss($, ($) => ({
                            'state': "Opbrengsten",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'Balans': return _p.ss($, ($) => ({
                            'state': "Balans",
                            'value': ['verbose group', _p.dictionary.literal({
                                'Balans item': _p.deprecated_cc($['Balans item'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })])]),
        })])]),
    })]
    export const Mutaties: _i_signatures._T_Mutaties = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Verrekenpost mutaties': _p.deprecated_cc($['Verrekenpost mutaties'], ($) => ['dictionary', $.__d_map(($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Resultaat': return _p.ss($, ($) => ({
                        'state': "Resultaat",
                        'value': Balans_Resultaat_Mutatie(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    case 'Balans': return _p.ss($, ($) => ({
                        'state': "Balans",
                        'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'Informele rekening': return _p.ss($, ($) => ({
                                    'state': "Informele rekening",
                                    'value': ['verbose group', _p.dictionary.literal({
                                        'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['key'],
                                        })]),
                                    })],
                                }))
                                default: return _p.au($[0])
                            }
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
        })])])]),
        'Bankrekening Mutatie Verwerkingen': _p.deprecated_cc($['Bankrekening Mutatie Verwerkingen'], ($) => ['dictionary', $.__d_map(($) => ['dictionary', $.__d_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'Resultaat': return _p.ss($, ($) => ({
                    'state': "Resultaat",
                    'value': Balans_Resultaat_Mutatie(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                case 'Balans': return _p.ss($, ($) => ({
                    'state': "Balans",
                    'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'Informele rekening': return _p.ss($, ($) => ({
                                'state': "Informele rekening",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                })],
                            }))
                            case 'Verrekenpost': return _p.ss($, ($) => ({
                                'state': "Verrekenpost",
                                'value': ['verbose group', _p.dictionary.literal({
                                    'Verrekenpost': _p.deprecated_cc($['Verrekenpost'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                })],
                            }))
                            default: return _p.au($[0])
                        }
                    })],
                }))
                default: return _p.au($[0])
            }
        })])])]),
        'Memoriaal boekingen': _p.deprecated_cc($['Memoriaal boekingen'], ($) => ['dictionary', $.__d_map(($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Datum': _p.deprecated_cc($['Datum'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Datum'](
                    $,
                    null
                ),
            })]),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
        })])])]),
    })]
    export const Jaren: _i_signatures._T_Jaren = ($, $p) => ['dictionary', $['dictionary'].__d_map(($) => ['verbose group', _p.dictionary.literal({
        'Afgesloten': _p.deprecated_cc($['Afgesloten'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => ({
                    'state': "Ja",
                    'value': ['nothing', null],
                }))
                case 'Nee': return _p.ss($, ($) => ({
                    'state': "Nee",
                    'value': ['nothing', null],
                }))
                default: return _p.au($[0])
            }
        })]),
        'Startdatum boekjaar': _p.deprecated_cc($['Startdatum boekjaar'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Datum'](
                $,
                null
            ),
        })]),
        'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($) => Grootboekrekeningen(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Eerste boekjaar': _p.deprecated_cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Jaarbeheer': _p.deprecated_cc($['Jaarbeheer'], ($) => Jaarbeheer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Handelstransacties': _p.deprecated_cc($['Handelstransacties'], ($) => Handelstransacties(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Mutaties': _p.deprecated_cc($['Mutaties'], ($) => Mutaties(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]
    export const Balans_Resultaat_Mutatie: _i_signatures._T_Balans_Resultaat_Mutatie = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Jaar': _p.deprecated_cc($['Jaar'], ($) => ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]],
            () => ['not set', null]
        )]),
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'Inkoop': return _p.ss($, ($) => ({
                    'state': "Inkoop",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'Verkoop': return _p.ss($, ($) => ({
                    'state': "Verkoop",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                case 'BTW-periode': return _p.ss($, ($) => ({
                    'state': "BTW-periode",
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
    })]
    export const Eerste_boekjaar: _i_signatures._T_Eerste_boekjaar = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => ({
                'state': "Ja",
                'value': ['nothing', null],
            }))
            case 'Nee': return _p.ss($, ($) => ({
                'state': "Nee",
                'value': ['verbose group', _p.dictionary.literal({
                    'Vorig boekjaar': _p.deprecated_cc($['Vorig boekjaar'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })]),
                })],
            }))
            default: return _p.au($[0])
        }
    })]
    export const Root: _i_signatures._T_Root = ($, $p) => ['verbose group', _p.dictionary.literal({
        'Fiscaal': _p.deprecated_cc($['Fiscaal'], ($) => Fiscaal(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Categorieen': _p.deprecated_cc($['Categorieen'], ($) => Grootboek_Categorieen(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Beheer': _p.deprecated_cc($['Beheer'], ($) => Beheer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'Jaren': _p.deprecated_cc($['Jaren'], ($) => Jaren(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })]
