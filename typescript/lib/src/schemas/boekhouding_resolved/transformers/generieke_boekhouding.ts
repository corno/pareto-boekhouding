import * as p_ from 'pareto-core/implementation/transformer'
import * as p_temp from 'pareto-core/implementation/refiner'
import * as p_schema from 'pareto-core/interface/schema'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'
import p_variables from 'pareto-core/implementation/transformer/specials/variables'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_out from "../../generieke_boekhouding/schema.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
}

//dependencies
import * as t_to_derived from "./derived.js"

export const Root: declarations.Root = ($) => {
    const $p_jaren = t_to_derived.Root($).jaren
    const $p_jaren2: s_out.Root['jaren2'] = p_temp.from.dictionary($p_jaren).resolve(
        ($, id, $al): s_out.Jaar2 => {
            const $v_id = id
            const $v_jaar = $
            const $v_bron_jaar = $v_jaar.bron


            const $p_resultaat: s_out.Jaar2['resultaat'] = p_.literal.group_resolve(() => {
                const $p_resultaat_grootboekrekeningen: s_out.Resultaat.Grootboek_Rekeningen = p_.from.dictionary($v_bron_jaar.Grootboekrekeningen.Resultaat).map(
                    ($): s_out.Resultaat.Grootboekrekening => {
                        const context = $
                        const $p_dagboeken = p_.literal.dictionary<s_out.Resultaat.Dagboek>({
                            "inkopen": p_.literal.group_resolve(() => ({
                                'boekingen': p_.from.dictionary($v_bron_jaar.Handelstransacties.Inkopen).flatten(
                                    ($) => p_.from.dictionary($.Regels).map_optionally(
                                        ($) => {
                                            const $v_bedrag = $.Bedrag
                                            return p_.from.state($.Type).decide(
                                                ($): p_schema.Optional_Value<number> => {
                                                    switch ($[0]) {
                                                        case 'Balans': return p_.ss($, ($) => p_.literal.not_set())
                                                        case 'Kosten': return p_.ss($, ($) => $.Grootboekrekening['l entry'] === context
                                                            ? p_.literal.set(p_.from.state($v_bedrag).decide(
                                                                ($): number => {
                                                                    switch ($[0]) {
                                                                        case 'Bekend': return p_.option($, ($) =>
                                                                            - $['Bedrag inclusief geheven BTW']
                                                                            + $['BTW-bedrag']
                                                                        )
                                                                        default: return p_.exhaustive($[0])
                                                                    }
                                                                }
                                                            ))
                                                            : p_.literal.not_set()
                                                        )
                                                        default: return p_.au($[0])
                                                    }
                                                }
                                            )
                                        }
                                    ),
                                    (parent, child) => parent + "_" + child,
                                    {
                                        'duplicate_id': () => p_unreachable_code_path("keys cannot clash"),
                                    }
                                ),
                            })),
                            "verkopen": {
                                'boekingen': p_.from.dictionary($v_bron_jaar.Handelstransacties.Verkopen).flatten(
                                    ($) => p_.from.dictionary($.Regels).map_optionally(
                                        ($) => {
                                            const $v_bedrag = $['Bedrag exclusief BTW']
                                            return p_.from.state($.Type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'Opbrengsten': return p_.ss($, ($) => $.Grootboekrekening['l entry'] === context
                                                            ? p_.literal.set($v_bedrag)
                                                            : p_.literal.not_set()
                                                        )
                                                        default: return p_.literal.not_set()
                                                    }
                                                }
                                            )
                                        }
                                    ),
                                    (parent, child) => parent + "_" + child,
                                    {
                                        'duplicate_id': () => p_unreachable_code_path("keys cannot clash"),
                                    }
                                )
                            },
                            "memoriaal boekingen": {
                                'boekingen': p_.from.dictionary($v_bron_jaar.Mutaties['Overige Balans Items']).flatten(
                                    ($) => p_.from.dictionary($['Memoriaal Boekingen']).map_optionally(
                                        ($) => $.Grootboekrekening['l entry'] === context
                                            ? p_.literal.set($.Bedrag)
                                            : p_.literal.not_set()
                                    ),
                                    (parent, child) => parent + "_" + child,
                                    {
                                        'duplicate_id': () => p_unreachable_code_path("keys cannot clash"),
                                    }
                                )
                            },
                            "btw afrondingen": {
                                'boekingen': p_.from.dictionary($v_bron_jaar.Jaarbeheer.Resultaat['BTW periodes']).map_optionally(
                                    ($): p_schema.Optional_Value<number> => $v_bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context
                                        ? p_.from.state($.Status).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Aangegeven': return p_.option($, ($) => p_.literal.set($.Afronding))
                                                    case 'Openstaand': return p_.option($, ($) => p_.literal.not_set())
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }
                                        )
                                        : p_.literal.not_set()
                                )
                            }
                        })


                        return {
                            'zijde': p_.from.state($.Stam.Zijde).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'Kosten': return p_.ss($, ($) => ['kosten', null])
                                        case 'Opbrengsten':return p_.ss($, ($) => ['opbrengsten', null])
                                        default: return p_.au($[0])
                                    }
                                }
                            ),
                            'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                            'subcategorie': $.Stam.Subcategorie['l id'],
                            'dagboeken': $p_dagboeken,
                            'totaal': p_.from.dictionary($p_dagboeken).sum(
                                ($) => p_.from.dictionary($.boekingen).sum(
                                    ($) => $
                                )
                            )
                        }
                    }
                )

                const resultaat = p_.from.dictionary($p_resultaat_grootboekrekeningen).sum(
                    ($) => $.totaal
                )

                return {
                    'grootboekrekeningen': $p_resultaat_grootboekrekeningen,
                    'resultaat': resultaat,
                }
            })

            const $p_jaar2_balans: s_out.Jaar2['balans'] = p_.literal.group_resolve((): s_out.Jaar2['balans'] => {



                const $p_balans_grootboekrekeningen: s_out.Balans.Grootboek_Rekeningen = p_.from.dictionary($v_bron_jaar.Grootboekrekeningen.Balans).map(
                    ($): s_out.Balans.Grootboekrekening => {
                        const context = $

                        const $p_clusters: s_out.Balans.Grootboekrekening['clusters'] = p_.literal.dictionary<s_out.Balans.Cluster>({
                            "globalen": {
                                'dagboeken': p_.literal.optionals_dictionary({
                                    "winstreserve": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === context
                                        ? p_.literal.set({
                                            'beginsaldo': - $v_bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'],
                                            'mutaties': {
                                                'xx': p_.literal.dictionary({}),
                                                'totaal': 0,
                                            }
                                        })
                                        : p_.literal.not_set(),
                                    "resultaat": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === context
                                        ? p_.literal.set({
                                            'beginsaldo': 0,
                                            'mutaties': {
                                                'xx': p_.literal.dictionary({}),
                                                'totaal': - $p_resultaat.resultaat,
                                            },
                                        })
                                        : p_.literal.not_set(),
                                    "inkoopsaldo": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context
                                        ? p_.literal.set($v_jaar.inkoopsaldo)
                                        : p_.literal.not_set(),
                                    "verkoopsaldo": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l entry'] === context
                                        ? p_.literal.set($v_jaar.verkoopsaldo)
                                        : p_.literal.not_set(),
                                    "btw te veel aangegeven": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set($v_jaar.btw['te veel aangegeven'])
                                        : p_.literal.not_set(),
                                    "btw openstaand": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set($v_jaar.btw['openstaand'])
                                        : p_.literal.not_set(),
                                    "btw nog aan te geven": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set($v_jaar.btw['nog aan te geven'])
                                        : p_.literal.not_set(),
                                })
                            },
                            "bankrekeningen": {
                                'dagboeken': p_.from.dictionary($v_jaar.balans.bankrekeningen).map_optionally(
                                    ($) => $.bron.Grootboekrekening['l entry'] === context
                                        ? p_.literal.set({
                                            'beginsaldo': $.bron.Beginsaldo,
                                            'mutaties': {
                                                'xx': null,
                                                'totaal': $['mutaties totaal']
                                            },
                                        })
                                        : p_.literal.not_set()
                                )
                            },
                            // "weg te boeken bankrekening mutaties": {
                            //     'posten': p_.from.dictionary(//         bron_jaar.Mutaties.Bankrekeningen
                            //     ).ma$p_optionally<number>(
                            //         ($) => {
                            //             const openstaand: number = xxxx

                            //             return openstaand !== 0
                            //                 ? p_.literal.set(openstaand)
                            //                 : p_.literal.not_set()
                            //         }
                            //     ).__d_ map_ deprecated(
                            // ($) => ({
                            //         'beginsaldo': 0,
                            //         'mutaties': $,
                            //     }))
                            // },
                            "informele rekeningen": {
                                'dagboeken': p_.from.dictionary(
                                    p_.from.dictionary($v_jaar.balans['informele rekeningen']).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    )
                                ).map(
                                    ($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': {
                                            'xx': p_.from.dictionary(
                                                p_.literal.dictionary<p_schema.Dictionary<number>>({
                                                    // "fff": p_.from.dictionary($.mutaties['bankrekening mutatie verwerkingen']).map(
                                                    //     ($) => $
                                                    // )
                                                })
                                            ).flatten(
                                                ($) => $,
                                                (parent, child) => parent + "_" + child,
                                                {
                                                    'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                                                }

                                            ),
                                            'totaal': $['mutatie totaal']
                                        },
                                    })
                                )
                            },
                            "overige balans items": {
                                'dagboeken': p_.from.dictionary(
                                    p_.from.dictionary($v_jaar.balans['overige balans items']).filter(
                                        ($) => $.bron.Grootboekrekening['l entry'] === context
                                    )
                                ).map(
                                    ($) => ({
                                        'beginsaldo': $.bron.Beginsaldo,
                                        'mutaties': {
                                            'xx': null,
                                            'totaal': $.aggregaties.totaal
                                        },
                                    }))
                            },
                        })
                        return {
                            'zijde': p_.from.state($.Stam.Zijde).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'Activa': return p_.ss($, ($) => ['activa', null])
                                        case 'Passiva':return p_.ss($, ($) => ['passiva', null])
                                        default: return p_.au($[0])
                                    }
                                }
                            ),
                            'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                            'subcategorie': $.Stam.Subcategorie['l id'],
                            'clusters': $p_clusters,
                            'totaal': {
                                'beginsaldo': p_.from.dictionary($p_clusters).sum(
                                    ($) => p_.from.dictionary($.dagboeken).sum(
                                        ($) => $.beginsaldo
                                    )
                                ),
                                'mutaties': {
                                    'xx': null,
                                    'totaal': p_.from.dictionary($p_clusters).sum(
                                        ($) => p_.from.dictionary($.dagboeken).sum(
                                            ($) => $.mutaties.totaal
                                        )
                                    )
                                },
                            }
                        }
                    }
                )
                return {
                    'grootboekrekeningen': $p_balans_grootboekrekeningen,
                    'check balans': {
                        'begin': p_.from.dictionary($p_balans_grootboekrekeningen).sum(
                            ($) => $.totaal.beginsaldo
                        ) !== 0,
                        'eind': p_.from.dictionary($p_balans_grootboekrekeningen).sum(
                            ($) => $.totaal.beginsaldo + $.totaal.mutaties.totaal
                        ) !== 0,
                    },
                }
            })
            return {
                'resultaat': $p_resultaat,
                'balans': $p_jaar2_balans,
            }
        }
    )
    return {
        'bron': $,
        'jaren': $p_jaren,
        'jaren2': $p_jaren2,
    }
}