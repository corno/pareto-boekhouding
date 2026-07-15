
import * as p_ from 'pareto-core/implementation/refiner'
import * as p_di from 'pareto-core/interface/schema'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'



import * as t_signatures from "../../../declarations/refiners/unconstrained/astn_parse_tree.js"

import * as s_out from "../../../interface/schemas/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/_implementation/refiners/unmarshalled_value/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/_implementation/transformers/parse_tree/start_token_range"

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
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
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
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
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
                                
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
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
                                                    
                                                },
                                            ),
                                            ($) => p_variables(
                                                () => {
                                                    
                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                        $['value'],
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
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
                                                                                                            
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
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
                                                                                                            
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
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
                                                
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
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
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
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
                                                                                                        
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
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
                                                                                                                        
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                        
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
                                                                                                        
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
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
                                                
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
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
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
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
                                                
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['decimal', null],
                                                
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
                                                    
                                                },
                                            ),
                                            ($) => p_variables(
                                                () => {
                                                    
                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                        $['value'],
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'type': ['decimal', null],
                                                                                                
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
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
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
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
                                                                                                            
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
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
                                                                                                            
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
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
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
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
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
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
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
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
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        
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
                                                        
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        
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
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                                
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                
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
                                                                                                                                
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                
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
                                                                                                                                
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                                
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                                            
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            
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
                                                                                                                                                            
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        
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
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
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
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
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
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                
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
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
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
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                                                    
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
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
                                                                                                
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
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
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        
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
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        
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
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
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
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
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
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
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
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
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
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
