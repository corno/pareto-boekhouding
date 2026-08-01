import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

//data  types
import type * as s_boekhouding from "../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_file_in_file_out from "pareto-common/modules/file_in_file_out/schemas/query/schema"

//dependencies
import * as r_boekhouding_resolved_from_loc from "../../schemas/boekhouding_resolved/refiners/list_of_characters.js"
import * as ser_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/schemas/path/serializers"
import * as ser_resolved_document_deserialization from "liana-core/modules/resolved_document_deserialization/schemas/resolved_document_deserialization/serializers"
import * as ser_location from "astn-core/modules/deserialization/schemas/location/serializers"
import * as t_resolved_document_deserialization_to_location from "liana-core/modules/resolved_document_deserialization/schemas/resolved_document_deserialization/transformers/location"

//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated"

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
