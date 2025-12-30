import * as _pds from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

export type Signature = _pi.Deserializer<string, Some_Error>

//data types
import * as d_parse_result from "../../../../interface/generated/pareto/core/parse_result"

export type Some_Error =
    | ['parse error', d_parse_result._T_Parse_Error]
    | ['primitive deserialization', string]

//dependencies
import { parse as ds_parse } from "../../../generated/pareto/generic/parse/parse"
import { $$ as ds_fractional_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/fractional_decimal"
import { $$ as ds_decimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/decimal"
import { $$ as ds_date } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/iso_udhr"
import { $$ as ds_boolean } from "pareto-standard-operations/dist/implementation/deserializers/primitives/boolean/true_false"

import * as r_unmarshall_boekhouding_oude_model from "../../../generated/pareto/schemas/boekhouding_oude_model/unmarshall"
import * as r_resolve_boekhouding from "../../../refiners/schemas/boekhouding_target/boekhouding_source"

import * as t_bh_oud_to_bh from "../../../transformers/schemas/boekhouding_oude_model/boekhouding"

import * as s_boekhouding from "../../../generated/pareto/schemas/boekhouding/serialize"
import { $$ as s_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/decimal"
import { $$ as s_fractional_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/fractional_decimal"
import { $$ as s_date } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/iso_udhr"
import { $$ as s_boolean } from "pareto-standard-operations/dist/implementation/serializers/primitives/boolean/true_false"


export const $$: Signature = ($, abort) => {

    const x = ds_parse(
        $,
        { 'tab size': 4 },
        ($) => abort(['parse error', $])
    )

    const abort2 = ($: string) => abort(['primitive deserialization', $])

    const x2 = r_unmarshall_boekhouding_oude_model.Root(
        x.content,
        {
            'value deserializers': {
                'boolean': ($) => ds_boolean($, () => abort2('boolean')),
                'default number': ($) => ds_decimal($, () => abort2('default number')),
                'custom numbers': {
                    'Bedrag': ($) => ds_decimal($, () => abort2('Bedrag')),
                    'Promillage': ($) => ds_decimal($, () => abort2('Promillage')),
                    'Dagen': ($) => ds_decimal($, () => abort2('Dagen')),
                    'Datum': ($) => ds_date($, () => abort2('Datum')) - 711471,
                }
            }
        }
    )

    return s_boekhouding.Root(
        r_resolve_boekhouding.r_Root(
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
                'boolean': ($) => s_boolean($),
                'default number': ($) => s_decimal($),
                'custom numbers': {
                    'Bedrag': ($) => s_fractional_decimal($, { 'number of fractional digits': 2 }),
                    'Promillage': ($) => s_fractional_decimal($, { 'number of fractional digits': 3 }),
                    'Dagen': ($) => s_decimal($),
                    'Datum': ($) => s_date($),
                }
            }
        }
    )
}
