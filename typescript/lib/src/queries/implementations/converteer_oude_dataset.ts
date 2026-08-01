import * as p_ from 'pareto-core/implementation/query'

import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_file_in_file_out from "pareto-common/modules/file_in_file_out/queries/interfaces"

//data  types
import type * as s_boekhouding from "../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_file_in_file_out from "pareto-common/modules/file_in_file_out/schemas/query/schema"

//dependencies
import * as r_boekhouding_oude_model_from_loc from "../../modules/boekhouding_oude_model/schemas/unconstrained/refiners/list_of_characters.js"
import * as r_boekhouding_resolved_from_boekhouding_oude_model from "../../schemas/boekhouding_resolved/refiners/boekhouding_oude_model.js"
import * as t_boekhouding_resolved_to_paragraph from "../../modules/boekhouding/schemas/resolved/transformers/paragraph.js"

import * as ser_unresolved_document_deserialization from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/serializers"
import * as t_unresolved_document_deserialization_to_location from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/transformers/location"
import * as ser_location from "astn-core/modules/deserialization/schemas/location/serializers"
import * as ser_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/schemas/path/serializers"
import * as ser_resolving from "liana-core/modules/resolved_document_deserialization/schemas/resolving/serializers"

//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_file_in_file_out.operation,
    {
        'tab size': number,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_boekhouding.Root_, s_file_in_file_out.Error>(
        (abort) => r_boekhouding_resolved_from_boekhouding_oude_model.Root(
            r_boekhouding_oude_model_from_loc.Root(
                    $d.data,
                    ($) => abort(
                        {
                            'message': sh.ph.composed([
                                sh.ph.text(ser_path.Node_Path($d.path)),
                                sh.ph.text(":"),
                                sh.ph.text(
                                    ser_location.Possible_Range(
                                        t_unresolved_document_deserialization_to_location.Error($),
                                        {
                                            'character location reporting': ['one based', null],
                                        }
                                    )
                                ),
                                sh.ph.text(": "),
                                sh.ph.text(
                                    ser_unresolved_document_deserialization.Error(
                                        $,
                                    )
                                )
                            ])
                        }
                    ),
                    $s
                ),
            ($) => abort(
                {
                    'message': sh.ph.composed([
                        sh.ph.text(ser_path.Node_Path($d.path)),
                        sh.ph.text(":"),
                        sh.ph.text(
                            ser_location.Range(
                                $.location,
                                {
                                    'character location reporting': ['one based', null],
                                }
                            )
                        ),
                        sh.ph.text(": "),
                        sh.ph.text(
                            ser_resolving.Error(
                                $,
                            )
                        )
                    ])
                }
            ),
        )
    )).transform(
        ($) => ({
            'paragraph': t_boekhouding_resolved_to_paragraph.Root(
                $
            )
        })
    )
)
