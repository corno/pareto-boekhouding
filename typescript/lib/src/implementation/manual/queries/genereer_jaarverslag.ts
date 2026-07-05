import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import * as interface_ from "../../../interface/queries.js"

//data  types
import * as d_boekhouding from "../../../interface/generated/liana/schemas/boekhouding/data/resolved.js"
import * as d_prose from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

//dependencies
import * as r_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters.js"
import * as t_resolved_to_derived from "../transformers/boekhouding_resolved/derived.js"

import * as t_deserialize_resolved_to_prose from "liana-core/implementation/manual/transformers/deserialize_resolved/prose"
import * as t_deserialize_resolved_to_location from "liana-core/implementation/manual/transformers/deserialize_resolved/location"
import * as t_location_to_prose from "astn-core/implementation/manual/transformers/location/prose"
import * as t_html_to_prose from "pareto-static-html/implementation/manual/transformers/static_html/prose"
import * as t_prose_to_list_of_characters from "pareto-fountain-pen/implementation/manual/transformers/prose/list_of_characters"
import * as t_aggregatie_to_jaarverslag_html from "../transformers/derived/jaarverslag_html.js"
import * as t_path_to_text from "pareto-resources/implementation/manual/transformers/unrestricted_path/text"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: interface_.query_functions.genereer_jaarverslag = p_.query_function(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<d_boekhouding.Root_, d_prose.Phrase>(
        (abort) => r_boekhouding_resolved_from_loc.Root(
            $d.data,
            ($) => abort(
                sh.ph.composed([
                    sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                    sh.ph.literal(":"),
                    t_location_to_prose.Possible_Range(
                        t_deserialize_resolved_to_location.Error($),
                        {
                            'character location reporting': ['one based', null],
                        }
                    ),
                    sh.ph.literal(": "),
                    t_deserialize_resolved_to_prose.Error(
                        $,
                    )
                ])),
            {
                'tab size': $s['tab size']
            }
        )
    )).transform(
        ($) => ({
            'data': t_prose_to_list_of_characters.Paragraph(
                t_html_to_prose.Document(
                    t_aggregatie_to_jaarverslag_html.Root(
                        t_resolved_to_derived.Root(
                            $
                        )
                    )
                ),
                {
                    'indentation': "    ",
                    'newline': "\n",
                }
            )
        })
    )
)
