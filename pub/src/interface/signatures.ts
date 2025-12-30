import * as _pi from 'pareto-core-interface'

import * as resources_exupery from "exupery-resources/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type genereer_jaarverslag = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'write file': resources_exupery.commands.write_file,
            'log error': resources_exupery.commands.log_error,
        },
        {
            'read file': resources_exupery.queries.read_file
        }
    >

    export type genereer_dummy_jaarverslag = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'write file': resources_exupery.commands.write_file
        },
        {
            'read file': resources_exupery.queries.read_file
        }
    >

    export type converteer_oude_dataset = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'write file': resources_exupery.commands.write_file
        },
        {
            'read file': resources_exupery.queries.read_file
        }
    >

}