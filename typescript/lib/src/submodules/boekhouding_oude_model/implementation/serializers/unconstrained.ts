import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../interface/schemas/data.js"
import type * as s_out from "../../interface/schemas/paragraph.js"

namespace t_signatures {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Paragraph
    >
}

import * as v_serialize from "astn-core/_implementation/transformers/sealed_target/paragraph"

import * as v_marshall from "../transformers/unconstrained/astn_sealed_target.js"

export const Root: t_signatures.Root = ($) => v_serialize.Document(
    v_marshall.Root(
        $,
    ),
)
