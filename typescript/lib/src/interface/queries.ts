import * as p_qi from 'pareto-core/dist/interface/query'

import * as queries_common from "pareto-common/dist/interface/queries"

import * as d_serialize_prose from "pareto-fountain-pen/dist/interface/to_be_generated/prose_serialize"

export namespace queries {

}

export namespace query_functions {

    export type genereer_jaarverslag = p_qi.Query_Function<
        queries_common.queries.process_file_data,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        null
    >

}
