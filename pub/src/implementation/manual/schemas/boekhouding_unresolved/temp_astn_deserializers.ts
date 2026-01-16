import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

import * as d_boekhouding_source from "../../../../interface/generated/pareto/schemas/boekhouding/data"
import * as d_token from "../../../../interface/generated/pareto/core/token"
import * as d_xx from "astn-sealed/dist/interface/to_be_generated/deserialize_unresolved_model"
export namespace signatures {
    
    export type Root = _pi.Deserializer_With_Parameters<d_boekhouding_source.Root<d_token._T_Range>, d_xx.Error, d_xx.Parameters>

}

//data types

//dependencies
import * as ds_astn_source from "astn-sealed/dist/implementation/schemas/astn_source/deserializers"
import { $$ as ds_fractional_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/fractional_decimal"
import { $$ as ds_decimal } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/decimal"
import { $$ as ds_date } from "pareto-standard-operations/dist/implementation/manual/primitives/integer/deserializers/iso_udhr"
import { $$ as ds_boolean } from "pareto-standard-operations/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as r_um_boekhouding from "../../../generated/pareto/schemas/boekhouding/unmarshall"

export const Root: signatures.Root = ($, abort, $p) => {

    const x = ds_astn_source.Document(
        $,
        ($) => abort(['parse error', $]),
        { 
            'tab size': 4,
            'uri': $p.uri
        },
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
