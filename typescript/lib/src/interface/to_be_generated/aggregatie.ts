import * as _pi from 'pareto-core/dist/interface'

import * as d_boekhouding from "../generated/liana/schemas/boekhouding/data/resolved"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': _pi.Dictionary<Jaar>
}

export type Jaar = {
    'resultaat rekeningen': Domein
    'resultaat': number
    'balans rekeningen': Domein
}

export type Domein = {
    'links': Domein_Zijde
    'rechts': Domein_Zijde
}

export type Domein_Zijde = {
    'label': string
    'teken omkeren': boolean
    'hoofdcategorieen': _pi.Dictionary<{
        'subcategorieen': _pi.Dictionary<{
            'grootboekrekeningen': _pi.Dictionary<Grootboekrekening>
            'totaal': number
        }>
        'totaal': number
    }>
    'totaal': number

}

export namespace Resultaat {

    export type Grootboekrekening = {
        'bron': d_boekhouding.Grootboekrekeningen.Resultaat.D
        'inkopen': number
        'verkopen': number
        'memoriaal boekingen': number
        'btw afrondingen': number
        'totaal': number
    }

    export type Grootboek_Rekeningen = _pi.Dictionary<Grootboekrekening>

}

export type Grootboekrekening = {
    'bedrag': number
}