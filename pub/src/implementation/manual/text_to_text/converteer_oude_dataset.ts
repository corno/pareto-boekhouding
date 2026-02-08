import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//dependencies
import * as r_boekhouding_oude_model_from_loc from "../../generated/liana/schemas/boekhouding_oude_model/refiners/list_of_characters"
import * as r_boekhouding_unresolved_from_boekhouding_oude_model from "../schemas/boekhouding_unresolved/refiners/boekhouding_oude_model"
import * as t_deserialize_parse_tree_to_fountain_pen from "liana-core/dist/implementation/manual/schemas/deserialize/transformers/fountain_pen"
// import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../generated/liana/schemas/boekhouding/resolved/refiners/unresolved"
namespace r_boekhouding_resolved_from_boekhouding_unresolved {
    export const Root = ($: any) => _pdev.implement_me("fix generated code")
}
import * as t_boekhouding_resolved_to_fp from "../../generated/liana/schemas/boekhouding/resolved/transformers/fountain_pen"

export const $$: Signature = ($, abort, $p) => t_boekhouding_resolved_to_fp.Root(
    r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        r_boekhouding_unresolved_from_boekhouding_oude_model.Root(
            r_boekhouding_oude_model_from_loc.Root(
                $,
                ($) => abort(t_deserialize_parse_tree_to_fountain_pen.Error($)),
                $p
            )
        ),
    )
)