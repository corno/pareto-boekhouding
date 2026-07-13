import * as p_ from 'pareto-core/implementation/query'

import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"
import type * as s_serialize_prose from "../../interface/schemas/prose_serialize.js"

//data  types
import type * as s_boekhouding from "../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as s_prose from "../../interface/schemas/prose.js"

//dependencies
import * as r_boekhouding_oude_model_from_loc from "../../submodules/boekhouding_oude_model/implementation/refiners/foo/list_of_characters.js"
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../submodules/boekhouding_resolved/implementation/refiners/foo/unresolved.js"
import * as r_boekhouding_unresolved_from_boekhouding_oude_model from "../refiners/boekhouding_unresolved/boekhouding_oude_model.js"
import * as t_boekhouding_resolved_to_prose from "../../submodules/boekhouding_resolved/implementation/transformers/foo/fountain_pen.js"
import * as t_deserialize_parse_tree_to_location from "liana-core/implementation/transformers/deserialize/location"
import * as t_deserialize_parse_tree_to_prose from "liana-core/implementation/transformers/deserialize/prose"
import * as t_deserialize_resolve_to_location from "liana-core/implementation/transformers/resolve/location"
import * as t_deserialize_resolve_to_prose from "liana-core/implementation/transformers/resolve/prose"
import * as t_fp_to_loc from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"
import * as t_location_to_prose from "astn-core/implementation/transformers/location/prose"
import * as t_path_to_text from "pareto-resources/implementation/transformers/unrestricted_path/text"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.file_in_file_out,
    {
        'tab size': number,
        'serialization parameters': s_serialize_prose.Parameters,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_boekhouding.Root_, s_prose.Phrase>(
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
