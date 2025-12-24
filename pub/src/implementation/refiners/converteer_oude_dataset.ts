import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

import * as d_parse_result from "../../interface/generated/pareto/core/parse_result"



import { parse } from "../generated/pareto/generic/parse/parse"

import * as unmarshall_boekhouding_oude_model from "../generated/pareto/schemas/boekhouding_oude_model/unmarshall"

import * as t_bh_oud_to_bh from "../transformations/boekhouding_oude_model/boekhouding"

import * as resolve_boekhouding from "../../temp/resolve"

import * as serialize_boekhouding from "../generated/pareto/schemas/boekhouding/serialize"

import { $$ as deserialize_fractional_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/fractional_decimal"
import { $$ as deserialize_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/decimal"
import { $$ as deserialize_date } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/iso_udhr"
import { $$ as deserialize_boolean } from "pareto-standard-operations/dist/implementation/deserializers/primitives/boolean/true_false"


import { $$ as serialize_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/decimal"
import { $$ as serialize_fractional_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/fractional_decimal"
import { $$ as serialize_date } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/iso_udhr"
import { $$ as serialize_boolean } from "pareto-standard-operations/dist/implementation/serializers/primitives/boolean/true_false"

const abort = () => {
    _ea.deprecated_panic("abort called")
}

export type Some_Error =
    | ['parse error', d_parse_result._T_Parse_Error]
    | ['cannot happen because implementation throws which it should not', null]

export const $$ = (
    $p: {
        'file content': string
    }

): _et.Refinement_Result<string, Some_Error> => {

    return parse(
        $p['file content'],
        { 'tab size': 4 }
    ).deprecated_transform_error(
        ($): Some_Error => ['parse error', $]
    ).deprecated_refine_old(
        ($) => {
            return _ei.__create_success_refinement_result(unmarshall_boekhouding_oude_model.Root(
                $.content,
                {
                    'value deserializers': {
                        'boolean': ($) => deserialize_boolean($, abort),
                        'default number': ($) => deserialize_decimal($, abort),
                        'custom numbers': {
                            'Bedrag': ($) => deserialize_decimal($, abort),
                            'Promillage': ($) => deserialize_decimal($, abort),
                            'Dagen': ($) => deserialize_decimal($, abort),
                            'Datum': ($) => deserialize_date($, abort) - 711471,
                        }
                    }
                }
            ))
        },
        ($): Some_Error => ['cannot happen because implementation throws which it should not', null]
    ).transform_result(
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
                    'boolean': ($) => serialize_boolean($),
                    'default number': ($) => serialize_decimal($),
                    'custom numbers': {
                        'Bedrag': ($) => serialize_fractional_decimal($, { 'number of fractional digits': 2 }),
                        'Promillage': ($) => serialize_fractional_decimal($, { 'number of fractional digits': 3 }),
                        'Dagen': ($) => serialize_decimal($),
                        'Datum': ($) => serialize_date($),
                    }
                }
            }
        )
    )
}
