import * as p_ from 'pareto-core/interface/schema'

import type * as s_boekhouding from "../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_primitives from "../primitives/schema.js"

export type Root = {
    'bron': s_boekhouding.Root
    'jaren': p_.Dictionary<Jaar>
}

export type Bedrag_in_Euro = s_primitives.Fractional_Decimal

export type Jaar = {
    'bron': s_boekhouding.Jaren.D
    'handelstransacties': {
        'inkopen': p_.Dictionary<Inkoop>
        'verkopen': p_.Dictionary<Verkoop>
    }
    'btw': {
        'btw periodes': p_.Dictionary<Btw_Periode>
        'te veel aangegeven': Balans.Samenvatting,
        'nog aan te geven': Balans.Samenvatting,
        'openstaand': Balans.Samenvatting,
    }
    'resultaat': {
        'grootboekrekeningen': Resultaat.Grootboek_Rekeningen
        'resultaat': Bedrag_in_Euro

    },
    'balans': {
        'overige balans items': p_.Dictionary<Overige_Balans_Item>
        'bankrekeningen': p_.Dictionary<Bankrekening>
        'informele rekeningen': p_.Dictionary<Informele_Rekening>
        'verrekenposten': p_.Dictionary<Verreken_Post>
        'inkoopsaldo': Balans.Samenvatting
        'verkoopsaldo': Balans.Samenvatting
        'grootboekrekeningen': Balans.Grootboek_Rekeningen
        'check balans': {
            'begin': boolean
            'eind': boolean
        }
    }
}

export type Inkoop = {
    'bron': s_boekhouding.Handelstransacties.Inkopen.D
    'totaal ex btw': Bedrag_in_Euro
    'totaal btw': Bedrag_in_Euro
    'regels': p_.Dictionary<Inkoop_Regel>
}

export type Inkoop_Regel = {
    'bron': s_boekhouding.Handelstransacties.Inkopen.D.Regels.D
    'bedrag context': s_boekhouding.Handelstransacties.Inkopen.D.Regels.D.Bedrag.Bekend
}

export type Verkoop = {
    'bron': s_boekhouding.Handelstransacties.Verkopen.D
    'regels': p_.Dictionary<Verkoop_Regel>
}

export type Verkoop_Regel = {
    'bron': s_boekhouding.Handelstransacties.Verkopen.D.Regels.D
    'btw bedrag': Bedrag_in_Euro
    'bedrag inclusief btw': Bedrag_in_Euro
}

export type Btw_Periode = {
    'bron': s_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D
    'handelsmutaties': {
        'inkopen': {
            'totaal': Bedrag_in_Euro
        }
        'verkopen': {
            'totaal': Bedrag_in_Euro
        }
    }
    // 'mutaties totaal': Bedrag_in_Euro
    'afhandeling': {
        'betalingen': Bedrag_in_Euro
        'verrekeningen': Bedrag_in_Euro
    }
    'status':
    | ['openstaand', {
        'bron': s_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Openstaand
    }]
    | ['aangegeven', {
        'bron': s_boekhouding.Jaarbeheer.Resultaat.BTW_periodes.D.Status.Aangegeven
        'totaal aangegeven + afronding': Bedrag_in_Euro
        'todo niet volledig afgesloten': boolean
        'te veel aangegeven': Bedrag_in_Euro
    }]
}

export type Overige_Balans_Item = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Overige_balans_items.D
    'inkopen': p_.Dictionary<{
        'regels': p_.Dictionary<Inkoop_Regel>
    }>
    'mutaties': {
        'memoriaal boekingen': Bedrag_in_Euro
        'inkopen': Bedrag_in_Euro
        'verkopen': Bedrag_in_Euro
        'totaal': Bedrag_in_Euro
    }
    'eindsaldo': Bedrag_in_Euro
    'overgenomen': Bedrag_in_Euro
    'todo': boolean
}

export type Bankrekening = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D
    'verwerking bron': p_.Optional_Value<s_boekhouding.Mutaties.Bankrekeningen.D> /** als de bankrekening ook is aangemaakt in de verwerkeringen is deze hier beschikbaar */
    'mutaties': p_.Dictionary<Bankrekening_Mutatie>
    'mutaties totaal': Bedrag_in_Euro
    'eindsaldo': Bedrag_in_Euro
    'overgenomen': Bedrag_in_Euro
    'openstaand': Bedrag_in_Euro
    'todo': boolean
}

export type Bankrekening_Mutatie = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D
    'verwerking bron': p_.Optional_Value<s_boekhouding.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D> /** als de mutatie is verwerkt, dan is de verwerking hier beschkbaar */
}

export type Informele_Rekening = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Informele_rekeningen.D
    'mutaties': {
        'inkopen': Bedrag_in_Euro
        'verkopen': Bedrag_in_Euro
        'bankrekening mutatie verwerkingen': Bedrag_in_Euro
        'verrekenpost mutaties': Bedrag_in_Euro
    }
    'mutatie totaal': Bedrag_in_Euro
    'eindsaldo': Bedrag_in_Euro
    'overgenomen': Bedrag_in_Euro
    'openstaand': Bedrag_in_Euro
    'todo': boolean
}

export type Verreken_Post = {
    'bron': s_boekhouding.Jaarbeheer.Balans.Verrekenposten.D
    'eigen mutaties': Bedrag_in_Euro
    'bankrekening mutaties': Bedrag_in_Euro
    'saldo': Bedrag_in_Euro
    'todo': boolean
}


export namespace Resultaat {

    export type Grootboekrekening = {
        'bron': s_boekhouding.Grootboekrekeningen.Resultaat.D
        'dagboeken': p_.Dictionary<Dagboek>
        'totaal': Bedrag_in_Euro
    }

    export type Grootboek_Rekeningen = p_.Dictionary<Grootboekrekening>

    export type Dagboek = {
        'boekingen': p_.Dictionary<Bedrag_in_Euro>
    }
}

export namespace Balans {

    export type Grootboekrekening = {
        'bron': s_boekhouding.Grootboekrekeningen.Balans.D
        'clusters': p_.Dictionary<Cluster>
        'totaal': Samenvatting
    }

    export type Grootboek_Rekeningen = p_.Dictionary<Grootboekrekening>

    export type Cluster = {
        'dagboeken': p_.Dictionary<Samenvatting>
    }

    export type Samenvatting = {
        'beginsaldo': Bedrag_in_Euro
        'mutaties': {
            'xx': p_.Dictionary<Bedrag_in_Euro> | null
            'totaal': Bedrag_in_Euro
        }
    }

}