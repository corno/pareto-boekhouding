import * as _pi from 'pareto-core-interface'

import * as _i_in from "../../../generated/pareto/schemas/boekhouding_oude_model/data_types/source"
import * as _i_out from "../../../generated/pareto/schemas/boekhouding/data_types/target"

// **** TYPES

export type Balans_Resultaat_Mutatie = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Balans_Resultaat_Mutatie<_pi.Deprecated_Source_Location>

export type Beheer = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Beheer<_pi.Deprecated_Source_Location>

export type Eerste_boekjaar = (
    $$_: _i_in.Root.Jaren.D.Eerste_boekjaar,
    $$_p: null,
) => _i_out.Eerste_boekjaar<_pi.Deprecated_Source_Location>

export type Fiscaal = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Fiscaal<_pi.Deprecated_Source_Location>

export type Grootboek_Categorieen = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Grootboek_Categorieen<_pi.Deprecated_Source_Location>

export type Grootboekrekeningen = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Grootboekrekeningen<_pi.Deprecated_Source_Location>

export type Handelstransacties = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Handelstransacties<_pi.Deprecated_Source_Location>

export type Jaarbeheer = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: null,
) => _i_out.Jaarbeheer<_pi.Deprecated_Source_Location>

export type Jaren = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Jaren<_pi.Deprecated_Source_Location>

export type Mutaties = (
    $$_: _i_in.Root.Jaren.D,
    $$_p: {
        'jaar': string
    },
) => _i_out.Mutaties<_pi.Deprecated_Source_Location>

export type Overige_balans_item = (
    $$_: _i_in.Root.Jaren.D.Overige_balans_items.D,
    $$_p: null,
) => _i_out.Overige_balans_item<_pi.Deprecated_Source_Location>

export type Root = (
    $$_: _i_in.Root,
    $$_p: null,
) => _i_out.Root<_pi.Deprecated_Source_Location>

export type Verwijzing_naar_Bankrekening = (
    $$_: string,
    $$_p: null,
) => _i_out.Verwijzing_naar_Bankrekening<_pi.Deprecated_Source_Location>

export type Verwijzing_naar_Informele_rekening = (
    $$_: string,
    $$_p: null,
) => _i_out.Verwijzing_naar_Informele_rekening<_pi.Deprecated_Source_Location>
