import * as pi from 'pareto-core/dist/interface'
import * as pt from 'pareto-core/dist/assign'
import p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'

import * as cffc from "../../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//data types
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"
import * as d_in from "../../../../interface/to_be_generated/derived"
import * as d_temp_aggregatie_2 from "../../../../interface/to_be_generated/aggregatie"


//dependencies
import * as t_primitives_to_text from "../primitives/text"

const integer_from_dictionary = <T extends pi.Value>(
    dict: pi.Dictionary<T>,
    get_value: ($: T) => number,
): number => pt.number.from.list(
    pt.list.from.dictionary(
        dict
    ).convert(($) => $)
).sum(
    ($) => get_value($)
)

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"

//data
import { css } from "../../../../data/css"


const Bedrag: pi.Transformer_With_Parameter<
    number,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L,
    {
        'teken omkeren': boolean
    }
> = ($, $p) => sh.t.s.r.td(
    ["bedrag"],
    pt.optional.literal.not_set(),
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

const Text: pi.Transformer<
    string,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["text"],
    pt.optional.literal.not_set(),
    [
        sh.f.span([sh.p.p($)])
    ]
)

const Colspan_Text: pi.Transformer_With_Parameter<
    string,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L,
    {
        'number of columns': number
    }
> = ($, $p) => sh.t.s.r.td(
    ["span-text"],
    pt.optional.literal.set($p['number of columns']),
    [
        sh.f.span([sh.p.p($)])
    ]
)

const Span_Indent: pi.Transformer<
    number,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["span-indent"],
    pt.optional.literal.set($),
    []
)

const Indent: pi.Transformer<
    null,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["indent"],
    pt.optional.literal.not_set(),
    []
)

const Indent_Blank: pi.Transformer<
    null,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
> = ($) => sh.t.s.r.td(
    ["indent blank"],
    pt.optional.literal.not_set(),
    []
)




const Domein_Zijde: pi.Transformer<
    d_temp_aggregatie_2.Domein_Zijde,
    pi.List<d_out.Flow_Element.table.sections.L.rows.L.cells>
> = ($) => {

    const teken_omkeren = $['teken omkeren']

    return pt.list.from.dictionary(
        $.hoofdcategorieen
    ).flatten(
        ($, id) => pt.list.nested_literal_old<d_out.Flow_Element.table.sections.L.rows.L.cells>([
            [
                pt.list.literal([
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
            ],
            pt.list.from.dictionary(
                $.subcategorieen
            ).flatten(
                ($, id) => pt.list.nested_literal_old<d_out.Flow_Element.table.sections.L.rows.L.cells>([
                    [
                        pt.list.literal([
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
                    ],
                    pt.list.from.dictionary(
                        $.grootboekrekeningen
                    ).flatten(
                        ($, id) => pt.list.nested_literal_old<d_out.Flow_Element.table.sections.L.rows.L.cells>([
                            [
                                pt.list.literal([
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
                            ]
                        ])
                    )
                ])
            )
        ])
    )
}

const Domein: pi.Transformer_With_Parameter<
    d_temp_aggregatie_2.Domein,
    d_out.Flow_Element.table.sections.L.rows,
    {
        'label': string
    }
> = ($, $p) => pt.list.nested_literal_old([
    [
        sh.t.s.row(["margin"], pt.optional.literal.not_set(), []),
        sh.t.s.row(
            ["domein"],
            pt.optional.literal.not_set(),
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
            pt.optional.literal.not_set(),
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
    ],
    pt.list.from.list(
        Domein_Zijde($.links)
    ).full_join(
        Domein_Zijde($.rechts),
        (value, other_value) => ({
            'links': value,
            'rechts': other_value,
        })
    ).__l_map(
        ($) => sh.t.s.row(
            ["item"],
            pt.optional.literal.not_set(),
            pt.list.nested_literal_old([
                [
                    Indent_Blank(null),
                    Indent_Blank(null),
                ],
                $.links.__decide(
                    ($) => $,
                    () => pt.list.literal([Span_Indent(6)])
                ),
                $.rechts.__decide(
                    ($) => $,
                    () => pt.list.literal([Span_Indent(6)])
                ),
            ])
        )
    ),
    [
        sh.t.s.row(
            ["totaal"],
            pt.optional.literal.not_set(),
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
    ]
])

const Resultaat_Grootboekrekeningen: pi.Transformer_With_Parameter<
    d_in.Resultaat.Grootboek_Rekeningen,
    d_temp_aggregatie_2.Domein_Zijde,
    {
        'label': string
        'teken omkeren': boolean
    }
> = ($, $p) => {

    const p_grootboekrekeningen = $.__d_map(
        ($) => ({
            'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
            'subcategorie': $.bron.Stam.Subcategorie['l id'],
            'bedrag': $.totaal,
        })
    )

    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': pt.dictionary.from.dictionary(
            p_grootboekrekeningen
        ).group(
            ($) => $.hoofdcategorie).__d_map(
                ($) => {
                    const subcategorieen = pt.dictionary.from.dictionary(
                        $
                    ).group(
                        ($) => $.subcategorie
                    ).__d_map(
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

const Balans_Grootboekrekeningen: pi.Transformer_With_Parameter<
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
    const p_grootboekrekeningen = $.__d_map(
        ($) => {

            const context = $

            return {
                'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
                'subcategorie': $.bron.Stam.Subcategorie['l id'],
                'bedrag': pt.decide.state($p.type, ($): number => {
                    switch ($[0]) {
                        case 'begin': return pt.ss($, ($) => context.totaal.beginsaldo)
                        case 'eind': return pt.ss($, ($) => context.totaal.beginsaldo + context.totaal.mutaties)
                        default: return pt.au($[0])
                    }
                }),
            }
        }
    )
    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': pt.dictionary.from.dictionary(
            p_grootboekrekeningen
        ).group(
            ($) => $.hoofdcategorie).__d_map(
                ($) => {
                    const subcategorieen = pt.dictionary.from.dictionary(
                        $
                    ).group(
                        ($) => $.subcategorie
                    ).__d_map(
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

export const Root: pi.Transformer<
    d_in.Root,
    d_out.Document
> = ($) => {
    // p_log_debug_message("", () => { })
    // p_log_debug_message("bankrekeningen", () => { })
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($.bankrekeningen).filter(($) => $.todo).__d_map(($, bankrekening) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($.handelstransacties.verkopen).filter(($) => true).__d_map(($, verkoop) => {
    //         pt.dictionary.from.dictionary($.regels).filter(($) => true).__d_map(($, regel) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($['informele rekeningen']).filter(($) => $.todo).__d_map(($, rekening) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($.verrekenposten).filter(($) => $.todo).__d_map(($, verrekenpost) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($.jaarbeheer.resultaat['btw periodes']).filter(($) => true).__d_map(($, btw_periode) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($.jaarbeheer.resultaat['btw periodes']).filter(($) => true).__d_map(($, btw_periode) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($['overige balans items']).filter(($) => $.todo).__d_map(($, overige_balans_item) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     if ($.jaarbeheer.balans['check balans'].begin) {
    //         p_log_debug_message(
    //             `${id_jaar}\tbegin\tfailed`, () => { })
    //     }
    // })
    // p_log_debug_message("", () => { })
    // p_log_debug_message("check balans eind", () => { })
    // $.jaren.__d_map(($, id_jaar) => {
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
    // $.jaren.__d_map(($, id_jaar) => {
    //     pt.dictionary.from.dictionary($.jaarbeheer.balans.grootboekrekeningen).map(($, id_grootboekrekening) => {
    //         const zijde = $.bron.Stam.Zijde[0]
    //         const hoofdcategorie = $.bron.Stam.Hoofdcategorie['l id']
    //         const subcategorie = $.bron.Stam.Subcategorie['l id']
    //         pt.dictionary.from.dictionary(
    //             pt.dictionary.from.dictionary($.postgroepen).map(($) => $)
    //         ).map(($, id_postgroep) => {
    //             pt.dictionary.from.dictionary(
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

    $.jaren.__d_map(($, id_jaar) => {
        pt.dictionary.from.dictionary($.jaarbeheer.resultaat.grootboekrekeningen).map(($, id_grootboekrekening) => {
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
                pt.list.nested_literal_old([
                    [
                        sh.t.header(["title"], [
                            sh.t.s.row(
                                [],
                                pt.optional.literal.not_set(),
                                [
                                    sh.t.s.r.th(
                                        [],
                                        pt.optional.literal.set(14),
                                        [
                                            sh.f.span([sh.p.p("Jaarrekeningen")])
                                        ]
                                    )
                                ]
                            )
                        ]),
                    ],
                    pt.list.from.list(
                        $.jaren.__to_list(
                            ($, id) => ({
                                'value': $,
                                'id': id,
                            })
                        )
                    ).map(($) => sh.t.body(
                        ["jaar"],
                        pt.list.nested_literal_old([
                            [
                                sh.t.s.row(["margin"], pt.optional.literal.not_set(), []),
                                sh.t.s.row(
                                    ["jaar"],
                                    pt.optional.literal.not_set(),
                                    [
                                        Colspan_Text(
                                            $.id,
                                            {
                                                'number of columns': 14
                                            }
                                        ),
                                    ]
                                ),
                            ],
                            Domein(
                                {
                                    'links': Balans_Grootboekrekeningen(
                                        pt.dictionary.from.dictionary(
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
                                        pt.dictionary.from.dictionary(
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
                                        pt.dictionary.from.dictionary(
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
                                        pt.dictionary.from.dictionary(
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
                            [
                                sh.t.s.row(
                                    ["totaal"],
                                    pt.optional.literal.not_set(),
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
                            ],
                            Domein(
                                {
                                    'links': Balans_Grootboekrekeningen(
                                        pt.dictionary.from.dictionary(
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
                                        pt.dictionary.from.dictionary(
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