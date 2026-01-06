import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding/marshall"
import * as _i_out from "astn-sealed/dist/interface/to_be_generated/astn_target"


export const Fiscaal: _i_signatures.Fiscaal = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Balans Hoofdcategorieen': _pa.deprecated_cc($['Balans Hoofdcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Zijde': _pa.deprecated_cc($['Zijde'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
        'Subcategorieen': _pa.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })])]),
    'Resultaat Hoofdcategorieen': _pa.deprecated_cc($['Resultaat Hoofdcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Zijde': _pa.deprecated_cc($['Zijde'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
        'Subcategorieen': _pa.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })])]),
})]
export const Grootboek_Categorieen: _i_signatures.Grootboek_Categorieen = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Correctietypes vennootschapsbelasting': _pa.deprecated_cc($['Correctietypes vennootschapsbelasting'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Te corrigeren promillage': _pa.deprecated_cc($['Te corrigeren promillage'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Promillage'](
                $,
                null
            ),
        })]),
    })])]),
    'Balans': _pa.deprecated_cc($['Balans'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Zijde': _pa.deprecated_cc($['Zijde'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
        'Subcategorieen': _pa.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Hoofdcategorie fiscus': _pa.deprecated_cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie fiscus': _pa.deprecated_cc($['Subcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
        })])]),
    })])]),
    'Resultaat': _pa.deprecated_cc($['Resultaat'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Zijde': _pa.deprecated_cc($['Zijde'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
        'Subcategorieen': _pa.deprecated_cc($['Subcategorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Hoofdcategorie fiscus': _pa.deprecated_cc($['Hoofdcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie fiscus': _pa.deprecated_cc($['Subcategorie fiscus'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
        })])]),
    })])]),
})]
export const Beheer: _i_signatures.Beheer = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'BTW-categorieen': _pa.deprecated_cc($['BTW-categorieen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'BTW-heffing': _pa.deprecated_cc($['BTW-heffing'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Ja': return _pa.ss($, ($) => ({
                    'state': "Ja",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'BTW-promillage': _pa.deprecated_cc($['BTW-promillage'], ($) => ['text', ({
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
    'Grootboekrekeningen': _pa.deprecated_cc($['Grootboekrekeningen'], ($) => ['verbose group', _pa.dictionary.literal({
        'Balans': _pa.deprecated_cc($['Balans'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Hoofdcategorie': _pa.deprecated_cc($['Hoofdcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie': _pa.deprecated_cc($['Subcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Zijde': _pa.deprecated_cc($['Zijde'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
        'Resultaat': _pa.deprecated_cc($['Resultaat'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Hoofdcategorie': _pa.deprecated_cc($['Hoofdcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Subcategorie': _pa.deprecated_cc($['Subcategorie'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Zijde': _pa.deprecated_cc($['Zijde'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Kosten': return _pa.ss($, ($) => ({
                        'state': "Kosten",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Correctie op vennootschapsbelasting': _pa.deprecated_cc($['Correctie op vennootschapsbelasting'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                                switch ($[0]) {
                                    case 'Ja': return _pa.ss($, ($) => ({
                                        'state': "Ja",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'Correctietype': _pa.deprecated_cc($['Correctietype'], ($) => ['text', ({
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
    'Rekeningen': _pa.deprecated_cc($['Rekeningen'], ($) => ['verbose group', _pa.dictionary.literal({
        'Bank': _pa.deprecated_cc($['Bank'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
        'Informeel': _pa.deprecated_cc($['Informeel'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })]),
    'Gebruikers': _pa.deprecated_cc($['Gebruikers'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Volledige naam': _pa.deprecated_cc($['Volledige naam'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Wachtwoord': _pa.deprecated_cc($['Wachtwoord'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'Klanten': _pa.deprecated_cc($['Klanten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Licentieovereenkomsten': _pa.deprecated_cc($['Licentieovereenkomsten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Periodes': _pa.deprecated_cc($['Periodes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
            })])]),
        })])]),
        'Projecten': _pa.deprecated_cc($['Projecten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Offertes': _pa.deprecated_cc($['Offertes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                'Opbrengsten': _pa.deprecated_cc($['Opbrengsten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                    'Type': _pa.deprecated_cc($['Type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                        switch ($[0]) {
                            case 'Project': return _pa.ss($, ($) => ({
                                'state': "Project",
                                'value': ['verbose group', _pa.dictionary.literal({
                                    'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $p['value serializers']['custom numbers']['Bedrag'](
                                            $,
                                            null
                                        ),
                                    })]),
                                    'Betaaldatum': _pa.deprecated_cc($['Betaaldatum'], ($) => ['text', ({
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
    'Leveranciers': _pa.deprecated_cc($['Leveranciers'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    'Medewerkers': _pa.deprecated_cc($['Medewerkers'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
})]
export const Grootboekrekeningen: _i_signatures.Grootboekrekeningen = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Balans': _pa.deprecated_cc($['Balans'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Type': _pa.deprecated_cc($['Type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
    'Resultaat': _pa.deprecated_cc($['Resultaat'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
})]
export const Jaarbeheer: _i_signatures.Jaarbeheer = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Resultaat': _pa.deprecated_cc($['Resultaat'], ($) => ['verbose group', _pa.dictionary.literal({
        'Grootboekrekening voor BTW afrondingen': _pa.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Salarisrondes': _pa.deprecated_cc($['Salarisrondes'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
        'BTW periodes': _pa.deprecated_cc($['BTW periodes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            '1. BTW-categorieen': _pa.deprecated_cc($['1. BTW-categorieen'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
            'Documenten': _pa.deprecated_cc($['Documenten'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                'Bestand': _pa.deprecated_cc($['Bestand'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
            'Omschrijving': _pa.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Status': _pa.deprecated_cc($['Status'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Aangegeven': return _pa.ss($, ($) => ({
                        'state': "Aangegeven",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Afronding': _pa.deprecated_cc($['Afronding'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Bedrag'](
                                    $,
                                    null
                                ),
                            })]),
                            'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Bedrag'](
                                    $,
                                    null
                                ),
                            })]),
                            'Datum': _pa.deprecated_cc($['Datum'], ($) => ['text', ({
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
    'Balans': _pa.deprecated_cc($['Balans'], ($) => ['verbose group', _pa.dictionary.literal({
        'Grootboekrekening voor nog aan te geven BTW': _pa.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor resultaat dit jaar': _pa.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor winstreserve': _pa.deprecated_cc($['Grootboekrekening voor winstreserve'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor Inkoop saldo': _pa.deprecated_cc($['Grootboekrekening voor Inkoop saldo'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Grootboekrekening voor Verkoop saldo': _pa.deprecated_cc($['Grootboekrekening voor Verkoop saldo'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Beginsaldo nog aan te geven BTW': _pa.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Beginsaldo winstreserve': _pa.deprecated_cc($['Beginsaldo winstreserve'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Informele rekeningen': _pa.deprecated_cc($['Informele rekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Beginsaldo': _pa.deprecated_cc($['Beginsaldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Grootboekrekening': _pa.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Nieuw': _pa.deprecated_cc($['Nieuw'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['nothing', null],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Rekening': _pa.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
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
        'Bankrekeningen': _pa.deprecated_cc($['Bankrekeningen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Beginsaldo': _pa.deprecated_cc($['Beginsaldo'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Grootboekrekening': _pa.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['key'],
            })]),
            'Nieuw': _pa.deprecated_cc($['Nieuw'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Ja': return _pa.ss($, ($) => ({
                        'state': "Ja",
                        'value': ['nothing', null],
                    }))
                    case 'Nee': return _pa.ss($, ($) => ({
                        'state': "Nee",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Rekening': _pa.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
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
            'Mutaties': _pa.deprecated_cc($['Mutaties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Bedrag'](
                        $,
                        null
                    ),
                })]),
                'Datum': _pa.deprecated_cc($['Datum'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['custom numbers']['Datum'](
                        $,
                        null
                    ),
                })]),
                'Omschrijving': _pa.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })])]),
        })])]),
        'Overige balans items': _pa.deprecated_cc($['Overige balans items'], ($) => ['dictionary', $.map(($) => Overige_balans_item(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        ))]),
        'Verrekenposten': _pa.deprecated_cc($['Verrekenposten'], ($) => ['dictionary', $.map(($) => ['nothing', null])]),
    })]),
})]
export const Overige_balans_item: _i_signatures.Overige_balans_item = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Beginsaldo': _pa.deprecated_cc($['Beginsaldo'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['custom numbers']['Bedrag'](
            $,
            null
        ),
    })]),
    'Grootboekrekening': _pa.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]),
    'Nieuw': _pa.deprecated_cc($['Nieuw'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
        switch ($[0]) {
            case 'Ja': return _pa.ss($, ($) => ({
                'state': "Ja",
                'value': ['nothing', null],
            }))
            case 'Nee': return _pa.ss($, ($) => ({
                'state': "Nee",
                'value': ['verbose group', _pa.dictionary.literal({
                    'Balans item': _pa.deprecated_cc($['Balans item'], ($) => ['text', ({
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
export const Handelstransacties: _i_signatures.Handelstransacties = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Inkopen': _pa.deprecated_cc($['Inkopen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Afhandeling': _pa.deprecated_cc($['Afhandeling'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Mutaties': return _pa.ss($, ($) => ({
                    'state': "Mutaties",
                    'value': ['nothing', null],
                }))
                case 'Rekening courant': return _pa.ss($, ($) => ({
                    'state': "Rekening courant",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Rekening courant': _pa.deprecated_cc($['Rekening courant'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'BTW-regime': _pa.deprecated_cc($['BTW-regime'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
                    'value': ['verbose group', _pa.dictionary.literal({
                        'BTW-periode': _pa.deprecated_cc($['BTW-periode'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Brondocument': _pa.deprecated_cc($['Brondocument'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Toegevoegd': return _pa.ss($, ($) => ({
                    'state': "Toegevoegd",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Document': _pa.deprecated_cc($['Document'], ($) => ['text', ({
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
        'Datum': _pa.deprecated_cc($['Datum'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Datum'](
                $,
                null
            ),
        })]),
        'Regels': _pa.deprecated_cc($['Regels'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Bekend': return _pa.ss($, ($) => ({
                        'state': "Bekend",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'BTW-bedrag': _pa.deprecated_cc($['BTW-bedrag'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['custom numbers']['Bedrag'](
                                    $,
                                    null
                                ),
                            })]),
                            'Bedrag inclusief geheven BTW': _pa.deprecated_cc($['Bedrag inclusief geheven BTW'], ($) => ['text', ({
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
            'Omschrijving': _pa.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Type': _pa.deprecated_cc($['Type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Balans': return _pa.ss($, ($) => ({
                        'state': "Balans",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Balans item': _pa.deprecated_cc($['Balans item'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Kosten': return _pa.ss($, ($) => ({
                        'state': "Kosten",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Grootboekrekening': _pa.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
        })])]),
        'Type': _pa.deprecated_cc($['Type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Bonnetje': return _pa.ss($, ($) => ({
                    'state': "Bonnetje",
                    'value': ['nothing', null],
                }))
                case 'Inkoop (met crediteur)': return _pa.ss($, ($) => ({
                    'state': "Inkoop (met crediteur)",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Crediteur': _pa.deprecated_cc($['Crediteur'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                        'Factuurnummer': _pa.deprecated_cc($['Factuurnummer'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                    })],
                }))
                case 'Loonheffing': return _pa.ss($, ($) => ({
                    'state': "Loonheffing",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Ronde': _pa.deprecated_cc($['Ronde'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                case 'Salaris': return _pa.ss($, ($) => ({
                    'state': "Salaris",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Ronde': _pa.deprecated_cc($['Ronde'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                        'Medewerker': _pa.deprecated_cc($['Medewerker'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'Verkopen': _pa.deprecated_cc($['Verkopen'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Afhandeling': _pa.deprecated_cc($['Afhandeling'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Mutaties': return _pa.ss($, ($) => ({
                    'state': "Mutaties",
                    'value': ['nothing', null],
                }))
                case 'Rekening courant': return _pa.ss($, ($) => ({
                    'state': "Rekening courant",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Rekening courant': _pa.deprecated_cc($['Rekening courant'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Betalingstermijn': _pa.deprecated_cc($['Betalingstermijn'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Dagen'](
                $,
                null
            ),
        })]),
        'BTW-periode': _pa.deprecated_cc($['BTW-periode'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Brondocument': _pa.deprecated_cc($['Brondocument'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Toegevoegd': return _pa.ss($, ($) => ({
                    'state': "Toegevoegd",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Document': _pa.deprecated_cc($['Document'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Debiteur': _pa.deprecated_cc($['Debiteur'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
        'Contracttype': _pa.deprecated_cc($['Contracttype'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
            switch ($[0]) {
                case 'Project': return _pa.ss($, ($) => ({
                    'state': "Project",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Project': _pa.deprecated_cc($['Project'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                        'Offerte': _pa.deprecated_cc($['Offerte'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                case 'Licentieovereenkomst': return _pa.ss($, ($) => ({
                    'state': "Licentieovereenkomst",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'Overeenkomst': _pa.deprecated_cc($['Overeenkomst'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'Datum': _pa.deprecated_cc($['Datum'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Datum'](
                $,
                null
            ),
        })]),
        'Regels': _pa.deprecated_cc($['Regels'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'BTW-regime': _pa.deprecated_cc($['BTW-regime'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Intracommunautair': return _pa.ss($, ($) => ({
                        'state': "Intracommunautair",
                        'value': ['nothing', null],
                    }))
                    case 'Standaard': return _pa.ss($, ($) => ({
                        'state': "Standaard",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'BTW-categorie': _pa.deprecated_cc($['BTW-categorie'], ($) => ['text', ({
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
            'Bedrag exclusief BTW': _pa.deprecated_cc($['Bedrag exclusief BTW'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['custom numbers']['Bedrag'](
                    $,
                    null
                ),
            })]),
            'Contracttype': _pa.deprecated_cc($['Contracttype'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Project': return _pa.ss($, ($) => ({
                        'state': "Project",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Opbrengst': _pa.deprecated_cc($['Opbrengst'], ($) => ['text', ({
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
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Periode': _pa.deprecated_cc($['Periode'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]),
            'Omschrijving': _pa.deprecated_cc($['Omschrijving'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Type': _pa.deprecated_cc($['Type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                switch ($[0]) {
                    case 'Opbrengsten': return _pa.ss($, ($) => ({
                        'state': "Opbrengsten",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Grootboekrekening': _pa.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'Balans': return _pa.ss($, ($) => ({
                        'state': "Balans",
                        'value': ['verbose group', _pa.dictionary.literal({
                            'Balans item': _pa.deprecated_cc($['Balans item'], ($) => ['text', ({
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
export const Mutaties: _i_signatures.Mutaties = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Verrekenpost mutaties': _pa.deprecated_cc($['Verrekenpost mutaties'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Afhandeling': _pa.deprecated_cc($['Afhandeling'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
                    'value': ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                        switch ($[0]) {
                            case 'Informele rekening': return _pa.ss($, ($) => ({
                                'state': "Informele rekening",
                                'value': ['verbose group', _pa.dictionary.literal({
                                    'Informele rekening': _pa.deprecated_cc($['Informele rekening'], ($) => ['text', ({
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
    'Bankrekening Mutatie Verwerkingen': _pa.deprecated_cc($['Bankrekening Mutatie Verwerkingen'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
                'value': ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
                    switch ($[0]) {
                        case 'Informele rekening': return _pa.ss($, ($) => ({
                            'state': "Informele rekening",
                            'value': ['verbose group', _pa.dictionary.literal({
                                'Informele rekening': _pa.deprecated_cc($['Informele rekening'], ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['key'],
                                })]),
                            })],
                        }))
                        case 'Verrekenpost': return _pa.ss($, ($) => ({
                            'state': "Verrekenpost",
                            'value': ['verbose group', _pa.dictionary.literal({
                                'Verrekenpost': _pa.deprecated_cc($['Verrekenpost'], ($) => ['text', ({
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
    'Memoriaal boekingen': _pa.deprecated_cc($['Memoriaal boekingen'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'Bedrag': _pa.deprecated_cc($['Bedrag'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Bedrag'](
                $,
                null
            ),
        })]),
        'Datum': _pa.deprecated_cc($['Datum'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['custom numbers']['Datum'](
                $,
                null
            ),
        })]),
        'Omschrijving': _pa.deprecated_cc($['Omschrijving'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening': _pa.deprecated_cc($['Grootboekrekening'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]),
    })])])]),
})]
export const Jaren: _i_signatures.Jaren = ($, $p) => ['dictionary', $['dictionary'].map(($) => ['verbose group', _pa.dictionary.literal({
    'Afgesloten': _pa.deprecated_cc($['Afgesloten'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
    'Startdatum boekjaar': _pa.deprecated_cc($['Startdatum boekjaar'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['custom numbers']['Datum'](
            $,
            null
        ),
    })]),
    'Grootboekrekeningen': _pa.deprecated_cc($['Grootboekrekeningen'], ($) => Grootboekrekeningen(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Eerste boekjaar': _pa.deprecated_cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Jaarbeheer': _pa.deprecated_cc($['Jaarbeheer'], ($) => Jaarbeheer(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Handelstransacties': _pa.deprecated_cc($['Handelstransacties'], ($) => Handelstransacties(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Mutaties': _pa.deprecated_cc($['Mutaties'], ($) => Mutaties(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Balans_Resultaat_Mutatie: _i_signatures.Balans_Resultaat_Mutatie = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Jaar': _pa.deprecated_cc($['Jaar'], ($) => ['optional', $.transform(
        ($): _i_out.Value.SG.optional => ['set', ['text', ({
            'delimiter': ['backtick', null],
            'value': $['key'],
        })]],
        () => ['not set', null]
    )]),
    'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
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
export const Eerste_boekjaar: _i_signatures.Eerste_boekjaar = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out.Value.SG.state => {
    switch ($[0]) {
        case 'Ja': return _pa.ss($, ($) => ({
            'state': "Ja",
            'value': ['nothing', null],
        }))
        case 'Nee': return _pa.ss($, ($) => ({
            'state': "Nee",
            'value': ['verbose group', _pa.dictionary.literal({
                'Vorig boekjaar': _pa.deprecated_cc($['Vorig boekjaar'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['key'],
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Root: _i_signatures.Root = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'Fiscaal': _pa.deprecated_cc($['Fiscaal'], ($) => Fiscaal(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Categorieen': _pa.deprecated_cc($['Categorieen'], ($) => Grootboek_Categorieen(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Beheer': _pa.deprecated_cc($['Beheer'], ($) => Beheer(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'Jaren': _pa.deprecated_cc($['Jaren'], ($) => Jaren(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
