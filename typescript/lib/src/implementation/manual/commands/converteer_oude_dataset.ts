import * as p_ from 'pareto-core/implementation/command'

import type * as interface_ from "../../../interface/declarations/commands.js"

//dependencies
import * as c_file_to_file from "pareto-common/implementation/manual/commands/file_to_file"
import * as q_genereer_jaarverslag from "../queries/converteer_oude_dataset.js"

export const $$: interface_.converteer_oude_dataset = p_.command(
    ($d, $s, $q, $c) => [
        c_file_to_file.$$(
            null,
            {
                'read file': $q['read file'],
                'process data': q_genereer_jaarverslag.$$(
                    $s,
                    null,
                )
            },
            {
                'log error': $c['log error'],
                'write file': $c['write file'],
            },
        ).execute(
            $d,
            ($) => $
        ),
    ]
)
