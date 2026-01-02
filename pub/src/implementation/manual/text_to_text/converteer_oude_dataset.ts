import * as _pi from 'pareto-core-interface'

import * as d_xx from "astn-sealed/dist/interface/to_be_generated/deserialize_resolved_model"

export type Signature = _pi.Deserializer_With_Parameters<string, d_xx.Error, d_xx.Parameters>

import * as ds_boekhouding_oude_model from "../schemas/boekhouding_oude_model/temp_astn_deserializers"
import * as t_bh_oud_to_bh from "../schemas/boekhouding_oude_model/transformers/boekhouding_unresolved"
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../schemas/boekhouding_resolved/refiners/boekhouding_unresolved"
import * as s_boekhouding_resolved from "../schemas/boekhouding_resolved/serializers"

export const $$: Signature = ($, abort, $p) => {
    return s_boekhouding_resolved.Root(
        r_boekhouding_resolved_from_boekhouding_unresolved.Root(
            t_bh_oud_to_bh.Root(
                ds_boekhouding_oude_model.Root(
                    $,
                    ($) => abort(['pre resolving', $]),
                    $p,
                )
            ),
            $p,
        )
    )
}