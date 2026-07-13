import * as p_ from 'pareto-core/interface/schema'

import type * as s_boekhouding from "../../submodules/boekhouding_resolved/interface/schemas/resolved.js"

export type Root = {
    'bron': s_boekhouding.Root
    'jaren': p_.Dictionary<Jaar>
}

export type Jaar = {
    'bron': s_boekhouding.Jaren.D
    'handelstransacties': {
        'inkopen': p_.Dictionary<Inkoop>
        'verkopen': p_.Dictionary<Verkoop>
    }
    'overige balans items': p_.Dictionary<Overige_Balans_Item>
    'informele rekeningen': p_.Dictionary<Informele_Rekening>
    'verrekenposten': p_.Dictionary<Verreken_Post>
    'inkoopsaldo': Balans.Samenvatting
    'verkoopsaldo': Balans.Samenvatting
    'btw': {
        'te veel aangegeven': Balans.Samenvatting,
        'nog aan te geven': Balans.Samenvatting,
        'openstaand': Balans.Samenvatting,
    }
    'bankrekeningen': p_.Dictionary<Bankrekening>
    'jaarbeheer': {
        'resultaat': {
            'btw periodes': p_.Dictionary<Btw_Periode>
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
    // 'salarisrondes': p_.Dictionary<Salarisronde>
}

export type Inkoop = {
    'bron': s_boekhouding.Handelstransacties.Inkopen.D
    'totaal ex btw': number
    'totaal btw': number
}

export type Verkoop = {
    'bron': s_boekhouding.Handelstransacties.Verkopen.D
    'regels': p_.Dictionary<Verkoop_Regel>
    'totaal ex btw': number
    'totaal btw': number
    'totaal inclusief btw': number
}

export type Verkoop_Regel = {
    'bron': s_boekhouding.Handelstransacties.Verkopen.D.Regels.D
    'btw bedrag': number
    'bedrag inclusief btw': number
}

export type Btw_Periode = {
    'bron': s_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D
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
        'bron': s_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Openstaand
    }]
    | ['aangegeven', {
        'bron': s_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Aangegeven
        'totaal aangegeven + afronding': number
        'todo niet volledig afgesloten': boolean
        'te veel aangegeven': number
    }]
}

export type Overige_Balans_Item = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Overige_balans_items.D
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
    'bron': s_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D
    'verwerking bron': p_.Optional_Value<s_boekhouding.Mutaties.Bankrekeningen.D> /** als de bankrekening ook is aangemaakt in de verwerkeringen is deze hier beschikbaar */
    'mutaties': p_.Dictionary<Bankrekening_Mutatie>
    'mutaties totaal': number
    'eindsaldo': number
    'overgenomen': number
    'openstaand': number
    'todo': boolean
}

export type Bankrekening_Mutatie = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D
    'verwerking bron': p_.Optional_Value<s_boekhouding.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D> /** als de mutatie is verwerkt, dan is de verwerking hier beschkbaar */
}

export type Informele_Rekening = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Informele_rekeningen.D
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
    'bron': s_boekhouding.Jaarbeheer.Balans.Verrekenposten.D
    'eigen mutaties': number
    'bankrekening mutaties': number
    'saldo': number
    'todo': boolean
}


export namespace Resultaat {

    export type Grootboekrekening = {
        'bron': s_boekhouding.Grootboekrekeningen.Resultaat.D
        'dagboeken': p_.Dictionary<Dagboek>
        'totaal': number
    }

    export type Grootboek_Rekeningen = p_.Dictionary<Grootboekrekening>

    export type Dagboek = {
        // 'boekingen': p_.Dictionary<number>
        'totaal': number
    }
}

export namespace Balans {

    export type Grootboekrekening = {
        'bron': s_boekhouding.Grootboekrekeningen.Balans.D
        'dagboeken': p_.Dictionary<Dagboek>
        'totaal': Samenvatting
    }

    export type Grootboek_Rekeningen = p_.Dictionary<Grootboekrekening>

    export type Dagboek = {
        'boekingen': p_.Dictionary<Samenvatting>
    }

    export type Samenvatting = {
        'beginsaldo': number
        'mutaties': number
    }

}