import * as _pi from 'pareto-core-interface'

import * as resources_exupery from "pareto-resources/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type transform_file = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'write file': resources_exupery.commands.write_file,
            'log error': resources_exupery.commands.log_error,
        },
        {
            'read file': resources_exupery.queries.read_file
        }
    >

}