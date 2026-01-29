
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Fiscaal: t_signatures.Fiscaal = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Balans Hoofdcategorieen': _p_cc(
            $.__get_entry(
                'Balans Hoofdcategorieen',
                ($) => abort(
                    ['no such entry', "Balans Hoofdcategorieen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Zijde': _p_cc(
                                    $.__get_entry(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Fiscaal.Balans_Hoofdcategorieen.dictionary.D.entry.Zijde => {
                                                switch ($t) {
                                                    case 'Activa':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Passiva':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Subcategorieen': _p_cc(
                                    $.__get_entry(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a nothing', null]
                                                    )
                                                ),
                                            })
                                        ),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Resultaat Hoofdcategorieen': _p_cc(
            $.__get_entry(
                'Resultaat Hoofdcategorieen',
                ($) => abort(
                    ['no such entry', "Resultaat Hoofdcategorieen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Zijde': _p_cc(
                                    $.__get_entry(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Fiscaal.Resultaat_Hoofdcategorieen.dictionary.D.entry.Zijde => {
                                                switch ($t) {
                                                    case 'Kosten':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Kosten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Subcategorieen': _p_cc(
                                    $.__get_entry(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a nothing', null]
                                                    )
                                                ),
                                            })
                                        ),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
    })
)

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Correctietypes vennootschapsbelasting': _p_cc(
            $.__get_entry(
                'Correctietypes vennootschapsbelasting',
                ($) => abort(
                    ['no such entry', "Correctietypes vennootschapsbelasting"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Te corrigeren promillage': _p_cc(
                                    $.__get_entry(
                                        'Te corrigeren promillage',
                                        ($) => abort(
                                            ['no such entry', "Te corrigeren promillage"]
                                        )
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null]
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Balans': _p_cc(
            $.__get_entry(
                'Balans',
                ($) => abort(
                    ['no such entry', "Balans"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Zijde': _p_cc(
                                    $.__get_entry(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Grootboek_Categorieen.Balans.dictionary.D.entry.Zijde => {
                                                switch ($t) {
                                                    case 'Activa':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Passiva':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Subcategorieen': _p_cc(
                                    $.__get_entry(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'Hoofdcategorie fiscus': _p_cc(
                                                            $.__get_entry(
                                                                'Hoofdcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Hoofdcategorie fiscus"]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                ),
                                                            })
                                                        ),
                                                        'Subcategorie fiscus': _p_cc(
                                                            $.__get_entry(
                                                                'Subcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Subcategorie fiscus"]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                ),
                                                            })
                                                        ),
                                                    })
                                                ),
                                            })
                                        ),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Resultaat': _p_cc(
            $.__get_entry(
                'Resultaat',
                ($) => abort(
                    ['no such entry', "Resultaat"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Zijde': _p_cc(
                                    $.__get_entry(
                                        'Zijde',
                                        ($) => abort(
                                            ['no such entry', "Zijde"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Grootboek_Categorieen.Resultaat.dictionary.D.entry.Zijde => {
                                                switch ($t) {
                                                    case 'Kosten':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Kosten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Subcategorieen': _p_cc(
                                    $.__get_entry(
                                        'Subcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Subcategorieen"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'Hoofdcategorie fiscus': _p_cc(
                                                            $.__get_entry(
                                                                'Hoofdcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Hoofdcategorie fiscus"]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                ),
                                                            })
                                                        ),
                                                        'Subcategorie fiscus': _p_cc(
                                                            $.__get_entry(
                                                                'Subcategorie fiscus',
                                                                ($) => abort(
                                                                    ['no such entry', "Subcategorie fiscus"]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                ),
                                                            })
                                                        ),
                                                    })
                                                ),
                                            })
                                        ),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
    })
)

export const Beheer: t_signatures.Beheer = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'BTW-categorieen': _p_cc(
            $.__get_entry(
                'BTW-categorieen',
                ($) => abort(
                    ['no such entry', "BTW-categorieen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'BTW-heffing': _p_cc(
                                    $.__get_entry(
                                        'BTW-heffing',
                                        ($) => abort(
                                            ['no such entry', "BTW-heffing"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Beheer.BTW$mi_categorieen.dictionary.D.entry.BTW$mi_heffing => {
                                                switch ($t) {
                                                    case 'Ja':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Ja', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'BTW-promillage': _p_cc(
                                                                            $.__get_entry(
                                                                                'BTW-promillage',
                                                                                ($) => abort(
                                                                                    ['no such entry', "BTW-promillage"]
                                                                                )
                                                                            ),
                                                                            ($) => v_deserialize_number.deserialize(
                                                                                v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                                ($) => abort(
                                                                                    ['not a valid number', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Grootboekrekeningen': _p_cc(
            $.__get_entry(
                'Grootboekrekeningen',
                ($) => abort(
                    ['no such entry', "Grootboekrekeningen"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'Balans': _p_cc(
                        $.__get_entry(
                            'Balans',
                            ($) => abort(
                                ['no such entry', "Balans"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'Hoofdcategorie': _p_cc(
                                                $.__get_entry(
                                                    'Hoofdcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Hoofdcategorie"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                            'Subcategorie': _p_cc(
                                                $.__get_entry(
                                                    'Subcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Subcategorie"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                            'Zijde': _p_cc(
                                                $.__get_entry(
                                                    'Zijde',
                                                    ($) => abort(
                                                        ['no such entry', "Zijde"]
                                                    )
                                                ),
                                                ($) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null]
                                                        )
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Beheer.Grootboekrekeningen.Balans.dictionary.D.entry.Zijde => {
                                                            switch ($t) {
                                                                case 'Activa':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Activa', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                case 'Passiva':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Passiva', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                            ),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                    'Resultaat': _p_cc(
                        $.__get_entry(
                            'Resultaat',
                            ($) => abort(
                                ['no such entry', "Resultaat"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'Hoofdcategorie': _p_cc(
                                                $.__get_entry(
                                                    'Hoofdcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Hoofdcategorie"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                            'Subcategorie': _p_cc(
                                                $.__get_entry(
                                                    'Subcategorie',
                                                    ($) => abort(
                                                        ['no such entry', "Subcategorie"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                            'Zijde': _p_cc(
                                                $.__get_entry(
                                                    'Zijde',
                                                    ($) => abort(
                                                        ['no such entry', "Zijde"]
                                                    )
                                                ),
                                                ($) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null]
                                                        )
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.dictionary.D.entry.Zijde => {
                                                            switch ($t) {
                                                                case 'Kosten':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Kosten', _p_cc(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null]
                                                                                    )
                                                                                ),
                                                                                ($) => ({
                                                                                    'Correctie op vennootschapsbelasting': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'Correctie op vennootschapsbelasting',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Correctie op vennootschapsbelasting"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a state', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Beheer.Grootboekrekeningen.Resultaat.dictionary.D.entry.Zijde.state.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                    switch ($t) {
                                                                                                        case 'Ja':
                                                                                                            return _p_cc(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                                                        $
                                                                                                                    )['start']['relative'],
                                                                                                                    'state': ['Ja', _p_cc(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null]
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'Correctietype': _p_cc(
                                                                                                                                $.__get_entry(
                                                                                                                                    'Correctietype',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "Correctietype"]
                                                                                                                                    )
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                                                                        $
                                                                                                                                    )['start']['relative'],
                                                                                                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            ['expected a text', null]
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                })
                                                                                                                            ),
                                                                                                                        })
                                                                                                                    )],
                                                                                                                })
                                                                                                            )
                                                                                                        case 'Nee':
                                                                                                            return _p_cc(
                                                                                                                $['value'],
                                                                                                                ($) => ({
                                                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                                                        $
                                                                                                                    )['start']['relative'],
                                                                                                                    'state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a nothing', null]
                                                                                                                        )
                                                                                                                    )],
                                                                                                                })
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['unknown option', $['option']['value']]
                                                                                                            )
                                                                                                    }
                                                                                                }
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                })
                                                                            )],
                                                                        })
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Opbrengsten', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                            ),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                })
            )
        ),
        'Rekeningen': _p_cc(
            $.__get_entry(
                'Rekeningen',
                ($) => abort(
                    ['no such entry', "Rekeningen"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'Bank': _p_cc(
                        $.__get_entry(
                            'Bank',
                            ($) => abort(
                                ['no such entry', "Bank"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    ),
                                })
                            ),
                        })
                    ),
                    'Informeel': _p_cc(
                        $.__get_entry(
                            'Informeel',
                            ($) => abort(
                                ['no such entry', "Informeel"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    ),
                                })
                            ),
                        })
                    ),
                })
            )
        ),
        'Gebruikers': _p_cc(
            $.__get_entry(
                'Gebruikers',
                ($) => abort(
                    ['no such entry', "Gebruikers"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Volledige naam': _p_cc(
                                    $.__get_entry(
                                        'Volledige naam',
                                        ($) => abort(
                                            ['no such entry', "Volledige naam"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    )
                                ),
                                'Wachtwoord': _p_cc(
                                    $.__get_entry(
                                        'Wachtwoord',
                                        ($) => abort(
                                            ['no such entry', "Wachtwoord"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Klanten': _p_cc(
            $.__get_entry(
                'Klanten',
                ($) => abort(
                    ['no such entry', "Klanten"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Licentieovereenkomsten': _p_cc(
                                    $.__get_entry(
                                        'Licentieovereenkomsten',
                                        ($) => abort(
                                            ['no such entry', "Licentieovereenkomsten"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'Periodes': _p_cc(
                                                            $.__get_entry(
                                                                'Periodes',
                                                                ($) => abort(
                                                                    ['no such entry', "Periodes"]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a dictionary', null]
                                                                    )
                                                                ).__d_map(
                                                                    ($, id) => ({
                                                                        'location': v_parse_tree_to_location.Value(
                                                                            $
                                                                        )['start']['relative'],
                                                                        'entry': _p_cc(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'Bedrag': _p_cc(
                                                                                    $.__get_entry(
                                                                                        'Bedrag',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Bedrag"]
                                                                                        )
                                                                                    ),
                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a text', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => abort(
                                                                                            ['not a valid number', null]
                                                                                        )
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                ),
                                                            })
                                                        ),
                                                    })
                                                ),
                                            })
                                        ),
                                    })
                                ),
                                'Projecten': _p_cc(
                                    $.__get_entry(
                                        'Projecten',
                                        ($) => abort(
                                            ['no such entry', "Projecten"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'Offertes': _p_cc(
                                                            $.__get_entry(
                                                                'Offertes',
                                                                ($) => abort(
                                                                    ['no such entry', "Offertes"]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a dictionary', null]
                                                                    )
                                                                ).__d_map(
                                                                    ($, id) => ({
                                                                        'location': v_parse_tree_to_location.Value(
                                                                            $
                                                                        )['start']['relative'],
                                                                        'entry': _p_cc(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'Opbrengsten': _p_cc(
                                                                                    $.__get_entry(
                                                                                        'Opbrengsten',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Opbrengsten"]
                                                                                        )
                                                                                    ),
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a dictionary', null]
                                                                                            )
                                                                                        ).__d_map(
                                                                                            ($, id) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'entry': _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'Type': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'Type',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "Type"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => _p_cc(
                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a state', null]
                                                                                                                    )
                                                                                                                ),
                                                                                                                ($) => _p.decide.text(
                                                                                                                    $['option']['value'],
                                                                                                                    ($t): t_out.Beheer.Klanten.dictionary.D.entry.Projecten.dictionary.D.entry.Offertes.dictionary.D.entry.Opbrengsten.dictionary.D.entry.Type => {
                                                                                                                        switch ($t) {
                                                                                                                            case 'Project':
                                                                                                                                return _p_cc(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ({
                                                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                                                            $
                                                                                                                                        )['start']['relative'],
                                                                                                                                        'state': ['Project', _p_cc(
                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    ['expected a group', null]
                                                                                                                                                )
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'Bedrag': _p_cc(
                                                                                                                                                    $.__get_entry(
                                                                                                                                                        'Bedrag',
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['no such entry', "Bedrag"]
                                                                                                                                                        )
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a text', null]
                                                                                                                                                            )
                                                                                                                                                        ),
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['not a valid number', null]
                                                                                                                                                        )
                                                                                                                                                    )
                                                                                                                                                ),
                                                                                                                                                'Betaaldatum': _p_cc(
                                                                                                                                                    $.__get_entry(
                                                                                                                                                        'Betaaldatum',
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['no such entry', "Betaaldatum"]
                                                                                                                                                        )
                                                                                                                                                    ),
                                                                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a text', null]
                                                                                                                                                            )
                                                                                                                                                        ),
                                                                                                                                                        ($) => abort(
                                                                                                                                                            ['not a valid number', null]
                                                                                                                                                        )
                                                                                                                                                    )
                                                                                                                                                ),
                                                                                                                                            })
                                                                                                                                        )],
                                                                                                                                    })
                                                                                                                                )
                                                                                                                            default:
                                                                                                                                return abort(
                                                                                                                                    ['unknown option', $['option']['value']]
                                                                                                                                )
                                                                                                                        }
                                                                                                                    }
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        ),
                                                                                    })
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                ),
                                                            })
                                                        ),
                                                    })
                                                ),
                                            })
                                        ),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Leveranciers': _p_cc(
            $.__get_entry(
                'Leveranciers',
                ($) => abort(
                    ['no such entry', "Leveranciers"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        ),
                    })
                ),
            })
        ),
        'Medewerkers': _p_cc(
            $.__get_entry(
                'Medewerkers',
                ($) => abort(
                    ['no such entry', "Medewerkers"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        ),
                    })
                ),
            })
        ),
    })
)

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Balans': _p_cc(
            $.__get_entry(
                'Balans',
                ($) => abort(
                    ['no such entry', "Balans"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Type': _p_cc(
                                    $.__get_entry(
                                        'Type',
                                        ($) => abort(
                                            ['no such entry', "Type"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Grootboekrekeningen.Balans.dictionary.D.entry.Type => {
                                                switch ($t) {
                                                    case 'Bankrekening':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Bankrekening', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Overig':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Overig', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Informele rekening':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Informele rekening', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Resultaat': _p_cc(
            $.__get_entry(
                'Resultaat',
                ($) => abort(
                    ['no such entry', "Resultaat"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        ),
                    })
                ),
            })
        ),
    })
)

export const Jaarbeheer: t_signatures.Jaarbeheer = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Resultaat': _p_cc(
            $.__get_entry(
                'Resultaat',
                ($) => abort(
                    ['no such entry', "Resultaat"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'Grootboekrekening voor BTW afrondingen': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor BTW afrondingen',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor BTW afrondingen"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Salarisrondes': _p_cc(
                        $.__get_entry(
                            'Salarisrondes',
                            ($) => abort(
                                ['no such entry', "Salarisrondes"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    ),
                                })
                            ),
                        })
                    ),
                    'BTW periodes': _p_cc(
                        $.__get_entry(
                            'BTW periodes',
                            ($) => abort(
                                ['no such entry', "BTW periodes"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            '1. BTW-categorieen': _p_cc(
                                                $.__get_entry(
                                                    '1. BTW-categorieen',
                                                    ($) => abort(
                                                        ['no such entry', "1. BTW-categorieen"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => ({
                                                            'location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'entry': v_unmarshalled_from_parse_tree.Nothing(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a nothing', null]
                                                                )
                                                            ),
                                                        })
                                                    ),
                                                })
                                            ),
                                            'Documenten': _p_cc(
                                                $.__get_entry(
                                                    'Documenten',
                                                    ($) => abort(
                                                        ['no such entry', "Documenten"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => ({
                                                            'location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'entry': _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    'Bestand': _p_cc(
                                                                        $.__get_entry(
                                                                            'Bestand',
                                                                            ($) => abort(
                                                                                ['no such entry', "Bestand"]
                                                                            )
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null]
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            ),
                                                        })
                                                    ),
                                                })
                                            ),
                                            'Omschrijving': _p_cc(
                                                $.__get_entry(
                                                    'Omschrijving',
                                                    ($) => abort(
                                                        ['no such entry', "Omschrijving"]
                                                    )
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                )
                                            ),
                                            'Status': _p_cc(
                                                $.__get_entry(
                                                    'Status',
                                                    ($) => abort(
                                                        ['no such entry', "Status"]
                                                    )
                                                ),
                                                ($) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null]
                                                        )
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Jaarbeheer.Resultaat.BTW_periodes.dictionary.D.entry.Status => {
                                                            switch ($t) {
                                                                case 'Aangegeven':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Aangegeven', _p_cc(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null]
                                                                                    )
                                                                                ),
                                                                                ($) => ({
                                                                                    'Afronding': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'Afronding',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Afronding"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => v_deserialize_number.deserialize(
                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a text', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => abort(
                                                                                                ['not a valid number', null]
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                    'Bedrag': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'Bedrag',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Bedrag"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => v_deserialize_number.deserialize(
                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a text', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => abort(
                                                                                                ['not a valid number', null]
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                    'Datum': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'Datum',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Datum"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => v_deserialize_number.deserialize(
                                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a text', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => abort(
                                                                                                ['not a valid number', null]
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                })
                                                                            )],
                                                                        })
                                                                    )
                                                                case 'Openstaand':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Openstaand', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                            ),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                })
            )
        ),
        'Balans': _p_cc(
            $.__get_entry(
                'Balans',
                ($) => abort(
                    ['no such entry', "Balans"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'Grootboekrekening voor nog aan te geven BTW': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor nog aan te geven BTW',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor nog aan te geven BTW"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor resultaat dit jaar': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor resultaat dit jaar',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor resultaat dit jaar"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor winstreserve': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor winstreserve',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor winstreserve"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor Inkoop saldo': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor Inkoop saldo',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor Inkoop saldo"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor Verkoop saldo': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor Verkoop saldo',
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor Verkoop saldo"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Beginsaldo nog aan te geven BTW': _p_cc(
                        $.__get_entry(
                            'Beginsaldo nog aan te geven BTW',
                            ($) => abort(
                                ['no such entry', "Beginsaldo nog aan te geven BTW"]
                            )
                        ),
                        ($) => v_deserialize_number.deserialize(
                            v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                            ($) => abort(
                                ['not a valid number', null]
                            )
                        )
                    ),
                    'Beginsaldo winstreserve': _p_cc(
                        $.__get_entry(
                            'Beginsaldo winstreserve',
                            ($) => abort(
                                ['no such entry', "Beginsaldo winstreserve"]
                            )
                        ),
                        ($) => v_deserialize_number.deserialize(
                            v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                            ($) => abort(
                                ['not a valid number', null]
                            )
                        )
                    ),
                    'Informele rekeningen': _p_cc(
                        $.__get_entry(
                            'Informele rekeningen',
                            ($) => abort(
                                ['no such entry', "Informele rekeningen"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_cc(
                                                $.__get_entry(
                                                    'Beginsaldo',
                                                    ($) => abort(
                                                        ['no such entry', "Beginsaldo"]
                                                    )
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null]
                                                    )
                                                )
                                            ),
                                            'Grootboekrekening': _p_cc(
                                                $.__get_entry(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                            'Nieuw': _p_cc(
                                                $.__get_entry(
                                                    'Nieuw',
                                                    ($) => abort(
                                                        ['no such entry', "Nieuw"]
                                                    )
                                                ),
                                                ($) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null]
                                                        )
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Jaarbeheer.Balans.Informele_rekeningen.dictionary.D.entry.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                case 'Nee':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Nee', _p_cc(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null]
                                                                                    )
                                                                                ),
                                                                                ($) => ({
                                                                                    'Rekening': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'Rekening',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Rekening"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => Verwijzing_naar_Informele_rekening(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                })
                                                                            )],
                                                                        })
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                            ),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                    'Bankrekeningen': _p_cc(
                        $.__get_entry(
                            'Bankrekeningen',
                            ($) => abort(
                                ['no such entry', "Bankrekeningen"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_cc(
                                                $.__get_entry(
                                                    'Beginsaldo',
                                                    ($) => abort(
                                                        ['no such entry', "Beginsaldo"]
                                                    )
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null]
                                                    )
                                                )
                                            ),
                                            'Grootboekrekening': _p_cc(
                                                $.__get_entry(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                            'Nieuw': _p_cc(
                                                $.__get_entry(
                                                    'Nieuw',
                                                    ($) => abort(
                                                        ['no such entry', "Nieuw"]
                                                    )
                                                ),
                                                ($) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null]
                                                        )
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Jaarbeheer.Balans.Bankrekeningen.dictionary.D.entry.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a nothing', null]
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                case 'Nee':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Nee', _p_cc(
                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a group', null]
                                                                                    )
                                                                                ),
                                                                                ($) => ({
                                                                                    'Rekening': _p_cc(
                                                                                        $.__get_entry(
                                                                                            'Rekening',
                                                                                            ($) => abort(
                                                                                                ['no such entry', "Rekening"]
                                                                                            )
                                                                                        ),
                                                                                        ($) => Verwijzing_naar_Bankrekening(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                })
                                                                            )],
                                                                        })
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                            ),
                                            'Mutaties': _p_cc(
                                                $.__get_entry(
                                                    'Mutaties',
                                                    ($) => abort(
                                                        ['no such entry', "Mutaties"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => ({
                                                            'location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'entry': _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    'Bedrag': _p_cc(
                                                                        $.__get_entry(
                                                                            'Bedrag',
                                                                            ($) => abort(
                                                                                ['no such entry', "Bedrag"]
                                                                            )
                                                                        ),
                                                                        ($) => v_deserialize_number.deserialize(
                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            ),
                                                                            ($) => abort(
                                                                                ['not a valid number', null]
                                                                            )
                                                                        )
                                                                    ),
                                                                    'Datum': _p_cc(
                                                                        $.__get_entry(
                                                                            'Datum',
                                                                            ($) => abort(
                                                                                ['no such entry', "Datum"]
                                                                            )
                                                                        ),
                                                                        ($) => v_deserialize_number.deserialize(
                                                                            v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            ),
                                                                            ($) => abort(
                                                                                ['not a valid number', null]
                                                                            )
                                                                        )
                                                                    ),
                                                                    'Omschrijving': _p_cc(
                                                                        $.__get_entry(
                                                                            'Omschrijving',
                                                                            ($) => abort(
                                                                                ['no such entry', "Omschrijving"]
                                                                            )
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null]
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            ),
                                                        })
                                                    ),
                                                })
                                            ),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                    'Overige balans items': _p_cc(
                        $.__get_entry(
                            'Overige balans items',
                            ($) => abort(
                                ['no such entry', "Overige balans items"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': Overige_balans_item(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    ),
                                })
                            ),
                        })
                    ),
                    'Verrekenposten': _p_cc(
                        $.__get_entry(
                            'Verrekenposten',
                            ($) => abort(
                                ['no such entry', "Verrekenposten"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    ),
                                })
                            ),
                        })
                    ),
                })
            )
        ),
    })
)

export const Overige_balans_item: t_signatures.Overige_balans_item = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Beginsaldo': _p_cc(
            $.__get_entry(
                'Beginsaldo',
                ($) => abort(
                    ['no such entry', "Beginsaldo"]
                )
            ),
            ($) => v_deserialize_number.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
        'Grootboekrekening': _p_cc(
            $.__get_entry(
                'Grootboekrekening',
                ($) => abort(
                    ['no such entry', "Grootboekrekening"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'id': v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
            })
        ),
        'Nieuw': _p_cc(
            $.__get_entry(
                'Nieuw',
                ($) => abort(
                    ['no such entry', "Nieuw"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Overige_balans_item.Nieuw => {
                        switch ($t) {
                            case 'Ja':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )],
                                    })
                                )
                            case 'Nee':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['Nee', _p_cc(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ),
                                            ($) => ({
                                                'Balans item': _p_cc(
                                                    $.__get_entry(
                                                        'Balans item',
                                                        ($) => abort(
                                                            ['no such entry', "Balans item"]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        )],
                                    })
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']]
                                )
                        }
                    }
                )
            )
        ),
    })
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'id': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null]
        )
    ),
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'id': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null]
        )
    ),
})

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Inkopen': _p_cc(
            $.__get_entry(
                'Inkopen',
                ($) => abort(
                    ['no such entry', "Inkopen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Afhandeling': _p_cc(
                                    $.__get_entry(
                                        'Afhandeling',
                                        ($) => abort(
                                            ['no such entry', "Afhandeling"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Afhandeling => {
                                                switch ($t) {
                                                    case 'Mutaties':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Mutaties', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Rekening courant':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Rekening courant', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Rekening courant': _p_cc(
                                                                            $.__get_entry(
                                                                                'Rekening courant',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Rekening courant"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'BTW-regime': _p_cc(
                                    $.__get_entry(
                                        'BTW-regime',
                                        ($) => abort(
                                            ['no such entry', "BTW-regime"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.dictionary.D.entry.BTW$mi_regime => {
                                                switch ($t) {
                                                    case 'Binnenland: heffing verlegd':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Binnenland: heffing verlegd', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Geen BTW van toepassing':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Geen BTW van toepassing', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Import van buiten de EU':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Import van buiten de EU', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Intracommunautair':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Intracommunautair', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Standaard':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Standaard', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'BTW-periode': _p_cc(
                                                                            $.__get_entry(
                                                                                'BTW-periode',
                                                                                ($) => abort(
                                                                                    ['no such entry', "BTW-periode"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Brondocument': _p_cc(
                                    $.__get_entry(
                                        'Brondocument',
                                        ($) => abort(
                                            ['no such entry', "Brondocument"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Brondocument => {
                                                switch ($t) {
                                                    case 'Toegevoegd':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Toegevoegd', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Document': _p_cc(
                                                                            $.__get_entry(
                                                                                'Document',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Document"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    case 'Niet van toepassing':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Niet van toepassing', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Ontbreekt':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Ontbreekt', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Datum': _p_cc(
                                    $.__get_entry(
                                        'Datum',
                                        ($) => abort(
                                            ['no such entry', "Datum"]
                                        )
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null]
                                        )
                                    )
                                ),
                                'Regels': _p_cc(
                                    $.__get_entry(
                                        'Regels',
                                        ($) => abort(
                                            ['no such entry', "Regels"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'Bedrag': _p_cc(
                                                            $.__get_entry(
                                                                'Bedrag',
                                                                ($) => abort(
                                                                    ['no such entry', "Bedrag"]
                                                                )
                                                            ),
                                                            ($) => _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Regels.dictionary.D.entry.Bedrag => {
                                                                        switch ($t) {
                                                                            case 'Bekend':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Bekend', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'BTW-bedrag': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'BTW-bedrag',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "BTW-bedrag"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                        ($) => abort(
                                                                                                            ['not a valid number', null]
                                                                                                        )
                                                                                                    )
                                                                                                ),
                                                                                                'Bedrag inclusief geheven BTW': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Bedrag inclusief geheven BTW',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Bedrag inclusief geheven BTW"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => v_deserialize_number.deserialize(
                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                        ($) => abort(
                                                                                                            ['not a valid number', null]
                                                                                                        )
                                                                                                    )
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        'Omschrijving': _p_cc(
                                                            $.__get_entry(
                                                                'Omschrijving',
                                                                ($) => abort(
                                                                    ['no such entry', "Omschrijving"]
                                                                )
                                                            ),
                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null]
                                                                )
                                                            )
                                                        ),
                                                        'Type': _p_cc(
                                                            $.__get_entry(
                                                                'Type',
                                                                ($) => abort(
                                                                    ['no such entry', "Type"]
                                                                )
                                                            ),
                                                            ($) => _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Regels.dictionary.D.entry.Type => {
                                                                        switch ($t) {
                                                                            case 'Balans':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Balans', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Balans item': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Balans item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Balans item"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            case 'Kosten':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Kosten', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Grootboekrekening': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Grootboekrekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Grootboekrekening"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        ),
                                    })
                                ),
                                'Type': _p_cc(
                                    $.__get_entry(
                                        'Type',
                                        ($) => abort(
                                            ['no such entry', "Type"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Type => {
                                                switch ($t) {
                                                    case 'Bonnetje':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Bonnetje', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Inkoop (met crediteur)':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Inkoop (met crediteur)', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Crediteur': _p_cc(
                                                                            $.__get_entry(
                                                                                'Crediteur',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Crediteur"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                        'Factuurnummer': _p_cc(
                                                                            $.__get_entry(
                                                                                'Factuurnummer',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Factuurnummer"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    case 'Loonheffing':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Loonheffing', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Ronde': _p_cc(
                                                                            $.__get_entry(
                                                                                'Ronde',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Ronde"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    case 'Salaris':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Salaris', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Ronde': _p_cc(
                                                                            $.__get_entry(
                                                                                'Ronde',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Ronde"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                        'Medewerker': _p_cc(
                                                                            $.__get_entry(
                                                                                'Medewerker',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Medewerker"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'Verkopen': _p_cc(
            $.__get_entry(
                'Verkopen',
                ($) => abort(
                    ['no such entry', "Verkopen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Afhandeling': _p_cc(
                                    $.__get_entry(
                                        'Afhandeling',
                                        ($) => abort(
                                            ['no such entry', "Afhandeling"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Afhandeling => {
                                                switch ($t) {
                                                    case 'Mutaties':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Mutaties', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Rekening courant':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Rekening courant', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Rekening courant': _p_cc(
                                                                            $.__get_entry(
                                                                                'Rekening courant',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Rekening courant"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Betalingstermijn': _p_cc(
                                    $.__get_entry(
                                        'Betalingstermijn',
                                        ($) => abort(
                                            ['no such entry', "Betalingstermijn"]
                                        )
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null]
                                        )
                                    )
                                ),
                                'BTW-periode': _p_cc(
                                    $.__get_entry(
                                        'BTW-periode',
                                        ($) => abort(
                                            ['no such entry', "BTW-periode"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'id': v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        ),
                                    })
                                ),
                                'Brondocument': _p_cc(
                                    $.__get_entry(
                                        'Brondocument',
                                        ($) => abort(
                                            ['no such entry', "Brondocument"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Brondocument => {
                                                switch ($t) {
                                                    case 'Toegevoegd':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Toegevoegd', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Document': _p_cc(
                                                                            $.__get_entry(
                                                                                'Document',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Document"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Debiteur': _p_cc(
                                    $.__get_entry(
                                        'Debiteur',
                                        ($) => abort(
                                            ['no such entry', "Debiteur"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'id': v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        ),
                                    })
                                ),
                                'Contracttype': _p_cc(
                                    $.__get_entry(
                                        'Contracttype',
                                        ($) => abort(
                                            ['no such entry', "Contracttype"]
                                        )
                                    ),
                                    ($) => _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Contracttype => {
                                                switch ($t) {
                                                    case 'Project':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Project', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Project': _p_cc(
                                                                            $.__get_entry(
                                                                                'Project',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Project"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                        'Offerte': _p_cc(
                                                                            $.__get_entry(
                                                                                'Offerte',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Offerte"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    case 'Licentieovereenkomst':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Licentieovereenkomst', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'Overeenkomst': _p_cc(
                                                                            $.__get_entry(
                                                                                'Overeenkomst',
                                                                                ($) => abort(
                                                                                    ['no such entry', "Overeenkomst"]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'id': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    )
                                ),
                                'Datum': _p_cc(
                                    $.__get_entry(
                                        'Datum',
                                        ($) => abort(
                                            ['no such entry', "Datum"]
                                        )
                                    ),
                                    ($) => v_deserialize_number.deserialize(
                                        v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        ),
                                        ($) => abort(
                                            ['not a valid number', null]
                                        )
                                    )
                                ),
                                'Regels': _p_cc(
                                    $.__get_entry(
                                        'Regels',
                                        ($) => abort(
                                            ['no such entry', "Regels"]
                                        )
                                    ),
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                ['expected a dictionary', null]
                                            )
                                        ).__d_map(
                                            ($, id) => ({
                                                'location': v_parse_tree_to_location.Value(
                                                    $
                                                )['start']['relative'],
                                                'entry': _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => ({
                                                        'BTW-regime': _p_cc(
                                                            $.__get_entry(
                                                                'BTW-regime',
                                                                ($) => abort(
                                                                    ['no such entry', "BTW-regime"]
                                                                )
                                                            ),
                                                            ($) => _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.BTW$mi_regime => {
                                                                        switch ($t) {
                                                                            case 'Intracommunautair':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Intracommunautair', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            case 'Standaard':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Standaard', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'BTW-categorie': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'BTW-categorie',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "BTW-categorie"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            case 'Binnenland: heffing verlegd':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Binnenland: heffing verlegd', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        'Bedrag exclusief BTW': _p_cc(
                                                            $.__get_entry(
                                                                'Bedrag exclusief BTW',
                                                                ($) => abort(
                                                                    ['no such entry', "Bedrag exclusief BTW"]
                                                                )
                                                            ),
                                                            ($) => v_deserialize_number.deserialize(
                                                                v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                ),
                                                                ($) => abort(
                                                                    ['not a valid number', null]
                                                                )
                                                            )
                                                        ),
                                                        'Contracttype': _p_cc(
                                                            $.__get_entry(
                                                                'Contracttype',
                                                                ($) => abort(
                                                                    ['no such entry', "Contracttype"]
                                                                )
                                                            ),
                                                            ($) => _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.Contracttype => {
                                                                        switch ($t) {
                                                                            case 'Project':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Project', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Opbrengst': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Opbrengst',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Opbrengst"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            case 'Los':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Los', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            case 'Licentieovereenkomst':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Licentieovereenkomst', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Periode': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Periode',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Periode"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        'Omschrijving': _p_cc(
                                                            $.__get_entry(
                                                                'Omschrijving',
                                                                ($) => abort(
                                                                    ['no such entry', "Omschrijving"]
                                                                )
                                                            ),
                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null]
                                                                )
                                                            )
                                                        ),
                                                        'Type': _p_cc(
                                                            $.__get_entry(
                                                                'Type',
                                                                ($) => abort(
                                                                    ['no such entry', "Type"]
                                                                )
                                                            ),
                                                            ($) => _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.Type => {
                                                                        switch ($t) {
                                                                            case 'Opbrengsten':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Opbrengsten', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Grootboekrekening': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Grootboekrekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Grootboekrekening"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            case 'Balans':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ({
                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'state': ['Balans', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Balans item': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'Balans item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Balans item"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null]
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                ),
                                                                                            })
                                                                                        )],
                                                                                    })
                                                                                )
                                                                            default:
                                                                                return abort(
                                                                                    ['unknown option', $['option']['value']]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        ),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
    })
)

export const Mutaties: t_signatures.Mutaties = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Verrekenpost mutaties': _p_cc(
            $.__get_entry(
                'Verrekenpost mutaties',
                ($) => abort(
                    ['no such entry', "Verrekenpost mutaties"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'Bedrag': _p_cc(
                                                $.__get_entry(
                                                    'Bedrag',
                                                    ($) => abort(
                                                        ['no such entry', "Bedrag"]
                                                    )
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null]
                                                    )
                                                )
                                            ),
                                            'Afhandeling': _p_cc(
                                                $.__get_entry(
                                                    'Afhandeling',
                                                    ($) => abort(
                                                        ['no such entry', "Afhandeling"]
                                                    )
                                                ),
                                                ($) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null]
                                                        )
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Mutaties.Verrekenpost_mutaties.dictionary.D.entry.dictionary.D.entry.Afhandeling => {
                                                            switch ($t) {
                                                                case 'Resultaat':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Resultaat', Balans_Resultaat_Mutatie(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                case 'Balans':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'location': v_parse_tree_to_location.Value(
                                                                                $
                                                                            )['start']['relative'],
                                                                            'state': ['Balans', _p_cc(
                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a state', null]
                                                                                    )
                                                                                ),
                                                                                ($) => _p.decide.text(
                                                                                    $['option']['value'],
                                                                                    ($t): t_out.Mutaties.Verrekenpost_mutaties.dictionary.D.entry.dictionary.D.entry.Afhandeling.state.Balans => {
                                                                                        switch ($t) {
                                                                                            case 'Informele rekening':
                                                                                                return _p_cc(
                                                                                                    $['value'],
                                                                                                    ($) => ({
                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                            $
                                                                                                        )['start']['relative'],
                                                                                                        'state': ['Informele rekening', _p_cc(
                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a group', null]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => ({
                                                                                                                'Informele rekening': _p_cc(
                                                                                                                    $.__get_entry(
                                                                                                                        'Informele rekening',
                                                                                                                        ($) => abort(
                                                                                                                            ['no such entry', "Informele rekening"]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'location': v_parse_tree_to_location.Value(
                                                                                                                            $
                                                                                                                        )['start']['relative'],
                                                                                                                        'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null]
                                                                                                                            )
                                                                                                                        ),
                                                                                                                    })
                                                                                                                ),
                                                                                                            })
                                                                                                        )],
                                                                                                    })
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    ['unknown option', $['option']['value']]
                                                                                                )
                                                                                        }
                                                                                    }
                                                                                )
                                                                            )],
                                                                        })
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                            ),
                                        })
                                    ),
                                })
                            ),
                        }),
                    })
                ),
            })
        ),
        'Bankrekening Mutatie Verwerkingen': _p_cc(
            $.__get_entry(
                'Bankrekening Mutatie Verwerkingen',
                ($) => abort(
                    ['no such entry', "Bankrekening Mutatie Verwerkingen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.dictionary.D.entry.dictionary.D.entry => {
                                                switch ($t) {
                                                    case 'Resultaat':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Resultaat', Balans_Resultaat_Mutatie(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'Balans':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['Balans', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a state', null]
                                                                        )
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['value'],
                                                                        ($t): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.dictionary.D.entry.dictionary.D.entry.state.Balans => {
                                                                            switch ($t) {
                                                                                case 'Informele rekening':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                $
                                                                                            )['start']['relative'],
                                                                                            'state': ['Informele rekening', _p_cc(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'Informele rekening': _p_cc(
                                                                                                        $.__get_entry(
                                                                                                            'Informele rekening',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "Informele rekening"]
                                                                                                            )
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null]
                                                                                                                )
                                                                                                            ),
                                                                                                        })
                                                                                                    ),
                                                                                                })
                                                                                            )],
                                                                                        })
                                                                                    )
                                                                                case 'Verrekenpost':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                $
                                                                                            )['start']['relative'],
                                                                                            'state': ['Verrekenpost', _p_cc(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'Verrekenpost': _p_cc(
                                                                                                        $.__get_entry(
                                                                                                            'Verrekenpost',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "Verrekenpost"]
                                                                                                            )
                                                                                                        ),
                                                                                                        ($) => ({
                                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null]
                                                                                                                )
                                                                                                            ),
                                                                                                        })
                                                                                                    ),
                                                                                                })
                                                                                            )],
                                                                                        })
                                                                                    )
                                                                                default:
                                                                                    return abort(
                                                                                        ['unknown option', $['option']['value']]
                                                                                    )
                                                                            }
                                                                        }
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']]
                                                        )
                                                }
                                            }
                                        )
                                    ),
                                })
                            ),
                        }),
                    })
                ),
            })
        ),
        'Memoriaal boekingen': _p_cc(
            $.__get_entry(
                'Memoriaal boekingen',
                ($) => abort(
                    ['no such entry', "Memoriaal boekingen"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'entry': _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'Bedrag': _p_cc(
                                                $.__get_entry(
                                                    'Bedrag',
                                                    ($) => abort(
                                                        ['no such entry', "Bedrag"]
                                                    )
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null]
                                                    )
                                                )
                                            ),
                                            'Datum': _p_cc(
                                                $.__get_entry(
                                                    'Datum',
                                                    ($) => abort(
                                                        ['no such entry', "Datum"]
                                                    )
                                                ),
                                                ($) => v_deserialize_number.deserialize(
                                                    v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                    ($) => abort(
                                                        ['not a valid number', null]
                                                    )
                                                )
                                            ),
                                            'Omschrijving': _p_cc(
                                                $.__get_entry(
                                                    'Omschrijving',
                                                    ($) => abort(
                                                        ['no such entry', "Omschrijving"]
                                                    )
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                )
                                            ),
                                            'Grootboekrekening': _p_cc(
                                                $.__get_entry(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"]
                                                    )
                                                ),
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'id': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    ),
                                                })
                                            ),
                                        })
                                    ),
                                })
                            ),
                        }),
                    })
                ),
            })
        ),
    })
)

export const Jaren: t_signatures.Jaren = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'Afgesloten': _p_cc(
                        $.__get_entry(
                            'Afgesloten',
                            ($) => abort(
                                ['no such entry', "Afgesloten"]
                            )
                        ),
                        ($) => _p_cc(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null]
                                )
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Jaren.dictionary.D.entry.Afgesloten => {
                                    switch ($t) {
                                        case 'Ja':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )],
                                                })
                                            )
                                        case 'Nee':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['Nee', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )],
                                                })
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']]
                                            )
                                    }
                                }
                            )
                        )
                    ),
                    'Startdatum boekjaar': _p_cc(
                        $.__get_entry(
                            'Startdatum boekjaar',
                            ($) => abort(
                                ['no such entry', "Startdatum boekjaar"]
                            )
                        ),
                        ($) => v_deserialize_number.deserialize(
                            v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                            ($) => abort(
                                ['not a valid number', null]
                            )
                        )
                    ),
                    'Grootboekrekeningen': _p_cc(
                        $.__get_entry(
                            'Grootboekrekeningen',
                            ($) => abort(
                                ['no such entry', "Grootboekrekeningen"]
                            )
                        ),
                        ($) => Grootboekrekeningen(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                    'Eerste boekjaar': _p_cc(
                        $.__get_entry(
                            'Eerste boekjaar',
                            ($) => abort(
                                ['no such entry', "Eerste boekjaar"]
                            )
                        ),
                        ($) => Eerste_boekjaar(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                    'Jaarbeheer': _p_cc(
                        $.__get_entry(
                            'Jaarbeheer',
                            ($) => abort(
                                ['no such entry', "Jaarbeheer"]
                            )
                        ),
                        ($) => Jaarbeheer(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                    'Handelstransacties': _p_cc(
                        $.__get_entry(
                            'Handelstransacties',
                            ($) => abort(
                                ['no such entry', "Handelstransacties"]
                            )
                        ),
                        ($) => Handelstransacties(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                    'Mutaties': _p_cc(
                        $.__get_entry(
                            'Mutaties',
                            ($) => abort(
                                ['no such entry', "Mutaties"]
                            )
                        ),
                        ($) => Mutaties(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                })
            ),
        })
    ),
})

export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Jaar': _p_cc(
            $.__get_entry(
                'Jaar',
                ($) => abort(
                    ['no such entry', "Jaar"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Optional(
                $,
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => ({
                    'location': v_parse_tree_to_location.Value(
                        $
                    )['start']['relative'],
                    'id': v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null]
                        )
                    ),
                })
            )
        ),
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Balans_Resultaat_Mutatie.type_ => {
                        switch ($t) {
                            case 'Inkoop':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['Inkoop', ({
                                            'location': v_parse_tree_to_location.Value(
                                                $
                                            )['start']['relative'],
                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                        })],
                                    })
                                )
                            case 'Verkoop':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['Verkoop', ({
                                            'location': v_parse_tree_to_location.Value(
                                                $
                                            )['start']['relative'],
                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                        })],
                                    })
                                )
                            case 'BTW-periode':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['BTW-periode', ({
                                            'location': v_parse_tree_to_location.Value(
                                                $
                                            )['start']['relative'],
                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                        })],
                                    })
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']]
                                )
                        }
                    }
                )
            )
        ),
    })
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Eerste_boekjaar => {
            switch ($t) {
                case 'Ja':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['Ja', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null]
                                )
                            )],
                        })
                    )
                case 'Nee':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['Nee', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'Vorig boekjaar': _p_cc(
                                        $.__get_entry(
                                            'Vorig boekjaar',
                                            ($) => abort(
                                                ['no such entry', "Vorig boekjaar"]
                                            )
                                        ),
                                        ($) => ({
                                            'location': v_parse_tree_to_location.Value(
                                                $
                                            )['start']['relative'],
                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                        })
                                    ),
                                })
                            )],
                        })
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)

export const Root: t_signatures.Root = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'Fiscaal': _p_cc(
            $.__get_entry(
                'Fiscaal',
                ($) => abort(
                    ['no such entry', "Fiscaal"]
                )
            ),
            ($) => Fiscaal(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'Categorieen': _p_cc(
            $.__get_entry(
                'Categorieen',
                ($) => abort(
                    ['no such entry', "Categorieen"]
                )
            ),
            ($) => Grootboek_Categorieen(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'Beheer': _p_cc(
            $.__get_entry(
                'Beheer',
                ($) => abort(
                    ['no such entry', "Beheer"]
                )
            ),
            ($) => Beheer(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'Jaren': _p_cc(
            $.__get_entry(
                'Jaren',
                ($) => abort(
                    ['no such entry', "Jaren"]
                )
            ),
            ($) => Jaren(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)
