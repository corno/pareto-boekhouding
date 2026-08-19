import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'
import p_variables from 'pareto-core/implementation/transformer/specials/variables'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "../../aggregatie2/schema.js"

namespace declarations {
    // export type Balans_Grootboekrekeningen = p_.Transformer_With_Parameter<
    //     s_in.Balans.Grootboek_Rekeningen,
    //     s_out.Domein_Zijde,
    //     {
    //         'type':
    //         | ['begin',
    //             null]
    //         | ['eind',
    //             null]
    //         'label': string
    //         'teken omkeren': boolean
    //     }
    // >
    // export type Resultaat_Grootboekrekeningen = p_.Transformer_With_Parameter<
    //     s_in.Resultaat.Grootboek_Rekeningen,
    //     s_out.Domein_Zijde,
    //     {
    //         'label': string
    //         'teken omkeren': boolean
    //     }
    // >
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
}

export const Root: declarations.Root = ($) => ({
    'jaren': p_.from.dictionary($.jaren).map(
        ($, id): s_out.Jaar => {
            const $$_jaarbeheer = $.bron.Jaarbeheer
            return {
                'journalen': p_.literal.dictionary<s_out.Jaar.Journaal>({
                    "inkopen": p_variables(() => {
                        return {
                            'posten': p_.from.dictionary($.handelstransacties.inkopen).flatten(
                                ($) => p_.from.dictionary($.bron.Regels).map_optionally(
                                    ($) => {
                                        const $v_type = $.Type
                                        return p_.from.state($.Bedrag).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Bekend': return p_.ss($, ($) => p_.literal.set(({
                                                        'regels': p_.literal.dictionary<s_out.Jaar.Journaal.Post.Regel>({
                                                            "inkoop saldo": {
                                                                'grootboekrekening': $$_jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l id'],
                                                                'type': ['Balans', null],
                                                                'bedrag': + $['Bedrag inclusief geheven BTW'],
                                                            },
                                                            "tegenrekening": p_variables(() => {
                                                                const $v_bedrag = $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag']
                                                                return p_.from.state($v_type).decide(
                                                                    ($): s_out.Jaar.Journaal.Post.Regel => {
                                                                        switch ($[0]) {
                                                                            case 'Balans': return p_.ss($, ($) => ({
                                                                                'type': ['Balans', null],
                                                                                'grootboekrekening': $['Balans item']['l entry'].Grootboekrekening['l id'],
                                                                                'bedrag': $v_bedrag,
                                                                            }))
                                                                            case 'Kosten': return p_.ss($, ($) => ({
                                                                                'type': ['Resultaat', null],
                                                                                'grootboekrekening': $.Grootboekrekening['l id'],
                                                                                'bedrag': $v_bedrag,
                                                                            }))
                                                                            default: return p_.au($[0])
                                                                        }
                                                                    }
                                                                )
                                                            }),
                                                            "btw": ({
                                                                'type': ['Balans', null],
                                                                'grootboekrekening': $$_jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l id'],
                                                                'bedrag': - $['BTW-bedrag'],
                                                            })
                                                        })
                                                    })))
                                                    default: return p_.au($[0])
                                                }
                                            }
                                        )
                                    }
                                ),
                                (parent, child) => parent + "_" + child,
                                {
                                    'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                                }
                            )
                        }
                    }),
                    "verkopen": p_variables(() => {
                        return {
                            'posten': p_.from.dictionary($.handelstransacties.verkopen).flatten(
                                ($) => p_.from.dictionary($.bron.Regels).map(
                                    ($): s_out.Jaar.Journaal.Post => {
                                        const $v_bedrag_ex = $['Bedrag exclusief BTW']
                                        const $v_btw_bedrag = p_.from.state($['BTW-regime']).decide(
                                            ($): number => {
                                                switch ($[0]) {
                                                    case 'Intracommunautair': return p_.ss($, ($) => 0)
                                                    case 'Standaard': return p_.ss($, ($) => p_.from.state($['BTW-categorie']['l entry']['BTW-heffing']).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Ja': return p_.ss($, ($) => $['BTW-promillage'] / 1000 * $v_bedrag_ex)
                                                                case 'Nee': return p_.ss($, ($) => 0)
                                                                default: return p_.au($[0])
                                                            }
                                                        }
                                                    ))
                                                    case 'Binnenland: heffing verlegd': return p_.ss($, ($) => 0)
                                                    default: return p_.au($[0])
                                                }
                                            }
                                        )
                                        return ({
                                            'regels': p_.literal.dictionary({
                                                "verkoop saldo": {
                                                    'grootboekrekening': $$_jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l id'],
                                                    'type': ['Balans', null],
                                                    'bedrag': $['Bedrag exclusief BTW'] + $v_btw_bedrag,
                                                },
                                                "resultaat": {
                                                    'grootboekrekening': $$_jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l id'],
                                                    'type': ['Resultaat', null],
                                                    'bedrag': $['Bedrag exclusief BTW'],
                                                },
                                                "btw": {
                                                    'grootboekrekening': $$_jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l id'],
                                                    'type': ['Balans', null],
                                                    'bedrag': $v_btw_bedrag,
                                                }
                                            })
                                        })
                                    }
                                ),
                                (parent, child) => parent + "_" + child,
                                {
                                    'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                                }

                            )
                        }
                    }),
                })
            }
        }
    )
})