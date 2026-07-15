import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

//data  types
import type * as s_boekhouding from "../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as s_file_in_file_out from "pareto-common/interface/schemas/file_in_file_out_query"

//dependencies
import * as r_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters.js"
import * as ser_path from "pareto-resources/implementation/serializers/unrestricted_path"
import * as ser_resolved_document_deserialization from "liana-core/_implementation/serializers/resolved_document_deserialization"
import * as ser_location from "astn-core/_implementation/serializers/location"
import * as t_resolved_document_deserialization_to_location from "liana-core/_implementation/transformers/resolved_document_deserialization/location"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const $$: p_.Query_Implementation<
    p_.Query_Interface<
        s_boekhouding.Root_,
        s_file_in_file_out.Error,
        s_file_in_file_out.Parameters
    >,
    {
        'tab size': number,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_boekhouding.Root_, s_file_in_file_out.Error>(
        (abort) => r_boekhouding_resolved_from_loc.Root(
            $d.data,
            ($) => abort(
                {
                    'message': sh.ph.composed([
                        sh.ph.text(ser_path.Node_Path($d.path)),
                        sh.ph.text(":"),
                        sh.ph.text(ser_location.Possible_Range(
                            t_resolved_document_deserialization_to_location.Error($),
                            {
                                'character location reporting': ['one based', null],
                            }
                        )
                        ),
                        sh.ph.text(": "),
                        sh.ph.text(ser_resolved_document_deserialization.Error($)),
                    ])
                }
            ),
            {
                'tab size': $s['tab size']
            }
        )
    ))
)
