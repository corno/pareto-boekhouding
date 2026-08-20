import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "../../aggregatie/schema.js"

namespace declarations {
    export type Balans_Grootboekrekeningen = p_.Transformer_With_Parameter<
        s_in.Balans.Grootboek_Rekeningen,
        s_out.Domein_Zijde,
        {
            'type':
            | ['begin',
                null]
            | ['eind',
                null]
            'label': string
            'teken omkeren': boolean
        }
    >
    export type Resultaat_Grootboekrekeningen = p_.Transformer_With_Parameter<
        s_in.Resultaat.Grootboek_Rekeningen,
        s_out.Domein_Zijde,
        {
            'label': string
            'teken omkeren': boolean
        }
    >
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
}


const temp_integer_from_dictionary = <T extends p_di.Value>(
    dict: p_di.Dictionary<T>,
    get_value: ($: T) => number,
): number => p_.from.list(
    p_.from.dictionary(dict).convert_to_list(
        ($) => $
    )
).sum(
    ($) => get_value($)
)


export const Balans_Grootboekrekeningen: declarations.Balans_Grootboekrekeningen = ($, $p) => {
    const $p_grootboekrekeningen = p_.from.dictionary($).map(
        ($) => {

            const context = $

            const beginsaldo = p_.from.dictionary($.clusters).sum(
                ($) => p_.from.dictionary($.dagboeken).sum(
                    ($) => $.beginsaldo
                )
            )
            const mutatie_saldo = p_.from.dictionary($.clusters).sum(
                ($) => p_.from.dictionary($.dagboeken).sum(
                    ($) => p_.from.dictionary($.mutaties).sum(
                        ($) => $
                    )
                )
            )


            return {
                'hoofdcategorie': $.hoofdcategorie,
                'subcategorie': $.subcategorie,
                'bedrag': p_.from.state($p.type).decide(
                    ($): number => {
                        switch ($[0]) {
                            case 'begin': return p_.option($, ($) => beginsaldo)
                            case 'eind': return p_.option($, ($) => beginsaldo + mutatie_saldo)
                            default: return p_.exhaustive($[0])
                        }
                    }),
            }
        }
    )
    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': p_.from.dictionary($p_grootboekrekeningen).group(
            ($) => $.hoofdcategorie,
            ($) => {
                const $p_subcategorieen = p_.from.dictionary($).group(
                    ($) => $.subcategorie,
                    ($) => ({
                        'grootboekrekeningen': $,
                        'totaal': temp_integer_from_dictionary(
                            $,
                            ($) => $.bedrag
                        )
                    })
                )
                return {
                    'subcategorieen': $p_subcategorieen,
                    'totaal': temp_integer_from_dictionary(
                        $p_subcategorieen,
                        ($) => $.totaal
                    )
                }
            }
        ),
        'totaal': temp_integer_from_dictionary(
            $p_grootboekrekeningen,
            ($) => $.bedrag
        ),
    }
}



export const Resultaat_Grootboekrekeningen: declarations.Resultaat_Grootboekrekeningen = ($, $p) => {

    const $p_grootboekrekeningen = p_.from.dictionary($).map(
        ($) => ({
            'hoofdcategorie': $.hoofdcategorie,
            'subcategorie': $.subcategorie,
            'bedrag': p_.from.dictionary($.dagboeken).sum(
                ($) => p_.from.dictionary($.boekingen).sum(
                    ($) => $
                )
            ),
        })
    )

    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': p_.from.dictionary($p_grootboekrekeningen).group(
            ($) => $.hoofdcategorie,
            ($) => {
                const subcategorieen = p_.from.dictionary($).group(
                    ($) => $.subcategorie,
                    ($) => ({
                        'grootboekrekeningen': $,
                        'totaal': temp_integer_from_dictionary(
                            $,
                            ($) => $.bedrag
                        )
                    })
                )
                return {
                    'subcategorieen': subcategorieen,
                    'totaal': temp_integer_from_dictionary(
                        subcategorieen,
                        ($) => $.totaal
                    )
                }
            },
        ),
        'totaal': temp_integer_from_dictionary(
            $p_grootboekrekeningen,
            ($) => $.bedrag
        ),
    }
}


export const Root: declarations.Root = ($) => {
    return {
        'jaren': p_.from.dictionary($.jaren).map(
            ($) => ({
                'beginbalans': {
                    'links': Balans_Grootboekrekeningen(
                        p_.from.dictionary($.balans['grootboekrekeningen']).filter(
                            ($) => $.zijde[0] === 'activa'
                        ),
                        {
                            'type': ['begin', null],
                            'label': "activa",
                            'teken omkeren': false
                        }
                    ),
                    'rechts': Balans_Grootboekrekeningen(
                        p_.from.dictionary($.balans['grootboekrekeningen']).filter(
                            ($) => $.zijde[0] === 'passiva'
                        ),
                        {
                            'type': ['begin', null],
                            'label': "passiva",
                            'teken omkeren': true
                        }
                    ),

                },
                'resultaat': {
                    'links': Resultaat_Grootboekrekeningen(
                        p_.from.dictionary($.resultaat['grootboekrekeningen']).filter(
                            ($) => $.zijde[0] === 'kosten'
                        ),
                        {
                            'label': "kosten",
                            'teken omkeren': true
                        }
                    ),
                    'rechts': Resultaat_Grootboekrekeningen(
                        p_.from.dictionary($.resultaat['grootboekrekeningen']).filter(
                            ($) => $.zijde[0] === 'opbrengsten'
                        ),
                        {
                            'label': "opbrengsten",
                            'teken omkeren': false
                        }
                    ),
                },
                'resultaat bedrag': p_.from.dictionary($.resultaat.grootboekrekeningen).sum(
                    ($) => p_.from.dictionary($.dagboeken).sum(
                        ($) => p_.from.dictionary($.boekingen).sum(
                            ($) => $
                        )
                    )
                ),
                'eindbalans': {
                    'links': Balans_Grootboekrekeningen(
                        p_.from.dictionary($.balans['grootboekrekeningen']).filter(
                            ($) => $.zijde[0] === 'activa'
                        ),
                        {
                            'type': ['eind', null],
                            'label': "activa",
                            'teken omkeren': false
                        }
                    ),
                    'rechts': Balans_Grootboekrekeningen(
                        p_.from.dictionary($.balans['grootboekrekeningen']).filter(
                            ($) => $.zijde[0] === 'passiva'
                        ),
                        {
                            'type': ['eind', null],
                            'label': "passiva",
                            'teken omkeren': true
                        }
                    ),

                },
            })
        )
    }
}