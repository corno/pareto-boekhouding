import type * as p_di from 'pareto-core/interface/data'
import * as p_ from 'pareto-core/implementation/transformer'
import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-static-html/interface/generated/liana/schemas/static-html/data"
import type * as d_in from "../../../../interface/data/derived.js"
import type * as d_temp_aggregatie_2 from "../../../../interface/data/aggregatie.js"

export namespace interface_ {
    export type Balans_Grootboekrekeningen = p_i.Transformer_With_Parameter<

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
    export type Bedrag = p_i.Transformer_With_Parameter<
        number,
        d_out.Flow_Element.table.sections.L.rows.L.cells.L,
        {
            'teken omkeren': boolean
        }
    >
    export type Colspan_Text = p_i.Transformer_With_Parameter<
        string,
        d_out.Flow_Element.table.sections.L.rows.L.cells.L,
        {
            'number of columns': number
        }
    >
    export type Domein = p_i.Transformer_With_Parameter<
        d_temp_aggregatie_2.Domein,
        d_out.Flow_Element.table.sections.L.rows,
        {
            'label': string
        }
    >
    export type Domein_Zijde = p_i.Transformer<

        d_temp_aggregatie_2.Domein_Zijde,
        p_di.List<d_out.Flow_Element.table.sections.L.rows.L.cells>
    >
    export type Indent = p_i.Transformer<
        null,
        d_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
    export type Indent_Blank = p_i.Transformer<
        null,
        d_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
    export type Resultaat_Grootboekrekeningen = p_i.Transformer_With_Parameter<

        d_in.Resultaat.Grootboek_Rekeningen,
        d_temp_aggregatie_2.Domein_Zijde,
        {
            'label': string
            'teken omkeren': boolean
        }
    >
    export type Root = p_i.Transformer<

        d_in.Root,
        d_out.Document
    >
    export type Span_Indent = p_i.Transformer<
        number,
        d_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
    export type Text = p_i.Transformer<
        string,
        d_out.Flow_Element.table.sections.L.rows.L.cells.L
    >
}
