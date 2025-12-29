import * as _pi from 'pareto-core-interface'

import * as d_boekhouding from "../generated/pareto/schemas/boekhouding/data_types/source"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': _pi.Dictionary<Jaar>
}

export type Jaar = {
    'bron': d_boekhouding.Jaren.D
    'grootboekrekeningen': {
        'balans': _pi.Dictionary<Balans_Grootboekrekening>
        'resultaat': _pi.Dictionary<Resultaat_Grootboekrekening>
    }
}

export type Balans_Grootboekrekening = {
    'bron': d_boekhouding.Grootboekrekeningen.Balans.D
    'gerelateerde inkopen': _pi.Dictionary<{
        'bron': d_boekhouding.Handelstransacties.Inkopen.D
        'regels': _pi.Dictionary<Gerelateerde_Inkoop_Regel>
    }>
}

export type Gerelateerde_Inkoop_Regels = _pi.Dictionary<Gerelateerde_Inkoop_Regel>

export type Gerelateerde_Inkoop_Regel = {
    'bron': d_boekhouding.Handelstransacties.Inkopen.D.Regels.D
}

export type Resultaat_Grootboekrekening = {
    'bron': d_boekhouding.Grootboekrekeningen.Resultaat.D
    'gerelateerde inkopen': _pi.Dictionary<{
        'bron': d_boekhouding.Handelstransacties.Inkopen.D
        'regels': _pi.Dictionary<Gerelateerde_Inkoop_Regel>
    }>
}