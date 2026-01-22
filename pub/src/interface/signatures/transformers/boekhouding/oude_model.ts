import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../generated/pareto/schemas/boekhouding_oude_model/data"
import * as d_out from "../../../generated/pareto/schemas/boekhouding/data"

import * as d_token from "../../../generated/pareto/core/token"

// **** TYPES

export type Balans_Resultaat_Mutatie = (
    $$_: d_in.Root,
) => d_out.Balans_Resultaat_Mutatie<d_token._T_Range>

export type Beheer = (
    $$_: d_in.Root,
) => d_out.Beheer<d_token._T_Range>

export type Eerste_boekjaar = (
    $$_: d_in.Root.Jaren.D.Eerste_boekjaar,
) => d_out.Eerste_boekjaar<d_token._T_Range>

export type Fiscaal = (
    $$_: d_in.Root,
) => d_out.Fiscaal<d_token._T_Range>

export type Grootboek_Categorieen = (
    $$_: d_in.Root,
) => d_out.Grootboek_Categorieen<d_token._T_Range>

export type Grootboekrekeningen = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Grootboekrekeningen<d_token._T_Range>

export type Handelstransacties = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Handelstransacties<d_token._T_Range>

export type Jaarbeheer = (
    $$_: d_in.Root.Jaren.D,
) => d_out.Jaarbeheer<d_token._T_Range>

export type Jaren = (
    $$_: d_in.Root,
) => d_out.Jaren<d_token._T_Range>

export type Mutaties = (
    $$_: d_in.Root.Jaren.D,
    $$_p: {
        'jaar': string
    },
) => d_out.Mutaties<d_token._T_Range>

export type Overige_balans_item = (
    $$_: d_in.Root.Jaren.D.Overige_balans_items.D,
) => d_out.Overige_balans_item<d_token._T_Range>

export type Root = (
    $$_: d_in.Root,
) => d_out.Root<d_token._T_Range>

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
) => d_out.Verwijzing_naar_Bankrekening<d_token._T_Range>

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
) => d_out.Verwijzing_naar_Informele_rekening<d_token._T_Range>
