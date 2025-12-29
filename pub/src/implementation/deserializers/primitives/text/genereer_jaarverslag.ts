import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'


export type Error =
    | ['parse error', _T_Parse_Error]
    | ['primitive deserialization', null]
    
export type Signature = _pi.Deserializer<string, Error>

//data types
import { _T_Parse_Error } from '../../../../interface/generated/pareto/core/parse_result'



//dependencies
import { parse as ds_parse } from "../../../generated/pareto/generic/parse/parse"
import { $$ as ds_fractional_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/fractional_decimal"
import { $$ as ds_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/decimal"
import { $$ as ds_date } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/iso_udhr"
import { $$ as ds_boolean } from "pareto-standard-operations/dist/implementation/deserializers/primitives/boolean/true_false"

import * as r_um_boekhouding from "../../../generated/pareto/schemas/boekhouding/unmarshall"
import * as r_bh from "../../../refiners/schemas/boekhouding_target/boekhouding_source"

import * as t_bh_to_aggregatie from "../../../transformers/schemas/boekhouding/aggregatie"


export const $: Signature = ($, abort) => {

    const x = ds_parse(
        $,
        { 'tab size': 4 },
        ($) => abort(['parse error', $])
    )

    const abort2 = ($: string) => abort(['primitive deserialization', null])

    const x2 = r_um_boekhouding.Root(
        x.content,
        {
            'value deserializers': {
                'boolean': (s: string) => ds_boolean(s, abort2),
                'default number': ($) => ds_decimal($, abort2),
                'custom numbers': {
                    'Bedrag': ($) => ds_decimal($, abort2),
                    'Promillage': ($) => ds_decimal($, abort2),
                    'Dagen': ($) => ds_decimal($, abort2),
                    'Datum': ($) => ds_date($, abort2) - 711471, //klopt deze offset hier?
                }
            }
        }
    )

    const x3 = t_bh_to_aggregatie.Root(
        r_bh.r_Root(
            x2,
            {
                'location 2 string': (location) => {
                    return `${location.start.relative.line}:${location.start.relative.column}-${location.end.relative.line}:${location.end.relative.column}`
                },
                'parameters': {
                    'lookups': null,
                    'values': null,
                }
            }
        )
    )


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
