import type * as p_di from 'pareto-core/interface/data'
import * as p_ from 'pareto-core/implementation/transformer'
import p_log_debug_message from 'pareto-core-dev/log_debug_message'

import type * as interface_ from "../../../declarations/transformers/aggregatie/jaarverslag_html.js"

//schemas
import type * as s_out from "pareto-static-html/interface/data/static_html"

//dependencies
import * as t_primitives_to_text from "../primitives/text.js"

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

//shorthands
import * as sh from "pareto-static-html/shorthands/static_html/target"


const Balans_Grootboekrekeningen: interface_.Balans_Grootboekrekeningen = ($, $p) => {
    const $p_grootboekrekeningen = p_.from.dictionary($).map(
        ($) => {

            const context = $

            return {
                'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
                'subcategorie': $.bron.Stam.Subcategorie['l id'],
                'bedrag': p_.from.state($p.type).decide(
                    ($): number => {
                        switch ($[0]) {
                            case 'begin': return p_.option($, ($) => context.totaal.beginsaldo)
                            case 'eind': return p_.option($, ($) => context.totaal.beginsaldo + context.totaal.mutaties)
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

const Bedrag: interface_.Bedrag = ($, $p) => sh.t.s.r.td(
    p_.literal.list(["bedrag"]),
    p_.literal.not_set(),
    p_.literal.list([
        sh.f.span(
            p_.literal.list([
                sh.p.p("€ " + t_primitives_to_text.fractional_decimal(
                    $p['teken omkeren'] ? -$ : $,
                    {
                        'number of fractional digits': 2,
                        'decimal separator character code': 44, // ','
                        'thousand separator character code': p_.literal.set(46) // '.'
                    }
                ))
            ])
        )
    ])
)

const Colspan_Text: interface_.Colspan_Text = ($, $p) => sh.t.s.r.td(
    p_.literal.list(["span-text"]),
    p_.literal.set($p['number of columns']),
    p_.literal.list([
        sh.f.span(
            p_.literal.list([sh.p.p($)])
        )
    ])
)

const Domein: interface_.Domein = ($, $p) => p_.literal.segmented_list([
    p_.literal.list([
        sh.t.s.row(
            p_.literal.list(["margin"]),
            p_.literal.not_set(),
            p_.literal.list([])
        ),
        sh.t.s.row(
            p_.literal.list(["domein"]),
            p_.literal.not_set(),
            p_.literal.list([
                Indent_Blank(null),
                Colspan_Text(
                    $p.label,
                    {
                        'number of columns': 13
                    }
                ),
            ])
        ),
        sh.t.s.row(
            p_.literal.list(["domein_zijde"]),
            p_.literal.not_set(),
            p_.literal.list([
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
            ])
        ),
    ]),
    p_.from.list(
        p_.from.list(
            Domein_Zijde($.links)
        ).full_join(
            Domein_Zijde($.rechts),
            (value, other_value) => ({
                'links': value,
                'rechts': other_value,
            })
        )
    ).map(
        ($) => sh.t.s.row(
            p_.literal.list(["item"]),
            p_.literal.not_set(),
            p_.literal.segmented_list([
                p_.literal.list([
                    Indent_Blank(null),
                    Indent_Blank(null),
                ]),
                p_.from.optional($.links).decide(
                    ($) => $,
                    () => p_.literal.list([Span_Indent(6)])
                ),
                p_.from.optional($.rechts).decide(
                    ($) => $,
                    () => p_.literal.list([Span_Indent(6)])
                ),
            ])
        )
    ),
    p_.literal.list([
        sh.t.s.row(
            p_.literal.list(["totaal"]),
            p_.literal.not_set(),
            p_.literal.list([
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
            ])
        ),
    ])
])

const Domein_Zijde: interface_.Domein_Zijde = ($) => {

    const teken_omkeren = $['teken omkeren']

    return p_.from.dictionary($.hoofdcategorieen).flatten_to_list(
        ($, id) => p_.literal.segmented_list<s_out.Flow_Element.table.sections.L.rows.L.cells>([
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
            p_.from.dictionary($.subcategorieen).flatten_to_list(
                ($, id) => p_.literal.segmented_list<s_out.Flow_Element.table.sections.L.rows.L.cells>([
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
                    p_.from.dictionary($.grootboekrekeningen).flatten_to_list(
                        ($, id) => p_.literal.list<s_out.Flow_Element.table.sections.L.rows.L.cells>([
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

const Indent: interface_.Indent = ($) => sh.t.s.r.td(
    p_.literal.list(["indent"]),
    p_.literal.not_set(),
    p_.literal.list([])
)

const Indent_Blank: interface_.Indent_Blank = ($) => sh.t.s.r.td(
    p_.literal.list(["indent blank"]),
    p_.literal.not_set(),
    p_.literal.list([])
)

const Resultaat_Grootboekrekeningen: interface_.Resultaat_Grootboekrekeningen = ($, $p) => {

    const $p_grootboekrekeningen = p_.from.dictionary($).map(
        ($) => ({
            'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
            'subcategorie': $.bron.Stam.Subcategorie['l id'],
            'bedrag': $.totaal,
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

export const Root: interface_.Root = ($, $p) => {
    return sh.document(
        $p.css,
        sh.f.div(
            p_.literal.list([
                sh.f.table(
                    p_.literal.list([]),
                    p_.literal.segmented_list([
                        p_.literal.list([
                            sh.t.header(
                                p_.literal.list(["title"]),
                                p_.literal.list([
                                    sh.t.s.row(
                                        p_.literal.list([]),
                                        p_.literal.not_set(),
                                        p_.literal.list([
                                            sh.t.s.r.th(
                                                p_.literal.list([]),
                                                p_.literal.set(14),
                                                p_.literal.list([
                                                    sh.f.span(
                                                        p_.literal.list([sh.p.p("Jaarrekeningen")])
                                                    )
                                                ])
                                            )
                                        ])
                                    )
                                ])
                            ),
                        ]),
                        p_.from.list(
                            p_.from.dictionary($.jaren).convert_to_list(
                                ($, id) => ({
                                    'value': $,
                                    'id': id,
                                })
                            )
                        ).map(
                            ($) => sh.t.body(
                                p_.literal.list(["jaar"]),
                                p_.literal.segmented_list([
                                    p_.literal.list([
                                        sh.t.s.row(
                                            p_.literal.list(["margin"]),
                                            p_.literal.not_set(),
                                            p_.literal.list([])
                                        ),
                                        sh.t.s.row(
                                            p_.literal.list(["jaar"]),
                                            p_.literal.not_set(),
                                            p_.literal.list([
                                                Colspan_Text(
                                                    $.id,
                                                    {
                                                        'number of columns': 14
                                                    }
                                                ),
                                            ])
                                        ),
                                    ]),
                                    Domein(
                                        {
                                            'links': Balans_Grootboekrekeningen(
                                                p_.from.dictionary($.value.jaarbeheer.balans['grootboekrekeningen']).filter(
                                                    ($) => $.bron.Stam.Zijde[0] === 'Activa'
                                                ),
                                                {
                                                    'type': ['begin', null],
                                                    'label': "activa",
                                                    'teken omkeren': false
                                                }
                                            ),
                                            'rechts': Balans_Grootboekrekeningen(
                                                p_.from.dictionary($.value.jaarbeheer.balans['grootboekrekeningen']).filter(
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
                                                p_.from.dictionary($.value.jaarbeheer.resultaat['grootboekrekeningen']).filter(
                                                    ($) => $.bron.Stam.Zijde[0] === 'Kosten'
                                                ),
                                                {
                                                    'label': "kosten",
                                                    'teken omkeren': true
                                                }
                                            ),
                                            'rechts': Resultaat_Grootboekrekeningen(
                                                p_.from.dictionary($.value.jaarbeheer.resultaat['grootboekrekeningen']).filter(
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
                                            p_.literal.list(["totaal"]),
                                            p_.literal.not_set(),
                                            p_.literal.list([
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
                                            ])
                                        ),
                                    ]),
                                    Domein(
                                        {
                                            'links': Balans_Grootboekrekeningen(
                                                p_.from.dictionary($.value.jaarbeheer.balans['grootboekrekeningen']).filter(
                                                    ($) => $.bron.Stam.Zijde[0] === 'Activa'
                                                ),
                                                {
                                                    'type': ['eind', null],
                                                    'label': "activa",
                                                    'teken omkeren': false
                                                }
                                            ),
                                            'rechts': Balans_Grootboekrekeningen(
                                                p_.from.dictionary($.value.jaarbeheer.balans['grootboekrekeningen']).filter(
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
    )
}

const Span_Indent: interface_.Span_Indent = ($) => sh.t.s.r.td(
    p_.literal.list(["span-indent"]),
    p_.literal.set($),
    p_.literal.list([])
)

const Text: interface_.Text = ($) => sh.t.s.r.td(
    p_.literal.list(["text"]),
    p_.literal.not_set(),
    p_.literal.list([
        sh.f.span(
            p_.literal.list([sh.p.p($)])
        )
    ])
)