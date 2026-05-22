import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'

import * as cffc from "../../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//data types
import * as d_out from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"
import * as d_in from "../../../../interface/to_be_generated/aggregatie"
import * as d_temp_aggratie_2 from "../../../../interface/to_be_generated/aggregatie_2"


//dependencies
import * as t_primitives_to_text from "../../transformers/primitives/text"

const integer_from_dictionary = <T>(
    dict: _pi.Dictionary<T>,
    get_value: ($: T) => number,
): number => _p.number.integer.from.list(
    _p.list.from.dictionary(
        dict
    ).convert(($) => $)
).sum(
    ($) => get_value($)
)

//shorthands
import * as sh from "pareto-static-html/dist/shorthands/static_html"

//data
import { css } from "../../../../data/css"


const Bedrag = ($: number, $p: { 'teken omkeren': boolean }): d_out.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["bedrag"],
    _p.optional.literal.not_set(),
    [
        sh.f.span([sh.p.p("€ " + t_primitives_to_text.fractional_decimal(
            $p['teken omkeren'] ? -$ : $,
            {
                'number of fractional digits': 2,
                'decimal separator character code': 44, // ','
                'thousand separator character code': 46, // '.'
            }
        ))])
    ]
)

const Text = ($: string): d_out.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["text"],
    _p.optional.literal.not_set(),
    [
        sh.f.span([sh.p.p($)])
    ]
)

const Span_Text = (text: string, number_of_cell: number): d_out.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["span-text"],
    _p.optional.literal.set(number_of_cell),
    [
        sh.f.span([sh.p.p(text)])
    ]
)

const Span_Indent = (depth: number): d_out.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["span-indent"],
    _p.optional.literal.set(depth),
    []
)

const Indent = (): d_out.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["indent"],
    _p.optional.literal.not_set(),
    []
)

const Indent_Blank = (): d_out.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["indent blank"],
    _p.optional.literal.not_set(),
    []
)




const Domein_Zijde = (
    $: d_temp_aggratie_2.Domein_Zijde,
): _pi.List<d_out.Flow_Element.table.sections.L.rows.L.cells> => {
    const teken_omkeren = $['teken omkeren']
    return _p.list.from.dictionary(
        $.hoofdcategorieen
    ).flatten(($, id) => _p.list.nested_literal_old<d_out.Flow_Element.table.sections.L.rows.L.cells>([
        [
            _p.list.literal([
                Span_Text(id, 3),
                Span_Indent(2),
                Bedrag($.totaal, { 'teken omkeren': teken_omkeren }),
            ])
        ],
        _p.list.from.dictionary(
            $.subcategorieen
        ).flatten(($, id) => _p.list.nested_literal_old<d_out.Flow_Element.table.sections.L.rows.L.cells>([
            [
                _p.list.literal([
                    Indent(),
                    Span_Text(id, 2),
                    Indent(),
                    Bedrag($.totaal, { 'teken omkeren': teken_omkeren }),
                    Indent(),
                ])
            ],
            _p.list.from.dictionary(
                $.grootboekrekeningen
            ).flatten(($, id) => _p.list.nested_literal_old<d_out.Flow_Element.table.sections.L.rows.L.cells>([
                [
                    _p.list.literal([
                        Indent(),
                        Indent(),
                        Text(id),
                        Bedrag($.bedrag, { 'teken omkeren': teken_omkeren }),
                        Span_Indent(2),
                    ])
                ]
            ]))
        ]))
    ]))
}

const Domein = (
    $: d_temp_aggratie_2.Domein,
    $p: {
        'label': string
    }
): d_out.Flow_Element.table.sections.L.rows => _p.list.nested_literal_old([
    [
        sh.t.s.row(["margin"], _p.optional.literal.not_set(), []),
        sh.t.s.row(
            ["domein"],
            _p.optional.literal.not_set(),
            [
                Indent_Blank(),
                Span_Text($p.label, 13),
            ]
        ),
        sh.t.s.row(
            ["domein_zijde"],
            _p.optional.literal.not_set(),
            [
                Indent_Blank(),
                Indent_Blank(),
                Span_Text($.links.label, 6),
                Span_Text($.rechts.label, 6),
            ]
        ),
    ],
    _p.list.from.list(
        Domein_Zijde($.links)
    ).full_join(
        Domein_Zijde($.rechts),
        (value, other_value) => ({
            'links': value,
            'rechts': other_value,
        })
    ).__l_map(($) => sh.t.s.row(
        ["item"],
        _p.optional.literal.not_set(),
        _p.list.nested_literal_old([
            [
                Indent_Blank(),
                Indent_Blank(),
            ],
            $.links.__decide(
                ($) => $,
                () => _p.list.literal([Span_Indent(6)])
            ),
            $.rechts.__decide(
                ($) => $,
                () => _p.list.literal([Span_Indent(6)])
            ),
        ])
    )),
    [
        sh.t.s.row(
            ["totaal"],
            _p.optional.literal.not_set(),
            [
                Indent_Blank(),
                Indent_Blank(),
                Text("totaal"),
                Span_Indent(4),
                Bedrag($.links.totaal, { 'teken omkeren': true }),
                Text("totaal"),
                Span_Indent(4),
                Bedrag($.rechts.totaal, { 'teken omkeren': false }),
            ]
        ),
    ]
])

const Resultaat_Grootboekrekeningen = (
    $: d_in.Resultaat.Grootboek_Rekeningen,
    $p: {
        'label': string
        'teken omkeren': boolean
    }): d_temp_aggratie_2.Domein_Zijde => {
    const p_grootboekrekeningen = $.__d_map(($) => {
        return {
            'hoofdcategorie': $.bron.Stam.Hoofdcategorie['l id'],
            'subcategorie': $.bron.Stam.Subcategorie['l id'],
            'bedrag': $.totaal,
        }
    })


    return {
        'label': $p.label,
        'teken omkeren': $p['teken omkeren'],
        'hoofdcategorieen': _p.dictionary.from.dictionary(p_grootboekrekeningen).group(($) => $.hoofdcategorie).__d_map(($) => {
            const subcategorieen = _p.dictionary.from.dictionary($).group(($) => $.subcategorie).__d_map(($) => ({
                'grootboekrekeningen': $,
                'totaal': integer_from_dictionary(
                    $,
                    ($) => $.bedrag
                )
            }))
            return {
                'subcategorieen': subcategorieen,
                'totaal': integer_from_dictionary(
                    subcategorieen,
                    ($) => $.totaal
                )
            }
        }),
        'totaal': integer_from_dictionary(
            p_grootboekrekeningen,
            ($) => $.bedrag
        ),
    }
}

export const Root: _pi.Transformer<d_in.Root, d_out.Document> = ($) => {
    $.jaren.__d_map(($, jaar) => {
        $.bankrekeningen.__d_map(($, bankrekening) => {
            _p_log_debug_message(`${jaar}:${bankrekening}:${$.bron.Beginsaldo}:${$.mutaties}:${$.eindsaldo}:${$.overgenomen}:${$.openstaand}`, () => { })
        })
    })
    return sh.document(
        css,
        sh.f.div([
            sh.f.table(
                [],
                _p.list.nested_literal_old([
                    [
                        sh.t.header(["title"], [
                            sh.t.s.row(
                                [],
                                _p.optional.literal.not_set(),
                                [
                                    sh.t.s.r.th(
                                        [],
                                        _p.optional.literal.set(14),
                                        [
                                            sh.f.span([sh.p.p("Jaarrekeningen")])
                                        ]
                                    )
                                ]
                            )
                        ]),
                    ],
                    _p.list.from.list(
                        $.jaren.__to_list(($, id) => ({
                            'value': $,
                            'id': id,
                        }))
                    ).map(($) => sh.t.body(
                        ["jaar"],
                        _p.list.nested_literal_old([
                            [
                                sh.t.s.row(["margin"], _p.optional.literal.not_set(), []),
                                sh.t.s.row(
                                    ["jaar"],
                                    _p.optional.literal.not_set(),
                                    [
                                        Span_Text($.id, 14),
                                    ]
                                ),
                            ],
                            Domein(
                                {
                                    'links': Resultaat_Grootboekrekeningen(_p.dictionary.from.dictionary($.value['resultaat rekeningen']).filter(($) => $.bron.Stam.Zijde[0] === 'Kosten'), { 'label': "kosten", 'teken omkeren': true }),
                                    'rechts': Resultaat_Grootboekrekeningen(_p.dictionary.from.dictionary($.value['resultaat rekeningen']).filter(($) => $.bron.Stam.Zijde[0] === 'Opbrengsten'), { 'label': "opbrengsten", 'teken omkeren': false }),
                                },
                                {
                                    'label': "resultaat",
                                }
                            ),
                            [
                                sh.t.s.row(
                                    ["totaal"],
                                    _p.optional.literal.not_set(),
                                    [
                                        Indent_Blank(),
                                        Indent_Blank(),
                                        Span_Text("winst voor belasting", 11),
                                        Bedrag($.value['resultaat'], { 'teken omkeren': false }),
                                    ]
                                ),
                            ],
                            Domein(
                                $.value['balans rekeningen'],
                                {
                                    'label': "balans",
                                }
                            ),
                        ]),
                    )),
                ])
            ),
        ])
    )
}