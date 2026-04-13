import * as _pi from 'pareto-core/dist/interface'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer


//dependencies
import * as t_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters"
import * as t_bh_to_aggregatie from "../transformers/boekhouding_resolved/aggregatie"

import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/fountain_pen"
import * as t_deserialize_resolved_to_location from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: Signature = ($, abort, $p) => {
    const x3 = t_bh_to_aggregatie.Root(
        t_boekhouding_resolved_from_loc.Root(
            $,
            ($) => abort(sh.ph.composed([
                sh.ph.literal($p['document resource identifier']),
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
            $p
        )
    )

    //temp
    // x3.jaren.__d_map(($, id) => {
    //     _p_log_debug_message(id, () => { })
    //     _p_log_debug_message("  'balans'", () => { })
    //     $.grootboekrekeningen.balans.__d_map(($, id) => {
    //         _p_log_debug_message("    ${key}", () => { })
    //         _p_log_debug_message("      'inkopen'", () => { })
    //         $['gerelateerde inkopen'].__d_map(($, id) => {
    //             _p_log_debug_message("        ${key}", () => { })
    //         })
    //     })
    //     _p_log_debug_message("  'resultaat'", () => { })
    //     $.grootboekrekeningen.resultaat.__d_map(($, id) => {
    //         _p_log_debug_message("    ${key}", () => { })
    //         _p_log_debug_message("      'inkopen'", () => { })
    //         $['gerelateerde inkopen'].__d_map(($, id) => {
    //             _p_log_debug_message("        ${key}", () => { })
    //         })
    //     })
    // })
    return sh.pg.sentences([
        sh.sentence([
            sh.ph.literal("TODO: print jaarverslag")
        ])
    ])
}