import * as _pi from 'pareto-core/dist/interface'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//dependencies
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
export const $$: Signature = ($, abort, $p) => t_boekhouding_resolved_to_fp.Root(
    r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        r_boekhouding_unresolved_from_boekhouding_oude_model.Root(
            r_boekhouding_oude_model_from_loc.Root(
                $,
                ($) => abort(sh.ph.composed([
                    sh.ph.literal($p['document resource identifier']),
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
                $p
            )
        ),
        ($) => abort(sh.ph.composed([
            sh.ph.literal($p['document resource identifier']),
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
        null,
        null,
    )
)