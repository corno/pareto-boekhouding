    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_list_from_text from "pareto-core/dist/_p_list_from_text"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/unmarshall"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/data"
    
    import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"
    
    import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"
    
    import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
    
    import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"
    
    export const Root: t_signatures.Root = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'Bankrekeningen': _p_change_context(
                $.__get_entry(
                    'Bankrekeningen',
                    ($) => abort(
                        ['no such entry', "Bankrekeningen"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => null,
                    ),
                ),
            ),
            'Beheer': _p_change_context(
                $.__get_entry(
                    'Beheer',
                    ($) => abort(
                        ['no such entry', "Beheer"],
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
                            $.__get_entry(
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
                                    'Grootboekrekeningen': _p_change_context(
                                        $.__get_entry(
                                            'Grootboekrekeningen',
                                            ($) => abort(
                                                ['no such entry', "Grootboekrekeningen"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Hoofdcategorie': _p_change_context(
                                                        $.__get_entry(
                                                            'Hoofdcategorie',
                                                            ($) => abort(
                                                                ['no such entry', "Hoofdcategorie"],
                                                            ),
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    ),
                                                    'Subcategorie': _p_change_context(
                                                        $.__get_entry(
                                                            'Subcategorie',
                                                            ($) => abort(
                                                                ['no such entry', "Subcategorie"],
                                                            ),
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    ),
                                                    'Zijde': _p_change_context(
                                                        $.__get_entry(
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
                                                                ($t): t_out.Root.Beheer.Balans.Grootboekrekeningen.D.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Activa', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
                                                                            )
                                                                        case 'Passiva':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Passiva', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
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
                                        ),
                                    ),
                                    'Hoofdcategorieen': _p_change_context(
                                        $.__get_entry(
                                            'Hoofdcategorieen',
                                            ($) => abort(
                                                ['no such entry', "Hoofdcategorieen"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Zijde': _p_change_context(
                                                        $.__get_entry(
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
                                                                ($t): t_out.Root.Beheer.Balans.Hoofdcategorieen.D.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Activa', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
                                                                            )
                                                                        case 'Passiva':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Passiva', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
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
                                                        $.__get_entry(
                                                            'Subcategorieen',
                                                            ($) => abort(
                                                                ['no such entry', "Subcategorieen"],
                                                            ),
                                                        ),
                                                        ($) => _p.dictionary.map(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a dictionary', null],
                                                                ),
                                                            ),
                                                            ($, id) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'Hoofdcategorie fiscus': _p_change_context(
                                                                        $.__get_entry(
                                                                            'Hoofdcategorie fiscus',
                                                                            ($) => abort(
                                                                                ['no such entry', "Hoofdcategorie fiscus"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'Subcategorie fiscus': _p_change_context(
                                                                        $.__get_entry(
                                                                            'Subcategorie fiscus',
                                                                            ($) => abort(
                                                                                ['no such entry', "Subcategorie fiscus"],
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
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                    'Hoofdcategorieen fiscus': _p_change_context(
                                        $.__get_entry(
                                            'Hoofdcategorieen fiscus',
                                            ($) => abort(
                                                ['no such entry', "Hoofdcategorieen fiscus"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Zijde': _p_change_context(
                                                        $.__get_entry(
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
                                                                ($t): t_out.Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Activa':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Activa', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
                                                                            )
                                                                        case 'Passiva':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Passiva', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
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
                                                        $.__get_entry(
                                                            'Subcategorieen',
                                                            ($) => abort(
                                                                ['no such entry', "Subcategorieen"],
                                                            ),
                                                        ),
                                                        ($) => _p.dictionary.map(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a dictionary', null],
                                                                ),
                                                            ),
                                                            ($, id) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => null,
                                                            ),
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                }),
                            ),
                        ),
                        'BTW-categorieen': _p_change_context(
                            $.__get_entry(
                                'BTW-categorieen',
                                ($) => abort(
                                    ['no such entry', "BTW-categorieen"],
                                ),
                            ),
                            ($) => _p.dictionary.map(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                                ($, id) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'BTW-heffing': _p_change_context(
                                            $.__get_entry(
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
                                                    ($t): t_out.Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                                        switch ($t) {
                                                            case 'Ja':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['Ja', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'BTW-promillage': _p_change_context(
                                                                                $.__get_entry(
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
                                                                )
                                                            case 'Nee':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['Nee', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => null,
                                                                    )],
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
                            ),
                        ),
                        'Gebruikers': _p_change_context(
                            $.__get_entry(
                                'Gebruikers',
                                ($) => abort(
                                    ['no such entry', "Gebruikers"],
                                ),
                            ),
                            ($) => _p.dictionary.map(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null],
                                    ),
                                ),
                                ($, id) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'Volledige naam': _p_change_context(
                                            $.__get_entry(
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
                                            $.__get_entry(
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
                            ),
                        ),
                        'Huidige datum': _p_change_context(
                            $.__get_entry(
                                'Huidige datum',
                                ($) => abort(
                                    ['no such entry', "Huidige datum"],
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
                        'Resultaat': _p_change_context(
                            $.__get_entry(
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
                                    'Correctietypes vennootschapsbelasting': _p_change_context(
                                        $.__get_entry(
                                            'Correctietypes vennootschapsbelasting',
                                            ($) => abort(
                                                ['no such entry', "Correctietypes vennootschapsbelasting"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Te corrigeren promillage': _p_change_context(
                                                        $.__get_entry(
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
                                        ),
                                    ),
                                    'Grootboekrekeningen': _p_change_context(
                                        $.__get_entry(
                                            'Grootboekrekeningen',
                                            ($) => abort(
                                                ['no such entry', "Grootboekrekeningen"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Hoofdcategorie': _p_change_context(
                                                        $.__get_entry(
                                                            'Hoofdcategorie',
                                                            ($) => abort(
                                                                ['no such entry', "Hoofdcategorie"],
                                                            ),
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    ),
                                                    'Subcategorie': _p_change_context(
                                                        $.__get_entry(
                                                            'Subcategorie',
                                                            ($) => abort(
                                                                ['no such entry', "Subcategorie"],
                                                            ),
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    ),
                                                    'Zijde': _p_change_context(
                                                        $.__get_entry(
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
                                                                ($t): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Kosten', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => ({
                                                                                        'Correctie op vennootschapsbelasting': _p_change_context(
                                                                                            $.__get_entry(
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
                                                                                                    ($t): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                        switch ($t) {
                                                                                                            case 'Ja':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ['Ja', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'Correctietype': _p_change_context(
                                                                                                                                $.__get_entry(
                                                                                                                                    'Correctietype',
                                                                                                                                    ($) => abort(
                                                                                                                                        ['no such entry', "Correctietype"],
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
                                                                                                                )
                                                                                                            case 'Nee':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ['Nee', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a group', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => null,
                                                                                                                    )],
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
                                                                            )
                                                                        case 'Opbrengsten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Opbrengsten', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
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
                                        ),
                                    ),
                                    'Hoofdcategorieen': _p_change_context(
                                        $.__get_entry(
                                            'Hoofdcategorieen',
                                            ($) => abort(
                                                ['no such entry', "Hoofdcategorieen"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Zijde': _p_change_context(
                                                        $.__get_entry(
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
                                                                ($t): t_out.Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Kosten', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
                                                                            )
                                                                        case 'Opbrengsten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Opbrengsten', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
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
                                                        $.__get_entry(
                                                            'Subcategorieen',
                                                            ($) => abort(
                                                                ['no such entry', "Subcategorieen"],
                                                            ),
                                                        ),
                                                        ($) => _p.dictionary.map(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a dictionary', null],
                                                                ),
                                                            ),
                                                            ($, id) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    'Hoofdcategorie fiscus': _p_change_context(
                                                                        $.__get_entry(
                                                                            'Hoofdcategorie fiscus',
                                                                            ($) => abort(
                                                                                ['no such entry', "Hoofdcategorie fiscus"],
                                                                            ),
                                                                        ),
                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'Subcategorie fiscus': _p_change_context(
                                                                        $.__get_entry(
                                                                            'Subcategorie fiscus',
                                                                            ($) => abort(
                                                                                ['no such entry', "Subcategorie fiscus"],
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
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                    'Hoofdcategorieen fiscus': _p_change_context(
                                        $.__get_entry(
                                            'Hoofdcategorieen fiscus',
                                            ($) => abort(
                                                ['no such entry', "Hoofdcategorieen fiscus"],
                                            ),
                                        ),
                                        ($) => _p.dictionary.map(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    ['expected a dictionary', null],
                                                ),
                                            ),
                                            ($, id) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'Zijde': _p_change_context(
                                                        $.__get_entry(
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
                                                                ($t): t_out.Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde => {
                                                                    switch ($t) {
                                                                        case 'Kosten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Kosten', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
                                                                            )
                                                                        case 'Opbrengsten':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['Opbrengsten', _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => null,
                                                                                )],
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
                                                        $.__get_entry(
                                                            'Subcategorieen',
                                                            ($) => abort(
                                                                ['no such entry', "Subcategorieen"],
                                                            ),
                                                        ),
                                                        ($) => _p.dictionary.map(
                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a dictionary', null],
                                                                ),
                                                            ),
                                                            ($, id) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => null,
                                                            ),
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                }),
                            ),
                        ),
                    }),
                ),
            ),
            'Informele rekeningen': _p_change_context(
                $.__get_entry(
                    'Informele rekeningen',
                    ($) => abort(
                        ['no such entry', "Informele rekeningen"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => null,
                    ),
                ),
            ),
            'Jaren': _p_change_context(
                $.__get_entry(
                    'Jaren',
                    ($) => abort(
                        ['no such entry', "Jaren"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => ({
                            'Afgesloten': _p_change_context(
                                $.__get_entry(
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
                                        ($t): t_out.Root.Jaren.D.Afgesloten => {
                                            switch ($t) {
                                                case 'Ja':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['Ja', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => null,
                                                        )],
                                                    )
                                                case 'Nee':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['Nee', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => null,
                                                        )],
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
                            'Balans grootboekrekeningen': _p_change_context(
                                $.__get_entry(
                                    'Balans grootboekrekeningen',
                                    ($) => abort(
                                        ['no such entry', "Balans grootboekrekeningen"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Type': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Balans_grootboekrekeningen.D.Type => {
                                                            switch ($t) {
                                                                case 'Bankrekening':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Bankrekening', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Overig':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Overig', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Informele rekening':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Informele rekening', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
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
                                ),
                            ),
                            'Bankrekeningen': _p_change_context(
                                $.__get_entry(
                                    'Bankrekeningen',
                                    ($) => abort(
                                        ['no such entry', "Bankrekeningen"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_change_context(
                                                $.__get_entry(
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
                                                $.__get_entry(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Mutaties': _p_change_context(
                                                $.__get_entry(
                                                    'Mutaties',
                                                    ($) => abort(
                                                        ['no such entry', "Mutaties"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Bedrag': _p_change_context(
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status => {
                                                                            switch ($t) {
                                                                                case 'Nog te verwerken':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Nog te verwerken', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => null,
                                                                                        )],
                                                                                    )
                                                                                case 'Verwerkt':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Verwerkt', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Afhandeling': _p_change_context(
                                                                                                    $.__get_entry(
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
                                                                                                            ($t): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.Verwerkt.Afhandeling => {
                                                                                                                switch ($t) {
                                                                                                                    case 'Inkoop':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['Inkoop', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a group', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'Jaar': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Jaar',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Jaar"],
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                ['expected a text', null],
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'Inkoop': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Inkoop',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Inkoop"],
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
                                                                                                                        )
                                                                                                                    case 'Verrekenpost':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['Verrekenpost', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a group', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'Verrekenpost': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Verrekenpost',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Verrekenpost"],
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
                                                                                                                        )
                                                                                                                    case 'BTW-periode':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['BTW-periode', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a group', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'Jaar': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Jaar',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Jaar"],
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                ['expected a text', null],
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'BTW-periode': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'BTW-periode',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "BTW-periode"],
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
                                                                                                                        )
                                                                                                                    case 'Verkoop':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['Verkoop', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a group', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'Jaar': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Jaar',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Jaar"],
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                ['expected a text', null],
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'Verkoop': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Verkoop',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Verkoop"],
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
                                                                                                                        )
                                                                                                                    case 'Informele rekening':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ['Informele rekening', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a group', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => ({
                                                                                                                                    'Informele rekening': _p_change_context(
                                                                                                                                        $.__get_entry(
                                                                                                                                            'Informele rekening',
                                                                                                                                            ($) => abort(
                                                                                                                                                ['no such entry', "Informele rekening"],
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
                                                ),
                                            ),
                                            'Nieuw': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Bankrekeningen.D.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Jaar': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Jaar',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Jaar"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'Rekening': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Rekening',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Rekening"],
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
                                ),
                            ),
                            'Beginsaldo nog aan te geven BTW': _p_change_context(
                                $.__get_entry(
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
                                $.__get_entry(
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
                            'BTW periode saldo': _p_change_context(
                                $.__get_entry(
                                    'BTW periode saldo',
                                    ($) => abort(
                                        ['no such entry', "BTW periode saldo"],
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
                                        'Grootboekrekening': _p_change_context(
                                            $.__get_entry(
                                                'Grootboekrekening',
                                                ($) => abort(
                                                    ['no such entry', "Grootboekrekening"],
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
                            ),
                            'BTW periodes': _p_change_context(
                                $.__get_entry(
                                    'BTW periodes',
                                    ($) => abort(
                                        ['no such entry', "BTW periodes"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            '1. BTW-categorieen': _p_change_context(
                                                $.__get_entry(
                                                    '1. BTW-categorieen',
                                                    ($) => abort(
                                                        ['no such entry', "1. BTW-categorieen"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => null,
                                                    ),
                                                ),
                                            ),
                                            'Documenten': _p_change_context(
                                                $.__get_entry(
                                                    'Documenten',
                                                    ($) => abort(
                                                        ['no such entry', "Documenten"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Bestand': _p_change_context(
                                                                $.__get_entry(
                                                                    'Bestand',
                                                                    ($) => abort(
                                                                        ['no such entry', "Bestand"],
                                                                    ),
                                                                ),
                                                                ($) => Bestandsnaam(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            'Omschrijving': _p_change_context(
                                                $.__get_entry(
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
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.BTW_periodes.D.Status => {
                                                            switch ($t) {
                                                                case 'Aangegeven':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Aangegeven', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Afronding': _p_change_context(
                                                                                    $.__get_entry(
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
                                                                                    $.__get_entry(
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
                                                                                    $.__get_entry(
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
                                                                    )
                                                                case 'Openstaand':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Openstaand', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
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
                                ),
                            ),
                            'Eerste boekjaar': _p_change_context(
                                $.__get_entry(
                                    'Eerste boekjaar',
                                    ($) => abort(
                                        ['no such entry', "Eerste boekjaar"],
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
                                        ($t): t_out.Root.Jaren.D.Eerste_boekjaar => {
                                            switch ($t) {
                                                case 'Ja':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['Ja', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => null,
                                                        )],
                                                    )
                                                case 'Nee':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['Nee', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'Vorig boekjaar': _p_change_context(
                                                                    $.__get_entry(
                                                                        'Vorig boekjaar',
                                                                        ($) => abort(
                                                                            ['no such entry', "Vorig boekjaar"],
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
                            'Grootboekrekening voor BTW afrondingen': _p_change_context(
                                $.__get_entry(
                                    'Grootboekrekening voor BTW afrondingen',
                                    ($) => abort(
                                        ['no such entry', "Grootboekrekening voor BTW afrondingen"],
                                    ),
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                            'Grootboekrekening voor nog aan te geven BTW': _p_change_context(
                                $.__get_entry(
                                    'Grootboekrekening voor nog aan te geven BTW',
                                    ($) => abort(
                                        ['no such entry', "Grootboekrekening voor nog aan te geven BTW"],
                                    ),
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                            'Grootboekrekening voor resultaat dit jaar': _p_change_context(
                                $.__get_entry(
                                    'Grootboekrekening voor resultaat dit jaar',
                                    ($) => abort(
                                        ['no such entry', "Grootboekrekening voor resultaat dit jaar"],
                                    ),
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                            'Grootboekrekening voor winstreserve': _p_change_context(
                                $.__get_entry(
                                    'Grootboekrekening voor winstreserve',
                                    ($) => abort(
                                        ['no such entry', "Grootboekrekening voor winstreserve"],
                                    ),
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                            'Informele rekeningen': _p_change_context(
                                $.__get_entry(
                                    'Informele rekeningen',
                                    ($) => abort(
                                        ['no such entry', "Informele rekeningen"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_change_context(
                                                $.__get_entry(
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
                                                $.__get_entry(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Nieuw': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Informele_rekeningen.D.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Jaar': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Jaar',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Jaar"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'Rekening': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Rekening',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Rekening"],
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
                                ),
                            ),
                            'Inkopen': _p_change_context(
                                $.__get_entry(
                                    'Inkopen',
                                    ($) => abort(
                                        ['no such entry', "Inkopen"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Afhandeling': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Inkopen.D.Afhandeling => {
                                                            switch ($t) {
                                                                case 'Mutaties':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Mutaties', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Rekening courant':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Rekening courant', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Rekening courant': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Rekening courant',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Rekening courant"],
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
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Inkopen.D.BTW$mi_regime => {
                                                            switch ($t) {
                                                                case 'Binnenland: heffing verlegd':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Binnenland: heffing verlegd', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Geen BTW van toepassing':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Geen BTW van toepassing', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'BTW-periode': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'BTW-periode',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "BTW-periode"],
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
                                                                    )
                                                                case 'Import van buiten de EU':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Import van buiten de EU', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Intracommunautair':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Intracommunautair', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Standaard':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Standaard', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'BTW-periode': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'BTW-periode',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "BTW-periode"],
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
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Inkopen.D.Brondocument => {
                                                            switch ($t) {
                                                                case 'Toegevoegd':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Toegevoegd', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Document': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Document',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Document"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Bestandsnaam(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    )
                                                                case 'Niet van toepassing':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Niet van toepassing', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Ontbreekt':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ontbreekt', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Nog toevoegen':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nog toevoegen', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
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
                                                $.__get_entry(
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
                                                $.__get_entry(
                                                    'Regels',
                                                    ($) => abort(
                                                        ['no such entry', "Regels"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Bedrag': _p_change_context(
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Bedrag => {
                                                                            switch ($t) {
                                                                                case 'Bekend':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Bekend', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'BTW-bedrag': _p_change_context(
                                                                                                    $.__get_entry(
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
                                                                                                    $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Type => {
                                                                            switch ($t) {
                                                                                case 'Balans':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Balans', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Balans item': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Balans item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Balans item"],
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
                                                                                    )
                                                                                case 'Kosten':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Kosten', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Grootboekrekening': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Grootboekrekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Grootboekrekening"],
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
                                                ),
                                            ),
                                            'Type': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Inkopen.D.Type => {
                                                            switch ($t) {
                                                                case 'Bonnetje':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Bonnetje', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Inkoop (met crediteur)':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Inkoop (met crediteur)', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Crediteur': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Crediteur',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Crediteur"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'Factuurnummer': _p_change_context(
                                                                                    $.__get_entry(
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
                                                                    )
                                                                case 'Loonheffing':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Loonheffing', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Ronde': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Ronde',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Ronde"],
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
                                                                    )
                                                                case 'Salaris':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Salaris', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Ronde': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Ronde',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Ronde"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'Medewerker': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Medewerker',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Medewerker"],
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
                                ),
                            ),
                            'Inkoop saldo': _p_change_context(
                                $.__get_entry(
                                    'Inkoop saldo',
                                    ($) => abort(
                                        ['no such entry', "Inkoop saldo"],
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
                                        'Grootboekrekening': _p_change_context(
                                            $.__get_entry(
                                                'Grootboekrekening',
                                                ($) => abort(
                                                    ['no such entry', "Grootboekrekening"],
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
                            ),
                            'Overige balans items': _p_change_context(
                                $.__get_entry(
                                    'Overige balans items',
                                    ($) => abort(
                                        ['no such entry', "Overige balans items"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Beginsaldo': _p_change_context(
                                                $.__get_entry(
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
                                                $.__get_entry(
                                                    'Grootboekrekening',
                                                    ($) => abort(
                                                        ['no such entry', "Grootboekrekening"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Memoriaal boekingen': _p_change_context(
                                                $.__get_entry(
                                                    'Memoriaal boekingen',
                                                    ($) => abort(
                                                        ['no such entry', "Memoriaal boekingen"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Bedrag': _p_change_context(
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                            'Grootboekrekening': _p_change_context(
                                                                $.__get_entry(
                                                                    'Grootboekrekening',
                                                                    ($) => abort(
                                                                        ['no such entry', "Grootboekrekening"],
                                                                    ),
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                ),
                                                            ),
                                                            'Omschrijving': _p_change_context(
                                                                $.__get_entry(
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
                                                ),
                                            ),
                                            'Nieuw': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Overige_balans_items.D.Nieuw => {
                                                            switch ($t) {
                                                                case 'Ja':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Ja', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Nee':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Nee', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Jaar': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Jaar',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Jaar"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'Balans item': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Balans item',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Balans item"],
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
                                ),
                            ),
                            'Resultaat grootboekrekeningen': _p_change_context(
                                $.__get_entry(
                                    'Resultaat grootboekrekeningen',
                                    ($) => abort(
                                        ['no such entry', "Resultaat grootboekrekeningen"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => null,
                                    ),
                                ),
                            ),
                            'Salarisrondes': _p_change_context(
                                $.__get_entry(
                                    'Salarisrondes',
                                    ($) => abort(
                                        ['no such entry', "Salarisrondes"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => null,
                                    ),
                                ),
                            ),
                            'Startdatum boekjaar': _p_change_context(
                                $.__get_entry(
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
                            'Verkoop saldo': _p_change_context(
                                $.__get_entry(
                                    'Verkoop saldo',
                                    ($) => abort(
                                        ['no such entry', "Verkoop saldo"],
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
                                        'Grootboekrekening': _p_change_context(
                                            $.__get_entry(
                                                'Grootboekrekening',
                                                ($) => abort(
                                                    ['no such entry', "Grootboekrekening"],
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
                            ),
                            'Verkopen': _p_change_context(
                                $.__get_entry(
                                    'Verkopen',
                                    ($) => abort(
                                        ['no such entry', "Verkopen"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Afhandeling': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Verkopen.D.Afhandeling => {
                                                            switch ($t) {
                                                                case 'Mutaties':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Mutaties', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => null,
                                                                        )],
                                                                    )
                                                                case 'Rekening courant':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Rekening courant', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Rekening courant': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Rekening courant',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Rekening courant"],
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
                                                $.__get_entry(
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
                                                $.__get_entry(
                                                    'BTW-periode',
                                                    ($) => abort(
                                                        ['no such entry', "BTW-periode"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Brondocument': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Verkopen.D.Brondocument => {
                                                            switch ($t) {
                                                                case 'Toegevoegd':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Toegevoegd', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Document': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Document',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Document"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => Bestandsnaam(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
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
                                            'Contracttype': _p_change_context(
                                                $.__get_entry(
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
                                                        ($t): t_out.Root.Jaren.D.Verkopen.D.Contracttype => {
                                                            switch ($t) {
                                                                case 'Project':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Project', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Project': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Project',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Project"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'Offerte': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Offerte',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Offerte"],
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
                                                                    )
                                                                case 'Licentieovereenkomst':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['Licentieovereenkomst', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'Overeenkomst': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'Overeenkomst',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "Overeenkomst"],
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
                                                $.__get_entry(
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
                                            'Debiteur': _p_change_context(
                                                $.__get_entry(
                                                    'Debiteur',
                                                    ($) => abort(
                                                        ['no such entry', "Debiteur"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'Regels': _p_change_context(
                                                $.__get_entry(
                                                    'Regels',
                                                    ($) => abort(
                                                        ['no such entry', "Regels"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'BTW-regime': _p_change_context(
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                                            switch ($t) {
                                                                                case 'Intracommunautair':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Intracommunautair', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => null,
                                                                                        )],
                                                                                    )
                                                                                case 'Standaard':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Standaard', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'BTW-categorie': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'BTW-categorie',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "BTW-categorie"],
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
                                                                                    )
                                                                                case 'Binnenland: heffing verlegd':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Binnenland: heffing verlegd', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => null,
                                                                                        )],
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
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Contracttype => {
                                                                            switch ($t) {
                                                                                case 'Project':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Project', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Opbrengst': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Opbrengst',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Opbrengst"],
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
                                                                                    )
                                                                                case 'Los':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Los', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => null,
                                                                                        )],
                                                                                    )
                                                                                case 'Licentieovereenkomst':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Licentieovereenkomst', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Periode': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Periode',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Periode"],
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
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Type => {
                                                                            switch ($t) {
                                                                                case 'Opbrengsten':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Opbrengsten', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Grootboekrekening': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Grootboekrekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Grootboekrekening"],
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
                                                                                    )
                                                                                case 'Balans':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Balans', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Balans item': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Balans item',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Balans item"],
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
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                            'Verrekenposten': _p_change_context(
                                $.__get_entry(
                                    'Verrekenposten',
                                    ($) => abort(
                                        ['no such entry', "Verrekenposten"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Mutaties': _p_change_context(
                                                $.__get_entry(
                                                    'Mutaties',
                                                    ($) => abort(
                                                        ['no such entry', "Mutaties"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Bedrag': _p_change_context(
                                                                $.__get_entry(
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
                                                                $.__get_entry(
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
                                                                        ($t): t_out.Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                                            switch ($t) {
                                                                                case 'Inkoop':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Inkoop', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Jaar': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Jaar',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Jaar"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'Inkoop': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Inkoop',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Inkoop"],
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
                                                                                    )
                                                                                case 'Informele rekening':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Informele rekening', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Informele rekening': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Informele rekening',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Informele rekening"],
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
                                                                                    )
                                                                                case 'Verkoop':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['Verkoop', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Jaar': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Jaar',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Jaar"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'Verkoop': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Verkoop',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Verkoop"],
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
                                                                                    )
                                                                                case 'BTW-periode':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['BTW-periode', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'Jaar': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'Jaar',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "Jaar"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'BTW-periode': _p_change_context(
                                                                                                    $.__get_entry(
                                                                                                        'BTW-periode',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "BTW-periode"],
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
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        }),
                    ),
                ),
            ),
            'Klanten': _p_change_context(
                $.__get_entry(
                    'Klanten',
                    ($) => abort(
                        ['no such entry', "Klanten"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => ({
                            'Licentieovereenkomsten': _p_change_context(
                                $.__get_entry(
                                    'Licentieovereenkomsten',
                                    ($) => abort(
                                        ['no such entry', "Licentieovereenkomsten"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Periodes': _p_change_context(
                                                $.__get_entry(
                                                    'Periodes',
                                                    ($) => abort(
                                                        ['no such entry', "Periodes"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Bedrag': _p_change_context(
                                                                $.__get_entry(
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
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                            'Projecten': _p_change_context(
                                $.__get_entry(
                                    'Projecten',
                                    ($) => abort(
                                        ['no such entry', "Projecten"],
                                    ),
                                ),
                                ($) => _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null],
                                        ),
                                    ),
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'Offertes': _p_change_context(
                                                $.__get_entry(
                                                    'Offertes',
                                                    ($) => abort(
                                                        ['no such entry', "Offertes"],
                                                    ),
                                                ),
                                                ($) => _p.dictionary.map(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a dictionary', null],
                                                        ),
                                                    ),
                                                    ($, id) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'Opbrengsten': _p_change_context(
                                                                $.__get_entry(
                                                                    'Opbrengsten',
                                                                    ($) => abort(
                                                                        ['no such entry', "Opbrengsten"],
                                                                    ),
                                                                ),
                                                                ($) => _p.dictionary.map(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a dictionary', null],
                                                                        ),
                                                                    ),
                                                                    ($, id) => _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'Type': _p_change_context(
                                                                                $.__get_entry(
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
                                                                                        ($t): t_out.Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                            switch ($t) {
                                                                                                case 'Project':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['Project', _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a group', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => ({
                                                                                                                'Bedrag': _p_change_context(
                                                                                                                    $.__get_entry(
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
                                                                                                                    $.__get_entry(
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
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        }),
                    ),
                ),
            ),
            'Leveranciers': _p_change_context(
                $.__get_entry(
                    'Leveranciers',
                    ($) => abort(
                        ['no such entry', "Leveranciers"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => null,
                    ),
                ),
            ),
            'Medewerkers': _p_change_context(
                $.__get_entry(
                    'Medewerkers',
                    ($) => abort(
                        ['no such entry', "Medewerkers"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => null,
                    ),
                ),
            ),
        }),
    )
    
    export const Bestandsnaam: t_signatures.Bestandsnaam = ($, abort) => v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    )
