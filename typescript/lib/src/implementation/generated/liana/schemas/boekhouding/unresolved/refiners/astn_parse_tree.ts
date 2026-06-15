
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import _p_variables from 'pareto-core/dist/implementation/specials/variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/signatures/unresolved/refiners/astn_parse_tree"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Root: t_signatures.Root = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Fiscaal": null,
                    "Categorieen": null,
                    "Beheer": null,
                    "Jaren": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Fiscaal': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Fiscaal',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Fiscaal(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'Categorieen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Categorieen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Grootboek_Categorieen(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'Beheer': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Beheer',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Beheer(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'Jaren': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Jaren',
                            'subdocument context': _p.literal.not_set(),
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

export const Fiscaal: t_signatures.Fiscaal = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Balans Hoofdcategorieen": null,
                    "Resultaat Hoofdcategorieen": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Balans Hoofdcategorieen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Balans Hoofdcategorieen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Zijde": null,
                                                        "Subcategorieen": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Zijde': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Zijde',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Subcategorieen': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Subcategorieen',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
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
                'Resultaat Hoofdcategorieen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Resultaat Hoofdcategorieen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Zijde": null,
                                                        "Subcategorieen": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Zijde': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Zijde',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Subcategorieen': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Subcategorieen',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
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

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Correctietypes vennootschapsbelasting": null,
                    "Balans": null,
                    "Resultaat": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Correctietypes vennootschapsbelasting': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Correctietypes vennootschapsbelasting',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Te corrigeren promillage": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Te corrigeren promillage': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Te corrigeren promillage',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['decimal', null],
                                                                'subdocument context': _p.literal.not_set(),
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
                'Balans': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Balans',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Zijde": null,
                                                        "Subcategorieen": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Zijde': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Zijde',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Subcategorieen': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Subcategorieen',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Hoofdcategorie fiscus": null,
                                                                                            "Subcategorie fiscus": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Hoofdcategorie fiscus': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Hoofdcategorie fiscus',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                        'Subcategorie fiscus': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Subcategorie fiscus',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                'Resultaat': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Resultaat',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Zijde": null,
                                                        "Subcategorieen": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Zijde': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Zijde',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Subcategorieen': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Subcategorieen',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Hoofdcategorie fiscus": null,
                                                                                            "Subcategorie fiscus": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Hoofdcategorie fiscus': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Hoofdcategorie fiscus',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                        'Subcategorie fiscus': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Subcategorie fiscus',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
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

export const Beheer: t_signatures.Beheer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
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
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'BTW-categorieen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'BTW-categorieen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "BTW-heffing": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'BTW-heffing': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'BTW-heffing',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
                                                                    switch ($t) {
                                                                        case 'Ja':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Ja', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "BTW-promillage": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'BTW-promillage': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'BTW-promillage',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
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
                'Grootboekrekeningen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Grootboekrekeningen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.literal.dictionary(
                                    {
                                        "Balans": null,
                                        "Resultaat": null,
                                    },
                                ),
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                )
                                return {
                                    'Balans': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Balans',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l entry': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "Hoofdcategorie": null,
                                                                            "Subcategorie": null,
                                                                            "Zijde": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Hoofdcategorie': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Hoofdcategorie',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Subcategorie': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Subcategorie',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Zijde': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Zijde',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): t_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                                                        switch ($t) {
                                                                                            case 'Activa':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                    'Resultaat': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Resultaat',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l entry': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "Hoofdcategorie": null,
                                                                            "Subcategorie": null,
                                                                            "Zijde": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Hoofdcategorie': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Hoofdcategorie',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Subcategorie': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Subcategorie',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Zijde': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Zijde',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                                                        switch ($t) {
                                                                                            case 'Kosten':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l state': ['Kosten', _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                        {
                                                                                                                            "Correctie op vennootschapsbelasting": null,
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p_variables(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                        },
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'Correctie op vennootschapsbelasting': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'Correctie op vennootschapsbelasting',
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['token']['value'],
                                                                                                                                    ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'Ja':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        'l state': ['Ja', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                                                        {
                                                                                                                                                                            "Correctietype": null,
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => _p_variables(
                                                                                                                                                                () => {
                                                                                                                                                                    
                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                        $['value'],
                                                                                                                                                                        {
                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    )
                                                                                                                                                                    return {
                                                                                                                                                                        'Correctietype': _p_change_context(
                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                $,
                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                    $,
                                                                                                                                                                                ),
                                                                                                                                                                                {
                                                                                                                                                                                    'id': 'Correctietype',
                                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            ($) => ({
                                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                    $,
                                                                                                                                                                                    {
                                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                'Rekeningen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Rekeningen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.literal.dictionary(
                                    {
                                        "Bank": null,
                                        "Informeel": null,
                                    },
                                ),
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                )
                                return {
                                    'Bank': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Bank',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
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
                                    'Informeel': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Informeel',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
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
                'Gebruikers': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Gebruikers',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Volledige naam": null,
                                                        "Wachtwoord": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Volledige naam': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Volledige naam',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'Wachtwoord': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Wachtwoord',
                                                                'subdocument context': _p.literal.not_set(),
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
                'Klanten': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Klanten',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Licentieovereenkomsten": null,
                                                        "Projecten": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Licentieovereenkomsten': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Licentieovereenkomsten',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Periodes": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Periodes': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Periodes',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                                        $['entries'],
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            'l entry': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Bedrag": null,
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => _p_variables(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'Bedrag': _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'Bedrag',
                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                    'Projecten': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Projecten',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Offertes": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Offertes': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Offertes',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                                        $['entries'],
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            'l entry': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                                            {
                                                                                                                                "Opbrengsten": null,
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => _p_variables(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'Opbrengsten': _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'id': 'Opbrengsten',
                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                            $['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                'l entry': _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                                {
                                                                                                                                                                    "Type": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                                {
                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                                },
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'Type': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'Type',
                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => _p.decide.text(
                                                                                                                                                                            $['option']['token']['value'],
                                                                                                                                                                            ($t): t_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                                                                                                                                                                                switch ($t) {
                                                                                                                                                                                    case 'Project':
                                                                                                                                                                                        return _p_change_context(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            ($) => ({
                                                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                                                                    },
                                                                                                                                                                                                ),
                                                                                                                                                                                                'l state': ['Project', _p_change_context(
                                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                            $,
                                                                                                                                                                                                        ),
                                                                                                                                                                                                        {
                                                                                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    "Bedrag": null,
                                                                                                                                                                                                                    "Betaaldatum": null,
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                                                        () => {
                                                                                                                                                                                                            
                                                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                $['value'],
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                                                                                },
                                                                                                                                                                                                            )
                                                                                                                                                                                                            return {
                                                                                                                                                                                                                'Bedrag': _p_change_context(
                                                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                                            $,
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            'id': 'Bedrag',
                                                                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                'Betaaldatum': _p_change_context(
                                                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                                            $,
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            'id': 'Betaaldatum',
                                                                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                                            $,
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            'type': ['iso date', null],
                                                                                                                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                'Leveranciers': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Leveranciers',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
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
                'Medewerkers': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Medewerkers',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
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

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Balans": null,
                    "Resultaat": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Balans': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Balans',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Stam': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': _p.literal.not_set(),
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
                'Resultaat': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Resultaat',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Stam': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': _p.literal.not_set(),
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

export const Jaarbeheer: t_signatures.Jaarbeheer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Resultaat": null,
                    "Balans": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Resultaat': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Resultaat',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.literal.dictionary(
                                    {
                                        "Grootboekrekening voor BTW afrondingen": null,
                                        "Salarisrondes": null,
                                        "BTW periodes": null,
                                    },
                                ),
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                )
                                return {
                                    'Grootboekrekening voor BTW afrondingen': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor BTW afrondingen',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
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
                                    'Salarisrondes': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Salarisrondes',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
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
                                    'BTW periodes': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'BTW periodes',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l entry': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "1. BTW-categorieen": null,
                                                                            "Documenten": null,
                                                                            "Omschrijving": null,
                                                                            "Status": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        '1. BTW-categorieen': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': '1. BTW-categorieen',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                        'Documenten': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Documenten',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l entry': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                            {
                                                                                                                "Bestand": null,
                                                                                                            },
                                                                                                        ),
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        )
                                                                                                        return {
                                                                                                            'Bestand': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'Bestand',
                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Omschrijving': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Omschrijving',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Status': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Status',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): t_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                                                                                        switch ($t) {
                                                                                            case 'Aangegeven':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l state': ['Aangegeven', _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                        {
                                                                                                                            "Afronding": null,
                                                                                                                            "Bedrag": null,
                                                                                                                            "Datum": null,
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p_variables(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                        },
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'Afronding': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'Afronding',
                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'Bedrag': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'Bedrag',
                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'Datum': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'Datum',
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'type': ['iso date', null],
                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                'Balans': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Balans',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.literal.dictionary(
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
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                )
                                return {
                                    'Grootboekrekening voor nog aan te geven BTW': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor nog aan te geven BTW',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
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
                                    'Grootboekrekening voor resultaat dit jaar': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor resultaat dit jaar',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
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
                                    'Grootboekrekening voor winstreserve': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor winstreserve',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
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
                                    'Grootboekrekening voor Inkoop saldo': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor Inkoop saldo',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
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
                                    'Grootboekrekening voor Verkoop saldo': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Grootboekrekening voor Verkoop saldo',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
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
                                    'Beginsaldo nog aan te geven BTW': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Beginsaldo nog aan te geven BTW',
                                                'subdocument context': _p.literal.not_set(),
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
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'Beginsaldo winstreserve': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Beginsaldo winstreserve',
                                                'subdocument context': _p.literal.not_set(),
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
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'Bankrekeningen': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Bankrekeningen',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l entry': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Nieuw": null,
                                                                            "Mutaties": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Beginsaldo': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Beginsaldo',
                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Grootboekrekening': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Grootboekrekening',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Nieuw': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Nieuw',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): t_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l state': ['Nee', _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                        {
                                                                                                                            "Rekening": null,
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p_variables(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                        },
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'Rekening': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'Rekening',
                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Mutaties': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Mutaties',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l entry': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                            {
                                                                                                                "Bedrag": null,
                                                                                                                "Datum": null,
                                                                                                                "Omschrijving": null,
                                                                                                            },
                                                                                                        ),
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        )
                                                                                                        return {
                                                                                                            'Bedrag': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'Bedrag',
                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                            'Datum': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'Datum',
                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['iso date', null],
                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                            'Omschrijving': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'Omschrijving',
                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                    'Informele rekeningen': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Informele rekeningen',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l entry': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'Beginsaldo': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Beginsaldo',
                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'Grootboekrekening': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Grootboekrekening',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'Nieuw': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Nieuw',
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['token']['value'],
                                                                                    ($t): t_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l state': ['Nee', _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                        {
                                                                                                                            "Rekening": null,
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p_variables(
                                                                                                                () => {
                                                                                                                    
                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                        },
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'Rekening': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'Rekening',
                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                    'Overige balans items': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Overige balans items',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
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
                                    'Verrekenposten': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Verrekenposten',
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l dictionary': _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
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

export const Overige_balans_item: t_signatures.Overige_balans_item = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Beginsaldo": null,
                    "Grootboekrekening": null,
                    "Nieuw": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Beginsaldo': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Beginsaldo',
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                ),
                'Grootboekrekening': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Grootboekrekening',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                            {
                                'subdocument context': _p.literal.not_set(),
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
                'Nieuw': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Nieuw',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Overige_balans_item.Nieuw => {
                                switch ($t) {
                                    case 'Ja':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
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
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['Nee', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "Balans item": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'Balans item': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'Balans item',
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
            'subdocument context': _p.literal.not_set(),
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
            'subdocument context': _p.literal.not_set(),
        },
    ),
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            $,
        ),
    ),
})

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Inkopen": null,
                    "Verkopen": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Inkopen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Inkopen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Afhandeling": null,
                                                        "BTW-periode": null,
                                                        "Brondocument": null,
                                                        "Datum": null,
                                                        "Regels": null,
                                                        "Type": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Afhandeling': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Afhandeling',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                                    switch ($t) {
                                                                        case 'Mutaties':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Nog te betalen', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Betalingstermijn": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Betalingstermijn': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Betalingstermijn',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Rekening courant', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Rekening courant": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Rekening courant': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Rekening courant',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'BTW-periode': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'BTW-periode',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
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
                                                    'Brondocument': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Brondocument',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
                                                                    switch ($t) {
                                                                        case 'Toegevoegd':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Toegevoegd', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Document": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Document': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Document',
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Datum': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Datum',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['iso date', null],
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                    ),
                                                    'Regels': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Regels',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Bedrag": null,
                                                                                            "Omschrijving": null,
                                                                                            "Type": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Bedrag': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Bedrag',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                                                                                                        switch ($t) {
                                                                                                            case 'Bekend':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Bekend', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "BTW-bedrag": null,
                                                                                                                                            "Bedrag inclusief geheven BTW": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'BTW-bedrag': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'BTW-bedrag',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        'Bedrag inclusief geheven BTW': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Bedrag inclusief geheven BTW',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'Omschrijving': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Omschrijving',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'Type': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Type',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                                                        switch ($t) {
                                                                                                            case 'Balans':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "Balans item": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'Balans item': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Balans item',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Kosten', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "Grootboekrekening": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'Grootboekrekening': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Grootboekrekening',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                    'Type': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Type',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
                                                                    switch ($t) {
                                                                        case 'Bonnetje':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Inkoop (met crediteur)', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Crediteur": null,
                                                                                                        "Factuurnummer": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Crediteur': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Crediteur',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                    'Factuurnummer': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Factuurnummer',
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Loonheffing', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Ronde": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Ronde': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Ronde',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Salaris', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Ronde": null,
                                                                                                        "Medewerker": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Ronde': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Ronde',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                    'Medewerker': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Medewerker',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
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
                'Verkopen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Verkopen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
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
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Afhandeling': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Afhandeling',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                                    switch ($t) {
                                                                        case 'Mutaties':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Rekening courant', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Rekening courant": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Rekening courant': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Rekening courant',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Betalingstermijn': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Betalingstermijn',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['decimal', null],
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                    ),
                                                    'BTW-periode': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'BTW-periode',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
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
                                                    'Brondocument': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Brondocument',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
                                                                    switch ($t) {
                                                                        case 'Toegevoegd':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Toegevoegd', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Document": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Document': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Document',
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Debiteur': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Debiteur',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
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
                                                    'Contracttype': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Contracttype',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
                                                                    switch ($t) {
                                                                        case 'Project':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Project', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Project": null,
                                                                                                        "Offerte": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Project': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Project',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                    'Offerte': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Offerte',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['Licentieovereenkomst', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {
                                                                                                        "Overeenkomst": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'Overeenkomst': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'Overeenkomst',
                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'Datum': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Datum',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['iso date', null],
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                    ),
                                                    'Regels': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Regels',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "BTW-regime": null,
                                                                                            "Bedrag exclusief BTW": null,
                                                                                            "Contracttype": null,
                                                                                            "Omschrijving": null,
                                                                                            "Type": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'BTW-regime': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'BTW-regime',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                                                                                                        switch ($t) {
                                                                                                            case 'Intracommunautair':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Standaard', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "BTW-categorie": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'BTW-categorie': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'BTW-categorie',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'Bedrag exclusief BTW': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Bedrag exclusief BTW',
                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                        'Contracttype': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Contracttype',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                                                                                                        switch ($t) {
                                                                                                            case 'Project':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Project', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "Opbrengst": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'Opbrengst': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Opbrengst',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Licentieovereenkomst', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "Periode": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'Periode': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Periode',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'Omschrijving': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Omschrijving',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'Type': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Type',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                                                        switch ($t) {
                                                                                                            case 'Opbrengsten':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Opbrengsten', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "Grootboekrekening": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'Grootboekrekening': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Grootboekrekening',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'expected properties': _p.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "Balans item": null,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => _p_variables(
                                                                                                                                () => {
                                                                                                                                    
                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    )
                                                                                                                                    return {
                                                                                                                                        'Balans item': _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'id': 'Balans item',
                                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
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

export const Mutaties: t_signatures.Mutaties = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Verrekenposten": null,
                    "Bankrekeningen": null,
                    "Overige Balans Items": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Verrekenposten': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Verrekenposten',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                        "Mutaties": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Stam': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'Mutaties': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Mutaties',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Bedrag": null,
                                                                                            "Afhandeling": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Bedrag': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Bedrag',
                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                        'Afhandeling': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Afhandeling',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling => {
                                                                                                        switch ($t) {
                                                                                                            case 'Resultaat':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): t_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling.l_state.Balans => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'Informele rekening':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['Informele rekening', _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                                                                    {
                                                                                                                                                                        "Informele rekening": null,
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => _p_variables(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'Informele rekening': _p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'Informele rekening',
                                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                'Bankrekeningen': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Bankrekeningen',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                        "Mutatie Verwerkingen": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Stam': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'Mutatie Verwerkingen': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Mutatie Verwerkingen',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Stam": null,
                                                                                            "type": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Stam': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Stam',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'type': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'type',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_ => {
                                                                                                        switch ($t) {
                                                                                                            case 'Resultaat':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['Balans', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): t_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_.l_state.Balans => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'Informele rekening':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['Informele rekening', _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                                                                    {
                                                                                                                                                                        "Informele rekening": null,
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => _p_variables(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'Informele rekening': _p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'Informele rekening',
                                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['Verrekenpost', _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                                                                    {
                                                                                                                                                                        "Verrekenpost": null,
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => _p_variables(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'Verrekenpost': _p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'Verrekenpost',
                                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => ({
                                                                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                $,
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                'Overige Balans Items': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Overige Balans Items',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "Stam": null,
                                                        "Memoriaal Boekingen": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'Stam': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Stam',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'Memoriaal Boekingen': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'Memoriaal Boekingen',
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
                                                                        ),
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {
                                                                                            "Bedrag": null,
                                                                                            "Datum": null,
                                                                                            "Omschrijving": null,
                                                                                            "Grootboekrekening": null,
                                                                                        },
                                                                                    ),
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    )
                                                                                    return {
                                                                                        'Bedrag': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Bedrag',
                                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                        'Datum': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Datum',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'type': ['iso date', null],
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                        'Omschrijving': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Omschrijving',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'Grootboekrekening': _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'id': 'Grootboekrekening',
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
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

export const Jaren: t_signatures.Jaren = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.literal.dictionary(
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )
                            return {
                                'Afgesloten': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Afgesloten',
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['token']['value'],
                                            ($t): t_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
                                                switch ($t) {
                                                    case 'Ja':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                            }],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Startdatum boekjaar': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Startdatum boekjaar',
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'type': ['iso date', null],
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                ),
                                'Grootboekrekeningen': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Grootboekrekeningen',
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => Grootboekrekeningen(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'Eerste boekjaar': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Eerste boekjaar',
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => Eerste_boekjaar(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'Jaarbeheer': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Jaarbeheer',
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => Jaarbeheer(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'Handelstransacties': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Handelstransacties',
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => Handelstransacties(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'Mutaties': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'Mutaties',
                                            'subdocument context': _p.literal.not_set(),
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

export const Rekening_Mutatie: t_signatures.Rekening_Mutatie = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "Jaar": null,
                    "type": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            )
            return {
                'Jaar': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'Jaar',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p.optional.from.optional(
                        v_unmarshalled_from_parse_tree.Optional(
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
                                    'subdocument context': _p.literal.not_set(),
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
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Rekening_Mutatie.type_ => {
                                switch ($t) {
                                    case 'Inkoop':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['Inkoop', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
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
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['Verkoop', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
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
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['BTW-periode', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Eerste_boekjaar => {
            switch ($t) {
                case 'Ja':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['Nee', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "Vorig boekjaar": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'Vorig boekjaar': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Vorig boekjaar',
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
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
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
