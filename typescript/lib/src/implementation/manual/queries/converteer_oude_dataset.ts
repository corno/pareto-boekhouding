import * as p_ from 'pareto-core/implementation/query'

import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import * as interface_ from "../../../interface/declarations/queries.js"

//data  types
import * as d_boekhouding from "../../../interface/generated/liana/schemas/boekhouding/data/resolved.js"
import * as d_prose from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import * as t_path_to_text from "pareto-resources/implementation/manual/transformers/unrestricted_path/text"

//dependencies
import * as t_fp_to_loc from "pareto-fountain-pen/implementation/manual/transformers/prose/list_of_characters"
import * as r_boekhouding_oude_model_from_loc from "../../generated/liana/schemas/boekhouding_oude_model/refiners/list_of_characters.js"
import * as r_boekhouding_unresolved_from_boekhouding_oude_model from "../refiners/boekhouding_unresolved/boekhouding_oude_model.js"
import * as t_deserialize_parse_tree_to_prose from "liana-core/implementation/manual/transformers/deserialize/prose"
import * as t_deserialize_parse_tree_to_location from "liana-core/implementation/manual/transformers/deserialize/location"
import * as t_deserialize_resolve_to_prose from "liana-core/implementation/manual/transformers/resolve/prose"
import * as t_deserialize_resolve_to_location from "liana-core/implementation/manual/transformers/resolve/location"
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../generated/liana/schemas/boekhouding/resolved/refiners/unresolved.js"
import * as t_boekhouding_resolved_to_prose from "../../generated/liana/schemas/boekhouding/resolved/transformers/fountain_pen.js"
import * as t_location_to_prose from "astn-core/implementation/manual/transformers/location/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: interface_.converteer_oude_dataset = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<d_boekhouding.Root_, d_prose.Phrase>(
        (abort) => r_boekhouding_resolved_from_boekhouding_unresolved.Root(
            r_boekhouding_unresolved_from_boekhouding_oude_model.Root(
                r_boekhouding_oude_model_from_loc.Root(
                    $d.data,
                    ($) => abort(
                        sh.ph.composed([
                            sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                            sh.ph.literal(":"),
                            t_location_to_prose.Possible_Range(
                                t_deserialize_parse_tree_to_location.Error($),
                                {
                                    'character location reporting': ['one based', null],
                                }
                            ),
                            sh.ph.literal(": "),
                            t_deserialize_parse_tree_to_prose.Error(
                                $,
                            )
                        ])),
                    $s
                )
            ),
            ($) => abort(
                sh.ph.composed([
                    sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                    sh.ph.literal(":"),
                    t_location_to_prose.Range(
                        t_deserialize_resolve_to_location.Error($),
                        {
                            'character location reporting': ['one based', null],
                        }
                    ),
                    sh.ph.literal(": "),
                    t_deserialize_resolve_to_prose.Error(
                        $,
                    )
                ])),
            p_.literal.nothing(),
            p_.literal.nothing(),
        )
    )).transform(
        ($) => ({
            'data': t_fp_to_loc.Paragraph(
                t_boekhouding_resolved_to_prose.Root(
                    $
                ),
                $s['serialization parameters']
            )
        })
    )
)
