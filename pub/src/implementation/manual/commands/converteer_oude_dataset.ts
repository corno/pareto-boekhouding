import * as _p from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'

//dependencies
import { $$ as create_file_transformer } from "../../../modules/file_transformer/implementation/manual/command_creators/transform_file"
import { $$ as xx } from "../text_to_text/converteer_oude_dataset"

export const $$ = create_file_transformer(
    xx,
)