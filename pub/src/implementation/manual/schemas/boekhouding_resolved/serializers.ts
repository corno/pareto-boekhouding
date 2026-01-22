import * as _pi from 'pareto-core/dist/interface'

import * as d_boekhouding_resolved from "../../../../interface/generated/liana/schemas/boekhouding/data"

import * as s_boekhouding from "../../../generated/liana/schemas/boekhouding/serialize"
import { $$ as s_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/serializers/decimal"
import { $$ as s_fractional_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/serializers/fractional_decimal"
import { $$ as s_date } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/serializers/iso_udhr"
import { $$ as s_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/serializers/true_false"

export type Root = _pi.Serializer<d_boekhouding_resolved.Root>

export const Root: Root = ($) => s_boekhouding.Root(
    $,
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