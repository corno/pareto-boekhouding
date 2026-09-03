import * as p_ from 'pareto-core/implementation/transformer'
import * as p_temp from 'pareto-core/implementation/refiner'
import * as p_schema from 'pareto-core/interface/schema'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "../../../modules/generieke_boekhouding/schemas/interface/schema.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
    export type Temp_Samenvatting = p_.Transformer<
        s_in.Temp_Samenvatting,
        s_out.Balans.Dagboek
    >
}

//dependencies

export const Temp_Samenvatting: declarations.Temp_Samenvatting = ($) => {
    return {
        'beginsaldo': $.beginsaldo,
        'mutaties': $.mutaties.xx,
    }
}

export const Root: declarations.Root = ($) => {
    const $p_jaren = $.jaren
    const $p_jaren2: s_out.Root['jaren'] = p_temp.from.dictionary($p_jaren).map(
        ($, id): s_out.Jaar => {
            const $v_id = id
            const $v_jaar = $
            const $v_bron_jaar = $v_jaar.bron


            const $p_resultaat: s_out.Jaar['resultaat'] = p_.literal.group_resolve(() => {
                const $p_grootboekrekeningen: s_out.Resultaat.Grootboek_Rekeningen = p_.from.dictionary($v_bron_jaar.Grootboekrekeningen.Resultaat).map(
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
                                        case 'Opbrengsten': return p_.ss($, ($) => ['opbrengsten', null])
                                        default: return p_.au($[0])
                                    }
                                }
                            ),
                            'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                            'subcategorie': $.Stam.Subcategorie['l id'],
                            'dagboeken': $p_dagboeken,
                        }
                    }
                )

                return {
                    'grootboekrekeningen': $p_grootboekrekeningen,
                }
            })

            const $p_jaar2_balans: s_out.Jaar['balans'] = p_.literal.group_resolve((): s_out.Jaar['balans'] => {



                const $p_balans_grootboekrekeningen: s_out.Balans.Grootboek_Rekeningen = p_.from.dictionary($v_bron_jaar.Grootboekrekeningen.Balans).map(
                    ($): s_out.Balans.Grootboekrekening => {
                        const context = $

                        const $p_clusters: s_out.Balans.Grootboekrekening['clusters'] = p_.literal.dictionary<s_out.Balans.Cluster>({
                            "globalen": {
                                'dagboeken': p_.literal.optionals_dictionary({
                                    "winstreserve": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor winstreserve']['l entry'] === context
                                        ? p_.literal.set({
                                            'beginsaldo': - $v_bron_jaar.Jaarbeheer.Balans['Beginsaldo winstreserve'],
                                            'mutaties': p_.literal.dictionary({})
                                        })
                                        : p_.literal.not_set(),
                                    "resultaat": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor resultaat dit jaar']['l entry'] === context
                                        ? p_.literal.set({
                                            'beginsaldo': 0,
                                            'mutaties': p_.from.dictionary($p_resultaat.grootboekrekeningen).map(
                                                ($) => p_.from.dictionary($.dagboeken).sum(
                                                    ($) => p_.from.dictionary($.boekingen).sum(
                                                        ($) => -$
                                                    )
                                                )
                                            ),
                                        })
                                        : p_.literal.not_set(),
                                    "inkoopsaldo": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context
                                        ? p_.literal.set(Temp_Samenvatting($v_jaar.inkoopsaldo))
                                        : p_.literal.not_set(),
                                    "verkoopsaldo": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l entry'] === context
                                        ? p_.literal.set(Temp_Samenvatting($v_jaar.verkoopsaldo))
                                        : p_.literal.not_set(),
                                    "btw te veel aangegeven": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set(Temp_Samenvatting($v_jaar.btw['te veel aangegeven']))
                                        : p_.literal.not_set(),
                                    "btw openstaand": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set(Temp_Samenvatting($v_jaar.btw['openstaand']))
                                        : p_.literal.not_set(),
                                    "btw nog aan te geven": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set(Temp_Samenvatting($v_jaar.btw['nog aan te geven']))
                                        : p_.literal.not_set(),
                                })
                            },
                            "bankrekeningen": {
                                'dagboeken': p_.from.dictionary($v_jaar.balans.bankrekeningen).map_optionally(
                                    ($) => $.bron.Grootboekrekening['l entry'] === context
                                        ? p_.literal.set({
                                            'beginsaldo': $.bron.Beginsaldo,
                                            'mutaties': p_.from.dictionary($.mutaties).map(
                                                ($) => $.bron.Bedrag
                                            ),
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
                                        'mutaties': p_.literal.dictionary({
                                            "dummy": $['mutatie totaal']
                                        }),
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
                                        'mutaties': p_.literal.dictionary({
                                            "inkopen": $.aggregaties.inkopen,
                                            "verkopen": $.aggregaties.verkopen,
                                            "mutaties": $.aggregaties.mutaties,
                                        }),
                                    }))
                            },
                        })
                        return {
                            'zijde': p_.from.state($.Stam.Zijde).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'Activa': return p_.ss($, ($) => ['activa', null])
                                        case 'Passiva': return p_.ss($, ($) => ['passiva', null])
                                        default: return p_.au($[0])
                                    }
                                }
                            ),
                            'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                            'subcategorie': $.Stam.Subcategorie['l id'],
                            'clusters': $p_clusters,
                        }
                    }
                )
                return {
                    'grootboekrekeningen': $p_balans_grootboekrekeningen,
                    // 'check balans': {
                    //     'begin': p_.from.dictionary($p_balans_grootboekrekeningen).sum(
                    //         ($) => $.totaal.beginsaldo
                    //     ) !== 0,
                    //     'eind': p_.from.dictionary($p_balans_grootboekrekeningen).sum(
                    //         ($) => $.totaal.beginsaldo + $.totaal.mutaties.totaal
                    //     ) !== 0,
                    // },
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
        'jaren': $p_jaren2,
    }
}
