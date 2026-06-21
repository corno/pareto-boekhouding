import * as p_di from 'pareto-core/dist/interface/data'
import * as p_ from 'pareto-core/dist/implementation/transformer'
import p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"
import * as d_in from "../../../../interface/data/derived"
import * as d_temp_aggregatie_2 from "../../../../interface/data/aggregatie"

//dependencies
import * as t_primitives_to_text from "../primitives/text"

const integer_from_dictionary = <T extends p_di.Value>(
    dict: p_di.Dictionary<T>,
    get_value: ($: T) => number,
): number => p_.from.list(
    p_.from.dictionary(
        dict
    ).convert_to_list(
        ($) => $
    )
).sum(
    ($) => get_value($)
)

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"

//data
import { css } from "../../../../data/css"


const Bedrag: p_i.Transformer_With_Parameter<
    number,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L,
    {
        'teken omkeren': boolean
    }
> = ($, $p) => sh.t.s.r.td(
    ["bedrag"],
    p_.literal.not_set(),
    [
        sh.f.span([
            sh.p.p("€ " + t_primitives_to_text.fractional_decimal(
                $p['teken omkeren'] ? -$ : $,
                {
                    'number of fractional digits': 2,
                    'decimal separator character code': 44, // ','
                    'thousand separator character code': 46, // '.'
                }
            ))
        ])
    ]
)

const Text: p_i.Transformer<
    string,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["text"],
    p_.literal.not_set(),
    [
        sh.f.span([sh.p.p($)])
    ]
)

const Colspan_Text: p_i.Transformer_With_Parameter<
    string,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L,
    {
        'number of columns': number
    }
> = ($, $p) => sh.t.s.r.td(
    ["span-text"],
    p_.literal.set($p['number of columns']),
    [
        sh.f.span([sh.p.p($)])
    ]
)

const Span_Indent: p_i.Transformer<
    number,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["span-indent"],
    p_.literal.set($),
    []
)

const Indent: p_i.Transformer<
    null,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["indent"],
    p_.literal.not_set(),
    []
)

const Indent_Blank: p_i.Transformer<
    null,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["indent blank"],
    p_.literal.not_set(),
    []
)




const Domein_Zijde: p_i.Transformer<
    d_temp_aggregatie_2.Domein_Zijde,
    p_di.List<d_out.Flow_Element.table.sections.L.rows.L.cells>
> = ($) => {

    const teken_omkeren = $['teken omkeren']

    return p_.from.dictionary(
        $.hoofdcategorieen
    ).flatten_to_list(
        ($, id) => p_.literal.nested_list<d_out.Flow_Element.table.sections.L.rows.L.cells>([
            p_.literal.list([
                p_.literal.list([
                    Colspan_Text(
                        id,
                        {
                            'number of columns': 3
                        }
                    ),
                    Span_Indent(2),
                    Bedrag(
                        $.totaal,
                        {
                            'teken omkeren': teken_omkeren
                        }
                    ),
                ])
            ]),
            p_.from.dictionary(
                $.subcategorieen
            ).flatten_to_list(
                ($, id) => p_.literal.nested_list<d_out.Flow_Element.table.sections.L.rows.L.cells>([
                    p_.literal.list([
                        p_.literal.list([
                            Indent(null),
                            Colspan_Text(
                                id,
                                {
                                    'number of columns': 2
                                }
                            ),
                            Indent(null),
                            Bedrag(
                                $.totaal,
                                {
                                    'teken omkeren': teken_omkeren
                                }
                            ),
                            Indent(null),
                        ])
                    ]),
                    p_.from.dictionary(
                        $.grootboekrekeningen
                    ).flatten_to_list(
                        ($, id) => p_.literal.list<d_out.Flow_Element.table.sections.L.rows.L.cells>([
                            p_.literal.list([
                                Indent(null),
                                Indent(null),
                                Text(id),
                                Bedrag(
                                    $.bedrag,
                                    {
                                        'teken omkeren': teken_omkeren
                                    }
                                ),
                                Span_Indent(2),
                            ])
                        ])
                    )
                ])
            )
        ])
    )
}

const Domein: p_i.Transformer_With_Parameter<
    d_temp_aggregatie_2.Domein,
    d_out.Flow_Element.table.sections.L.rows,
    {
        'label': string
    }
> = ($, $p) => p_.literal.nested_list([
    p_.literal.list([
        sh.t.s.row(["margin"], p_.literal.not_set(), []),
        sh.t.s.row(
            ["domein"],
            p_.literal.not_set(),
            [
                Indent_Blank(null),
                Colspan_Text(
                    $p.label,
                    {
                        'number of columns': 13
                    }
                ),
            ]
        ),
        sh.t.s.row(
            ["domein_zijde"],
            p_.literal.not_set(),
            [
                Indent_Blank(null),
                Indent_Blank(null),
                Colspan_Text(
                    $.links.label,
                    {
                        'number of columns': 6
                    }
                ),
                Colspan_Text(
                    $.rechts.label,
                    {
                        'number of columns': 6
                    }
                ),
            ]
        ),
    ]),
    p_.from.list(
        Domein_Zijde($.links)
    ).full_join(
        Domein_Zijde($.rechts),
        (value, other_value) => ({
            'links': value,
            'rechts': other_value,
        })
    ).__l_map_deprecated(
        ($) => sh.t.s.row(
            ["item"],
            p_.literal.not_set(),
            p_.literal.nested_list([
                p_.literal.list([
                    Indent_Blank(null),
                    Indent_Blank(null),
                ]),
                $.links.__decide(
                    ($) => $,
                    () => p_.literal.list([Span_Indent(6)])
                ),
                $.rechts.__decide(
                    ($) => $,
                    () => p_.literal.list([Span_Indent(6)])
                ),
            ])
        )
    ),
    p_.literal.list([
        sh.t.s.row(
            ["totaal"],
            p_.literal.not_set(),
            [
                Indent_Blank(null),
                Indent_Blank(null),
                Text("totaal"),
                Span_Indent(4),
                Bedrag($.links.totaal, {
                    'teken omkeren': true
                }),
                Text("totaal"),
                Span_Indent(4),
                Bedrag($.rechts.totaal, {
                    'teken omkeren': false
                }),
            ]
        ),
    ])
])

const Resultaat_Grootboekrekeningen: p_i.Transformer_With_Parameter<
    d_in.Resultaat.Grootboek_Rekeningen,
    d_temp_aggregatie_2.Domein_Zijde,
    {
        'label': string
        'teken omkeren': boolean
    }
> = ($, $p) => {

    const p_grootboekrekeningen = $.__d_map_deprecated(
        ($) => ({
            'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
            'subcategorie': $.bron.Stam.Subcategorie['l id'],
            'bedrag': $.totaal,
        })
    )

    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': p_.from.dictionary(
            p_grootboekrekeningen
        ).group(
            ($) => $.hoofdcategorie).__d_map_deprecated(
                ($) => {
                    const subcategorieen = p_.from.dictionary(
                        $
                    ).group(
                        ($) => $.subcategorie
                    ).__d_map_deprecated(
                        ($) => ({
                            'grootboekrekeningen': $,
                            'totaal': integer_from_dictionary(
                                $,
                                ($) => $.bedrag
                            )
                        })
                    )
                    return {
                        'subcategorieen': subcategorieen,
                        'totaal': integer_from_dictionary(
                            subcategorieen,
                            ($) => $.totaal
                        )
                    }
                }
            ),
        'totaal': integer_from_dictionary(
            p_grootboekrekeningen,
            ($) => $.bedrag
        ),
    }
}

const Balans_Grootboekrekeningen: p_i.Transformer_With_Parameter<
    d_in.Balans.Grootboek_Rekeningen,
    d_temp_aggregatie_2.Domein_Zijde,
    {
        'type':
        | ['begin', null]
        | ['eind', null]
        'label': string
        'teken omkeren': boolean
    }
> = ($, $p) => {
    const p_grootboekrekeningen = $.__d_map_deprecated(
        ($) => {

            const context = $

            return {
                'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
                'subcategorie': $.bron.Stam.Subcategorie['l id'],
                'bedrag': p_.from.state($p.type).decide(($): number => {
                    switch ($[0]) {
                        case 'begin': return p_.ss($, ($) => context.totaal.beginsaldo)
                        case 'eind': return p_.ss($, ($) => context.totaal.beginsaldo + context.totaal.mutaties)
                        default: return p_.au($[0])
                    }
                }),
            }
        }
    )
    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': p_.from.dictionary(
            p_grootboekrekeningen
        ).group(
            ($) => $.hoofdcategorie).__d_map_deprecated(
                ($) => {
                    const subcategorieen = p_.from.dictionary(
                        $
                    ).group(
                        ($) => $.subcategorie
                    ).__d_map_deprecated(
                        ($) => ({
                            'grootboekrekeningen': $,
                            'totaal': integer_from_dictionary(
                                $,
                                ($) => $.bedrag
                            )
                        })
                    )
                    return {
                        'subcategorieen': subcategorieen,
                        'totaal': integer_from_dictionary(
                            subcategorieen,
                            ($) => $.totaal
                        )
                    }
                }
            ),
        'totaal': integer_from_dictionary(
            p_grootboekrekeningen,
            ($) => $.bedrag
        ),
    }
}

export const Root: p_i.Transformer<
    d_in.Root,
    d_out.Document
> = ($) => {
    // p_log_debug_message("", () => { })
    // p_log_debug_message("bankrekeningen", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($.bankrekeningen).filter(($) => $.todo).__d_map_deprecated(($, bankrekening) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${bankrekening
    //             }\t${$.bron.Beginsaldo
    //             }\t${$.mutaties
    //             }\t${$.eindsaldo
    //             }\t${$.overgenomen
    //             }\t${$.openstaand
    //             }`,
    //             () => { }
    //         )
    //     })
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("verkopen", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($.handelstransacties.verkopen).filter(($) => true).__d_map_deprecated(($, verkoop) => {
    //         p_.from.dictionary($.regels).filter(($) => true).__d_map_deprecated(($, regel) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${verkoop
    //             }\t${regel
    //             }\t${$['btw bedrag'] / 100
    //             }`,
    //             () => { }
    //         )
    //     })
    //     })
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("informele rekeningen", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($['informele rekeningen']).filter(($) => $.todo).__d_map_deprecated(($, rekening) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${rekening
    //             }\t${$.bron.Beginsaldo
    //             }\t${$['mutatie totaal']
    //             }\t${$.eindsaldo
    //             }\t${$.overgenomen
    //             }\t${$.openstaand
    //             }`,
    //             () => { }
    //         )
    //     })
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("verrekenposten", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($.verrekenposten).filter(($) => $.todo).__d_map_deprecated(($, verrekenpost) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${verrekenpost
    //             }\t${$['eigen mutaties']
    //             }\t${$['bankrekening mutaties']
    //             }\t${$.saldo
    //             }`,
    //             () => { }
    //         )
    //     })
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("btw periodes", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($.jaarbeheer.resultaat['btw periodes']).filter(($) => true).__d_map_deprecated(($, btw_periode) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${btw_periode
    //             }\t${$.afhandeling.betalingen
    //             }\t${$.afhandeling.verrekeningen
    //             }\t${$.status[0] === 'aangegeven' ? $.status[1].bron.Bedrag : '-'
    //             // }\t${$['mutaties totaal']
    //             }`,
    //             () => { }
    //         )
    //     })
    // })
    // p_log_debug_message("btw periodesxxxx", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($.jaarbeheer.resultaat['btw periodes']).filter(($) => true).__d_map_deprecated(($, btw_periode) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${btw_periode
    //             }\t${$.mutaties.inkopen
    //             }\t${$.mutaties.verkopen
    //             }\t${$.status[0] === 'aangegeven' ? $.status[1].bron.Bedrag : '-'
    //             }\t${$['nog aan te geven']
    //             }`,
    //             () => { }
    //         )
    //     })
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("overige balans items", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($['overige balans items']).filter(($) => $.todo).__d_map_deprecated(($, overige_balans_item) => {
    //         p_log_debug_message(
    //             `${id_jaar
    //             }\t${overige_balans_item
    //             }\t${$.bron.Beginsaldo
    //             }\t${$.mutaties['memoriaal boekingen']
    //             }\t${$.mutaties['inkopen']
    //             }\t${$.mutaties['verkopen']
    //             }\t${$.mutaties['totaal']
    //             }\t${$.eindsaldo
    //             }\t${$.overgenomen
    //             }`,
    //             () => { }
    //         )
    //     })
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("check balans begin", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     if ($.jaarbeheer.balans['check balans'].begin) {
    //         p_log_debug_message(
    //             `${id_jaar}\tbegin\tfailed`, () => { })
    //     }
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("check balans eind", () => { })
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     if ($.jaarbeheer.balans['check balans'].eind) {
    //         p_log_debug_message(
    //             `${id_jaar}\teind\tfailed`, () => { })
    //     }
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("balans grootboekrekeningen", () => { })
    // p_log_debug_message(
    //     `;${"jaar"
    //     };${"zijde"
    //     };${"hoofdcategorie"
    //     };${"subcategorie"
    //     };${"grootboekrekening"
    //     };${"postgroep"
    //     };${"post"
    //     };${"beginsaldo"
    //     };${"mutaties"
    //     };${"eindsaldo"
    //     }`,
    //     () => { }
    // )
    // $.jaren.__d_map_deprecated(($, id_jaar) => {
    //     p_.from.dictionary($.jaarbeheer.balans.grootboekrekeningen).map(($, id_grootboekrekening) => {
    //         const zijde = $.bron.Stam.Zijde[0]
    //         const hoofdcategorie = $.bron.Stam.Hoofdcategorie['l id']
    //         const subcategorie = $.bron.Stam.Subcategorie['l id']
    //         p_.from.dictionary(
    //             p_.from.dictionary($.postgroepen).map(($) => $)
    //         ).map(($, id_postgroep) => {
    //             p_.from.dictionary(
    //                 $.posten
    //             ).map(($, id_post) => {
    //                 p_log_debug_message(
    //                     `;${id_jaar
    //                     };${zijde
    //                     };${hoofdcategorie
    //                     };${subcategorie
    //                     };${id_grootboekrekening
    //                     };${id_postgroep
    //                     };${id_post
    //                     };${$.beginsaldo
    //                     };${$.mutaties
    //                     };${$.beginsaldo + $.mutaties
    //                     }`,
    //                     () => { }
    //                 )
    //             })
    //         })
    //     })
    // })

    $.jaren.__d_map_deprecated(($, id_jaar) => {
        p_.from.dictionary($.jaarbeheer.resultaat.grootboekrekeningen).map(($, id_grootboekrekening) => {
            const zijde = $.bron.Stam.Zijde[0]
            const hoofdcategorie = $.bron.Stam.Hoofdcategorie['l id']
            const subcategorie = $.bron.Stam.Subcategorie['l id']
            p_log_debug_message(
                `;${id_jaar
                };${zijde
                };${hoofdcategorie
                };${subcategorie
                };${id_grootboekrekening
                };${$.totaal
                }`,
                () => { }
            )
            return null
        })
        return null
    })
    return sh.document(
        css,
        sh.f.div([
            sh.f.table(
                [],
                p_.literal.nested_list([
                    p_.literal.list([
                        sh.t.header(["title"], [
                            sh.t.s.row(
                                [],
                                p_.literal.not_set(),
                                [
                                    sh.t.s.r.th(
                                        [],
                                        p_.literal.set(14),
                                        [
                                            sh.f.span([sh.p.p("Jaarrekeningen")])
                                        ]
                                    )
                                ]
                            )
                        ]),
                    ]),
                    p_.from.list(
                        p_.from.dictionary($.jaren).convert_to_list(
                            ($, id) => ({
                                'value': $,
                                'id': id,
                            })
                        )
                    ).map(($) => sh.t.body(
                        ["jaar"],
                        p_.literal.nested_list([
                            p_.literal.list([
                                sh.t.s.row(["margin"], p_.literal.not_set(), []),
                                sh.t.s.row(
                                    ["jaar"],
                                    p_.literal.not_set(),
                                    [
                                        Colspan_Text(
                                            $.id,
                                            {
                                                'number of columns': 14
                                            }
                                        ),
                                    ]
                                ),
                            ]),
                            Domein(
                                {
                                    'links': Balans_Grootboekrekeningen(
                                        p_.from.dictionary(
                                            $.value.jaarbeheer.balans['grootboekrekeningen']
                                        ).filter(
                                            ($) => $.bron.Stam.Zijde[0] === 'Activa'
                                        ),
                                        {
                                            'type': ['begin', null],
                                            'label': "activa",
                                            'teken omkeren': false
                                        }
                                    ),
                                    'rechts': Balans_Grootboekrekeningen(
                                        p_.from.dictionary(
                                            $.value.jaarbeheer.balans['grootboekrekeningen']
                                        ).filter(
                                            ($) => $.bron.Stam.Zijde[0] === 'Passiva'
                                        ),
                                        {
                                            'type': ['begin', null],
                                            'label': "passiva",
                                            'teken omkeren': true
                                        }
                                    ),

                                },
                                {
                                    'label': "beginbalans",
                                }
                            ),
                            Domein(
                                {
                                    'links': Resultaat_Grootboekrekeningen(
                                        p_.from.dictionary(
                                            $.value.jaarbeheer.resultaat['grootboekrekeningen']
                                        ).filter(
                                            ($) => $.bron.Stam.Zijde[0] === 'Kosten'
                                        ),
                                        {
                                            'label': "kosten",
                                            'teken omkeren': true
                                        }
                                    ),
                                    'rechts': Resultaat_Grootboekrekeningen(
                                        p_.from.dictionary(
                                            $.value.jaarbeheer.resultaat['grootboekrekeningen']
                                        ).filter(
                                            ($) => $.bron.Stam.Zijde[0] === 'Opbrengsten'
                                        ),
                                        {
                                            'label': "opbrengsten",
                                            'teken omkeren': false
                                        }
                                    ),
                                },
                                {
                                    'label': "resultaat",
                                }
                            ),
                            p_.literal.list([
                                sh.t.s.row(
                                    ["totaal"],
                                    p_.literal.not_set(),
                                    [
                                        Indent_Blank(null),
                                        Indent_Blank(null),
                                        Colspan_Text(
                                            "winst voor belasting",
                                            {
                                                'number of columns': 11
                                            }
                                        ),
                                        Bedrag(
                                            $.value.jaarbeheer.resultaat['resultaat'],
                                            {
                                                'teken omkeren': false
                                            }
                                        ),
                                    ]
                                ),
                            ]),
                            Domein(
                                {
                                    'links': Balans_Grootboekrekeningen(
                                        p_.from.dictionary(
                                            $.value.jaarbeheer.balans['grootboekrekeningen']
                                        ).filter(
                                            ($) => $.bron.Stam.Zijde[0] === 'Activa'
                                        ),
                                        {
                                            'type': ['eind', null],
                                            'label': "activa",
                                            'teken omkeren': false
                                        }
                                    ),
                                    'rechts': Balans_Grootboekrekeningen(
                                        p_.from.dictionary(
                                            $.value.jaarbeheer.balans['grootboekrekeningen']
                                        ).filter(
                                            ($) => $.bron.Stam.Zijde[0] === 'Passiva'
                                        ),
                                        {
                                            'type': ['eind', null],
                                            'label': "passiva",
                                            'teken omkeren': true
                                        }
                                    ),

                                },
                                {
                                    'label': "eindbalans",
                                }
                            ),
                        ]),
                    )),
                ])
            ),
        ])
    )
}