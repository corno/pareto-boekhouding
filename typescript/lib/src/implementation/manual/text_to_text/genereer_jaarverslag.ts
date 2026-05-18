import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as cffc from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"

export type Signature = cffc.Deserializer

//data types
import * as d_html from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"


//dependencies
import * as t_boekhouding_resolved_from_loc from "../refiners/boekhouding_resolved/list_of_characters"
import * as t_bh_to_aggregatie from "../transformers/boekhouding_resolved/aggregatie"

import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/fountain_pen"
import * as t_deserialize_resolved_to_location from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as t_html_to_fountain_pen from "pareto-static-html/dist/implementation/manual/transformers/static_html/fountain_pen"

//shorthands
import * as sh_fp from "pareto-fountain-pen/dist/shorthands/prose"
import * as sh from "pareto-static-html/dist/shorthands/static_html"

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
                background-color: transparent;
            }
            
            /* Right-align amount cells */
            td.bedrag {
                text-align: right;
                font-variant-numeric: tabular-nums;
            }
            
            /* Special styling for year rows */
            tr.jaar {
                background-color: #2c3e50 !important;
            }
            
            tr.jaar td {
                font-size: 16px;
                font-weight: 700;
                color: white !important;
                padding: 4px 8px;
                border-bottom: 2px solid #1a252f;
            }
            
            /* Special styling for grootboek_categorie rows */
            tr.grootboek_categorie {
                background-color: transparent;
            }
            
            tr.grootboek_categorie td:not(.indent) {
                font-size: 14px;
                font-weight: 600;
                color: white !important;
                padding: 3px 8px;
                border-bottom: 2px solid #5568d3;
                background-color: #667eea !important;
            }
            
            /* Indent cells in special rows should not have borders */
            tr.jaar td.indent,
            tr.grootboek_categorie td.indent {
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
                    page-break-inside: avoid;
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
                
                tr.jaar {
                    background-color: #2c3e50 !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                
                tr.grootboek_categorie td:not(.indent) {
                    background-color: #667eea !important;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
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
                    [
                        sh.t.body(
                            [],
                            _p.list.from.list(
                                geaggregeerd.jaren.__to_list(($, id) => ({
                                    'value': $,
                                    'id': id,
                                }))
                            ).flatten(($) => _p.list.nested_literal_old([
                                [
                                    sh.t.s.row(["margin"], _p.optional.literal.not_set(), []),
                                    sh.t.s.row(
                                        ["jaar"],
                                        _p.optional.literal.not_set(),
                                        [
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(6),
                                                [
                                                    sh.f.span([sh.p.p($.id)])
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                                [
                                    sh.t.s.row(
                                        ["grootboek_categorie"],
                                        _p.optional.literal.not_set(),
                                        [
                                            sh.t.s.r.td(
                                                ["indent"],
                                                _p.optional.literal.not_set(),
                                                []
                                            ),
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(5),
                                                [
                                                    sh.f.span([sh.p.p("balans")])
                                                ]
                                            ),
                                        ]
                                    ),
                                    sh.t.s.row(
                                        ["zijde"],
                                        _p.optional.literal.not_set(),
                                        [
                                            sh.t.s.r.td(
                                                ["indent"],
                                                _p.optional.literal.set(2),
                                                []
                                            ),
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(2),
                                                [
                                                    sh.f.span([sh.p.p("activa")])
                                                ]
                                            ),
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(2),
                                                [
                                                    sh.f.span([sh.p.p("passiva")])
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                                _p.list.from.list(
                                    $.value.grootboekrekeningen.balans.activa.__to_list(($, id) => ({
                                        'value': $,
                                        'id': id,
                                    }))
                                ).full_join(
                                    $.value.grootboekrekeningen.balans.passiva.__to_list(($, id) => ({
                                        'value': $,
                                        'id': id,
                                    })),
                                    (value, other_value) => ({
                                        'value': value,
                                        'other value': other_value,
                                    })
                                ).__l_map(($) => sh.t.s.row(
                                    ["item"],
                                    _p.optional.literal.not_set(),
                                    [
                                        sh.t.s.r.td(
                                            ["indent"],
                                            _p.optional.literal.set(2),
                                            []
                                        ),
                                        //activa
                                        sh.t.s.r.td(
                                            [],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($.value.__decide(
                                                    ($) => [sh.p.p($.id)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                        sh.t.s.r.td(
                                            ["bedrag"],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($.value.__decide(
                                                    ($) => [sh.p.p("" + $.value.bedrag)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                        //passiva
                                        sh.t.s.r.td(
                                            [],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($['other value'].__decide(
                                                    ($) => [sh.p.p($.id)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                        sh.t.s.r.td(
                                            ["bedrag"],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($['other value'].__decide(
                                                    ($) => [sh.p.p("" + $.value.bedrag)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                    ]
                                )),
                                [
                                    sh.t.s.row(
                                        ["grootboek_categorie"],
                                        _p.optional.literal.not_set(),
                                        [
                                            sh.t.s.r.td(
                                                ["indent"],
                                                _p.optional.literal.not_set(),
                                                []
                                            ),
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(5),
                                                [
                                                    sh.f.span([sh.p.p("resultaat")])
                                                ]
                                            ),
                                        ]
                                    ),
                                    sh.t.s.row(
                                        ["zijde"],
                                        _p.optional.literal.not_set(),
                                        [
                                            sh.t.s.r.td(
                                                ["indent"],
                                                _p.optional.literal.set(2),
                                                []
                                            ),
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(2),
                                                [
                                                    sh.f.span([sh.p.p("kosten")])
                                                ]
                                            ),
                                            sh.t.s.r.td(
                                                [],
                                                _p.optional.literal.set(2),
                                                [
                                                    sh.f.span([sh.p.p("opbrengsten")])
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                                _p.list.from.list(
                                    $.value.grootboekrekeningen.resultaat.kosten.__to_list(($, id) => ({
                                        'value': $,
                                        'id': id,
                                    }))
                                ).full_join(
                                    $.value.grootboekrekeningen.resultaat.opbrengsten.__to_list(($, id) => ({
                                        'value': $,
                                        'id': id,
                                    })),
                                    (value, other_value) => ({
                                        'value': value,
                                        'other value': other_value,
                                    })
                                ).__l_map(($) => sh.t.s.row(
                                    ["item"],
                                    _p.optional.literal.not_set(),
                                    [
                                        sh.t.s.r.td(
                                            ["indent"],
                                            _p.optional.literal.set(2),
                                            []
                                        ),
                                        //activa
                                        sh.t.s.r.td(
                                            [],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($.value.__decide(
                                                    ($) => [sh.p.p($.id)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                        sh.t.s.r.td(
                                            ["bedrag"],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($.value.__decide(
                                                    ($) => [sh.p.p("" + $.value.bedrag)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                        //passiva
                                        sh.t.s.r.td(
                                            [],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($['other value'].__decide(
                                                    ($) => [sh.p.p($.id)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                        sh.t.s.r.td(
                                            ["bedrag"],
                                            _p.optional.literal.not_set(),
                                            [
                                                sh.f.span($['other value'].__decide(
                                                    ($) => [sh.p.p("" + $.value.bedrag)],
                                                    () => []
                                                ))
                                            ]
                                        ),
                                    ]
                                )),
                                [
                                    sh.t.s.row(["margin"], _p.optional.literal.not_set(), []),
                                ]
                            ]))
                        )
                    ]
                ),
            ])
        )
    )
}