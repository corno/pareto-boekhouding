
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/resolved.js"
import type * as s_out from "../../../interface/schemas/prose.js"

namespace t_signatures {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Paragraph
    >
    export type Fiscaal = p_.Transformer<
        s_in.Fiscaal,
        s_out.Paragraph
    >
    export type Grootboek_Categorieen = p_.Transformer<
        s_in.Grootboek_Categorieen,
        s_out.Paragraph
    >
    export type Beheer = p_.Transformer<
        s_in.Beheer,
        s_out.Paragraph
    >
    export type Grootboekrekeningen = p_.Transformer<
        s_in.Grootboekrekeningen,
        s_out.Paragraph
    >
    export type Jaarbeheer = p_.Transformer<
        s_in.Jaarbeheer,
        s_out.Paragraph
    >
    export type Overige_balans_item = p_.Transformer<
        s_in.Overige_balans_item,
        s_out.Paragraph
    >
    export type Verwijzing_naar_Informele_rekening = p_.Transformer<
        s_in.Verwijzing_naar_Informele_rekening,
        s_out.Paragraph
    >
    export type Verwijzing_naar_Bankrekening = p_.Transformer<
        s_in.Verwijzing_naar_Bankrekening,
        s_out.Paragraph
    >
    export type Handelstransacties = p_.Transformer<
        s_in.Handelstransacties,
        s_out.Paragraph
    >
    export type Mutaties = p_.Transformer<
        s_in.Mutaties,
        s_out.Paragraph
    >
    export type Jaren = p_.Transformer<
        s_in.Jaren,
        s_out.Paragraph
    >
    export type Rekening_Mutatie = p_.Transformer<
        s_in.Rekening_Mutatie,
        s_out.Paragraph
    >
    export type Eerste_boekjaar = p_.Transformer<
        s_in.Eerste_boekjaar,
        s_out.Paragraph
    >
}

import * as v_serialize from "astn-core/implementation/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const Root: t_signatures.Root = ($) => v_serialize.Document(
    v_marshall.Root(
        $,
    ),
)

export const Fiscaal: t_signatures.Fiscaal = ($) => v_serialize.Document(
    v_marshall.Fiscaal(
        $,
    ),
)

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => v_serialize.Document(
    v_marshall.Grootboek_Categorieen(
        $,
    ),
)

export const Beheer: t_signatures.Beheer = ($) => v_serialize.Document(
    v_marshall.Beheer(
        $,
    ),
)

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => v_serialize.Document(
    v_marshall.Grootboekrekeningen(
        $,
    ),
)

export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => v_serialize.Document(
    v_marshall.Jaarbeheer(
        $,
    ),
)

export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => v_serialize.Document(
    v_marshall.Overige_balans_item(
        $,
    ),
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => v_serialize.Document(
    v_marshall.Verwijzing_naar_Informele_rekening(
        $,
    ),
)

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => v_serialize.Document(
    v_marshall.Verwijzing_naar_Bankrekening(
        $,
    ),
)

export const Handelstransacties: t_signatures.Handelstransacties = ($) => v_serialize.Document(
    v_marshall.Handelstransacties(
        $,
    ),
)

export const Mutaties: t_signatures.Mutaties = ($) => v_serialize.Document(
    v_marshall.Mutaties(
        $,
    ),
)

export const Jaren: t_signatures.Jaren = ($) => v_serialize.Document(
    v_marshall.Jaren(
        $,
    ),
)

export const Rekening_Mutatie: t_signatures.Rekening_Mutatie = ($) => v_serialize.Document(
    v_marshall.Rekening_Mutatie(
        $,
    ),
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => v_serialize.Document(
    v_marshall.Eerste_boekjaar(
        $,
    ),
)
