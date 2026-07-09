
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../declarations/transformers/foo/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

export const Root: t_signatures.Root = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Fiscaal": p_change_context(
            $['Fiscaal'],
            ($) => Fiscaal(
                $,
            ),
        ),
        "Categorieen": p_change_context(
            $['Categorieen'],
            ($) => Grootboek_Categorieen(
                $,
            ),
        ),
        "Beheer": p_change_context(
            $['Beheer'],
            ($) => Beheer(
                $,
            ),
        ),
        "Jaren": p_change_context(
            $['Jaren'],
            ($) => Jaren(
                $,
            ),
        ),
    },
)]]

export const Fiscaal: t_signatures.Fiscaal = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Balans Hoofdcategorieen": p_change_context(
            $['Balans Hoofdcategorieen'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Zijde": p_change_context(
                            $['Zijde'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Activa':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Activa',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Passiva':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Passiva',
                                                    'value': ['nothing', null],
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
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['nothing', null],
                            )],
                        ),
                    },
                )]],
            )],
        ),
        "Resultaat Hoofdcategorieen": p_change_context(
            $['Resultaat Hoofdcategorieen'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Zijde": p_change_context(
                            $['Zijde'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Kosten':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Kosten',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Opbrengsten':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Opbrengsten',
                                                    'value': ['nothing', null],
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
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['nothing', null],
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Correctietypes vennootschapsbelasting": p_change_context(
            $['Correctietypes vennootschapsbelasting'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
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
        "Balans": p_change_context(
            $['Balans'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Zijde": p_change_context(
                            $['Zijde'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Activa':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Activa',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Passiva':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Passiva',
                                                    'value': ['nothing', null],
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
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Hoofdcategorie fiscus": p_change_context(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['apostrophe', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                        "Subcategorie fiscus": p_change_context(
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
        "Resultaat": p_change_context(
            $['Resultaat'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Zijde": p_change_context(
                            $['Zijde'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Kosten':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Kosten',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Opbrengsten':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Opbrengsten',
                                                    'value': ['nothing', null],
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
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Hoofdcategorie fiscus": p_change_context(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => ['text', {
                                                'delimiter': ['apostrophe', null],
                                                'value': $['l id'],
                                            }],
                                        ),
                                        "Subcategorie fiscus": p_change_context(
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

export const Beheer: t_signatures.Beheer = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "BTW-categorieen": p_change_context(
            $['BTW-categorieen'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "BTW-heffing": p_change_context(
                            $['BTW-heffing'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return p_.option(
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
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Nee',
                                                    'value': ['nothing', null],
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
        "Grootboekrekeningen": p_change_context(
            $['Grootboekrekeningen'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "Balans": p_change_context(
                        $['Balans'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Hoofdcategorie": p_change_context(
                                        $['Hoofdcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Subcategorie": p_change_context(
                                        $['Subcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Zijde": p_change_context(
                                        $['Zijde'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Activa',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'Passiva':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Passiva',
                                                                'value': ['nothing', null],
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
                    "Resultaat": p_change_context(
                        $['Resultaat'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Hoofdcategorie": p_change_context(
                                        $['Hoofdcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Subcategorie": p_change_context(
                                        $['Subcategorie'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Zijde": p_change_context(
                                        $['Zijde'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return p_.option(
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
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Ja',
                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                        {
                                                                                                            "Correctietype": p_change_context(
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
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Nee',
                                                                                                    'value': ['nothing', null],
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
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Opbrengsten',
                                                                'value': ['nothing', null],
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
        ),
        "Rekeningen": p_change_context(
            $['Rekeningen'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "Bank": p_change_context(
                        $['Bank'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['nothing', null],
                        )],
                    ),
                    "Informeel": p_change_context(
                        $['Informeel'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['nothing', null],
                        )],
                    ),
                },
            )]],
        ),
        "Gebruikers": p_change_context(
            $['Gebruikers'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
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
        "Klanten": p_change_context(
            $['Klanten'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Licentieovereenkomsten": p_change_context(
                            $['Licentieovereenkomsten'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Periodes": p_change_context(
                                            $['Periodes'],
                                            ($) => ['dictionary', p_.from.dictionary($,
                                            ).map(
                                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Bedrag": p_change_context(
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
                        "Projecten": p_change_context(
                            $['Projecten'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Offertes": p_change_context(
                                            $['Offertes'],
                                            ($) => ['dictionary', p_.from.dictionary($,
                                            ).map(
                                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "Opbrengsten": p_change_context(
                                                            $['Opbrengsten'],
                                                            ($) => ['dictionary', p_.from.dictionary($,
                                                            ).map(
                                                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "Type": p_change_context(
                                                                            $['Type'],
                                                                            ($) => ['state', p_decide_state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Project':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Project',
                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                        {
                                                                                                            "Bedrag": p_change_context(
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
                                                                                                            "Betaaldatum": p_change_context(
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
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['nothing', null],
            )],
        ),
        "Medewerkers": p_change_context(
            $['Medewerkers'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['nothing', null],
            )],
        ),
    },
)]]

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Balans": p_change_context(
            $['Balans'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Stam": p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                    },
                )]],
            )],
        ),
        "Resultaat": p_change_context(
            $['Resultaat'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Stam": p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Resultaat": p_change_context(
            $['Resultaat'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "Grootboekrekening voor BTW afrondingen": p_change_context(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Salarisrondes": p_change_context(
                        $['Salarisrondes'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['nothing', null],
                        )],
                    ),
                    "BTW periodes": p_change_context(
                        $['BTW periodes'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "1. BTW-categorieen": p_change_context(
                                        $['1. BTW-categorieen'],
                                        ($) => ['dictionary', p_.from.dictionary($,
                                        ).map(
                                            ($, id): t_out.Value => ['nothing', null],
                                        )],
                                    ),
                                    "Documenten": p_change_context(
                                        $['Documenten'],
                                        ($) => ['dictionary', p_.from.dictionary($,
                                        ).map(
                                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                {
                                                    "Bestand": p_change_context(
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
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Aangegeven',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "Afronding": p_change_context(
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
                                                                        "Bedrag": p_change_context(
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
                                                                        "Datum": p_change_context(
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
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Openstaand',
                                                                'value': ['nothing', null],
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
        ),
        "Balans": p_change_context(
            $['Balans'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "Grootboekrekening voor nog aan te geven BTW": p_change_context(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor resultaat dit jaar": p_change_context(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor winstreserve": p_change_context(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor Inkoop saldo": p_change_context(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Grootboekrekening voor Verkoop saldo": p_change_context(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => ['text', {
                            'delimiter': ['apostrophe', null],
                            'value': $['l id'],
                        }],
                    ),
                    "Beginsaldo nog aan te geven BTW": p_change_context(
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
                    "Beginsaldo winstreserve": p_change_context(
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
                    "Bankrekeningen": p_change_context(
                        $['Bankrekeningen'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Beginsaldo": p_change_context(
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
                                    "Grootboekrekening": p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Nieuw": p_change_context(
                                        $['Nieuw'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Ja',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'Nee':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "Rekening": p_change_context(
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
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                    "Mutaties": p_change_context(
                                        $['Mutaties'],
                                        ($) => ['dictionary', p_.from.dictionary($,
                                        ).map(
                                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                {
                                                    "Bedrag": p_change_context(
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
                                                    "Datum": p_change_context(
                                                        $['Datum'],
                                                        ($) => ['text', {
                                                            'delimiter': ['none', null],
                                                            'value': v_primitives_to_text.iso_date_udhr(
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
                                                },
                                            )]],
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                    "Informele rekeningen": p_change_context(
                        $['Informele rekeningen'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "Beginsaldo": p_change_context(
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
                                    "Grootboekrekening": p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['apostrophe', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                    "Nieuw": p_change_context(
                                        $['Nieuw'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Ja',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'Nee':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "Rekening": p_change_context(
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
                    "Overige balans items": p_change_context(
                        $['Overige balans items'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id) => Overige_balans_item(
                                $,
                            ),
                        )],
                    ),
                    "Verrekenposten": p_change_context(
                        $['Verrekenposten'],
                        ($) => ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id): t_out.Value => ['nothing', null],
                        )],
                    ),
                },
            )]],
        ),
    },
)]]

export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Beginsaldo": p_change_context(
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
        "Grootboekrekening": p_change_context(
            $['Grootboekrekening'],
            ($) => ['text', {
                'delimiter': ['apostrophe', null],
                'value': $['l id'],
            }],
        ),
        "Nieuw": p_change_context(
            $['Nieuw'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Ja':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'Ja',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'Nee':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'Nee',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "Balans item": p_change_context(
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
                            return p_.au(
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

export const Handelstransacties: t_signatures.Handelstransacties = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Inkopen": p_change_context(
            $['Inkopen'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Afhandeling": p_change_context(
                            $['Afhandeling'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Mutaties':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Mutaties',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Nog te betalen':
                                            return p_.option(
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
                                        case 'Rekening courant':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Rekening courant": p_change_context(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "BTW-periode": p_change_context(
                            $['BTW-periode'],
                            ($) => ['text', {
                                'delimiter': ['apostrophe', null],
                                'value': $['l id'],
                            }],
                        ),
                        "Brondocument": p_change_context(
                            $['Brondocument'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Toegevoegd':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Toegevoegd',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Document": p_change_context(
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
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Niet van toepassing',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Ontbreekt':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Ontbreekt',
                                                    'value': ['nothing', null],
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
                                'value': v_primitives_to_text.iso_date_udhr(
                                    $,
                                ),
                            }],
                        ),
                        "Regels": p_change_context(
                            $['Regels'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Bedrag": p_change_context(
                                            $['Bedrag'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Bekend':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Bekend',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-bedrag": p_change_context(
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
                                                                            "Bedrag inclusief geheven BTW": p_change_context(
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Balans item": p_change_context(
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Kosten',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Grootboekrekening": p_change_context(
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
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Bonnetje',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Inkoop (met crediteur)':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Inkoop (met crediteur)',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Crediteur": p_change_context(
                                                                $['Crediteur'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
                                                                    'value': $['l id'],
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
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Loonheffing',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Ronde": p_change_context(
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
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Salaris',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Ronde": p_change_context(
                                                                $['Ronde'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Medewerker": p_change_context(
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
        "Verkopen": p_change_context(
            $['Verkopen'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Afhandeling": p_change_context(
                            $['Afhandeling'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Mutaties':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Mutaties',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'Rekening courant':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Rekening courant',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Rekening courant": p_change_context(
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
                                'delimiter': ['apostrophe', null],
                                'value': $['l id'],
                            }],
                        ),
                        "Brondocument": p_change_context(
                            $['Brondocument'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Toegevoegd':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Toegevoegd',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Document": p_change_context(
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
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "Debiteur": p_change_context(
                            $['Debiteur'],
                            ($) => ['text', {
                                'delimiter': ['apostrophe', null],
                                'value': $['l id'],
                            }],
                        ),
                        "Contracttype": p_change_context(
                            $['Contracttype'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'Project':
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Project',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Project": p_change_context(
                                                                $['Project'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['apostrophe', null],
                                                                    'value': $['l id'],
                                                                }],
                                                            ),
                                                            "Offerte": p_change_context(
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
                                            return p_.option(
                                                $,
                                                ($) => ({
                                                    'option': 'Licentieovereenkomst',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "Overeenkomst": p_change_context(
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
                                'value': v_primitives_to_text.iso_date_udhr(
                                    $,
                                ),
                            }],
                        ),
                        "Regels": p_change_context(
                            $['Regels'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "BTW-regime": p_change_context(
                                            $['BTW-regime'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Intracommunautair':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Intracommunautair',
                                                                    'value': ['nothing', null],
                                                                }),
                                                            )
                                                        case 'Standaard':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Standaard',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "BTW-categorie": p_change_context(
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Binnenland: heffing verlegd',
                                                                    'value': ['nothing', null],
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
                                                'value': v_primitives_to_text.fractional_decimal(
                                                    $,
                                                    {
                                                        'number of fractional digits': 2,
                                                    },
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Project',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Opbrengst": p_change_context(
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Los',
                                                                    'value': ['nothing', null],
                                                                }),
                                                            )
                                                        case 'Licentieovereenkomst':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Licentieovereenkomst',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Periode": p_change_context(
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Opbrengsten',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Grootboekrekening": p_change_context(
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
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                        {
                                                                            "Balans item": p_change_context(
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
)]]

export const Mutaties: t_signatures.Mutaties = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Verrekenposten": p_change_context(
            $['Verrekenposten'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Stam": p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                        "Mutaties": p_change_context(
                            $['Mutaties'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Bedrag": p_change_context(
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
                                        "Afhandeling": p_change_context(
                                            $['Afhandeling'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Resultaat':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Resultaat',
                                                                    'value': Rekening_Mutatie(
                                                                        $,
                                                                    ),
                                                                }),
                                                            )
                                                        case 'Balans':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['state', p_decide_state(
                                                                        $,
                                                                        ($): t_out.Value.state => {
                                                                            switch ($[0]) {
                                                                                case 'Informele rekening':
                                                                                    return p_.option(
                                                                                        $,
                                                                                        ($) => ({
                                                                                            'option': 'Informele rekening',
                                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                {
                                                                                                    "Informele rekening": p_change_context(
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
                                                                                    return p_.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )],
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
        "Bankrekeningen": p_change_context(
            $['Bankrekeningen'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Stam": p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                        "Mutatie Verwerkingen": p_change_context(
                            $['Mutatie Verwerkingen'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Stam": p_change_context(
                                            $['Stam'],
                                            ($) => ['nothing', null],
                                        ),
                                        "type": p_change_context(
                                            $['type'],
                                            ($) => ['state', p_decide_state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'Resultaat':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Resultaat',
                                                                    'value': Rekening_Mutatie(
                                                                        $,
                                                                    ),
                                                                }),
                                                            )
                                                        case 'Balans':
                                                            return p_.option(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Balans',
                                                                    'value': ['state', p_decide_state(
                                                                        $,
                                                                        ($): t_out.Value.state => {
                                                                            switch ($[0]) {
                                                                                case 'Informele rekening':
                                                                                    return p_.option(
                                                                                        $,
                                                                                        ($) => ({
                                                                                            'option': 'Informele rekening',
                                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                {
                                                                                                    "Informele rekening": p_change_context(
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
                                                                                    return p_.option(
                                                                                        $,
                                                                                        ($) => ({
                                                                                            'option': 'Verrekenpost',
                                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                {
                                                                                                    "Verrekenpost": p_change_context(
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
                                                                                    return p_.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )],
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
        "Overige Balans Items": p_change_context(
            $['Overige Balans Items'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "Stam": p_change_context(
                            $['Stam'],
                            ($) => ['nothing', null],
                        ),
                        "Memoriaal Boekingen": p_change_context(
                            $['Memoriaal Boekingen'],
                            ($) => ['dictionary', p_.from.dictionary($,
                            ).map(
                                ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "Bedrag": p_change_context(
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
                                        "Datum": p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_primitives_to_text.iso_date_udhr(
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
                                        "Grootboekrekening": p_change_context(
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

export const Jaren: t_signatures.Jaren = ($) => ['dictionary', p_.from.dictionary($,
).map(
    ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
        {
            "Afgesloten": p_change_context(
                $['Afgesloten'],
                ($) => ['state', p_decide_state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'Ja':
                                return p_.option(
                                    $,
                                    ($) => ({
                                        'option': 'Ja',
                                        'value': ['nothing', null],
                                    }),
                                )
                            case 'Nee':
                                return p_.option(
                                    $,
                                    ($) => ({
                                        'option': 'Nee',
                                        'value': ['nothing', null],
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
            "Startdatum boekjaar": p_change_context(
                $['Startdatum boekjaar'],
                ($) => ['text', {
                    'delimiter': ['none', null],
                    'value': v_primitives_to_text.iso_date_udhr(
                        $,
                    ),
                }],
            ),
            "Grootboekrekeningen": p_change_context(
                $['Grootboekrekeningen'],
                ($) => Grootboekrekeningen(
                    $,
                ),
            ),
            "Eerste boekjaar": p_change_context(
                $['Eerste boekjaar'],
                ($) => Eerste_boekjaar(
                    $,
                ),
            ),
            "Jaarbeheer": p_change_context(
                $['Jaarbeheer'],
                ($) => Jaarbeheer(
                    $,
                ),
            ),
            "Handelstransacties": p_change_context(
                $['Handelstransacties'],
                ($) => Handelstransacties(
                    $,
                ),
            ),
            "Mutaties": p_change_context(
                $['Mutaties'],
                ($) => Mutaties(
                    $,
                ),
            ),
        },
    )]],
)]

export const Rekening_Mutatie: t_signatures.Rekening_Mutatie = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "Jaar": p_change_context(
            $['Jaar'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['apostrophe', null],
                    'value': $['l id'],
                }]],
                () => ['not set', null],
            )],
        ),
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return p_.option(
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
                            return p_.option(
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
                            return p_.option(
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
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'Ja':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'Ja',
                        'value': ['nothing', null],
                    }),
                )
            case 'Nee':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'Nee',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "Vorig boekjaar": p_change_context(
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
                return p_.au(
                    $[0],
                )
        }
    },
)]
