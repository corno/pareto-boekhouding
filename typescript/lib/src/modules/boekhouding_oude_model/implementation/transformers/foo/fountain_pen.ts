
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../declarations/transformers/foo/prose.js"

import * as v_serialize from "astn-core/implementation/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const Root: t_signatures.Root = ($) => v_serialize.Document(
    v_marshall.Root(
        $,
    ),
)

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => v_serialize.Document(
    v_marshall.Bestandsnaam(
        $,
    ),
)
