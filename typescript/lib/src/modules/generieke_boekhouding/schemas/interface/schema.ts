import * as p_ from 'pareto-core/schema'

import type * as s_primitives from "../primitives/schema.js"

export type Root = {
    'jaren': p_.Dictionary<Jaar>
}

export namespace Jaar {
    export type resultaat = {
        'grootboekrekeningen': Resultaat.Grootboek_Rekeningen
    }
    export type balans = {
        'grootboekrekeningen': Balans.Grootboek_Rekeningen
    }
}

export type Jaar = {
    'resultaat': Jaar.resultaat,
    'balans': Jaar.balans,


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

    export namespace Grootboekrekening {
        export type clusters = p_.Dictionary<Cluster>
    }

    export type Grootboekrekening = {
        'zijde':
        | ['activa', null]
        | ['passiva', null]
        'hoofdcategorie': string
        'subcategorie': string
        'clusters': Grootboekrekening.clusters
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
