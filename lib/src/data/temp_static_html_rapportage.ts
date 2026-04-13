import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as d_static_html from "pareto-static-html/dist/interface/generated/liana/schemas/static-html/data"

import * as sh from "pareto-static-html/dist/shorthands/static_html"


export const rapportage: d_static_html.Document = {
    'css': `
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        
        table {
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
            table-layout: fixed;
            width: 1400px;
        }
        
        thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        thead th {
            padding: 15px 12px;
            text-align: right;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            border-right: 1px solid rgba(255, 255, 255, 0.3);
            white-space: nowrap;
            width: 100px;
        }
        
        thead th:first-child {
            border-top-left-radius: 8px;
            text-align: left;
            width: 300px;
        }
        
        thead th:last-child {
            border-top-right-radius: 8px;
            border-right: none;
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
            padding: 12px;
            border-bottom: 1px solid #dee2e6;
            border-right: 1px solid #dee2e6;
            font-size: 13px;
            white-space: nowrap;
        }
        
        tbody td:first-child {
            font-weight: 600;
            color: #495057;
            background-color: rgba(102, 126, 234, 0.05);
            border-right: 2px solid #e9ecef;
            text-align: left;
            white-space: normal;
            width: 300px;
        }
        
        tbody td:not(:first-child) {
            text-align: right;
            font-family: 'Courier New', monospace;
            width: 100px;
        }
        
        tbody td:last-child {
            border-right: none;
        }
        
        tbody tr:last-child {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            font-weight: 700;
        }
        
        tbody tr:last-child td {
            border-bottom: none;
            padding: 15px 12px;
            border-right: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        tbody tr:last-child td:first-child {
            background-color: transparent;
            border-right: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            text-align: left;
        }
        
        tbody tr:last-child td:last-child {
            border-right: none;
        }
        
        /* Negative values in red */
        td:contains('-') {
            color: #dc3545;
        }
        
        /* Empty cells subtle styling */
        td:empty::after {
            content: '—';
            color: #adb5bd;
            font-style: italic;
        }
        
        /* Responsive design */
        @media (max-width: 1200px) {
            table {
                font-size: 11px;
            }
            
            thead th, tbody td {
                padding: 10px 8px;
            }
            
            tbody td:first-child {
                min-width: 150px;
            }
            
            tbody td:not(:first-child) {
                min-width: 70px;
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
                padding: 8px 6px;
            }
            
            tbody td:first-child {
                min-width: 120px;
            }
            
            tbody td:not(:first-child) {
                min-width: 90px;
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
                width: 100%;
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
                padding: 4px 2px;
                font-size: 6px;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            tbody td {
                padding: 3px 2px;
                font-size: 6px;
                line-height: 1.1;
            }
            
            tbody td:first-child {
                font-size: 6px;
                padding: 3px 2px;
                background-color: rgba(102, 126, 234, 0.05) !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            tbody tr:nth-child(even) {
                background-color: #f8f9fa !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            tbody tr:last-child {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
                color: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
    `,
    'root': sh.f.table(
        [],
        [
            sh.t.header(
                [],
                [
                    sh.t.th([], _p.optional.literal.not_set(), [
                        sh.t.cell([], []),
                        sh.t.cell([], [sh.f.span([sh.p.p("2011")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2012")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2013")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2014")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2015")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2016")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2017")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2018")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2019")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2020")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("2021")])])
                    ])
                ]
            ),
            sh.t.body(
                [],
                [
                    sh.t.td(["basis"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Kosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -79.788,65")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -127,19")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 16.485,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -224,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -10.931,38")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -70,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -46.947,96")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -517,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Overige bedrijfskosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -1.028,65")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -127,19")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 1.047,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -3,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 18,62")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -47.029,96")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -517,00")])])
                    ]),
                    sh.t.td(["subcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Andere kosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -1.028,65")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -127,19")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 1.047,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -3,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("18,62")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -47.029,96")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -517,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Administratie")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -361,25")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Heffingsrente")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -218,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -3,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Telefoon")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("30,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Afrondingsverschillen")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -1,50")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Belastingrente")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 1.108,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -817,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Boetes belastingdienst")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -194,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -61,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -517,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Diversen")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -283,90")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -127,19")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("18,62")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["item"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Niet incasseerbaar")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Dividentuitkering")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -46.212,96")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Personeelskosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -78.760,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Overige personeelskosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -78.760,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Inhuur")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -78.760,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Financiële baten en lasten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Kosten van schulden, rentelasten en soortgelijke kosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Financieringskosten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Vennootschapsbelasting")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("15.438,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -221,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -10.950,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -70,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("82,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Opbrengsten")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 2.481,11")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("55.084,91")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Claim Moxio")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("50.000,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Correctie voorgeschoten kosten M-industries 2010")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 2.481,11")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Ontvangen rente")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 5.084,91")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ 0,00")])])
                    ]),
                    sh.t.td(["hoofdcategorie"], _p.optional.literal.not_set(), [
                        sh.t.cell([], [sh.f.span([sh.p.p("Grand Total")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -77.307,54")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -127,19")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("16.485,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -224,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("44.153,53")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -70,00")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -46.947,96")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("")])]),
                        sh.t.cell([], [sh.f.span([sh.p.p("€ -517,00")])])
                    ])
                ]
            )
        ]
    )
}