import * as p_ from 'pareto-core/dist/implementation/query'
import p_super_query_result from 'pareto-core/dist/implementation/query/super_query_result'

import * as interface_ from "../../../interface/queries"

//data  types
import * as d_boekhouding from "../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as r_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters"
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived"

import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/fountain_pen"
import * as t_deserialize_resolved_to_location from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as t_html_to_list_of_characters from "pareto-static-html/dist/implementation/manual/transformers/static_html/list_of_characters"
import * as t_aggregatie_to_jaarverslag_html from "../transformers/derived/jaarverslag_html"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/text"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: interface_.query_functions.genereer_jaarverslag = p_.query_function(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<d_boekhouding.Root_, d_fp.Phrase>(
        (abort) => r_boekhouding_resolved_from_loc.Root(
            $d.data,
            ($) => abort(sh.ph.composed([
                sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                sh.ph.literal(":"),
                t_location_to_fountain_pen.Possible_Range(
                    t_deserialize_resolved_to_location.Error($),
                    {
                        'character location reporting': ['one based', null],
                    }
                ),
                sh.ph.literal(": "),
                t_deserialize_resolved_to_fountain_pen.Error(
                    $,
                )
            ])),
            {
                'tab size': $s['tab size']
            }
        )
    )).transform(
        ($) => ({
            'data': t_html_to_list_of_characters.Document(
                t_aggregatie_to_jaarverslag_html.Root(
                    t_resolved_to_derived.Root(
                        $
                    )
                )
            )
        })
    )
)
