#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/converteer_oude_dataset"

import * as d_resources from "lib/dist/implementation/manual/commands/converteer_oude_dataset"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'write file': $r.commands['write file'],
                'log error': $r.commands['log error'],
            },
            {
                'read file': $r.queries['read file']
            },
        )
    },
)
