
import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/signatures/unresolved/refiners/astn_parse_tree"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

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
                'Fiscaal': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Fiscaal',
                            'subdocument context': p_.literal.not_set(),
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
                            'subdocument context': p_.literal.not_set(),
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
                            'subdocument context': p_.literal.not_set(),
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
                            'subdocument context': p_.literal.not_set(),
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
                'Balans Hoofdcategorieen': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Balans Hoofdcategorieen',
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
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
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
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
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
                                                                    switch ($t) {
                                                                        case 'Ja':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                }),
                                                                            )
                                                                        case 'Nee':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
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
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
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
                                                                                    ($t): t_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                                                        switch ($t) {
                                                                                            case 'Activa':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
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
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
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
                                                                                    ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                                                        switch ($t) {
                                                                                            case 'Kosten':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                                                                    ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'Ja':
                                                                                                                                                return p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                            },
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
                                                                                                                                                                            ($) => ({
                                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                    $,
                                                                                                                                                                                    {
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                    },
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
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                            },
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
                                                                                                    }),
                                                                                                )
                                                                                            case 'Opbrengsten':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                        "Bank": null,
                                        "Informeel": null,
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
                                    'Bank': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Bank',
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                        {
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                                                                        'type': ['fractional decimal', {
                                                                                                                                            'digits': 2,
                                                                                                                                        }],
                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                        {
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'l dictionary': p_.from.dictionary($['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                                                                            ($t): t_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                                                                                                                                                                                switch ($t) {
                                                                                                                                                                                    case 'Project':
                                                                                                                                                                                        return p_change_context(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            ($) => ({
                                                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                    },
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
                                                                                                                                                                                                                            'type': ['fractional decimal', {
                                                                                                                                                                                                                                'digits': 2,
                                                                                                                                                                                                                            }],
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
                                                                                                                                                                                                                            'type': ['iso date', null],
                                                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': p_.literal.not_set(),
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': p_.literal.not_set(),
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
                                        "Grootboekrekening voor BTW afrondingen": null,
                                        "Salarisrondes": null,
                                        "BTW periodes": null,
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
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
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
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
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
                                                                                    ($t): t_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                                                                                        switch ($t) {
                                                                                            case 'Aangegeven':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                        'digits': 2,
                                                                                                                                    }],
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
                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                        'digits': 2,
                                                                                                                                    }],
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
                                                                                                                                    'type': ['iso date', null],
                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
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
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
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
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
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
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
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
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
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
                                                'subdocument context': p_.literal.not_set(),
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
                                                'type': ['fractional decimal', {
                                                    'digits': 2,
                                                }],
                                                'subdocument context': p_.literal.not_set(),
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                                                    'type': ['fractional decimal', {
                                                                                        'digits': 2,
                                                                                    }],
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
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
                                                                                    ($t): t_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
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
                                                                                                                        'type': ['fractional decimal', {
                                                                                                                            'digits': 2,
                                                                                                                        }],
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
                                                                                                                        'type': ['iso date', null],
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                                                    'type': ['fractional decimal', {
                                                                                        'digits': 2,
                                                                                    }],
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
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
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
                                                                                    ($t): t_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': p_.from.dictionary($['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                            'type': ['fractional decimal', {
                                'digits': 2,
                            }],
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
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
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
                            ($t): t_out.Overige_balans_item.Nieuw => {
                                switch ($t) {
                                    case 'Ja':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
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
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
        {
            'subdocument context': p_.literal.not_set(),
        },
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
        {
            'subdocument context': p_.literal.not_set(),
        },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                                    switch ($t) {
                                                                        case 'Mutaties':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                }),
                                                                            )
                                                                        case 'Rekening courant':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
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
                                                                ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
                                                                    switch ($t) {
                                                                        case 'Toegevoegd':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                'type': ['iso date', null],
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                                    ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                                                                                                        switch ($t) {
                                                                                                            case 'Bekend':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                                        'digits': 2,
                                                                                                                                                    }],
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
                                                                                                                                                    'type': ['fractional decimal', {
                                                                                                                                                        'digits': 2,
                                                                                                                                                    }],
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                    ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                                                        switch ($t) {
                                                                                                            case 'Balans':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
                                                                    switch ($t) {
                                                                        case 'Bonnetje':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                }),
                                                                            )
                                                                        case 'Loonheffing':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                                ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                                    switch ($t) {
                                                                        case 'Mutaties':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
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
                                                                ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
                                                                    switch ($t) {
                                                                        case 'Toegevoegd':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
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
                                                                ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
                                                                    switch ($t) {
                                                                        case 'Project':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
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
                                                                'type': ['iso date', null],
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                                                                                                        switch ($t) {
                                                                                                            case 'Intracommunautair':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                    'type': ['fractional decimal', {
                                                                                                        'digits': 2,
                                                                                                    }],
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
                                                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                                                                                                        switch ($t) {
                                                                                                            case 'Project':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                                                        switch ($t) {
                                                                                                            case 'Opbrengsten':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': p_.literal.not_set(),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                                    'type': ['fractional decimal', {
                                                                                                        'digits': 2,
                                                                                                    }],
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
                                                                                                    ($t): t_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling => {
                                                                                                        switch ($t) {
                                                                                                            case 'Resultaat':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                ($t): t_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling.l_state.Balans => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'Informele rekening':
                                                                                                                                            return p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
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
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': p_.literal.not_set(),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                        'Stam': p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Stam',
                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                    ($t): t_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_ => {
                                                                                                        switch ($t) {
                                                                                                            case 'Resultaat':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                                                ($t): t_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_.l_state.Balans => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'Informele rekening':
                                                                                                                                            return p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
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
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
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
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
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
                                                    'Stam': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': p_.literal.not_set(),
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
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': p_.from.dictionary($['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
                                                                            },
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
                                                                                                    'type': ['fractional decimal', {
                                                                                                        'digits': 2,
                                                                                                    }],
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
                                                                                                    'type': ['iso date', null],
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
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
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
        {
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': p_.literal.not_set(),
            },
        ),
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': p_.literal.not_set(),
                    },
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
                                            ($t): t_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
                                                switch ($t) {
                                                    case 'Ja':
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
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
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
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
                                            'type': ['iso date', null],
                                            'subdocument context': p_.literal.not_set(),
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
                                            'subdocument context': p_.literal.not_set(),
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
                                            'subdocument context': p_.literal.not_set(),
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
                                            'subdocument context': p_.literal.not_set(),
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
                                            'subdocument context': p_.literal.not_set(),
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
                                            'subdocument context': p_.literal.not_set(),
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
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                            ($t): t_out.Rekening_Mutatie.type_ => {
                                switch ($t) {
                                    case 'Inkoop':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['Inkoop', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['Verkoop', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['BTW-periode', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
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
        ($t): t_out.Eerste_boekjaar => {
            switch ($t) {
                case 'Ja':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
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
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
