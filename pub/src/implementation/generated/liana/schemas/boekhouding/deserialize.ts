
import * as _p from "pareto-core/dist/deserializer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"
export const Fiscaal: t_signatures.Fiscaal = ($,abort,$p) => v_unmarshall.Fiscaal(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($,abort,$p) => v_unmarshall.Grootboek_Categorieen(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Beheer: t_signatures.Beheer = ($,abort,$p) => v_unmarshall.Beheer(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($,abort,$p) => v_unmarshall.Grootboekrekeningen(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Jaarbeheer: t_signatures.Jaarbeheer = ($,abort,$p) => v_unmarshall.Jaarbeheer(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Overige_balans_item: t_signatures.Overige_balans_item = ($,abort,$p) => v_unmarshall.Overige_balans_item(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($,abort,$p) => v_unmarshall.Verwijzing_naar_Informele_rekening(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($,abort,$p) => v_unmarshall.Verwijzing_naar_Bankrekening(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Handelstransacties: t_signatures.Handelstransacties = ($,abort,$p) => v_unmarshall.Handelstransacties(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Mutaties: t_signatures.Mutaties = ($,abort,$p) => v_unmarshall.Mutaties(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Jaren: t_signatures.Jaren = ($,abort,$p) => v_unmarshall.Jaren(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($,abort,$p) => v_unmarshall.Balans_Resultaat_Mutatie(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($,abort,$p) => v_unmarshall.Eerste_boekjaar(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Root: t_signatures.Root = ($,abort,$p) => v_unmarshall.Root(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
