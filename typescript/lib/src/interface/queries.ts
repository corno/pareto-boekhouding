import * as p_ from 'pareto-core/dist/interface/query'

import * as queries_common from "pareto-common/dist/interface/queries"

import * as d_serialize_prose from "pareto-fountain-pen/dist/interface/data/prose_serialize"

export namespace queries {

}

export namespace query_functions {

    export type genereer_jaarverslag = p_.Query_Function<
        queries_common.queries.process_file_data,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        null
    >

    export type converteer_oude_dataset = p_.Query_Function<
        queries_common.queries.process_file_data,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        null
    >

}
