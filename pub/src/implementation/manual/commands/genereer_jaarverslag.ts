import * as _p from 'pareto-core-command'

//dependencies
import { $$ as create_file_transformer } from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"
import { $$ as xx } from "../text_to_text/genereer_jaarverslag"

export const $$ = create_file_transformer(
    xx,
)