import * as p_ from 'pareto-core/dist/implementation/query'
import p_create_symbol from 'pareto-core/dist/implementation/specials/create_symbol'
import p_super_query_result from 'pareto-core/dist/implementation/query/super_query_result'

import * as interface_ from "../../../interface/queries"

//data  types
import * as d_boekhouding from "../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/text"

//dependencies
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"
import * as r_boekhouding_oude_model_from_loc from "../../generated/liana/schemas/boekhouding_oude_model/refiners/list_of_characters"
import * as r_boekhouding_unresolved_from_boekhouding_oude_model from "../refiners/boekhouding_unresolved/boekhouding_oude_model"
import * as t_deserialize_parse_tree_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize/fountain_pen"
import * as t_deserialize_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/deserialize/location"
import * as t_deserialize_resolve_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/resolve/fountain_pen"
import * as t_deserialize_resolve_to_location from "liana-core/dist/implementation/manual/transformers/resolve/location"
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../generated/liana/schemas/boekhouding/resolved/refiners/unresolved"
import * as t_boekhouding_resolved_to_fp from "../../generated/liana/schemas/boekhouding/resolved/transformers/fountain_pen"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: interface_.query_functions.converteer_oude_dataset = p_.query_function(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<d_boekhouding.Root_, d_fp.Phrase>(
        (abort) => r_boekhouding_resolved_from_boekhouding_unresolved.Root(
            r_boekhouding_unresolved_from_boekhouding_oude_model.Root(
                r_boekhouding_oude_model_from_loc.Root(
                    $d.data,
                    ($) => abort(sh.ph.composed([
                        sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                        sh.ph.literal(":"),
                        t_location_to_fountain_pen.Possible_Range(
                            t_deserialize_parse_tree_to_location.Error($),
                            {
                                'character location reporting': ['one based', null],
                            }
                        ),
                        sh.ph.literal(": "),
                        t_deserialize_parse_tree_to_fountain_pen.Error(
                            $,
                        )
                    ])),
                    $s
                )
            ),
            ($) => abort(sh.ph.composed([
                sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                sh.ph.literal(":"),
                t_location_to_fountain_pen.Range(
                    t_deserialize_resolve_to_location.Error($),
                    {
                        'character location reporting': ['one based', null],
                    }
                ),
                sh.ph.literal(": "),
                t_deserialize_resolve_to_fountain_pen.Error(
                    $,
                )
            ])),
            p_create_symbol(),
            p_create_symbol(),
        )
    )).transform(
        ($) => ({
            'data': t_fp_to_loc.Paragraph(
                t_boekhouding_resolved_to_fp.Root(
                    $
                ),
                $s['serialization parameters']
            )
        })
    )
)
