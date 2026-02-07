import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'

import * as r_temp_static_html from "./schemas/boekhouding_oude_model"

// import * as s_unmarshall from "astn-sealed/dist/implementation/schemas/deserialize_unresolved_model/serializers"

import * as sh from "pareto-test/dist/temporary_testset_generator/shorthands"

import { $$ as schema_boekhouding_oude_model } from "./schemas/boekhouding_oude_model"
import { $$ as schema_boekhouding_resolved } from "./schemas/boekhouding_resolved"
import { $$ as schema_boekhouding_unresolved } from "./schemas/boekhouding_unresolved"


export const $$ = sh.package_({
    'schemas': {
        "boekhouding_oude_model": schema_boekhouding_oude_model,
        "boekhouding_resolved": schema_boekhouding_resolved,
        "boekhouding_unresolved": schema_boekhouding_unresolved,
        
    }
})
