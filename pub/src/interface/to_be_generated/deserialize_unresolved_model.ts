import * as d_parse_astn_source from "../generated/pareto/core/parse_astn_source"

export type Parameters = d_parse_astn_source.Parameters

export type Error =
    | ['parse error', d_parse_astn_source.Error]
    | ['primitive deserialization', string]
