
import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/boekhouding/signatures/resolved/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

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
