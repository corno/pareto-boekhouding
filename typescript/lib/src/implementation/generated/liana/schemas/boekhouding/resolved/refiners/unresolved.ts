
import * as _p from 'pareto-core/dist/assign'
import _p_create_symbol from 'pareto-core/dist/_p_create_symbol'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as _p_sl from 'pareto-core/dist/select_static_lookup'

import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_out from "../../../../../../../interface/generated/liana/schemas/boekhouding/data/resolved"

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/signatures/resolved/refiners/unresolved"

export const Fiscaal: t_signatures.Fiscaal = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Balans_Hoofdcategorieen = _p_change_context(
            $['Balans Hoofdcategorieen'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Fiscaal.Balans_Hoofdcategorieen.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Zijde = _p_change_context(
                                $['Zijde'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Activa', _p_create_symbol()],
                                                        )
                                                    case 'Passiva':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Passiva', _p_create_symbol()],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = _p_change_context(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p_create_symbol(),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Resultaat_Hoofdcategorieen = _p_change_context(
            $['Resultaat Hoofdcategorieen'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Zijde = _p_change_context(
                                $['Zijde'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Kosten', _p_create_symbol()],
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Opbrengsten', _p_create_symbol()],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = _p_change_context(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p_create_symbol(),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Balans Hoofdcategorieen': prop_Balans_Hoofdcategorieen,
            'Resultaat Hoofdcategorieen': prop_Resultaat_Hoofdcategorieen,
        }
    },
)

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Correctietypes_vennootschapsbelasting = _p_change_context(
            $['Correctietypes vennootschapsbelasting'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Te_corrigeren_promillage = _p_change_context(
                                $['Te corrigeren promillage'],
                                ($) => $,
                            )
                            return {
                                'Te corrigeren promillage': prop_Te_corrigeren_promillage,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Balans = _p_change_context(
            $['Balans'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Grootboek_Categorieen.Balans.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Zijde = _p_change_context(
                                $['Zijde'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Grootboek_Categorieen.Balans.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Activa', _p_create_symbol()],
                                                        )
                                                    case 'Passiva':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Passiva', _p_create_symbol()],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = _p_change_context(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Grootboek_Categorieen.Balans.D.Subcategorieen.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Hoofdcategorie_fiscus = _p_change_context(
                                                    $['Hoofdcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            $p['Fiscaal']['Balans Hoofdcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )

                                                const prop_Subcategorie_fiscus = _p_change_context(
                                                    $['Subcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            prop_Hoofdcategorie_fiscus['l entry']['Subcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )
                                                return {
                                                    'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Resultaat = _p_change_context(
            $['Resultaat'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Grootboek_Categorieen.Resultaat.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Zijde = _p_change_context(
                                $['Zijde'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Grootboek_Categorieen.Resultaat.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Kosten', _p_create_symbol()],
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Opbrengsten', _p_create_symbol()],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = _p_change_context(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Grootboek_Categorieen.Resultaat.D.Subcategorieen.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Hoofdcategorie_fiscus = _p_change_context(
                                                    $['Hoofdcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            $p['Fiscaal']['Resultaat Hoofdcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )

                                                const prop_Subcategorie_fiscus = _p_change_context(
                                                    $['Subcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            prop_Hoofdcategorie_fiscus['l entry']['Subcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )
                                                return {
                                                    'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Correctietypes vennootschapsbelasting': prop_Correctietypes_vennootschapsbelasting,
            'Balans': prop_Balans,
            'Resultaat': prop_Resultaat,
        }
    },
)

export const Beheer: t_signatures.Beheer = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_BTW$mi_categorieen = _p_change_context(
            $['BTW-categorieen'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Beheer.BTW$mi_categorieen.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_BTW$mi_heffing = _p_change_context(
                                $['BTW-heffing'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Ja', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_BTW$mi_promillage = _p_change_context(
                                                                        $['BTW-promillage'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'BTW-promillage': prop_BTW$mi_promillage,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Nee', _p.group.literal.resolve(
                                                                () => {
                                                                    return _p_create_symbol()
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )
                            return {
                                'BTW-heffing': prop_BTW$mi_heffing,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Grootboekrekeningen = _p_change_context(
            $['Grootboekrekeningen'],
            ($) => _p.group.literal.resolve(
                () => {

                    const prop_Balans = _p_change_context(
                        $['Balans'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Beheer.Grootboekrekeningen.Balans.D => _p_change_context(
                                $['l entry'],
                                ($) => _p.group.literal.resolve(
                                    () => {

                                        const prop_Hoofdcategorie = _p_change_context(
                                            $['Hoofdcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboek Categorieen'].Balans,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Subcategorie = _p_change_context(
                                            $['Subcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    prop_Hoofdcategorie['l entry']['Subcategorieen'],
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Zijde = _p_change_context(
                                            $['Zijde'],
                                            ($) => _p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Beheer.Grootboekrekeningen.Balans.D.Zijde => {
                                                            switch ($[0]) {
                                                                case 'Activa':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Activa', _p_create_symbol()],
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Passiva', _p_create_symbol()],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'Hoofdcategorie': prop_Hoofdcategorie,
                                            'Subcategorie': prop_Subcategorie,
                                            'Zijde': prop_Zijde,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )

                    const prop_Resultaat = _p_change_context(
                        $['Resultaat'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Beheer.Grootboekrekeningen.Resultaat.D => _p_change_context(
                                $['l entry'],
                                ($) => _p.group.literal.resolve(
                                    () => {

                                        const prop_Hoofdcategorie = _p_change_context(
                                            $['Hoofdcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboek Categorieen'].Resultaat,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Subcategorie = _p_change_context(
                                            $['Subcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    prop_Hoofdcategorie['l entry']['Subcategorieen'],
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Zijde = _p_change_context(
                                            $['Zijde'],
                                            ($) => _p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde => {
                                                            switch ($[0]) {
                                                                case 'Kosten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Kosten', _p.group.literal.resolve(
                                                                            () => {

                                                                                const prop_Correctie_op_vennootschapsbelasting = _p_change_context(
                                                                                    $['Correctie op vennootschapsbelasting'],
                                                                                    ($) => _p_variables(
                                                                                        () => {

                                                                                            const var_location = $['l location']
                                                                                            return _p.decide.state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'Ja':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['Ja', _p.group.literal.resolve(
                                                                                                                    () => {

                                                                                                                        const prop_Correctietype = _p_change_context(
                                                                                                                            $['Correctietype'],
                                                                                                                            ($) => ({
                                                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                                    $p['Grootboek Categorieen']['Correctietypes vennootschapsbelasting'],
                                                                                                                                ).get_entry(
                                                                                                                                    $['l reference'],
                                                                                                                                    {
                                                                                                                                        no_such_entry: () => abort(
                                                                                                                                            {
                                                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                                'location': $['l location'],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        no_context_lookup: () => abort(
                                                                                                                                            {
                                                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                                                'location': $['l location'],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        cycle_detected: () => abort(
                                                                                                                                            {
                                                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                                                'location': $['l location'],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                'l id': $['l reference'],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'Correctietype': prop_Correctietype,
                                                                                                                        }
                                                                                                                    },
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Nee':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['Nee', _p_create_symbol()],
                                                                                                            )
                                                                                                        default:
                                                                                                            return _p.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    ),
                                                                                )
                                                                                return {
                                                                                    'Correctie op vennootschapsbelasting': prop_Correctie_op_vennootschapsbelasting,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Opbrengsten', _p_create_symbol()],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'Hoofdcategorie': prop_Hoofdcategorie,
                                            'Subcategorie': prop_Subcategorie,
                                            'Zijde': prop_Zijde,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )
                    return {
                        'Balans': prop_Balans,
                        'Resultaat': prop_Resultaat,
                    }
                },
            ),
        )

        const prop_Rekeningen = _p_change_context(
            $['Rekeningen'],
            ($) => _p.group.literal.resolve(
                () => {

                    const prop_Bank = _p_change_context(
                        $['Bank'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Beheer.Rekeningen.Bank.D => _p_change_context(
                                $['l entry'],
                                ($) => _p_create_symbol(),
                            ),
                        ),
                    )

                    const prop_Informeel = _p_change_context(
                        $['Informeel'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Beheer.Rekeningen.Informeel.D => _p_change_context(
                                $['l entry'],
                                ($) => _p_create_symbol(),
                            ),
                        ),
                    )
                    return {
                        'Bank': prop_Bank,
                        'Informeel': prop_Informeel,
                    }
                },
            ),
        )

        const prop_Gebruikers = _p_change_context(
            $['Gebruikers'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Beheer.Gebruikers.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Volledige_naam = _p_change_context(
                                $['Volledige naam'],
                                ($) => $,
                            )

                            const prop_Wachtwoord = _p_change_context(
                                $['Wachtwoord'],
                                ($) => $,
                            )
                            return {
                                'Volledige naam': prop_Volledige_naam,
                                'Wachtwoord': prop_Wachtwoord,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Klanten = _p_change_context(
            $['Klanten'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Beheer.Klanten.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            const prop_Licentieovereenkomsten = _p_change_context(
                                $['Licentieovereenkomsten'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Beheer.Klanten.D.Licentieovereenkomsten.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Periodes = _p_change_context(
                                                    $['Periodes'],
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['l dictionary'],
                                                    ).resolve_static(
                                                        ($, id, $a, $c): t_out.Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D => _p_change_context(
                                                            $['l entry'],
                                                            ($) => _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Bedrag = _p_change_context(
                                                                        $['Bedrag'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Bedrag': prop_Bedrag,
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                )
                                                return {
                                                    'Periodes': prop_Periodes,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )

                            const prop_Projecten = _p_change_context(
                                $['Projecten'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Beheer.Klanten.D.Projecten.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Offertes = _p_change_context(
                                                    $['Offertes'],
                                                    ($) => _p.dictionary.from.dictionary(
                                                        $['l dictionary'],
                                                    ).resolve_static(
                                                        ($, id, $a, $c): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D => _p_change_context(
                                                            $['l entry'],
                                                            ($) => _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Opbrengsten = _p_change_context(
                                                                        $['Opbrengsten'],
                                                                        ($) => _p.dictionary.from.dictionary(
                                                                            $['l dictionary'],
                                                                        ).resolve_static(
                                                                            ($, id, $a, $c): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D => _p_change_context(
                                                                                $['l entry'],
                                                                                ($) => _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Type = _p_change_context(
                                                                                            $['Type'],
                                                                                            ($) => _p_variables(
                                                                                                () => {

                                                                                                    const var_location = $['l location']
                                                                                                    return _p.decide.state(
                                                                                                        $['l state'],
                                                                                                        ($): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                                            switch ($[0]) {
                                                                                                                case 'Project':
                                                                                                                    return _p.ss(
                                                                                                                        $,
                                                                                                                        ($) => ['Project', _p.group.literal.resolve(
                                                                                                                            () => {

                                                                                                                                const prop_Bedrag = _p_change_context(
                                                                                                                                    $['Bedrag'],
                                                                                                                                    ($) => $,
                                                                                                                                )

                                                                                                                                const prop_Betaaldatum = _p_change_context(
                                                                                                                                    $['Betaaldatum'],
                                                                                                                                    ($) => $,
                                                                                                                                )
                                                                                                                                return {
                                                                                                                                    'Bedrag': prop_Bedrag,
                                                                                                                                    'Betaaldatum': prop_Betaaldatum,
                                                                                                                                }
                                                                                                                            },
                                                                                                                        )],
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return _p.au(
                                                                                                                        $[0],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    )
                                                                                                },
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'Type': prop_Type,
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    )
                                                                    return {
                                                                        'Opbrengsten': prop_Opbrengsten,
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                )
                                                return {
                                                    'Offertes': prop_Offertes,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Licentieovereenkomsten': prop_Licentieovereenkomsten,
                                'Projecten': prop_Projecten,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Leveranciers = _p_change_context(
            $['Leveranciers'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Beheer.Leveranciers.D => _p_change_context(
                    $['l entry'],
                    ($) => _p_create_symbol(),
                ),
            ),
        )

        const prop_Medewerkers = _p_change_context(
            $['Medewerkers'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Beheer.Medewerkers.D => _p_change_context(
                    $['l entry'],
                    ($) => _p_create_symbol(),
                ),
            ),
        )
        return {
            'BTW-categorieen': prop_BTW$mi_categorieen,
            'Grootboekrekeningen': prop_Grootboekrekeningen,
            'Rekeningen': prop_Rekeningen,
            'Gebruikers': prop_Gebruikers,
            'Klanten': prop_Klanten,
            'Leveranciers': prop_Leveranciers,
            'Medewerkers': prop_Medewerkers,
        }
    },
)

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Balans = _p_change_context(
            $['Balans'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Grootboekrekeningen.Balans.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {

                            return {
                                'Stam': $p.Beheer.Grootboekrekeningen.Balans.__get_entry_deprecated(
                                    id,
                                    {
                                        no_such_entry: () => abort(
                                            {
                                                'type': ['lookup', ['no such entry', id]],
                                                'location': ['in main document', {
                                                    'start': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    },
                                                    'end': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    }
                                                }],
                                            },
                                        )
                                    }
                                ),
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Resultaat = _p_change_context(
            $['Resultaat'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Grootboekrekeningen.Resultaat.D => _p_change_context(
                    $['l entry'],
                    ($) => ({
                        'Stam': $p.Beheer.Grootboekrekeningen.Resultaat.__get_entry_deprecated(
                            id,
                            {
                                no_such_entry: () => abort(
                                    {
                                        'type': ['lookup', ['no such entry', id]],
                                        'location': ['in main document', {
                                            'start': {
                                                'absolute': 0,
                                                'relative': {
                                                    'line': 0,
                                                    'column': 0
                                                }
                                            },
                                            'end': {
                                                'absolute': 0,
                                                'relative': {
                                                    'line': 0,
                                                    'column': 0
                                                }
                                            }
                                        }],
                                    },
                                )
                            }
                        ),
                    }),
                ),
            ),
        )
        return {
            'Balans': prop_Balans,
            'Resultaat': prop_Resultaat,
        }
    },
)

export const Jaarbeheer: t_signatures.Jaarbeheer = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Resultaat = _p_change_context(
            $['Resultaat'],
            ($) => _p.group.literal.resolve(
                () => {

                    const prop_Grootboekrekening_voor_BTW_afrondingen = _p_change_context(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Resultaat,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Salarisrondes = _p_change_context(
                        $['Salarisrondes'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.Salarisrondes.D => _p_change_context(
                                $['l entry'],
                                ($) => _p_create_symbol(),
                            ),
                        ),
                    )

                    const prop_BTW_periodes = _p_change_context(
                        $['BTW periodes'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.BTW_periodes.D => _p_change_context(
                                $['l entry'],
                                ($) => _p.group.literal.resolve(
                                    () => {

                                        const prop_1$pe__BTW$mi_categorieen = _p_change_context(
                                            $['1. BTW-categorieen'],
                                            ($) => _p.dictionary.from.dictionary(
                                                $['l dictionary'],
                                            ).resolve_static(
                                                ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.BTW_periodes.D._11$pe__BTW$mi_categorieen.D => _p_change_context(
                                                    $['l entry'],
                                                    ($) => _p_create_symbol(),
                                                ),
                                            ),
                                        )

                                        const prop_Documenten = _p_change_context(
                                            $['Documenten'],
                                            ($) => _p.dictionary.from.dictionary(
                                                $['l dictionary'],
                                            ).resolve_static(
                                                ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.BTW_periodes.D.Documenten.D => _p_change_context(
                                                    $['l entry'],
                                                    ($) => _p.group.literal.resolve(
                                                        () => {

                                                            const prop_Bestand = _p_change_context(
                                                                $['Bestand'],
                                                                ($) => $,
                                                            )
                                                            return {
                                                                'Bestand': prop_Bestand,
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        )

                                        const prop_Omschrijving = _p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        )

                                        const prop_Status = _p_change_context(
                                            $['Status'],
                                            ($) => _p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status => {
                                                            switch ($[0]) {
                                                                case 'Aangegeven':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Aangegeven', _p.group.literal.resolve(
                                                                            () => {

                                                                                const prop_Afronding = _p_change_context(
                                                                                    $['Afronding'],
                                                                                    ($) => $,
                                                                                )

                                                                                const prop_Bedrag = _p_change_context(
                                                                                    $['Bedrag'],
                                                                                    ($) => $,
                                                                                )

                                                                                const prop_Datum = _p_change_context(
                                                                                    $['Datum'],
                                                                                    ($) => $,
                                                                                )
                                                                                return {
                                                                                    'Afronding': prop_Afronding,
                                                                                    'Bedrag': prop_Bedrag,
                                                                                    'Datum': prop_Datum,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'Openstaand':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Openstaand', _p_create_symbol()],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            '1. BTW-categorieen': prop_1$pe__BTW$mi_categorieen,
                                            'Documenten': prop_Documenten,
                                            'Omschrijving': prop_Omschrijving,
                                            'Status': prop_Status,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )
                    return {
                        'Grootboekrekening voor BTW afrondingen': prop_Grootboekrekening_voor_BTW_afrondingen,
                        'Salarisrondes': prop_Salarisrondes,
                        'BTW periodes': prop_BTW_periodes,
                    }
                },
            ),
        )

        const prop_Balans = _p_change_context(
            $['Balans'],
            ($) => _p.group.literal.resolve(
                () => {

                    const prop_Beginsaldo_nog_aan_te_geven_BTW = _p_change_context(
                        $['Beginsaldo nog aan te geven BTW'],
                        ($) => $,
                    )

                    const prop_Beginsaldo_winstreserve = _p_change_context(
                        $['Beginsaldo winstreserve'],
                        ($) => $,
                    )

                    const prop_Grootboekrekening_voor_nog_aan_te_geven_BTW = _p_change_context(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_resultaat_dit_jaar = _p_change_context(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_winstreserve = _p_change_context(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_Inkoop_saldo = _p_change_context(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_Verkoop_saldo = _p_change_context(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Informele_rekeningen = _p_change_context(
                        $['Informele rekeningen'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Informele_rekeningen.D => _p_change_context(
                                $['l entry'],
                                ($) => _p.group.literal.resolve(
                                    () => {

                                        const prop_Beginsaldo = _p_change_context(
                                            $['Beginsaldo'],
                                            ($) => $,
                                        )

                                        const prop_Grootboekrekening = _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboekrekeningen'].Balans,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Nieuw = _p_change_context(
                                            $['Nieuw'],
                                            ($) => _p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw => {
                                                            switch ($[0]) {
                                                                case 'Ja':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Ja', _p_create_symbol()],
                                                                    )
                                                                case 'Nee':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Nee', _p_variables(
                                                                            () => {

                                                                                const var_constraint_Niet_Nieuw = _p.decide.state(
                                                                                    $p['Eerste boekjaar'],
                                                                                    ($) => {
                                                                                        switch ($[0]) {
                                                                                            case 'Nee':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => $,
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    {
                                                                                                        'type': ['constraint', ['state', {
                                                                                                            'expected': "Nee",
                                                                                                            'found': $[0],
                                                                                                        }]],
                                                                                                        'location': var_location,
                                                                                                    },
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                                return _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Rekening = _p_change_context(
                                                                                            $['Rekening'],
                                                                                            ($) => Verwijzing_naar_Informele_rekening(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                null,
                                                                                                {
                                                                                                    'Jaarbeheer': var_constraint_Niet_Nieuw['Vorig boekjaar']['l entry']['Jaarbeheer'],
                                                                                                },
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'Rekening': prop_Rekening,
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'Beginsaldo': prop_Beginsaldo,
                                            'Grootboekrekening': prop_Grootboekrekening,
                                            'Nieuw': prop_Nieuw,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )

                    const prop_Bankrekeningen = _p_change_context(
                        $['Bankrekeningen'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Bankrekeningen.D => _p_change_context(
                                $['l entry'],
                                ($) => _p.group.literal.resolve(
                                    () => {

                                        const prop_Beginsaldo = _p_change_context(
                                            $['Beginsaldo'],
                                            ($) => $,
                                        )

                                        const prop_Grootboekrekening = _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboekrekeningen'].Balans,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Nieuw = _p_change_context(
                                            $['Nieuw'],
                                            ($) => _p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw => {
                                                            switch ($[0]) {
                                                                case 'Ja':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Ja', _p_create_symbol()],
                                                                    )
                                                                case 'Nee':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Nee', _p_variables(
                                                                            () => {

                                                                                const var_constraint_Niet_Nieuw = _p.decide.state(
                                                                                    $p['Eerste boekjaar'],
                                                                                    ($) => {
                                                                                        switch ($[0]) {
                                                                                            case 'Nee':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => $,
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    {
                                                                                                        'type': ['constraint', ['state', {
                                                                                                            'expected': "Nee",
                                                                                                            'found': $[0],
                                                                                                        }]],
                                                                                                        'location': var_location,
                                                                                                    },
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                                return _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Rekening = _p_change_context(
                                                                                            $['Rekening'],
                                                                                            ($) => Verwijzing_naar_Bankrekening(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                null,
                                                                                                {
                                                                                                    'Jaarbeheer': var_constraint_Niet_Nieuw['Vorig boekjaar']['l entry']['Jaarbeheer'],
                                                                                                },
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'Rekening': prop_Rekening,
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )

                                        const prop_Mutaties = _p_change_context(
                                            $['Mutaties'],
                                            ($) => _p.dictionary.from.dictionary(
                                                $['l dictionary'],
                                            ).resolve_static(
                                                ($, id, $a, $c): t_out.Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D => _p_change_context(
                                                    $['l entry'],
                                                    ($) => _p.group.literal.resolve(
                                                        () => {

                                                            const prop_Bedrag = _p_change_context(
                                                                $['Bedrag'],
                                                                ($) => $,
                                                            )

                                                            const prop_Datum = _p_change_context(
                                                                $['Datum'],
                                                                ($) => $,
                                                            )

                                                            const prop_Omschrijving = _p_change_context(
                                                                $['Omschrijving'],
                                                                ($) => $,
                                                            )
                                                            return {
                                                                'Bedrag': prop_Bedrag,
                                                                'Datum': prop_Datum,
                                                                'Omschrijving': prop_Omschrijving,
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        )
                                        return {
                                            'Beginsaldo': prop_Beginsaldo,
                                            'Grootboekrekening': prop_Grootboekrekening,
                                            'Nieuw': prop_Nieuw,
                                            'Mutaties': prop_Mutaties,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )

                    const prop_Overige_balans_items = _p_change_context(
                        $['Overige balans items'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Overige_balans_items.D => _p_change_context(
                                $['l entry'],
                                ($) => Overige_balans_item(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    $l,
                                    $p,
                                ),
                            ),
                        ),
                    )

                    const prop_Verrekenposten = _p_change_context(
                        $['Verrekenposten'],
                        ($) => _p.dictionary.from.dictionary(
                            $['l dictionary'],
                        ).resolve_static(
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Verrekenposten.D => _p_change_context(
                                $['l entry'],
                                ($) => _p_create_symbol(),
                            ),
                        ),
                    )
                    return {
                        'Beginsaldo nog aan te geven BTW': prop_Beginsaldo_nog_aan_te_geven_BTW,
                        'Beginsaldo winstreserve': prop_Beginsaldo_winstreserve,
                        'Grootboekrekening voor nog aan te geven BTW': prop_Grootboekrekening_voor_nog_aan_te_geven_BTW,
                        'Grootboekrekening voor resultaat dit jaar': prop_Grootboekrekening_voor_resultaat_dit_jaar,
                        'Grootboekrekening voor winstreserve': prop_Grootboekrekening_voor_winstreserve,
                        'Grootboekrekening voor Inkoop saldo': prop_Grootboekrekening_voor_Inkoop_saldo,
                        'Grootboekrekening voor Verkoop saldo': prop_Grootboekrekening_voor_Verkoop_saldo,
                        'Informele rekeningen': prop_Informele_rekeningen,
                        'Bankrekeningen': prop_Bankrekeningen,
                        'Overige balans items': prop_Overige_balans_items,
                        'Verrekenposten': prop_Verrekenposten,
                    }
                },
            ),
        )
        return {
            'Resultaat': prop_Resultaat,
            'Balans': prop_Balans,
        }
    },
)

export const Overige_balans_item: t_signatures.Overige_balans_item = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Beginsaldo = _p_change_context(
            $['Beginsaldo'],
            ($) => $,
        )

        const prop_Grootboekrekening = _p_change_context(
            $['Grootboekrekening'],
            ($) => ({
                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                    $p['Grootboekrekeningen'].Balans,
                ).get_entry(
                    $['l reference'],
                    {
                        no_such_entry: () => abort(
                            {
                                'type': ['lookup', ['no such entry', $['l reference']]],
                                'location': $['l location'],
                            },
                        ),
                        no_context_lookup: () => abort(
                            {
                                'type': ['lookup', ['no context lookup', null]],
                                'location': $['l location'],
                            },
                        ),
                        cycle_detected: () => abort(
                            {
                                'type': ['lookup', ['cycle detected', null]],
                                'location': $['l location'],
                            },
                        ),
                    },
                ),
                'l id': $['l reference'],
            }),
        )

        const prop_Nieuw = _p_change_context(
            $['Nieuw'],
            ($) => _p_variables(
                () => {

                    const var_location = $['l location']
                    return _p.decide.state(
                        $['l state'],
                        ($): t_out.Overige_balans_item.Nieuw => {
                            switch ($[0]) {
                                case 'Ja':
                                    return _p.ss(
                                        $,
                                        ($) => ['Ja', _p_create_symbol()],
                                    )
                                case 'Nee':
                                    return _p.ss(
                                        $,
                                        ($) => ['Nee', _p_variables(
                                            () => {

                                                const var_constraint_Volgend_boekjaar = _p.decide.state(
                                                    $p['Eerste boekjaar'],
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Nee':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => $,
                                                                )
                                                            default:
                                                                return abort(
                                                                    {
                                                                        'type': ['constraint', ['state', {
                                                                            'expected': "Nee",
                                                                            'found': $[0],
                                                                        }]],
                                                                        'location': var_location,
                                                                    },
                                                                )
                                                        }
                                                    },
                                                )
                                                return _p.group.literal.resolve(
                                                    () => {

                                                        const prop_Balans_item = _p_change_context(
                                                            $['Balans item'],
                                                            ($) => ({
                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                    var_constraint_Volgend_boekjaar['Vorig boekjaar']['l entry']['Jaarbeheer']['Balans']['Overige balans items'],
                                                                ).get_entry(
                                                                    $['l reference'],
                                                                    {
                                                                        no_such_entry: () => abort(
                                                                            {
                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                'location': $['l location'],
                                                                            },
                                                                        ),
                                                                        no_context_lookup: () => abort(
                                                                            {
                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                'location': $['l location'],
                                                                            },
                                                                        ),
                                                                        cycle_detected: () => abort(
                                                                            {
                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                'location': $['l location'],
                                                                            },
                                                                        ),
                                                                    },
                                                                ),
                                                                'l id': $['l reference'],
                                                            }),
                                                        )
                                                        return {
                                                            'Balans item': prop_Balans_item,
                                                        }
                                                    },
                                                )
                                            },
                                        )],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )
                },
            ),
        )
        return {
            'Beginsaldo': prop_Beginsaldo,
            'Grootboekrekening': prop_Grootboekrekening,
            'Nieuw': prop_Nieuw,
        }
    },
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort, $l, $p) => ({
    'l entry': _p_sl.acyclic.from_resolved_dictionary(
        $p['Jaarbeheer'].Balans['Informele rekeningen'],
    ).get_entry(
        $['l reference'],
        {
            no_such_entry: () => abort(
                {
                    'type': ['lookup', ['no such entry', $['l reference']]],
                    'location': $['l location'],
                },
            ),
            no_context_lookup: () => abort(
                {
                    'type': ['lookup', ['no context lookup', null]],
                    'location': $['l location'],
                },
            ),
            cycle_detected: () => abort(
                {
                    'type': ['lookup', ['cycle detected', null]],
                    'location': $['l location'],
                },
            ),
        },
    ),
    'l id': $['l reference'],
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($, abort, $l, $p) => ({
    'l entry': _p_sl.acyclic.from_resolved_dictionary(
        $p['Jaarbeheer'].Balans['Bankrekeningen'],
    ).get_entry(
        $['l reference'],
        {
            no_such_entry: () => abort(
                {
                    'type': ['lookup', ['no such entry', $['l reference']]],
                    'location': $['l location'],
                },
            ),
            no_context_lookup: () => abort(
                {
                    'type': ['lookup', ['no context lookup', null]],
                    'location': $['l location'],
                },
            ),
            cycle_detected: () => abort(
                {
                    'type': ['lookup', ['cycle detected', null]],
                    'location': $['l location'],
                },
            ),
        },
    ),
    'l id': $['l reference'],
})

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Inkopen = _p_change_context(
            $['Inkopen'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Handelstransacties.Inkopen.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        (): t_out.Handelstransacties.Inkopen.D => {

                            const prop_Afhandeling = _p_change_context(
                                $['Afhandeling'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Handelstransacties.Inkopen.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Mutaties':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Mutaties', _p_create_symbol()],
                                                        )
                                                    case 'Nog te betalen':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Nog te betalen', {
                                                                'Betalingstermijn': $.Betalingstermijn
                                                            }],
                                                        )
                                                    case 'Rekening courant':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Rekening courant', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Rekening_courant = _p_change_context(
                                                                        $['Rekening courant'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Rekening courant': prop_Rekening_courant,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )


                            const prop_BTW$mi_periode = _p_change_context(
                                $['BTW-periode'],
                                ($) => ({
                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                        $p['Jaarbeheer'].Resultaat['BTW periodes'],
                                    ).get_entry(
                                        $['l reference'],
                                        {
                                            no_such_entry: () => abort(
                                                {
                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            no_context_lookup: () => abort(
                                                {
                                                    'type': ['lookup', ['no context lookup', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            cycle_detected: () => abort(
                                                {
                                                    'type': ['lookup', ['cycle detected', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                        },
                                    ),
                                    'l id': $['l reference'],
                                }),
                            )

                            // const prop_BTW$mi_regime = _p_change_context(
                            //     $['BTW-regime'],
                            //     ($) => _p_variables(
                            //         () => {

                            //             const var_location = $['l location']
                            //             return _p.decide.state(
                            //                 $['l state'],
                            //                 ($): t_out.Handelstransacties.Inkopen.D.BTW$mi_regime => {
                            //                     switch ($[0]) {
                            //                         case 'Binnenland: heffing verlegd':
                            //                             return _p.ss(
                            //                                 $,
                            //                                 ($) => ['Binnenland: heffing verlegd', _p_create_symbol()],
                            //                             )
                            //                         case 'Geen BTW van toepassing':
                            //                             return _p.ss(
                            //                                 $,
                            //                                 ($) => ['Geen BTW van toepassing', _p_create_symbol()],
                            //                             )
                            //                         case 'Import van buiten de EU':
                            //                             return _p.ss(
                            //                                 $,
                            //                                 ($) => ['Import van buiten de EU', _p_create_symbol()],
                            //                             )
                            //                         case 'Intracommunautair':
                            //                             return _p.ss(
                            //                                 $,
                            //                                 ($) => ['Intracommunautair', _p_create_symbol()],
                            //                             )
                            //                         case 'Standaard':
                            //                             return _p.ss(
                            //                                 $,
                            //                                 ($) => ['Standaard', _p.group.literal.resolve(
                            //                                     () => {

                            //                                         return {
                            //                                             'BTW-periode': prop_BTW$mi_periode,
                            //                                         }
                            //                                     },
                            //                                 )],
                            //                             )
                            //                         default:
                            //                             return _p.au(
                            //                                 $[0],
                            //                             )
                            //                     }
                            //                 },
                            //             )
                            //         },
                            //     ),
                            // )

                            const prop_Brondocument = _p_change_context(
                                $['Brondocument'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Handelstransacties.Inkopen.D.Brondocument => {
                                                switch ($[0]) {
                                                    case 'Toegevoegd':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Toegevoegd', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Document = _p_change_context(
                                                                        $['Document'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Document': prop_Document,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Niet van toepassing':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Niet van toepassing', _p_create_symbol()],
                                                        )
                                                    case 'Ontbreekt':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Ontbreekt', _p_create_symbol()],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Datum = _p_change_context(
                                $['Datum'],
                                ($) => $,
                            )

                            const prop_Regels = _p_change_context(
                                $['Regels'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Handelstransacties.Inkopen.D.Regels.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Bedrag = _p_change_context(
                                                    $['Bedrag'],
                                                    ($) => _p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag => {
                                                                    switch ($[0]) {
                                                                        case 'Bekend':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Bekend', _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_BTW$mi_bedrag = _p_change_context(
                                                                                            $['BTW-bedrag'],
                                                                                            ($) => $,
                                                                                        )

                                                                                        const prop_Bedrag_inclusief_geheven_BTW = _p_change_context(
                                                                                            $['Bedrag inclusief geheven BTW'],
                                                                                            ($) => $,
                                                                                        )
                                                                                        return {
                                                                                            'BTW-bedrag': prop_BTW$mi_bedrag,
                                                                                            'Bedrag inclusief geheven BTW': prop_Bedrag_inclusief_geheven_BTW,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )

                                                const prop_Omschrijving = _p_change_context(
                                                    $['Omschrijving'],
                                                    ($) => $,
                                                )

                                                const prop_Type = _p_change_context(
                                                    $['Type'],
                                                    ($) => _p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Handelstransacties.Inkopen.D.Regels.D.Type => {
                                                                    switch ($[0]) {
                                                                        case 'Balans':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Balans', _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Balans_item = _p_change_context(
                                                                                            $['Balans item'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Jaarbeheer'].Balans['Overige balans items'],
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Balans item': prop_Balans_item,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Kosten':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Kosten', _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Grootboekrekening = _p_change_context(
                                                                                            $['Grootboekrekening'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Grootboekrekeningen'].Resultaat,
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Grootboekrekening': prop_Grootboekrekening,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )
                                                return {
                                                    'Bedrag': prop_Bedrag,
                                                    'Omschrijving': prop_Omschrijving,
                                                    'Type': prop_Type,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )

                            const prop_Type = _p_change_context(
                                $['Type'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Handelstransacties.Inkopen.D.Type => {
                                                switch ($[0]) {
                                                    case 'Bonnetje':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Bonnetje', _p_create_symbol()],
                                                        )
                                                    case 'Inkoop (met crediteur)':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Inkoop (met crediteur)', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Crediteur = _p_change_context(
                                                                        $['Crediteur'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Beheer'].Leveranciers,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )

                                                                    const prop_Factuurnummer = _p_change_context(
                                                                        $['Factuurnummer'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Crediteur': prop_Crediteur,
                                                                        'Factuurnummer': prop_Factuurnummer,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Loonheffing':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Loonheffing', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Ronde = _p_change_context(
                                                                        $['Ronde'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Resultaat.Salarisrondes,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Ronde': prop_Ronde,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Salaris':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Salaris', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Ronde = _p_change_context(
                                                                        $['Ronde'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Resultaat.Salarisrondes,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )

                                                                    const prop_Medewerker = _p_change_context(
                                                                        $['Medewerker'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Beheer'].Medewerkers,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Ronde': prop_Ronde,
                                                                        'Medewerker': prop_Medewerker,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )
                            return {
                                'Afhandeling': prop_Afhandeling,
                                'BTW-periode': prop_BTW$mi_periode,
                                // 'BTW-regime': prop_BTW$mi_regime,
                                'Brondocument': prop_Brondocument,
                                'Datum': prop_Datum,
                                'Regels': prop_Regels,
                                'Type': prop_Type,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Verkopen = _p_change_context(
            $['Verkopen'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Handelstransacties.Verkopen.D => _p_change_context(
                    $['l entry'],
                    ($) => _p.group.literal.resolve(
                        () => {
                            const prop_Datum = _p_change_context(
                                $['Datum'],
                                ($) => $,
                            )

                            const prop_Betalingstermijn = _p_change_context(
                                $['Betalingstermijn'],
                                ($) => $,
                            )

                            const prop_BTW$mi_periode = _p_change_context(
                                $['BTW-periode'],
                                ($) => ({
                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                        $p['Jaarbeheer'].Resultaat['BTW periodes'],
                                    ).get_entry(
                                        $['l reference'],
                                        {
                                            no_such_entry: () => abort(
                                                {
                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            no_context_lookup: () => abort(
                                                {
                                                    'type': ['lookup', ['no context lookup', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            cycle_detected: () => abort(
                                                {
                                                    'type': ['lookup', ['cycle detected', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                        },
                                    ),
                                    'l id': $['l reference'],
                                }),
                            )

                            const prop_Brondocument = _p_change_context(
                                $['Brondocument'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Handelstransacties.Verkopen.D.Brondocument => {
                                                switch ($[0]) {
                                                    case 'Toegevoegd':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Toegevoegd', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Document = _p_change_context(
                                                                        $['Document'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Document': prop_Document,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Debiteur = _p_change_context(
                                $['Debiteur'],
                                ($) => ({
                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                        $p['Beheer'].Klanten,
                                    ).get_entry(
                                        $['l reference'],
                                        {
                                            no_such_entry: () => abort(
                                                {
                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            no_context_lookup: () => abort(
                                                {
                                                    'type': ['lookup', ['no context lookup', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            cycle_detected: () => abort(
                                                {
                                                    'type': ['lookup', ['cycle detected', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                        },
                                    ),
                                    'l id': $['l reference'],
                                }),
                            )

                            const prop_Contracttype = _p_change_context(
                                $['Contracttype'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Handelstransacties.Verkopen.D.Contracttype => {
                                                switch ($[0]) {
                                                    case 'Project':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Project', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Project = _p_change_context(
                                                                        $['Project'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                prop_Debiteur['l entry'].Projecten,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )

                                                                    const prop_Offerte = _p_change_context(
                                                                        $['Offerte'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                prop_Project['l entry']['Offertes'],
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Project': prop_Project,
                                                                        'Offerte': prop_Offerte,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Licentieovereenkomst':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Licentieovereenkomst', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Overeenkomst = _p_change_context(
                                                                        $['Overeenkomst'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                prop_Debiteur['l entry'].Licentieovereenkomsten,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Overeenkomst': prop_Overeenkomst,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const parent_Contracttype = prop_Contracttype

                            const prop_Afhandeling = _p_change_context(
                                $['Afhandeling'],
                                ($) => _p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Handelstransacties.Verkopen.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Mutaties':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Mutaties', _p_create_symbol()],
                                                        )
                                                    case 'Rekening courant':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Rekening courant', _p.group.literal.resolve(
                                                                () => {

                                                                    const prop_Rekening_courant = _p_change_context(
                                                                        $['Rekening courant'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Rekening courant': prop_Rekening_courant,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Regels = _p_change_context(
                                $['Regels'],
                                ($) => _p.dictionary.from.dictionary(
                                    $['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Handelstransacties.Verkopen.D.Regels.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_BTW$mi_regime = _p_change_context(
                                                    $['BTW-regime'],
                                                    ($) => _p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                                    switch ($[0]) {
                                                                        case 'Intracommunautair':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Intracommunautair', _p_create_symbol()],
                                                                            )
                                                                        case 'Standaard':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Standaard', _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_BTW$mi_categorie = _p_change_context(
                                                                                            $['BTW-categorie'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Beheer']['BTW-categorieen'],
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'BTW-categorie': prop_BTW$mi_categorie,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Binnenland: heffing verlegd':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Binnenland: heffing verlegd', _p_create_symbol()],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )

                                                const prop_Bedrag_exclusief_BTW = _p_change_context(
                                                    $['Bedrag exclusief BTW'],
                                                    ($) => $,
                                                )

                                                const prop_Contracttype = _p_change_context(
                                                    $['Contracttype'],
                                                    ($) => _p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype => {
                                                                    switch ($[0]) {
                                                                        case 'Project':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Project', _p_variables(
                                                                                    () => {

                                                                                        const var_constraint_Definitie = _p.decide.state(
                                                                                            parent_Contracttype,
                                                                                            ($) => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Project':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => $,
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            {
                                                                                                                'type': ['constraint', ['state', {
                                                                                                                    'expected': "Project",
                                                                                                                    'found': $[0],
                                                                                                                }]],
                                                                                                                'location': var_location,
                                                                                                            },
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                        return _p.group.literal.resolve(
                                                                                            () => {

                                                                                                const prop_Opbrengst = _p_change_context(
                                                                                                    $['Opbrengst'],
                                                                                                    ($) => ({
                                                                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                            var_constraint_Definitie['Offerte']['l entry']['Opbrengsten'],
                                                                                                        ).get_entry(
                                                                                                            $['l reference'],
                                                                                                            {
                                                                                                                no_such_entry: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                no_context_lookup: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                cycle_detected: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l id': $['l reference'],
                                                                                                    }),
                                                                                                )
                                                                                                return {
                                                                                                    'Opbrengst': prop_Opbrengst,
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Los':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Los', _p_create_symbol()],
                                                                            )
                                                                        case 'Licentieovereenkomst':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Licentieovereenkomst', _p_variables(
                                                                                    () => {

                                                                                        const var_constraint_Definitie = _p.decide.state(
                                                                                            parent_Contracttype,
                                                                                            ($) => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Licentieovereenkomst':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => $,
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            {
                                                                                                                'type': ['constraint', ['state', {
                                                                                                                    'expected': "Licentieovereenkomst",
                                                                                                                    'found': $[0],
                                                                                                                }]],
                                                                                                                'location': var_location,
                                                                                                            },
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                        return _p.group.literal.resolve(
                                                                                            () => {

                                                                                                const prop_Periode = _p_change_context(
                                                                                                    $['Periode'],
                                                                                                    ($) => ({
                                                                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                            var_constraint_Definitie['Overeenkomst']['l entry']['Periodes'],
                                                                                                        ).get_entry(
                                                                                                            $['l reference'],
                                                                                                            {
                                                                                                                no_such_entry: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                no_context_lookup: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                cycle_detected: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l id': $['l reference'],
                                                                                                    }),
                                                                                                )
                                                                                                return {
                                                                                                    'Periode': prop_Periode,
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )

                                                const prop_Omschrijving = _p_change_context(
                                                    $['Omschrijving'],
                                                    ($) => $,
                                                )

                                                const prop_Type = _p_change_context(
                                                    $['Type'],
                                                    ($) => _p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Handelstransacties.Verkopen.D.Regels.D.Type => {
                                                                    switch ($[0]) {
                                                                        case 'Opbrengsten':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Opbrengsten', _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Grootboekrekening = _p_change_context(
                                                                                            $['Grootboekrekening'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Grootboekrekeningen'].Resultaat,
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Grootboekrekening': prop_Grootboekrekening,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Balans':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Balans', _p.group.literal.resolve(
                                                                                    () => {

                                                                                        const prop_Balans_item = _p_change_context(
                                                                                            $['Balans item'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Jaarbeheer'].Balans['Overige balans items'],
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Balans item': prop_Balans_item,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )
                                                return {
                                                    'BTW-regime': prop_BTW$mi_regime,
                                                    'Bedrag exclusief BTW': prop_Bedrag_exclusief_BTW,
                                                    'Contracttype': prop_Contracttype,
                                                    'Omschrijving': prop_Omschrijving,
                                                    'Type': prop_Type,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Datum': prop_Datum,
                                'Betalingstermijn': prop_Betalingstermijn,
                                'BTW-periode': prop_BTW$mi_periode,
                                'Brondocument': prop_Brondocument,
                                'Debiteur': prop_Debiteur,
                                'Contracttype': prop_Contracttype,
                                'Afhandeling': prop_Afhandeling,
                                'Regels': prop_Regels,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Inkopen': prop_Inkopen,
            'Verkopen': prop_Verkopen,
        }
    },
)

export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Jaar = _p_change_context(
            $['Jaar'],
            ($) => _p.optional.from.optional(
                $,
            ).map(
                ($) => ({
                    'l entry': $l['Jaren'].get_entry(
                        $['l reference'],
                        {
                            no_such_entry: () => abort(
                                {
                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                    'location': $['l location'],
                                },
                            ),
                            no_context_lookup: () => abort(
                                {
                                    'type': ['lookup', ['no context lookup', null]],
                                    'location': $['l location'],
                                },
                            ),
                            cycle_detected: () => abort(
                                {
                                    'type': ['lookup', ['cycle detected', null]],
                                    'location': $['l location'],
                                },
                            ),
                        },
                    ),
                    'l id': $['l reference'],
                }),
            ),
        )



        const temp_jaar_beheer = prop_Jaar.__decide(
            ($) => $['l entry'].Jaarbeheer,
            () => $p.Jaarbeheer
        )

        const temp_handelstransacties = prop_Jaar.__decide(
            ($) => $['l entry'].Handelstransacties,
            () => $p.Handelstransacties
        )

        const prop_type = _p_change_context(
            $['type'],
            ($) => _p_variables(
                () => {

                    const var_location = $['l location']
                    return _p.decide.state(
                        $['l state'],
                        ($): t_out.Balans_Resultaat_Mutatie.type_ => {
                            switch ($[0]) {
                                case 'Inkoop':
                                    return _p.ss(
                                        $,
                                        ($) => ['Inkoop', {
                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                temp_handelstransacties.Inkopen,
                                            ).get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }],
                                    )
                                case 'Verkoop':
                                    return _p.ss(
                                        $,
                                        ($) => ['Verkoop', {
                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                temp_handelstransacties.Verkopen,
                                            ).get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }],
                                    )
                                case 'BTW-periode':
                                    return _p.ss(
                                        $,
                                        ($) => ['BTW-periode', {
                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                temp_jaar_beheer.Resultaat['BTW periodes'],
                                            ).get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )
                },
            ),
        )
        return {
            'Jaar': prop_Jaar,
            'type': prop_type,
        }
    },
)

export const Mutaties: t_signatures.Mutaties = ($, abort, $l, $p) => _p.group.literal.resolve(
    (): t_out.Mutaties => {

        const prop_Verrekenposten: t_out.Mutaties.Verrekenposten = _p_change_context(
            $['Verrekenposten'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Mutaties.Verrekenposten.D => _p_change_context(
                    $['l entry'],
                    ($) => _p_variables(
                        (): t_out.Mutaties.Verrekenposten.D => {

                            // const var_referenced_entry = _pdev.implement_me(
                            //     "IM: referenced entry",
                            // )
                            return {
                                'Stam': $p.Jaarbeheer.Balans.Verrekenposten.__get_entry_deprecated(
                                    id,
                                    {
                                        no_such_entry: () => abort(
                                            {
                                                'type': ['lookup', ['no such entry', id]],
                                                'location': ['in main document', {
                                                    'start': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    },
                                                    'end': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    }
                                                }],
                                            },
                                        )
                                    }
                                ),
                                'Mutaties': _p.dictionary.from.dictionary(
                                    $.Mutaties['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Mutaties.Verrekenposten.D.Mutaties.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Bedrag = _p_change_context(
                                                    $['Bedrag'],
                                                    ($) => $,
                                                )

                                                const prop_Afhandeling = _p_change_context(
                                                    $['Afhandeling'],
                                                    ($) => _p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Mutaties.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                                    switch ($[0]) {
                                                                        case 'Resultaat':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    $l,
                                                                                    $p,
                                                                                )],
                                                                            )
                                                                        case 'Balans':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Balans', _p_variables(
                                                                                    () => {

                                                                                        const var_location = $['l location']
                                                                                        return _p.decide.state(
                                                                                            $['l state'],
                                                                                            ($): t_out.Mutaties.Verrekenposten.D.Mutaties.D.Afhandeling.Balans => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Informele rekening':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['Informele rekening', _p.group.literal.resolve(
                                                                                                                () => {

                                                                                                                    const prop_Informele_rekening = _p_change_context(
                                                                                                                        $['Informele rekening'],
                                                                                                                        ($) => ({
                                                                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                                $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                                                                            ).get_entry(
                                                                                                                                $['l reference'],
                                                                                                                                {
                                                                                                                                    no_such_entry: () => abort(
                                                                                                                                        {
                                                                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                            'location': $['l location'],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    no_context_lookup: () => abort(
                                                                                                                                        {
                                                                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                                                                            'location': $['l location'],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    cycle_detected: () => abort(
                                                                                                                                        {
                                                                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                                                                            'location': $['l location'],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l id': $['l reference'],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'Informele rekening': prop_Informele_rekening,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    default:
                                                                                                        return _p.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )
                                                return {
                                                    'Bedrag': prop_Bedrag,
                                                    'Afhandeling': prop_Afhandeling,
                                                }
                                            },
                                        ),
                                    ),
                                )
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Bankrekeningen: t_out.Mutaties.Bankrekeningen = _p_change_context(
            $['Bankrekeningen'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Mutaties.Bankrekeningen.D => _p_change_context(
                    $['l entry'],
                    ($) => _p_variables(
                        (): t_out.Mutaties.Bankrekeningen.D => {
                            const bankrekening = $p.Jaarbeheer.Balans.Bankrekeningen.__get_entry_deprecated(
                                id,
                                {
                                    'no_such_entry': () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', id]],
                                            'location': ['in main document', {
                                                'start': {
                                                    'absolute': 0,
                                                    'relative': {
                                                        'line': 0,
                                                        'column': 0
                                                    }
                                                },
                                                'end': {
                                                    'absolute': 0,
                                                    'relative': {
                                                        'line': 0,
                                                        'column': 0
                                                    }
                                                }
                                            }],
                                        },
                                    ),
                                }
                            )
                            // const var_referenced_entry = _pdev.implement_me(
                            //     "IM: referenced entry",
                            // )
                            return {
                                'Stam': bankrekening,
                                'Mutatie Verwerkingen': _p.dictionary.from.dictionary(
                                    $['Mutatie Verwerkingen']['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D => _p_change_context(
                                        $['l entry'],
                                        ($): t_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D => _p_variables(
                                            (): t_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D => {

                                                // const var_location = $['l location']
                                                return {
                                                    'Stam': bankrekening.Mutaties.__get_entry_deprecated(
                                                        id,
                                                        {
                                                            'no_such_entry': () => abort(
                                                                {
                                                                    'type': ['lookup', ['no such entry', id]],
                                                                    'location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 0,
                                                                            'relative': {
                                                                                'line': 0,
                                                                                'column': 0
                                                                            }
                                                                        },
                                                                        'end': {
                                                                            'absolute': 0,
                                                                            'relative': {
                                                                                'line': 0,
                                                                                'column': 0
                                                                            }
                                                                        }
                                                                    }],
                                                                },
                                                            ),
                                                        }
                                                    ),
                                                    'type': _p.decide.state(
                                                        $.type['l state'],
                                                        ($): t_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D.type_ => {
                                                            switch ($[0]) {
                                                                case 'Resultaat':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            $l,
                                                                            $p,
                                                                        )],
                                                                    )
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Balans', _p_variables(
                                                                            () => {

                                                                                const var_location = $['l location']
                                                                                return _p.decide.state(
                                                                                    $['l state'],
                                                                                    ($): t_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D.type_.Balans => {
                                                                                        switch ($[0]) {
                                                                                            case 'Verrekenpost':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['Verrekenpost', _p.group.literal.resolve(
                                                                                                        () => {

                                                                                                            const prop_Verrekenpost = _p_change_context(
                                                                                                                $['Verrekenpost'],
                                                                                                                ($) => ({
                                                                                                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                        $p['Jaarbeheer'].Balans.Verrekenposten,
                                                                                                                    ).get_entry(
                                                                                                                        $['l reference'],
                                                                                                                        {
                                                                                                                            no_such_entry: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            no_context_lookup: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no context lookup', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            cycle_detected: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['cycle detected', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'l id': $['l reference'],
                                                                                                                }),
                                                                                                            )
                                                                                                            return {
                                                                                                                'Verrekenpost': prop_Verrekenpost,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            case 'Informele rekening':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['Informele rekening', _p.group.literal.resolve(
                                                                                                        () => {

                                                                                                            const prop_Informele_rekening = _p_change_context(
                                                                                                                $['Informele rekening'],
                                                                                                                ($) => ({
                                                                                                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                        $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                                                                    ).get_entry(
                                                                                                                        $['l reference'],
                                                                                                                        {
                                                                                                                            no_such_entry: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            no_context_lookup: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no context lookup', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            cycle_detected: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['cycle detected', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'l id': $['l reference'],
                                                                                                                }),
                                                                                                            )
                                                                                                            return {
                                                                                                                'Informele rekening': prop_Informele_rekening,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                }
                                            },
                                        ),
                                    ),
                                )
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Overige_Balans_Items = _p_change_context(
            $['Overige Balans Items'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve_static(
                ($, id, $a, $c): t_out.Mutaties.Overige_Balans_Items.D => _p_change_context(
                    $['l entry'],
                    ($): t_out.Mutaties.Overige_Balans_Items.D => _p_variables(
                        (): t_out.Mutaties.Overige_Balans_Items.D => {

                            // const var_referenced_entry = _pdev.implement_me(
                            //     "IM: referenced entry",
                            // )
                            return {
                                'Stam': $p.Jaarbeheer.Balans['Overige balans items'].__get_entry_deprecated(
                                    id,
                                    {
                                        'no_such_entry': () => abort(
                                            {
                                                'type': ['lookup', ['no such entry', id]],
                                                'location': ['in main document', {
                                                    'start': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    },
                                                    'end': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    }
                                                }],
                                            },
                                        ),
                                    }
                                ),
                                'Memoriaal Boekingen': _p.dictionary.from.dictionary(
                                    $['Memoriaal Boekingen']['l dictionary'],
                                ).resolve_static(
                                    ($, id, $a, $c): t_out.Mutaties.Overige_Balans_Items.D.Memoriaal_Boekingen.D => _p_change_context(
                                        $['l entry'],
                                        ($) => _p.group.literal.resolve(
                                            () => {

                                                const prop_Bedrag = _p_change_context(
                                                    $['Bedrag'],
                                                    ($) => $,
                                                )

                                                const prop_Datum = _p_change_context(
                                                    $['Datum'],
                                                    ($) => $,
                                                )

                                                const prop_Grootboekrekening = _p_change_context(
                                                    $['Grootboekrekening'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            $p['Grootboekrekeningen'].Resultaat,
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )

                                                const prop_Omschrijving = _p_change_context(
                                                    $['Omschrijving'],
                                                    ($) => $,
                                                )
                                                return {
                                                    'Bedrag': prop_Bedrag,
                                                    'Datum': prop_Datum,
                                                    'Grootboekrekening': prop_Grootboekrekening,
                                                    'Omschrijving': prop_Omschrijving,
                                                }
                                            },
                                        ),
                                    ),
                                )
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Verrekenposten': prop_Verrekenposten,
            'Bankrekeningen': prop_Bankrekeningen,
            'Overige Balans Items': prop_Overige_Balans_Items,
        }
    },
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort, $l, $p) => _p_variables(
    () => {

        const var_location = $['l location']
        return _p.decide.state(
            $['l state'],
            ($): t_out.Eerste_boekjaar => {
                switch ($[0]) {
                    case 'Ja':
                        return _p.ss(
                            $,
                            ($) => ['Ja', _p_create_symbol()],
                        )
                    case 'Nee':
                        return _p.ss(
                            $,
                            ($) => ['Nee', _p.group.literal.resolve(
                                () => {

                                    const prop_Vorig_boekjaar = _p_change_context(
                                        $['Vorig boekjaar'],
                                        ($) => ({
                                            'l entry': $l['Jaren'].get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }),
                                    )
                                    return {
                                        'Vorig boekjaar': prop_Vorig_boekjaar,
                                    }
                                },
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        )
    },
)

export const Jaren: t_signatures.Jaren = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
    $['l dictionary'],
).resolve_static(
    ($, id, $a, $c): t_out.Jaren.D => _p_change_context(
        $['l entry'],
        ($) => _p.group.literal.resolve(
            () => {

                const prop_Afgesloten = _p_change_context(
                    $['Afgesloten'],
                    ($) => _p_variables(
                        () => {

                            const var_location = $['l location']
                            return _p.decide.state(
                                $['l state'],
                                ($): t_out.Jaren.D.Afgesloten => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return _p.ss(
                                                $,
                                                ($) => ['Ja', _p_create_symbol()],
                                            )
                                        case 'Nee':
                                            return _p.ss(
                                                $,
                                                ($) => ['Nee', _p_create_symbol()],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )
                        },
                    ),
                )

                const prop_Startdatum_boekjaar = _p_change_context(
                    $['Startdatum boekjaar'],
                    ($) => $,
                )

                const prop_Grootboekrekeningen = _p_change_context(
                    $['Grootboekrekeningen'],
                    ($) => Grootboekrekeningen(
                        $,
                        ($) => abort(
                            $,
                        ),
                        null,
                        {
                            'Beheer': $p['Beheer'],
                        },
                    ),
                )

                const prop_Eerste_boekjaar = _p_change_context(
                    $['Eerste boekjaar'],
                    ($) => Eerste_boekjaar(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'Jaren': $a,
                        },
                        null,
                    ),
                )

                const prop_Jaarbeheer = _p_change_context(
                    $['Jaarbeheer'],
                    ($) => Jaarbeheer(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'Jaren': $a,
                        },
                        {
                            'Grootboekrekeningen': prop_Grootboekrekeningen,
                            'Eerste boekjaar': prop_Eerste_boekjaar,
                        },
                    ),
                )

                const prop_Handelstransacties = _p_change_context(
                    $['Handelstransacties'],
                    ($) => Handelstransacties(
                        $,
                        ($) => abort(
                            $,
                        ),
                        null,
                        {
                            'Beheer': $p['Beheer'],
                            'Grootboekrekeningen': prop_Grootboekrekeningen,
                            'Jaarbeheer': prop_Jaarbeheer,
                        },
                    ),
                )

                const prop_Mutaties = _p_change_context(
                    $['Mutaties'],
                    ($) => Mutaties(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'Jaren': $a,
                        },
                        {
                            'Beheer': $p['Beheer'],
                            'Grootboekrekeningen': prop_Grootboekrekeningen,
                            'Jaarbeheer': prop_Jaarbeheer,
                            'Handelstransacties': prop_Handelstransacties,
                        },
                    ),
                )
                return {
                    'Afgesloten': prop_Afgesloten,
                    'Startdatum boekjaar': prop_Startdatum_boekjaar,
                    'Grootboekrekeningen': prop_Grootboekrekeningen,
                    'Eerste boekjaar': prop_Eerste_boekjaar,
                    'Jaarbeheer': prop_Jaarbeheer,
                    'Handelstransacties': prop_Handelstransacties,
                    'Mutaties': prop_Mutaties,
                }
            },
        ),
    ),
)

export const Root: t_signatures.Root = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_Fiscaal = _p_change_context(
            $['Fiscaal'],
            ($) => Fiscaal(
                $,
                ($) => abort(
                    $,
                ),
                null,
                null,
            ),
        )

        const prop_Categorieen = _p_change_context(
            $['Categorieen'],
            ($) => Grootboek_Categorieen(
                $,
                ($) => abort(
                    $,
                ),
                null,
                {
                    'Fiscaal': prop_Fiscaal,
                },
            ),
        )

        const prop_Beheer = _p_change_context(
            $['Beheer'],
            ($) => Beheer(
                $,
                ($) => abort(
                    $,
                ),
                null,
                {
                    'Grootboek Categorieen': prop_Categorieen,
                },
            ),
        )

        const prop_Jaren = _p_change_context(
            $['Jaren'],
            ($) => Jaren(
                $,
                ($) => abort(
                    $,
                ),
                null,
                {
                    'Beheer': prop_Beheer,
                },
            ),
        )
        return {
            'Fiscaal': prop_Fiscaal,
            'Categorieen': prop_Categorieen,
            'Beheer': prop_Beheer,
            'Jaren': prop_Jaren,
        }
    },
)
