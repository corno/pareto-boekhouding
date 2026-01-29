
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding_oude_model/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Bestandsnaam: t_signatures.Bestandsnaam = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        ['expected a text', null]
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
        'Bankrekeningen': _p_cc(
            $.__get_entry(
                'Bankrekeningen',
                ($) => abort(
                    ['no such entry', "Bankrekeningen"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => null
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
                        ($) => _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'Grootboekrekeningen': _p_cc(
                                    $.__get_entry(
                                        'Grootboekrekeningen',
                                        ($) => abort(
                                            ['no such entry', "Grootboekrekeningen"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )
                                                ),
                                                'Subcategorie': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorie',
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorie"]
                                                        )
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )
                                                ),
                                                'Zijde': _p_cc(
                                                    $.__get_entry(
                                                        'Zijde',
                                                        ($) => abort(
                                                            ['no such entry', "Zijde"]
                                                        )
                                                    ),
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                            })
                                        )
                                    )
                                ),
                                'Hoofdcategorieen': _p_cc(
                                    $.__get_entry(
                                        'Hoofdcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Hoofdcategorieen"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Subcategorieen': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorieen',
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorieen"]
                                                        )
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => _p_cc(
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
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null]
                                                                        )
                                                                    )
                                                                ),
                                                                'Subcategorie fiscus': _p_cc(
                                                                    $.__get_entry(
                                                                        'Subcategorie fiscus',
                                                                        ($) => abort(
                                                                            ['no such entry', "Subcategorie fiscus"]
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
                                                        )
                                                    )
                                                ),
                                            })
                                        )
                                    )
                                ),
                                'Hoofdcategorieen fiscus': _p_cc(
                                    $.__get_entry(
                                        'Hoofdcategorieen fiscus',
                                        ($) => abort(
                                            ['no such entry', "Hoofdcategorieen fiscus"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Subcategorieen': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorieen',
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorieen"]
                                                        )
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => null
                                                        )
                                                    )
                                                ),
                                            })
                                        )
                                    )
                                ),
                            })
                        )
                    ),
                    'BTW-categorieen': _p_cc(
                        $.__get_entry(
                            'BTW-categorieen',
                            ($) => abort(
                                ['no such entry', "BTW-categorieen"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                ['expected a dictionary', null]
                            )
                        ).__d_map(
                            ($, id) => _p_cc(
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
                                        ($) => _p_unreachable_code_path(
                                        )
                                    ),
                                })
                            )
                        )
                    ),
                    'Gebruikers': _p_cc(
                        $.__get_entry(
                            'Gebruikers',
                            ($) => abort(
                                ['no such entry', "Gebruikers"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                ['expected a dictionary', null]
                            )
                        ).__d_map(
                            ($, id) => _p_cc(
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
                            )
                        )
                    ),
                    'Huidige datum': _p_cc(
                        $.__get_entry(
                            'Huidige datum',
                            ($) => abort(
                                ['no such entry', "Huidige datum"]
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
                                'Correctietypes vennootschapsbelasting': _p_cc(
                                    $.__get_entry(
                                        'Correctietypes vennootschapsbelasting',
                                        ($) => abort(
                                            ['no such entry', "Correctietypes vennootschapsbelasting"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )
                                                ),
                                                'Subcategorie': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorie',
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorie"]
                                                        )
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )
                                                ),
                                                'Zijde': _p_cc(
                                                    $.__get_entry(
                                                        'Zijde',
                                                        ($) => abort(
                                                            ['no such entry', "Zijde"]
                                                        )
                                                    ),
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                            })
                                        )
                                    )
                                ),
                                'Hoofdcategorieen': _p_cc(
                                    $.__get_entry(
                                        'Hoofdcategorieen',
                                        ($) => abort(
                                            ['no such entry', "Hoofdcategorieen"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Subcategorieen': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorieen',
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorieen"]
                                                        )
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => _p_cc(
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
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null]
                                                                        )
                                                                    )
                                                                ),
                                                                'Subcategorie fiscus': _p_cc(
                                                                    $.__get_entry(
                                                                        'Subcategorie fiscus',
                                                                        ($) => abort(
                                                                            ['no such entry', "Subcategorie fiscus"]
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
                                                        )
                                                    )
                                                ),
                                            })
                                        )
                                    )
                                ),
                                'Hoofdcategorieen fiscus': _p_cc(
                                    $.__get_entry(
                                        'Hoofdcategorieen fiscus',
                                        ($) => abort(
                                            ['no such entry', "Hoofdcategorieen fiscus"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($, id) => _p_cc(
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
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Subcategorieen': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorieen',
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorieen"]
                                                        )
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null]
                                                        )
                                                    ).__d_map(
                                                        ($, id) => _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => null
                                                        )
                                                    )
                                                ),
                                            })
                                        )
                                    )
                                ),
                            })
                        )
                    ),
                })
            )
        ),
        'Informele rekeningen': _p_cc(
            $.__get_entry(
                'Informele rekeningen',
                ($) => abort(
                    ['no such entry', "Informele rekeningen"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => null
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
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
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
                            ($) => _p_unreachable_code_path(
                            )
                        ),
                        'Balans grootboekrekeningen': _p_cc(
                            $.__get_entry(
                                'Balans grootboekrekeningen',
                                ($) => abort(
                                    ['no such entry', "Balans grootboekrekeningen"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                        'Bankrekeningen': _p_cc(
                            $.__get_entry(
                                'Bankrekeningen',
                                ($) => abort(
                                    ['no such entry', "Bankrekeningen"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
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
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                        'Status': _p_cc(
                                                            $.__get_entry(
                                                                'Status',
                                                                ($) => abort(
                                                                    ['no such entry', "Status"]
                                                                )
                                                            ),
                                                            ($) => _p_unreachable_code_path(
                                                            )
                                                        ),
                                                    })
                                                )
                                            )
                                        ),
                                        'Nieuw': _p_cc(
                                            $.__get_entry(
                                                'Nieuw',
                                                ($) => abort(
                                                    ['no such entry', "Nieuw"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            )
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
                        'BTW periode saldo': _p_cc(
                            $.__get_entry(
                                'BTW periode saldo',
                                ($) => abort(
                                    ['no such entry', "BTW periode saldo"]
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
                                    'Grootboekrekening': _p_cc(
                                        $.__get_entry(
                                            'Grootboekrekening',
                                            ($) => abort(
                                                ['no such entry', "Grootboekrekening"]
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
                            )
                        ),
                        'BTW periodes': _p_cc(
                            $.__get_entry(
                                'BTW periodes',
                                ($) => abort(
                                    ['no such entry', "BTW periodes"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
                                                    v_unmarshalled_from_parse_tree.Group(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a group', null]
                                                        )
                                                    ),
                                                    ($) => null
                                                )
                                            )
                                        ),
                                        'Documenten': _p_cc(
                                            $.__get_entry(
                                                'Documenten',
                                                ($) => abort(
                                                    ['no such entry', "Documenten"]
                                                )
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                            ($) => Bestandsnaam(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                )
                                                            )
                                                        ),
                                                    })
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
                                        'Status': _p_cc(
                                            $.__get_entry(
                                                'Status',
                                                ($) => abort(
                                                    ['no such entry', "Status"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
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
                            ($) => _p_unreachable_code_path(
                            )
                        ),
                        'Grootboekrekening voor BTW afrondingen': _p_cc(
                            $.__get_entry(
                                'Grootboekrekening voor BTW afrondingen',
                                ($) => abort(
                                    ['no such entry', "Grootboekrekening voor BTW afrondingen"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'Grootboekrekening voor nog aan te geven BTW': _p_cc(
                            $.__get_entry(
                                'Grootboekrekening voor nog aan te geven BTW',
                                ($) => abort(
                                    ['no such entry', "Grootboekrekening voor nog aan te geven BTW"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'Grootboekrekening voor resultaat dit jaar': _p_cc(
                            $.__get_entry(
                                'Grootboekrekening voor resultaat dit jaar',
                                ($) => abort(
                                    ['no such entry', "Grootboekrekening voor resultaat dit jaar"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'Grootboekrekening voor winstreserve': _p_cc(
                            $.__get_entry(
                                'Grootboekrekening voor winstreserve',
                                ($) => abort(
                                    ['no such entry', "Grootboekrekening voor winstreserve"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
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
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            )
                                        ),
                                        'Nieuw': _p_cc(
                                            $.__get_entry(
                                                'Nieuw',
                                                ($) => abort(
                                                    ['no such entry', "Nieuw"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                        'Inkopen': _p_cc(
                            $.__get_entry(
                                'Inkopen',
                                ($) => abort(
                                    ['no such entry', "Inkopen"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                        'BTW-regime': _p_cc(
                                            $.__get_entry(
                                                'BTW-regime',
                                                ($) => abort(
                                                    ['no such entry', "BTW-regime"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                        'Brondocument': _p_cc(
                                            $.__get_entry(
                                                'Brondocument',
                                                ($) => abort(
                                                    ['no such entry', "Brondocument"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
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
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                            ($) => _p_unreachable_code_path(
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
                                                            ($) => _p_unreachable_code_path(
                                                            )
                                                        ),
                                                    })
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
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                        'Inkoop saldo': _p_cc(
                            $.__get_entry(
                                'Inkoop saldo',
                                ($) => abort(
                                    ['no such entry', "Inkoop saldo"]
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
                                    'Grootboekrekening': _p_cc(
                                        $.__get_entry(
                                            'Grootboekrekening',
                                            ($) => abort(
                                                ['no such entry', "Grootboekrekening"]
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
                            )
                        ),
                        'Overige balans items': _p_cc(
                            $.__get_entry(
                                'Overige balans items',
                                ($) => abort(
                                    ['no such entry', "Overige balans items"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            )
                                        ),
                                        'Memoriaal boekingen': _p_cc(
                                            $.__get_entry(
                                                'Memoriaal boekingen',
                                                ($) => abort(
                                                    ['no such entry', "Memoriaal boekingen"]
                                                )
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                        'Grootboekrekening': _p_cc(
                                                            $.__get_entry(
                                                                'Grootboekrekening',
                                                                ($) => abort(
                                                                    ['no such entry', "Grootboekrekening"]
                                                                )
                                                            ),
                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null]
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
                                                )
                                            )
                                        ),
                                        'Nieuw': _p_cc(
                                            $.__get_entry(
                                                'Nieuw',
                                                ($) => abort(
                                                    ['no such entry', "Nieuw"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                        'Resultaat grootboekrekeningen': _p_cc(
                            $.__get_entry(
                                'Resultaat grootboekrekeningen',
                                ($) => abort(
                                    ['no such entry', "Resultaat grootboekrekeningen"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ),
                                    ($) => null
                                )
                            )
                        ),
                        'Salarisrondes': _p_cc(
                            $.__get_entry(
                                'Salarisrondes',
                                ($) => abort(
                                    ['no such entry', "Salarisrondes"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ),
                                    ($) => null
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
                        'Verkoop saldo': _p_cc(
                            $.__get_entry(
                                'Verkoop saldo',
                                ($) => abort(
                                    ['no such entry', "Verkoop saldo"]
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
                                    'Grootboekrekening': _p_cc(
                                        $.__get_entry(
                                            'Grootboekrekening',
                                            ($) => abort(
                                                ['no such entry', "Grootboekrekening"]
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
                            )
                        ),
                        'Verkopen': _p_cc(
                            $.__get_entry(
                                'Verkopen',
                                ($) => abort(
                                    ['no such entry', "Verkopen"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => _p_unreachable_code_path(
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
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
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
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                        'Contracttype': _p_cc(
                                            $.__get_entry(
                                                'Contracttype',
                                                ($) => abort(
                                                    ['no such entry', "Contracttype"]
                                                )
                                            ),
                                            ($) => _p_unreachable_code_path(
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
                                        'Debiteur': _p_cc(
                                            $.__get_entry(
                                                'Debiteur',
                                                ($) => abort(
                                                    ['no such entry', "Debiteur"]
                                                )
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
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
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                            ($) => _p_unreachable_code_path(
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
                                                            ($) => _p_unreachable_code_path(
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
                                                            ($) => _p_unreachable_code_path(
                                                            )
                                                        ),
                                                    })
                                                )
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                        'Verrekenposten': _p_cc(
                            $.__get_entry(
                                'Verrekenposten',
                                ($) => abort(
                                    ['no such entry', "Verrekenposten"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ),
                                    ($) => ({
                                        'Mutaties': _p_cc(
                                            $.__get_entry(
                                                'Mutaties',
                                                ($) => abort(
                                                    ['no such entry', "Mutaties"]
                                                )
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                            ($) => _p_unreachable_code_path(
                                                            )
                                                        ),
                                                    })
                                                )
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                    })
                )
            )
        ),
        'Klanten': _p_cc(
            $.__get_entry(
                'Klanten',
                ($) => abort(
                    ['no such entry', "Klanten"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
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
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                )
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                        'Projecten': _p_cc(
                            $.__get_entry(
                                'Projecten',
                                ($) => abort(
                                    ['no such entry', "Projecten"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($, id) => _p_cc(
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
                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null]
                                                )
                                            ).__d_map(
                                                ($, id) => _p_cc(
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
                                                            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a dictionary', null]
                                                                )
                                                            ).__d_map(
                                                                ($, id) => _p_cc(
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
                                                                            ($) => _p_unreachable_code_path(
                                                                            )
                                                                        ),
                                                                    })
                                                                )
                                                            )
                                                        ),
                                                    })
                                                )
                                            )
                                        ),
                                    })
                                )
                            )
                        ),
                    })
                )
            )
        ),
        'Leveranciers': _p_cc(
            $.__get_entry(
                'Leveranciers',
                ($) => abort(
                    ['no such entry', "Leveranciers"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => null
                )
            )
        ),
        'Medewerkers': _p_cc(
            $.__get_entry(
                'Medewerkers',
                ($) => abort(
                    ['no such entry', "Medewerkers"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($, id) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => null
                )
            )
        ),
    })
)
