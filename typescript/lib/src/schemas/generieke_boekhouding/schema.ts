import * as p_ from 'pareto-core/interface/schema'

import type * as s_primitives from "../primitives/schema.js"

export type Root = {
    'jaren2': p_.Dictionary<Jaar2>
}

export type Jaar2 = {
    'resultaat': {
        'grootboekrekeningen': Resultaat.Grootboek_Rekeningen
        'resultaat': Bedrag_in_Euro
    },
    'balans': {
        'grootboekrekeningen': Balans.Grootboek_Rekeningen
        'check balans': {
            'begin': boolean
            'eind': boolean
        }
    }


}

export namespace Resultaat {

    export type Grootboek_Rekeningen = p_.Dictionary<Grootboekrekening>

    export type Grootboekrekening = {
        'zijde': 
        | ['kosten', null]
        | ['opbrengsten', null]
        'hoofdcategorie': string
        'subcategorie': string
        'dagboeken': p_.Dictionary<Dagboek>
        'totaal': Bedrag_in_Euro
    }


    export type Dagboek = {
        'boekingen': p_.Dictionary<Bedrag_in_Euro>
    }
}

export namespace Balans {

    export type Grootboekrekening = {
        'zijde':
        | ['activa', null]
        | ['passiva', null]
        'hoofdcategorie': string
        'subcategorie': string
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

export type Bedrag_in_Euro = s_primitives.Fractional_Decimal
