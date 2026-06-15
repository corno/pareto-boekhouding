#!/usr/bin/env -S node --enable-source-maps

import * as ph from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/converteer_oude_dataset"

ph.run_main_command(
    ($r) => {
        return procedure(
            {
                'serialization parameters': {
                    'indentation': "   ",
                    'newline': "\n",
                },
                'tab size': 4,
            },
            {
                'read file': $r['filesystem unrestricted'].queries['read file']
            },
            {
                'write file': $r['filesystem unrestricted'].commands['write file'],
                'log error': $r.stream.commands['log error'],
            },
        )
    },
)
