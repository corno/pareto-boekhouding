import * as _pi from 'pareto-core/dist/interface'


export type Domein = {
    'links': Domein_Zijde
    'rechts': Domein_Zijde
}

export type Domein_Zijde = {
    'label': string
    'teken omkeren': boolean
    'hoofdcategorieen': _pi.Dictionary<{
        'subcategorieen': _pi.Dictionary<{
            'grootboekrekeningen': _pi.Dictionary<Grootboekrekening>
            'totaal': number
        }>
        'totaal': number
    }>
    'totaal': number

}

export type Grootboekrekening = {
    'bedrag': number
}