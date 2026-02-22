
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Fiscaal: t_signatures.Fiscaal = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Balans Hoofdcategorieen": _p_change_context(
            $['Balans Hoofdcategorieen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Zijde": _p_change_context(
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
                                                }),
                                            )
                                        case 'Passiva':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Passiva',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Subcategorieen": _p_change_context(
                            $['Subcategorieen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['nothing', null],
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Resultaat Hoofdcategorieen": _p_change_context(
            $['Resultaat Hoofdcategorieen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Zijde": _p_change_context(
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
                                                }),
                                            )
                                        case 'Opbrengsten':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Opbrengsten',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Subcategorieen": _p_change_context(
                            $['Subcategorieen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['nothing', null],
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Correctietypes vennootschapsbelasting": _p_change_context(
            $['Correctietypes vennootschapsbelasting'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Te corrigeren promillage": _p_change_context(
                            $['Te corrigeren promillage'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                    },
                )]],
            )],
        ),
        "Balans": _p_change_context(
            $['Balans'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Zijde": _p_change_context(
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
                                                }),
                                            )
                                        case 'Passiva':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Passiva',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Subcategorieen": _p_change_context(
                            $['Subcategorieen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "Hoofdcategorie fiscus": _p_change_context(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                        "Subcategorie fiscus": _p_change_context(
                                            $['Subcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Resultaat": _p_change_context(
            $['Resultaat'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Zijde": _p_change_context(
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
                                                }),
                                            )
                                        case 'Opbrengsten':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Opbrengsten',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Subcategorieen": _p_change_context(
                            $['Subcategorieen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "Hoofdcategorie fiscus": _p_change_context(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                        "Subcategorie fiscus": _p_change_context(
                                            $['Subcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Beheer: t_signatures.Beheer = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "BTW-categorieen": _p_change_context(
            $['BTW-categorieen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "BTW-heffing": _p_change_context(
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
                                                        {
                                                            "BTW-promillage": _p_change_context(
                                                                $['BTW-promillage'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['none', null],
                                                                    'value': v_primitives_to_text.decimal(
                                                                        $,
                                                                    ),
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Grootboekrekeningen": _p_change_context(
            $['Grootboekrekeningen'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "Balans": _p_change_context(
                        $['Balans'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "Hoofdcategorie": _p_change_context(
                                        $['Hoofdcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Subcategorie": _p_change_context(
                                        $['Subcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Zijde": _p_change_context(
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
                                                            }),
                                                        )
                                                    case 'Passiva':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Passiva',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                    "Resultaat": _p_change_context(
                        $['Resultaat'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "Hoofdcategorie": _p_change_context(
                                        $['Hoofdcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Subcategorie": _p_change_context(
                                        $['Subcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Zijde": _p_change_context(
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
                                                                    {
                                                                        "Correctie op vennootschapsbelasting": _p_change_context(
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
                                                                                                        {
                                                                                                            "Correctietype": _p_change_context(
                                                                                                                $['Correctietype'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['backtick', null],
                                                                                                                    'value': $['l id'],
                                                                                                                }],
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'Nee':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Nee',
                                                                                                    'value': ['nothing', null],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Opbrengsten',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                },
            )]],
        ),
        "Rekeningen": _p_change_context(
            $['Rekeningen'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "Bank": _p_change_context(
                        $['Bank'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['nothing', null],
                        )],
                    ),
                    "Informeel": _p_change_context(
                        $['Informeel'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['nothing', null],
                        )],
                    ),
                },
            )]],
        ),
        "Gebruikers": _p_change_context(
            $['Gebruikers'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Volledige naam": _p_change_context(
                            $['Volledige naam'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Wachtwoord": _p_change_context(
                            $['Wachtwoord'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                    },
                )]],
            )],
        ),
        "Klanten": _p_change_context(
            $['Klanten'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Licentieovereenkomsten": _p_change_context(
                            $['Licentieovereenkomsten'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "Periodes": _p_change_context(
                                            $['Periodes'],
                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "Bedrag": _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                    },
                                                )]],
                                            )],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                        "Projecten": _p_change_context(
                            $['Projecten'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "Offertes": _p_change_context(
                                            $['Offertes'],
                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "Opbrengsten": _p_change_context(
                                                            $['Opbrengsten'],
                                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "Type": _p_change_context(
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
                                                                                                        {
                                                                                                            "Bedrag": _p_change_context(
                                                                                                                $['Bedrag'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_primitives_to_text.decimal(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                }],
                                                                                                            ),
                                                                                                            "Betaaldatum": _p_change_context(
                                                                                                                $['Betaaldatum'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_primitives_to_text.decimal(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                }],
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )],
                                                                        ),
                                                                    },
                                                                )]],
                                                            )],
                                                        ),
                                                    },
                                                )]],
                                            )],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Leveranciers": _p_change_context(
            $['Leveranciers'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['nothing', null],
            )],
        ),
        "Medewerkers": _p_change_context(
            $['Medewerkers'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['nothing', null],
            )],
        ),
    },
)]]

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Balans": _p_change_context(
            $['Balans'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Type": _p_change_context(
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
                                                }),
                                            )
                                        case 'Overig':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Overig',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Informele rekening':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Informele rekening',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Resultaat": _p_change_context(
            $['Resultaat'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['nothing', null],
            )],
        ),
    },
)]]

export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Resultaat": _p_change_context(
            $['Resultaat'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "Grootboekrekening voor BTW afrondingen": _p_change_context(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Salarisrondes": _p_change_context(
                        $['Salarisrondes'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['nothing', null],
                        )],
                    ),
                    "BTW periodes": _p_change_context(
                        $['BTW periodes'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "1. BTW-categorieen": _p_change_context(
                                        $['1. BTW-categorieen'],
                                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                                            $,
                                        ).map(
                                            ($, id) => ['nothing', null],
                                        )],
                                    ),
                                    "Documenten": _p_change_context(
                                        $['Documenten'],
                                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                                            $,
                                        ).map(
                                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    "Bestand": _p_change_context(
                                                        $['Bestand'],
                                                        ($) => ['text', {
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        }],
                                                    ),
                                                },
                                            )]],
                                        )],
                                    ),
                                    "Omschrijving": _p_change_context(
                                        $['Omschrijving'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "Status": _p_change_context(
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
                                                                    {
                                                                        "Afronding": _p_change_context(
                                                                            $['Afronding'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.decimal(
                                                                                    $,
                                                                                ),
                                                                            }],
                                                                        ),
                                                                        "Bedrag": _p_change_context(
                                                                            $['Bedrag'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.decimal(
                                                                                    $,
                                                                                ),
                                                                            }],
                                                                        ),
                                                                        "Datum": _p_change_context(
                                                                            $['Datum'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.decimal(
                                                                                    $,
                                                                                ),
                                                                            }],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'Openstaand':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Openstaand',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                },
            )]],
        ),
        "Balans": _p_change_context(
            $['Balans'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "Grootboekrekening voor nog aan te geven BTW": _p_change_context(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor resultaat dit jaar": _p_change_context(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor winstreserve": _p_change_context(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor Inkoop saldo": _p_change_context(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor Verkoop saldo": _p_change_context(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Beginsaldo nog aan te geven BTW": _p_change_context(
                        $['Beginsaldo nog aan te geven BTW'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.decimal(
                                $,
                            ),
                        }],
                    ),
                    "Beginsaldo winstreserve": _p_change_context(
                        $['Beginsaldo winstreserve'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.decimal(
                                $,
                            ),
                        }],
                    ),
                    "Informele rekeningen": _p_change_context(
                        $['Informele rekeningen'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "Beginsaldo": _p_change_context(
                                        $['Beginsaldo'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.decimal(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Nieuw": _p_change_context(
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
                                                            }),
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "Rekening": _p_change_context(
                                                                            $['Rekening'],
                                                                            ($) => Verwijzing_naar_Informele_rekening(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                    "Bankrekeningen": _p_change_context(
                        $['Bankrekeningen'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "Beginsaldo": _p_change_context(
                                        $['Beginsaldo'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.decimal(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Nieuw": _p_change_context(
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
                                                            }),
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "Rekening": _p_change_context(
                                                                            $['Rekening'],
                                                                            ($) => Verwijzing_naar_Bankrekening(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                    "Mutaties": _p_change_context(
                                        $['Mutaties'],
                                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                                            $,
                                        ).map(
                                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    "Bedrag": _p_change_context(
                                                        $['Bedrag'],
                                                        ($) => ['text', {
                                                            'delimiter': ['none', null],
                                                            'value': v_primitives_to_text.decimal(
                                                                $,
                                                            ),
                                                        }],
                                                    ),
                                                    "Datum": _p_change_context(
                                                        $['Datum'],
                                                        ($) => ['text', {
                                                            'delimiter': ['none', null],
                                                            'value': v_primitives_to_text.decimal(
                                                                $,
                                                            ),
                                                        }],
                                                    ),
                                                    "Omschrijving": _p_change_context(
                                                        $['Omschrijving'],
                                                        ($) => ['text', {
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        }],
                                                    ),
                                                },
                                            )]],
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                    "Overige balans items": _p_change_context(
                        $['Overige balans items'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => Overige_balans_item(
                                $,
                            ),
                        )],
                    ),
                    "Verrekenposten": _p_change_context(
                        $['Verrekenposten'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['nothing', null],
                        )],
                    ),
                },
            )]],
        ),
    },
)]]

export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Beginsaldo": _p_change_context(
            $['Beginsaldo'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.decimal(
                    $,
                ),
            }],
        ),
        "Grootboekrekening": _p_change_context(
            $['Grootboekrekening'],
            ($) => ['text', {
                'delimiter': ['backtick', null],
                'value': $['l id'],
            }],
        ),
        "Nieuw": _p_change_context(
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
                                }),
                            )
                        case 'Nee':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'Nee',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "Balans item": _p_change_context(
                                                $['Balans item'],
                                                ($) => ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => ['text', {
    'delimiter': ['backtick', null],
    'value': $['l id'],
}]

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ['text', {
    'delimiter': ['backtick', null],
    'value': $['l id'],
}]

export const Handelstransacties: t_signatures.Handelstransacties = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Inkopen": _p_change_context(
            $['Inkopen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Afhandeling": _p_change_context(
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
                                                }),
                                            )
                                        case 'Rekening courant':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "Rekening courant": _p_change_context(
                                                                $['Rekening courant'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "BTW-regime": _p_change_context(
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
                                                }),
                                            )
                                        case 'Geen BTW van toepassing':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Geen BTW van toepassing',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Import van buiten de EU':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Import van buiten de EU',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Intracommunautair':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Intracommunautair',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Standaard':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Standaard',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "BTW-periode": _p_change_context(
                                                                $['BTW-periode'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Brondocument": _p_change_context(
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
                                                        {
                                                            "Document": _p_change_context(
                                                                $['Document'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'Niet van toepassing':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Niet van toepassing',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Ontbreekt':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Ontbreekt',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Datum": _p_change_context(
                            $['Datum'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                        "Regels": _p_change_context(
                            $['Regels'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "Bedrag": _p_change_context(
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
                                                                        {
                                                                            "BTW-bedrag": _p_change_context(
                                                                                $['BTW-bedrag'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_primitives_to_text.decimal(
                                                                                        $,
                                                                                    ),
                                                                                }],
                                                                            ),
                                                                            "Bedrag inclusief geheven BTW": _p_change_context(
                                                                                $['Bedrag inclusief geheven BTW'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_primitives_to_text.decimal(
                                                                                        $,
                                                                                    ),
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Omschrijving": _p_change_context(
                                            $['Omschrijving'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Type": _p_change_context(
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
                                                                        {
                                                                            "Balans item": _p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Kosten':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Kosten',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "Grootboekrekening": _p_change_context(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                        "Type": _p_change_context(
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
                                                }),
                                            )
                                        case 'Inkoop (met crediteur)':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Inkoop (met crediteur)',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "Crediteur": _p_change_context(
                                                                $['Crediteur'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Factuurnummer": _p_change_context(
                                                                $['Factuurnummer'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'Loonheffing':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Loonheffing',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "Ronde": _p_change_context(
                                                                $['Ronde'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'Salaris':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Salaris',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "Ronde": _p_change_context(
                                                                $['Ronde'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Medewerker": _p_change_context(
                                                                $['Medewerker'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Verkopen": _p_change_context(
            $['Verkopen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "Afhandeling": _p_change_context(
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
                                                }),
                                            )
                                        case 'Rekening courant':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "Rekening courant": _p_change_context(
                                                                $['Rekening courant'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Betalingstermijn": _p_change_context(
                            $['Betalingstermijn'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                        "BTW-periode": _p_change_context(
                            $['BTW-periode'],
                            ($) => ['text', {
                                'delimiter': ['backtick', null],
                                'value': $['l id'],
                            }],
                        ),
                        "Brondocument": _p_change_context(
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
                                                        {
                                                            "Document": _p_change_context(
                                                                $['Document'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Debiteur": _p_change_context(
                            $['Debiteur'],
                            ($) => ['text', {
                                'delimiter': ['backtick', null],
                                'value': $['l id'],
                            }],
                        ),
                        "Contracttype": _p_change_context(
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
                                                        {
                                                            "Project": _p_change_context(
                                                                $['Project'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Offerte": _p_change_context(
                                                                $['Offerte'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'Licentieovereenkomst':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Licentieovereenkomst',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "Overeenkomst": _p_change_context(
                                                                $['Overeenkomst'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['backtick', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Datum": _p_change_context(
                            $['Datum'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                        "Regels": _p_change_context(
                            $['Regels'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "BTW-regime": _p_change_context(
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
                                                                }),
                                                            )
                                                        case 'Standaard':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Standaard',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "BTW-categorie": _p_change_context(
                                                                                $['BTW-categorie'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Binnenland: heffing verlegd':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Binnenland: heffing verlegd',
                                                                    'value': ['nothing', null],
                                                                }),
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Bedrag exclusief BTW": _p_change_context(
                                            $['Bedrag exclusief BTW'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Contracttype": _p_change_context(
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
                                                                        {
                                                                            "Opbrengst": _p_change_context(
                                                                                $['Opbrengst'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Los':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Los',
                                                                    'value': ['nothing', null],
                                                                }),
                                                            )
                                                        case 'Licentieovereenkomst':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Licentieovereenkomst',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "Periode": _p_change_context(
                                                                                $['Periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Omschrijving": _p_change_context(
                                            $['Omschrijving'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Type": _p_change_context(
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
                                                                        {
                                                                            "Grootboekrekening": _p_change_context(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Balans':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "Balans item": _p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Mutaties: t_signatures.Mutaties = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Verrekenpost mutaties": _p_change_context(
            $['Verrekenpost mutaties'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['dictionary', _p.dictionary.from.dictionary(
                    $,
                ).map(
                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            "Bedrag": _p_change_context(
                                $['Bedrag'],
                                ($) => ['text', {
                                    'delimiter': ['none', null],
                                    'value': v_primitives_to_text.decimal(
                                        $,
                                    ),
                                }],
                            ),
                            "Afhandeling": _p_change_context(
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
                                                            $,
                                                        ),
                                                    }),
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
                                                                                    {
                                                                                        "Informele rekening": _p_change_context(
                                                                                            $['Informele rekening'],
                                                                                            ($) => ['text', {
                                                                                                'delimiter': ['backtick', null],
                                                                                                'value': $['l id'],
                                                                                            }],
                                                                                        ),
                                                                                    },
                                                                                )]],
                                                                            }),
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                )],
                            ),
                        },
                    )]],
                )],
            )],
        ),
        "Bankrekening Mutatie Verwerkingen": _p_change_context(
            $['Bankrekening Mutatie Verwerkingen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['dictionary', _p.dictionary.from.dictionary(
                    $,
                ).map(
                    ($, id) => ['state', _p.decide.state(
                        $,
                        ($): t_out.Value.state => {
                            switch ($[0]) {
                                case 'Resultaat':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'Resultaat',
                                            'value': Balans_Resultaat_Mutatie(
                                                $,
                                            ),
                                        }),
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
                                                                        {
                                                                            "Informele rekening": _p_change_context(
                                                                                $['Informele rekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Verrekenpost':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Verrekenpost',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "Verrekenpost": _p_change_context(
                                                                                $['Verrekenpost'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['backtick', null],
                                                                                    'value': $['l id'],
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        }),
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )],
            )],
        ),
        "Memoriaal boekingen": _p_change_context(
            $['Memoriaal boekingen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['dictionary', _p.dictionary.from.dictionary(
                    $,
                ).map(
                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            "Bedrag": _p_change_context(
                                $['Bedrag'],
                                ($) => ['text', {
                                    'delimiter': ['none', null],
                                    'value': v_primitives_to_text.decimal(
                                        $,
                                    ),
                                }],
                            ),
                            "Datum": _p_change_context(
                                $['Datum'],
                                ($) => ['text', {
                                    'delimiter': ['none', null],
                                    'value': v_primitives_to_text.decimal(
                                        $,
                                    ),
                                }],
                            ),
                            "Omschrijving": _p_change_context(
                                $['Omschrijving'],
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            ),
                            "Grootboekrekening": _p_change_context(
                                $['Grootboekrekening'],
                                ($) => ['text', {
                                    'delimiter': ['backtick', null],
                                    'value': $['l id'],
                                }],
                            ),
                        },
                    )]],
                )],
            )],
        ),
    },
)]]

export const Jaren: t_signatures.Jaren = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            "Afgesloten": _p_change_context(
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
                                    }),
                                )
                            case 'Nee':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'Nee',
                                        'value': ['nothing', null],
                                    }),
                                )
                            default:
                                return _p.au(
                                    $[0],
                                )
                        }
                    },
                )],
            ),
            "Startdatum boekjaar": _p_change_context(
                $['Startdatum boekjaar'],
                ($) => ['text', {
                    'delimiter': ['none', null],
                    'value': v_primitives_to_text.decimal(
                        $,
                    ),
                }],
            ),
            "Grootboekrekeningen": _p_change_context(
                $['Grootboekrekeningen'],
                ($) => Grootboekrekeningen(
                    $,
                ),
            ),
            "Eerste boekjaar": _p_change_context(
                $['Eerste boekjaar'],
                ($) => Eerste_boekjaar(
                    $,
                ),
            ),
            "Jaarbeheer": _p_change_context(
                $['Jaarbeheer'],
                ($) => Jaarbeheer(
                    $,
                ),
            ),
            "Handelstransacties": _p_change_context(
                $['Handelstransacties'],
                ($) => Handelstransacties(
                    $,
                ),
            ),
            "Mutaties": _p_change_context(
                $['Mutaties'],
                ($) => Mutaties(
                    $,
                ),
            ),
        },
    )]],
)]

export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Jaar": _p_change_context(
            $['Jaar'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['backtick', null],
                    'value': $['l id'],
                }]],
                () => ['not set', null],
            )],
        ),
        "type": _p_change_context(
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
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'Verkoop':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'Verkoop',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'BTW-periode':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'BTW-periode',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
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
                    }),
                )
            case 'Nee':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'Nee',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "Vorig boekjaar": _p_change_context(
                                    $['Vorig boekjaar'],
                                    ($) => ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "Fiscaal": _p_change_context(
            $['Fiscaal'],
            ($) => Fiscaal(
                $,
            ),
        ),
        "Categorieen": _p_change_context(
            $['Categorieen'],
            ($) => Grootboek_Categorieen(
                $,
            ),
        ),
        "Beheer": _p_change_context(
            $['Beheer'],
            ($) => Beheer(
                $,
            ),
        ),
        "Jaren": _p_change_context(
            $['Jaren'],
            ($) => Jaren(
                $,
            ),
        ),
    },
)]]
