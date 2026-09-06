import * as p_ from 'pareto-core/transformer'
import * as p_temp from 'pareto-core/refiner'
import * as p_schema from 'pareto-core/schema'
import p_change_context from 'pareto-core/refiner/specials/change_context'
import p_unreachable_code_path from 'pareto-core/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../../../modules/boekhouding/schemas/resolved/schema.js"
import type * as s_out from "../../derived/schema.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
}

//dependencies

const temp_samenvatting_mutaties = ($: p_schema.Dictionary<s_out.Bedrag_in_Euro>): s_out.Temp_Samenvatting.Mutaties => {
    return {
        'xx': $,
        'totaalx': p_.from.dictionary($).sum(
            ($) => $
        )
    }
}

export const Root: declarations.Root = ($) => {
    const $v_bron_root = $
    const $p_jaren: s_out.Root['jaren'] = p_temp.from.dictionary($.Jaren).resolve(
        ($, id, $al): s_out.Jaar => {
            const $v_bron_jaar = $

            const $p_handelstransacties: s_out.Jaar.handelstransacties = p_.literal.group_resolve(() => {
                const $p_inkopen: s_out.Jaar.handelstransacties.inkopen = p_.from.dictionary($v_bron_jaar.Handelstransacties.Inkopen).map(
                    ($) => {
                        return {
                            'bron': $,
                            'regels': p_.from.dictionary($.Regels).map_optionally(
                                ($) => {
                                    const $v_bron = $
                                    return p_.from.state($.Bedrag).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Bekend': return p_.option($, ($) =>
                                                    p_.literal.set({
                                                        'bedrag context': $,
                                                        'bron': $v_bron
                                                    })
                                                )
                                                default: return p_.exhaustive($[0])
                                            }
                                        }
                                    )
                                }
                            ),
                            'totaal btw': p_.from.dictionary($.Regels).sum(
                                ($) => p_.from.state($.Bedrag).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Bekend': return p_.option($, ($) =>
                                                // + $['Bedrag inclusief geheven BTW']
                                                $['BTW-bedrag']
                                            )
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                )
                            ),
                            'totaal ex btw': p_.from.dictionary($.Regels).sum(
                                ($) => p_.from.state($.Bedrag).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Bekend': return p_.option($, ($) =>
                                                $['Bedrag inclusief geheven BTW']
                                                - $['BTW-bedrag']
                                            )
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                )
                            ),
                        }
                    })
                const $p_verkopen: s_out.Jaar.handelstransacties.verkopen = p_.from.dictionary($v_bron_jaar.Handelstransacties.Verkopen).map(
                    ($) => {

                        const $p_regels = p_.from.dictionary($.Regels).map(
                            ($): s_out.Verkoop_Regel => {

                                const btw_bedrag = p_.from.number(
                                    $['Bedrag exclusief BTW'] * p_.from.state($['BTW-regime']).decide(
                                        ($): number => {
                                            switch ($[0]) {
                                                case 'Binnenland: heffing verlegd': return p_.option($, ($) => 0)
                                                case 'Intracommunautair': return p_.option($, ($) => 0)
                                                case 'Standaard': return p_.option($, ($) => p_.from.state($['BTW-categorie']['l entry']['BTW-heffing']).decide(
                                                    ($): number => {
                                                        switch ($[0]) {
                                                            case 'Nee': return p_.option($, ($) => 0)
                                                            case 'Ja': return p_.option($, ($) => ($['BTW-promillage']))
                                                            default: return p_.exhaustive($[0])
                                                        }
                                                    }))
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                ).divide(
                                    1000,
                                    ['towards nearest', null],
                                    {
                                        'divided_by_zero': () => p_unreachable_code_path("divisor is 1000"),
                                    }
                                )
                                return {
                                    'bron': $,
                                    'btw bedrag': btw_bedrag,
                                    'bedrag inclusief btw': $['Bedrag exclusief BTW'] + btw_bedrag,

                                }
                            })
                        // const $p_totaal_btw = p_.from.dictionary($p_regels).sum(
                        //     ($) => $['btw bedrag']
                        // )
                        const totaal_ex_btw = p_.from.dictionary($p_regels).sum(
                            ($) => $.bron['Bedrag exclusief BTW']
                        )
                        return {
                            'bron': $,
                            'regels': $p_regels,
                            // 'totaal btw': $p_totaal_btw,
                            'totaal ex btw': totaal_ex_btw,
                            // 'totaal inclusief btw': totaal_ex_btw + $p_totaal_btw,
                        }
                    })
                return {
                    'inkopen': $p_inkopen,
                    'verkopen': $p_verkopen,
                }
            })


            const $p_inkoopsaldo = p_.literal.group_resolve((): s_out.Temp_Samenvatting => {
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
                        ($) => $.inkoopsaldo.beginsaldo + $.inkoopsaldo.mutaties.totaalx
                    )
                return {
                    'beginsaldo': $p_beginsaldo,
                    'mutaties': temp_samenvatting_mutaties(
                        p_.from.dictionary(
                            p_.literal.dictionary<p_schema.Dictionary<number>>({
                                "inkopen": p_.from.dictionary($p_handelstransacties.inkopen).map_optionally(
                                    ($) => {
                                        const bedrag = - $['totaal ex btw'] - $['totaal btw']
                                        return p_.from.state($.bron.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Mutaties': return p_.option($, ($) => p_.literal.set(bedrag))
                                                    case 'Nog te betalen': return p_.option($, ($) => p_.literal.set(bedrag))
                                                    default: return p_.literal.not_set()
                                                }
                                            }
                                        )
                                    }
                                ),
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
                                                                    case 'Inkoop': return p_.option($, ($) => p_.literal.set(-$v_stam.Bedrag))
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
                                                                    case 'Inkoop': return p_.option($, ($) => p_.literal.set(-$v_bedrag))
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
                            })
                        ).flatten(
                            ($) => $,
                            (parent, child) => parent + "_" + child,
                            {
                                'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                            }
                        )
                    ),
                }
            })

            const $p_verkoopsaldo = p_.literal.group_resolve((): s_out.Temp_Samenvatting => {
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
                        ($) => $.verkoopsaldo.beginsaldo + $.verkoopsaldo.mutaties.totaalx
                    )

                return {
                    'beginsaldo': $p_beginsaldo,
                    'mutaties': temp_samenvatting_mutaties(
                        p_.from.dictionary(
                            p_.literal.dictionary<p_schema.Dictionary<number>>({
                                "verkopen": p_.from.dictionary($p_handelstransacties.verkopen).map_optionally(
                                    ($) => {
                                        const bedrag = p_.from.dictionary($.regels).sum(
                                            ($) => $['btw bedrag'] + $.bron['Bedrag exclusief BTW']
                                        )
                                        return p_.from.state($.bron.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Mutaties': return p_.option($, ($) => p_.literal.set(bedrag))
                                                    default: return p_.literal.not_set()
                                                }
                                            }
                                        )
                                    }
                                ),
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
                                                                    case 'Verkoop': return p_.option($, ($) => p_.literal.set(-$v_stam.Bedrag))
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
                                                                    case 'Verkoop': return p_.option($, ($) => p_.literal.set(-$v_bedrag))
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
                            })
                        ).flatten(
                            ($) => $,
                            (parent, child) => parent + "_" + child,
                            {
                                'duplicate_id': () => p_unreachable_code_path("keys cannot clash")
                            }
                        )
                    ),
                }
            })


            const $p_btw: s_out.Jaar['btw'] = p_.literal.group_resolve(() => {
                const $p_btw_periodes = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Resultaat['BTW periodes']).map(
                    ($): s_out.Btw_Periode => {
                        const context = $
                        const $p_inkopen_totaal = p_.from.dictionary(
                            p_.from.dictionary($p_handelstransacties.inkopen).filter(
                                ($) => $.bron['BTW-periode']['l entry'] === context
                            )
                        ).sum(
                            ($) => $['totaal btw']
                        )
                        const $p_verkopen_totaal = - p_.from.dictionary(
                            p_.from.dictionary($p_handelstransacties.verkopen).filter(
                                ($) => $.bron['BTW-periode']['l entry'] === context
                            )
                        ).sum(
                            ($) => p_.from.dictionary($.regels).sum(
                                ($) => $['btw bedrag']
                            )
                        )

                        const $p_handelsmutaties =
                            + $p_inkopen_totaal
                            + $p_verkopen_totaal

                        const $p_bankrekening_mutaties = p_.from.dictionary($v_bron_root.Jaren).sum(
                            ($) => p_.from.dictionary($.Mutaties.Bankrekeningen).sum(
                                ($) => {
                                    return p_.from.dictionary(
                                        p_.from.dictionary($['Mutatie Verwerkingen']).filter(
                                            ($) => p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'BTW-periode': return p_.option($, ($) => $['l entry'] === context)
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
                        )
                        const $p_verrekenpost_mutaties = p_.from.dictionary($v_bron_root.Jaren).sum(
                            ($) => p_.from.dictionary($.Mutaties.Verrekenposten).sum(
                                ($) => p_.from.dictionary(
                                    p_.from.dictionary($.Mutaties).filter(
                                        ($) => p_.from.state($.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return p_.option($, ($) => p_.from.state($.type).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'BTW-periode': return p_.option($, ($) => $['l entry'] === context)
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
                            )
                        )
                        // const $p_mutaties_totaal =
                        //     + $p_inkopen_x
                        //     + $p_verkopen_x
                        //     + $p_bankrekening_mutaties
                        //     + $p_verrekenpost_mutaties

                        const $p_afhandelings_mutaties = + $p_bankrekening_mutaties + $p_verrekenpost_mutaties

                        const $p_status: s_out.Btw_Periode['status'] = p_.from.state($.Status).decide(
                            ($): s_out.Btw_Periode['status'] => {
                                switch ($[0]) {
                                    case 'Aangegeven': return p_.option($, ($) => {
                                        const $p_totaal_aangegeven_plus_afronding = + $.Bedrag + $.Afronding
                                        return ['aangegeven', {
                                            'bron': $,
                                            'totaal aangegeven + afronding': $p_totaal_aangegeven_plus_afronding,
                                            'todo niet volledig afgesloten':
                                                $p_afhandelings_mutaties
                                                !==
                                                - $p_totaal_aangegeven_plus_afronding,
                                            'te veel aangegeven':
                                                + $p_totaal_aangegeven_plus_afronding
                                                + $p_handelsmutaties,
                                        }]
                                    })
                                    case 'Openstaand': return p_.option($, ($) => ['openstaand', {
                                        'bron': $,
                                    }])
                                    default: return p_.exhaustive($[0])
                                }
                            })


                        return {
                            'bron': $,
                            'handelsmutaties': {
                                'inkopen': {
                                    'totaal': $p_inkopen_totaal
                                },
                                'verkopen': {
                                    'totaal': $p_verkopen_totaal
                                },
                            },
                            'afhandeling': {
                                'betalingen': $p_bankrekening_mutaties,
                                'verrekeningen': $p_verrekenpost_mutaties,
                            },
                            'status': $p_status,
                        }
                    }
                )
                const $p_btw_te_veel_aangegeven = p_.literal.group_resolve((): s_out.Temp_Samenvatting => {
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
                                ($) => $.btw['te veel aangegeven'].beginsaldo + $.btw['te veel aangegeven'].mutaties.totaalx
                            ),
                        'mutaties': temp_samenvatting_mutaties(
                            p_.from.dictionary($p_btw_periodes).map_optionally(
                                ($) => {
                                    return p_.from.state($.status).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'aangegeven': return p_.option($, ($) => p_.literal.set($['te veel aangegeven']))
                                                case 'openstaand': return p_.option($, ($) => p_.literal.not_set())
                                                default: return p_.exhaustive($[0])
                                            }
                                        }
                                    )
                                }
                            )
                        ),
                    }
                })
                const $p_btw_nog_aan_te_geven = p_.literal.group_resolve((): s_out.Temp_Samenvatting => {
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
                                ($) => $.btw['nog aan te geven'].beginsaldo + $.btw['nog aan te geven'].mutaties.totaalx
                            ),
                        'mutaties': temp_samenvatting_mutaties(
                            p_.from.dictionary($p_btw_periodes).map_optionally(
                                ($) => {
                                    const $v_handelsmutaties = $.handelsmutaties
                                    return p_.from.state($.status).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'openstaand': return p_.option($, ($) => p_.literal.set(+ $v_handelsmutaties.inkopen.totaal + $v_handelsmutaties.verkopen.totaal))
                                                default: return p_.literal.not_set()
                                            }
                                        }
                                    )
                                }
                            )
                        ),
                    }
                })
                const $p_btw_openstaand: s_out.Temp_Samenvatting = ({
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
                            ($) => $.btw.openstaand.beginsaldo + $.btw.openstaand.mutaties.totaalx
                        ),
                    'mutaties': temp_samenvatting_mutaties(
                        p_.from.dictionary(
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
                                                                    case 'BTW-periode': return p_.option($, ($) => p_.literal.set(-$v_stam.Bedrag))
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
                                                                    case 'BTW-periode': return p_.option($, ($) => p_.literal.set(-$v_bedrag))
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
                                "btw-periodes": p_.from.dictionary($p_btw_periodes).map_optionally(
                                    ($) => {
                                        return p_.from.state($.status).decide(
                                            ($): p_schema.Optional_Value<number> => {
                                                switch ($[0]) {
                                                    case 'openstaand': return p_.option($, ($) => p_.literal.not_set())
                                                    case 'aangegeven': return p_.option($, ($) => p_.literal.set(-$.bron.Bedrag))
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
                        )
                    ),
                })
                return {
                    'btw periodes': $p_btw_periodes,
                    'te veel aangegeven': $p_btw_te_veel_aangegeven,
                    'nog aan te geven': $p_btw_nog_aan_te_geven,
                    'openstaand': $p_btw_openstaand,
                }
            })


            const $p_balans: s_out.Jaar['balans'] = p_.literal.group_resolve((): s_out.Jaar['balans'] => {
                const $p_informele_rekeningen = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans['Informele rekeningen']).map(
                    ($): s_out.Informele_Rekening => {
                        const $v_context = $



                        const $p_references_to_me: s_out.Informele_Rekening['references to me'] = p_.literal.group_resolve(() => {
                            const $p_inkopen: s_out.Informele_Rekening['references to me']['inkopen'] = p_.from.dictionary($p_handelstransacties.inkopen).filter(
                                ($) => p_.from.state($.bron.Afhandeling).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Rekening courant': return p_.option($, ($) => $['Rekening courant']['l entry'] === $v_context)
                                            default: return false
                                        }
                                    }
                                )
                            )
                            const $p_verkopen: s_out.Informele_Rekening['references to me']['verkopen'] = p_.from.dictionary($p_handelstransacties.verkopen).filter(
                                ($) => p_.from.state($.bron.Afhandeling).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Rekening courant': return p_.option($, ($) => $['Rekening courant']['l entry'] === $v_context)
                                            default: return false
                                        }
                                    }
                                )
                            )

                            const $p_bankrekeningen: s_out.Informele_Rekening['references to me']['bankrekeningen'] = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen).map_optionally(
                                ($) => {
                                    const $p_mutatie_verwerkingen = p_.from.dictionary($['Mutatie Verwerkingen']).filter(
                                        ($): boolean => p_.from.state($.type).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Balans': return p_.option($, ($) => p_.from.state($).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Informele rekening': return p_.option($, ($) => $['Informele rekening']['l entry'] === $v_context)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            }
                                        )
                                    )
                                    return p_.from.dictionary($p_mutatie_verwerkingen).on_has_entries(
                                        ($) => p_.literal.set({
                                            'mutatie verwerkingen': $
                                        }),
                                        () => p_.literal.not_set()
                                    )
                                }
                            )

                            const $p_verrekenposten: s_out.Informele_Rekening['references to me']['verrekenposten'] = p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten).map_optionally(
                                ($) => {
                                    const $p_mutaties = p_.from.dictionary($.Mutaties).filter(
                                        ($): boolean => p_.from.state($.Afhandeling).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'Balans': return p_.option($, ($) => p_.from.state($).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'Informele rekening': return p_.option($, ($) => $['Informele rekening']['l entry'] === $v_context)
                                                                default: return false
                                                            }
                                                        }))
                                                    default: return false
                                                }
                                            }
                                        )
                                    )
                                    return p_.from.dictionary($p_mutaties).on_has_entries(
                                        ($) => p_.literal.set({
                                            'mutaties': $
                                        }),
                                        () => p_.literal.not_set()
                                    )
                                }
                            )
                            return {
                                'inkopen': $p_inkopen,
                                'verkopen': $p_verkopen,
                                'bankrekeningen': $p_bankrekeningen,
                                'verrekenposten': $p_verrekenposten,
                            }
                        })

                        const $p_bankrekening_mutatie_verwerkingen = p_.from.dictionary($p_references_to_me.bankrekeningen).sum(
                            ($) => p_.from.dictionary(
                                $['mutatie verwerkingen']
                            ).sum(
                                ($) => -$.Stam.Bedrag
                            )
                        )
                        const $p_verrekenpost_mutaties: number = p_.from.dictionary($p_references_to_me.verrekenposten).sum(
                            ($) => p_.from.dictionary($.mutaties).sum(
                                ($) => - $.Bedrag
                            )
                        )
                        const $p_inkopen_x: number = p_.from.dictionary(
                            $p_references_to_me.inkopen
                        ).sum(
                            ($) => p_.from.dictionary($.regels).sum(
                                ($) => - $['bedrag context']['Bedrag inclusief geheven BTW']
                            )
                        )
                        const $p_verkopen_x: number = p_.from.dictionary(
                            $p_references_to_me.verkopen
                        ).sum(
                            ($) => p_.from.dictionary($.regels).sum(
                                ($) => $['bedrag inclusief btw']
                            )
                        )

                        const $p_mutatie_totaal =
                            + $p_inkopen_x
                            + $p_verkopen_x
                            + $p_bankrekening_mutatie_verwerkingen
                            + $p_verrekenpost_mutaties

                        const $p_eindsaldo = $.Beginsaldo + $p_mutatie_totaal

                        const $p_overgenomen = p_.from.dictionary($v_bron_root.Jaren).sum(
                            ($) => p_.from.dictionary(
                                p_.from.dictionary($.Jaarbeheer.Balans['Informele rekeningen']).filter(
                                    ($) => p_.from.state($.Nieuw).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Nee': return p_.option($, ($) => $.Rekening['l entry'] === $v_context)
                                                default: return false
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Beginsaldo
                            )
                        )

                        const $p_openstaand =
                            + $p_eindsaldo
                            - $p_overgenomen
                        return {
                            'bron': $,
                            'references to me': $p_references_to_me,
                            'aggregaties': {
                                'inkopen': $p_inkopen_x,
                                'verkopen': $p_verkopen_x,
                                'bankrekening mutatie verwerkingen': $p_bankrekening_mutatie_verwerkingen,
                                'verrekenpost mutaties': $p_verrekenpost_mutaties,
                            },
                            'mutatie totaal': $p_mutatie_totaal,
                            'eindsaldo': $p_eindsaldo,
                            'overgenomen': $p_overgenomen,
                            'openstaand': $p_openstaand,
                            'todo': $p_openstaand !== 0,
                        }
                    }
                )


                const $p_bankrekeningen = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans.Bankrekeningen).join(
                    $v_bron_jaar.Mutaties.Bankrekeningen,
                    ($, other): s_out.Bankrekening => {
                        const verwerking_bron = other
                        const bron_bankrekening = $
                        const $p_mutaties = p_.from.dictionary($.Mutaties).sum(
                            ($) => $.Bedrag
                        )
                        const $p_eindsaldo =
                            + $.Beginsaldo
                            + $p_mutaties

                        const context = bron_bankrekening
                        const $p_overgenomen = p_.from.dictionary($v_bron_root.Jaren).sum(
                            ($) => p_.from.dictionary(
                                p_.from.dictionary($.Jaarbeheer.Balans.Bankrekeningen).filter(
                                    ($) => p_.from.state($.Nieuw).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Ja': return p_.option($, ($) => false)
                                                case 'Nee': return p_.option($, ($) => $.Rekening['l entry'] === context)
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Beginsaldo
                            )
                        )
                        const $p_openstaand =
                            + $p_eindsaldo
                            - $p_overgenomen
                        return {
                            'bron': $,
                            'verwerking bron': verwerking_bron,
                            'mutaties': p_.from.dictionary($.Mutaties).join(
                                p_.from.optional(verwerking_bron).decide<s_in.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen>(
                                    ($): s_in.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen => $['Mutatie Verwerkingen'],
                                    () => p_.literal.dictionary({}),
                                ),
                                ($, other) => ({
                                    'bron': $,
                                    'verwerking bron': other,

                                })
                            ),
                            // 'mutaties totaal': $p_mutaties,
                            'eindsaldo': $p_eindsaldo,
                            'overgenomen': $p_overgenomen,
                            'openstaand': $p_openstaand,
                            'todo': $p_openstaand !== 0,
                        }
                    }
                )


                const $p_overige_balans_items: s_out.Jaar['balans']['overige balans items'] = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans['Overige balans items']).map(
                    ($, id): s_out.Overige_Balans_Item => {
                        const $v_id = id
                        const $v_context = $


                        const $p_references_to_me: s_out.Overige_Balans_Item['references to me'] = p_.literal.group_resolve(() => {
                            const $p_inkopen: s_out.Overige_Balans_Item['references to me']['inkopen'] = p_.from.dictionary($p_handelstransacties.inkopen).map_optionally(
                                ($) => {
                                    const $p_regels = p_.from.dictionary($.regels).filter(
                                        ($): boolean => p_.from.state($.bron.Type).decide(
                                            ($): boolean => {
                                                switch ($[0]) {
                                                    case 'Balans': return p_.option($, ($) => $['Balans item']['l entry'] === $v_context)
                                                    case 'Kosten': return p_.option($, ($) => false)
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }
                                        )
                                    )
                                    return p_.from.dictionary($p_regels).on_has_entries(
                                        ($) => p_.literal.set({
                                            'regels': p_.from.dictionary($).map(
                                                ($) => ({
                                                    'bron': $,
                                                    'bedrag': $['bedrag context']['Bedrag inclusief geheven BTW'] - $['bedrag context']['BTW-bedrag']
                                                })
                                            )
                                        }),
                                        () => p_.literal.not_set()
                                    )
                                }
                            )
                            const $p_verkopen: s_out.Overige_Balans_Item['references to me']['verkopen'] = p_.from.dictionary($p_handelstransacties.verkopen).map_optionally(
                                ($) => {
                                    const $p_regels = p_.from.dictionary($.regels).filter(
                                        ($): boolean => p_.from.state($.bron.Type).decide(
                                            ($): boolean => {
                                                switch ($[0]) {
                                                    case 'Balans': return p_.option($, ($) => $['Balans item']['l entry'] === $v_context)
                                                    case 'Opbrengsten': return p_.option($, ($) => false)
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }
                                        )
                                    )
                                    return p_.from.dictionary($p_regels).on_has_entries(
                                        ($) => p_.literal.set({
                                            'regels': p_.from.dictionary($).map(
                                                ($) => ({
                                                    'bron': $,
                                                    'bedrag': - $.bron['Bedrag exclusief BTW']
                                                })
                                            )
                                        }),
                                        () => p_.literal.not_set()
                                    )
                                }
                            )
                            const $p_mutaties: s_out.Overige_Balans_Item['references to me']['mutaties'] = p_.from.dictionary($v_bron_jaar.Mutaties['Overige Balans Items']).get_possible_entry(
                                $v_id,
                                ($) => p_.literal.set($),
                                () => p_.literal.not_set(),
                            )
                            return {
                                'inkopen': $p_inkopen,
                                'verkopen': $p_verkopen,
                                'mutaties': $p_mutaties,
                            }
                        })

                        const $p_aggregaties: s_out.Overige_Balans_Item['aggregaties'] = p_.literal.group_resolve(() => {
                            const $p_mutaties = p_.from.optional($p_references_to_me.mutaties).decide(
                                ($) => p_.from.dictionary($['Memoriaal Boekingen']).sum(
                                    ($) => $.Bedrag
                                ),
                                () => 0
                            )
                            const $p_inkopenx = p_.from.dictionary($p_references_to_me.inkopen).sum(
                                ($) => p_.from.dictionary(
                                    $.regels
                                ).sum(
                                    ($) => $.bedrag
                                )
                            )

                            const $p_verkopenx = p_.from.dictionary($p_references_to_me.verkopen).sum(
                                ($) => p_.from.dictionary(
                                    $.regels
                                ).sum(
                                    ($) => $.bedrag
                                )
                            )
                            return {
                                'mutaties': $p_mutaties,
                                'inkopen': $p_inkopenx,
                                'verkopen': $p_verkopenx,
                                // 'totaal':
                                //     + $p_mutaties
                                //     + $p_inkopenx
                                //     + $p_verkopenx
                            }
                        })
                        const $p_overgenomen = p_.from.dictionary($v_bron_root.Jaren).sum(
                            ($) => p_.from.dictionary(
                                p_.from.dictionary($.Jaarbeheer.Balans['Overige balans items']).filter(
                                    ($) => p_.from.state($.Nieuw).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Ja': return p_.option($, ($) => false)
                                                case 'Nee': return p_.option($, ($) => $['Balans item']['l entry'] === $v_context)
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Beginsaldo
                            )
                        )
                        const $p_eindsaldo =
                            + $.Beginsaldo
                            + $p_aggregaties.inkopen
                            + $p_aggregaties.verkopen
                            + $p_aggregaties.mutaties
                        return {
                            'bron': $,
                            'references to me': $p_references_to_me,
                            'aggregaties': $p_aggregaties,
                            'eindsaldo': $p_eindsaldo,
                            'overgenomen': $p_overgenomen,
                            'todo': $p_eindsaldo !== $p_overgenomen,
                        }
                    }
                )

                const $p_verrekenposten: s_out.Jaar['balans']['verrekenposten'] = p_.from.dictionary($v_bron_jaar.Jaarbeheer.Balans.Verrekenposten).map(
                    ($) => {
                        const bron_verrekenpost = $
                        const context = bron_verrekenpost
                        const $p_eigen_mutaties = p_.from.dictionary(
                            p_.from.dictionary($v_bron_jaar.Mutaties.Verrekenposten).filter(
                                ($) => $.Stam === context
                            )
                        ).sum(
                            ($) => p_.from.dictionary($.Mutaties).sum(
                                ($) => $.Bedrag
                            )
                        )


                        const $p_bankrekening_mutaties = p_.from.dictionary($v_bron_jaar.Mutaties.Bankrekeningen).sum(
                            ($) => p_.from.dictionary(
                                p_.from.dictionary($['Mutatie Verwerkingen']).filter(
                                    ($) => p_.from.state($.type).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'Balans': return p_.option($, ($) => p_.from.state($).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Verrekenpost': return p_.option($, ($) => $.Verrekenpost['l entry'] === context)
                                                            default: return false
                                                        }
                                                    }))
                                                default: return false
                                            }
                                        })
                                )
                            ).sum(
                                ($) => $.Stam.Bedrag
                            )
                        )
                        const $p_saldo =
                            + $p_eigen_mutaties
                            - $p_bankrekening_mutaties
                        return {
                            'bron': $,
                            'aggregaties': {
                                'eigen mutaties': $p_eigen_mutaties,
                                'bankrekening mutaties': $p_bankrekening_mutaties,
                            },
                            'saldo': $p_saldo,
                            'todo': $p_saldo !== 0,
                        }
                    }
                )
                return {
                    'informele rekeningen': $p_informele_rekeningen,
                    'bankrekeningen': $p_bankrekeningen,
                    'verrekenposten': $p_verrekenposten,
                    'overige balans items': $p_overige_balans_items,
                }
            })



            return {
                'bron': $v_bron_jaar,
                'handelstransacties': $p_handelstransacties,
                'inkoopsaldo': $p_inkoopsaldo,
                'verkoopsaldo': $p_verkoopsaldo,
                'btw': $p_btw,
                'balans': $p_balans,
            }
        }
    )
    return {
        'bron': $,
        'jaren': $p_jaren,
    }
}