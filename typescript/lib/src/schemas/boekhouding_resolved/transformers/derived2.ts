import * as p_ from 'pareto-core/implementation/transformer'
import * as p_temp from 'pareto-core/implementation/refiner'
import * as p_schema from 'pareto-core/interface/schema'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'
import p_variables from 'pareto-core/implementation/transformer/specials/variables'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_out from "../../derived2/schema.js"

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
                            'bron': $,
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


            const $p_btw: s_out.Jaar2['btw'] = p_.literal.group_resolve(() => {
                const $p_btw_te_veel_aangegeven = p_variables((): s_out.Balans.Samenvatting => {
                    return {
                        'beginsaldo': $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : p_change_context(
                                $al.get_entry(
                                    $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => p_unreachable_code_path("??"),
                                        'no_such_entry': () => p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.btw['te veel aangegeven'].beginsaldo + $.btw['te veel aangegeven'].mutaties.totaal
                            ),
                        'mutaties': {
                            'totaal': p_.from.dictionary($v_jaar.btw['btw periodes']).sum(
                                ($) => {
                                    return p_.from.state($.status).decide(
                                        ($): number => {
                                            switch ($[0]) {
                                                case 'aangegeven': return p_.option($, ($) => $['te veel aangegeven'])
                                                case 'openstaand': return p_.option($, ($) => 0)
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                }
                            ),
                            'xx': p_.from.dictionary($v_jaar.btw['btw periodes']).map_optionally(
                                ($) => {
                                    return p_.from.state($.status).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'aangegeven': return p_.option($, ($) => p_.literal.set($['te veel aangegeven']))
                                                case 'openstaand': return p_.option($, ($) => p_.literal.not_set())
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                }
                            )
                        },
                    }
                })
                const $p_btw_nog_aan_te_geven = p_variables((): s_out.Balans.Samenvatting => {
                    return {
                        'beginsaldo': $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                            ? 0
                            : p_change_context(
                                $al.get_entry(
                                    $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                    {
                                        'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                        'no_context_lookup': () => p_unreachable_code_path("??"),
                                        'no_such_entry': () => p_unreachable_code_path("??"),
                                    }
                                ),
                                ($) => $.btw['nog aan te geven'].beginsaldo + $.btw['nog aan te geven'].mutaties.totaal
                            ),
                        'mutaties': {
                            'xx': p_.from.dictionary($v_jaar.btw['btw periodes']).map_optionally(
                                ($) => {
                                    const $v_handelsmutaties = $.handelsmutaties
                                    return p_.from.state($.status).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'openstaand': return p_.option($, ($) => p_.literal.set(+ $v_handelsmutaties.inkopen.totaal
                                                    + $v_handelsmutaties.verkopen.totaal))
                                                default: return p_.literal.not_set()
                                            }
                                        }
                                    )
                                }
                            ),
                            'totaal': p_.from.dictionary(
                                p_.from.dictionary($v_jaar.btw['btw periodes']).filter(
                                    ($) => p_.from.state($.status).decide(
                                        ($): boolean => {
                                            switch ($[0]) {
                                                case 'openstaand': return p_.option($, ($) => true)
                                                default: return false
                                            }
                                        }
                                    )
                                )
                            ).sum(
                                ($) => {
                                    return + $.handelsmutaties.inkopen.totaal
                                        + $.handelsmutaties.verkopen.totaal
                                }
                            )
                        },
                    }
                })
                const $p_btw_openstaand: s_out.Balans.Samenvatting = ({
                    'beginsaldo': $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                        ? 0
                        : p_change_context(
                            $al.get_entry(
                                $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                {
                                    'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                    'no_context_lookup': () => p_unreachable_code_path("??"),
                                    'no_such_entry': () => p_unreachable_code_path("??"),
                                }
                            ),
                            ($) => $.btw.openstaand.beginsaldo + $.btw.openstaand.mutaties.totaal
                        ),
                    'mutaties': {
                        'xx': p_.from.dictionary(
                            p_.literal.dictionary<p_schema.Dictionary<number>>({
                                "bankrekeningen": p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen).flatten(
                                    ($) => p_.from.dictionary($['Mutatie Verwerkingen']).map_optionally(
                                        ($) => {
                                            const $v_stam = $.Stam
                                            return p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.option($, ($) => p_.literal.set($v_stam.Bedrag))
                                                                    default: return p_.literal.not_set()
                                                                }
                                                            }))
                                                        default: return p_.literal.not_set()
                                                    }
                                                })
                                        }
                                    ),
                                    (parent, child) => parent + "_" + child,
                                    {
                                        'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                                    }
                                ),
                                "verrekenposten": p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten).flatten(
                                    ($) => p_.from.dictionary($.Mutaties).map_optionally(
                                        ($) => {
                                            const $v_bedrag = $.Bedrag
                                            return p_.from.state($.Afhandeling).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.option($, ($) => p_.literal.set($v_bedrag))
                                                                    default: return p_.literal.not_set()
                                                                }
                                                            }))
                                                        default: return p_.literal.not_set()
                                                    }
                                                }
                                            )
                                        }
                                    ),
                                    (parent, child) => parent + "_" + child,
                                    {
                                        'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                                    }
                                ),
                                "btw-periodes": p_.from.dictionary($v_jaar.btw['btw periodes']).map_optionally(
                                    ($) => {
                                        return p_.from.state($.status).decide(
                                            ($): p_schema.Optional_Value<number> => {
                                                switch ($[0]) {
                                                    case 'openstaand': return p_.option($, ($) => p_.literal.not_set())
                                                    case 'aangegeven': return p_.option($, ($) => p_.literal.set($.bron.Bedrag))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }
                                        )
                                    }
                                )
                            })
                        ).flatten(
                            ($) => $,
                            (parent, child) => parent + "_" + child,
                            {
                                'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                            }
                        ),
                        'totaal':
                            + p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen).sum(
                                ($) => p_.from.dictionary(
                                    p_.from.dictionary($['Mutatie Verwerkingen']).filter(
                                        ($) => p_.from.state($.type).decide(
                                            ($): boolean => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($): boolean => {
                                                            switch ($[0]) {
                                                                case 'BTW-periode': return p_.option($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => - $.Stam.Bedrag
                                )
                            )
                            + p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten).sum(
                                ($) => p_.from.dictionary(
                                    p_.from.dictionary($.Mutaties).filter(
                                        ($) => p_.from.state($.Afhandeling).decide(
                                            ($): boolean => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($): boolean => {
                                                            switch ($[0]) {
                                                                case 'BTW-periode': return p_.option($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => - $.Bedrag
                                )
                            )
                            + p_.from.dictionary($v_jaar.btw['btw periodes']).sum(
                                ($) => {
                                    return - p_.from.state($.status).decide(
                                        ($): number => {
                                            switch ($[0]) {
                                                case 'aangegeven': return p_.option($, ($) => $.bron.Bedrag)
                                                case 'openstaand': return p_.option($, ($) => 0)
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                }
                            )
                    },
                })
                return {
                    'te veel aangegeven': $p_btw_te_veel_aangegeven,
                    'nog aan te geven': $p_btw_nog_aan_te_geven,
                    'openstaand': $p_btw_openstaand,
                }
            })


            const $p_jaar2_balans: s_out.Jaar2['balans'] = p_.literal.group_resolve((): s_out.Jaar2['balans'] => {


                const $p_inkoopsaldo = p_variables((): s_out.Balans.Samenvatting => {
                    const $p_beginsaldo = $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                        ? 0
                        : p_change_context(
                            $al.get_entry(
                                $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                {
                                    'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                    'no_context_lookup': () => p_unreachable_code_path("??"),
                                    'no_such_entry': () => p_unreachable_code_path("??"),
                                }
                            ),
                            ($) => $.balans.inkoopsaldo.beginsaldo + $.balans.inkoopsaldo.mutaties.totaal
                        )
                    const $p_mutaties = p_variables((): number => {

                        const $p_inkopen_x = p_.from.dictionary(
                            p_.from.dictionary($v_jaar.handelstransacties.inkopen).filter(
                                ($) => p_.from.state($.bron.Afhandeling).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Mutaties': return p_.option($, ($) => true)
                                            default: return false
                                        }
                                    })
                            )
                        ).sum(
                            ($) => - $['totaal ex btw'] - $['totaal btw']
                        )
                        const $p_betalingen = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen).sum(
                            ($) => {
                                return p_.from.dictionary(
                                    p_.from.dictionary($['Mutatie Verwerkingen']).filter(
                                        ($) => p_.from.state($.type).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return p_.option($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => -$.Stam.Bedrag
                                )
                            }
                        )
                        const $p_verrekeningen = p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten).sum(
                            ($) => {
                                return p_.from.dictionary(
                                    p_.from.dictionary($.Mutaties).filter(
                                        ($) => p_.from.state($.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Inkoop': return p_.option($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => -$.Bedrag
                                )
                            }
                        )
                        return + $p_inkopen_x
                            + $p_betalingen
                            + $p_verrekeningen
                    })
                    return {
                        'beginsaldo': $p_beginsaldo,
                        'mutaties': {
                            'totaal': $p_mutaties,
                            'xx': null
                        },
                    }
                })

                const $p_verkoopsaldo = p_variables((): s_out.Balans.Samenvatting => {
                    const $p_beginsaldo = $v_bron_jaar['Eerste boekjaar'][0] !== 'Nee'
                        ? 0
                        : p_change_context(
                            $al.get_entry(
                                $v_bron_jaar['Eerste boekjaar'][1]['Vorig boekjaar']['l id'],
                                {
                                    'cycle_detected': () => p_unreachable_code_path("Eerste boekjaar is 'Nee', dus er moet een vorig boekjaar zijn"),
                                    'no_context_lookup': () => p_unreachable_code_path("??"),
                                    'no_such_entry': () => p_unreachable_code_path("??"),
                                }
                            ),
                            ($) => $.balans.verkoopsaldo.beginsaldo + $.balans.verkoopsaldo.mutaties.totaal
                        )
                    const $p_mutaties = p_variables((): number => {

                        const $p_verkopen_x = p_.from.dictionary(
                            p_.from.dictionary($v_jaar.handelstransacties.verkopen).filter(
                                ($) => p_.from.state($.bron.Afhandeling).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Mutaties': return p_.option($, ($) => true)
                                            default: return false
                                        }
                                    })
                            )).sum(
                                ($) => p_.from.dictionary($.regels).sum(
                                    ($) => $['btw bedrag'] + $.bron['Bedrag exclusief BTW']
                                )
                            )
                        const $p_bankrekening_mutaties = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen).sum(
                            ($) => {
                                return p_.from.dictionary(
                                    p_.from.dictionary($['Mutatie Verwerkingen']).filter(
                                        ($) => p_.from.state($.type).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Verkoop': return p_.option($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => -$.Stam.Bedrag
                                )
                            }
                        )
                        const $p_verrekening_mutaties = p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten).sum(
                            ($) => {
                                return p_.from.dictionary(
                                    p_.from.dictionary($.Mutaties).filter(
                                        ($) => p_.from.state($.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Verkoop': return p_.option($, ($) => true)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            })
                                    )
                                ).sum(
                                    ($) => -$.Bedrag
                                )
                            }
                        )
                        return + $p_verkopen_x
                            + $p_bankrekening_mutaties
                            + $p_verrekening_mutaties
                    }
                    )
                    return {
                        'beginsaldo': $p_beginsaldo,
                        'mutaties': {
                            'totaal': $p_mutaties,
                            'xx': p_.literal.dictionary({}),
                        },
                    }
                })

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
                                        ? p_.literal.set($p_inkoopsaldo)
                                        : p_.literal.not_set(),
                                    "verkoopsaldo": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Verkoop saldo']['l entry'] === context
                                        ? p_.literal.set($p_verkoopsaldo)
                                        : p_.literal.not_set(),
                                    "btw te veel aangegeven": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set($p_btw['te veel aangegeven'])
                                        : p_.literal.not_set(),
                                    "btw openstaand": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set($p_btw['openstaand'])
                                        : p_.literal.not_set(),
                                    "btw nog aan te geven": $v_bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor nog aan te geven BTW']['l entry'] === context
                                        ? p_.literal.set($p_btw['nog aan te geven'])
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
                            'bron': $,
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
                    'inkoopsaldo': $p_inkoopsaldo,
                    'verkoopsaldo': $p_verkoopsaldo,
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
                'btw': $p_btw,
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