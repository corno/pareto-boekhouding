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

import * as t_bh_to_aggregatie from "../algorithms/transformations/boekhouding/aggregatie"


// import { $$ as op_serialize_number } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/"

// import * as r_sf_to_tree from "../refinements/serialization_format/serialization_format_to_tree"
// import * as r_tree from "../refinements/2023_1_tree/2023_1_tree_to_M3"

// import * as m_x from "../../generated/pareto/schemas/lioncore/marshall"

// import * as serialize from "../../generated/pareto/generic/serialize"
// import { create_context, Unmarshall_Error } from "../refinements/context"
// import { temp_json_unmarshall_should_be_done_extenally } from "../../../temp/unmarshall_json/unmarshall"

// const temp_serialize_should_be_generated = (
//     m3: d_m3.M3,
//     $p: {
//         'value serializers': {
//             'boolean': (value: boolean) => string,
//             'default number': () => string,
//             'custom numbers': null,
//         }
//     }
// ) => {

//     return serialize.Document(
//         m_x.M3(
//             m3,
//             $p
//         ),
//     )
// }

export type Some_Error =
    | ['parse error', _T_Parse_Error]
    | ['cannot happen because implementation throws which it should not', null]

// | ['deserialization error', r_sf_to_tree.Deserialization_Error]
// | ['unmarshalling error', Unmarshall_Error]

export const $$ = (
    file_content: string,
): _et.Data_Preparation_Result<string, Some_Error> => {

    return parse(
        file_content,
        { 'tab size': 4 }
    ).transform_error_temp(
        ($): Some_Error => ['parse error', $]
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
        ($): Some_Error => ['cannot happen because implementation throws which it should not', null]
    ).process(
        ($) => {
            const aggregatie = t_bh_to_aggregatie.Root(
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
            aggregatie.jaren.map(($, key) => {
                _ed.log_debug_message(key, () => { })
                $.grootboekrekeningen.balans.map(($, key) => {
                    _ed.log_debug_message(`  ${key}`, () => { })
                    _ed.log_debug_message(`    'inkopen'`, () => { })
                    $['gerelateerde inkopen'].map(($, key) => {
                        _ed.log_debug_message(`      ${key}`, () => { })
                    })
                })
                $.grootboekrekeningen.resultaat.map(($, key) => {
                    _ed.log_debug_message(`  ${key}`, () => { })
                })
            })
            return _ei.data_processing.successful("Success")
        },
        ($): Some_Error => ['cannot happen because implementation throws which it should not', null]
    )
}
