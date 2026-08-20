import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "pareto-static-html/schemas/static_html/schema"

namespace declarations {
    export type Bedrag = p_.Transformer_With_Parameter<
        number,
        s_out.Flow_Element.table.sections.L.rows.L.cells.L,
        {
        'teken omkeren': boolean
    }
    >
    export type Colspan_Text = p_.Transformer_With_Parameter<
        string,
        s_out.Flow_Element.table.sections.L.rows.L.cells.L,
        {
        'number of columns': number
    }
    >
    export type Domein = p_.Transformer_With_Parameter<
        s_in.Domein,
        s_out.Flow_Element.table.sections.L.rows,
        {
        'label': string
    }
    >
    export type Domein_Zijde = p_.Transformer<
        s_in.Domein_Zijde,
        p_di.List<s_out.Flow_Element.table.sections.L.rows.L.cells>
    >
    export type Indent = p_.Transformer<
        null,
        s_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
    export type Indent_Blank = p_.Transformer<
        null,
        s_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
    export type Root = p_.Transformer_With_Parameter<
        s_in.Root,
        s_out.Document,
        {
        'css': string
    }
    >
    export type Span_Indent = p_.Transformer<
        number,
        s_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
    export type Text = p_.Transformer<
        string,
        s_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
}

//schemas

//dependencies
import * as t_primitives_to_text from "../../../../../schemas/primitives/serializers.js"


//shorthands
import * as sh from "pareto-static-html/schemas/static_html/shorthands/target"


const Bedrag: declarations.Bedrag = ($, $p) => sh.t.s.r.td(
    p_.literal.list(["bedrag"]),
    p_.literal.not_set(),
    p_.literal.list([
        sh.f.span(
            p_.literal.list([
                sh.p.p("€ " + t_primitives_to_text.Fractional_Decimal(
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

const Colspan_Text: declarations.Colspan_Text = ($, $p) => sh.t.s.r.td(
    p_.literal.list(["span-text"]),
    p_.literal.set($p['number of columns']),
    p_.literal.list([
        sh.f.span(
            p_.literal.list([sh.p.p($)])
        )
    ])
)

const Domein: declarations.Domein = ($, $p) => p_.literal.segmented_list([
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

const Domein_Zijde: declarations.Domein_Zijde = ($) => {

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

const Indent: declarations.Indent = ($) => sh.t.s.r.td(
    p_.literal.list(["indent"]),
    p_.literal.not_set(),
    p_.literal.list([])
)

const Indent_Blank: declarations.Indent_Blank = ($) => sh.t.s.r.td(
    p_.literal.list(["indent blank"]),
    p_.literal.not_set(),
    p_.literal.list([])
)


export const Root: declarations.Root = ($, $p) => {
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
                                        $.value.beginbalans,
                                        {
                                            'label': "beginbalans",
                                        }
                                    ),
                                    Domein(
                                        $.value.resultaat,
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
                                                    $.value['resultaat bedrag'],
                                                    {
                                                        'teken omkeren': false
                                                    }
                                                ),
                                            ])
                                        ),
                                    ]),
                                    Domein(
                                        $.value.eindbalans,
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

const Span_Indent: declarations.Span_Indent = ($) => sh.t.s.r.td(
    p_.literal.list(["span-indent"]),
    p_.literal.set($),
    p_.literal.list([])
)

const Text: declarations.Text = ($) => sh.t.s.r.td(
    p_.literal.list(["text"]),
    p_.literal.not_set(),
    p_.literal.list([
        sh.f.span(
            p_.literal.list([sh.p.p($)])
        )
    ])
)