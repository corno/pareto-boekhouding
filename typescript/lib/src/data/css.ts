export const css = `
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
td.indent,
td.span-indent {
    width: 6ch;
    min-width: 6ch;
    max-width: 6ch;
    padding: 0;
}

/* Blank indent cells - fully white, no borders */
td.indent.blank {
    background-color: white !important;
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

/* Special styling for domein rows */
tbody tr.domein {
    background-color: transparent;
}

tbody tr.domein td:not(.indent):not(.span-indent) {
    font-size: 14px;
    font-weight: 600;
    color: white !important;
    padding: 3px 8px;
    border-bottom: 2px solid #5568d3;
    background-color: #667eea !important;
}

tbody tr.domein_zijde {
    background-color: transparent;
}

tbody tr.domein_zijde td:not(.indent):not(.span-indent) {
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
    background-color: #e9ecef !important;
}

/* Margin rows as separators */
tr.margin {
    height: 10px;
    background-color: white;
}

tr.margin td {
    border: none;
    padding: 0;
    background-color: white !important;
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
    
    td.indent,
    td.span-indent {
        width: 4ch;
        min-width: 4ch;
        max-width: 4ch;
    }
    
    td.indent.blank {
        background-color: white !important;
        border: none !important;
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
    
    td.indent,
    td.span-indent {
        width: 3ch;
        min-width: 3ch;
        max-width: 3ch;
    }
    
    td.indent.blank {
        background-color: white !important;
        border: none !important;
    }
}

/* Print styles */
@media print {
    @page {
        size: A4 portrait;
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
    
    /* Prevent all tbody elements from splitting across pages */
    tbody {
        page-break-inside: avoid;
        break-inside: avoid;
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
        padding: 4px 2px;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    
    tbody tr.domein td:not(.indent):not(.span-indent) {
        background-color: #667eea !important;
        color: white !important;
        padding: 3px 2px;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    
    tbody tr.domein_zijde td:not(.indent):not(.span-indent) {
        background-color: #aab8f0 !important;
        color: #2c3e50 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    
    tr.totaal td {
        font-weight: 700;
        background-color: #e9ecef !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    
    tr.margin {
        height: 10px;
        background-color: white;
    }
    
    tr.margin td {
        border: none;
        padding: 0;
        background-color: white !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    
    td.indent,
    td.span-indent {
        width: 3ch;
        min-width: 3ch;
        max-width: 3ch;
    }
    
    td.indent.blank {
        background-color: white !important;
        border: none !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
}
`