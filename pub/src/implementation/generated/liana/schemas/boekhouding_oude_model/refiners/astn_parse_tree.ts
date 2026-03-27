
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

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
            'expected properties': _p.dictionary.literal(
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
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
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
                                        'expected properties': _p.dictionary.literal(
                                            {},
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return null
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "Balans": null,
                                        "BTW-categorieen": null,
                                        "Gebruikers": null,
                                        "Huidige datum": null,
                                        "Resultaat": null,
                                    },
                                ),
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'document resource identifier': "dummy dri",
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
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'expected properties': _p.dictionary.literal(
                                                        {
                                                            "Grootboekrekeningen": null,
                                                            "Hoofdcategorieen": null,
                                                            "Hoofdcategorieen fiscus": null,
                                                        },
                                                    ),
                                                    'document resource identifier': "dummy dri",
                                                },
                                            ),
                                            ($) => _p_variables(
                                                () => {
                                                    
                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                        $['value'],
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Hoofdcategorie": null,
                                                                                        "Subcategorie": null,
                                                                                        "Zijde": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                {
                                                                                                                    "Hoofdcategorie fiscus": null,
                                                                                                                    "Subcategorie fiscus": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'document resource identifier': "dummy dri",
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                {},
                                                                                                            ),
                                                                                                            'document resource identifier': "dummy dri",
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                },
                                                                                                            )
                                                                                                            return null
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
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'document resource identifier': "dummy dri",
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
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "BTW-heffing": null,
                                                                },
                                                            ),
                                                            'document resource identifier': "dummy dri",
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'document resource identifier': "dummy dri",
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
                                                                            'document resource identifier': "dummy dri",
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
                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                            {
                                                                                                                "BTW-promillage": null,
                                                                                                            },
                                                                                                        ),
                                                                                                        'document resource identifier': "dummy dri",
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                            {},
                                                                                                        ),
                                                                                                        'document resource identifier': "dummy dri",
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        )
                                                                                                        return null
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
                                                                                                        'document resource identifier': "dummy dri",
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
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'document resource identifier': "dummy dri",
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
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "Volledige naam": null,
                                                                    "Wachtwoord": null,
                                                                },
                                                            ),
                                                            'document resource identifier': "dummy dri",
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'document resource identifier': "dummy dri",
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
                                                                            'document resource identifier': "dummy dri",
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
                                                                            'document resource identifier': "dummy dri",
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
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['decimal', null],
                                                'document resource identifier': "dummy dri",
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
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'expected properties': _p.dictionary.literal(
                                                        {
                                                            "Correctietypes vennootschapsbelasting": null,
                                                            "Grootboekrekeningen": null,
                                                            "Hoofdcategorieen": null,
                                                            "Hoofdcategorieen fiscus": null,
                                                        },
                                                    ),
                                                    'document resource identifier': "dummy dri",
                                                },
                                            ),
                                            ($) => _p_variables(
                                                () => {
                                                    
                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                        $['value'],
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Te corrigeren promillage": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'type': ['decimal', null],
                                                                                                'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Hoofdcategorie": null,
                                                                                        "Subcategorie": null,
                                                                                        "Zijde": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "Correctie op vennootschapsbelasting": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                            {
                                                                                                                                                                                "Correctietype": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                            {},
                                                                                                                                                                        ),
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return null
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
                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                {
                                                                                                                    "Hoofdcategorie fiscus": null,
                                                                                                                    "Subcategorie fiscus": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'document resource identifier': "dummy dri",
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'document resource identifier': "dummy dri",
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
                                                                                'expected properties': _p.dictionary.literal(
                                                                                    {
                                                                                        "Zijde": null,
                                                                                        "Subcategorieen": null,
                                                                                    },
                                                                                ),
                                                                                'document resource identifier': "dummy dri",
                                                                            },
                                                                        ),
                                                                        ($) => _p_variables(
                                                                            () => {
                                                                                
                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                    $['value'],
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {},
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return null
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                {},
                                                                                                            ),
                                                                                                            'document resource identifier': "dummy dri",
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                },
                                                                                                            )
                                                                                                            return null
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
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
                                        'expected properties': _p.dictionary.literal(
                                            {},
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return null
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
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
                                        'expected properties': _p.dictionary.literal(
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
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {},
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return null
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
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {},
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return null
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Type": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Mutaties": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Datum": null,
                                                                                                        "Omschrijving": null,
                                                                                                        "Status": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return null
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Afhandeling": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "Inkoop": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Verrekenpost": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "BTW-periode": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Jaar": null,
                                                                                                                                                                                                "Verkoop": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                            {
                                                                                                                                                                                                "Informele rekening": null,
                                                                                                                                                                                            },
                                                                                                                                                                                        ),
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                    () => {
                                                                                                                                                                                        
                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                            $['value'],
                                                                                                                                                                                            {
                                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Jaar": null,
                                                                                                                        "Rekening": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "Grootboekrekening": null,
                                                                },
                                                            ),
                                                            'document resource identifier': "dummy dri",
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'document resource identifier': "dummy dri",
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
                                                                            'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "1. BTW-categorieen": null,
                                                                            "Documenten": null,
                                                                            "Omschrijving": null,
                                                                            "Status": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {},
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
                                                                                                    },
                                                                                                )
                                                                                                return null
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Bestand": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Afronding": null,
                                                                                                                        "Bedrag": null,
                                                                                                                        "Datum": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {},
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
                                                                                        },
                                                                                    )
                                                                                    return null
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
                                                                                    'expected properties': _p.dictionary.literal(
                                                                                        {
                                                                                            "Vorig boekjaar": null,
                                                                                        },
                                                                                    ),
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_variables(
                                                                                () => {
                                                                                    
                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Jaar": null,
                                                                                                                        "Rekening": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Afhandeling": null,
                                                                            "BTW-regime": null,
                                                                            "Brondocument": null,
                                                                            "Datum": null,
                                                                            "Regels": null,
                                                                            "Type": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Betalingstermijn": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'type': ['decimal', null],
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Rekening courant": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "BTW-periode": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Document": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Omschrijving": null,
                                                                                                        "Type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "BTW-bedrag": null,
                                                                                                                                                    "Bedrag inclusief geheven BTW": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'type': ['decimal', null],
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Balans item": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Grootboekrekening": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Crediteur": null,
                                                                                                                        "Factuurnummer": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Ronde": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Ronde": null,
                                                                                                                        "Medewerker": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "Grootboekrekening": null,
                                                                },
                                                            ),
                                                            'document resource identifier': "dummy dri",
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'document resource identifier': "dummy dri",
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
                                                                            'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Beginsaldo": null,
                                                                            "Grootboekrekening": null,
                                                                            "Memoriaal boekingen": null,
                                                                            "Nieuw": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Datum": null,
                                                                                                        "Grootboekrekening": null,
                                                                                                        "Omschrijving": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Jaar": null,
                                                                                                                        "Balans item": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {},
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
                                                                        },
                                                                    )
                                                                    return null
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {},
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
                                                                        },
                                                                    )
                                                                    return null
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "Grootboekrekening": null,
                                                                },
                                                            ),
                                                            'document resource identifier': "dummy dri",
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'document resource identifier': "dummy dri",
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
                                                                            'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
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
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {},
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                )
                                                                                                                return null
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Rekening courant": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Document": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Project": null,
                                                                                                                        "Offerte": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "Overeenkomst": null,
                                                                                                                    },
                                                                                                                ),
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_variables(
                                                                                                            () => {
                                                                                                                
                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "BTW-regime": null,
                                                                                                        "Bedrag exclusief BTW": null,
                                                                                                        "Contracttype": null,
                                                                                                        "Omschrijving": null,
                                                                                                        "Type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return null
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "BTW-categorie": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return null
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Opbrengst": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {},
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            )
                                                                                                                                            return null
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Periode": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Grootboekrekening": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Balans item": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Mutaties": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                        "Afhandeling": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "Inkoop": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Informele rekening": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "Verkoop": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "Jaar": null,
                                                                                                                                                    "BTW-periode": null,
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_variables(
                                                                                                                                        () => {
                                                                                                                                            
                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
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
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "Licentieovereenkomsten": null,
                                                "Projecten": null,
                                            },
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Periodes": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Bedrag": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'document resource identifier': "dummy dri",
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
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "Offertes": null,
                                                                        },
                                                                    ),
                                                                    'document resource identifier': "dummy dri",
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'document resource identifier': "dummy dri",
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
                                                                                    'document resource identifier': "dummy dri",
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "Opbrengsten": null,
                                                                                                    },
                                                                                                ),
                                                                                                'document resource identifier': "dummy dri",
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "Type": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                            {
                                                                                                                                                                                "Bedrag": null,
                                                                                                                                                                                "Betaaldatum": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'type': ['decimal', null],
                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
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
                                        'expected properties': _p.dictionary.literal(
                                            {},
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return null
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'document resource identifier': "dummy dri",
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
                                        'expected properties': _p.dictionary.literal(
                                            {},
                                        ),
                                        'document resource identifier': "dummy dri",
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'document resource identifier': "dummy dri",
                                            },
                                        )
                                        return null
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
            'expected properties': _p.dictionary.literal(
                {
                    "stem": null,
                    "extension": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
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
