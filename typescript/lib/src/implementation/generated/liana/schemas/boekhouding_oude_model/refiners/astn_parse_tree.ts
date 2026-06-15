
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import _p_variables from 'pareto-core/dist/implementation/specials/variables'

import _p_create_symbol from 'pareto-core/dist/implementation/specials/create_symbol'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/data"

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
                    "Bankrekeningen": null,
                    "Beheer": null,
                    "Informele rekeningen": null,
                    "Jaren": null,
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
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {},
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
                                        return _p_create_symbol()
                                    },
                                ),
                            ),
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
                                        "BTW-categorieen": null,
                                        "Gebruikers": null,
                                        "Huidige datum": null,
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
                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'expected properties': _p.literal.dictionary(
                                                        {
                                                            "Grootboekrekeningen": null,
                                                            "Hoofdcategorieen": null,
                                                            "Hoofdcategorieen fiscus": null,
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
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
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
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
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
                                                                                                ($t): t_out.Root.Beheer.Balans.Grootboekrekeningen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Activa':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Activa', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Passiva':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Passiva', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
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
                                                                ),
                                                            ),
                                                        ),
                                                        'Hoofdcategorieen': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen',
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
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                                                ($t): t_out.Root.Beheer.Balans.Hoofdcategorieen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Activa':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Activa', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Passiva':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Passiva', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
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
                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => _p_change_context(
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
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
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
                                                        'Hoofdcategorieen fiscus': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen fiscus',
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
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                                                ($t): t_out.Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Activa':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Activa', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Passiva':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Passiva', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
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
                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                {},
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
                                                                                                            return _p_create_symbol()
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
                                            ($) => _p.dictionary.from.dictionary(
                                                $['entries'],
                                            ).map(
                                                ($, id) => _p_change_context(
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
                                                                            ($t): t_out.Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                                                                switch ($t) {
                                                                                    case 'Ja':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Ja', _p_change_context(
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
                                                                                        )
                                                                                    case 'Nee':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Nee', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                            {},
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
                                                                                                        return _p_create_symbol()
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
                                            ($) => _p.dictionary.from.dictionary(
                                                $['entries'],
                                            ).map(
                                                ($, id) => _p_change_context(
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
                                            ),
                                        ),
                                    ),
                                    'Huidige datum': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'Huidige datum',
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
                                                            "Correctietypes vennootschapsbelasting": null,
                                                            "Grootboekrekeningen": null,
                                                            "Hoofdcategorieen": null,
                                                            "Hoofdcategorieen fiscus": null,
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
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                ),
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
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
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
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
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
                                                                                                ($t): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Kosten':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Kosten', _p_change_context(
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
                                                                                                                                            ($t): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'Ja':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ['Ja', _p_change_context(
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
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ['Nee', _p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                                                                                            {},
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
                                                                                                                                                                        return _p_create_symbol()
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
                                                                                                            )
                                                                                                        case 'Opbrengsten':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Opbrengsten', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
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
                                                                ),
                                                            ),
                                                        ),
                                                        'Hoofdcategorieen': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen',
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
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                                                ($t): t_out.Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Kosten':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Kosten', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Opbrengsten':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Opbrengsten', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
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
                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => _p_change_context(
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
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
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
                                                        'Hoofdcategorieen fiscus': _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Property(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'id': 'Hoofdcategorieen fiscus',
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
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $['entries'],
                                                                ).map(
                                                                    ($, id) => _p_change_context(
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
                                                                                                ($t): t_out.Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde => {
                                                                                                    switch ($t) {
                                                                                                        case 'Kosten':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Kosten', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Opbrengsten':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['Opbrengsten', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                {},
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
                                                                                                                            return _p_create_symbol()
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
                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                {},
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
                                                                                                            return _p_create_symbol()
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
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {},
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
                                        return _p_create_symbol()
                                    },
                                ),
                            ),
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
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
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
                                                        ($t): t_out.Root.Jaren.D.Afgesloten => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {},
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
                                                                                    return _p_create_symbol()
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {},
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
                                                                                    return _p_create_symbol()
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
                                            'Balans grootboekrekeningen': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Balans grootboekrekeningen',
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                                    ($t): t_out.Root.Jaren.D.Balans_grootboekrekeningen.D.Type => {
                                                                                        switch ($t) {
                                                                                            case 'Bankrekening':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Bankrekening', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Overig':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Overig', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Informele rekening':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Informele rekening', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
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
                                                    ),
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                            "Mutaties": null,
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
                                                                                    'type': ['decimal', null],
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
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                                'type': ['decimal', null],
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
                                                                                                                'type': ['decimal', null],
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
                                                                                                                ($t): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Nog te verwerken':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Nog te verwerken', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {},
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
                                                                                                                                            return _p_create_symbol()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Verwerkt':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Verwerkt', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {
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
                                                                                                                                                            ($t): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.Verwerkt.Afhandeling => {
                                                                                                                                                                switch ($t) {
                                                                                                                                                                    case 'Inkoop':
                                                                                                                                                                        return _p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Inkoop', _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "Inkoop": null,
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
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                            'Inkoop': _p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Inkoop',
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
                                                                                                                                                                        )
                                                                                                                                                                    case 'Verrekenpost':
                                                                                                                                                                        return _p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Verrekenpost', _p_change_context(
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
                                                                                                                                                                        return _p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['BTW-periode', _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "BTW-periode": null,
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
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
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
                                                                                                                                                                        return _p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Verkoop', _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'expected properties': _p.literal.dictionary(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "Verkoop": null,
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
                                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                ),
                                                                                                                                                                                            ),
                                                                                                                                                                                            'Verkoop': _p_change_context(
                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                        $,
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    {
                                                                                                                                                                                                        'id': 'Verkoop',
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
                                                                                                                                                                        )
                                                                                                                                                                    case 'Informele rekening':
                                                                                                                                                                        return _p_change_context(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            ($) => ['Informele rekening', _p_change_context(
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
                                                                                ),
                                                                            ),
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
                                                                                    ($t): t_out.Root.Jaren.D.Bankrekeningen.D.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ja', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nee', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Jaar": null,
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
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
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
                                                    ),
                                                ),
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
                                                        'type': ['decimal', null],
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
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                            'BTW periode saldo': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'BTW periode saldo',
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                    {},
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
                                                                                                return _p_create_symbol()
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                    ($t): t_out.Root.Jaren.D.BTW_periodes.D.Status => {
                                                                                        switch ($t) {
                                                                                            case 'Aangegeven':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Aangegeven', _p_change_context(
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
                                                                                                                                'type': ['decimal', null],
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
                                                                                                                                'type': ['decimal', null],
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
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Openstaand':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Openstaand', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
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
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Root.Jaren.D.Eerste_boekjaar => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'expected properties': _p.literal.dictionary(
                                                                                        {},
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
                                                                                    return _p_create_symbol()
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', _p_change_context(
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
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
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
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
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
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
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
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                                    'type': ['decimal', null],
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
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
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
                                                                                    ($t): t_out.Root.Jaren.D.Informele_rekeningen.D.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ja', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nee', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Jaar": null,
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
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
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
                                                    ),
                                                ),
                                            ),
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "Afhandeling": null,
                                                                            "BTW-regime": null,
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
                                                                                    ($t): t_out.Root.Jaren.D.Inkopen.D.Afhandeling => {
                                                                                        switch ($t) {
                                                                                            case 'Nog te betalen':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nog te betalen', _p_change_context(
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
                                                                                                )
                                                                                            case 'Mutaties':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Mutaties', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Rekening courant':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Rekening courant', _p_change_context(
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
                                                                                    ($t): t_out.Root.Jaren.D.Inkopen.D.BTW$mi_regime => {
                                                                                        switch ($t) {
                                                                                            case 'Binnenland: heffing verlegd':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Binnenland: heffing verlegd', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Geen BTW van toepassing', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Import van buiten de EU', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Intracommunautair', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Standaard', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
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
                                                                                    ($t): t_out.Root.Jaren.D.Inkopen.D.Brondocument => {
                                                                                        switch ($t) {
                                                                                            case 'Toegevoegd':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Toegevoegd', _p_change_context(
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Niet van toepassing', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Ontbreekt':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ontbreekt', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nog toevoegen':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nog toevoegen', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
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
                                                                                    'type': ['decimal', null],
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                                ($t): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Bedrag => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Bekend':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Bekend', _p_change_context(
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
                                                                                                                                                            'type': ['decimal', null],
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
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                ($t): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Type => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Balans':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Balans', _p_change_context(
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
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Kosten', _p_change_context(
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
                                                                                    ($t): t_out.Root.Jaren.D.Inkopen.D.Type => {
                                                                                        switch ($t) {
                                                                                            case 'Bonnetje':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Bonnetje', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Inkoop (met crediteur)':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Inkoop (met crediteur)', _p_change_context(
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
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
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
                                                                                                )
                                                                                            case 'Loonheffing':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Loonheffing', _p_change_context(
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Salaris', _p_change_context(
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
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
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
                                                    ),
                                                ),
                                            ),
                                            'Inkoop saldo': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Inkoop saldo',
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                            "Memoriaal boekingen": null,
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
                                                                                    'type': ['decimal', null],
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
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'Memoriaal boekingen': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'Memoriaal boekingen',
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                        "Grootboekrekening": null,
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
                                                                                                                'type': ['decimal', null],
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
                                                                                                                'type': ['decimal', null],
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
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
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
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
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
                                                                                    ($t): t_out.Root.Jaren.D.Overige_balans_items.D.Nieuw => {
                                                                                        switch ($t) {
                                                                                            case 'Ja':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Ja', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Nee':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Nee', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {
                                                                                                                        "Jaar": null,
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
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
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
                                                    ),
                                                ),
                                            ),
                                            'Resultaat grootboekrekeningen': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Resultaat grootboekrekeningen',
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {},
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
                                                                    return _p_create_symbol()
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {},
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
                                                                    return _p_create_symbol()
                                                                },
                                                            ),
                                                        ),
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
                                                        'type': ['decimal', null],
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                            'Verkoop saldo': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'Verkoop saldo',
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                            "Contracttype": null,
                                                                            "Datum": null,
                                                                            "Debiteur": null,
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
                                                                                    ($t): t_out.Root.Jaren.D.Verkopen.D.Afhandeling => {
                                                                                        switch ($t) {
                                                                                            case 'Mutaties':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Mutaties', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                    {},
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
                                                                                                                return _p_create_symbol()
                                                                                                            },
                                                                                                        ),
                                                                                                    )],
                                                                                                )
                                                                                            case 'Rekening courant':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Rekening courant', _p_change_context(
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
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
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
                                                                                    ($t): t_out.Root.Jaren.D.Verkopen.D.Brondocument => {
                                                                                        switch ($t) {
                                                                                            case 'Toegevoegd':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Toegevoegd', _p_change_context(
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
                                                                                    ($t): t_out.Root.Jaren.D.Verkopen.D.Contracttype => {
                                                                                        switch ($t) {
                                                                                            case 'Project':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Project', _p_change_context(
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
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
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
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ['Licentieovereenkomst', _p_change_context(
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
                                                                                    'type': ['decimal', null],
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                                ($t): t_out.Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Intracommunautair':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Intracommunautair', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {},
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
                                                                                                                                            return _p_create_symbol()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Standaard':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Standaard', _p_change_context(
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
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Binnenland: heffing verlegd', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {},
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
                                                                                                                                            return _p_create_symbol()
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
                                                                                                                'type': ['decimal', null],
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
                                                                                                                ($t): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Contracttype => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Project':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Project', _p_change_context(
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
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Los', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {},
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
                                                                                                                                            return _p_create_symbol()
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'Licentieovereenkomst':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Licentieovereenkomst', _p_change_context(
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
                                                                                                                ($t): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Type => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Opbrengsten':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Opbrengsten', _p_change_context(
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
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Balans', _p_change_context(
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                                'type': ['decimal', null],
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
                                                                                                                ($t): t_out.Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'Inkoop':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Inkoop', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "Inkoop": null,
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
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'Inkoop': _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Inkoop',
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
                                                                                                                            )
                                                                                                                        case 'Informele rekening':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Informele rekening', _p_change_context(
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
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['Verkoop', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "Verkoop": null,
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
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'Verkoop': _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'id': 'Verkoop',
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
                                                                                                                            )
                                                                                                                        case 'BTW-periode':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ['BTW-periode', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "BTW-periode": null,
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
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
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
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['entries'],
                                                    ).map(
                                                        ($, id) => _p_change_context(
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
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $['entries'],
                                                                                ).map(
                                                                                    ($, id) => _p_change_context(
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
                                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                                $['entries'],
                                                                                                            ).map(
                                                                                                                ($, id) => _p_change_context(
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
                                                                                                                                            ($t): t_out.Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'Project':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ['Project', _p_change_context(
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
                                                                                                                                                                                        'type': ['decimal', null],
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
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
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
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {},
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
                                        return _p_create_symbol()
                                    },
                                ),
                            ),
                        ),
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
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {},
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
                                        return _p_create_symbol()
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

export const Bestandsnaam: t_signatures.Bestandsnaam = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "stem": null,
                    "extension": null,
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
                'stem': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'stem',
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
                'extension': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'extension',
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
)
