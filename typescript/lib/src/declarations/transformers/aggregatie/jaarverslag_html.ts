import type * as p_di from 'pareto-core/interface/data'

import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_out from "pareto-static-html/interface/data/static_html"
import type * as s_in from "../../../interface/schemas/derived.js"
import type * as s_temp_aggregatie_2 from "../../../interface/schemas/aggregatie.js"


export type Balans_Grootboekrekeningen = p_.Transformer_With_Parameter<

    s_in.Balans.Grootboek_Rekeningen,
    s_temp_aggregatie_2.Domein_Zijde,
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
    s_temp_aggregatie_2.Domein,
    s_out.Flow_Element.table.sections.L.rows,
    {
        'label': string
    }
>
export type Domein_Zijde = p_.Transformer<

    s_temp_aggregatie_2.Domein_Zijde,
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
export type Resultaat_Grootboekrekeningen = p_.Transformer_With_Parameter<

    s_in.Resultaat.Grootboek_Rekeningen,
    s_temp_aggregatie_2.Domein_Zijde,
    {
        'label': string
        'teken omkeren': boolean
    }
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

