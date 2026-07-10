import type * as p_di from 'pareto-core/interface/data'

import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-static-html/interface/data/static_html"
import type * as d_in from "../../../interface/data/derived.js"
import type * as d_temp_aggregatie_2 from "../../../interface/data/aggregatie.js"


export type Balans_Grootboekrekeningen = p_.Transformer_With_Parameter<

    d_in.Balans.Grootboek_Rekeningen,
    d_temp_aggregatie_2.Domein_Zijde,
    {
        'type':
        | ['begin', null]
        | ['eind', null]
        'label': string
        'teken omkeren': boolean
    }
>
export type Bedrag = p_.Transformer_With_Parameter<
    number,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L,
    {
        'teken omkeren': boolean
    }
>
export type Colspan_Text = p_.Transformer_With_Parameter<
    string,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L,
    {
        'number of columns': number
    }
>
export type Domein = p_.Transformer_With_Parameter<
    d_temp_aggregatie_2.Domein,
    d_out.Flow_Element.table.sections.L.rows,
    {
        'label': string
    }
>
export type Domein_Zijde = p_.Transformer<

    d_temp_aggregatie_2.Domein_Zijde,
    p_di.List<d_out.Flow_Element.table.sections.L.rows.L.cells>
>
export type Indent = p_.Transformer<
    null,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
>
export type Indent_Blank = p_.Transformer<
    null,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
>
export type Resultaat_Grootboekrekeningen = p_.Transformer_With_Parameter<

    d_in.Resultaat.Grootboek_Rekeningen,
    d_temp_aggregatie_2.Domein_Zijde,
    {
        'label': string
        'teken omkeren': boolean
    }
>
export type Root = p_.Transformer_With_Parameter<

    d_in.Root,
    d_out.Document,
    {
        'css': string
    }
>
export type Span_Indent = p_.Transformer<
    number,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
>
export type Text = p_.Transformer<
    string,
    d_out.Flow_Element.table.sections.L.rows.L.cells.L
>

