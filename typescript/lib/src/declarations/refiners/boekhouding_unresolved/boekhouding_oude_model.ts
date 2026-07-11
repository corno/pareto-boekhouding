

import type * as s_in from "../../../submodules/boekhouding_oude_model/interface/schemas/data.js"
import type * as s_out from "../../../submodules/boekhouding_unresolved/interface/schemas/unresolved.js"


export type Rekening_Mutatie = (
    $$_: s_in.Root,
) => s_out.Rekening_Mutatie

export type Beheer = (
    $$_: s_in.Root,
) => s_out.Beheer

export type Eerste_boekjaar = (
    $$_: s_in.Root.Jaren.D.Eerste_boekjaar,
) => s_out.Eerste_boekjaar

export type Fiscaal = (
    $$_: s_in.Root,
) => s_out.Fiscaal

export type Grootboek_Categorieen = (
    $$_: s_in.Root,
) => s_out.Grootboek_Categorieen

export type Grootboekrekeningen = (
    $$_: s_in.Root.Jaren.D,
) => s_out.Grootboekrekeningen

export type Handelstransacties = (
    $$_: s_in.Root.Jaren.D,
) => s_out.Handelstransacties

export type Jaarbeheer = (
    $$_: s_in.Root.Jaren.D,
) => s_out.Jaarbeheer

export type Jaren = (
    $$_: s_in.Root,
) => s_out.Jaren

export type Mutaties = (
    $$_: s_in.Root.Jaren.D,
    $$pt: {
        'jaar': string
    },
) => s_out.Mutaties

export type Overige_balans_item = (
    $$_: s_in.Root.Jaren.D.Overige_balans_items.D,
) => s_out.Overige_balans_item

export type Root = (
    $$_: s_in.Root,
) => s_out.Root

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
) => s_out.Verwijzing_naar_Bankrekening

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
) => s_out.Verwijzing_naar_Informele_rekening

