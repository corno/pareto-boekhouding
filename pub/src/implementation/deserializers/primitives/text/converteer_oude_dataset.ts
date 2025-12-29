import * as _pds from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

import * as d_parse_result from "../../../../interface/generated/pareto/core/parse_result"



import { parse } from "../../../generated/pareto/generic/parse/parse"

import * as unmarshall_boekhouding_oude_model from "../../../generated/pareto/schemas/boekhouding_oude_model/unmarshall"

import * as t_bh_oud_to_bh from "../../../transformers/schemas/boekhouding_oude_model/boekhouding"

import * as resolve_boekhouding from "../../../refiners/schemas/boekhouding_target/boekhouding_source"

import * as serialize_boekhouding from "../../../generated/pareto/schemas/boekhouding/serialize"

import { $$ as deserialize_fractional_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/fractional_decimal"
import { $$ as deserialize_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/decimal"
import { $$ as deserialize_date } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/iso_udhr"
import { $$ as deserialize_boolean } from "pareto-standard-operations/dist/implementation/deserializers/primitives/boolean/true_false"


import { $$ as serialize_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/decimal"
import { $$ as serialize_fractional_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/fractional_decimal"
import { $$ as serialize_date } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/iso_udhr"
import { $$ as serialize_boolean } from "pareto-standard-operations/dist/implementation/serializers/primitives/boolean/true_false"

export type Some_Error =
    | ['parse error', d_parse_result._T_Parse_Error]
    | ['primitive deserialization', null]

export const $$: _pi.Deserializer<string, Some_Error> = ($, abort) => {

    const x = parse(
        $,
        { 'tab size': 4 },
        ($) => abort(['parse error', $])
    )

    const abort2 = ($: string) => abort(['primitive deserialization', null])

    const x2 = unmarshall_boekhouding_oude_model.Root(
        x.content,
        {
            'value deserializers': {
                'boolean': ($) => deserialize_boolean($, abort2),
                'default number': ($) => deserialize_decimal($, abort2),
                'custom numbers': {
                    'Bedrag': ($) => deserialize_decimal($, abort2),
                    'Promillage': ($) => deserialize_decimal($, abort2),
                    'Dagen': ($) => deserialize_decimal($, abort2),
                    'Datum': ($) => deserialize_date($, abort2) - 711471,
                }
            }
        }
    )

    return serialize_boekhouding.Root(
        resolve_boekhouding.r_Root(
            t_bh_oud_to_bh.Root(x2, null),
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
}
