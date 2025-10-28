import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding_oude_model/marshall"


export const Root: _i_signatures._T_Root = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Bankrekeningen': _pa.cc($['Bankrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
    'Beheer': _pa.cc($['Beheer'], ($) => ['verbose group', _pa.dictionary_literal({
        'BTW-categorieen': _pa.cc($['BTW-categorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'BTW-heffing': _pa.cc($['BTW-heffing'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'BTW-promillage': _pa.cc($['BTW-promillage'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Promillage'](
                                    $,
                                    null
                                ),
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Balans': _pa.cc($['Balans'], ($) => ['verbose group', _pa.dictionary_literal({
            'Grootboekrekeningen': _pa.cc($['Grootboekrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Hoofdcategorie': _pa.cc($['Hoofdcategorie'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Subcategorie': _pa.cc($['Subcategorie'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Activa': return _pa.ss($, ($) => ({
                            'state': "Activa",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Passiva': return _pa.ss($, ($) => ({
                            'state': "Passiva",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
            'Hoofdcategorieen': _pa.cc($['Hoofdcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'Hoofdcategorie fiscus': _pa.cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'Subcategorie fiscus': _pa.cc($['Subcategorie fiscus'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })])]),
                'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Activa': return _pa.ss($, ($) => ({
                            'state': "Activa",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Passiva': return _pa.ss($, ($) => ({
                            'state': "Passiva",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
            'Hoofdcategorieen fiscus': _pa.cc($['Hoofdcategorieen fiscus'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                })])]),
                'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Activa': return _pa.ss($, ($) => ({
                            'state': "Activa",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Passiva': return _pa.ss($, ($) => ({
                            'state': "Passiva",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
        })]),
        'Gebruikers': _pa.cc($['Gebruikers'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Volledige naam': _pa.cc($['Volledige naam'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Wachtwoord': _pa.cc($['Wachtwoord'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })])]),
        'Huidige datum': _pa.cc($['Huidige datum'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Datum'](
                $,
                null
            ),
        })]),
        'Resultaat': _pa.cc($['Resultaat'], ($) => ['verbose group', _pa.dictionary_literal({
            'Correctietypes vennootschapsbelasting': _pa.cc($['Correctietypes vennootschapsbelasting'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Te corrigeren promillage': _pa.cc($['Te corrigeren promillage'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Promillage'](
                        $,
                        null
                    ),
                })]),
            })])]),
            'Grootboekrekeningen': _pa.cc($['Grootboekrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Hoofdcategorie': _pa.cc($['Hoofdcategorie'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Subcategorie': _pa.cc($['Subcategorie'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Kosten': return _pa.ss($, ($) => ({
                            'state': "Kosten",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Correctie op vennootschapsbelasting': _pa.cc($['Correctie op vennootschapsbelasting'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'Ja': return _pa.ss($, ($) => ({
                                            'state': "Ja",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                                'Correctietype': _pa.cc($['Correctietype'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            })],
                                        }))
                                        case 'Nee': return _pa.ss($, ($) => ({
                                            'state': "Nee",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                            })],
                                        }))
                                        default: return _pa.au($[0])
                                    }
                                })]),
                            })],
                        }))
                        case 'Opbrengsten': return _pa.ss($, ($) => ({
                            'state': "Opbrengsten",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
            'Hoofdcategorieen': _pa.cc($['Hoofdcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'Hoofdcategorie fiscus': _pa.cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'Subcategorie fiscus': _pa.cc($['Subcategorie fiscus'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })])]),
                'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Kosten': return _pa.ss($, ($) => ({
                            'state': "Kosten",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Opbrengsten': return _pa.ss($, ($) => ({
                            'state': "Opbrengsten",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
            'Hoofdcategorieen fiscus': _pa.cc($['Hoofdcategorieen fiscus'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                })])]),
                'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Kosten': return _pa.ss($, ($) => ({
                            'state': "Kosten",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Opbrengsten': return _pa.ss($, ($) => ({
                            'state': "Opbrengsten",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
        })]),
    })]),
    'Informele rekeningen': _pa.cc($['Informele rekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
    'Jaren': _pa.cc($['Jaren'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Afgesloten': _pa.cc($['Afgesloten'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'Ja': return _pa.ss($, ($) => ({
                    'state': "Ja",
                    'value': ['verbose group', _pa.dictionary_literal({
                    })],
                }))
                case 'Nee': return _pa.ss($, ($) => ({
                    'state': "Nee",
                    'value': ['verbose group', _pa.dictionary_literal({
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'BTW periode saldo': _pa.cc($['BTW periode saldo'], ($) => ['verbose group', _pa.dictionary_literal({
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })]),
        'BTW periodes': _pa.cc($['BTW periodes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            '1. BTW-categorieen': _pa.cc($['1. BTW-categorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            })])]),
            'Documenten': _pa.cc($['Documenten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Bestand': _pa.cc($['Bestand'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
            'Omschrijving': _pa.cc($['Omschrijving'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Status': _pa.cc($['Status'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Aangegeven': return _pa.ss($, ($) => ({
                        'state': "Aangegeven",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Afronding': _pa.cc($['Afronding'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Bedrag'](
                                    $,
                                    null
                                ),
                            })]),
                            'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Bedrag'](
                                    $,
                                    null
                                ),
                            })]),
                            'Datum': _pa.cc($['Datum'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Datum'](
                                    $,
                                    null
                                ),
                            })]),
                        })],
                    }))
                    case 'Openstaand': return _pa.ss($, ($) => ({
                        'state': "Openstaand",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Balans grootboekrekeningen': _pa.cc($['Balans grootboekrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Bankrekening': return _pa.ss($, ($) => ({
                        'state': "Bankrekening",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Informele rekening': return _pa.ss($, ($) => ({
                        'state': "Informele rekening",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Overig': return _pa.ss($, ($) => ({
                        'state': "Overig",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Bankrekeningen': _pa.cc($['Bankrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Beginsaldo': _pa.cc($['Beginsaldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Mutaties': _pa.cc($['Mutaties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Datum': _pa.cc($['Datum'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Datum'](
                        $,
                        null
                    ),
                })]),
                'Omschrijving': _pa.cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Status': _pa.cc($['Status'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Nog te verwerken': return _pa.ss($, ($) => ({
                            'state': "Nog te verwerken",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Verwerkt': return _pa.ss($, ($) => ({
                            'state': "Verwerkt",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'BTW-periode': return _pa.ss($, ($) => ({
                                            'state': "BTW-periode",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                                'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                                'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            })],
                                        }))
                                        case 'Informele rekening': return _pa.ss($, ($) => ({
                                            'state': "Informele rekening",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                                'Informele rekening': _pa.cc($['Informele rekening'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            })],
                                        }))
                                        case 'Inkoop': return _pa.ss($, ($) => ({
                                            'state': "Inkoop",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                                'Inkoop': _pa.cc($['Inkoop'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                                'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            })],
                                        }))
                                        case 'Verkoop': return _pa.ss($, ($) => ({
                                            'state': "Verkoop",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                                'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                                'Verkoop': _pa.cc($['Verkoop'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            })],
                                        }))
                                        case 'Verrekenpost': return _pa.ss($, ($) => ({
                                            'state': "Verrekenpost",
                                            'value': ['verbose group', _pa.dictionary_literal({
                                                'Verrekenpost': _pa.cc($['Verrekenpost'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                            })],
                                        }))
                                        default: return _pa.au($[0])
                                    }
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
            'Nieuw': _pa.cc($['Nieuw'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'Rekening': _pa.cc($['Rekening'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Beginsaldo nog aan te geven BTW': _pa.cc($['Beginsaldo nog aan te geven BTW'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Beginsaldo winstreserve': _pa.cc($['Beginsaldo winstreserve'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Eerste boekjaar': _pa.cc($['Eerste boekjaar'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'Ja': return _pa.ss($, ($) => ({
                    'state': "Ja",
                    'value': ['verbose group', _pa.dictionary_literal({
                    })],
                }))
                case 'Nee': return _pa.ss($, ($) => ({
                    'state': "Nee",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Vorig boekjaar': _pa.cc($['Vorig boekjaar'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Grootboekrekening voor BTW afrondingen': _pa.cc($['Grootboekrekening voor BTW afrondingen'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening voor nog aan te geven BTW': _pa.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening voor resultaat dit jaar': _pa.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening voor winstreserve': _pa.cc($['Grootboekrekening voor winstreserve'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Informele rekeningen': _pa.cc($['Informele rekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Beginsaldo': _pa.cc($['Beginsaldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Nieuw': _pa.cc($['Nieuw'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'Rekening': _pa.cc($['Rekening'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Inkoop saldo': _pa.cc($['Inkoop saldo'], ($) => ['verbose group', _pa.dictionary_literal({
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })]),
        'Inkopen': _pa.cc($['Inkopen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Mutaties': return _pa.ss($, ($) => ({
                        'state': "Mutaties",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Rekening courant': return _pa.ss($, ($) => ({
                        'state': "Rekening courant",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Rekening courant': _pa.cc($['Rekening courant'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'BTW-regime': _pa.cc($['BTW-regime'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _pa.ss($, ($) => ({
                        'state': "Binnenland: heffing verlegd",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Geen BTW van toepassing': return _pa.ss($, ($) => ({
                        'state': "Geen BTW van toepassing",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    case 'Import van buiten de EU': return _pa.ss($, ($) => ({
                        'state': "Import van buiten de EU",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Intracommunautair': return _pa.ss($, ($) => ({
                        'state': "Intracommunautair",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Standaard': return _pa.ss($, ($) => ({
                        'state': "Standaard",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'Brondocument': _pa.cc($['Brondocument'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Niet van toepassing': return _pa.ss($, ($) => ({
                        'state': "Niet van toepassing",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Ontbreekt': return _pa.ss($, ($) => ({
                        'state': "Ontbreekt",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Toegevoegd': return _pa.ss($, ($) => ({
                        'state': "Toegevoegd",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Document': _pa.cc($['Document'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'Datum': _pa.cc($['Datum'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Datum'](
                    $,
                    null
                ),
            })]),
            'Regels': _pa.cc($['Regels'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Bedrag': _pa.cc($['Bedrag'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Bekend': return _pa.ss($, ($) => ({
                            'state': "Bekend",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'BTW-bedrag': _pa.cc($['BTW-bedrag'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                                        $,
                                        null
                                    ),
                                })]),
                                'Bedrag inclusief geheven BTW': _pa.cc($['Bedrag inclusief geheven BTW'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                                        $,
                                        null
                                    ),
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'Omschrijving': _pa.cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Balans': return _pa.ss($, ($) => ({
                            'state': "Balans",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Balans item': _pa.cc($['Balans item'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'Kosten': return _pa.ss($, ($) => ({
                            'state': "Kosten",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
            'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Bonnetje': return _pa.ss($, ($) => ({
                        'state': "Bonnetje",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Inkoop (met crediteur)': return _pa.ss($, ($) => ({
                        'state': "Inkoop (met crediteur)",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Crediteur': _pa.cc($['Crediteur'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'Factuurnummer': _pa.cc($['Factuurnummer'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    case 'Loonheffing': return _pa.ss($, ($) => ({
                        'state': "Loonheffing",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Ronde': _pa.cc($['Ronde'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    case 'Salaris': return _pa.ss($, ($) => ({
                        'state': "Salaris",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Medewerker': _pa.cc($['Medewerker'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'Ronde': _pa.cc($['Ronde'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Overige balans items': _pa.cc($['Overige balans items'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Beginsaldo': _pa.cc($['Beginsaldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Memoriaal boekingen': _pa.cc($['Memoriaal boekingen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Datum': _pa.cc($['Datum'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Datum'](
                        $,
                        null
                    ),
                })]),
                'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Omschrijving': _pa.cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
            'Nieuw': _pa.cc($['Nieuw'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Balans item': _pa.cc($['Balans item'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Resultaat grootboekrekeningen': _pa.cc($['Resultaat grootboekrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        })])]),
        'Salarisrondes': _pa.cc($['Salarisrondes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        })])]),
        'Startdatum boekjaar': _pa.cc($['Startdatum boekjaar'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Datum'](
                $,
                null
            ),
        })]),
        'Verkoop saldo': _pa.cc($['Verkoop saldo'], ($) => ['verbose group', _pa.dictionary_literal({
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })]),
        'Verkopen': _pa.cc($['Verkopen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Mutaties': return _pa.ss($, ($) => ({
                        'state': "Mutaties",
                        'value': ['verbose group', _pa.dictionary_literal({
                        })],
                    }))
                    case 'Rekening courant': return _pa.ss($, ($) => ({
                        'state': "Rekening courant",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Rekening courant': _pa.cc($['Rekening courant'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Betalingstermijn': _pa.cc($['Betalingstermijn'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Dagen'](
                    $,
                    null
                ),
            })]),
            'Brondocument': _pa.cc($['Brondocument'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Toegevoegd': return _pa.ss($, ($) => ({
                        'state': "Toegevoegd",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Document': _pa.cc($['Document'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'Contracttype': _pa.cc($['Contracttype'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _pa.ss($, ($) => ({
                        'state': "Licentieovereenkomst",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Overeenkomst': _pa.cc($['Overeenkomst'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    case 'Project': return _pa.ss($, ($) => ({
                        'state': "Project",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Offerte': _pa.cc($['Offerte'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'Project': _pa.cc($['Project'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'Datum': _pa.cc($['Datum'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Datum'](
                    $,
                    null
                ),
            })]),
            'Debiteur': _pa.cc($['Debiteur'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Regels': _pa.cc($['Regels'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'BTW-regime': _pa.cc($['BTW-regime'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Binnenland: heffing verlegd': return _pa.ss($, ($) => ({
                            'state': "Binnenland: heffing verlegd",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Intracommunautair': return _pa.ss($, ($) => ({
                            'state': "Intracommunautair",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Standaard': return _pa.ss($, ($) => ({
                            'state': "Standaard",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'BTW-categorie': _pa.cc($['BTW-categorie'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'Bedrag exclusief BTW': _pa.cc($['Bedrag exclusief BTW'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Contracttype': _pa.cc($['Contracttype'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Licentieovereenkomst': return _pa.ss($, ($) => ({
                            'state': "Licentieovereenkomst",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Periode': _pa.cc($['Periode'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'Los': return _pa.ss($, ($) => ({
                            'state': "Los",
                            'value': ['verbose group', _pa.dictionary_literal({
                            })],
                        }))
                        case 'Project': return _pa.ss($, ($) => ({
                            'state': "Project",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Opbrengst': _pa.cc($['Opbrengst'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'Omschrijving': _pa.cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'Balans': return _pa.ss($, ($) => ({
                            'state': "Balans",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Balans item': _pa.cc($['Balans item'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'Opbrengsten': return _pa.ss($, ($) => ({
                            'state': "Opbrengsten",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })])]),
        })])]),
        'Verrekenposten': _pa.cc($['Verrekenposten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Mutaties': _pa.cc($['Mutaties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'BTW-periode': return _pa.ss($, ($) => ({
                            'state': "BTW-periode",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'Informele rekening': return _pa.ss($, ($) => ({
                            'state': "Informele rekening",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Informele rekening': _pa.cc($['Informele rekening'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'Inkoop': return _pa.ss($, ($) => ({
                            'state': "Inkoop",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Inkoop': _pa.cc($['Inkoop'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        case 'Verkoop': return _pa.ss($, ($) => ({
                            'state': "Verkoop",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Jaar': _pa.cc($['Jaar'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Verkoop': _pa.cc($['Verkoop'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
            })])]),
        })])]),
    })])]),
    'Klanten': _pa.cc($['Klanten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Licentieovereenkomsten': _pa.cc($['Licentieovereenkomsten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Periodes': _pa.cc($['Periodes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
            })])]),
        })])]),
        'Projecten': _pa.cc($['Projecten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Offertes': _pa.cc($['Offertes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                'Opbrengsten': _pa.cc($['Opbrengsten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'Project': return _pa.ss($, ($) => ({
                                'state': "Project",
                                'value': ['verbose group', _pa.dictionary_literal({
                                    'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $p['value serializers']['custom numbers']['Bedrag'](
                                            $,
                                            null
                                        ),
                                    })]),
                                    'Betaaldatum': _pa.cc($['Betaaldatum'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $p['value serializers']['custom numbers']['Datum'](
                                            $,
                                            null
                                        ),
                                    })]),
                                })],
                            }))
                            default: return _pa.au($[0])
                        }
                    })]),
                })])]),
            })])]),
        })])]),
    })])]),
    'Leveranciers': _pa.cc($['Leveranciers'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
    'Medewerkers': _pa.cc($['Medewerkers'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
})]
