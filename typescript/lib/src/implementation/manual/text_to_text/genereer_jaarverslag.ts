import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//data types
import * as d_html from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"
import * as d_agg from "../../../interface/to_be_generated/aggregatie"


//dependencies
import * as t_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters"
import * as t_bh_to_aggregatie from "../transformers/boekhouding_resolved/aggregatie"

import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/fountain_pen"
import * as t_deserialize_resolved_to_location from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as t_html_to_fountain_pen from "pareto-static-html/dist/implementation/manual/transformers/static_html/fountain_pen"
import * as t_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

//shorthands
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"
import * as sh from "pareto-static-html/dist/shorthands/static_html"


const Bedrag = ($: number): d_html.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["bedrag"],
    _p.optional.literal.not_set(),
    [
        sh.f.span([sh.p.p("€ " + t_primitives_to_text.fractional_decimal($, { 'number of fractional digits': 2 }))])
    ]
)

const Optioneel_Bedrag = ($: _pi.Optional_Value<number>): d_html.Flow_Element.table.sections.L.rows.L.cells.L => $.__decide(
    ($) => Bedrag($),
    () => sh.t.s.r.td(
        ["missend-bedrag"],
        _p.optional.literal.not_set(),
        []
    )
)

const Text = ($: string): d_html.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["text"],
    _p.optional.literal.not_set(),
    [
        sh.f.span([sh.p.p($)])
    ]
)

const Span_Text = (text: string, number_of_cell: number): d_html.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["span-text"],
    _p.optional.literal.set(number_of_cell),
    [
        sh.f.span([sh.p.p(text)])
    ]
)

const Indent = (depth: number): d_html.Flow_Element.table.sections.L.rows.L.cells.L => sh.t.s.r.td(
    ["indent"],
    _p.optional.literal.set(depth),
    []
)




const Domein = (
    $: d_agg.Domein,
    $p: {
        'label': string
    }
): d_html.Flow_Element.table.sections.L.rows => _p.list.nested_literal_old([
    [
        sh.t.s.row(
            ["grootboek_categorie"],
            _p.optional.literal.not_set(),
            [
                Indent(2),
                Span_Text($p.label, 5),
            ]
        ),
        sh.t.s.row(
            ["domein"],
            _p.optional.literal.not_set(),
            [
                Indent(2),
                Span_Text($.links.label, 2),
                Span_Text($.rechts.label, 2),
            ]
        ),
    ],
    _p.list.from.list(
        $.links.grootboekrekeningen.__to_list(($, id) => ({
            'value': $,
            'id': id,
        }))
    ).full_join(
        $.rechts.grootboekrekeningen.__to_list(($, id) => ({
            'value': $,
            'id': id,
        })),
        (value, other_value) => ({
            'links': value,
            'rechts': other_value,
        })
    ).__l_map(($) => sh.t.s.row(
        ["item"],
        _p.optional.literal.not_set(),
        [
            Indent(2),
            //activa
            Text($.links.__decide(
                ($) => $.id,
                () => ""
            )),
            Optioneel_Bedrag(_p.optional.from.optional($.links).map(($) => $.value.bedrag)),
            //passiva
            Text($.rechts.__decide(
                ($) => $.id,
                () => ""
            )),
            Optioneel_Bedrag(_p.optional.from.optional($['rechts']).map(($) => $.value.bedrag)),
        ]
    )),
    [
        sh.t.s.row(
            ["totaal"],
            _p.optional.literal.not_set(),
            [
                Indent(2),
                Text("totaal"),
                Bedrag($.links.totaal),
                Text("totaal"),
                Bedrag($.rechts.totaal),
            ]
        ),
    ]
])

export const $$: Signature = ($, abort, $p) => {
    const geaggregeerd = t_bh_to_aggregatie.Root(
        t_boekhouding_resolved_from_loc.Root(
            $,
            ($) => abort(sh_fp.ph.composed([
                sh_fp.ph.literal($p['document resource identifier']),
                sh_fp.ph.literal(":"),
                t_location_to_fountain_pen.Possible_Range(
                    t_deserialize_resolved_to_location.Error($),
                    {
                        'character location reporting': ['one based', null],
                    }
                ),
                sh_fp.ph.literal(": "),
                t_deserialize_resolved_to_fountain_pen.Error(
                    $,
                )
            ])),
            $p
        )
    )

    //temp
    // x3.jaren.__d_map(($, id) => {
    //     _p_log_debug_message(id, () => { })
    //     _p_log_debug_message("  'balans'", () => { })
    //     $.grootboekrekeningen.balans.__d_map(($, id) => {
    //         _p_log_debug_message("    ${key}", () => { })
    //         _p_log_debug_message("      'inkopen'", () => { })
    //         $['gerelateerde inkopen'].__d_map(($, id) => {
    //             _p_log_debug_message("        ${key}", () => { })
    //         })
    //     })
    //     _p_log_debug_message("  'resultaat'", () => { })
    //     $.grootboekrekeningen.resultaat.__d_map(($, id) => {
    //         _p_log_debug_message("    ${key}", () => { })
    //         _p_log_debug_message("      'inkopen'", () => { })
    //         $['gerelateerde inkopen'].__d_map(($, id) => {
    //             _p_log_debug_message("        ${key}", () => { })
    //         })
    //     })
    // })
    return t_html_to_fountain_pen.Document(
        sh.document(
            `
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 20px;
                background-color: #f8f9fa;
                color: #333;
            }
            
            /* Remove spacing from nested p and div tags */
            p {
                margin: 0;
                padding: 0;
            }
            
            div {
                margin: 0;
                padding: 0;
            }
            
            table {
                border-collapse: collapse;
                background-color: white;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
                margin: 5px 0;
                table-layout: auto;
                width: auto;
            }
            
            thead {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            
            thead th {
                padding: 1px 4px;
                text-align: right;
                font-weight: 600;
                font-size: 14px;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                border-right: 1px solid rgba(255, 255, 255, 0.3);
                white-space: nowrap;
                line-height: 1.1;
            }
            
            /* Title row styling */
            thead.title {
                background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
            }
            
            thead.title th {
                font-size: 18px;
                font-weight: 700;
                text-align: center;
                padding: 8px 12px;
                letter-spacing: 1px;
            }
            
            tbody tr {
                transition: background-color 0.2s ease;
            }
            
            tbody tr:nth-child(even) {
                background-color: #f8f9fa;
            }
            
            tbody tr:hover {
                background-color: #e9ecef;
            }
            
            tbody td {
                padding: 1px 4px;
                border-bottom: 1px solid #dee2e6;
                border-right: 1px solid #dee2e6;
                font-size: 13px;
                white-space: nowrap;
                line-height: 1.2;
            }
            
            /* Indent cells for hierarchical structure */
            td.indent {
                width: 20px;
                min-width: 20px;
                max-width: 20px;
                padding: 0;
                background-color: transparent !important;
                border: none !important;
            }
            
            /* Right-align amount cells */
            td.bedrag {
                text-align: right;
                font-variant-numeric: tabular-nums;
            }
            
            /* Special styling for year rows */
            tbody tr.jaar {
                background-color: #2c3e50 !important;
            }
            
            tbody tr.jaar td {
                font-size: 16px;
                font-weight: 700;
                color: white !important;
                padding: 4px 8px;
                border-bottom: 2px solid #1a252f;
            }
            
            /* Special styling for grootboek_categorie rows */
            tbody tr.grootboek_categorie {
                background-color: transparent;
            }
            
            tbody tr.grootboek_categorie td:not(.indent) {
                font-size: 14px;
                font-weight: 600;
                color: white !important;
                padding: 3px 8px;
                border-bottom: 2px solid #5568d3;
                background-color: #667eea !important;
            }
            
            tbody tr.domein {
                background-color: transparent;
            }
            
            tbody tr.domein td:not(.indent) {
                font-size: 13px;
                font-weight: 500;
                color: #2c3e50 !important;
                padding: 2px 8px;
                border-bottom: 1px solid #b3c2f5;
                background-color: #aab8f0 !important;
            }
            
            /* Special styling for totaal (total) rows */
            tbody tr.totaal td {
                font-weight: 700;
            }
            
            /* Indent cells in special rows should not have borders */
            tbody tr.jaar td.indent,
            tbody tr.grootboek_categorie td.indent,
            tbody tr.domein td.indent {
                border: none;
                background-color: transparent;
            }
            
            /* Margin rows as separators */
            tr.margin {
                height: 20px;
                background-color: transparent;
            }
            
            tr.margin td {
                border: none;
                padding: 0;
            }
            
            div.jaar span {
                font-size: 18px;
                font-weight: 700;
                color: #495057;
            }
            
            div.categorie span {
                font-size: 16px;
                font-weight: 600;
                color: #667eea;
            }
            
            /* Responsive design */
            @media (max-width: 1200px) {
                table {
                    font-size: 11px;
                }
                
                thead th, tbody td {
                    padding: 1px 4px;
                }
                
                td.indent {
                    width: 15px;
                    min-width: 15px;
                    max-width: 15px;
                }
            }
            
            @media (max-width: 768px) {
                body {
                    margin: 10px;
                }
                
                table {
                    font-size: 10px;
                }
                
                thead th, tbody td {
                    padding: 1px 3px;
                }
                
                td.indent {
                    width: 10px;
                    min-width: 10px;
                    max-width: 10px;
                }
            }
            
            /* Print styles */
            @media print {
                @page {
                    size: A4 landscape;
                    margin: 0.5in;
                }
                
                body {
                    background-color: white;
                    margin: 0;
                    font-size: 8px;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                table {
                    box-shadow: none;
                    border: 1px solid #000;
                    width: auto;
                    font-size: 7px;
                    page-break-inside: auto;
                }
                
                /* Keep each year group together on print */
                tbody.jaar {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }
                
                thead {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                    color: white !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                thead th {
                    padding: 1px 2px;
                    font-size: 6px;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                thead.title {
                    background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%) !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                thead.title th {
                    font-size: 10px;
                    padding: 4px 6px;
                }
                
                tbody td {
                    padding: 1px 2px;
                    font-size: 6px;
                    line-height: 1.1;
                }
                
                tbody tr:nth-child(even) {
                    background-color: #f8f9fa !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                tbody tr.jaar {
                    background-color: #2c3e50 !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                tbody tr.jaar td {
                    color: white !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                tbody tr.grootboek_categorie td:not(.indent) {
                    background-color: #667eea !important;
                    color: white !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                tbody tr.domein td:not(.indent) {
                    background-color: #aab8f0 !important;
                    color: #2c3e50 !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                tr.totaal td {
                    font-weight: 700;
                }
                
                td.indent {
                    width: 10px;
                    min-width: 10px;
                    max-width: 10px;
                }
            }
            `,
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
                                            _p.optional.literal.set(6),
                                            [
                                                sh.f.span([sh.p.p("Jaarrekeningen")])
                                            ]
                                        )
                                    ]
                                )
                            ]),
                        ],
                        _p.list.from.list(
                            geaggregeerd.jaren.__to_list(($, id) => ({
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
                                            Span_Text($.id, 6),
                                        ]
                                    ),
                                ],
                                Domein(
                                    $.value.grootboekrekeningen.balans,
                                    {
                                        'label': "balans",
                                    }
                                ),
                                Domein(
                                    $.value.grootboekrekeningen.resultaat,
                                    {
                                        'label': "resultaat",
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