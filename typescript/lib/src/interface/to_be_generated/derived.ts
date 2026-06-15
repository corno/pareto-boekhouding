import * as p_di from 'pareto-core/dist/interface/data'

import * as d_boekhouding from "../generated/liana/schemas/boekhouding/data/resolved"

export type Root = {
    'bron': d_boekhouding.Root
    'jaren': p_di.Dictionary<Jaar>
}

export type Jaar = {
    'bron': d_boekhouding.Jaren.D
    'handelstransacties': {
        'inkopen': p_di.Dictionary<Inkoop>
        'verkopen': p_di.Dictionary<Verkoop>
    }
    'overige balans items': p_di.Dictionary<Overige_Balans_Item>
    'informele rekeningen': p_di.Dictionary<Informele_Rekening>
    'verrekenposten': p_di.Dictionary<Verreken_Post>
    'inkoopsaldo': Balans.Post
    'verkoopsaldo': Balans.Post
    'btw': {
        'te veel aangegeven': Balans.Post,
        'nog aan te geven': Balans.Post,
        'openstaand': Balans.Post,
    }
    'bankrekeningen': p_di.Dictionary<Bankrekening>
    'jaarbeheer': {
        'resultaat': {
            'btw periodes': p_di.Dictionary<Btw_Periode>
            'grootboekrekeningen': Resultaat.Grootboek_Rekeningen
            'resultaat': number

        },
        'balans': {
            'grootboekrekeningen': Balans.Grootboek_Rekeningen
            'check balans': {
                'begin': boolean
                'eind': boolean
            }
        }
    }
    // 'salarisrondes': p_di.Dictionary<Salarisronde>
}

export type Inkoop = {
    'bron': d_boekhouding.Handelstransacties.Inkopen.D
    'totaal ex btw': number
    'totaal btw': number
}

export type Verkoop = {
    'bron': d_boekhouding.Handelstransacties.Verkopen.D
    'regels': p_di.Dictionary<Verkoop_Regel>
    'totaal ex btw': number
    'totaal btw': number
    'totaal inclusief btw': number
}

export type Verkoop_Regel = {
    'bron': d_boekhouding.Handelstransacties.Verkopen.D.Regels.D
    'btw bedrag': number
    'bedrag inclusief btw': number
}

export type Btw_Periode = {
    'bron': d_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D
    'handelsmutaties': {
        'inkopen': number
        'verkopen': number
    }
    // 'mutaties totaal': number
    'afhandeling': {
        'betalingen': number
        'verrekeningen': number
    }
    'status':
    | ['openstaand', {
        'bron': d_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Openstaand
    }]
    | ['aangegeven', {
        'bron': d_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Aangegeven
        'totaal aangegeven + afronding': number
        'todo niet volledig afgesloten': boolean
        'te veel aangegeven': number
    }]
}

export type Overige_Balans_Item = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Overige_balans_items.D
    'mutaties': {
        'memoriaal boekingen': number
        'inkopen': number
        'verkopen': number
        'totaal': number
    }
    'eindsaldo': number
    'overgenomen': number
    'todo': boolean
}

export type Bankrekening = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D
    'mutaties': number
    'eindsaldo': number
    'overgenomen': number
    'openstaand': number
    'todo': boolean
}

export type Informele_Rekening = {
    'bron': d_boekhouding.Jaarbeheer.Balans.Informele_rekeningen.D
    'mutaties': {
        'inkopen': number
        'verkopen': number
        'bankrekening mutatie verwerkingen': number
        'verrekenpost mutaties': number
    }
    'mutatie totaal': number
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
        'postgroepen': p_di.Dictionary<Post_Groep>
        'totaal': number
    }

    export type Grootboek_Rekeningen = p_di.Dictionary<Grootboekrekening>

    export type Post_Groep = {
        'totaal': number
    }
}

export namespace Balans {

    export type Grootboekrekening = {
        'bron': d_boekhouding.Grootboekrekeningen.Balans.D
        'postgroepen': p_di.Dictionary<Post_Groep>
        'totaal': Post
    }

    export type Grootboek_Rekeningen = p_di.Dictionary<Grootboekrekening>

    export type Post_Groep = {
        posten: p_di.Dictionary<Post>
    }

    export type Post = {
        'beginsaldo': number
        'mutaties': number
    }

}