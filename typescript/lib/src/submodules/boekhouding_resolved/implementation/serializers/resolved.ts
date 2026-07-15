
import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/resolved.js"

namespace t_signatures {
    export type Root = p_.Paragraph_Serializer<
        s_in.Root
    >
}

import * as v_serialize from "astn-core/_implementation/serializers/sealed_target"

import * as v_marshall from "../transformers/resolved/astn_sealed_target.js"

export const Root: t_signatures.Root = ($) => v_serialize.Document(
    v_marshall.Root(
        $,
    ),
)
