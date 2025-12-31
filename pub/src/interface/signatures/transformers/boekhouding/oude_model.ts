import * as _pi from 'pareto-core-interface'

import * as _i_in from "../../../generated/pareto/schemas/boekhouding_oude_model/data_types/source"
import * as _i_out from "../../../generated/pareto/schemas/boekhouding/data_types/target"

import * as d_token from "../../../generated/pareto/core/token"

// **** TYPES

export type Balans_Resultaat_Mutatie = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Balans_Resultaat_Mutatie<d_token._T_Range>

export type Beheer = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Beheer<d_token._T_Range>

export type Eerste_boekjaar = (
    $$_: _i_in.Root.Jaren.D.Eerste_boekjaar,
    $$_p: null,
) => _i_out.Eerste_boekjaar<d_token._T_Range>

export type Fiscaal = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Fiscaal<d_token._T_Range>

export type Grootboek_Categorieen = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Grootboek_Categorieen<d_token._T_Range>

export type Grootboekrekeningen = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Grootboekrekeningen<d_token._T_Range>

export type Handelstransacties = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Handelstransacties<d_token._T_Range>

export type Jaarbeheer = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Jaarbeheer<d_token._T_Range>

export type Jaren = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Jaren<d_token._T_Range>

export type Mutaties = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: {
        'jaar': string
    },
) => _i_out.Mutaties<d_token._T_Range>

export type Overige_balans_item = (
    $$_: _i_in.Root.Jaren.D.Overige_balans_items.D,
    $$_p: null,
) => _i_out.Overige_balans_item<d_token._T_Range>

export type Root = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Root<d_token._T_Range>

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
    $$_p: null,
) => _i_out.Verwijzing_naar_Bankrekening<d_token._T_Range>

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
    $$_p: null,
) => _i_out.Verwijzing_naar_Informele_rekening<d_token._T_Range>
