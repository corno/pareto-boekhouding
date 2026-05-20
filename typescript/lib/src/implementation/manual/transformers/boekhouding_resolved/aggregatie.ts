import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'


//data types
import * as d_in from "../../../../interface/generated/liana/schemas/boekhouding/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/aggregatie"
import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

//dependencies

export const escaped: _pi.Transformer_With_Parameter<
    d_text.Text,
    d_text.Text,
    {
        'escape character code': number
        'character code': number
    }
> = ($, $p) => _p_text_from_list(
    _p_iterate(
        _p_list_from_text($, ($) => $),
        null,
        (iter) => _p_list_build_deprecated<number>(
            ($i) => {
                iter.list({
                    has_more_items: () => true,
                    handle: ($) => {
                        iter.discard(() => null)
                        if ($ === $p['escape character code']) { // \
                            $i['add item']($p['escape character code'])
                            $i['add item']($p['escape character code'])
                        } else if ($ === $p['character code']) {
                            $i['add item']($p['escape character code'])
                            $i['add item']($p['character code'])
                        } else {
                            $i['add item']($)
                        }

                    }
                })
            }

        )
    ),
    ($) => $
)


const aggregeer_dictionary = <T, Context>(
    dict: _pi.Dictionary<T>,
    context: Context,
    filter: ($: T, context: Context) => boolean,
    get_value: ($: T) => number,
): _pi.Dictionary<number> => {
    return _p.dictionary.from.dictionary(
        dict
    ).filter(
        ($) => filter($, context)
    ).__d_map(
        ($) => get_value($)
    )
}

const aggregeer_dictionaries = (
    $: {
        [key: string]: _pi.Dictionary<number>
    },
): number => _p.number.integer.from.list(
    _p.list.from.dictionary(
        _p.dictionary.literal($)
    ).convert(($) => _p.number.integer.from.list(
        _p.list.from.dictionary(
            $
        ).convert(($) => $)
    ).sum(
        ($) => $
    ))
).sum(
    ($) => $
)

export const Root: _pi.Transformer<d_in.Root, d_out.Root> = ($) => ({
    'bron': $,
    'jaren': $.Jaren.__d_map(($) => {
        const bron_jaar = $


        const inkoop_regels = _p.dictionary.from.dictionary(
            bron_jaar.Handelstransacties.Inkopen,
        ).flatten(
            ($) => $.Regels,
            (parent_id, child_id) => escaped(
                parent_id,
                {
                    'character code': 0x3A, //colon
                    'escape character code': 0x5C, //backslash
                }
            ) + ":" + child_id,
            // (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )
        const verkoop_regels = _p.dictionary.from.dictionary(
            bron_jaar.Handelstransacties.Verkopen,
        ).flatten(
            ($) => $.Regels,
            (parent_id, child_id) => escaped(
                parent_id,
                {
                    'character code': 0x3A, //colon
                    'escape character code': 0x5C, //backslash
                }
            ) + ":" + child_id,
            // (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )

        const bankrekening_mutatie_verwerkingen = _p.dictionary.from.dictionary(
            bron_jaar.Mutaties['Bankrekening Mutatie Verwerkingen']
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )

        const bankrekeningen_mutaties = _p.dictionary.from.dictionary(
            bron_jaar.Jaarbeheer.Balans.Bankrekeningen
        ).flatten(
            ($) => $.Mutaties,
            (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )


        const memoriaal_boekingen = _p.dictionary.from.dictionary(
            bron_jaar.Mutaties['Memoriaal boekingen']
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )

        const verrekenposten_mutaties = _p.dictionary.from.dictionary(
            bron_jaar.Mutaties['Verrekenpost mutaties']
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + ":" + child_id,
            {
                'duplicate_id': () => _p_unreachable_code_path("De naam wordt geescaped, dus er kunnen geen duplicates zijn"),
            }
        )

        const bankrekeningen = $.Jaarbeheer.Balans.Bankrekeningen


        const Balans_Grootboekrekeningen = ($: d_in.Grootboekrekeningen.Balans, label: string): d_out.Domein_Zijde => {
            const p_grootboekrekeningen = $.__d_map(($) => {


                return {
                    'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                    'subcategorie': $.Stam.Subcategorie['l id'],
                    'bedrag': aggregeer_dictionaries(
                        {
                            "inkoop regels": aggregeer_dictionary(
                                inkoop_regels,
                                $,
                                ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context)),
                                ($) => _p.decide.state($.Bedrag, ($): number => {
                                    switch ($[0]) {
                                        case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'])
                                        default: return _p.au($[0])
                                    }
                                })
                            ),
                            "verkoop regels": aggregeer_dictionary(
                                verkoop_regels,
                                $,
                                ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Balans' && _p.ss($, ($) => $['Balans item']['l entry'].Grootboekrekening['l entry'] === context)),
                                ($) => $['Bedrag exclusief BTW']
                            ),
                            "bankrekening mutatie verwerkingen": aggregeer_dictionary(
                                bankrekening_mutatie_verwerkingen,
                                $,
                                ($, context) => _p.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'Resultaat': return _p.ss($, ($) => false)
                                        case 'Balans': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'Informele rekening': return _p.ss($, ($) => $['Informele rekening']['l entry'].Grootboekrekening['l entry'] === context)
                                                case 'Verrekenpost': return _p.ss($, ($) => false)
                                                default: return _p.au($[0])
                                            }
                                        }))
                                        default: return _p.au($[0])
                                    }
                                }),
                                ($) => $.mutatie.Bedrag
                            ),
                            "bankrekeningen": aggregeer_dictionary(
                                bankrekeningen,
                                $,
                                ($, context) => $.Grootboekrekening['l entry'] === context,
                                ($) =>
                                    + _p.number.integer.from.list(
                                        _p.list.from.dictionary(
                                            $.Mutaties
                                        ).convert(
                                            ($) => $.Bedrag
                                        )
                                    ).sum(
                                        ($) => $
                                    )
                                    + $.Beginsaldo
                            ),
                            // "verkopen": aggregeer_dictionary(
                            //     bron_jaar.Handelstransacties.Verkopen,
                            //     $,
                            //     ($, context) => bron_jaar.Jaarbeheer.Balans['Grootboekrekening voor Inkoop saldo']['l entry'] === context,
                            //     ($) => _p.number.natural.from.dictionary(
                            //         $.Regels
                            //     ).
                            // )
                            //jaren->grootboekrekening inkoopsaldo
                            //jaren->grootboekrekening verkoopsaldo
                            //jaren->grootboekrekening BTW periode saldo
                            //jaren->grootboekrekening nog aan te geven BTW
                            //jaren->resultaat dit jaar
                            //jaren->grootboekrekening winstreserve
                            //informele rekeningen

                        }
                    ),
                }
            })
            return {
                'label': label,
                'hoofdcategorieen': _p.dictionary.from.dictionary(p_grootboekrekeningen).group(($) => $.hoofdcategorie).__d_map(($) => {
                    const subcategorieen = _p.dictionary.from.dictionary(
                        $
                    ).group(($) => $.subcategorie).__d_map(($) => ({
                        'grootboekrekeningen': $,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary($).convert(($) => $)
                        ).sum(
                            ($) => $.bedrag
                        )
                    }))
                    return {
                        'subcategorieen': subcategorieen,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary(subcategorieen).convert(($) => $.totaal)
                        ).sum(
                            ($) => $
                        )
                    }
                }),
                'totaal': _p.number.integer.from.list(_p.list.nested_literal_old([
                    _p.list.from.dictionary(p_grootboekrekeningen).convert(($) => $.bedrag)
                ])).sum(
                    ($) => $
                ),
            }
        }
        const Resultaat_Grootboekrekeningen = ($: d_in.Grootboekrekeningen.Resultaat, label: string): d_out.Domein_Zijde => {
            const p_grootboekrekeningen = $.__d_map(($) => {
                return {
                    'hoofdcategorie': $.Stam.Hoofdcategorie['l id'],
                    'subcategorie': $.Stam.Subcategorie['l id'],
                    'bedrag': aggregeer_dictionaries(
                        {
                            "inkoop regels": aggregeer_dictionary(
                                inkoop_regels,
                                $,
                                ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Kosten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context)),
                                ($) => _p.decide.state($.Bedrag, ($): number => {
                                    switch ($[0]) {
                                        case 'Bekend': return _p.ss($, ($) => $['Bedrag inclusief geheven BTW'] - $['BTW-bedrag'])
                                        default: return _p.au($[0])
                                    }
                                })
                            ),
                            "verkoop regels": aggregeer_dictionary(
                                verkoop_regels,
                                $,
                                ($, context) => _p.decide.state($.Type, ($) => $[0] === 'Opbrengsten' && _p.ss($, ($) => $.Grootboekrekening['l entry'] === context)),
                                ($) => $['Bedrag exclusief BTW']
                            ),
                            "memoriaal boekingen": aggregeer_dictionary(
                                memoriaal_boekingen,
                                $,
                                ($, context) => $.Grootboekrekening['l entry'] === context,
                                ($) => - $.Bedrag
                            ),
                            "BTW-afrondingen": aggregeer_dictionary( //FIXME
                                bron_jaar.Jaarbeheer.Resultaat['BTW periodes'],
                                $,
                                ($, context) => bron_jaar.Jaarbeheer.Resultaat['Grootboekrekening voor BTW afrondingen']['l entry'] === context,
                                ($) => _p.decide.state($.Status, ($) => {
                                    switch ($[0]) {
                                        case 'Aangegeven': return _p.ss($, ($) => $.Afronding)
                                        case 'Openstaand':return _p.ss($, ($) => 0)
                                        default: return _p.au($[0])
                                    }
                                })
                            ),
                        }
                    ),
                }
            })


            return {
                'label': label,
                'hoofdcategorieen': _p.dictionary.from.dictionary(p_grootboekrekeningen).group(($) => $.hoofdcategorie).__d_map(($) => {
                    const subcategorieen = _p.dictionary.from.dictionary($).group(($) => $.subcategorie).__d_map(($) => ({
                        'grootboekrekeningen': $,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary($).convert(($) => $)
                        ).sum(
                            ($) => $.bedrag
                        )
                    }))
                    return {
                        'subcategorieen': subcategorieen,
                        'totaal': _p.number.integer.from.list(
                            _p.list.from.dictionary(subcategorieen).convert(($) => $.totaal)
                        ).sum(
                            ($) => $
                        )
                    }
                }),
                'totaal': _p.number.integer.from.list(
                    _p.list.nested_literal_old([
                        _p.list.from.dictionary(p_grootboekrekeningen).convert(($) => $.bedrag)
                    ])
                ).sum(
                    ($) => $
                ),
            }
        }

        return {
            'grootboekrekeningen': {
                'balans': {
                    'links': Balans_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Balans).filter(($) => $.Stam.Zijde[0] === 'Activa'), "activa"),
                    'rechts': Balans_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Balans).filter(($) => $.Stam.Zijde[0] === 'Passiva'), "passiva"),

                },
                'resultaat': {
                    'links': Resultaat_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Resultaat).filter(($) => $.Stam.Zijde[0] === 'Kosten'), "kosten"),
                    'rechts': Resultaat_Grootboekrekeningen(_p.dictionary.from.dictionary($.Grootboekrekeningen.Resultaat).filter(($) => $.Stam.Zijde[0] === 'Opbrengsten'), "opbrengsten"),
                }
            },
        }
    }),
})