import * as p_ from 'pareto-core/interface/schema'

export type Root = {
    'jaren': p_.Dictionary<Jaar>
}

export type Jaar = {
    'journalen': p_.Dictionary<Jaar.Journaal>
}

export namespace Jaar {
    export type Journaal = {
        'posten': p_.Dictionary<Journaal.Post>
    }
    export namespace Journaal {
        export type Post = {
            'regels': p_.Dictionary<Post.Regel>
        }
        export namespace Post {
            export type Regel = {
                'type': ['Balans', null] | ['Resultaat', null]
                'grootboekrekening': string
                'bedrag': number
            }
        }
    }
}