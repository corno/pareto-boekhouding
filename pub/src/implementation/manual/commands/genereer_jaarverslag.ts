import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'

//dependencies
import { $$ as create_file_transformer } from "../../../modules/file_transformer/implementation/manual/command_creators/transform_file"
import * as ds_boekhouding_resolved from "../schemas/boekhouding_resolved/deserializers"

import * as t_bh_to_aggregatie from "../schemas/boekhouding_resolved/transformers/aggregatie"

export const $$ = create_file_transformer(
    ds_boekhouding_resolved.Root,
    ($) => {
        const x3 = t_bh_to_aggregatie.Root(
            $
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
)