import * as _pi from 'pareto-core/dist/interface'

import * as d_boekhouding from "../generated/liana/schemas/boekhouding/data/resolved"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': _pi.Dictionary<Jaar>
}

export type Jaar = {
    'handelstransacties': {
        'inkopen': _pi.Dictionary<Inkoop>
        'verkopen': _pi.Dictionary<Verkoop>
    }
    'btw periodes': _pi.Dictionary<Btw_Periode>
    'overige balans items': _pi.Dictionary<Overige_Balans_Item>
    'bankrekeningen': _pi.Dictionary<Bankrekening>
    'resultaat grootboekrekeningen': Resultaat.Grootboek_Rekeningen
    'resultaat': number
    'balans grootboekrekeningen': Balans.Grootboek_Rekeningen
    'verrekenposten': _pi.Dictionary<Verreken_Post>
    // 'salarisrondes': _pi.Dictionary<Salarisronde>
}

export type Inkoop = {
    'bron': d_boekhouding.Handelstransacties.Inkopen.D
    'totaal ex btw': number
    'totaal btw': number
}

export type Verkoop = {
    'bron': d_boekhouding.Handelstransacties.Verkopen.D
    'totaal ex btw': number
    'totaal btw': number
}

export type Btw_Periode = {
    'bron': d_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D
    'inkopen': number
    'verkopen': number
    'betalingen': number
    'verrekeningen': number
    'status':
    | ['openstaand', {
        'bron': d_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Openstaand
    }]
    | ['aangegeven', {
        'bron': d_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Aangegeven
        'todo niet gelijk': boolean
    }]
}

export type Overige_Balans_Item = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Overige_balans_items.D
}

export type Bankrekening = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D
    'mutaties': number
    'eindsaldo': number
    'overgenomen': number
    'openstaand': number
    'todo': boolean
}

export type Verreken_Post = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Verrekenposten.D
    'eigen mutaties': number
    'bankrekening mutaties': number
    'saldo': number
    'todo': boolean
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

export namespace Balans {

    export type Grootboekrekening = {
        'bron': d_boekhouding.Grootboekrekeningen.Balans.D
        'totaal': number
    }

    export type Grootboek_Rekeningen = _pi.Dictionary<Grootboekrekening>

}