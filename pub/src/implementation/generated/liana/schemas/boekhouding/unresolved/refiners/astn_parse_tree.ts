
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/unmarshall"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Fiscaal: t_signatures.Fiscaal = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Balans Hoofdcategorieen': _p_change_context(
            $.__get_entry_deprecated(
                'Balans Hoofdcategorieen',
                ($) => abort(
                    ['no such entry', "Balans Hoofdcategorieen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Zijde': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                switch ($t) {
                                                    case 'Activa':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a nothing', null],
                                                    ),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Resultaat Hoofdcategorieen': _p_change_context(
            $.__get_entry_deprecated(
                'Resultaat Hoofdcategorieen',
                ($) => abort(
                    ['no such entry', "Resultaat Hoofdcategorieen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Zijde': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde => {
                                                switch ($t) {
                                                    case 'Kosten':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Kosten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a nothing', null],
                                                    ),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Correctietypes vennootschapsbelasting': _p_change_context(
            $.__get_entry_deprecated(
                'Correctietypes vennootschapsbelasting',
                ($) => abort(
                    ['no such entry', "Correctietypes vennootschapsbelasting"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Te corrigeren promillage': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Te corrigeren promillage',
                                        ($) => abort(
                                            ['no such entry', "Te corrigeren promillage"],
                                        ),
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null],
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Balans': _p_change_context(
            $.__get_entry_deprecated(
                'Balans',
                ($) => abort(
                    ['no such entry', "Balans"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Zijde': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                switch ($t) {
                                                    case 'Activa':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'Hoofdcategorie fiscus': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Hoofdcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Hoofdcategorie fiscus"],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                        'Subcategorie fiscus': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Subcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Subcategorie fiscus"],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Resultaat': _p_change_context(
            $.__get_entry_deprecated(
                'Resultaat',
                ($) => abort(
                    ['no such entry', "Resultaat"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Zijde': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                switch ($t) {
                                                    case 'Kosten':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Kosten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'Hoofdcategorie fiscus': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Hoofdcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Hoofdcategorie fiscus"],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                        'Subcategorie fiscus': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Subcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Subcategorie fiscus"],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Beheer: t_signatures.Beheer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'BTW-categorieen': _p_change_context(
            $.__get_entry_deprecated(
                'BTW-categorieen',
                ($) => abort(
                    ['no such entry', "BTW-categorieen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'BTW-heffing': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'BTW-heffing',
                                        ($) => abort(
                                            ['no such entry', "BTW-heffing"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing => {
                                                switch ($t) {
                                                    case 'Ja':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Ja', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'BTW-promillage': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'BTW-promillage',
                                                                                ($) => abort(
                                                                                    ['no such entry', "BTW-promillage"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_deserialize_number.deserialize(
                                                                                _p_list_from_text(
                                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => $,
                                                                                ),
                                                                                ($) => abort(
                                                                                    ['not a valid number', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Grootboekrekeningen': _p_change_context(
            $.__get_entry_deprecated(
                'Grootboekrekeningen',
                ($) => abort(
                    ['no such entry', "Grootboekrekeningen"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'Balans': _p_change_context(
                        $.__get_entry_deprecated(
                            'Balans',
                            ($) => abort(
                                ['no such entry', "Balans"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Hoofdcategorie': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Hoofdcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Hoofdcategorie"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'Subcategorie': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Subcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Subcategorie"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'Zijde': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Zijde',
                                                    ($) => abort(
                                                        ['no such entry', "Zijde"],
                                                    ),
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde => {
                                                            switch ($t) {
                                                                case 'Activa':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
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
                                                                            )['start']['relative'],
                                                                            'l state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        }),
                    ),
                    'Resultaat': _p_change_context(
                        $.__get_entry_deprecated(
                            'Resultaat',
                            ($) => abort(
                                ['no such entry', "Resultaat"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Hoofdcategorie': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Hoofdcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Hoofdcategorie"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'Subcategorie': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Subcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Subcategorie"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'Zijde': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Zijde',
                                                    ($) => abort(
                                                        ['no such entry', "Zijde"],
                                                    ),
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde => {
                                                            switch ($t) {
                                                                case 'Kosten':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Kosten', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'Correctie op vennootschapsbelasting': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'Correctie op vennootschapsbelasting',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Correctie op vennootschapsbelasting"],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                    switch ($t) {
                                                                                                        case 'Ja':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['Ja', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'Correctietype': _p_change_context(
                                                                                                                                $.__get_entry_deprecated(
                                                                                                                                    'Correctietype',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "Correctietype"],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    )['start']['relative'],
                                                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            ['expected a text', null],
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        case 'Nee':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null],
                                                                                                                        ),
                                                                                                                    )],
                                                                                                                }),
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        }),
                    ),
                }),
            ),
        ),
        'Rekeningen': _p_change_context(
            $.__get_entry_deprecated(
                'Rekeningen',
                ($) => abort(
                    ['no such entry', "Rekeningen"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'Bank': _p_change_context(
                        $.__get_entry_deprecated(
                            'Bank',
                            ($) => abort(
                                ['no such entry', "Bank"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null],
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                    'Informeel': _p_change_context(
                        $.__get_entry_deprecated(
                            'Informeel',
                            ($) => abort(
                                ['no such entry', "Informeel"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null],
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                }),
            ),
        ),
        'Gebruikers': _p_change_context(
            $.__get_entry_deprecated(
                'Gebruikers',
                ($) => abort(
                    ['no such entry', "Gebruikers"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Volledige naam': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Volledige naam',
                                        ($) => abort(
                                            ['no such entry', "Volledige naam"],
                                        ),
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                                'Wachtwoord': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Wachtwoord',
                                        ($) => abort(
                                            ['no such entry', "Wachtwoord"],
                                        ),
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null],
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Klanten': _p_change_context(
            $.__get_entry_deprecated(
                'Klanten',
                ($) => abort(
                    ['no such entry', "Klanten"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Licentieovereenkomsten': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Licentieovereenkomsten',
                                        ($) => abort(
                                            ['no such entry', "Licentieovereenkomsten"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'Periodes': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Periodes',
                                                                ($) => abort(
                                                                    ['no such entry', "Periodes"],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a dictionary', null],
                                                                        ),
                                                                    ),
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Bedrag': _p_change_context(
                                                                                    $.__get_entry_deprecated(
                                                                                        'Bedrag',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Bedrag"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                        _p_list_from_text(
                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a text', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => $,
                                                                                        ),
                                                                                        ($) => abort(
                                                                                            ['not a valid number', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                                'Projecten': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Projecten',
                                        ($) => abort(
                                            ['no such entry', "Projecten"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'Offertes': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Offertes',
                                                                ($) => abort(
                                                                    ['no such entry', "Offertes"],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a dictionary', null],
                                                                        ),
                                                                    ),
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Opbrengsten': _p_change_context(
                                                                                    $.__get_entry_deprecated(
                                                                                        'Opbrengsten',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Opbrengsten"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a dictionary', null],
                                                                                                ),
                                                                                            ),
                                                                                        ).map(
                                                                                            ($, id) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                )['start']['relative'],
                                                                                                'l entry': _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'Type': _p_change_context(
                                                                                                            $.__get_entry_deprecated(
                                                                                                                'Type',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "Type"],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a state', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => _p.decide.text(
                                                                                                                    $['option']['value'],
                                                                                                                    ($t): t_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type => {
                                                                                                                        switch ($t) {
                                                                                                                            case 'Project':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $,
                                                                                                                                        )['start']['relative'],
                                                                                                                                        'l state': ['Project', _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    ['expected a group', null],
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'Bedrag': _p_change_context(
                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                        'Bedrag',
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['no such entry', "Bedrag"],
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                                                                        _p_list_from_text(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a text', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => $,
                                                                                                                                                        ),
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['not a valid number', null],
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                                'Betaaldatum': _p_change_context(
                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                        'Betaaldatum',
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['no such entry', "Betaaldatum"],
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                                                                        _p_list_from_text(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a text', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => $,
                                                                                                                                                        ),
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['not a valid number', null],
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            }),
                                                                                                                                        )],
                                                                                                                                    }),
                                                                                                                                )
                                                                                                                            default:
                                                                                                                                return abort(
                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                )
                                                                                                                        }
                                                                                                                    },
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Leveranciers': _p_change_context(
            $.__get_entry_deprecated(
                'Leveranciers',
                ($) => abort(
                    ['no such entry', "Leveranciers"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        ),
                    }),
                ),
            }),
        ),
        'Medewerkers': _p_change_context(
            $.__get_entry_deprecated(
                'Medewerkers',
                ($) => abort(
                    ['no such entry', "Medewerkers"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Balans': _p_change_context(
            $.__get_entry_deprecated(
                'Balans',
                ($) => abort(
                    ['no such entry', "Balans"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Type': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Type',
                                        ($) => abort(
                                            ['no such entry', "Type"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Type => {
                                                switch ($t) {
                                                    case 'Bankrekening':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Bankrekening', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Overig':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Overig', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Informele rekening':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Informele rekening', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Resultaat': _p_change_context(
            $.__get_entry_deprecated(
                'Resultaat',
                ($) => abort(
                    ['no such entry', "Resultaat"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Jaarbeheer: t_signatures.Jaarbeheer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Resultaat': _p_change_context(
            $.__get_entry_deprecated(
                'Resultaat',
                ($) => abort(
                    ['no such entry', "Resultaat"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'Grootboekrekening voor BTW afrondingen': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekening voor BTW afrondingen',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor BTW afrondingen"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'Salarisrondes': _p_change_context(
                        $.__get_entry_deprecated(
                            'Salarisrondes',
                            ($) => abort(
                                ['no such entry', "Salarisrondes"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null],
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                    'BTW periodes': _p_change_context(
                        $.__get_entry_deprecated(
                            'BTW periodes',
                            ($) => abort(
                                ['no such entry', "BTW periodes"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            '1. BTW-categorieen': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    '1. BTW-categorieen',
                                                    ($) => abort(
                                                        ['no such entry', "1. BTW-categorieen"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a dictionary', null],
                                                            ),
                                                        ),
                                                    ).map(
                                                        ($, id) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null],
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                }),
                                            ),
                                            'Documenten': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Documenten',
                                                    ($) => abort(
                                                        ['no such entry', "Documenten"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a dictionary', null],
                                                            ),
                                                        ),
                                                    ).map(
                                                        ($, id) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l entry': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'Bestand': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'Bestand',
                                                                            ($) => abort(
                                                                                ['no such entry', "Bestand"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        }),
                                                    ),
                                                }),
                                            ),
                                            'Omschrijving': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Omschrijving',
                                                    ($) => abort(
                                                        ['no such entry', "Omschrijving"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Status': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Status',
                                                    ($) => abort(
                                                        ['no such entry', "Status"],
                                                    ),
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status => {
                                                            switch ($t) {
                                                                case 'Aangegeven':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Aangegeven', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'Afronding': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'Afronding',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Afronding"],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => v_deserialize_number.deserialize(
                                                                                            _p_list_from_text(
                                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => $,
                                                                                            ),
                                                                                            ($) => abort(
                                                                                                ['not a valid number', null],
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Bedrag': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'Bedrag',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Bedrag"],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => v_deserialize_number.deserialize(
                                                                                            _p_list_from_text(
                                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => $,
                                                                                            ),
                                                                                            ($) => abort(
                                                                                                ['not a valid number', null],
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'Datum': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'Datum',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Datum"],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => v_deserialize_number.deserialize(
                                                                                            _p_list_from_text(
                                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => $,
                                                                                            ),
                                                                                            ($) => abort(
                                                                                                ['not a valid number', null],
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'Openstaand':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Openstaand', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        }),
                    ),
                }),
            ),
        ),
        'Balans': _p_change_context(
            $.__get_entry_deprecated(
                'Balans',
                ($) => abort(
                    ['no such entry', "Balans"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'Grootboekrekening voor nog aan te geven BTW': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekening voor nog aan te geven BTW',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor nog aan te geven BTW"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'Grootboekrekening voor resultaat dit jaar': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekening voor resultaat dit jaar',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor resultaat dit jaar"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'Grootboekrekening voor winstreserve': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekening voor winstreserve',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor winstreserve"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'Grootboekrekening voor Inkoop saldo': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekening voor Inkoop saldo',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor Inkoop saldo"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'Grootboekrekening voor Verkoop saldo': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekening voor Verkoop saldo',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor Verkoop saldo"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'Beginsaldo nog aan te geven BTW': _p_change_context(
                        $.__get_entry_deprecated(
                            'Beginsaldo nog aan te geven BTW',
                            ($) => abort(
                                ['no such entry', "Beginsaldo nog aan te geven BTW"],
                            ),
                        ),
                        ($) => v_deserialize_number.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid number', null],
                            ),
                        ),
                    ),
                    'Beginsaldo winstreserve': _p_change_context(
                        $.__get_entry_deprecated(
                            'Beginsaldo winstreserve',
                            ($) => abort(
                                ['no such entry', "Beginsaldo winstreserve"],
                            ),
                        ),
                        ($) => v_deserialize_number.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid number', null],
                            ),
                        ),
                    ),
                    'Informele rekeningen': _p_change_context(
                        $.__get_entry_deprecated(
                            'Informele rekeningen',
                            ($) => abort(
                                ['no such entry', "Informele rekeningen"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Beginsaldo',
                                                    ($) => abort(
                                                        ['no such entry', "Beginsaldo"],
                                                    ),
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    _p_list_from_text(
                                                        v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                        ($) => $,
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null],
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'Nieuw': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Nieuw',
                                                    ($) => abort(
                                                        ['no such entry', "Nieuw"],
                                                    ),
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
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
                                                                            )['start']['relative'],
                                                                            'l state': ['Nee', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'Rekening': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'Rekening',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Rekening"],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Verwijzing_naar_Informele_rekening(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        }),
                    ),
                    'Bankrekeningen': _p_change_context(
                        $.__get_entry_deprecated(
                            'Bankrekeningen',
                            ($) => abort(
                                ['no such entry', "Bankrekeningen"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Beginsaldo',
                                                    ($) => abort(
                                                        ['no such entry', "Beginsaldo"],
                                                    ),
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    _p_list_from_text(
                                                        v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                        ($) => $,
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null],
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'Nieuw': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Nieuw',
                                                    ($) => abort(
                                                        ['no such entry', "Nieuw"],
                                                    ),
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null],
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
                                                                            )['start']['relative'],
                                                                            'l state': ['Nee', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'Rekening': _p_change_context(
                                                                                        $.__get_entry_deprecated(
                                                                                            'Rekening',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Rekening"],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => Verwijzing_naar_Bankrekening(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'Mutaties': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Mutaties',
                                                    ($) => abort(
                                                        ['no such entry', "Mutaties"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a dictionary', null],
                                                            ),
                                                        ),
                                                    ).map(
                                                        ($, id) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l entry': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'Bedrag': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'Bedrag',
                                                                            ($) => abort(
                                                                                ['no such entry', "Bedrag"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_deserialize_number.deserialize(
                                                                            _p_list_from_text(
                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => $,
                                                                            ),
                                                                            ($) => abort(
                                                                                ['not a valid number', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'Datum': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'Datum',
                                                                            ($) => abort(
                                                                                ['no such entry', "Datum"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_deserialize_number.deserialize(
                                                                            _p_list_from_text(
                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => $,
                                                                            ),
                                                                            ($) => abort(
                                                                                ['not a valid number', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'Omschrijving': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'Omschrijving',
                                                                            ($) => abort(
                                                                                ['no such entry', "Omschrijving"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        }),
                    ),
                    'Overige balans items': _p_change_context(
                        $.__get_entry_deprecated(
                            'Overige balans items',
                            ($) => abort(
                                ['no such entry', "Overige balans items"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
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
                    'Verrekenposten': _p_change_context(
                        $.__get_entry_deprecated(
                            'Verrekenposten',
                            ($) => abort(
                                ['no such entry', "Verrekenposten"],
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null],
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                }),
            ),
        ),
    }),
)

export const Overige_balans_item: t_signatures.Overige_balans_item = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Beginsaldo': _p_change_context(
            $.__get_entry_deprecated(
                'Beginsaldo',
                ($) => abort(
                    ['no such entry', "Beginsaldo"],
                ),
            ),
            ($) => v_deserialize_number.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid number', null],
                ),
            ),
        ),
        'Grootboekrekening': _p_change_context(
            $.__get_entry_deprecated(
                'Grootboekrekening',
                ($) => abort(
                    ['no such entry', "Grootboekrekening"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l reference': v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            }),
        ),
        'Nieuw': _p_change_context(
            $.__get_entry_deprecated(
                'Nieuw',
                ($) => abort(
                    ['no such entry', "Nieuw"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
                    ),
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Overige_balans_item.Nieuw => {
                        switch ($t) {
                            case 'Ja':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
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
                                        )['start']['relative'],
                                        'l state': ['Nee', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'Balans item': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'Balans item',
                                                        ($) => abort(
                                                            ['no such entry', "Balans item"],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
})

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Inkopen': _p_change_context(
            $.__get_entry_deprecated(
                'Inkopen',
                ($) => abort(
                    ['no such entry', "Inkopen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Afhandeling': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Afhandeling',
                                        ($) => abort(
                                            ['no such entry', "Afhandeling"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                switch ($t) {
                                                    case 'Mutaties':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Mutaties', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Rekening courant', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Rekening courant': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Rekening courant',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Rekening courant"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'BTW-regime': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'BTW-regime',
                                        ($) => abort(
                                            ['no such entry', "BTW-regime"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.BTW$mi_regime => {
                                                switch ($t) {
                                                    case 'Binnenland: heffing verlegd':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Binnenland: heffing verlegd', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Geen BTW van toepassing':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Geen BTW van toepassing', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Import van buiten de EU':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Import van buiten de EU', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Intracommunautair':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Intracommunautair', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Standaard', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'BTW-periode': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'BTW-periode',
                                                                                ($) => abort(
                                                                                    ['no such entry', "BTW-periode"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Brondocument': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Brondocument',
                                        ($) => abort(
                                            ['no such entry', "Brondocument"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument => {
                                                switch ($t) {
                                                    case 'Toegevoegd':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Toegevoegd', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Document': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Document',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Document"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Niet van toepassing':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Niet van toepassing', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Ontbreekt', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Datum': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Datum',
                                        ($) => abort(
                                            ['no such entry', "Datum"],
                                        ),
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null],
                                        ),
                                    ),
                                ),
                                'Regels': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Regels',
                                        ($) => abort(
                                            ['no such entry', "Regels"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'Bedrag': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Bedrag',
                                                                ($) => abort(
                                                                    ['no such entry', "Bedrag"],
                                                                ),
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag => {
                                                                        switch ($t) {
                                                                            case 'Bekend':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Bekend', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'BTW-bedrag': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'BTW-bedrag',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "BTW-bedrag"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                        _p_list_from_text(
                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => $,
                                                                                                        ),
                                                                                                        ($) => abort(
                                                                                                            ['not a valid number', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'Bedrag inclusief geheven BTW': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Bedrag inclusief geheven BTW',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Bedrag inclusief geheven BTW"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                        _p_list_from_text(
                                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => $,
                                                                                                        ),
                                                                                                        ($) => abort(
                                                                                                            ['not a valid number', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                        'Omschrijving': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Omschrijving',
                                                                ($) => abort(
                                                                    ['no such entry', "Omschrijving"],
                                                                ),
                                                            ),
                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
                                                                ),
                                                            ),
                                                        ),
                                                        'Type': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Type',
                                                                ($) => abort(
                                                                    ['no such entry', "Type"],
                                                                ),
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                        switch ($t) {
                                                                            case 'Balans':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Balans', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Balans item': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Balans item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Balans item"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'Kosten':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Kosten', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Grootboekrekening': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Grootboekrekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Grootboekrekening"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                                'Type': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Type',
                                        ($) => abort(
                                            ['no such entry', "Type"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type => {
                                                switch ($t) {
                                                    case 'Bonnetje':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Bonnetje', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Inkoop (met crediteur)', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Crediteur': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Crediteur',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Crediteur"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                        'Factuurnummer': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Factuurnummer',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Factuurnummer"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Loonheffing':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Loonheffing', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Ronde': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Ronde',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Ronde"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Salaris':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Salaris', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Ronde': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Ronde',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Ronde"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                        'Medewerker': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Medewerker',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Medewerker"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'Verkopen': _p_change_context(
            $.__get_entry_deprecated(
                'Verkopen',
                ($) => abort(
                    ['no such entry', "Verkopen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'Afhandeling': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Afhandeling',
                                        ($) => abort(
                                            ['no such entry', "Afhandeling"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling => {
                                                switch ($t) {
                                                    case 'Mutaties':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Mutaties', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['Rekening courant', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Rekening courant': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Rekening courant',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Rekening courant"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Betalingstermijn': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Betalingstermijn',
                                        ($) => abort(
                                            ['no such entry', "Betalingstermijn"],
                                        ),
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null],
                                        ),
                                    ),
                                ),
                                'BTW-periode': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'BTW-periode',
                                        ($) => abort(
                                            ['no such entry', "BTW-periode"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    }),
                                ),
                                'Brondocument': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Brondocument',
                                        ($) => abort(
                                            ['no such entry', "Brondocument"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument => {
                                                switch ($t) {
                                                    case 'Toegevoegd':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Toegevoegd', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Document': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Document',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Document"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Debiteur': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Debiteur',
                                        ($) => abort(
                                            ['no such entry', "Debiteur"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        ),
                                    }),
                                ),
                                'Contracttype': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Contracttype',
                                        ($) => abort(
                                            ['no such entry', "Contracttype"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype => {
                                                switch ($t) {
                                                    case 'Project':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Project', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Project': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Project',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Project"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                        'Offerte': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Offerte',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Offerte"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    case 'Licentieovereenkomst':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Licentieovereenkomst', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'Overeenkomst': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'Overeenkomst',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Overeenkomst"],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null],
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'Datum': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Datum',
                                        ($) => abort(
                                            ['no such entry', "Datum"],
                                        ),
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null],
                                        ),
                                    ),
                                ),
                                'Regels': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'Regels',
                                        ($) => abort(
                                            ['no such entry', "Regels"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l dictionary': _p.dictionary.from.dictionary(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                        ).map(
                                            ($, id) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l entry': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null],
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'BTW-regime': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'BTW-regime',
                                                                ($) => abort(
                                                                    ['no such entry', "BTW-regime"],
                                                                ),
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime => {
                                                                        switch ($t) {
                                                                            case 'Intracommunautair':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Intracommunautair', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
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
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Standaard', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'BTW-categorie': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'BTW-categorie',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "BTW-categorie"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'Binnenland: heffing verlegd':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Binnenland: heffing verlegd', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                        'Bedrag exclusief BTW': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Bedrag exclusief BTW',
                                                                ($) => abort(
                                                                    ['no such entry', "Bedrag exclusief BTW"],
                                                                ),
                                                            ),
                                                            ($) => v_deserialize_number.deserialize(
                                                                _p_list_from_text(
                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    ),
                                                                    ($) => $,
                                                                ),
                                                                ($) => abort(
                                                                    ['not a valid number', null],
                                                                ),
                                                            ),
                                                        ),
                                                        'Contracttype': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Contracttype',
                                                                ($) => abort(
                                                                    ['no such entry', "Contracttype"],
                                                                ),
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype => {
                                                                        switch ($t) {
                                                                            case 'Project':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Project', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Opbrengst': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Opbrengst',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Opbrengst"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'Los':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Los', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
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
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Licentieovereenkomst', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Periode': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Periode',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Periode"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                        'Omschrijving': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Omschrijving',
                                                                ($) => abort(
                                                                    ['no such entry', "Omschrijving"],
                                                                ),
                                                            ),
                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
                                                                ),
                                                            ),
                                                        ),
                                                        'Type': _p_change_context(
                                                            $.__get_entry_deprecated(
                                                                'Type',
                                                                ($) => abort(
                                                                    ['no such entry', "Type"],
                                                                ),
                                                            ),
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type => {
                                                                        switch ($t) {
                                                                            case 'Opbrengsten':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Opbrengsten', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Grootboekrekening': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Grootboekrekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Grootboekrekening"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            case 'Balans':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l state': ['Balans', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Balans item': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'Balans item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Balans item"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Mutaties: t_signatures.Mutaties = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Verrekenpost mutaties': _p_change_context(
            $.__get_entry_deprecated(
                'Verrekenpost mutaties',
                ($) => abort(
                    ['no such entry', "Verrekenpost mutaties"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': {
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Bedrag': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Bedrag',
                                                    ($) => abort(
                                                        ['no such entry', "Bedrag"],
                                                    ),
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    _p_list_from_text(
                                                        v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                        ($) => $,
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null],
                                                    ),
                                                ),
                                            ),
                                            'Afhandeling': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Afhandeling',
                                                    ($) => abort(
                                                        ['no such entry', "Afhandeling"],
                                                    ),
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Mutaties.Verrekenpost_mutaties.l_dictionary.D.l_entry.l_dictionary.D.l_entry.Afhandeling => {
                                                            switch ($t) {
                                                                case 'Resultaat':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            )['start']['relative'],
                                                                            'l state': ['Resultaat', Balans_Resultaat_Mutatie(
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
                                                                            )['start']['relative'],
                                                                            'l state': ['Balans', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a state', null],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['value'],
                                                                                    ($t): t_out.Mutaties.Verrekenpost_mutaties.l_dictionary.D.l_entry.l_dictionary.D.l_entry.Afhandeling.l_state.Balans => {
                                                                                        switch ($t) {
                                                                                            case 'Informele rekening':
                                                                                                return _p_change_context(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l state': ['Informele rekening', _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a group', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => ({
                                                                                                                'Informele rekening': _p_change_context(
                                                                                                                    $.__get_entry_deprecated(
                                                                                                                        'Informele rekening',
                                                                                                                        ($) => abort(
                                                                                                                            ['no such entry', "Informele rekening"],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        )['start']['relative'],
                                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                ),
                                                                                                            }),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['unknown option', $['option']['value']],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        },
                    }),
                ),
            }),
        ),
        'Bankrekening Mutatie Verwerkingen': _p_change_context(
            $.__get_entry_deprecated(
                'Bankrekening Mutatie Verwerkingen',
                ($) => abort(
                    ['no such entry', "Bankrekening Mutatie Verwerkingen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': {
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry => {
                                                switch ($t) {
                                                    case 'Resultaat':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['Resultaat', Balans_Resultaat_Mutatie(
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
                                                                )['start']['relative'],
                                                                'l state': ['Balans', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a state', null],
                                                                        ),
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['value'],
                                                                        ($t): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry.l_state.Balans => {
                                                                            switch ($t) {
                                                                                case 'Informele rekening':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l state': ['Informele rekening', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'Informele rekening': _p_change_context(
                                                                                                        $.__get_entry_deprecated(
                                                                                                            'Informele rekening',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "Informele rekening"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }),
                                                                                            )],
                                                                                        }),
                                                                                    )
                                                                                case 'Verrekenpost':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l state': ['Verrekenpost', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'Verrekenpost': _p_change_context(
                                                                                                        $.__get_entry_deprecated(
                                                                                                            'Verrekenpost',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "Verrekenpost"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }),
                                                                                            )],
                                                                                        }),
                                                                                    )
                                                                                default:
                                                                                    return abort(
                                                                                        ['unknown option', $['option']['value']],
                                                                                    )
                                                                            }
                                                                        },
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        },
                    }),
                ),
            }),
        ),
        'Memoriaal boekingen': _p_change_context(
            $.__get_entry_deprecated(
                'Memoriaal boekingen',
                ($) => abort(
                    ['no such entry', "Memoriaal boekingen"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': {
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l dictionary': _p.dictionary.from.dictionary(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    )['start']['relative'],
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Bedrag': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Bedrag',
                                                    ($) => abort(
                                                        ['no such entry', "Bedrag"],
                                                    ),
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    _p_list_from_text(
                                                        v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                        ($) => $,
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null],
                                                    ),
                                                ),
                                            ),
                                            'Datum': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Datum',
                                                    ($) => abort(
                                                        ['no such entry', "Datum"],
                                                    ),
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    _p_list_from_text(
                                                        v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                        ($) => $,
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null],
                                                    ),
                                                ),
                                            ),
                                            'Omschrijving': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Omschrijving',
                                                    ($) => abort(
                                                        ['no such entry', "Omschrijving"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Grootboekrekening': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        }),
                                    ),
                                }),
                            ),
                        },
                    }),
                ),
            }),
        ),
    }),
)

export const Jaren: t_signatures.Jaren = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'Afgesloten': _p_change_context(
                        $.__get_entry_deprecated(
                            'Afgesloten',
                            ($) => abort(
                                ['no such entry', "Afgesloten"],
                            ),
                        ),
                        ($) => _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null],
                                ),
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Jaren.l_dictionary.D.l_entry.Afgesloten => {
                                    switch ($t) {
                                        case 'Ja':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                }),
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']],
                                            )
                                    }
                                },
                            ),
                        ),
                    ),
                    'Startdatum boekjaar': _p_change_context(
                        $.__get_entry_deprecated(
                            'Startdatum boekjaar',
                            ($) => abort(
                                ['no such entry', "Startdatum boekjaar"],
                            ),
                        ),
                        ($) => v_deserialize_number.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid number', null],
                            ),
                        ),
                    ),
                    'Grootboekrekeningen': _p_change_context(
                        $.__get_entry_deprecated(
                            'Grootboekrekeningen',
                            ($) => abort(
                                ['no such entry', "Grootboekrekeningen"],
                            ),
                        ),
                        ($) => Grootboekrekeningen(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                    'Eerste boekjaar': _p_change_context(
                        $.__get_entry_deprecated(
                            'Eerste boekjaar',
                            ($) => abort(
                                ['no such entry', "Eerste boekjaar"],
                            ),
                        ),
                        ($) => Eerste_boekjaar(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                    'Jaarbeheer': _p_change_context(
                        $.__get_entry_deprecated(
                            'Jaarbeheer',
                            ($) => abort(
                                ['no such entry', "Jaarbeheer"],
                            ),
                        ),
                        ($) => Jaarbeheer(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                    'Handelstransacties': _p_change_context(
                        $.__get_entry_deprecated(
                            'Handelstransacties',
                            ($) => abort(
                                ['no such entry', "Handelstransacties"],
                            ),
                        ),
                        ($) => Handelstransacties(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                    'Mutaties': _p_change_context(
                        $.__get_entry_deprecated(
                            'Mutaties',
                            ($) => abort(
                                ['no such entry', "Mutaties"],
                            ),
                        ),
                        ($) => Mutaties(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                }),
            ),
        }),
    ),
})

export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Jaar': _p_change_context(
            $.__get_entry_deprecated(
                'Jaar',
                ($) => abort(
                    ['no such entry', "Jaar"],
                ),
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
                    ),
                ),
            ).map(
                ($) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                    )['start']['relative'],
                    'l reference': v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                }),
            ),
        ),
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                ($) => abort(
                    ['no such entry', "type"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
                    ),
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Balans_Resultaat_Mutatie.type_ => {
                        switch ($t) {
                            case 'Inkoop':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['Inkoop', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['Verkoop', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['BTW-periode', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                        }],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Eerste_boekjaar => {
            switch ($t) {
                case 'Ja':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['Nee', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'Vorig boekjaar': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'Vorig boekjaar',
                                            ($) => abort(
                                                ['no such entry', "Vorig boekjaar"],
                                            ),
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Root: t_signatures.Root = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'Fiscaal': _p_change_context(
            $.__get_entry_deprecated(
                'Fiscaal',
                ($) => abort(
                    ['no such entry', "Fiscaal"],
                ),
            ),
            ($) => Fiscaal(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'Categorieen': _p_change_context(
            $.__get_entry_deprecated(
                'Categorieen',
                ($) => abort(
                    ['no such entry', "Categorieen"],
                ),
            ),
            ($) => Grootboek_Categorieen(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'Beheer': _p_change_context(
            $.__get_entry_deprecated(
                'Beheer',
                ($) => abort(
                    ['no such entry', "Beheer"],
                ),
            ),
            ($) => Beheer(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'Jaren': _p_change_context(
            $.__get_entry_deprecated(
                'Jaren',
                ($) => abort(
                    ['no such entry', "Jaren"],
                ),
            ),
            ($) => Jaren(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)
