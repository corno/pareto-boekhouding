import * as p_ from 'pareto-core/implementation/query'

import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"

//data  types
import type * as s_boekhouding from "../../submodules/boekhouding_resolved/interface/schemas/resolved.js"
import type * as s_file_in_file_out from "pareto-common/interface/schemas/file_in_file_out_query"

//dependencies
import * as r_boekhouding_oude_model_from_loc from "../../submodules/boekhouding_oude_model/implementation/refiners/unconstrained/list_of_characters.js"
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "../../submodules/boekhouding_resolved/implementation/refiners/resolved/unresolved.js"
import * as r_boekhouding_unresolved_from_boekhouding_oude_model from "../refiners/boekhouding_unresolved/boekhouding_oude_model.js"
import * as t_boekhouding_resolved_to_prose from "../../submodules/boekhouding_resolved/implementation/transformers/resolved/paragraph.js"

import * as ser_unresolved_document_deserialization from "liana-core/_implementation/serializers/unresolved_document_deserialization"
import * as t_unresolved_document_deserialization_to_location from "liana-core/_implementation/transformers/unresolved_document_deserialization/location"
import * as ser_location from "astn-core/_implementation/serializers/location"
import * as ser_path from "pareto-resources/implementation/serializers/unrestricted_path"
import * as ser_resolving from "liana-core/_implementation/serializers/resolving"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.file_in_file_out,
    {
        'tab size': number,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_boekhouding.Root_, s_file_in_file_out.Error>(
        (abort) => r_boekhouding_resolved_from_boekhouding_unresolved.Root(
            r_boekhouding_unresolved_from_boekhouding_oude_model.Root(
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
                )
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
            p_.literal.nothing(),
            p_.literal.nothing(),
        )
    )).transform(
        ($) => ({
            'paragraph': t_boekhouding_resolved_to_prose.Root(
                $
            )
        })
    )
)
