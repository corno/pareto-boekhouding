import * as p_ from 'pareto-core/interface/query_implementation'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"
import type * as d_path from "pareto-resources/interface/data/fs_unrestricted_path"
import type * as d_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"
import type * as d_boekhouding from "../modules/boekhouding_resolved/interface/data/resolved.js"
import type * as d_loc from "pareto-fountain-pen/interface/data/list_of_characters"
import type * as d_prose from "pareto-fountain-pen/interface/data/prose"

type temp_parameters = {
    'tab size': number,
    'serialization parameters': d_serialize_prose.Parameters,
}

export type load_resolved = p_.Query_Implementation<
    p_.Query_Interface<
        d_boekhouding.Root,
        d_prose.Phrase,
        {
            'data': d_loc.List_of_Characters,
            'path': d_path.Node_Path,
        }
    >,
    {
        'tab size': number,
    },
    null
>

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

export type todo = p_.Query_Implementation<
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