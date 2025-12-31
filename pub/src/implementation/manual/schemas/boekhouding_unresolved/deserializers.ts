import * as _pds from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import * as d_boekhouding_source from "../../../../interface/generated/pareto/schemas/boekhouding/data_types/target"
import * as d_parse_result from "../../../../interface/generated/pareto/core/parse_result"
import * as d_token from "../../../../interface/generated/pareto/core/token"

export type Error =
    | ['parse error', d_parse_result._T_Parse_Error]
    | ['primitive deserialization', string]

export namespace signatures {
    export type Root = _pi.Deserializer_With_Parameters<d_boekhouding_source.Root<d_token._T_Range>, Error, { 'file': string }>

}

//data types

//dependencies
import { parse as ds_parse } from "../../../generated/pareto/generic/parse/parse"
import { $$ as ds_fractional_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/fractional_decimal"
import { $$ as ds_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"
import { $$ as ds_date } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/iso_udhr"
import { $$ as ds_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as r_um_boekhouding from "../../../generated/pareto/schemas/boekhouding/unmarshall"

export const $: signatures.Root = ($, $p, abort) => {

    const x = ds_parse(
        $,
        { 
            'tab size': 4,
            'file': $p.file
        },
        ($) => abort(['parse error', $])
    )

    const abort2 = ($: string) => abort(['primitive deserialization', $])

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

    return x2
}
