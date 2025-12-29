import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'

//data types
import { _T_Parse_Error } from '../../../../interface/generated/pareto/core/parse_result'

//dependencies
import { parse } from "../../../generated/pareto/generic/parse/parse"
import * as um_boekhouding from "../../../generated/pareto/schemas/boekhouding/unmarshall"
import { $$ as deserialize_fractional_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/fractional_decimal"
import { $$ as deserialize_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/decimal"
import { $$ as deserialize_date } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/iso_udhr"
import { $$ as deserialize_boolean } from "pareto-standard-operations/dist/implementation/deserializers/primitives/boolean/true_false"

import * as r_bh from "../../../refiners/schemas/boekhouding_target/boekhouding_source"

import * as t_bh_to_aggregatie from "../../../transformers/schemas/boekhouding/aggregatie"



export type Error =
    | ['parse error', _T_Parse_Error]
    | ['primitive deserialization', null]

export const $: _pi.Deserializer<string, Error> = ($, abort) => {

    const x = parse(
        $,
        { 'tab size': 4 },
        ($) => abort(['parse error', $])
    )

    const abort2 = ($: string) => abort(['primitive deserialization', null])

    const x2 = um_boekhouding.Root(
        x.content,
        {
            'value deserializers': {
                'boolean': (s: string) => deserialize_boolean(s, abort2),
                'default number': ($) => deserialize_decimal($, abort2),
                'custom numbers': {
                    'Bedrag': ($) => deserialize_decimal($, abort2),
                    'Promillage': ($) => deserialize_decimal($, abort2),
                    'Dagen': ($) => deserialize_decimal($, abort2),
                    'Datum': ($) => deserialize_date($, abort2) - 711471, //klopt deze offset hier?
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
