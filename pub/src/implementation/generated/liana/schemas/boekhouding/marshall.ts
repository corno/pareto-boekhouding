
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Fiscaal: t_signatures.Fiscaal = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Balans Hoofdcategorieen': _p_cc(
            $['Balans Hoofdcategorieen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Activa':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Activa',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Passiva':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Passiva',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['nothing', null]
                            )]
                        ),
                    })
                )]]
            )]
        ),
        'Resultaat Hoofdcategorieen': _p_cc(
            $['Resultaat Hoofdcategorieen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Kosten':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Kosten',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Opbrengsten':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Opbrengsten',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['nothing', null]
                            )]
                        ),
                    })
                )]]
            )]
        ),
    })
)]]
export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Correctietypes vennootschapsbelasting': _p_cc(
            $['Correctietypes vennootschapsbelasting'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Te corrigeren promillage': _p_cc(
                            $['Te corrigeren promillage'], 
                            ($) => ['text', ({
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            })]
                        ),
                    })
                )]]
            )]
        ),
        'Balans': _p_cc(
            $['Balans'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Activa':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Activa',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Passiva':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Passiva',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'Hoofdcategorie fiscus': _p_cc(
                                            $['Hoofdcategorie fiscus'], 
                                            ($) => ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $['id'],
                                            })]
                                        ),
                                        'Subcategorie fiscus': _p_cc(
                                            $['Subcategorie fiscus'], 
                                            ($) => ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $['id'],
                                            })]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                    })
                )]]
            )]
        ),
        'Resultaat': _p_cc(
            $['Resultaat'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Kosten':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Kosten',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Opbrengsten':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Opbrengsten',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'Hoofdcategorie fiscus': _p_cc(
                                            $['Hoofdcategorie fiscus'], 
                                            ($) => ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $['id'],
                                            })]
                                        ),
                                        'Subcategorie fiscus': _p_cc(
                                            $['Subcategorie fiscus'], 
                                            ($) => ['text', ({
                                                'delimiter': ['backtick', null],
                                                'value': $['id'],
                                            })]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                    })
                )]]
            )]
        ),
    })
)]]
export const Beheer: t_signatures.Beheer = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'BTW-categorieen': _p_cc(
            $['BTW-categorieen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'BTW-heffing': _p_cc(
                            $['BTW-heffing'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Ja',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'BTW-promillage': _p_cc(
                                                                $['BTW-promillage'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['none', null],
                                                                    'value': v_serialize_number.serialize(
                                                                        $
                                                                    ),
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                    })
                )]]
            )]
        ),
        'Grootboekrekeningen': _p_cc(
            $['Grootboekrekeningen'], 
            ($) => ['group', ['verbose', _p.dictionary.literal(
                ({
                    'Balans': _p_cc(
                        $['Balans'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'Hoofdcategorie': _p_cc(
                                        $['Hoofdcategorie'], 
                                        ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]
                                    ),
                                    'Subcategorie': _p_cc(
                                        $['Subcategorie'], 
                                        ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]
                                    ),
                                    'Zijde': _p_cc(
                                        $['Zijde'], 
                                        ($) => ['state', _p.decide.state(
                                            $, 
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Activa',
                                                                'value': ['nothing', null],
                                                            })
                                                        )
                                                    case 'Passiva':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Passiva',
                                                                'value': ['nothing', null],
                                                            })
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    ),
                                })
                            )]]
                        )]
                    ),
                    'Resultaat': _p_cc(
                        $['Resultaat'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'Hoofdcategorie': _p_cc(
                                        $['Hoofdcategorie'], 
                                        ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]
                                    ),
                                    'Subcategorie': _p_cc(
                                        $['Subcategorie'], 
                                        ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]
                                    ),
                                    'Zijde': _p_cc(
                                        $['Zijde'], 
                                        ($) => ['state', _p.decide.state(
                                            $, 
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Kosten',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    ({
                                                                        'Correctie op vennootschapsbelasting': _p_cc(
                                                                            $['Correctie op vennootschapsbelasting'], 
                                                                            ($) => ['state', _p.decide.state(
                                                                                $, 
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Ja':
                                                                                            return _p.ss(
                                                                                                $, 
                                                                                                ($) => ({
                                                                                                    'option': 'Ja',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        ({
                                                                                                            'Correctietype': _p_cc(
                                                                                                                $['Correctietype'], 
                                                                                                                ($) => ['text', ({
                                                                                                                    'delimiter': ['backtick', null],
                                                                                                                    'value': $['id'],
                                                                                                                })]
                                                                                                            ),
                                                                                                        })
                                                                                                    )]],
                                                                                                })
                                                                                            )
                                                                                        case 'Nee':
                                                                                            return _p.ss(
                                                                                                $, 
                                                                                                ($) => ({
                                                                                                    'option': 'Nee',
                                                                                                    'value': ['nothing', null],
                                                                                                })
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )]
                                                                        ),
                                                                    })
                                                                )]],
                                                            })
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Opbrengsten',
                                                                'value': ['nothing', null],
                                                            })
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    ),
                                })
                            )]]
                        )]
                    ),
                })
            )]]
        ),
        'Rekeningen': _p_cc(
            $['Rekeningen'], 
            ($) => ['group', ['verbose', _p.dictionary.literal(
                ({
                    'Bank': _p_cc(
                        $['Bank'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['nothing', null]
                        )]
                    ),
                    'Informeel': _p_cc(
                        $['Informeel'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['nothing', null]
                        )]
                    ),
                })
            )]]
        ),
        'Gebruikers': _p_cc(
            $['Gebruikers'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Volledige naam': _p_cc(
                            $['Volledige naam'], 
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'Wachtwoord': _p_cc(
                            $['Wachtwoord'], 
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                    })
                )]]
            )]
        ),
        'Klanten': _p_cc(
            $['Klanten'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Licentieovereenkomsten': _p_cc(
                            $['Licentieovereenkomsten'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'Periodes': _p_cc(
                                            $['Periodes'], 
                                            ($) => ['dictionary', $.__d_map(
                                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                                    ({
                                                        'Bedrag': _p_cc(
                                                            $['Bedrag'], 
                                                            ($) => ['text', ({
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            })]
                                                        ),
                                                    })
                                                )]]
                                            )]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                        'Projecten': _p_cc(
                            $['Projecten'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'Offertes': _p_cc(
                                            $['Offertes'], 
                                            ($) => ['dictionary', $.__d_map(
                                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                                    ({
                                                        'Opbrengsten': _p_cc(
                                                            $['Opbrengsten'], 
                                                            ($) => ['dictionary', $.__d_map(
                                                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                                                    ({
                                                                        'Type': _p_cc(
                                                                            $['Type'], 
                                                                            ($) => ['state', _p.decide.state(
                                                                                $, 
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Project':
                                                                                            return _p.ss(
                                                                                                $, 
                                                                                                ($) => ({
                                                                                                    'option': 'Project',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        ({
                                                                                                            'Bedrag': _p_cc(
                                                                                                                $['Bedrag'], 
                                                                                                                ($) => ['text', ({
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_serialize_number.serialize(
                                                                                                                        $
                                                                                                                    ),
                                                                                                                })]
                                                                                                            ),
                                                                                                            'Betaaldatum': _p_cc(
                                                                                                                $['Betaaldatum'], 
                                                                                                                ($) => ['text', ({
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_serialize_number.serialize(
                                                                                                                        $
                                                                                                                    ),
                                                                                                                })]
                                                                                                            ),
                                                                                                        })
                                                                                                    )]],
                                                                                                })
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )]
                                                                        ),
                                                                    })
                                                                )]]
                                                            )]
                                                        ),
                                                    })
                                                )]]
                                            )]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                    })
                )]]
            )]
        ),
        'Leveranciers': _p_cc(
            $['Leveranciers'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['nothing', null]
            )]
        ),
        'Medewerkers': _p_cc(
            $['Medewerkers'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['nothing', null]
            )]
        ),
    })
)]]
export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Balans': _p_cc(
            $['Balans'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Type': _p_cc(
                            $['Type'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Bankrekening':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Bankrekening',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Overig':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Overig',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Informele rekening':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Informele rekening',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                    })
                )]]
            )]
        ),
        'Resultaat': _p_cc(
            $['Resultaat'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['nothing', null]
            )]
        ),
    })
)]]
export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Resultaat': _p_cc(
            $['Resultaat'], 
            ($) => ['group', ['verbose', _p.dictionary.literal(
                ({
                    'Grootboekrekening voor BTW afrondingen': _p_cc(
                        $['Grootboekrekening voor BTW afrondingen'], 
                        ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]
                    ),
                    'Salarisrondes': _p_cc(
                        $['Salarisrondes'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['nothing', null]
                        )]
                    ),
                    'BTW periodes': _p_cc(
                        $['BTW periodes'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    '1. BTW-categorieen': _p_cc(
                                        $['1. BTW-categorieen'], 
                                        ($) => ['dictionary', $.__d_map(
                                            ($,id) => ['nothing', null]
                                        )]
                                    ),
                                    'Documenten': _p_cc(
                                        $['Documenten'], 
                                        ($) => ['dictionary', $.__d_map(
                                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                                ({
                                                    'Bestand': _p_cc(
                                                        $['Bestand'], 
                                                        ($) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]
                                                    ),
                                                })
                                            )]]
                                        )]
                                    ),
                                    'Omschrijving': _p_cc(
                                        $['Omschrijving'], 
                                        ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]
                                    ),
                                    'Status': _p_cc(
                                        $['Status'], 
                                        ($) => ['state', _p.decide.state(
                                            $, 
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Aangegeven':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Aangegeven',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    ({
                                                                        'Afronding': _p_cc(
                                                                            $['Afronding'], 
                                                                            ($) => ['text', ({
                                                                                'delimiter': ['none', null],
                                                                                'value': v_serialize_number.serialize(
                                                                                    $
                                                                                ),
                                                                            })]
                                                                        ),
                                                                        'Bedrag': _p_cc(
                                                                            $['Bedrag'], 
                                                                            ($) => ['text', ({
                                                                                'delimiter': ['none', null],
                                                                                'value': v_serialize_number.serialize(
                                                                                    $
                                                                                ),
                                                                            })]
                                                                        ),
                                                                        'Datum': _p_cc(
                                                                            $['Datum'], 
                                                                            ($) => ['text', ({
                                                                                'delimiter': ['none', null],
                                                                                'value': v_serialize_number.serialize(
                                                                                    $
                                                                                ),
                                                                            })]
                                                                        ),
                                                                    })
                                                                )]],
                                                            })
                                                        )
                                                    case 'Openstaand':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Openstaand',
                                                                'value': ['nothing', null],
                                                            })
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    ),
                                })
                            )]]
                        )]
                    ),
                })
            )]]
        ),
        'Balans': _p_cc(
            $['Balans'], 
            ($) => ['group', ['verbose', _p.dictionary.literal(
                ({
                    'Grootboekrekening voor nog aan te geven BTW': _p_cc(
                        $['Grootboekrekening voor nog aan te geven BTW'], 
                        ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]
                    ),
                    'Grootboekrekening voor resultaat dit jaar': _p_cc(
                        $['Grootboekrekening voor resultaat dit jaar'], 
                        ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]
                    ),
                    'Grootboekrekening voor winstreserve': _p_cc(
                        $['Grootboekrekening voor winstreserve'], 
                        ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]
                    ),
                    'Grootboekrekening voor Inkoop saldo': _p_cc(
                        $['Grootboekrekening voor Inkoop saldo'], 
                        ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]
                    ),
                    'Grootboekrekening voor Verkoop saldo': _p_cc(
                        $['Grootboekrekening voor Verkoop saldo'], 
                        ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]
                    ),
                    'Beginsaldo nog aan te geven BTW': _p_cc(
                        $['Beginsaldo nog aan te geven BTW'], 
                        ($) => ['text', ({
                            'delimiter': ['none', null],
                            'value': v_serialize_number.serialize(
                                $
                            ),
                        })]
                    ),
                    'Beginsaldo winstreserve': _p_cc(
                        $['Beginsaldo winstreserve'], 
                        ($) => ['text', ({
                            'delimiter': ['none', null],
                            'value': v_serialize_number.serialize(
                                $
                            ),
                        })]
                    ),
                    'Informele rekeningen': _p_cc(
                        $['Informele rekeningen'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'Beginsaldo': _p_cc(
                                        $['Beginsaldo'], 
                                        ($) => ['text', ({
                                            'delimiter': ['none', null],
                                            'value': v_serialize_number.serialize(
                                                $
                                            ),
                                        })]
                                    ),
                                    'Grootboekrekening': _p_cc(
                                        $['Grootboekrekening'], 
                                        ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]
                                    ),
                                    'Nieuw': _p_cc(
                                        $['Nieuw'], 
                                        ($) => ['state', _p.decide.state(
                                            $, 
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Ja',
                                                                'value': ['nothing', null],
                                                            })
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    ({
                                                                        'Rekening': _p_cc(
                                                                            $['Rekening'], 
                                                                            ($) => Verwijzing_naar_Informele_rekening(
                                                                                $
                                                                            )
                                                                        ),
                                                                    })
                                                                )]],
                                                            })
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    ),
                                })
                            )]]
                        )]
                    ),
                    'Bankrekeningen': _p_cc(
                        $['Bankrekeningen'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                ({
                                    'Beginsaldo': _p_cc(
                                        $['Beginsaldo'], 
                                        ($) => ['text', ({
                                            'delimiter': ['none', null],
                                            'value': v_serialize_number.serialize(
                                                $
                                            ),
                                        })]
                                    ),
                                    'Grootboekrekening': _p_cc(
                                        $['Grootboekrekening'], 
                                        ($) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]
                                    ),
                                    'Nieuw': _p_cc(
                                        $['Nieuw'], 
                                        ($) => ['state', _p.decide.state(
                                            $, 
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Ja',
                                                                'value': ['nothing', null],
                                                            })
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    ({
                                                                        'Rekening': _p_cc(
                                                                            $['Rekening'], 
                                                                            ($) => Verwijzing_naar_Bankrekening(
                                                                                $
                                                                            )
                                                                        ),
                                                                    })
                                                                )]],
                                                            })
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    ),
                                    'Mutaties': _p_cc(
                                        $['Mutaties'], 
                                        ($) => ['dictionary', $.__d_map(
                                            ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                                ({
                                                    'Bedrag': _p_cc(
                                                        $['Bedrag'], 
                                                        ($) => ['text', ({
                                                            'delimiter': ['none', null],
                                                            'value': v_serialize_number.serialize(
                                                                $
                                                            ),
                                                        })]
                                                    ),
                                                    'Datum': _p_cc(
                                                        $['Datum'], 
                                                        ($) => ['text', ({
                                                            'delimiter': ['none', null],
                                                            'value': v_serialize_number.serialize(
                                                                $
                                                            ),
                                                        })]
                                                    ),
                                                    'Omschrijving': _p_cc(
                                                        $['Omschrijving'], 
                                                        ($) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]
                                                    ),
                                                })
                                            )]]
                                        )]
                                    ),
                                })
                            )]]
                        )]
                    ),
                    'Overige balans items': _p_cc(
                        $['Overige balans items'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => Overige_balans_item(
                                $
                            )
                        )]
                    ),
                    'Verrekenposten': _p_cc(
                        $['Verrekenposten'], 
                        ($) => ['dictionary', $.__d_map(
                            ($,id) => ['nothing', null]
                        )]
                    ),
                })
            )]]
        ),
    })
)]]
export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Beginsaldo': _p_cc(
            $['Beginsaldo'], 
            ($) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize(
                    $
                ),
            })]
        ),
        'Grootboekrekening': _p_cc(
            $['Grootboekrekening'], 
            ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $['id'],
            })]
        ),
        'Nieuw': _p_cc(
            $['Nieuw'], 
            ($) => ['state', _p.decide.state(
                $, 
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Ja':
                            return _p.ss(
                                $, 
                                ($) => ({
                                    'option': 'Ja',
                                    'value': ['nothing', null],
                                })
                            )
                        case 'Nee':
                            return _p.ss(
                                $, 
                                ($) => ({
                                    'option': 'Nee',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        ({
                                            'Balans item': _p_cc(
                                                $['Balans item'], 
                                                ($) => ['text', ({
                                                    'delimiter': ['backtick', null],
                                                    'value': $['id'],
                                                })]
                                            ),
                                        })
                                    )]],
                                })
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )]
        ),
    })
)]]
export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $['id'],
})]
export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $['id'],
})]
export const Handelstransacties: t_signatures.Handelstransacties = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Inkopen': _p_cc(
            $['Inkopen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Afhandeling': _p_cc(
                            $['Afhandeling'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Mutaties':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Mutaties',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Rekening courant':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Rekening courant': _p_cc(
                                                                $['Rekening courant'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'BTW-regime': _p_cc(
                            $['BTW-regime'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Binnenland: heffing verlegd':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Binnenland: heffing verlegd',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Geen BTW van toepassing':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Geen BTW van toepassing',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Import van buiten de EU':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Import van buiten de EU',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Intracommunautair':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Intracommunautair',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Standaard':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Standaard',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'BTW-periode': _p_cc(
                                                                $['BTW-periode'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Brondocument': _p_cc(
                            $['Brondocument'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Toegevoegd':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Toegevoegd',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Document': _p_cc(
                                                                $['Document'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        case 'Niet van toepassing':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Niet van toepassing',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Ontbreekt':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Ontbreekt',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Datum': _p_cc(
                            $['Datum'], 
                            ($) => ['text', ({
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            })]
                        ),
                        'Regels': _p_cc(
                            $['Regels'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'Bedrag': _p_cc(
                                            $['Bedrag'], 
                                            ($) => ['state', _p.decide.state(
                                                $, 
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Bekend':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Bekend',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'BTW-bedrag': _p_cc(
                                                                                $['BTW-bedrag'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_serialize_number.serialize(
                                                                                        $
                                                                                    ),
                                                                                })]
                                                                            ),
                                                                            'Bedrag inclusief geheven BTW': _p_cc(
                                                                                $['Bedrag inclusief geheven BTW'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_serialize_number.serialize(
                                                                                        $
                                                                                    ),
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )]
                                        ),
                                        'Omschrijving': _p_cc(
                                            $['Omschrijving'], 
                                            ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]
                                        ),
                                        'Type': _p_cc(
                                            $['Type'], 
                                            ($) => ['state', _p.decide.state(
                                                $, 
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Balans':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Balans item': _p_cc(
                                                                                $['Balans item'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Kosten':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Kosten',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Grootboekrekening': _p_cc(
                                                                                $['Grootboekrekening'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                        'Type': _p_cc(
                            $['Type'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Bonnetje':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Bonnetje',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Inkoop (met crediteur)':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Inkoop (met crediteur)',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Crediteur': _p_cc(
                                                                $['Crediteur'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                            'Factuurnummer': _p_cc(
                                                                $['Factuurnummer'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        case 'Loonheffing':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Loonheffing',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Ronde': _p_cc(
                                                                $['Ronde'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        case 'Salaris':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Salaris',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Ronde': _p_cc(
                                                                $['Ronde'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                            'Medewerker': _p_cc(
                                                                $['Medewerker'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                    })
                )]]
            )]
        ),
        'Verkopen': _p_cc(
            $['Verkopen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'Afhandeling': _p_cc(
                            $['Afhandeling'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Mutaties':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Mutaties',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'Rekening courant':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Rekening courant': _p_cc(
                                                                $['Rekening courant'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Betalingstermijn': _p_cc(
                            $['Betalingstermijn'], 
                            ($) => ['text', ({
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            })]
                        ),
                        'BTW-periode': _p_cc(
                            $['BTW-periode'], 
                            ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['id'],
                            })]
                        ),
                        'Brondocument': _p_cc(
                            $['Brondocument'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Toegevoegd':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Toegevoegd',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Document': _p_cc(
                                                                $['Document'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Debiteur': _p_cc(
                            $['Debiteur'], 
                            ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['id'],
                            })]
                        ),
                        'Contracttype': _p_cc(
                            $['Contracttype'], 
                            ($) => ['state', _p.decide.state(
                                $, 
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Project':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Project',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Project': _p_cc(
                                                                $['Project'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                            'Offerte': _p_cc(
                                                                $['Offerte'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        case 'Licentieovereenkomst':
                                            return _p.ss(
                                                $, 
                                                ($) => ({
                                                    'option': 'Licentieovereenkomst',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        ({
                                                            'Overeenkomst': _p_cc(
                                                                $['Overeenkomst'], 
                                                                ($) => ['text', ({
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['id'],
                                                                })]
                                                            ),
                                                        })
                                                    )]],
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                        'Datum': _p_cc(
                            $['Datum'], 
                            ($) => ['text', ({
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            })]
                        ),
                        'Regels': _p_cc(
                            $['Regels'], 
                            ($) => ['dictionary', $.__d_map(
                                ($,id) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'BTW-regime': _p_cc(
                                            $['BTW-regime'], 
                                            ($) => ['state', _p.decide.state(
                                                $, 
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Intracommunautair':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Intracommunautair',
                                                                    'value': ['nothing', null],
                                                                })
                                                            )
                                                        case 'Standaard':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Standaard',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'BTW-categorie': _p_cc(
                                                                                $['BTW-categorie'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Binnenland: heffing verlegd':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Binnenland: heffing verlegd',
                                                                    'value': ['nothing', null],
                                                                })
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )]
                                        ),
                                        'Bedrag exclusief BTW': _p_cc(
                                            $['Bedrag exclusief BTW'], 
                                            ($) => ['text', ({
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            })]
                                        ),
                                        'Contracttype': _p_cc(
                                            $['Contracttype'], 
                                            ($) => ['state', _p.decide.state(
                                                $, 
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Project':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Project',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Opbrengst': _p_cc(
                                                                                $['Opbrengst'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Los':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Los',
                                                                    'value': ['nothing', null],
                                                                })
                                                            )
                                                        case 'Licentieovereenkomst':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Licentieovereenkomst',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Periode': _p_cc(
                                                                                $['Periode'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )]
                                        ),
                                        'Omschrijving': _p_cc(
                                            $['Omschrijving'], 
                                            ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]
                                        ),
                                        'Type': _p_cc(
                                            $['Type'], 
                                            ($) => ['state', _p.decide.state(
                                                $, 
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Opbrengsten':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Opbrengsten',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Grootboekrekening': _p_cc(
                                                                                $['Grootboekrekening'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Balans':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Balans item': _p_cc(
                                                                                $['Balans item'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                    })
                )]]
            )]
        ),
    })
)]]
export const Mutaties: t_signatures.Mutaties = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Verrekenpost mutaties': _p_cc(
            $['Verrekenpost mutaties'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['dictionary', $.__d_map(
                    ($,id) => ['group', ['verbose', _p.dictionary.literal(
                        ({
                            'Bedrag': _p_cc(
                                $['Bedrag'], 
                                ($) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize(
                                        $
                                    ),
                                })]
                            ),
                            'Afhandeling': _p_cc(
                                $['Afhandeling'], 
                                ($) => ['state', _p.decide.state(
                                    $, 
                                    ($): t_out.Value.state => {
                                        switch ($[0]) {
                                            case 'Resultaat':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ({
                                                        'option': 'Resultaat',
                                                        'value': Balans_Resultaat_Mutatie(
                                                            $
                                                        ),
                                                    })
                                                )
                                            case 'Balans':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ({
                                                        'option': 'Balans',
                                                        'value': ['state', _p.decide.state(
                                                            $, 
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'Informele rekening':
                                                                        return _p.ss(
                                                                            $, 
                                                                            ($) => ({
                                                                                'option': 'Informele rekening',
                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                    ({
                                                                                        'Informele rekening': _p_cc(
                                                                                            $['Informele rekening'], 
                                                                                            ($) => ['text', ({
                                                                                                'delimiter': ['backtick', null],
                                                                                                'value': $['id'],
                                                                                            })]
                                                                                        ),
                                                                                    })
                                                                                )]],
                                                                            })
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0]
                                                                        )
                                                                }
                                                            }
                                                        )],
                                                    })
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )]
                            ),
                        })
                    )]]
                )]
            )]
        ),
        'Bankrekening Mutatie Verwerkingen': _p_cc(
            $['Bankrekening Mutatie Verwerkingen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['dictionary', $.__d_map(
                    ($,id) => ['state', _p.decide.state(
                        $, 
                        ($): t_out.Value.state => {
                            switch ($[0]) {
                                case 'Resultaat':
                                    return _p.ss(
                                        $, 
                                        ($) => ({
                                            'option': 'Resultaat',
                                            'value': Balans_Resultaat_Mutatie(
                                                $
                                            ),
                                        })
                                    )
                                case 'Balans':
                                    return _p.ss(
                                        $, 
                                        ($) => ({
                                            'option': 'Balans',
                                            'value': ['state', _p.decide.state(
                                                $, 
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Informele rekening':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Informele rekening',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Informele rekening': _p_cc(
                                                                                $['Informele rekening'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Verrekenpost':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ({
                                                                    'option': 'Verrekenpost',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        ({
                                                                            'Verrekenpost': _p_cc(
                                                                                $['Verrekenpost'], 
                                                                                ($) => ['text', ({
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['id'],
                                                                                })]
                                                                            ),
                                                                        })
                                                                    )]],
                                                                })
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )],
                                        })
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )]
                )]
            )]
        ),
        'Memoriaal boekingen': _p_cc(
            $['Memoriaal boekingen'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['dictionary', $.__d_map(
                    ($,id) => ['group', ['verbose', _p.dictionary.literal(
                        ({
                            'Bedrag': _p_cc(
                                $['Bedrag'], 
                                ($) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize(
                                        $
                                    ),
                                })]
                            ),
                            'Datum': _p_cc(
                                $['Datum'], 
                                ($) => ['text', ({
                                    'delimiter': ['none', null],
                                    'value': v_serialize_number.serialize(
                                        $
                                    ),
                                })]
                            ),
                            'Omschrijving': _p_cc(
                                $['Omschrijving'], 
                                ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]
                            ),
                            'Grootboekrekening': _p_cc(
                                $['Grootboekrekening'], 
                                ($) => ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['id'],
                                })]
                            ),
                        })
                    )]]
                )]
            )]
        ),
    })
)]]
export const Jaren: t_signatures.Jaren = ($) => ['dictionary', $.__d_map(
    ($,id) => ['group', ['verbose', _p.dictionary.literal(
        ({
            'Afgesloten': _p_cc(
                $['Afgesloten'], 
                ($) => ['state', _p.decide.state(
                    $, 
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'Ja':
                                return _p.ss(
                                    $, 
                                    ($) => ({
                                        'option': 'Ja',
                                        'value': ['nothing', null],
                                    })
                                )
                            case 'Nee':
                                return _p.ss(
                                    $, 
                                    ($) => ({
                                        'option': 'Nee',
                                        'value': ['nothing', null],
                                    })
                                )
                            default:
                                return _p.au(
                                    $[0]
                                )
                        }
                    }
                )]
            ),
            'Startdatum boekjaar': _p_cc(
                $['Startdatum boekjaar'], 
                ($) => ['text', ({
                    'delimiter': ['none', null],
                    'value': v_serialize_number.serialize(
                        $
                    ),
                })]
            ),
            'Grootboekrekeningen': _p_cc(
                $['Grootboekrekeningen'], 
                ($) => Grootboekrekeningen(
                    $
                )
            ),
            'Eerste boekjaar': _p_cc(
                $['Eerste boekjaar'], 
                ($) => Eerste_boekjaar(
                    $
                )
            ),
            'Jaarbeheer': _p_cc(
                $['Jaarbeheer'], 
                ($) => Jaarbeheer(
                    $
                )
            ),
            'Handelstransacties': _p_cc(
                $['Handelstransacties'], 
                ($) => Handelstransacties(
                    $
                )
            ),
            'Mutaties': _p_cc(
                $['Mutaties'], 
                ($) => Mutaties(
                    $
                )
            ),
        })
    )]]
)]
export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Jaar': _p_cc(
            $['Jaar'], 
            ($) => ['optional', $.__decide(
                ($): t_out.Value.optional => ['set', ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['id'],
                })]], 
                () => ['not set', null]
            )]
        ),
        'type': _p_cc(
            $['type'], 
            ($) => ['state', _p.decide.state(
                $, 
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return _p.ss(
                                $, 
                                ($) => ({
                                    'option': 'Inkoop',
                                    'value': ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })],
                                })
                            )
                        case 'Verkoop':
                            return _p.ss(
                                $, 
                                ($) => ({
                                    'option': 'Verkoop',
                                    'value': ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })],
                                })
                            )
                        case 'BTW-periode':
                            return _p.ss(
                                $, 
                                ($) => ({
                                    'option': 'BTW-periode',
                                    'value': ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })],
                                })
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )]
        ),
    })
)]]
export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => ['state', _p.decide.state(
    $, 
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'Ja':
                return _p.ss(
                    $, 
                    ($) => ({
                        'option': 'Ja',
                        'value': ['nothing', null],
                    })
                )
            case 'Nee':
                return _p.ss(
                    $, 
                    ($) => ({
                        'option': 'Nee',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            ({
                                'Vorig boekjaar': _p_cc(
                                    $['Vorig boekjaar'], 
                                    ($) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })]
                                ),
                            })
                        )]],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]
export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'Fiscaal': _p_cc(
            $['Fiscaal'], 
            ($) => Fiscaal(
                $
            )
        ),
        'Categorieen': _p_cc(
            $['Categorieen'], 
            ($) => Grootboek_Categorieen(
                $
            )
        ),
        'Beheer': _p_cc(
            $['Beheer'], 
            ($) => Beheer(
                $
            )
        ),
        'Jaren': _p_cc(
            $['Jaren'], 
            ($) => Jaren(
                $
            )
        ),
    })
)]]
