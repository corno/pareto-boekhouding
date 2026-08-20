import * as p_ from 'pareto-core/interface/schema'

import type * as s_primitives from "../primitives/schema.js"

export type Root = {
    'jaren': p_.Dictionary<Jaar>
}

export type Jaar = {
    'resultaat': {
        'grootboekrekeningen': Resultaat.Grootboek_Rekeningen
    },
    'balans': {
        'grootboekrekeningen': Balans.Grootboek_Rekeningen
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
    }

    export type Grootboek_Rekeningen = p_.Dictionary<Grootboekrekening>

    export type Cluster = {
        'dagboeken': p_.Dictionary<Dagboek>
    }

    export type Dagboek = {
        'beginsaldo': Bedrag_in_Euro
        'mutaties': p_.Dictionary<Bedrag_in_Euro>
    }

}

export type Bedrag_in_Euro = s_primitives.Fractional_Decimal
