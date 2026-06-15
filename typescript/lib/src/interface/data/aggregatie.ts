import * as p_di from 'pareto-core/dist/interface/data'


export type Domein = {
    'links': Domein_Zijde
    'rechts': Domein_Zijde
}

export type Domein_Zijde = {
    'label': string
    'teken omkeren': boolean
    'hoofdcategorieen': p_di.Dictionary<{
        'subcategorieen': p_di.Dictionary<{
            'grootboekrekeningen': p_di.Dictionary<Grootboekrekening>
            'totaal': number
        }>
        'totaal': number
    }>
    'totaal': number

}

export type Grootboekrekening = {
    'bedrag': number
}