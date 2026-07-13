import * as p_ from 'pareto-core/interface/schema'


export type Domein = {
    'links': Domein_Zijde
    'rechts': Domein_Zijde
}

export type Domein_Zijde = {
    'label': string
    'teken omkeren': boolean
    'hoofdcategorieen': p_.Dictionary<{
        'subcategorieen': p_.Dictionary<{
            'grootboekrekeningen': p_.Dictionary<Grootboekrekening>
            'totaal': number
        }>
        'totaal': number
    }>
    'totaal': number

}

export type Grootboekrekening = {
    'bedrag': number
}