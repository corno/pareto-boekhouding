import * as _pds from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import * as d_boekhouding_resolved from "../../../../interface/generated/pareto/schemas/boekhouding/data_types/source"
import * as d_pre_resolving from "../boekhouding_unresolved/deserializers"

export type Error =
    | ['resolving', null]
    | ['pre resolving', d_pre_resolving.Error]

export namespace signatures {

    export type Root = _pi.Deserializer_With_Parameters<d_boekhouding_resolved.Root, Error, { 'file': string }>

}

//dependencies
import { $ as ds_unresolved } from "../boekhouding_unresolved/deserializers"
import * as r_resolved_from_unresolved from "./refiners/boekhouding_unresolved"

export const $: signatures.Root = ($, $p, abort) => {
    const x = ds_unresolved(
        $,
        {
            'file': $p.file
        },
        ($) => abort(['pre resolving', $])
    )
    const x2 = r_resolved_from_unresolved.r_Root(
        x,
        {
            'location 2 string': ($) => {
                return `${$p.file}:${$.start.relative.line}:${$.start.relative.column}-${$.end.relative.line}:${$.end.relative.column}`
            },
            'parameters': {
                'lookups': null,
                'values': null,
            }
        }
    )
    return x2
}