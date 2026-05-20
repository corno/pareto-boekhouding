import * as _pi from 'pareto-core/dist/interface'

import * as d_boekhouding from "../generated/liana/schemas/boekhouding/data/resolved"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': _pi.Dictionary<Jaar>
}

export type Jaar = {
    'grootboekrekeningen': {
        'balans': Domein
        'resultaat': Domein
    }
}

export type Domein = {
    'links': Domein_Zijde
    'rechts': Domein_Zijde
}

export type Domein_Zijde = {
    'label': string
    'hoofdcategorieen': _pi.Dictionary<{
        'subcategorieen': _pi.Dictionary<{
            'grootboekrekeningen': _pi.Dictionary<Grootboekrekening>
            'totaal': number
        }>
        'totaal': number
    }>
    'totaal': number

}

export type Grootboekrekening = {
    'bedrag': number
}