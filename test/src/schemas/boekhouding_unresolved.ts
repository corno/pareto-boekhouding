import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

// import * as d_static_html from "pub/dist/interface/generated/pareto/schemas/static-html/data"

// import * as ds_static_html from "pub/dist/implementation/manual/schemas/static_html/deserializers"
// import * as s_static_html from "pub/dist/implementation/manual/schemas/static_html/serializers"
// import * as d_unmarshall from "pub/dist/interface/generated/pareto/core/unmarshall"

import * as sh from "pareto-test/dist/temporary_testset_generator/shorthands"


// export const Document_Deserialize: _pi.Deserializer<d_static_html.Document, d_unmarshall.Error> = ($, abort) => {
//     return ds_static_html.Document(
//         $,
//         abort,
//     )
// }

// export const Document_Serialize: _pi.Serializer<d_static_html.Document> = ($) => {
//     return s_static_html.Document(
//         $,
//     )
// }

export const $$ = sh.schema(

    {},
    {},
    {},
    {},
    {},
)