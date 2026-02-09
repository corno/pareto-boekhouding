import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer


//dependencies
import * as t_boekhouding_resolved_from_loc from "../schemas/boekhouding_resolved/refiners/list_of_characters"
import * as t_bh_to_aggregatie from "../schemas/boekhouding_resolved/transformers/aggregatie"

import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/schemas/deserialize_resolved/transformers/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: Signature = ($, abort, $p) => {
    const x3 = t_bh_to_aggregatie.Root(
        t_boekhouding_resolved_from_loc.Root(
            $,
            ($) => abort(t_deserialize_resolved_to_fountain_pen.Error($)),
            $p
        )
    )

    //temp
    x3.jaren.__d_map(($, id) => {
        _pdev.log_debug_message(id, () => { })
        _pdev.log_debug_message("  'balans'", () => { })
        $.grootboekrekeningen.balans.__d_map(($, id) => {
            _pdev.log_debug_message("    ${key}", () => { })
            _pdev.log_debug_message("      'inkopen'", () => { })
            $['gerelateerde inkopen'].__d_map(($, id) => {
                _pdev.log_debug_message("        ${key}", () => { })
            })
        })
        _pdev.log_debug_message("  'resultaat'", () => { })
        $.grootboekrekeningen.resultaat.__d_map(($, id) => {
            _pdev.log_debug_message("    ${key}", () => { })
            _pdev.log_debug_message("      'inkopen'", () => { })
            $['gerelateerde inkopen'].__d_map(($, id) => {
                _pdev.log_debug_message("        ${key}", () => { })
            })
        })
    })
    return sh.pg.sentences([
        sh.sentence([
            sh.ph.literal("TODO: print jaarverslag")
        ])
    ])
}