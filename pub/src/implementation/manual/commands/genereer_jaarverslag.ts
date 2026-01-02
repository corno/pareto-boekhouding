import * as _p from 'pareto-core-command'

//dependencies
import { $$ as create_file_transformer } from "../../../modules/file_transformer/implementation/manual/command_creators/transform_file"
import { $$ as xx } from "../text_to_text/genereer_jaarverslag"

export const $$ = create_file_transformer(
    xx,
)