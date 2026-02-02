// import * as _p from 'pareto-core/dist/deserializer'
// import * as _pi from 'pareto-core/dist/interface'

// import * as d_boekhouding_oude_model from "../../../../interface/generated/liana/schemas/boekhouding_oude_model/data"
// import * as d_unresolved_deserializers from "astn-sealed/dist/interface/to_be_generated/deserialize_unresolved_model"

// export type Root = _pi.Deserializer_With_Parameters<d_boekhouding_oude_model.Root, d_unresolved_deserializers.Error, d_unresolved_deserializers.Parameters>

// //dependencies
// import * as ds_astn_source from "astn-sealed/dist/implementation/schemas/astn_source/deserializers"
// import { $$ as ds_fractional_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/fractional_decimal"
// import { $$ as ds_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"
// import { $$ as ds_date } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/iso_udhr"
// import { $$ as ds_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"

// import * as r_unmarshall_boekhouding_oude_model from "../../../generated/liana/schemas/boekhouding_oude_model/unmarshall"

// export const Root: Root = ($, abort, $p,) => {

//     const x = ds_astn_source.Document(
//         $,
//         ($) => abort(['parse error', $]),
//         {
//             'tab size': 4,
//             'uri': $p.uri
//         },
//     )

//     const abort2 = ($: string) => abort(['primitive deserialization', $])

//     return r_unmarshall_boekhouding_oude_model.Root(
//         x.content,
//         {
//             'value deserializers': {
//                 'boolean': ($) => ds_boolean($, () => abort2('boolean')),
//                 'default number': ($) => ds_decimal($, () => abort2('default number')),
//                 'custom numbers': {
//                     'Bedrag': ($) => ds_decimal($, () => abort2('Bedrag')),
//                     'Promillage': ($) => ds_decimal($, () => abort2('Promillage')),
//                     'Dagen': ($) => ds_decimal($, () => abort2('Dagen')),
//                     'Datum': ($) => ds_date($, () => abort2('Datum')) - 711471,
//                 }
//             }
//         }
//     )

// }
