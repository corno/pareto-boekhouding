import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

// import * as d_m3 from "../../interface/generated/pareto/schemas/lioncore/data_types/source"
// import * as d_st from "../../interface/generated/pareto/schemas/serialization_tree/data_types/source"

import { parse } from "../generated/pareto/generic/parse/parse"
import * as um_boekhouding_oude_model from "../generated/pareto/schemas/boekhouding_oude_model/unmarshall"
import { _T_Parse_Error } from "../../interface/generated/pareto/core/parse_result"

import * as t_bh_oud_to_bh from "../algorithms/transformations/boekhouding_oude_model/boekhouding"

import * as r_bh from "../../temp/resolve"

import * as s_bh from "../generated/pareto/schemas/boekhouding/serialize"

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
            return _ei.data_processing.successful(um_boekhouding_oude_model.Root(
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
            return _ei.data_processing.successful(s_bh.Root(
                r_bh.r_Root(
                    t_bh_oud_to_bh.Root($, null),
                    {
                        'location 2 string': (location) => "unknown location",
                        'parameters': {
                            'lookups': null,
                            'values': null
                        }
                    }
                ),
                {
                    'value serializers': {
                        'boolean': (value: boolean) => value ? "true" : "false",
                        'default number': () => "42",
                        'custom numbers': {
                            'Bedrag': () => "42",
                            'Promillage': () => "42",
                            'Dagen': () => "42",
                            'Datum': () => "42",
                        }
                    }
                }
            ))
        },
        ($): Some_Error => ['cannot happen because implementation throws which it should not', null]
    )
}
