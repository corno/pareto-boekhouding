
import * as p_ from 'pareto-core/implementation/refiner'
import * as p_di from 'pareto-core/interface/schema'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'



import * as t_signatures from "../../../declarations/refiners/foo/astn_parse_tree.js"

import * as s_out from "../../../interface/schemas/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/implementation/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/implementation/transformers/parse_tree/start_token_range"

export const Root: t_signatures.Root = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Bankrekeningen": null,
                    "Beheer": null,
                    "Informele rekeningen": null,
                    "Jaren": null,
                    "Klanten": null,
                    "Leveranciers": null,
                    "Medewerkers": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'Bankrekeningen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Bankrekeningen',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary($['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {},
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return p_.literal.nothing()
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'Beheer': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Beheer',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "Balans": null,
                                        "BTW-categorieen": null,
                                        "Gebruikers": null,
                                        "Huidige datum": null,
                                        "Resultaat": null,
                                    },
                                ),
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )
                                return {
                                    'Balans': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Balans',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'expected properties': p_.literal.dictionary(
                                                        {
                                                            "Grootboekrekeningen": null,
                                                            "Hoofdcategorieen": null,
                                                            "Hoofdcategorieen fiscus": null,
                                                        },
                                                    ),
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_variables(
                                                () => {
                                                    
                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                        $['value'],
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    )
                                                    return {
                                                        'Grootboekrekeningen': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Grootboekrekeningen',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Hoofdcategorie": null,
                                                                                        "Subcategorie": null,
                                                                                        "Zijde": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Hoofdcategorie': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Hoofdcategorie',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Subcategorie': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Subcategorie',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Zijde': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Zijde',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => p_decide_text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): s_out.Root.Beheer.Balans.Grootboekrekeningen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Activa':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Activa', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Passiva':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Passiva', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                        'Hoofdcategorieen': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Zijde': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Zijde',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => p_decide_text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): s_out.Root.Beheer.Balans.Hoofdcategorieen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Activa':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Activa', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Passiva':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Passiva', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Subcategorieen': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Subcategorieen',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => p_.from.dictionary($['entries'],
                                                                                            ).map(
                                                                                                ($, id) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "Hoofdcategorie fiscus": null,
                                                                                                                    "Subcategorie fiscus": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            )
                                                                                                            return {
                                                                                                                'Hoofdcategorie fiscus': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'Hoofdcategorie fiscus',
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'Subcategorie fiscus': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'Subcategorie fiscus',
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                        'Hoofdcategorieen fiscus': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen fiscus',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Zijde': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Zijde',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => p_decide_text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): s_out.Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Activa':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Activa', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Passiva':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Passiva', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Subcategorieen': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Subcategorieen',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => p_.from.dictionary($['entries'],
                                                                                            ).map(
                                                                                                ($, id) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {},
                                                                                                            ),
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            )
                                                                                                            return p_.literal.nothing()
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                    'BTW-categorieen': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'BTW-categorieen',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.dictionary($['entries'],
                                            ).map(
                                                ($, id) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "BTW-heffing": null,
                                                                },
                                                            ),
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'BTW-heffing': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'BTW-heffing',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        ($) => p_decide_text(
                                                                            $['option']['token']['value'],
                                                                            ($t): s_out.Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                                                                switch ($t) {
                                                                                    case 'Ja':
                                                                                        return p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Ja', p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                            {
                                                                                                                "BTW-promillage": null,
                                                                                                            },
                                                                                                        ),
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        )
                                                                                                        return {
                                                                                                            'BTW-promillage': p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'BTW-promillage',
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            )],
                                                                                        )
                                                                                    case 'Nee':
                                                                                        return p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Nee', p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                            {},
                                                                                                        ),
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        )
                                                                                                        return p_.literal.nothing()
                                                                                                    },
                                                                                                ),
                                                                                            )],
                                                                                        )
                                                                                    default:
                                                                                        return abort(
                                                                                            ['liana', {
                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    'Gebruikers': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Gebruikers',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.dictionary($['entries'],
                                            ).map(
                                                ($, id) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "Volledige naam": null,
                                                                    "Wachtwoord": null,
                                                                },
                                                            ),
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'Volledige naam': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'Volledige naam',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'Wachtwoord': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'Wachtwoord',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    'Huidige datum': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Huidige datum',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['decimal', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'Resultaat': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Resultaat',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'expected properties': p_.literal.dictionary(
                                                        {
                                                            "Correctietypes vennootschapsbelasting": null,
                                                            "Grootboekrekeningen": null,
                                                            "Hoofdcategorieen": null,
                                                            "Hoofdcategorieen fiscus": null,
                                                        },
                                                    ),
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_variables(
                                                () => {
                                                    
                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                        $['value'],
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    )
                                                    return {
                                                        'Correctietypes vennootschapsbelasting': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Correctietypes vennootschapsbelasting',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Te corrigeren promillage": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Te corrigeren promillage': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Te corrigeren promillage',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'type': ['decimal', null],
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                        'Grootboekrekeningen': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Grootboekrekeningen',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Hoofdcategorie": null,
                                                                                        "Subcategorie": null,
                                                                                        "Zijde": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Hoofdcategorie': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Hoofdcategorie',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Subcategorie': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Subcategorie',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Zijde': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Zijde',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => p_decide_text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): s_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Kosten':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Kosten', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {
                                                                                                                                    "Correctie op vennootschapsbelasting": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'Correctie op vennootschapsbelasting': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'Correctie op vennootschapsbelasting',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): s_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'Ja':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ['Ja', p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                            {
                                                                                                                                                                                "Correctietype": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'Correctietype': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'Correctietype',
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                        }
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    case 'Nee':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ['Nee', p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                            {},
                                                                                                                                                                        ),
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return p_.literal.nothing()
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Opbrengsten':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Opbrengsten', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                        'Hoofdcategorieen': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Zijde': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Zijde',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => p_decide_text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): s_out.Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Kosten':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Kosten', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Opbrengsten':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Opbrengsten', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Subcategorieen': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Subcategorieen',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => p_.from.dictionary($['entries'],
                                                                                            ).map(
                                                                                                ($, id) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "Hoofdcategorie fiscus": null,
                                                                                                                    "Subcategorie fiscus": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            )
                                                                                                            return {
                                                                                                                'Hoofdcategorie fiscus': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'Hoofdcategorie fiscus',
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'Subcategorie fiscus': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'Subcategorie fiscus',
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                        'Hoofdcategorieen fiscus': p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen fiscus',
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'expected properties': p_.literal.dictionary(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                )
                                                                                return {
                                                                                    'Zijde': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Zijde',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => p_decide_text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): s_out.Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Kosten':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Kosten', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Opbrengsten':
                                                                                                            return p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Opbrengsten', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return p_.literal.nothing()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Subcategorieen': p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'id': 'Subcategorieen',
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => p_.from.dictionary($['entries'],
                                                                                            ).map(
                                                                                                ($, id) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {},
                                                                                                            ),
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            )
                                                                                                            return p_.literal.nothing()
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
                'Informele rekeningen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Informele rekeningen',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary($['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {},
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return p_.literal.nothing()
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'Jaren': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Jaren',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary($['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "Afgesloten": null,
                                                "Balans grootboekrekeningen": null,
                                                "Bankrekeningen": null,
                                                "Beginsaldo nog aan te geven BTW": null,
                                                "Beginsaldo winstreserve": null,
                                                "BTW periode saldo": null,
                                                "BTW periodes": null,
                                                "Eerste boekjaar": null,
                                                "Grootboekrekening voor BTW afrondingen": null,
                                                "Grootboekrekening voor nog aan te geven BTW": null,
                                                "Grootboekrekening voor resultaat dit jaar": null,
                                                "Grootboekrekening voor winstreserve": null,
                                                "Informele rekeningen": null,
                                                "Inkopen": null,
                                                "Inkoop saldo": null,
                                                "Overige balans items": null,
                                                "Resultaat grootboekrekeningen": null,
                                                "Salarisrondes": null,
                                                "Startdatum boekjaar": null,
                                                "Verkoop saldo": null,
                                                "Verkopen": null,
                                                "Verrekenposten": null,
                                            },
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'Afgesloten': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Afgesloten',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Root.Jaren.D.Afgesloten => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': p_.literal.dictionary(
                                                                                        {},
                                                                                    ),
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return p_.literal.nothing()
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': p_.literal.dictionary(
                                                                                        {},
                                                                                    ),
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return p_.literal.nothing()
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'Balans grootboekrekeningen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Balans grootboekrekeningen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Type": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Type': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Type',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Balans_grootboekrekeningen.D.Type => {
                                                                                        switch ($t) {
                                                                                            case 'Bankrekening':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Bankrekening', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Overig':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Overig', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Informele rekening':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Informele rekening', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Bankrekeningen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Bankrekeningen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Mutaties": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Beginsaldo': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Beginsaldo',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Grootboekrekening': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Grootboekrekening',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Mutaties': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Mutaties',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Datum": null,
                                                                                                        "Omschrijving": null,
                                                                                                        "Status": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Bedrag': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bedrag',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Datum': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Datum',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Omschrijving': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Omschrijving',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Status': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Status',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Nog te verwerken':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Nog te verwerken', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return p_.literal.nothing()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Verwerkt':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Verwerkt', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Afhandeling": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Afhandeling': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Afhandeling',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                        ),
                                                                                                                                                        ($) => p_decide_text(
                                                                                                                                                            $['option']['token']['value'],
                                                                                                                                                            ($t): s_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.Verwerkt.Afhandeling => {
                                                                                                                                                                switch ($t) {
                                                                                                                                                                    case 'Inkoop':
                                                                                                                                                                        return p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Inkoop', p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "Inkoop": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                            },
                                                                                                                                                                                        )
                                                                                                                                                                                        return {
                                                                                                                                                                                            'Jaar': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Jaar',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                            'Inkoop': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Inkoop',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                        }
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            )],
                                                                                                                                                                        )
                                                                                                                                                                    case 'Verrekenpost':
                                                                                                                                                                        return p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Verrekenpost', p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Verrekenpost": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                            },
                                                                                                                                                                                        )
                                                                                                                                                                                        return {
                                                                                                                                                                                            'Verrekenpost': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Verrekenpost',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                        }
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            )],
                                                                                                                                                                        )
                                                                                                                                                                    case 'BTW-periode':
                                                                                                                                                                        return p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['BTW-periode', p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "BTW-periode": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                            },
                                                                                                                                                                                        )
                                                                                                                                                                                        return {
                                                                                                                                                                                            'Jaar': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Jaar',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                            'BTW-periode': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'BTW-periode',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                        }
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            )],
                                                                                                                                                                        )
                                                                                                                                                                    case 'Verkoop':
                                                                                                                                                                        return p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Verkoop', p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "Verkoop": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                            },
                                                                                                                                                                                        )
                                                                                                                                                                                        return {
                                                                                                                                                                                            'Jaar': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Jaar',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                            'Verkoop': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Verkoop',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                        }
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            )],
                                                                                                                                                                        )
                                                                                                                                                                    case 'Informele rekening':
                                                                                                                                                                        return p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Informele rekening', p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Informele rekening": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                            },
                                                                                                                                                                                        )
                                                                                                                                                                                        return {
                                                                                                                                                                                            'Informele rekening': p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Informele rekening',
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                        }
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            )],
                                                                                                                                                                        )
                                                                                                                                                                    default:
                                                                                                                                                                        return abort(
                                                                                                                                                                            ['liana', {
                                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                                    $['value'],
                                                                                                                                                                                    {
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            }],
                                                                                                                                                                        )
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Nieuw': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Nieuw',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Bankrekeningen.D.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ja', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nee', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Jaar": null,
                                                                                                                        "Rekening": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Jaar': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Jaar',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Rekening': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Rekening',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Beginsaldo nog aan te geven BTW': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Beginsaldo nog aan te geven BTW',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                            'Beginsaldo winstreserve': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Beginsaldo winstreserve',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                            'BTW periode saldo': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'BTW periode saldo',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "Grootboekrekening": null,
                                                                },
                                                            ),
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'Grootboekrekening': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'Grootboekrekening',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'BTW periodes': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'BTW periodes',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "1. BTW-categorieen": null,
                                                                            "Documenten": null,
                                                                            "Omschrijving": null,
                                                                            "Status": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        '1. BTW-categorieen': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': '1. BTW-categorieen',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {},
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return p_.literal.nothing()
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Documenten': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Documenten',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Bestand": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Bestand': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bestand',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Bestandsnaam(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Omschrijving': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Omschrijving',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Status': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Status',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.BTW_periodes.D.Status => {
                                                                                        switch ($t) {
                                                                                            case 'Aangegeven':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Aangegeven', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Afronding": null,
                                                                                                                        "Bedrag": null,
                                                                                                                        "Datum": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Afronding': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Afronding',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Bedrag': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Bedrag',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Datum': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Datum',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Openstaand':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Openstaand', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Eerste boekjaar': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Eerste boekjaar',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Root.Jaren.D.Eerste_boekjaar => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': p_.literal.dictionary(
                                                                                        {},
                                                                                    ),
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return p_.literal.nothing()
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': p_.literal.dictionary(
                                                                                        {
                                                                                            "Vorig boekjaar": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Vorig boekjaar': p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Vorig boekjaar',
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening voor BTW afrondingen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Grootboekrekening voor BTW afrondingen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening voor nog aan te geven BTW': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Grootboekrekening voor nog aan te geven BTW',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening voor resultaat dit jaar': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Grootboekrekening voor resultaat dit jaar',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening voor winstreserve': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Grootboekrekening voor winstreserve',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'Informele rekeningen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Informele rekeningen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Beginsaldo': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Beginsaldo',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Grootboekrekening': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Grootboekrekening',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Nieuw': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Nieuw',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Informele_rekeningen.D.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ja', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nee', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Jaar": null,
                                                                                                                        "Rekening": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Jaar': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Jaar',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Rekening': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Rekening',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Inkopen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Inkopen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Afhandeling": null,
                                                                            "BTW-regime": null,
                                                                            "Brondocument": null,
                                                                            "Datum": null,
                                                                            "Regels": null,
                                                                            "Type": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Afhandeling': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Afhandeling',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Inkopen.D.Afhandeling => {
                                                                                        switch ($t) {
                                                                                            case 'Nog te betalen':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nog te betalen', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Betalingstermijn": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Betalingstermijn': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Betalingstermijn',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Mutaties':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Mutaties', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Rekening courant':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Rekening courant', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Rekening courant": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Rekening courant': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Rekening courant',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'BTW-regime': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'BTW-regime',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Inkopen.D.BTW$mi_regime => {
                                                                                        switch ($t) {
                                                                                            case 'Binnenland: heffing verlegd':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Binnenland: heffing verlegd', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'BTW-periode': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'BTW-periode',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Geen BTW van toepassing':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Geen BTW van toepassing', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'BTW-periode': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'BTW-periode',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Import van buiten de EU':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Import van buiten de EU', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'BTW-periode': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'BTW-periode',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Intracommunautair':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Intracommunautair', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'BTW-periode': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'BTW-periode',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Standaard':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Standaard', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'BTW-periode': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'BTW-periode',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Brondocument': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Brondocument',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Inkopen.D.Brondocument => {
                                                                                        switch ($t) {
                                                                                            case 'Toegevoegd':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Toegevoegd', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Document": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Document': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Document',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => Bestandsnaam(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Niet van toepassing':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Niet van toepassing', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Ontbreekt':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ontbreekt', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nog toevoegen':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nog toevoegen', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Datum': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Datum',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Regels': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Regels',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Omschrijving": null,
                                                                                                        "Type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Bedrag': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bedrag',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Inkopen.D.Regels.D.Bedrag => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Bekend':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Bekend', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "BTW-bedrag": null,
                                                                                                                                                    "Bedrag inclusief geheven BTW": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'BTW-bedrag': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'BTW-bedrag',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'Bedrag inclusief geheven BTW': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Bedrag inclusief geheven BTW',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Omschrijving': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Omschrijving',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Inkopen.D.Regels.D.Type => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Balans':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Balans', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Balans item": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Balans item': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Balans item',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Kosten':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Kosten', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Grootboekrekening": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Grootboekrekening': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Grootboekrekening',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Type': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Type',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Inkopen.D.Type => {
                                                                                        switch ($t) {
                                                                                            case 'Bonnetje':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Bonnetje', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Inkoop (met crediteur)':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Inkoop (met crediteur)', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Crediteur": null,
                                                                                                                        "Factuurnummer": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Crediteur': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Crediteur',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Factuurnummer': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Factuurnummer',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Loonheffing':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Loonheffing', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Ronde": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Ronde': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Ronde',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Salaris':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Salaris', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Ronde": null,
                                                                                                                        "Medewerker": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Ronde': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Ronde',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Medewerker': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Medewerker',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Inkoop saldo': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Inkoop saldo',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "Grootboekrekening": null,
                                                                },
                                                            ),
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'Grootboekrekening': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'Grootboekrekening',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'Overige balans items': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Overige balans items',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Memoriaal boekingen": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Beginsaldo': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Beginsaldo',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Grootboekrekening': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Grootboekrekening',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Memoriaal boekingen': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Memoriaal boekingen',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Datum": null,
                                                                                                        "Grootboekrekening": null,
                                                                                                        "Omschrijving": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Bedrag': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bedrag',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Datum': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Datum',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Grootboekrekening': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Grootboekrekening',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Omschrijving': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Omschrijving',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Nieuw': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Nieuw',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Overige_balans_items.D.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ja', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nee', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Jaar": null,
                                                                                                                        "Balans item": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Jaar': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Jaar',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Balans item': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Balans item',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Resultaat grootboekrekeningen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Resultaat grootboekrekeningen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {},
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return p_.literal.nothing()
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Salarisrondes': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Salarisrondes',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {},
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return p_.literal.nothing()
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Startdatum boekjaar': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Startdatum boekjaar',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                            'Verkoop saldo': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Verkoop saldo',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "Grootboekrekening": null,
                                                                },
                                                            ),
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'Grootboekrekening': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'Grootboekrekening',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'Verkopen': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Verkopen',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Afhandeling": null,
                                                                            "Betalingstermijn": null,
                                                                            "BTW-periode": null,
                                                                            "Brondocument": null,
                                                                            "Contracttype": null,
                                                                            "Datum": null,
                                                                            "Debiteur": null,
                                                                            "Regels": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Afhandeling': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Afhandeling',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Verkopen.D.Afhandeling => {
                                                                                        switch ($t) {
                                                                                            case 'Mutaties':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Mutaties', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return p_.literal.nothing()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Rekening courant':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Rekening courant', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Rekening courant": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Rekening courant': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Rekening courant',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Betalingstermijn': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Betalingstermijn',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'BTW-periode': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'BTW-periode',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Brondocument': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Brondocument',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Verkopen.D.Brondocument => {
                                                                                        switch ($t) {
                                                                                            case 'Toegevoegd':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Toegevoegd', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Document": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Document': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Document',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => Bestandsnaam(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Contracttype': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Contracttype',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => p_decide_text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): s_out.Root.Jaren.D.Verkopen.D.Contracttype => {
                                                                                        switch ($t) {
                                                                                            case 'Project':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Project', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Project": null,
                                                                                                                        "Offerte": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Project': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Project',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'Offerte': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Offerte',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Licentieovereenkomst':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Licentieovereenkomst', p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Overeenkomst": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )
                                                                                                                return {
                                                                                                                    'Overeenkomst': p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'id': 'Overeenkomst',
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['liana', {
                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Datum': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Datum',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Debiteur': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Debiteur',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Regels': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Regels',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "BTW-regime": null,
                                                                                                        "Bedrag exclusief BTW": null,
                                                                                                        "Contracttype": null,
                                                                                                        "Omschrijving": null,
                                                                                                        "Type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'BTW-regime': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'BTW-regime',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Intracommunautair':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Intracommunautair', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return p_.literal.nothing()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Standaard':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Standaard', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "BTW-categorie": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'BTW-categorie': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'BTW-categorie',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Binnenland: heffing verlegd':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Binnenland: heffing verlegd', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return p_.literal.nothing()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Bedrag exclusief BTW': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bedrag exclusief BTW',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Contracttype': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Contracttype',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Verkopen.D.Regels.D.Contracttype => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Project':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Project', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Opbrengst": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Opbrengst': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Opbrengst',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Los':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Los', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return p_.literal.nothing()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Licentieovereenkomst':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Licentieovereenkomst', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Periode": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Periode': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Periode',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Omschrijving': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Omschrijving',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Verkopen.D.Regels.D.Type => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Opbrengsten':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Opbrengsten', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Grootboekrekening": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Grootboekrekening': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Grootboekrekening',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Balans':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Balans', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Balans item": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Balans item': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Balans item',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Verrekenposten': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Verrekenposten',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Mutaties": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Mutaties': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Mutaties',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Afhandeling": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Bedrag': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bedrag',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'Afhandeling': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Afhandeling',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): s_out.Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Inkoop':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Inkoop', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "Inkoop": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Jaar': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Jaar',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'Inkoop': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Inkoop',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Informele rekening':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Informele rekening', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Informele rekening": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Informele rekening': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Informele rekening',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Verkoop':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Verkoop', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "Verkoop": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Jaar': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Jaar',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'Verkoop': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Verkoop',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'BTW-periode':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['BTW-periode', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "BTW-periode": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return {
                                                                                                                                                'Jaar': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Jaar',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'BTW-periode': p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'BTW-periode',
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'Klanten': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Klanten',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary($['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "Licentieovereenkomsten": null,
                                                "Projecten": null,
                                            },
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'Licentieovereenkomsten': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Licentieovereenkomsten',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Periodes": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Periodes': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Periodes',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Bedrag': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Bedrag',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'Projecten': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Projecten',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.dictionary($['entries'],
                                                    ).map(
                                                        ($, id) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "Offertes": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Offertes': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Offertes',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_.from.dictionary($['entries'],
                                                                                ).map(
                                                                                    ($, id) => p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "Opbrengsten": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Opbrengsten': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Opbrengsten',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => p_.from.dictionary($['entries'],
                                                                                                            ).map(
                                                                                                                ($, id) => p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {
                                                                                                                                    "Type": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'Type': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'Type',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): s_out.Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'Project':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ['Project', p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                            {
                                                                                                                                                                                "Bedrag": null,
                                                                                                                                                                                "Betaaldatum": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'Bedrag': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'Bedrag',
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                            'Betaaldatum': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'Betaaldatum',
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                        }
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            )],
                                                                                                                                                        )
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        },
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'Leveranciers': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Leveranciers',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary($['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {},
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return p_.literal.nothing()
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'Medewerkers': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Medewerkers',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary($['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {},
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return p_.literal.nothing()
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Bestandsnaam: t_signatures.Bestandsnaam = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "stem": null,
                    "extension": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'stem': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'stem',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'extension': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'extension',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)
