
import * as _p from "pareto-core/dist/expression"

import _p_change_context from "pareto-core/dist/_p_change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding_oude_model/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Root: t_signatures.Root = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'Bankrekeningen': _p_change_context(
            $['Bankrekeningen'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                    }
                )]]
            )]
        ),
        'Beheer': _p_change_context(
            $['Beheer'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    'Balans': _p_change_context(
                        $['Balans'],
                        ($) => ['group', ['verbose', _p.dictionary.literal(
                            {
                                'Grootboekrekeningen': _p_change_context(
                                    $['Grootboekrekeningen'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Hoofdcategorie': _p_change_context(
                                                    $['Hoofdcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }]
                                                ),
                                                'Subcategorie': _p_change_context(
                                                    $['Subcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }]
                                                ),
                                                'Zijde': _p_change_context(
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
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
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
                                            }
                                        )]]
                                    )]
                                ),
                                'Hoofdcategorieen': _p_change_context(
                                    $['Hoofdcategorieen'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Zijde': _p_change_context(
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
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
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
                                                'Subcategorieen': _p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', _p.dictionary.map(
                                                        $,
                                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                            {
                                                                'Hoofdcategorie fiscus': _p_change_context(
                                                                    $['Hoofdcategorie fiscus'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }]
                                                                ),
                                                                'Subcategorie fiscus': _p_change_context(
                                                                    $['Subcategorie fiscus'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }]
                                                                ),
                                                            }
                                                        )]]
                                                    )]
                                                ),
                                            }
                                        )]]
                                    )]
                                ),
                                'Hoofdcategorieen fiscus': _p_change_context(
                                    $['Hoofdcategorieen fiscus'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Zijde': _p_change_context(
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
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Passiva',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
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
                                                'Subcategorieen': _p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', _p.dictionary.map(
                                                        $,
                                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                            {
                                                            }
                                                        )]]
                                                    )]
                                                ),
                                            }
                                        )]]
                                    )]
                                ),
                            }
                        )]]
                    ),
                    'BTW-categorieen': _p_change_context(
                        $['BTW-categorieen'],
                        ($) => ['dictionary', _p.dictionary.map(
                            $,
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'BTW-heffing': _p_change_context(
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
                                                                        'BTW-promillage': _p_change_context(
                                                                            $['BTW-promillage'],
                                                                            ($) => ['text', {
                                                                                'delimiter': ['none', null],
                                                                                'value': v_serialize_number.serialize(
                                                                                    $
                                                                                ),
                                                                            }]
                                                                        ),
                                                                    }
                                                                )]],
                                                            })
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Nee',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                    }
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
                                }
                            )]]
                        )]
                    ),
                    'Gebruikers': _p_change_context(
                        $['Gebruikers'],
                        ($) => ['dictionary', _p.dictionary.map(
                            $,
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'Volledige naam': _p_change_context(
                                        $['Volledige naam'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                    'Wachtwoord': _p_change_context(
                                        $['Wachtwoord'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]]
                        )]
                    ),
                    'Huidige datum': _p_change_context(
                        $['Huidige datum'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_serialize_number.serialize(
                                $
                            ),
                        }]
                    ),
                    'Resultaat': _p_change_context(
                        $['Resultaat'],
                        ($) => ['group', ['verbose', _p.dictionary.literal(
                            {
                                'Correctietypes vennootschapsbelasting': _p_change_context(
                                    $['Correctietypes vennootschapsbelasting'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Te corrigeren promillage': _p_change_context(
                                                    $['Te corrigeren promillage'],
                                                    ($) => ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': v_serialize_number.serialize(
                                                            $
                                                        ),
                                                    }]
                                                ),
                                            }
                                        )]]
                                    )]
                                ),
                                'Grootboekrekeningen': _p_change_context(
                                    $['Grootboekrekeningen'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Hoofdcategorie': _p_change_context(
                                                    $['Hoofdcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }]
                                                ),
                                                'Subcategorie': _p_change_context(
                                                    $['Subcategorie'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }]
                                                ),
                                                'Zijde': _p_change_context(
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
                                                                                    'Correctie op vennootschapsbelasting': _p_change_context(
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
                                                                                                                        'Correctietype': _p_change_context(
                                                                                                                            $['Correctietype'],
                                                                                                                            ($) => ['text', {
                                                                                                                                'delimiter': ['quote', null],
                                                                                                                                'value': $,
                                                                                                                            }]
                                                                                                                        ),
                                                                                                                    }
                                                                                                                )]],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'Nee':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ({
                                                                                                                'option': 'Nee',
                                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                    {
                                                                                                                    }
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
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
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
                                            }
                                        )]]
                                    )]
                                ),
                                'Hoofdcategorieen': _p_change_context(
                                    $['Hoofdcategorieen'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Zijde': _p_change_context(
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
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
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
                                                'Subcategorieen': _p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', _p.dictionary.map(
                                                        $,
                                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                            {
                                                                'Hoofdcategorie fiscus': _p_change_context(
                                                                    $['Hoofdcategorie fiscus'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }]
                                                                ),
                                                                'Subcategorie fiscus': _p_change_context(
                                                                    $['Subcategorie fiscus'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }]
                                                                ),
                                                            }
                                                        )]]
                                                    )]
                                                ),
                                            }
                                        )]]
                                    )]
                                ),
                                'Hoofdcategorieen fiscus': _p_change_context(
                                    $['Hoofdcategorieen fiscus'],
                                    ($) => ['dictionary', _p.dictionary.map(
                                        $,
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'Zijde': _p_change_context(
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
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'Opbrengsten',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
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
                                                'Subcategorieen': _p_change_context(
                                                    $['Subcategorieen'],
                                                    ($) => ['dictionary', _p.dictionary.map(
                                                        $,
                                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                            {
                                                            }
                                                        )]]
                                                    )]
                                                ),
                                            }
                                        )]]
                                    )]
                                ),
                            }
                        )]]
                    ),
                }
            )]]
        ),
        'Informele rekeningen': _p_change_context(
            $['Informele rekeningen'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                    }
                )]]
            )]
        ),
        'Jaren': _p_change_context(
            $['Jaren'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'Afgesloten': _p_change_context(
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
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                        }
                                                    )]],
                                                })
                                            )
                                        case 'Nee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Nee',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                        }
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
                        'Balans grootboekrekeningen': _p_change_context(
                            $['Balans grootboekrekeningen'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Type': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Overig':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Overig',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Informele rekening':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Informele rekening',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
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
                                    }
                                )]]
                            )]
                        ),
                        'Bankrekeningen': _p_change_context(
                            $['Bankrekeningen'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Beginsaldo': _p_change_context(
                                            $['Beginsaldo'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            }]
                                        ),
                                        'Grootboekrekening': _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                        'Mutaties': _p_change_context(
                                            $['Mutaties'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Bedrag': _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                        'Datum': _p_change_context(
                                                            $['Datum'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                        'Omschrijving': _p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }]
                                                        ),
                                                        'Status': _p_change_context(
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
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Verwerkt':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Verwerkt',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Afhandeling': _p_change_context(
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
                                                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                            {
                                                                                                                                'Jaar': _p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                                'Inkoop': _p_change_context(
                                                                                                                                    $['Inkoop'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        )]],
                                                                                                                    })
                                                                                                                )
                                                                                                            case 'Verrekenpost':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Verrekenpost',
                                                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                            {
                                                                                                                                'Verrekenpost': _p_change_context(
                                                                                                                                    $['Verrekenpost'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        )]],
                                                                                                                    })
                                                                                                                )
                                                                                                            case 'BTW-periode':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'BTW-periode',
                                                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                            {
                                                                                                                                'Jaar': _p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                                'BTW-periode': _p_change_context(
                                                                                                                                    $['BTW-periode'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        )]],
                                                                                                                    })
                                                                                                                )
                                                                                                            case 'Verkoop':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Verkoop',
                                                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                            {
                                                                                                                                'Jaar': _p_change_context(
                                                                                                                                    $['Jaar'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                                'Verkoop': _p_change_context(
                                                                                                                                    $['Verkoop'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        )]],
                                                                                                                    })
                                                                                                                )
                                                                                                            case 'Informele rekening':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'Informele rekening',
                                                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                            {
                                                                                                                                'Informele rekening': _p_change_context(
                                                                                                                                    $['Informele rekening'],
                                                                                                                                    ($) => ['text', {
                                                                                                                                        'delimiter': ['quote', null],
                                                                                                                                        'value': $,
                                                                                                                                    }]
                                                                                                                                ),
                                                                                                                            }
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
                                                                                        }
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
                                                    }
                                                )]]
                                            )]
                                        ),
                                        'Nieuw': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Jaar': _p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                            'Rekening': _p_change_context(
                                                                                $['Rekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                    }
                                )]]
                            )]
                        ),
                        'Beginsaldo nog aan te geven BTW': _p_change_context(
                            $['Beginsaldo nog aan te geven BTW'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            }]
                        ),
                        'Beginsaldo winstreserve': _p_change_context(
                            $['Beginsaldo winstreserve'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            }]
                        ),
                        'BTW periode saldo': _p_change_context(
                            $['BTW periode saldo'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'Grootboekrekening': _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]]
                        ),
                        'BTW periodes': _p_change_context(
                            $['BTW periodes'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        '1. BTW-categorieen': _p_change_context(
                                            $['1. BTW-categorieen'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                    }
                                                )]]
                                            )]
                                        ),
                                        'Documenten': _p_change_context(
                                            $['Documenten'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Bestand': _p_change_context(
                                                            $['Bestand'],
                                                            ($) => Bestandsnaam(
                                                                $
                                                            )
                                                        ),
                                                    }
                                                )]]
                                            )]
                                        ),
                                        'Omschrijving': _p_change_context(
                                            $['Omschrijving'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                        'Status': _p_change_context(
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
                                                                            'Afronding': _p_change_context(
                                                                                $['Afronding'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_serialize_number.serialize(
                                                                                        $
                                                                                    ),
                                                                                }]
                                                                            ),
                                                                            'Bedrag': _p_change_context(
                                                                                $['Bedrag'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_serialize_number.serialize(
                                                                                        $
                                                                                    ),
                                                                                }]
                                                                            ),
                                                                            'Datum': _p_change_context(
                                                                                $['Datum'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['none', null],
                                                                                    'value': v_serialize_number.serialize(
                                                                                        $
                                                                                    ),
                                                                                }]
                                                                            ),
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Openstaand':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Openstaand',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
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
                                    }
                                )]]
                            )]
                        ),
                        'Eerste boekjaar': _p_change_context(
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
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                        }
                                                    )]],
                                                })
                                            )
                                        case 'Nee':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'Nee',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            'Vorig boekjaar': _p_change_context(
                                                                $['Vorig boekjaar'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }]
                                                            ),
                                                        }
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
                        'Grootboekrekening voor BTW afrondingen': _p_change_context(
                            $['Grootboekrekening voor BTW afrondingen'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                        'Grootboekrekening voor nog aan te geven BTW': _p_change_context(
                            $['Grootboekrekening voor nog aan te geven BTW'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                        'Grootboekrekening voor resultaat dit jaar': _p_change_context(
                            $['Grootboekrekening voor resultaat dit jaar'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                        'Grootboekrekening voor winstreserve': _p_change_context(
                            $['Grootboekrekening voor winstreserve'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                        'Informele rekeningen': _p_change_context(
                            $['Informele rekeningen'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Beginsaldo': _p_change_context(
                                            $['Beginsaldo'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            }]
                                        ),
                                        'Grootboekrekening': _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                        'Nieuw': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Jaar': _p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                            'Rekening': _p_change_context(
                                                                                $['Rekening'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                    }
                                )]]
                            )]
                        ),
                        'Inkopen': _p_change_context(
                            $['Inkopen'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Afhandeling': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Rekening courant':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Rekening courant',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Rekening courant': _p_change_context(
                                                                                $['Rekening courant'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                        'BTW-regime': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Geen BTW van toepassing':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Geen BTW van toepassing',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'BTW-periode': _p_change_context(
                                                                                $['BTW-periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Import van buiten de EU':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Import van buiten de EU',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Intracommunautair':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Intracommunautair',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Standaard':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Standaard',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'BTW-periode': _p_change_context(
                                                                                $['BTW-periode'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                        'Brondocument': _p_change_context(
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
                                                                            'Document': _p_change_context(
                                                                                $['Document'],
                                                                                ($) => Bestandsnaam(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Niet van toepassing':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Niet van toepassing',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Ontbreekt':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Ontbreekt',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Nog toevoegen':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nog toevoegen',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
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
                                        'Datum': _p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            }]
                                        ),
                                        'Regels': _p_change_context(
                                            $['Regels'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Bedrag': _p_change_context(
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
                                                                                            'BTW-bedrag': _p_change_context(
                                                                                                $['BTW-bedrag'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['none', null],
                                                                                                    'value': v_serialize_number.serialize(
                                                                                                        $
                                                                                                    ),
                                                                                                }]
                                                                                            ),
                                                                                            'Bedrag inclusief geheven BTW': _p_change_context(
                                                                                                $['Bedrag inclusief geheven BTW'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['none', null],
                                                                                                    'value': v_serialize_number.serialize(
                                                                                                        $
                                                                                                    ),
                                                                                                }]
                                                                                            ),
                                                                                        }
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
                                                        'Omschrijving': _p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }]
                                                        ),
                                                        'Type': _p_change_context(
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
                                                                                            'Balans item': _p_change_context(
                                                                                                $['Balans item'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Kosten':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Kosten',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Grootboekrekening': _p_change_context(
                                                                                                $['Grootboekrekening'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
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
                                                    }
                                                )]]
                                            )]
                                        ),
                                        'Type': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Inkoop (met crediteur)':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Inkoop (met crediteur)',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Crediteur': _p_change_context(
                                                                                $['Crediteur'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                            'Factuurnummer': _p_change_context(
                                                                                $['Factuurnummer'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Loonheffing':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Loonheffing',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Ronde': _p_change_context(
                                                                                $['Ronde'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Salaris':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Salaris',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Ronde': _p_change_context(
                                                                                $['Ronde'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                            'Medewerker': _p_change_context(
                                                                                $['Medewerker'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                    }
                                )]]
                            )]
                        ),
                        'Inkoop saldo': _p_change_context(
                            $['Inkoop saldo'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'Grootboekrekening': _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]]
                        ),
                        'Overige balans items': _p_change_context(
                            $['Overige balans items'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Beginsaldo': _p_change_context(
                                            $['Beginsaldo'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            }]
                                        ),
                                        'Grootboekrekening': _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                        'Memoriaal boekingen': _p_change_context(
                                            $['Memoriaal boekingen'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Bedrag': _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                        'Datum': _p_change_context(
                                                            $['Datum'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                        'Grootboekrekening': _p_change_context(
                                                            $['Grootboekrekening'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }]
                                                        ),
                                                        'Omschrijving': _p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }]
                                                        ),
                                                    }
                                                )]]
                                            )]
                                        ),
                                        'Nieuw': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Nee',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Jaar': _p_change_context(
                                                                                $['Jaar'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                            'Balans item': _p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                    }
                                )]]
                            )]
                        ),
                        'Resultaat grootboekrekeningen': _p_change_context(
                            $['Resultaat grootboekrekeningen'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                    }
                                )]]
                            )]
                        ),
                        'Salarisrondes': _p_change_context(
                            $['Salarisrondes'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                    }
                                )]]
                            )]
                        ),
                        'Startdatum boekjaar': _p_change_context(
                            $['Startdatum boekjaar'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize(
                                    $
                                ),
                            }]
                        ),
                        'Verkoop saldo': _p_change_context(
                            $['Verkoop saldo'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'Grootboekrekening': _p_change_context(
                                        $['Grootboekrekening'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]]
                        ),
                        'Verkopen': _p_change_context(
                            $['Verkopen'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Afhandeling': _p_change_context(
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
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Rekening courant':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Rekening courant',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Rekening courant': _p_change_context(
                                                                                $['Rekening courant'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                        'Betalingstermijn': _p_change_context(
                                            $['Betalingstermijn'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            }]
                                        ),
                                        'BTW-periode': _p_change_context(
                                            $['BTW-periode'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                        'Brondocument': _p_change_context(
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
                                                                            'Document': _p_change_context(
                                                                                $['Document'],
                                                                                ($) => Bestandsnaam(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }
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
                                        'Contracttype': _p_change_context(
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
                                                                            'Project': _p_change_context(
                                                                                $['Project'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                            'Offerte': _p_change_context(
                                                                                $['Offerte'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
                                                                    )]],
                                                                })
                                                            )
                                                        case 'Licentieovereenkomst':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'Licentieovereenkomst',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            'Overeenkomst': _p_change_context(
                                                                                $['Overeenkomst'],
                                                                                ($) => ['text', {
                                                                                    'delimiter': ['quote', null],
                                                                                    'value': $,
                                                                                }]
                                                                            ),
                                                                        }
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
                                        'Datum': _p_change_context(
                                            $['Datum'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': v_serialize_number.serialize(
                                                    $
                                                ),
                                            }]
                                        ),
                                        'Debiteur': _p_change_context(
                                            $['Debiteur'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                        'Regels': _p_change_context(
                                            $['Regels'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'BTW-regime': _p_change_context(
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
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Standaard':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Standaard',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'BTW-categorie': _p_change_context(
                                                                                                $['BTW-categorie'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Binnenland: heffing verlegd':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Binnenland: heffing verlegd',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                        }
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
                                                        'Bedrag exclusief BTW': _p_change_context(
                                                            $['Bedrag exclusief BTW'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                        'Contracttype': _p_change_context(
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
                                                                                            'Opbrengst': _p_change_context(
                                                                                                $['Opbrengst'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Los':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Los',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Licentieovereenkomst':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Licentieovereenkomst',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Periode': _p_change_context(
                                                                                                $['Periode'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
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
                                                        'Omschrijving': _p_change_context(
                                                            $['Omschrijving'],
                                                            ($) => ['text', {
                                                                'delimiter': ['quote', null],
                                                                'value': $,
                                                            }]
                                                        ),
                                                        'Type': _p_change_context(
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
                                                                                            'Grootboekrekening': _p_change_context(
                                                                                                $['Grootboekrekening'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Balans':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Balans',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Balans item': _p_change_context(
                                                                                                $['Balans item'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
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
                                                    }
                                                )]]
                                            )]
                                        ),
                                    }
                                )]]
                            )]
                        ),
                        'Verrekenposten': _p_change_context(
                            $['Verrekenposten'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Mutaties': _p_change_context(
                                            $['Mutaties'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Bedrag': _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                        'Afhandeling': _p_change_context(
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
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Jaar': _p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                            'Inkoop': _p_change_context(
                                                                                                $['Inkoop'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Informele rekening':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Informele rekening',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Informele rekening': _p_change_context(
                                                                                                $['Informele rekening'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'Verkoop':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'Verkoop',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Jaar': _p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                            'Verkoop': _p_change_context(
                                                                                                $['Verkoop'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'BTW-periode':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'BTW-periode',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'Jaar': _p_change_context(
                                                                                                $['Jaar'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                            'BTW-periode': _p_change_context(
                                                                                                $['BTW-periode'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
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
                                                    }
                                                )]]
                                            )]
                                        ),
                                    }
                                )]]
                            )]
                        ),
                    }
                )]]
            )]
        ),
        'Klanten': _p_change_context(
            $['Klanten'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'Licentieovereenkomsten': _p_change_context(
                            $['Licentieovereenkomsten'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Periodes': _p_change_context(
                                            $['Periodes'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Bedrag': _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => ['text', {
                                                                'delimiter': ['none', null],
                                                                'value': v_serialize_number.serialize(
                                                                    $
                                                                ),
                                                            }]
                                                        ),
                                                    }
                                                )]]
                                            )]
                                        ),
                                    }
                                )]]
                            )]
                        ),
                        'Projecten': _p_change_context(
                            $['Projecten'],
                            ($) => ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'Offertes': _p_change_context(
                                            $['Offertes'],
                                            ($) => ['dictionary', _p.dictionary.map(
                                                $,
                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'Opbrengsten': _p_change_context(
                                                            $['Opbrengsten'],
                                                            ($) => ['dictionary', _p.dictionary.map(
                                                                $,
                                                                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        'Type': _p_change_context(
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
                                                                                                            'Bedrag': _p_change_context(
                                                                                                                $['Bedrag'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_serialize_number.serialize(
                                                                                                                        $
                                                                                                                    ),
                                                                                                                }]
                                                                                                            ),
                                                                                                            'Betaaldatum': _p_change_context(
                                                                                                                $['Betaaldatum'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['none', null],
                                                                                                                    'value': v_serialize_number.serialize(
                                                                                                                        $
                                                                                                                    ),
                                                                                                                }]
                                                                                                            ),
                                                                                                        }
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
                                                                    }
                                                                )]]
                                                            )]
                                                        ),
                                                    }
                                                )]]
                                            )]
                                        ),
                                    }
                                )]]
                            )]
                        ),
                    }
                )]]
            )]
        ),
        'Leveranciers': _p_change_context(
            $['Leveranciers'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                    }
                )]]
            )]
        ),
        'Medewerkers': _p_change_context(
            $['Medewerkers'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                    }
                )]]
            )]
        ),
    }
)]]

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => ['text', {
    'delimiter': ['quote', null],
    'value': $,
}]
