import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'

//dependencies
import { $$ as create_file_transformer } from "../../../modules/file_transformer/implementation/manual/command_creators/transform_file"
import * as ds_boekhouding_oude_model from "../schemas/boekhouding_oude_model/deserializers"
import * as t_bh_oud_to_bh from "../schemas/boekhouding_oude_model/transformers/boekhouding_unresolved"
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../schemas/boekhouding_resolved/refiners/boekhouding_unresolved"
import * as s_boekhouding_resolved from "../schemas/boekhouding_resolved/serializers"

export const $$ = create_file_transformer(
    ($, abort, $p,) => {
        return r_boekhouding_resolved_from_boekhouding_unresolved.Root(
            t_bh_oud_to_bh.Root(
                ds_boekhouding_oude_model.Root(
                    $,
                    ($) => abort(['pre resolving', $]),
                    {
                        'uri': $p.uri
                    },
                )
            ),
            {
                'location 2 string': ($) => `${$p.uri}:${$.start.relative.line}:${$.start.relative.column}-${$.end.relative.line}:${$.end.relative.column}`,
                'parameters': {
                    'lookups': null,
                    'values': null,
                }
            }
        )
    },
    ($) => s_boekhouding_resolved.Root($)
)