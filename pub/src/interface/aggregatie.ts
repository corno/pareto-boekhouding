import * as _et from 'exupery-core-types'

import * as d_boekhouding from "./generated/pareto/schemas/boekhouding/data_types/source"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': _et.Dictionary<Jaar>
}

export type Jaar = {
    'bron': d_boekhouding.Jaren.D
    'grootboekrekeningen': {
        'balans': _et.Dictionary<Balans_Grootboekrekening>
        'resultaat': _et.Dictionary<Resultaat_Grootboekrekening>
    }
}

export type Balans_Grootboekrekening = {
    'bron': d_boekhouding.Grootboekrekeningen.Balans.D
    'gerelateerde inkopen': _et.Dictionary<{
        'bron': d_boekhouding.Handelstransacties.Inkopen.D
        'regels': _et.Dictionary<Gerelateerde_Inkoop_Regel>
    }>
}

export type Gerelateerde_Inkoop_Regels = _et.Dictionary<Gerelateerde_Inkoop_Regel>

export type Gerelateerde_Inkoop_Regel = {
    'bron': d_boekhouding.Handelstransacties.Inkopen.D.Regels.D
}

export type Resultaat_Grootboekrekening = {
    'bron': d_boekhouding.Grootboekrekeningen.Resultaat.D
    'gerelateerde inkopen': _et.Dictionary<{
        'bron': d_boekhouding.Handelstransacties.Inkopen.D
        'regels': _et.Dictionary<Gerelateerde_Inkoop_Regel>
    }>
}