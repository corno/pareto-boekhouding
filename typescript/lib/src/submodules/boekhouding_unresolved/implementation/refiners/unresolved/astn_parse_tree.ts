
import * as p_ from 'pareto-core/implementation/refiner'
import * as p_di from 'pareto-core/interface/schema'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../declarations/refiners/unresolved/astn_parse_tree.js"

import * as s_out from "../../../interface/schemas/unresolved.js"

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
                    "Fiscaal": null,
                    "Categorieen": null,
                    "Beheer": null,
                    "Jaren": null,
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
                'Fiscaal': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Fiscaal',
                        },
                    ),
                    ($) => Fiscaal(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'Categorieen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Categorieen',
                            
                        },
                    ),
                    ($) => Grootboek_Categorieen(
                        $,
                        ($) => abort(
                            $,
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
                    ($) => Beheer(
                        $,
                        ($) => abort(
                            $,
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
                    ($) => Jaren(
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

export const Fiscaal: t_signatures.Fiscaal = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Balans Hoofdcategorieen": null,
                    "Resultaat Hoofdcategorieen": null,
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
                'Balans Hoofdcategorieen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Balans Hoofdcategorieen',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                                ($t): s_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Passiva':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
                'Resultaat Hoofdcategorieen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Resultaat Hoofdcategorieen',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                                ($t): s_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Kosten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Opbrengsten':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Correctietypes vennootschapsbelasting": null,
                    "Balans": null,
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                }),
                            ),
                        }),
                    ),
                ),
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
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                                ($t): s_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Passiva':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
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
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                                ($t): s_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Kosten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Opbrengsten':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Beheer: t_signatures.Beheer = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "BTW-categorieen": null,
                    "Grootboekrekeningen": null,
                    "Rekeningen": null,
                    "Gebruikers": null,
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                                ($t): s_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
                                                                    switch ($t) {
                                                                        case 'Ja':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Ja', p_change_context(
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
                                                                                }),
                                                                            )
                                                                        case 'Nee':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                }),
                            ),
                        }),
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
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "Balans": null,
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
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': p_change_context(
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
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
                                                                                    ($t): s_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                                                        switch ($t) {
                                                                                            case 'Activa':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            case 'Passiva':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
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
                                                    }),
                                                ),
                                            }),
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
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': p_change_context(
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
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
                                                                                    ($t): s_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                                                        switch ($t) {
                                                                                            case 'Kosten':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Kosten', p_change_context(
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
                                                                                                                                    ($t): s_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'Ja':
                                                                                                                                                return p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        'l state': ['Ja', p_change_context(
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
                                                                                                                                                                            ($) => ({
                                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                    $,
                                                                                                                                                                                ),
                                                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                            }),
                                                                                                                                                                        ),
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'Nee':
                                                                                                                                                return p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        'l state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
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
                                                                                                    }),
                                                                                                )
                                                                                            case 'Opbrengsten':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
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
                                                    }),
                                                ),
                                            }),
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
                'Rekeningen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Rekeningen',
                            
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
                                        "Bank": null,
                                        "Informeel": null,
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
                                    'Bank': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Bank',
                                                
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    ),
                                    'Informeel': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Informeel',
                                                
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    ),
                                }
                            },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                }),
                            ),
                        }),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                    ),
                                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l entry': p_change_context(
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
                                                                                                                                        'type': ['fractional decimal', {
                                                                                                                                            'digits': 2,
                                                                                                                                        }],
                                                                                                                                        
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                    ),
                                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l entry': p_change_context(
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
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        ),
                                                                                                                                        'l dictionary': p_.from.dictionary($['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l entry': p_change_context(
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
                                                                                                                                                                            ($t): s_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                                                                                                                                                                                switch ($t) {
                                                                                                                                                                                    case 'Project':
                                                                                                                                                                                        return p_change_context(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            ($) => ({
                                                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                ),
                                                                                                                                                                                                'l state': ['Project', p_change_context(
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
                                                                                                                                                                                                                            'type': ['fractional decimal', {
                                                                                                                                                                                                                                'digits': 2,
                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                            
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
                                                                                                                                                                                                                            'type': ['iso date', null],
                                                                                                                                                                                                                            
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                ),
                                                                                                                                                                                                            }
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ),
                                                                                                                                                                                                )],
                                                                                                                                                                                            }),
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
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        }),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Balans": null,
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
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "Stam": null,
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
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
                                }),
                            ),
                        }),
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
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "Stam": null,
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
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
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Jaarbeheer: t_signatures.Jaarbeheer = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Resultaat": null,
                    "Balans": null,
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
                                        "Grootboekrekening voor BTW afrondingen": null,
                                        "Salarisrondes": null,
                                        "BTW periodes": null,
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
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': p_change_context(
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
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                }),
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
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': p_change_context(
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
                                                                                        }),
                                                                                    ),
                                                                                }),
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
                                                                                    ($t): s_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                                                                                        switch ($t) {
                                                                                            case 'Aangegeven':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Aangegeven', p_change_context(
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
                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                        'digits': 2,
                                                                                                                                    }],
                                                                                                                                    
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
                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                        'digits': 2,
                                                                                                                                    }],
                                                                                                                                    
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
                                                                                                                                    'type': ['iso date', null],
                                                                                                                                    
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            case 'Openstaand':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Openstaand', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
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
                                                    }),
                                                ),
                                            }),
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
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
                                        "Grootboekrekening voor nog aan te geven BTW": null,
                                        "Grootboekrekening voor resultaat dit jaar": null,
                                        "Grootboekrekening voor winstreserve": null,
                                        "Grootboekrekening voor Inkoop saldo": null,
                                        "Grootboekrekening voor Verkoop saldo": null,
                                        "Beginsaldo nog aan te geven BTW": null,
                                        "Beginsaldo winstreserve": null,
                                        "Bankrekeningen": null,
                                        "Informele rekeningen": null,
                                        "Overige balans items": null,
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
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
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
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
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
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                    'Grootboekrekening voor Inkoop saldo': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor Inkoop saldo',
                                                
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                    'Grootboekrekening voor Verkoop saldo': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor Verkoop saldo',
                                                
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
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
                                                'type': ['fractional decimal', {
                                                    'digits': 2,
                                                }],
                                                
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
                                                'type': ['fractional decimal', {
                                                    'digits': 2,
                                                }],
                                                
                                            },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': p_change_context(
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
                                                                                    'type': ['fractional decimal', {
                                                                                        'digits': 2,
                                                                                    }],
                                                                                    
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
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
                                                                                    ($t): s_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Nee', p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                        {
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
                                                                                                                            ($) => Verwijzing_naar_Bankrekening(
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
                                                                                                    }),
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
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': p_change_context(
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
                                                                                                                        'type': ['fractional decimal', {
                                                                                                                            'digits': 2,
                                                                                                                        }],
                                                                                                                        
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
                                                                                                                        'type': ['iso date', null],
                                                                                                                        
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
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': p_change_context(
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
                                                                                    'type': ['fractional decimal', {
                                                                                        'digits': 2,
                                                                                    }],
                                                                                    
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
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
                                                                                    ($t): s_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                        'l state': ['Nee', p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                        {
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
                                                                                                                            ($) => Verwijzing_naar_Informele_rekening(
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
                                                                                                    }),
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
                                                    }),
                                                ),
                                            }),
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': Overige_balans_item(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
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
)

export const Overige_balans_item: t_signatures.Overige_balans_item = ($, abort) => p_change_context(
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
                            'type': ['fractional decimal', {
                                'digits': 2,
                            }],
                            
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
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        ),
                        'l reference': v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    }),
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
                            ($t): s_out.Overige_balans_item.Nieuw => {
                                switch ($t) {
                                    case 'Ja':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'Nee':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['Nee', p_change_context(
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
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
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
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    ),
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            $,
        ),
    ),
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    ),
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            $,
        ),
    ),
})

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Inkopen": null,
                    "Verkopen": null,
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "Afhandeling": null,
                                                        "BTW-periode": null,
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
                                                                ($t): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                                    switch ($t) {
                                                                        case 'Mutaties':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Mutaties', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Nog te betalen':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Nog te betalen', p_change_context(
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
                                                                                }),
                                                                            )
                                                                        case 'Rekening courant':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Rekening courant', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            ),
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                        }),
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
                                                                ($t): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
                                                                    switch ($t) {
                                                                        case 'Toegevoegd':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Toegevoegd', p_change_context(
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
                                                                                }),
                                                                            )
                                                                        case 'Niet van toepassing':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Niet van toepassing', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Ontbreekt':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Ontbreekt', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                                'type': ['iso date', null],
                                                                
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                                    ($t): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                                                                                                        switch ($t) {
                                                                                                            case 'Bekend':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Bekend', p_change_context(
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
                                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                                        'digits': 2,
                                                                                                                                                    }],
                                                                                                                                                    
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
                                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                                        'digits': 2,
                                                                                                                                                    }],
                                                                                                                                                    
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
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
                                                                                                    ($t): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                                                        switch ($t) {
                                                                                                            case 'Balans':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Kosten':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Kosten', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
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
                                                                    }),
                                                                ),
                                                            }),
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
                                                                ($t): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
                                                                    switch ($t) {
                                                                        case 'Bonnetje':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Bonnetje', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Inkoop (met crediteur)':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Inkoop (met crediteur)', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
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
                                                                                }),
                                                                            )
                                                                        case 'Loonheffing':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Loonheffing', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Salaris':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Salaris', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                }),
                            ),
                        }),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
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
                                                        "Debiteur": null,
                                                        "Contracttype": null,
                                                        "Datum": null,
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
                                                                ($t): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                                    switch ($t) {
                                                                        case 'Mutaties':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Mutaties', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Rekening courant':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Rekening courant', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            ),
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                        }),
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
                                                                ($t): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
                                                                    switch ($t) {
                                                                        case 'Toegevoegd':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Toegevoegd', p_change_context(
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
                                                                                }),
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
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            ),
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                        }),
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
                                                                ($t): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
                                                                    switch ($t) {
                                                                        case 'Project':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Project', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'Licentieovereenkomst':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['Licentieovereenkomst', p_change_context(
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
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
                                                                'type': ['iso date', null],
                                                                
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                                    ($t): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                                                                                                        switch ($t) {
                                                                                                            case 'Intracommunautair':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Intracommunautair', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Standaard':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Standaard', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Binnenland: heffing verlegd':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Binnenland: heffing verlegd', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
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
                                                                                                    'type': ['fractional decimal', {
                                                                                                        'digits': 2,
                                                                                                    }],
                                                                                                    
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
                                                                                                    ($t): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                                                                                                        switch ($t) {
                                                                                                            case 'Project':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Project', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Los':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Los', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Licentieovereenkomst':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Licentieovereenkomst', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
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
                                                                                                    ($t): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                                                        switch ($t) {
                                                                                                            case 'Opbrengsten':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Opbrengsten', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Balans':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', p_change_context(
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        ),
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
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
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Mutaties: t_signatures.Mutaties = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Verrekenposten": null,
                    "Bankrekeningen": null,
                    "Overige Balans Items": null,
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "Stam": null,
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                                    'type': ['fractional decimal', {
                                                                                                        'digits': 2,
                                                                                                    }],
                                                                                                    
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
                                                                                                    ($t): s_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling => {
                                                                                                        switch ($t) {
                                                                                                            case 'Resultaat':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Resultaat', Rekening_Mutatie(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Balans':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => p_decide_text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): s_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling.l_state.Balans => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'Informele rekening':
                                                                                                                                            return p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['Informele rekening', p_change_context(
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
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                $,
                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                    $,
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                        }),
                                                                                                                                                                    ),
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
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
                                                                                                                        )],
                                                                                                                    }),
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
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                        "Mutatie Verwerkingen": null,
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'Mutatie Verwerkingen': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Mutatie Verwerkingen',
                                                                
                                                            },
                                                        ),
                                                        ($) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': p_.literal.dictionary(
                                                                                        {
                                                                                            "Stam": null,
                                                                                            "type": null,
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
                                                                                        'Stam': p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Stam',
                                                                                                    
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'type': p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'type',
                                                                                                    
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
                                                                                                    ($t): s_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_ => {
                                                                                                        switch ($t) {
                                                                                                            case 'Resultaat':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Resultaat', Rekening_Mutatie(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'Balans':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => p_decide_text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): s_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_.l_state.Balans => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'Informele rekening':
                                                                                                                                            return p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['Informele rekening', p_change_context(
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
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                $,
                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                    $,
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                        }),
                                                                                                                                                                    ),
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
                                                                                                                                            )
                                                                                                                                        case 'Verrekenpost':
                                                                                                                                            return p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['Verrekenpost', p_change_context(
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
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                $,
                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                    $,
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                        }),
                                                                                                                                                                    ),
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
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
                                                                                                                        )],
                                                                                                                    }),
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
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
                'Overige Balans Items': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Overige Balans Items',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                        "Memoriaal Boekingen": null,
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'Memoriaal Boekingen': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Memoriaal Boekingen',
                                                                
                                                            },
                                                        ),
                                                        ($) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l entry': p_change_context(
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
                                                                                                    'type': ['fractional decimal', {
                                                                                                        'digits': 2,
                                                                                                    }],
                                                                                                    
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
                                                                                                    'type': ['iso date', null],
                                                                                                    
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Jaren: t_signatures.Jaren = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': p_.literal.dictionary(
                                {
                                    "Afgesloten": null,
                                    "Startdatum boekjaar": null,
                                    "Grootboekrekeningen": null,
                                    "Eerste boekjaar": null,
                                    "Jaarbeheer": null,
                                    "Handelstransacties": null,
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
                                            ($t): s_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
                                                switch ($t) {
                                                    case 'Ja':
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Nee':
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
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
                                            'type': ['iso date', null],
                                            
                                        },
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
                                    ($) => Grootboekrekeningen(
                                        $,
                                        ($) => abort(
                                            $,
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
                                    ($) => Eerste_boekjaar(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'Jaarbeheer': p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Jaarbeheer',
                                            
                                        },
                                    ),
                                    ($) => Jaarbeheer(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'Handelstransacties': p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Handelstransacties',
                                            
                                        },
                                    ),
                                    ($) => Handelstransacties(
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
                                    ($) => Mutaties(
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
            }),
        ),
    }),
)

export const Rekening_Mutatie: t_signatures.Rekening_Mutatie = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "Jaar": null,
                    "type": null,
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
                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['optional'],
                    ).map(
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        }),
                    ),
                ),
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            
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
                            ($t): s_out.Rekening_Mutatie.type_ => {
                                switch ($t) {
                                    case 'Inkoop':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['Inkoop', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'Verkoop':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['Verkoop', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'BTW-periode':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['BTW-periode', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
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
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Eerste_boekjaar => {
            switch ($t) {
                case 'Ja':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'Nee':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['Nee', p_change_context(
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
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
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
)
