// import * as _pds from 'pareto-core-deserializer'
// import * as _pi from 'pareto-core-interface'
// import * as _pinternals from 'pareto-core-internals'

// import * as d_boekhouding from "../../../interface/generated/pareto/schemas/boekhouding/data_types/source"

// export type Error =
//     | ['parse error', _T_Parse_Error]
//     | ['primitive deserialization', string]

// export namespace signatures {
//     export type Root = _pi.Deserializer<d_boekhouding.Root, Error>

// }

// //data types
// import { _T_Parse_Error } from "../../../interface/generated/pareto/core/parse_result"

// //dependencies
// import { parse as ds_parse } from "../../generated/pareto/generic/parse/parse"
// import { $$ as ds_fractional_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/fractional_decimal"
// import { $$ as ds_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"
// import { $$ as ds_date } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/iso_udhr"
// import { $$ as ds_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"

// import * as r_um_boekhouding from "../../generated/pareto/schemas/boekhouding/unmarshall"
// import * as r_bh from "../../refiners/schemas/boekhouding_target/boekhouding_source"

// export const $: signatures.Root = ($, abort) => {

//     const x = ds_parse(
//         $,
//         { 'tab size': 4 },
//         ($) => abort(['parse error', $])
//     )

//     const abort2 = ($: string) => abort(['primitive deserialization', $])

//     const x2 = r_um_boekhouding.Root(
//         x.content,
//         {
//             'value deserializers': {
//                 'boolean': (s: string) => ds_boolean(s, abort2),
//                 'default number': ($) => ds_decimal($, abort2),
//                 'custom numbers': {
//                     'Bedrag': ($) => ds_decimal($, abort2),
//                     'Promillage': ($) => ds_decimal($, abort2),
//                     'Dagen': ($) => ds_decimal($, abort2),
//                     'Datum': ($) => ds_date($, abort2) - 711471, //klopt deze offset hier?
//                 }
//             }
//         }
//     )

//     return r_bh.r_Root(
//         x2,
//         {
//             'location 2 string': _pinternals.location_to_string,
//             'parameters': {
//                 'lookups': null,
//                 'values': null,
//             }
//         }
//     )
// }
