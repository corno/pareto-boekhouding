import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding_oude_model/serialize"
import * as _i_serialize from "../../generic/schemas/astn_target/serializers"
import * as _i_marshall from "./marshall"


export const Bestandsnaam: _i_signatures._T_Bestandsnaam = ($, $p) => _i_serialize.Document(
    _i_marshall.Bestandsnaam(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Root: _i_signatures._T_Root = ($, $p) => _i_serialize.Document(
    _i_marshall.Root(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
