import * as _p from 'pareto-core/dist/deserializer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_boekhouding_resolved from "../../../../interface/generated/pareto/schemas/boekhouding/data"
import * as d_resolved_deserializers from "astn-sealed/dist/interface/to_be_generated/deserialize_resolved_model"

export namespace signatures {

    export type Root = _pi.Deserializer_With_Parameters<d_boekhouding_resolved.Root, d_resolved_deserializers.Error, d_resolved_deserializers.Parameters>
}

//dependencies
import * as ds_unresolved from "../boekhouding_unresolved/temp_astn_deserializers"
import * as r_resolved_from_unresolved from "./refiners/boekhouding_unresolved"

export const Root: signatures.Root = ($, abort, $p) => {
    return r_resolved_from_unresolved.Root(
        ds_unresolved.Root(
            $,
            ($) => abort(['pre resolving', $]),
            $p,
        ),
        $p,
    )
}