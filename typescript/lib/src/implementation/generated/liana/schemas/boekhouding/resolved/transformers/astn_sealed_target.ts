
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/signatures/resolved/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.literal.dictionary(
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

export const Fiscaal: t_signatures.Fiscaal = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Balans Hoofdcategorieen": _p_change_context(
            $['Balans Hoofdcategorieen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Correctietypes vennootschapsbelasting": _p_change_context(
            $['Correctietypes vennootschapsbelasting'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Hoofdcategorie fiscus": _p_change_context(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['apostrophe', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                        "Subcategorie fiscus": _p_change_context(
                                            $['Subcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['apostrophe', null],
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Hoofdcategorie fiscus": _p_change_context(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['apostrophe', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                        "Subcategorie fiscus": _p_change_context(
                                            $['Subcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['apostrophe', null],
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

export const Beheer: t_signatures.Beheer = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "BTW-categorieen": _p_change_context(
            $['BTW-categorieen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
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
            )],
        ),
        "Grootboekrekeningen": _p_change_context(
            $['Grootboekrekeningen'],
            ($) => ['group', ['verbose', _p.literal.dictionary(
                {
                    "Balans": _p_change_context(
                        $['Balans'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Hoofdcategorie": _p_change_context(
                                        $['Hoofdcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Subcategorie": _p_change_context(
                                        $['Subcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
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
                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Hoofdcategorie": _p_change_context(
                                        $['Hoofdcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Subcategorie": _p_change_context(
                                        $['Subcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
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
                                                                'value': ['group', ['verbose', _p.literal.dictionary(
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
                                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                        {
                                                                                                            "Correctietype": _p_change_context(
                                                                                                                $['Correctietype'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['apostrophe', null],
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
            ($) => ['group', ['verbose', _p.literal.dictionary(
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {
                        "Licentieovereenkomsten": _p_change_context(
                            $['Licentieovereenkomsten'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Periodes": _p_change_context(
                                            $['Periodes'],
                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                                    {
                                                        "Bedrag": _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.fractional_decimal(
                                                                    $,
                                                                    {
                                                                        'number of fractional digits': 2,
                                                                    },
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
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Offertes": _p_change_context(
                                            $['Offertes'],
                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                                    {
                                                        "Opbrengsten": _p_change_context(
                                                            $['Opbrengsten'],
                                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                        {
                                                                                                            "Bedrag": _p_change_context(
                                                                                                                $['Bedrag'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_primitives_to_text.fractional_decimal(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'number of fractional digits': 2,
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            ),
                                                                                                            "Betaaldatum": _p_change_context(
                                                                                                                $['Betaaldatum'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_primitives_to_text.iso_date_udhr(
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

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Balans": _p_change_context(
            $['Balans'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {
                        "Stam": _p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {
                        "Stam": _p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Resultaat": _p_change_context(
            $['Resultaat'],
            ($) => ['group', ['verbose', _p.literal.dictionary(
                {
                    "Grootboekrekening voor BTW afrondingen": _p_change_context(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
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
                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                                'value': ['group', ['verbose', _p.literal.dictionary(
                                                                    {
                                                                        "Afronding": _p_change_context(
                                                                            $['Afronding'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.fractional_decimal(
                                                                                    $,
                                                                                    {
                                                                                        'number of fractional digits': 2,
                                                                                    },
                                                                                ),
                                                                            }],
                                                                        ),
                                                                        "Bedrag": _p_change_context(
                                                                            $['Bedrag'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.fractional_decimal(
                                                                                    $,
                                                                                    {
                                                                                        'number of fractional digits': 2,
                                                                                    },
                                                                                ),
                                                                            }],
                                                                        ),
                                                                        "Datum": _p_change_context(
                                                                            $['Datum'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_primitives_to_text.iso_date_udhr(
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
            ($) => ['group', ['verbose', _p.literal.dictionary(
                {
                    "Grootboekrekening voor nog aan te geven BTW": _p_change_context(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor resultaat dit jaar": _p_change_context(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor winstreserve": _p_change_context(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor Inkoop saldo": _p_change_context(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor Verkoop saldo": _p_change_context(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Beginsaldo nog aan te geven BTW": _p_change_context(
                        $['Beginsaldo nog aan te geven BTW'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.fractional_decimal(
                                $,
                                {
                                    'number of fractional digits': 2,
                                },
                            ),
                        }],
                    ),
                    "Beginsaldo winstreserve": _p_change_context(
                        $['Beginsaldo winstreserve'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.fractional_decimal(
                                $,
                                {
                                    'number of fractional digits': 2,
                                },
                            ),
                        }],
                    ),
                    "Bankrekeningen": _p_change_context(
                        $['Bankrekeningen'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Beginsaldo": _p_change_context(
                                        $['Beginsaldo'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.fractional_decimal(
                                                $,
                                                {
                                                    'number of fractional digits': 2,
                                                },
                                            ),
                                        }],
                                    ),
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
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
                                                                'value': ['group', ['verbose', _p.literal.dictionary(
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
                                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                                {
                                                    "Bedrag": _p_change_context(
                                                        $['Bedrag'],
                                                        ($) => ['text', {
                                                            'delimiter': ['none', null],
                                                            'value': v_primitives_to_text.fractional_decimal(
                                                                $,
                                                                {
                                                                    'number of fractional digits': 2,
                                                                },
                                                            ),
                                                        }],
                                                    ),
                                                    "Datum": _p_change_context(
                                                        $['Datum'],
                                                        ($) => ['text', {
                                                            'delimiter': ['none', null],
                                                            'value': v_primitives_to_text.iso_date_udhr(
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
                    "Informele rekeningen": _p_change_context(
                        $['Informele rekeningen'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Beginsaldo": _p_change_context(
                                        $['Beginsaldo'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.fractional_decimal(
                                                $,
                                                {
                                                    'number of fractional digits': 2,
                                                },
                                            ),
                                        }],
                                    ),
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
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
                                                                'value': ['group', ['verbose', _p.literal.dictionary(
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

export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Beginsaldo": _p_change_context(
            $['Beginsaldo'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.fractional_decimal(
                    $,
                    {
                        'number of fractional digits': 2,
                    },
                ),
            }],
        ),
        "Grootboekrekening": _p_change_context(
            $['Grootboekrekening'],
            ($) => ['text', {
                'delimiter': ['apostrophe', null],
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
                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                        {
                                            "Balans item": _p_change_context(
                                                $['Balans item'],
                                                ($) => ['text', {
                                                    'delimiter': ['apostrophe', null],
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
    'delimiter': ['apostrophe', null],
    'value': $['l id'],
}]

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ['text', {
    'delimiter': ['apostrophe', null],
    'value': $['l id'],
}]

export const Handelstransacties: t_signatures.Handelstransacties = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Inkopen": _p_change_context(
            $['Inkopen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                        case 'Nog te betalen':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Nog te betalen',
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Betalingstermijn": _p_change_context(
                                                                $['Betalingstermijn'],
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
                                        case 'Rekening courant':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Rekening courant": _p_change_context(
                                                                $['Rekening courant'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                        "BTW-periode": _p_change_context(
                            $['BTW-periode'],
                            ($) => ['text', {
                                'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
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
                                'value': v_primitives_to_text.iso_date_udhr(
                                    $,
                                ),
                            }],
                        ),
                        "Regels": _p_change_context(
                            $['Regels'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-bedrag": _p_change_context(
                                                                                $['BTW-bedrag'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_primitives_to_text.fractional_decimal(
                                                                                        $,
                                                                                        {
                                                                                            'number of fractional digits': 2,
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            ),
                                                                            "Bedrag inclusief geheven BTW": _p_change_context(
                                                                                $['Bedrag inclusief geheven BTW'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_primitives_to_text.fractional_decimal(
                                                                                        $,
                                                                                        {
                                                                                            'number of fractional digits': 2,
                                                                                        },
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Balans item": _p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Grootboekrekening": _p_change_context(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Crediteur": _p_change_context(
                                                                $['Crediteur'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Ronde": _p_change_context(
                                                                $['Ronde'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Ronde": _p_change_context(
                                                                $['Ronde'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Medewerker": _p_change_context(
                                                                $['Medewerker'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Rekening courant": _p_change_context(
                                                                $['Rekening courant'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                                'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
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
                                'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Project": _p_change_context(
                                                                $['Project'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Offerte": _p_change_context(
                                                                $['Offerte'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {
                                                            "Overeenkomst": _p_change_context(
                                                                $['Overeenkomst'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
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
                                'value': v_primitives_to_text.iso_date_udhr(
                                    $,
                                ),
                            }],
                        ),
                        "Regels": _p_change_context(
                            $['Regels'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-categorie": _p_change_context(
                                                                                $['BTW-categorie'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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
                                                'value': v_primitives_to_text.fractional_decimal(
                                                    $,
                                                    {
                                                        'number of fractional digits': 2,
                                                    },
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Opbrengst": _p_change_context(
                                                                                $['Opbrengst'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Periode": _p_change_context(
                                                                                $['Periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Grootboekrekening": _p_change_context(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Balans item": _p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['apostrophe', null],
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

export const Mutaties: t_signatures.Mutaties = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Verrekenposten": _p_change_context(
            $['Verrekenposten'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {
                        "Stam": _p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                        "Mutaties": _p_change_context(
                            $['Mutaties'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Bedrag": _p_change_context(
                                            $['Bedrag'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.fractional_decimal(
                                                    $,
                                                    {
                                                        'number of fractional digits': 2,
                                                    },
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
                                                                    'value': Rekening_Mutatie(
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
                                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                {
                                                                                                    "Informele rekening": _p_change_context(
                                                                                                        $['Informele rekening'],
                                                                                                        ($) => ['text', {
                                                                                                            'delimiter': ['apostrophe', null],
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {
                        "Stam": _p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                        "Mutatie Verwerkingen": _p_change_context(
                            $['Mutatie Verwerkingen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Stam": _p_change_context(
                                            $['Stam'],
                                            ($) => ['nothing', null],
                                        ),
                                        "type": _p_change_context(
                                            $['type'],
                                            ($) => ['state', _p.decide.state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Resultaat':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Resultaat',
                                                                    'value': Rekening_Mutatie(
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
                                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                {
                                                                                                    "Informele rekening": _p_change_context(
                                                                                                        $['Informele rekening'],
                                                                                                        ($) => ['text', {
                                                                                                            'delimiter': ['apostrophe', null],
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
                                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                {
                                                                                                    "Verrekenpost": _p_change_context(
                                                                                                        $['Verrekenpost'],
                                                                                                        ($) => ['text', {
                                                                                                            'delimiter': ['apostrophe', null],
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
                        ),
                    },
                )]],
            )],
        ),
        "Overige Balans Items": _p_change_context(
            $['Overige Balans Items'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {
                        "Stam": _p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                        "Memoriaal Boekingen": _p_change_context(
                            $['Memoriaal Boekingen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
                                        "Bedrag": _p_change_context(
                                            $['Bedrag'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.fractional_decimal(
                                                    $,
                                                    {
                                                        'number of fractional digits': 2,
                                                    },
                                                ),
                                            }],
                                        ),
                                        "Datum": _p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.iso_date_udhr(
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
                                                'delimiter': ['apostrophe', null],
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

export const Jaren: t_signatures.Jaren = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                    'value': v_primitives_to_text.iso_date_udhr(
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

export const Rekening_Mutatie: t_signatures.Rekening_Mutatie = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Jaar": _p_change_context(
            $['Jaar'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['apostrophe', null],
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
                                        'delimiter': ['apostrophe', null],
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
                                        'delimiter': ['apostrophe', null],
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
                                        'delimiter': ['apostrophe', null],
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
                        'value': ['group', ['verbose', _p.literal.dictionary(
                            {
                                "Vorig boekjaar": _p_change_context(
                                    $['Vorig boekjaar'],
                                    ($) => ['text', {
                                        'delimiter': ['apostrophe', null],
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
