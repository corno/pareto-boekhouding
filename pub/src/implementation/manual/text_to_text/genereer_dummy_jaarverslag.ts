import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//data
import * as dummy_jaarverslag from "../../../data/temp_static_html_rapportage"

//dependencies
import * as t_static_html_to_fp from "pareto-static-html/dist/implementation/manual/schemas/static_html/transformers/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


export const $$: Signature = ($) => t_static_html_to_fp.Document( //do nothing with the input, just return the dummy jaarverslag
    dummy_jaarverslag.rapportage
)