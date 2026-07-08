import * as p_ from 'pareto-core/interface/query'

import type * as actions_queries_pareto_common from "pareto-common/interface/query_actions"

import type * as d_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"


export type genereer_jaarverslag = p_.Query<
    actions_queries_pareto_common.process_file_data,
    {
        'tab size': number,
        'serialization parameters': d_serialize_prose.Parameters,
    },
    null
>

export type converteer_oude_dataset = p_.Query<
    actions_queries_pareto_common.process_file_data,
    {
        'tab size': number,
        'serialization parameters': d_serialize_prose.Parameters,
    },
    null
>