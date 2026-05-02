import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../../interface/to_be_generated/transform_file"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_file_in_file_out_to_fountain_pen from "../../file_in_file_out/transformers/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const My_Error = ($: d_in.Error): d_out.Phrase => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'processing': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("error processing: "),
                $,
            ]))
            case 'file in file out': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("file in file out: "),
                t_file_in_file_out_to_fountain_pen.Command_Error($),
            ]))
            default: return _p.au($[0])
        }
    })
}