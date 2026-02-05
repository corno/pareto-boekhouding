    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Root: t_signatures.Root = ($) => v_serialize.Document(
        v_marshall.Root(
            $,
        ),
    )
    
    export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => v_serialize.Document(
        v_marshall.Bestandsnaam(
            $,
        ),
    )
