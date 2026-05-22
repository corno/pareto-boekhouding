import * as _pi from 'pareto-core/dist/interface'

import * as d_boekhouding from "../generated/liana/schemas/boekhouding/data/resolved"
import * as d_temp_aggregatie_2 from "../to_be_generated/aggregatie_2"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': _pi.Dictionary<Jaar>
}

export type Jaar = {
    'bankrekeningen': _pi.Dictionary<Bankrekening>
    'resultaat rekeningen': Resultaat.Grootboek_Rekeningen
    'resultaat': number
    'balans rekeningen': d_temp_aggregatie_2.Domein
}

export type Bankrekening = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D
    'mutaties': number
    'eindsaldo': number
    'overgenomen': number
    'openstaand': number
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