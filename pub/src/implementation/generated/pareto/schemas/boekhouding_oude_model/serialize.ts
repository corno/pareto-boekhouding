import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_marshall from "./marshall"
import * as _i_serialize from "../../generic/serialize"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding_oude_model/serialize"


export const Root: _i_signatures._T_Root = ($, $p) => _i_serialize.Document(
    _i_marshall.Root(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
