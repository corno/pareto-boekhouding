import * as p_ from 'pareto-core/interface/schema'

import type * as s_boekhouding from "../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_primitives from "../primitives/schema.js"

export type Root = {
    'jaren2': p_.Dictionary<Jaar2>
}

export type Jaar2 = {
    'resultaat': {
        'grootboekrekeningen': Resultaat.Grootboek_Rekeningen
        'resultaat': Bedrag_in_Euro
    },
    'btw': {
        'te veel aangegeven': Balans.Samenvatting,
        'nog aan te geven': Balans.Samenvatting,
        'openstaand': Balans.Samenvatting,
    }
    'balans': {
        'inkoopsaldo': Balans.Samenvatting
        'verkoopsaldo': Balans.Samenvatting
        'grootboekrekeningen': Balans.Grootboek_Rekeningen
        'check balans': {
            'begin': boolean
            'eind': boolean
        }
    }


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

export type Bedrag_in_Euro = s_primitives.Fractional_Decimal
