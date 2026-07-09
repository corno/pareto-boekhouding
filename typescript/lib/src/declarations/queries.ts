import * as p_ from 'pareto-core/interface/query_implementation'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"

import type * as d_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"

type temp_parameters = {
    'tab size': number,
    'serialization parameters': d_serialize_prose.Parameters,
}

export type genereer_jaarverslag = p_.Query_Implementation<
    query_interfaces_pareto_common.process_file_data,
    {
        'tab size': number,
        'serialization parameters': d_serialize_prose.Parameters,
        'css': string
    },
    null
>

export type balans_grootboeken_csv = p_.Query_Implementation<
    query_interfaces_pareto_common.process_file_data,
    temp_parameters,
    null
>

export type resultaat_grootboeken_csv = p_.Query_Implementation<
    query_interfaces_pareto_common.process_file_data,
    temp_parameters,
    null
>

export type converteer_oude_dataset = p_.Query_Implementation<
    query_interfaces_pareto_common.process_file_data,
    temp_parameters,
    null
>