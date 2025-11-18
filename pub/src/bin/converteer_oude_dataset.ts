#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/converteer_oude_dataset"

import * as d_resources from "../implementation/commands/converteer_oude_dataset"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write file': $r.commands['write file'],
            },
            {
                'read file': $r.queries['read file']
            },
        )
    },
)
