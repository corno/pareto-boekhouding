import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

// import * as d_m3 from "../../interface/generated/pareto/schemas/lioncore/data_types/source"
// import * as d_st from "../../interface/generated/pareto/schemas/serialization_tree/data_types/source"

import { parse } from "../generated/pareto/generic/parse/parse"
import * as um_boekhouding from "../generated/pareto/schemas/boekhouding/unmarshall"
import { _T_Parse_Error } from '../../interface/generated/pareto/core/parse_result'

import * as r_bh from "../../temp/resolve"

import * as t_bh_to_aggregatie from "../transformations/boekhouding/aggregatie"



export type Error =
    | ['parse error', _T_Parse_Error]
    | ['cannot happen because implementation throws which it should not', null]

export const $ = (
    $p: {
        'file content': string
    }
): _et.Data_Preparation_Result<string, Error> => {
    return parse(
        $p['file content'],
        { 'tab size': 4 }
    ).transform_error_temp(
        ($): Error => ['parse error', $]
    ).process(
        ($) => {
            return _ei.data_processing.successful(um_boekhouding.Root(
                $.content,
                {
                    'value deserializers': {
                        'boolean': (s: string) => $ ? true : false,
                        'default number': (s: string) => 42,
                        'custom numbers': {
                            'Bedrag': (s: string) => 42,
                            'Promillage': (s: string) => 42,
                            'Dagen': (s: string) => 42,
                            'Datum': (s: string) => 42,
                        }
                    }
                }
            ))
        },
        ($): Error => ['cannot happen because implementation throws which it should not', null]
    ).transform(
        ($) => {
            return t_bh_to_aggregatie.Root(
                r_bh.r_Root(
                    $,
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
        },
    ).transform(
        ($) => {
            $.jaren.map(($, key) => {
                _ed.log_debug_message(key, () => { })
                _ed.log_debug_message(`  'balans'`, () => { })
                $.grootboekrekeningen.balans.map(($, key) => {
                    _ed.log_debug_message(`    ${key}`, () => { })
                    _ed.log_debug_message(`      'inkopen'`, () => { })
                    $['gerelateerde inkopen'].map(($, key) => {
                        _ed.log_debug_message(`        ${key}`, () => { })
                    })
                })
                _ed.log_debug_message(`  'resultaat'`, () => { })
                $.grootboekrekeningen.resultaat.map(($, key) => {
                    _ed.log_debug_message(`    ${key}`, () => { })
                    _ed.log_debug_message(`      'inkopen'`, () => { })
                    $['gerelateerde inkopen'].map(($, key) => {
                        _ed.log_debug_message(`        ${key}`, () => { })
                    })
                })
            })
            return "success"
        }
    )
}
