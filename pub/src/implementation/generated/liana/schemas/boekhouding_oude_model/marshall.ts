
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding_oude_model/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Bestandsnaam: t_signatures.Bestandsnaam = ($,) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Root: t_signatures.Root = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    }))]])]),
    'Beheer': _p.deprecated_cc($['Beheer'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
        'Balans': _p.deprecated_cc($['Balans'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Activa':
                            return _p.ss($, ($,) => ({
                                'option': 'Activa',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Passiva':
                            return _p.ss($, ($,) => ({
                                'option': 'Passiva',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
            }))]])]),
            'Hoofdcategorieen': _p.deprecated_cc($['Hoofdcategorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Activa':
                            return _p.ss($, ($,) => ({
                                'option': 'Activa',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Passiva':
                            return _p.ss($, ($,) => ({
                                'option': 'Passiva',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                    'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                }))]])]),
            }))]])]),
            'Hoofdcategorieen fiscus': _p.deprecated_cc($['Hoofdcategorieen fiscus'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Activa':
                            return _p.ss($, ($,) => ({
                                'option': 'Activa',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Passiva':
                            return _p.ss($, ($,) => ({
                                'option': 'Passiva',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                }))]])]),
            }))]])]),
        }))]]),
        'BTW-categorieen': _p.deprecated_cc($['BTW-categorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'BTW-heffing': _p.deprecated_cc($['BTW-heffing'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ({
                            'option': 'Ja',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'BTW-promillage': _p.deprecated_cc($['BTW-promillage'], ($,) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize($),
                                })]),
                            }))]],
                        }))
                    case 'Nee':
                        return _p.ss($, ($,) => ({
                            'option': 'Nee',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Gebruikers': _p.deprecated_cc($['Gebruikers'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Volledige naam': _p.deprecated_cc($['Volledige naam'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Wachtwoord': _p.deprecated_cc($['Wachtwoord'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        }))]])]),
        'Huidige datum': _p.deprecated_cc($['Huidige datum'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_number.serialize($),
        })]),
        'Resultaat': _p.deprecated_cc($['Resultaat'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'Correctietypes vennootschapsbelasting': _p.deprecated_cc($['Correctietypes vennootschapsbelasting'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Te corrigeren promillage': _p.deprecated_cc($['Te corrigeren promillage'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
            }))]])]),
            'Grootboekrekeningen': _p.deprecated_cc($['Grootboekrekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Kosten':
                            return _p.ss($, ($,) => ({
                                'option': 'Kosten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Correctie op vennootschapsbelasting': _p.deprecated_cc($['Correctie op vennootschapsbelasting'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'Ja',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'Correctietype': _p.deprecated_cc($['Correctietype'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                    }))]],
                                                }))
                                            case 'Nee':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'Nee',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    }))]],
                                                }))
                                            default:
                                                return _p.au($[0])
                                        }
                                    })]),
                                }))]],
                            }))
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ({
                                'option': 'Opbrengsten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
            }))]])]),
            'Hoofdcategorieen': _p.deprecated_cc($['Hoofdcategorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Kosten':
                            return _p.ss($, ($,) => ({
                                'option': 'Kosten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ({
                                'option': 'Opbrengsten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                    'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($,) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                }))]])]),
            }))]])]),
            'Hoofdcategorieen fiscus': _p.deprecated_cc($['Hoofdcategorieen fiscus'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Zijde': _p.deprecated_cc($['Zijde'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Kosten':
                            return _p.ss($, ($,) => ({
                                'option': 'Kosten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ({
                                'option': 'Opbrengsten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                }))]])]),
            }))]])]),
        }))]]),
    }))]]),
    'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    }))]])]),
    'Jaren': _p.deprecated_cc($['Jaren'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        'Afgesloten': _p.deprecated_cc($['Afgesloten'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss($, ($,) => ({
                        'option': 'Ja',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                        }))]],
                    }))
                case 'Nee':
                    return _p.ss($, ($,) => ({
                        'option': 'Nee',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                        }))]],
                    }))
                default:
                    return _p.au($[0])
            }
        })]),
        'Balans grootboekrekeningen': _p.deprecated_cc($['Balans grootboekrekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Type': _p.deprecated_cc($['Type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Bankrekening':
                        return _p.ss($, ($,) => ({
                            'option': 'Bankrekening',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Overig':
                        return _p.ss($, ($,) => ({
                            'option': 'Overig',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Informele rekening':
                        return _p.ss($, ($,) => ({
                            'option': 'Informele rekening',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize($),
            })]),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
                'Datum': _p.deprecated_cc($['Datum'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Status': _p.deprecated_cc($['Status'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Nog te verwerken':
                            return _p.ss($, ($,) => ({
                                'option': 'Nog te verwerken',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Verwerkt':
                            return _p.ss($, ($,) => ({
                                'option': 'Verwerkt',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                        switch ($[0]) {
                                            case 'Inkoop':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'Inkoop',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                        'Inkoop': _p.deprecated_cc($['Inkoop'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                    }))]],
                                                }))
                                            case 'Verrekenpost':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'Verrekenpost',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'Verrekenpost': _p.deprecated_cc($['Verrekenpost'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                    }))]],
                                                }))
                                            case 'BTW-periode':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'BTW-periode',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                        'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                    }))]],
                                                }))
                                            case 'Verkoop':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'Verkoop',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                        'Verkoop': _p.deprecated_cc($['Verkoop'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                    }))]],
                                                }))
                                            case 'Informele rekening':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'Informele rekening',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                    }))]],
                                                }))
                                            default:
                                                return _p.au($[0])
                                        }
                                    })]),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
            }))]])]),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ({
                            'option': 'Ja',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Nee':
                        return _p.ss($, ($,) => ({
                            'option': 'Nee',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Rekening': _p.deprecated_cc($['Rekening'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Beginsaldo nog aan te geven BTW': _p.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_number.serialize($),
        })]),
        'Beginsaldo winstreserve': _p.deprecated_cc($['Beginsaldo winstreserve'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_number.serialize($),
        })]),
        'BTW periode saldo': _p.deprecated_cc($['BTW periode saldo'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        }))]]),
        'BTW periodes': _p.deprecated_cc($['BTW periodes'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            '1. BTW-categorieen': _p.deprecated_cc($['1. BTW-categorieen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            }))]])]),
            'Documenten': _p.deprecated_cc($['Documenten'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Bestand': _p.deprecated_cc($['Bestand'], ($,) => Bestandsnaam($)),
            }))]])]),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Status': _p.deprecated_cc($['Status'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Aangegeven':
                        return _p.ss($, ($,) => ({
                            'option': 'Aangegeven',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Afronding': _p.deprecated_cc($['Afronding'], ($,) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize($),
                                })]),
                                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize($),
                                })]),
                                'Datum': _p.deprecated_cc($['Datum'], ($,) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize($),
                                })]),
                            }))]],
                        }))
                    case 'Openstaand':
                        return _p.ss($, ($,) => ({
                            'option': 'Openstaand',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Eerste boekjaar': _p.deprecated_cc($['Eerste boekjaar'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss($, ($,) => ({
                        'option': 'Ja',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                        }))]],
                    }))
                case 'Nee':
                    return _p.ss($, ($,) => ({
                        'option': 'Nee',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'Vorig boekjaar': _p.deprecated_cc($['Vorig boekjaar'], ($,) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        }))]],
                    }))
                default:
                    return _p.au($[0])
            }
        })]),
        'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Grootboekrekening voor winstreserve': _p.deprecated_cc($['Grootboekrekening voor winstreserve'], ($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize($),
            })]),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ({
                            'option': 'Ja',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Nee':
                        return _p.ss($, ($,) => ({
                            'option': 'Nee',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Rekening': _p.deprecated_cc($['Rekening'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Inkopen': _p.deprecated_cc($['Inkopen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Mutaties':
                        return _p.ss($, ($,) => ({
                            'option': 'Mutaties',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Rekening courant':
                        return _p.ss($, ($,) => ({
                            'option': 'Rekening courant',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
            'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd':
                        return _p.ss($, ($,) => ({
                            'option': 'Binnenland: heffing verlegd',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Geen BTW van toepassing':
                        return _p.ss($, ($,) => ({
                            'option': 'Geen BTW van toepassing',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    case 'Import van buiten de EU':
                        return _p.ss($, ($,) => ({
                            'option': 'Import van buiten de EU',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Intracommunautair':
                        return _p.ss($, ($,) => ({
                            'option': 'Intracommunautair',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Standaard':
                        return _p.ss($, ($,) => ({
                            'option': 'Standaard',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
            'Brondocument': _p.deprecated_cc($['Brondocument'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Toegevoegd':
                        return _p.ss($, ($,) => ({
                            'option': 'Toegevoegd',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Document': _p.deprecated_cc($['Document'], ($,) => Bestandsnaam($)),
                            }))]],
                        }))
                    case 'Niet van toepassing':
                        return _p.ss($, ($,) => ({
                            'option': 'Niet van toepassing',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Ontbreekt':
                        return _p.ss($, ($,) => ({
                            'option': 'Ontbreekt',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Nog toevoegen':
                        return _p.ss($, ($,) => ({
                            'option': 'Nog toevoegen',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
            'Datum': _p.deprecated_cc($['Datum'], ($,) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize($),
            })]),
            'Regels': _p.deprecated_cc($['Regels'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Bekend':
                            return _p.ss($, ($,) => ({
                                'option': 'Bekend',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'BTW-bedrag': _p.deprecated_cc($['BTW-bedrag'], ($,) => ['text', ({
                                        'delimiter': ['none', null],
                                        'value': v_serialize_number.serialize($),
                                    })]),
                                    'Bedrag inclusief geheven BTW': _p.deprecated_cc($['Bedrag inclusief geheven BTW'], ($,) => ['text', ({
                                        'delimiter': ['none', null],
                                        'value': v_serialize_number.serialize($),
                                    })]),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Type': _p.deprecated_cc($['Type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Balans':
                            return _p.ss($, ($,) => ({
                                'option': 'Balans',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Balans item': _p.deprecated_cc($['Balans item'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'Kosten':
                            return _p.ss($, ($,) => ({
                                'option': 'Kosten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
            }))]])]),
            'Type': _p.deprecated_cc($['Type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Bonnetje':
                        return _p.ss($, ($,) => ({
                            'option': 'Bonnetje',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Inkoop (met crediteur)':
                        return _p.ss($, ($,) => ({
                            'option': 'Inkoop (met crediteur)',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Crediteur': _p.deprecated_cc($['Crediteur'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Factuurnummer': _p.deprecated_cc($['Factuurnummer'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    case 'Loonheffing':
                        return _p.ss($, ($,) => ({
                            'option': 'Loonheffing',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Ronde': _p.deprecated_cc($['Ronde'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    case 'Salaris':
                        return _p.ss($, ($,) => ({
                            'option': 'Salaris',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Ronde': _p.deprecated_cc($['Ronde'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Medewerker': _p.deprecated_cc($['Medewerker'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Inkoop saldo': _p.deprecated_cc($['Inkoop saldo'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        }))]]),
        'Overige balans items': _p.deprecated_cc($['Overige balans items'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($,) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize($),
            })]),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Memoriaal boekingen': _p.deprecated_cc($['Memoriaal boekingen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
                'Datum': _p.deprecated_cc($['Datum'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
                'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            }))]])]),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss($, ($,) => ({
                            'option': 'Ja',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Nee':
                        return _p.ss($, ($,) => ({
                            'option': 'Nee',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Balans item': _p.deprecated_cc($['Balans item'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
        }))]])]),
        'Resultaat grootboekrekeningen': _p.deprecated_cc($['Resultaat grootboekrekeningen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        }))]])]),
        'Salarisrondes': _p.deprecated_cc($['Salarisrondes'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        }))]])]),
        'Startdatum boekjaar': _p.deprecated_cc($['Startdatum boekjaar'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_number.serialize($),
        })]),
        'Verkoop saldo': _p.deprecated_cc($['Verkoop saldo'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        }))]]),
        'Verkopen': _p.deprecated_cc($['Verkopen'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Mutaties':
                        return _p.ss($, ($,) => ({
                            'option': 'Mutaties',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                            }))]],
                        }))
                    case 'Rekening courant':
                        return _p.ss($, ($,) => ({
                            'option': 'Rekening courant',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
            'Betalingstermijn': _p.deprecated_cc($['Betalingstermijn'], ($,) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize($),
            })]),
            'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Brondocument': _p.deprecated_cc($['Brondocument'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Toegevoegd':
                        return _p.ss($, ($,) => ({
                            'option': 'Toegevoegd',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Document': _p.deprecated_cc($['Document'], ($,) => Bestandsnaam($)),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
            'Contracttype': _p.deprecated_cc($['Contracttype'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                switch ($[0]) {
                    case 'Project':
                        return _p.ss($, ($,) => ({
                            'option': 'Project',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Project': _p.deprecated_cc($['Project'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'Offerte': _p.deprecated_cc($['Offerte'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    case 'Licentieovereenkomst':
                        return _p.ss($, ($,) => ({
                            'option': 'Licentieovereenkomst',
                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                'Overeenkomst': _p.deprecated_cc($['Overeenkomst'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                            }))]],
                        }))
                    default:
                        return _p.au($[0])
                }
            })]),
            'Datum': _p.deprecated_cc($['Datum'], ($,) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize($),
            })]),
            'Debiteur': _p.deprecated_cc($['Debiteur'], ($,) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'Regels': _p.deprecated_cc($['Regels'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Intracommunautair':
                            return _p.ss($, ($,) => ({
                                'option': 'Intracommunautair',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Standaard':
                            return _p.ss($, ($,) => ({
                                'option': 'Standaard',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'BTW-categorie': _p.deprecated_cc($['BTW-categorie'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'Binnenland: heffing verlegd':
                            return _p.ss($, ($,) => ({
                                'option': 'Binnenland: heffing verlegd',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Bedrag exclusief BTW': _p.deprecated_cc($['Bedrag exclusief BTW'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
                'Contracttype': _p.deprecated_cc($['Contracttype'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Project':
                            return _p.ss($, ($,) => ({
                                'option': 'Project',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Opbrengst': _p.deprecated_cc($['Opbrengst'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'Los':
                            return _p.ss($, ($,) => ({
                                'option': 'Los',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                }))]],
                            }))
                        case 'Licentieovereenkomst':
                            return _p.ss($, ($,) => ({
                                'option': 'Licentieovereenkomst',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Periode': _p.deprecated_cc($['Periode'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($,) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'Type': _p.deprecated_cc($['Type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Opbrengsten':
                            return _p.ss($, ($,) => ({
                                'option': 'Opbrengsten',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'Balans':
                            return _p.ss($, ($,) => ({
                                'option': 'Balans',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Balans item': _p.deprecated_cc($['Balans item'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
            }))]])]),
        }))]])]),
        'Verrekenposten': _p.deprecated_cc($['Verrekenposten'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
                'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return _p.ss($, ($,) => ({
                                'option': 'Inkoop',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                    'Inkoop': _p.deprecated_cc($['Inkoop'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'Informele rekening':
                            return _p.ss($, ($,) => ({
                                'option': 'Informele rekening',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'Verkoop':
                            return _p.ss($, ($,) => ({
                                'option': 'Verkoop',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                    'Verkoop': _p.deprecated_cc($['Verkoop'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        case 'BTW-periode':
                            return _p.ss($, ($,) => ({
                                'option': 'BTW-periode',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'Jaar': _p.deprecated_cc($['Jaar'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                    'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($,) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })]),
            }))]])]),
        }))]])]),
    }))]])]),
    'Klanten': _p.deprecated_cc($['Klanten'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        'Licentieovereenkomsten': _p.deprecated_cc($['Licentieovereenkomsten'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Periodes': _p.deprecated_cc($['Periodes'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize($),
                })]),
            }))]])]),
        }))]])]),
        'Projecten': _p.deprecated_cc($['Projecten'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
            'Offertes': _p.deprecated_cc($['Offertes'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                'Opbrengsten': _p.deprecated_cc($['Opbrengsten'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                    'Type': _p.deprecated_cc($['Type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'Project':
                                return _p.ss($, ($,) => ({
                                    'option': 'Project',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($,) => ['text', ({
                                            'delimiter': ['none', null],
                                            'value': v_serialize_number.serialize($),
                                        })]),
                                        'Betaaldatum': _p.deprecated_cc($['Betaaldatum'], ($,) => ['text', ({
                                            'delimiter': ['none', null],
                                            'value': v_serialize_number.serialize($),
                                        })]),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                }))]])]),
            }))]])]),
        }))]])]),
    }))]])]),
    'Leveranciers': _p.deprecated_cc($['Leveranciers'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    }))]])]),
    'Medewerkers': _p.deprecated_cc($['Medewerkers'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    }))]])]),
}))]]
