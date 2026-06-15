
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "Bankrekeningen": _p_change_context(
            $['Bankrekeningen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "Beheer": _p_change_context(
            $['Beheer'],
            ($) => ['group', ['verbose', _p.literal.dictionary(
                {
                    "Balans": _p_change_context(
                        $['Balans'],
                        ($) => ['group', ['verbose', _p.literal.dictionary(
                            {
                                "Grootboekrekeningen": _p_change_context(
                                    $['Grootboekrekeningen'],
                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                            {
                                                "Hoofdcategorie": _p_change_context(
                                                    $['Hoofdcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                ),
                                                "Subcategorie": _p_change_context(
                                                    $['Subcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
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
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
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
                                "Hoofdcategorieen": _p_change_context(
                                    $['Hoofdcategorieen'],
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
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
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
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }],
                                                                ),
                                                                "Subcategorie fiscus": _p_change_context(
                                                                    $['Subcategorie fiscus'],
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
                                "Hoofdcategorieen fiscus": _p_change_context(
                                    $['Hoofdcategorieen fiscus'],
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
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
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
                                                "Subcategorieen": _p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                                            {},
                                                        )]],
                                                    )],
                                                ),
                                            },
                                        )]],
                                    )],
                                ),
                            },
                        )]],
                    ),
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
                                                                'value': ['group', ['verbose', _p.literal.dictionary(
                                                                    {},
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
                    "Huidige datum": _p_change_context(
                        $['Huidige datum'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.decimal(
                                $,
                            ),
                        }],
                    ),
                    "Resultaat": _p_change_context(
                        $['Resultaat'],
                        ($) => ['group', ['verbose', _p.literal.dictionary(
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
                                "Grootboekrekeningen": _p_change_context(
                                    $['Grootboekrekeningen'],
                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                            {
                                                "Hoofdcategorie": _p_change_context(
                                                    $['Hoofdcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                ),
                                                "Subcategorie": _p_change_context(
                                                    $['Subcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
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
                                                                                                                                'delimiter': ['quote', null],
                                                                                                                                'value': $,
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
                                                                                                                'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                                    {},
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
                                                                        }),
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
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
                                "Hoofdcategorieen": _p_change_context(
                                    $['Hoofdcategorieen'],
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
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
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
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }],
                                                                ),
                                                                "Subcategorie fiscus": _p_change_context(
                                                                    $['Subcategorie fiscus'],
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
                                "Hoofdcategorieen fiscus": _p_change_context(
                                    $['Hoofdcategorieen fiscus'],
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
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                {},
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
                                                "Subcategorieen": _p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                                            {},
                                                        )]],
                                                    )],
                                                ),
                                            },
                                        )]],
                                    )],
                                ),
                            },
                        )]],
                    ),
                },
            )]],
        ),
        "Informele rekeningen": _p_change_context(
            $['Informele rekeningen'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "Jaren": _p_change_context(
            $['Jaren'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
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
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {},
                                                    )]],
                                                }),
                                            )
                                        case 'Nee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Nee',
                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                        {},
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
                        "Balans grootboekrekeningen": _p_change_context(
                            $['Balans grootboekrekeningen'],
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
                                                        case 'Bankrekening':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Bankrekening',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Overig':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Overig',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Informele rekening':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Informele rekening',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
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
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
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
                                                        "Status": _p_change_context(
                                                            $['Status'],
                                                            ($) => ['state', _p.decide.state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Nog te verwerken':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Nog te verwerken',
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {},
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'Verwerkt':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Verwerkt',
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {
                                                                                            "Afhandeling": _p_change_context(
                                                                                                $['Afhandeling'],
                                                                                                ($) => ['state', _p.decide.state(
                                                                                                    $,
                                                                                                    ($): t_out.Value.state => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'Inkoop':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Inkoop',
                                                                                                                        'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Jaar": _p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                                "Inkoop": _p_change_context(
                                                                                                                                    $['Inkoop'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
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
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                            },
                                                                                                                        )]],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'BTW-periode':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'BTW-periode',
                                                                                                                        'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Jaar": _p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                                "BTW-periode": _p_change_context(
                                                                                                                                    $['BTW-periode'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                            },
                                                                                                                        )]],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Verkoop':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Verkoop',
                                                                                                                        'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Jaar": _p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                                "Verkoop": _p_change_context(
                                                                                                                                    $['Verkoop'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                            },
                                                                                                                        )]],
                                                                                                                    }),
                                                                                                                )
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Jaar": _p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Rekening": _p_change_context(
                                                                                $['Rekening'],
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
                                    },
                                )]],
                            )],
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
                        "BTW periode saldo": _p_change_context(
                            $['BTW periode saldo'],
                            ($) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
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
                                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                                    {},
                                                )]],
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
                                                            ($) => Bestandsnaam(
                                                                $,
                                                            ),
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
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
                        "Eerste boekjaar": _p_change_context(
                            $['Eerste boekjaar'],
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
                                                        {},
                                                    )]],
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
                        "Grootboekrekening voor BTW afrondingen": _p_change_context(
                            $['Grootboekrekening voor BTW afrondingen'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Grootboekrekening voor nog aan te geven BTW": _p_change_context(
                            $['Grootboekrekening voor nog aan te geven BTW'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Grootboekrekening voor resultaat dit jaar": _p_change_context(
                            $['Grootboekrekening voor resultaat dit jaar'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Grootboekrekening voor winstreserve": _p_change_context(
                            $['Grootboekrekening voor winstreserve'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
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
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Grootboekrekening": _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Jaar": _p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Rekening": _p_change_context(
                                                                                $['Rekening'],
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
                                    },
                                )]],
                            )],
                        ),
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
                                                        case 'Mutaties':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Mutaties',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": _p_change_context(
                                                                                $['BTW-periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Geen BTW van toepassing':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Geen BTW van toepassing',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": _p_change_context(
                                                                                $['BTW-periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Import van buiten de EU':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Import van buiten de EU',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": _p_change_context(
                                                                                $['BTW-periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Intracommunautair':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Intracommunautair',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": _p_change_context(
                                                                                $['BTW-periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                        },
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Standaard':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Standaard',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": _p_change_context(
                                                                                $['BTW-periode'],
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
                                                                                ($) => Bestandsnaam(
                                                                                    $,
                                                                                ),
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Ontbreekt':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Ontbreekt',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nog toevoegen':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nog toevoegen',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
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
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {
                                                                                            "Balans item": _p_change_context(
                                                                                                $['Balans item'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
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
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
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
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
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
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Medewerker": _p_change_context(
                                                                                $['Medewerker'],
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
                                    },
                                )]],
                            )],
                        ),
                        "Inkoop saldo": _p_change_context(
                            $['Inkoop saldo'],
                            ($) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        ),
                        "Overige balans items": _p_change_context(
                            $['Overige balans items'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Memoriaal boekingen": _p_change_context(
                                            $['Memoriaal boekingen'],
                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
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
                                                        "Grootboekrekening": _p_change_context(
                                                            $['Grootboekrekening'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {
                                                                            "Jaar": _p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Balans item": _p_change_context(
                                                                                $['Balans item'],
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
                                    },
                                )]],
                            )],
                        ),
                        "Resultaat grootboekrekeningen": _p_change_context(
                            $['Resultaat grootboekrekeningen'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {},
                                )]],
                            )],
                        ),
                        "Salarisrondes": _p_change_context(
                            $['Salarisrondes'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {},
                                )]],
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
                        "Verkoop saldo": _p_change_context(
                            $['Verkoop saldo'],
                            ($) => ['group', ['verbose', _p.literal.dictionary(
                                {
                                    "Grootboekrekening": _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
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
                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                        {},
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
                                                'delimiter': ['quote', null],
                                                'value': $,
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
                                                                                ($) => Bestandsnaam(
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
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Offerte": _p_change_context(
                                                                                $['Offerte'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
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
                                        "Datum": _p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Debiteur": _p_change_context(
                                            $['Debiteur'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
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
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {},
                                                                                    )]],
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
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
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
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {},
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
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {
                                                                                            "Opbrengst": _p_change_context(
                                                                                                $['Opbrengst'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
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
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {},
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
                                                                                            "Periode": _p_change_context(
                                                                                                $['Periode'],
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
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
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
                                                    },
                                                )]],
                                            )],
                                        ),
                                    },
                                )]],
                            )],
                        ),
                        "Verrekenposten": _p_change_context(
                            $['Verrekenposten'],
                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                                    {
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
                                                                        case 'Inkoop':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Inkoop',
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {
                                                                                            "Jaar": _p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                            "Inkoop": _p_change_context(
                                                                                                $['Inkoop'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                }),
                                                                            )
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
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'Verkoop':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Verkoop',
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {
                                                                                            "Jaar": _p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                            "Verkoop": _p_change_context(
                                                                                                $['Verkoop'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'BTW-periode':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'BTW-periode',
                                                                                    'value': ['group', ['verbose', _p.literal.dictionary(
                                                                                        {
                                                                                            "Jaar": _p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                            "BTW-periode": _p_change_context(
                                                                                                $['BTW-periode'],
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
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "Medewerkers": _p_change_context(
            $['Medewerkers'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.literal.dictionary(
                    {},
                )]],
            )],
        ),
    },
)]]

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "stem": _p_change_context(
            $['stem'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "extension": _p_change_context(
            $['extension'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]
