import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding/marshall"
import * as _i_out from "astn-sealed/dist/interface/to_be_generated/astn_target"


export const Fiscaal: _i_signatures.Fiscaal = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Balans Hoofdcategorieen': _pa.cc($['Balans Hoofdcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Activa': return _pa.ss($, ($) => ({
                    'state': "Activa",
                    'value': ['nothing', null],
                }))
                case 'Passiva': return _pa.ss($, ($) => ({
                    'state': "Passiva",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })])]),
    'Resultaat Hoofdcategorieen': _pa.cc($['Resultaat Hoofdcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Kosten': return _pa.ss($, ($) => ({
                    'state': "Kosten",
                    'value': ['nothing', null],
                }))
                case 'Opbrengsten': return _pa.ss($, ($) => ({
                    'state': "Opbrengsten",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })])]),
})]
export const Grootboek_Categorieen: _i_signatures.Grootboek_Categorieen = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Correctietypes vennootschapsbelasting': _pa.cc($['Correctietypes vennootschapsbelasting'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Te corrigeren promillage': _pa.cc($['Te corrigeren promillage'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Promillage'](
                $,
                null
            ),
        })]),
    })])]),
    'Balans': _pa.cc($['Balans'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Activa': return _pa.ss($, ($) => ({
                    'state': "Activa",
                    'value': ['nothing', null],
                }))
                case 'Passiva': return _pa.ss($, ($) => ({
                    'state': "Passiva",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Hoofdcategorie fiscus': _pa.cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie fiscus': _pa.cc($['Subcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
        })])]),
    })])]),
    'Resultaat': _pa.cc($['Resultaat'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Kosten': return _pa.ss($, ($) => ({
                    'state': "Kosten",
                    'value': ['nothing', null],
                }))
                case 'Opbrengsten': return _pa.ss($, ($) => ({
                    'state': "Opbrengsten",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Subcategorieen': _pa.cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Hoofdcategorie fiscus': _pa.cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie fiscus': _pa.cc($['Subcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
        })])]),
    })])]),
})]
export const Beheer: _i_signatures.Beheer = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'BTW-categorieen': _pa.cc($['BTW-categorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'BTW-heffing': _pa.cc($['BTW-heffing'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
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
    'Grootboekrekeningen': _pa.cc($['Grootboekrekeningen'], ($) => ['verbose group', _pa.dictionary_literal({
        'Balans': _pa.cc($['Balans'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Hoofdcategorie': _pa.cc($['Hoofdcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie': _pa.cc($['Subcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Activa': return _pa.ss($, ($) => ({
                        'state': "Activa",
                        'value': ['nothing', null],
                    }))
                    case 'Passiva': return _pa.ss($, ($) => ({
                        'state': "Passiva",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Resultaat': _pa.cc($['Resultaat'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Hoofdcategorie': _pa.cc($['Hoofdcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie': _pa.cc($['Subcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Zijde': _pa.cc($['Zijde'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Kosten': return _pa.ss($, ($) => ({
                        'state': "Kosten",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Correctie op vennootschapsbelasting': _pa.cc($['Correctie op vennootschapsbelasting'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                                switch ($[0]) {
                                    case 'Ja': return _pa.ss($, ($) => ({
                                        'state': "Ja",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'Correctietype': _pa.cc($['Correctietype'], ($) => ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $['key'],
                                            })]),
                                        })],
                                    }))
                                    case 'Nee': return _pa.ss($, ($) => ({
                                        'state': "Nee",
                                        'value': ['nothing', null],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })]),
                        })],
                    }))
                    case 'Opbrengsten': return _pa.ss($, ($) => ({
                        'state': "Opbrengsten",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
    })]),
    'Rekeningen': _pa.cc($['Rekeningen'], ($) => ['verbose group', _pa.dictionary_literal({
        'Bank': _pa.cc($['Bank'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
        'Informeel': _pa.cc($['Informeel'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
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
                    'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
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
    'Leveranciers': _pa.cc($['Leveranciers'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    'Medewerkers': _pa.cc($['Medewerkers'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
})]
export const Grootboekrekeningen: _i_signatures.Grootboekrekeningen = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Balans': _pa.cc($['Balans'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Bankrekening': return _pa.ss($, ($) => ({
                    'state': "Bankrekening",
                    'value': ['nothing', null],
                }))
                case 'Overig': return _pa.ss($, ($) => ({
                    'state': "Overig",
                    'value': ['nothing', null],
                }))
                case 'Informele rekening': return _pa.ss($, ($) => ({
                    'state': "Informele rekening",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'Resultaat': _pa.cc($['Resultaat'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
})]
export const Jaarbeheer: _i_signatures.Jaarbeheer = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Resultaat': _pa.cc($['Resultaat'], ($) => ['verbose group', _pa.dictionary_literal({
        'Grootboekrekening voor BTW afrondingen': _pa.cc($['Grootboekrekening voor BTW afrondingen'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Salarisrondes': _pa.cc($['Salarisrondes'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
        'BTW periodes': _pa.cc($['BTW periodes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            '1. BTW-categorieen': _pa.cc($['1. BTW-categorieen'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
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
            'Status': _pa.cc($['Status'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
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
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
    })]),
    'Balans': _pa.cc($['Balans'], ($) => ['verbose group', _pa.dictionary_literal({
        'Grootboekrekening voor nog aan te geven BTW': _pa.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor resultaat dit jaar': _pa.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor winstreserve': _pa.cc($['Grootboekrekening voor winstreserve'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor Inkoop saldo': _pa.cc($['Grootboekrekening voor Inkoop saldo'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor Verkoop saldo': _pa.cc($['Grootboekrekening voor Verkoop saldo'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
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
        'Informele rekeningen': _pa.cc($['Informele rekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'Beginsaldo': _pa.cc($['Beginsaldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Nieuw': _pa.cc($['Nieuw'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['nothing', null],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Rekening': _pa.cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
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
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Nieuw': _pa.cc($['Nieuw'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['nothing', null],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Rekening': _pa.cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
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
            })])]),
        })])]),
        'Overige balans items': _pa.cc($['Overige balans items'], ($) => ['dictionary', $.map(($) => Overige_balans_item(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        ))]),
        'Verrekenposten': _pa.cc($['Verrekenposten'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })]),
})]
export const Overige_balans_item: _i_signatures.Overige_balans_item = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Beginsaldo': _pa.cc($['Beginsaldo'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['custom numbers']['Bedrag'](
            $,
            null
        ),
    })]),
    'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]),
    'Nieuw': _pa.cc($['Nieuw'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
        switch ($[0]) {
            case 'Ja': return _pa.ss($, ($) => ({
                'state': "Ja",
                'value': ['nothing', null],
            }))
            case 'Nee': return _pa.ss($, ($) => ({
                'state': "Nee",
                'value': ['verbose group', _pa.dictionary_literal({
                    'Balans item': _pa.cc($['Balans item'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['key'],
                    })]),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Verwijzing_naar_Informele_rekening: _i_signatures.Verwijzing_naar_Informele_rekening = ($, $p) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $['key'],
})]
export const Verwijzing_naar_Bankrekening: _i_signatures.Verwijzing_naar_Bankrekening = ($, $p) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $['key'],
})]
export const Handelstransacties: _i_signatures.Handelstransacties = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Inkopen': _pa.cc($['Inkopen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Mutaties': return _pa.ss($, ($) => ({
                    'state': "Mutaties",
                    'value': ['nothing', null],
                }))
                case 'Rekening courant': return _pa.ss($, ($) => ({
                    'state': "Rekening courant",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Rekening courant': _pa.cc($['Rekening courant'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'BTW-regime': _pa.cc($['BTW-regime'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _pa.ss($, ($) => ({
                    'state': "Binnenland: heffing verlegd",
                    'value': ['nothing', null],
                }))
                case 'Geen BTW van toepassing': return _pa.ss($, ($) => ({
                    'state': "Geen BTW van toepassing",
                    'value': ['nothing', null],
                }))
                case 'Import van buiten de EU': return _pa.ss($, ($) => ({
                    'state': "Import van buiten de EU",
                    'value': ['nothing', null],
                }))
                case 'Intracommunautair': return _pa.ss($, ($) => ({
                    'state': "Intracommunautair",
                    'value': ['nothing', null],
                }))
                case 'Standaard': return _pa.ss($, ($) => ({
                    'state': "Standaard",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Brondocument': _pa.cc($['Brondocument'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
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
                case 'Niet van toepassing': return _pa.ss($, ($) => ({
                    'state': "Niet van toepassing",
                    'value': ['nothing', null],
                }))
                case 'Ontbreekt': return _pa.ss($, ($) => ({
                    'state': "Ontbreekt",
                    'value': ['nothing', null],
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
            'Bedrag': _pa.cc($['Bedrag'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
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
            'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Balans': return _pa.ss($, ($) => ({
                        'state': "Balans",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Balans item': _pa.cc($['Balans item'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Kosten': return _pa.ss($, ($) => ({
                        'state': "Kosten",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Bonnetje': return _pa.ss($, ($) => ({
                    'state': "Bonnetje",
                    'value': ['nothing', null],
                }))
                case 'Inkoop (met crediteur)': return _pa.ss($, ($) => ({
                    'state': "Inkoop (met crediteur)",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Crediteur': _pa.cc($['Crediteur'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
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
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                case 'Salaris': return _pa.ss($, ($) => ({
                    'state': "Salaris",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Ronde': _pa.cc($['Ronde'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                        'Medewerker': _pa.cc($['Medewerker'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'Verkopen': _pa.cc($['Verkopen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Mutaties': return _pa.ss($, ($) => ({
                    'state': "Mutaties",
                    'value': ['nothing', null],
                }))
                case 'Rekening courant': return _pa.ss($, ($) => ({
                    'state': "Rekening courant",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Rekening courant': _pa.cc($['Rekening courant'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Betalingstermijn': _pa.cc($['Betalingstermijn'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Dagen'](
                $,
                null
            ),
        })]),
        'BTW-periode': _pa.cc($['BTW-periode'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Brondocument': _pa.cc($['Brondocument'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
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
        'Debiteur': _pa.cc($['Debiteur'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Contracttype': _pa.cc($['Contracttype'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Project': return _pa.ss($, ($) => ({
                    'state': "Project",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Project': _pa.cc($['Project'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                        'Offerte': _pa.cc($['Offerte'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                case 'Licentieovereenkomst': return _pa.ss($, ($) => ({
                    'state': "Licentieovereenkomst",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'Overeenkomst': _pa.cc($['Overeenkomst'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
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
            'BTW-regime': _pa.cc($['BTW-regime'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Intracommunautair': return _pa.ss($, ($) => ({
                        'state': "Intracommunautair",
                        'value': ['nothing', null],
                    }))
                    case 'Standaard': return _pa.ss($, ($) => ({
                        'state': "Standaard",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'BTW-categorie': _pa.cc($['BTW-categorie'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Binnenland: heffing verlegd': return _pa.ss($, ($) => ({
                        'state': "Binnenland: heffing verlegd",
                        'value': ['nothing', null],
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
            'Contracttype': _pa.cc($['Contracttype'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Project': return _pa.ss($, ($) => ({
                        'state': "Project",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Opbrengst': _pa.cc($['Opbrengst'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Los': return _pa.ss($, ($) => ({
                        'state': "Los",
                        'value': ['nothing', null],
                    }))
                    case 'Licentieovereenkomst': return _pa.ss($, ($) => ({
                        'state': "Licentieovereenkomst",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Periode': _pa.cc($['Periode'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
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
            'Type': _pa.cc($['Type'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Opbrengsten': return _pa.ss($, ($) => ({
                        'state': "Opbrengsten",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Balans': return _pa.ss($, ($) => ({
                        'state': "Balans",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'Balans item': _pa.cc($['Balans item'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
    })])]),
})]
export const Mutaties: _i_signatures.Mutaties = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Verrekenpost mutaties': _pa.cc($['Verrekenpost mutaties'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'Bedrag': _pa.cc($['Bedrag'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Afhandeling': _pa.cc($['Afhandeling'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Resultaat': return _pa.ss($, ($) => ({
                    'state': "Resultaat",
                    'value': Balans_Resultaat_Mutatie(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                case 'Balans': return _pa.ss($, ($) => ({
                    'state': "Balans",
                    'value': ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                        switch ($[0]) {
                            case 'Informele rekening': return _pa.ss($, ($) => ({
                                'state': "Informele rekening",
                                'value': ['verbose group', _pa.dictionary_literal({
                                    'Informele rekening': _pa.cc($['Informele rekening'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['key'],
                                    })]),
                                })],
                            }))
                            default: return _pa.au($[0])
                        }
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])])]),
    'Bankrekening Mutatie Verwerkingen': _pa.cc($['Bankrekening Mutatie Verwerkingen'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
        switch ($[0]) {
            case 'Resultaat': return _pa.ss($, ($) => ({
                'state': "Resultaat",
                'value': Balans_Resultaat_Mutatie(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'Balans': return _pa.ss($, ($) => ({
                'state': "Balans",
                'value': ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
                    switch ($[0]) {
                        case 'Informele rekening': return _pa.ss($, ($) => ({
                            'state': "Informele rekening",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Informele rekening': _pa.cc($['Informele rekening'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'Verrekenpost': return _pa.ss($, ($) => ({
                            'state': "Verrekenpost",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'Verrekenpost': _pa.cc($['Verrekenpost'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            default: return _pa.au($[0])
        }
    })])])]),
    'Memoriaal boekingen': _pa.cc($['Memoriaal boekingen'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
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
        'Grootboekrekening': _pa.cc($['Grootboekrekening'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
    })])])]),
})]
export const Jaren: _i_signatures.Jaren = ($, $p) => ['dictionary', $['dictionary'].map(($) => ['verbose group', _pa.dictionary_literal({
    'Afgesloten': _pa.cc($['Afgesloten'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
        switch ($[0]) {
            case 'Ja': return _pa.ss($, ($) => ({
                'state': "Ja",
                'value': ['nothing', null],
            }))
            case 'Nee': return _pa.ss($, ($) => ({
                'state': "Nee",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'Startdatum boekjaar': _pa.cc($['Startdatum boekjaar'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['custom numbers']['Datum'](
            $,
            null
        ),
    })]),
    'Grootboekrekeningen': _pa.cc($['Grootboekrekeningen'], ($) => Grootboekrekeningen(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Eerste boekjaar': _pa.cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Jaarbeheer': _pa.cc($['Jaarbeheer'], ($) => Jaarbeheer(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Handelstransacties': _pa.cc($['Handelstransacties'], ($) => Handelstransacties(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Mutaties': _pa.cc($['Mutaties'], ($) => Mutaties(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Balans_Resultaat_Mutatie: _i_signatures.Balans_Resultaat_Mutatie = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Jaar': _pa.cc($['Jaar'], ($) => ['optional', $.transform(
        ($): _i_out.Value.SG.optional => ['set', ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]],
        () => ['not set', null]
    )]),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
        switch ($[0]) {
            case 'Inkoop': return _pa.ss($, ($) => ({
                'state': "Inkoop",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'Verkoop': return _pa.ss($, ($) => ({
                'state': "Verkoop",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            case 'BTW-periode': return _pa.ss($, ($) => ({
                'state': "BTW-periode",
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Eerste_boekjaar: _i_signatures.Eerste_boekjaar = ($, $p) => ['state', _pa.cc($, ($): _i_out.Value.SG.state => {
    switch ($[0]) {
        case 'Ja': return _pa.ss($, ($) => ({
            'state': "Ja",
            'value': ['nothing', null],
        }))
        case 'Nee': return _pa.ss($, ($) => ({
            'state': "Nee",
            'value': ['verbose group', _pa.dictionary_literal({
                'Vorig boekjaar': _pa.cc($['Vorig boekjaar'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Root: _i_signatures.Root = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'Fiscaal': _pa.cc($['Fiscaal'], ($) => Fiscaal(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Categorieen': _pa.cc($['Categorieen'], ($) => Grootboek_Categorieen(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Beheer': _pa.cc($['Beheer'], ($) => Beheer(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Jaren': _pa.cc($['Jaren'], ($) => Jaren(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
