import * as _pci from 'pareto-core/dist/command_interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_pareto_stream from "pareto-stream/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type transform_file = _pci.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file,
            'log error': resources_pareto_stream.commands.log_error,
        }
    >

    export type stream_in_to_stream_out = _pci.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'get instream data': resources_pareto_stream.queries.get_instream_data,
        },
        {
            'log error': resources_pareto_stream.commands.log_error
            'write to stdout': resources_pareto_stream.commands.write_to_stdout
        }
    >

}