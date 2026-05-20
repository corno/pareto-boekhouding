import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//dependencies
import * as r_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters"
import * as t_bh_to_aggregatie from "../transformers/boekhouding_resolved/aggregatie"

import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/fountain_pen"
import * as t_deserialize_resolved_to_location from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as t_html_to_fountain_pen from "pareto-static-html/dist/implementation/manual/transformers/static_html/fountain_pen"
import * as t_aggregatie_to_jaarverslag_html from "../transformers/aggregatie/jaarverslag_html"

//shorthands
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"


export const $$: Signature = ($, abort, $p) => t_html_to_fountain_pen.Document(
    t_aggregatie_to_jaarverslag_html.Root(
        t_bh_to_aggregatie.Root(
            r_boekhouding_resolved_from_loc.Root(
                $,
                ($) => abort(sh_fp.ph.composed([
                    sh_fp.ph.literal($p['document resource identifier']),
                    sh_fp.ph.literal(":"),
                    t_location_to_fountain_pen.Possible_Range(
                        t_deserialize_resolved_to_location.Error($),
                        {
                            'character location reporting': ['one based', null],
                        }
                    ),
                    sh_fp.ph.literal(": "),
                    t_deserialize_resolved_to_fountain_pen.Error(
                        $,
                    )
                ])),
                $p
            )
        )
    )
)