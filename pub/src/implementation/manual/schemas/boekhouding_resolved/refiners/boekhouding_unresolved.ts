
import * as d_out from "../../../../../interface/generated/pareto/schemas/boekhouding/data"
import * as d_in from "../../../../../interface/generated/pareto/schemas/boekhouding/data"
import * as d_token from "../../../../../interface/generated/pareto/core/token"

//dependencies
import * as r_boekhouding_resolved_from_boekhouding_unresolved from "./boekhouding_unresolved_patched_generated"

export const Root = <T>($: d_in.Root<d_token._T_Range>, $p: { uri: string }): d_out.Root => {
    return r_boekhouding_resolved_from_boekhouding_unresolved.Root(
        $,
        {
            'location 2 string': ($) => `${$p.uri}:${$.start.relative.line}:${$.start.relative.column}-${$.end.relative.line}:${$.end.relative.column}`,
            'parameters': {
                'lookups': null,
                'values': null,
            }
        }
    )
}