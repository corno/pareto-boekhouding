import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../generated/liana/schemas/boekhouding_oude_model/data"
import * as d_out from "../../../generated/liana/schemas/boekhouding/data/unresolved"


// **** TYPES

export type Balans_Resultaat_Mutatie = (
    $$_: d_in.Root,
) => d_out.Balans_Resultaat_Mutatie

export type Beheer = (
    $$_: d_in.Root,
) => d_out.Beheer

export type Eerste_boekjaar = (
    $$_: d_in.Root.Jaren.D.Eerste_boekjaar,
) => d_out.Eerste_boekjaar

export type Fiscaal = (
    $$_: d_in.Root,
) => d_out.Fiscaal

export type Grootboek_Categorieen = (
    $$_: d_in.Root,
) => d_out.Grootboek_Categorieen

export type Grootboekrekeningen = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Grootboekrekeningen

export type Handelstransacties = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Handelstransacties

export type Jaarbeheer = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Jaarbeheer

export type Jaren = (
    $$_: d_in.Root,
) => d_out.Jaren

export type Mutaties = (
    $$_: d_in.Root.Jaren.D,
    $$_p: {
        'jaar': string
    },
) => d_out.Mutaties

export type Overige_balans_item = (
    $$_: d_in.Root.Jaren.D.Overige_balans_items.D,
) => d_out.Overige_balans_item

export type Root = (
    $$_: d_in.Root,
) => d_out.Root

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
) => d_out.Verwijzing_naar_Bankrekening

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
) => d_out.Verwijzing_naar_Informele_rekening
