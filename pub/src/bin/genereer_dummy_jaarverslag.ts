#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/commands/genereer_dummy_jaarverslag"

_pn.run_main_procedure(
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
