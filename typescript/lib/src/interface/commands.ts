import * as p_ from 'pareto-core/interface/command'

import * as resources_pareto from "pareto-resources/interface/resources"
import * as resources_pareto_stream from "pareto-stream/interface/commands"

import * as d_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"

export namespace procedures {

    export type genereer_jaarverslag = p_.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file,
            'log error': resources_pareto_stream.commands.log_error,
        }
    >

    export type converteer_oude_dataset = p_.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file,
            'log error': resources_pareto_stream.commands.log_error,
        }
    >

}