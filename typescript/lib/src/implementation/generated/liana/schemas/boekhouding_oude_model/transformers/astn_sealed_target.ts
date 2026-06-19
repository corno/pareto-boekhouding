
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Root: t_signatures.Root = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Bankrekeningen": p_change_context(
            $['Bankrekeningen'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "Beheer": p_change_context(
            $['Beheer'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "Balans": p_change_context(
                        $['Balans'],
                        ($) => ['group', ['verbose', p_.literal.dictionary(
                            {
                                "Grootboekrekeningen": p_change_context(
                                    $['Grootboekrekeningen'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Hoofdcategorie": p_change_context(
                                                    $['Hoofdcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                ),
                                                "Subcategorie": p_change_context(
                                                    $['Subcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                ),
                                                "Zijde": p_change_context(
                                                    $['Zijde'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'Activa':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Activa',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Passiva':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
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
                                "Hoofdcategorieen": p_change_context(
                                    $['Hoofdcategorieen'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Zijde": p_change_context(
                                                    $['Zijde'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'Activa':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Activa',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Passiva':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "Subcategorieen": p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', p_.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                            {
                                                                "Hoofdcategorie fiscus": p_change_context(
                                                                    $['Hoofdcategorie fiscus'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }],
                                                                ),
                                                                "Subcategorie fiscus": p_change_context(
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
                                "Hoofdcategorieen fiscus": p_change_context(
                                    $['Hoofdcategorieen fiscus'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Zijde": p_change_context(
                                                    $['Zijde'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'Activa':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Activa',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Passiva':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "Subcategorieen": p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', p_.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
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
                    "BTW-categorieen": p_change_context(
                        $['BTW-categorieen'],
                        ($) => ['dictionary', p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "BTW-heffing": p_change_context(
                                        $['BTW-heffing'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Ja',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "BTW-promillage": p_change_context(
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
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {},
                                                                )]],
                                                            }),
                                                        )
                                                    default:
                                                        return p_.au(
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
                    "Gebruikers": p_change_context(
                        $['Gebruikers'],
                        ($) => ['dictionary', p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Volledige naam": p_change_context(
                                        $['Volledige naam'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    "Wachtwoord": p_change_context(
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
                    "Huidige datum": p_change_context(
                        $['Huidige datum'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.decimal(
                                $,
                            ),
                        }],
                    ),
                    "Resultaat": p_change_context(
                        $['Resultaat'],
                        ($) => ['group', ['verbose', p_.literal.dictionary(
                            {
                                "Correctietypes vennootschapsbelasting": p_change_context(
                                    $['Correctietypes vennootschapsbelasting'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Te corrigeren promillage": p_change_context(
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
                                "Grootboekrekeningen": p_change_context(
                                    $['Grootboekrekeningen'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Hoofdcategorie": p_change_context(
                                                    $['Hoofdcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                ),
                                                "Subcategorie": p_change_context(
                                                    $['Subcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                ),
                                                "Zijde": p_change_context(
                                                    $['Zijde'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'Kosten':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Kosten',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {
                                                                                    "Correctie op vennootschapsbelasting": p_change_context(
                                                                                        $['Correctie op vennootschapsbelasting'],
                                                                                        ($) => ['state', p_decide_state(
                                                                                            $,
                                                                                            ($): t_out.Value.state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Ja':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ({
                                                                                                                'option': 'Ja',
                                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Correctietype": p_change_context(
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
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ({
                                                                                                                'option': 'Nee',
                                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                )]],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
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
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
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
                                "Hoofdcategorieen": p_change_context(
                                    $['Hoofdcategorieen'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Zijde": p_change_context(
                                                    $['Zijde'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'Kosten':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Kosten',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "Subcategorieen": p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', p_.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                            {
                                                                "Hoofdcategorie fiscus": p_change_context(
                                                                    $['Hoofdcategorie fiscus'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }],
                                                                ),
                                                                "Subcategorie fiscus": p_change_context(
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
                                "Hoofdcategorieen fiscus": p_change_context(
                                    $['Hoofdcategorieen fiscus'],
                                    ($) => ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "Zijde": p_change_context(
                                                    $['Zijde'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'Kosten':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Kosten',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {},
                                                                            )]],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "Subcategorieen": p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', p_.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
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
        "Informele rekeningen": p_change_context(
            $['Informele rekeningen'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "Jaren": p_change_context(
            $['Jaren'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Afgesloten": p_change_context(
                            $['Afgesloten'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Ja',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {},
                                                    )]],
                                                }),
                                            )
                                        case 'Nee':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Nee',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {},
                                                    )]],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Balans grootboekrekeningen": p_change_context(
                            $['Balans grootboekrekeningen'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Type": p_change_context(
                                            $['Type'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Bankrekening':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Bankrekening',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Overig':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Overig',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Informele rekening':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Informele rekening',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return p_.au(
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
                        "Bankrekeningen": p_change_context(
                            $['Bankrekeningen'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Beginsaldo": p_change_context(
                                            $['Beginsaldo'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Grootboekrekening": p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Mutaties": p_change_context(
                                            $['Mutaties'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bedrag": p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                        "Datum": p_change_context(
                                                            $['Datum'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                        "Omschrijving": p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }],
                                                        ),
                                                        "Status": p_change_context(
                                                            $['Status'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Nog te verwerken':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Nog te verwerken',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {},
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'Verwerkt':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Verwerkt',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Afhandeling": p_change_context(
                                                                                                $['Afhandeling'],
                                                                                                ($) => ['state', p_decide_state(
                                                                                                    $,
                                                                                                    ($): t_out.Value.state => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'Inkoop':
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Inkoop',
                                                                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Jaar": p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                                "Inkoop": p_change_context(
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
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Verrekenpost',
                                                                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Verrekenpost": p_change_context(
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
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'BTW-periode',
                                                                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Jaar": p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                                "BTW-periode": p_change_context(
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
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Verkoop',
                                                                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Jaar": p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }],
                                                                                                                                ),
                                                                                                                                "Verkoop": p_change_context(
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
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Informele rekening',
                                                                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Informele rekening": p_change_context(
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
                                                                                                                return p_.au(
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
                                                                            return p_.au(
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
                                        "Nieuw": p_change_context(
                                            $['Nieuw'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Ja':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Ja',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nee':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Jaar": p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Rekening": p_change_context(
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
                                                            return p_.au(
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
                        "Beginsaldo nog aan te geven BTW": p_change_context(
                            $['Beginsaldo nog aan te geven BTW'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                        "Beginsaldo winstreserve": p_change_context(
                            $['Beginsaldo winstreserve'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                        "BTW periode saldo": p_change_context(
                            $['BTW periode saldo'],
                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Grootboekrekening": p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        ),
                        "BTW periodes": p_change_context(
                            $['BTW periodes'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "1. BTW-categorieen": p_change_context(
                                            $['1. BTW-categorieen'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {},
                                                )]],
                                            )],
                                        ),
                                        "Documenten": p_change_context(
                                            $['Documenten'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bestand": p_change_context(
                                                            $['Bestand'],
                                                            ($) => Bestandsnaam(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            )],
                                        ),
                                        "Omschrijving": p_change_context(
                                            $['Omschrijving'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Status": p_change_context(
                                            $['Status'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Aangegeven':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Aangegeven',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Afronding": p_change_context(
                                                                                $['Afronding'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_primitives_to_text.decimal(
                                                                                        $,
                                                                                    ),
                                                                                }],
                                                                            ),
                                                                            "Bedrag": p_change_context(
                                                                                $['Bedrag'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_primitives_to_text.decimal(
                                                                                        $,
                                                                                    ),
                                                                                }],
                                                                            ),
                                                                            "Datum": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Openstaand',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return p_.au(
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
                        "Eerste boekjaar": p_change_context(
                            $['Eerste boekjaar'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Ja',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {},
                                                    )]],
                                                }),
                                            )
                                        case 'Nee':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Nee',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Vorig boekjaar": p_change_context(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Grootboekrekening voor BTW afrondingen": p_change_context(
                            $['Grootboekrekening voor BTW afrondingen'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Grootboekrekening voor nog aan te geven BTW": p_change_context(
                            $['Grootboekrekening voor nog aan te geven BTW'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Grootboekrekening voor resultaat dit jaar": p_change_context(
                            $['Grootboekrekening voor resultaat dit jaar'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Grootboekrekening voor winstreserve": p_change_context(
                            $['Grootboekrekening voor winstreserve'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "Informele rekeningen": p_change_context(
                            $['Informele rekeningen'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Beginsaldo": p_change_context(
                                            $['Beginsaldo'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Grootboekrekening": p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Nieuw": p_change_context(
                                            $['Nieuw'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Ja':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Ja',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nee':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Jaar": p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Rekening": p_change_context(
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
                                                            return p_.au(
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
                        "Inkopen": p_change_context(
                            $['Inkopen'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Afhandeling": p_change_context(
                                            $['Afhandeling'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Nog te betalen':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nog te betalen',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Betalingstermijn": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Mutaties',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Rekening courant':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Rekening courant',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Rekening courant": p_change_context(
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
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "BTW-regime": p_change_context(
                                            $['BTW-regime'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Binnenland: heffing verlegd':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Binnenland: heffing verlegd',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Geen BTW van toepassing',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Import van buiten de EU',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Intracommunautair',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Standaard',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-periode": p_change_context(
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
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Brondocument": p_change_context(
                                            $['Brondocument'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Toegevoegd':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Toegevoegd',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Document": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Niet van toepassing',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Ontbreekt':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Ontbreekt',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nog toevoegen':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nog toevoegen',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        default:
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Datum": p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Regels": p_change_context(
                                            $['Regels'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bedrag": p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Bekend':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Bekend',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "BTW-bedrag": p_change_context(
                                                                                                $['BTW-bedrag'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['none', null],
                                                                                                    'value': v_primitives_to_text.decimal(
                                                                                                        $,
                                                                                                    ),
                                                                                                }],
                                                                                            ),
                                                                                            "Bedrag inclusief geheven BTW": p_change_context(
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
                                                                            return p_.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        ),
                                                        "Omschrijving": p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }],
                                                        ),
                                                        "Type": p_change_context(
                                                            $['Type'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Balans':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Balans',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Balans item": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Kosten',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Grootboekrekening": p_change_context(
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
                                                                            return p_.au(
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
                                        "Type": p_change_context(
                                            $['Type'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Bonnetje':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Bonnetje',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Inkoop (met crediteur)':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Inkoop (met crediteur)',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Crediteur": p_change_context(
                                                                                $['Crediteur'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Factuurnummer": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Loonheffing',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Ronde": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Salaris',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Ronde": p_change_context(
                                                                                $['Ronde'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Medewerker": p_change_context(
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
                                                            return p_.au(
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
                        "Inkoop saldo": p_change_context(
                            $['Inkoop saldo'],
                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Grootboekrekening": p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        ),
                        "Overige balans items": p_change_context(
                            $['Overige balans items'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Beginsaldo": p_change_context(
                                            $['Beginsaldo'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Grootboekrekening": p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Memoriaal boekingen": p_change_context(
                                            $['Memoriaal boekingen'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bedrag": p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                        "Datum": p_change_context(
                                                            $['Datum'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                        "Grootboekrekening": p_change_context(
                                                            $['Grootboekrekening'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }],
                                                        ),
                                                        "Omschrijving": p_change_context(
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
                                        "Nieuw": p_change_context(
                                            $['Nieuw'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Ja':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Ja',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Nee':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Jaar": p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Balans item": p_change_context(
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
                                                            return p_.au(
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
                        "Resultaat grootboekrekeningen": p_change_context(
                            $['Resultaat grootboekrekeningen'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {},
                                )]],
                            )],
                        ),
                        "Salarisrondes": p_change_context(
                            $['Salarisrondes'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {},
                                )]],
                            )],
                        ),
                        "Startdatum boekjaar": p_change_context(
                            $['Startdatum boekjaar'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.decimal(
                                    $,
                                ),
                            }],
                        ),
                        "Verkoop saldo": p_change_context(
                            $['Verkoop saldo'],
                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Grootboekrekening": p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        ),
                        "Verkopen": p_change_context(
                            $['Verkopen'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Afhandeling": p_change_context(
                                            $['Afhandeling'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Mutaties':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Mutaties',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {},
                                                                    )]],
                                                                }),
                                                            )
                                                        case 'Rekening courant':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Rekening courant',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Rekening courant": p_change_context(
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
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Betalingstermijn": p_change_context(
                                            $['Betalingstermijn'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "BTW-periode": p_change_context(
                                            $['BTW-periode'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Brondocument": p_change_context(
                                            $['Brondocument'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Toegevoegd':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Toegevoegd',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Document": p_change_context(
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
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Contracttype": p_change_context(
                                            $['Contracttype'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Project':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Project',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Project": p_change_context(
                                                                                $['Project'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }],
                                                                            ),
                                                                            "Offerte": p_change_context(
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
                                                            return p_.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Licentieovereenkomst',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Overeenkomst": p_change_context(
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
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "Datum": p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.decimal(
                                                    $,
                                                ),
                                            }],
                                        ),
                                        "Debiteur": p_change_context(
                                            $['Debiteur'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "Regels": p_change_context(
                                            $['Regels'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "BTW-regime": p_change_context(
                                                            $['BTW-regime'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Intracommunautair':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Intracommunautair',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {},
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'Standaard':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Standaard',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "BTW-categorie": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Binnenland: heffing verlegd',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {},
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return p_.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        ),
                                                        "Bedrag exclusief BTW": p_change_context(
                                                            $['Bedrag exclusief BTW'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                        "Contracttype": p_change_context(
                                                            $['Contracttype'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Project':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Project',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Opbrengst": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Los',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {},
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'Licentieovereenkomst':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Licentieovereenkomst',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Periode": p_change_context(
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
                                                                            return p_.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        ),
                                                        "Omschrijving": p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }],
                                                        ),
                                                        "Type": p_change_context(
                                                            $['Type'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Opbrengsten':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Opbrengsten',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Grootboekrekening": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Balans',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Balans item": p_change_context(
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
                                                                            return p_.au(
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
                        "Verrekenposten": p_change_context(
                            $['Verrekenposten'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Mutaties": p_change_context(
                                            $['Mutaties'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bedrag": p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_primitives_to_text.decimal(
                                                                    $,
                                                                ),
                                                            }],
                                                        ),
                                                        "Afhandeling": p_change_context(
                                                            $['Afhandeling'],
                                                            ($) => ['state', p_decide_state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'Inkoop':
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Inkoop',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Jaar": p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                            "Inkoop": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Informele rekening',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Informele rekening": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Verkoop',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Jaar": p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                            "Verkoop": p_change_context(
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
                                                                            return p_.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'BTW-periode',
                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                        {
                                                                                            "Jaar": p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }],
                                                                                            ),
                                                                                            "BTW-periode": p_change_context(
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
                                                                            return p_.au(
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
        "Klanten": p_change_context(
            $['Klanten'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Licentieovereenkomsten": p_change_context(
                            $['Licentieovereenkomsten'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Periodes": p_change_context(
                                            $['Periodes'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bedrag": p_change_context(
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
                        "Projecten": p_change_context(
                            $['Projecten'],
                            ($) => ['dictionary', p_.from.dictionary(
                                $,
                            ).map(
                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Offertes": p_change_context(
                                            $['Offertes'],
                                            ($) => ['dictionary', p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Opbrengsten": p_change_context(
                                                            $['Opbrengsten'],
                                                            ($) => ['dictionary', p_.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "Type": p_change_context(
                                                                            $['Type'],
                                                                            ($) => ['state', p_decide_state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Project':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Project',
                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                        {
                                                                                                            "Bedrag": p_change_context(
                                                                                                                $['Bedrag'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_primitives_to_text.decimal(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                }],
                                                                                                            ),
                                                                                                            "Betaaldatum": p_change_context(
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
                                                                                            return p_.au(
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
        "Leveranciers": p_change_context(
            $['Leveranciers'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {},
                )]],
            )],
        ),
        "Medewerkers": p_change_context(
            $['Medewerkers'],
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {},
                )]],
            )],
        ),
    },
)]]

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "stem": p_change_context(
            $['stem'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "extension": p_change_context(
            $['extension'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]
