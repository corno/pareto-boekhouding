import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as d_xx from "astn-sealed/dist/interface/to_be_generated/deserialize_resolved_model"

export type Signature = _pi.Deserializer_With_Parameters<string, string, d_xx.Parameters>

import * as ds_boekhouding_resolved from "../schemas/boekhouding_resolved/deserializers"

import * as t_bh_to_aggregatie from "../schemas/boekhouding_resolved/transformers/aggregatie"

import * as s_deserialize_resolved_model from "astn-sealed/dist/implementation/schemas/deserialize_resolved_model/serializers"

export const $$: Signature = ($, abort, $p) => {
    const x3 = t_bh_to_aggregatie.Root(
        ds_boekhouding_resolved.Root(
            $,
            ($) => abort(s_deserialize_resolved_model.Error($)),
            $p
        )
    )

    //temp
    x3.jaren.map(($, key) => {
        _pdev.log_debug_message(key, () => { })
        _pdev.log_debug_message(`  'balans'`, () => { })
        $.grootboekrekeningen.balans.map(($, key) => {
            _pdev.log_debug_message(`    ${key}`, () => { })
            _pdev.log_debug_message(`      'inkopen'`, () => { })
            $['gerelateerde inkopen'].map(($, key) => {
                _pdev.log_debug_message(`        ${key}`, () => { })
            })
        })
        _pdev.log_debug_message(`  'resultaat'`, () => { })
        $.grootboekrekeningen.resultaat.map(($, key) => {
            _pdev.log_debug_message(`    ${key}`, () => { })
            _pdev.log_debug_message(`      'inkopen'`, () => { })
            $['gerelateerde inkopen'].map(($, key) => {
                _pdev.log_debug_message(`        ${key}`, () => { })
            })
        })
    })
    return "success"
}