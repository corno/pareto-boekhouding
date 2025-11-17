import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

// import * as d_m3 from "../../interface/generated/pareto/schemas/lioncore/data_types/source"
// import * as d_st from "../../interface/generated/pareto/schemas/serialization_tree/data_types/source"

import * as d_parse_result from "../../interface/generated/pareto/core/parse_result"

import { parse } from "../generated/pareto/generic/parse/parse"


import * as unmarshall_boekhouding_oude_model from "../generated/pareto/schemas/boekhouding_oude_model/unmarshall"

import * as t_bh_oud_to_bh from "../algorithms/transformations/boekhouding_oude_model/boekhouding"

import * as resolve_boekhouding from "../../temp/resolve"

import * as serialize_boekhouding from "../generated/pareto/schemas/boekhouding/serialize"


export type Some_Error =
    | ['parse error', d_parse_result._T_Parse_Error]
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
            return _ei.data_processing.successful(unmarshall_boekhouding_oude_model.Root(
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
    ).transform(
        ($) => serialize_boekhouding.Root(
            resolve_boekhouding.r_Root(
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
        )
    )
}
