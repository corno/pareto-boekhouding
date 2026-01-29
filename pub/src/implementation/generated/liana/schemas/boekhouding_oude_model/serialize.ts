
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding_oude_model/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => v_serialize.Document(
    v_marshall.Bestandsnaam(
        $
    )
)

export const Root: t_signatures.Root = ($) => v_serialize.Document(
    v_marshall.Root(
        $
    )
)
