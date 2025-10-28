import * as _pt from 'exupery-core-types'
import * as _ed from 'exupery-core-data'

import * as _i_in from "../../interface/generated/pareto/schemas/boekhouding_oude_model/data_types/source"
import * as _i_out from "../../interface/generated/pareto/schemas/boekhouding/data_types/target"

// **** TYPES

export type Balans_Resultaat_Mutatie = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Balans_Resultaat_Mutatie<_ed.Source_Location>

export type Beheer = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Beheer<_ed.Source_Location>

export type Eerste_boekjaar = (
    $$_: _i_in.Root.Jaren.D.Eerste_boekjaar,
    $$_p: null,
) => _i_out.Eerste_boekjaar<_ed.Source_Location>

export type Fiscaal = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Fiscaal<_ed.Source_Location>

export type Grootboek_Categorieen = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Grootboek_Categorieen<_ed.Source_Location>

export type Grootboekrekeningen = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Grootboekrekeningen<_ed.Source_Location>

export type Handelstransacties = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Handelstransacties<_ed.Source_Location>

export type Jaarbeheer = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Jaarbeheer<_ed.Source_Location>

export type Jaren = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Jaren<_ed.Source_Location>

export type Mutaties = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: {
        'jaar': string
    },
) => _i_out.Mutaties<_ed.Source_Location>

export type Overige_balans_item = (
    $$_: _i_in.Root.Jaren.D.Overige_balans_items.D,
    $$_p: null,
) => _i_out.Overige_balans_item<_ed.Source_Location>

export type Root = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Root<_ed.Source_Location>

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
    $$_p: null,
) => _i_out.Verwijzing_naar_Bankrekening<_ed.Source_Location>

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
    $$_p: null,
) => _i_out.Verwijzing_naar_Informele_rekening<_ed.Source_Location>
