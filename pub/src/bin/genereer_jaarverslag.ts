#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/genereer_jaarverslag"

_eb.run_main_procedure(
    ($r) => {
        return procedure({
            'commands': {
                'write file': $r.commands['write file'],
            },
            'queries': {
                'read file': $r.queries['read file']
            }
        })
    },
)
