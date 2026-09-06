
import * as p_ from 'pareto-core/refiner'


import * as p_i from 'pareto-core/__internal/Abort'
import * as p_di from 'pareto-core/schema'
import * as p_ri from 'pareto-core/refiner'

import * as i_generic from "liana-core/modules/resolved_document_deserialization/schemas/resolving/schema"

import * as i_resolved from "../schema.js"

import * as i_unresolved from "../../unresolved/schema.js"
namespace declarations {
export namespace Fiscaal_ {
    
    export type I = i_unresolved.Fiscaal
    
    export type O = i_resolved.Fiscaal
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Fiscaal_ = (
    context: Fiscaal_.I,
    abort: p_i.Abort<Fiscaal_.E>,
    lookups: symbol,
    parameters: symbol,
) => Fiscaal_.O

export namespace Grootboekrekeningen_ {
    
    export type I = i_unresolved.Grootboekrekeningen
    
    export type O = i_resolved.Grootboekrekeningen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
    }
    
}

export type Grootboekrekeningen_ = (
    context: Grootboekrekeningen_.I,
    abort: p_i.Abort<Grootboekrekeningen_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Beheer': Grootboekrekeningen_.P.Beheer
    },
) => Grootboekrekeningen_.O

export namespace Grootboek_Categorieen_ {
    
    export type I = i_unresolved.Grootboek_Categorieen
    
    export type O = i_resolved.Grootboek_Categorieen
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Fiscaal = i_resolved.Fiscaal_
        
    }
    
}

export type Grootboek_Categorieen_ = (
    context: Grootboek_Categorieen_.I,
    abort: p_i.Abort<Grootboek_Categorieen_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Fiscaal': Grootboek_Categorieen_.P.Fiscaal
    },
) => Grootboek_Categorieen_.O

export namespace Beheer_ {
    
    export type I = i_unresolved.Beheer
    
    export type O = i_resolved.Beheer
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Grootboek_Categorieen = i_resolved.Grootboek_Categorieen_
        
    }
    
}

export type Beheer_ = (
    context: Beheer_.I,
    abort: p_i.Abort<Beheer_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Grootboek Categorieen': Beheer_.P.Grootboek_Categorieen
    },
) => Beheer_.O

export namespace Jaarbeheer_ {
    
    export type I = i_unresolved.Jaarbeheer
    
    export type O = i_resolved.Jaarbeheer
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Eerste_boekjaar = i_resolved.Eerste_boekjaar_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
    }
    
}

export type Jaarbeheer_ = (
    context: Jaarbeheer_.I,
    abort: p_i.Abort<Jaarbeheer_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Jaarbeheer_.L.Jaren>
    },
    parameters: {
        readonly 'Eerste boekjaar': Jaarbeheer_.P.Eerste_boekjaar
        readonly 'Grootboekrekeningen': Jaarbeheer_.P.Grootboekrekeningen
    },
) => Jaarbeheer_.O

export namespace Overige_balans_item_ {
    
    export type I = i_unresolved.Overige_balans_item
    
    export type O = i_resolved.Overige_balans_item
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Eerste_boekjaar = i_resolved.Eerste_boekjaar_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
    }
    
}

export type Overige_balans_item_ = (
    context: Overige_balans_item_.I,
    abort: p_i.Abort<Overige_balans_item_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Overige_balans_item_.L.Jaren>
    },
    parameters: {
        readonly 'Eerste boekjaar': Overige_balans_item_.P.Eerste_boekjaar
        readonly 'Grootboekrekeningen': Overige_balans_item_.P.Grootboekrekeningen
    },
) => Overige_balans_item_.O

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type I = i_unresolved.Verwijzing_naar_Informele_rekening
    
    export type O = i_resolved.Verwijzing_naar_Informele_rekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Verwijzing_naar_Informele_rekening_ = (
    context: Verwijzing_naar_Informele_rekening_.I,
    abort: p_i.Abort<Verwijzing_naar_Informele_rekening_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Jaarbeheer': Verwijzing_naar_Informele_rekening_.P.Jaarbeheer
    },
) => Verwijzing_naar_Informele_rekening_.O

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type I = i_unresolved.Verwijzing_naar_Bankrekening
    
    export type O = i_resolved.Verwijzing_naar_Bankrekening
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Verwijzing_naar_Bankrekening_ = (
    context: Verwijzing_naar_Bankrekening_.I,
    abort: p_i.Abort<Verwijzing_naar_Bankrekening_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Jaarbeheer': Verwijzing_naar_Bankrekening_.P.Jaarbeheer
    },
) => Verwijzing_naar_Bankrekening_.O

export namespace Handelstransacties_ {
    
    export type I = i_unresolved.Handelstransacties
    
    export type O = i_resolved.Handelstransacties
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
    }
    
}

export type Handelstransacties_ = (
    context: Handelstransacties_.I,
    abort: p_i.Abort<Handelstransacties_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Beheer': Handelstransacties_.P.Beheer
        readonly 'Grootboekrekeningen': Handelstransacties_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Handelstransacties_.P.Jaarbeheer
    },
) => Handelstransacties_.O

export namespace Mutaties_ {
    
    export type I = i_unresolved.Mutaties
    
    export type O = i_resolved.Mutaties
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
        export type Handelstransacties = i_resolved.Handelstransacties_
        
    }
    
}

export type Mutaties_ = (
    context: Mutaties_.I,
    abort: p_i.Abort<Mutaties_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Mutaties_.L.Jaren>
    },
    parameters: {
        readonly 'Beheer': Mutaties_.P.Beheer
        readonly 'Grootboekrekeningen': Mutaties_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Mutaties_.P.Jaarbeheer
        readonly 'Handelstransacties': Mutaties_.P.Handelstransacties
    },
) => Mutaties_.O

export namespace Rekening_Mutatie_ {
    
    export type I = i_unresolved.Rekening_Mutatie
    
    export type O = i_resolved.Rekening_Mutatie
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
        export type Grootboekrekeningen = i_resolved.Grootboekrekeningen_
        
        export type Jaarbeheer = i_resolved.Jaarbeheer_
        
        export type Handelstransacties = i_resolved.Handelstransacties_
        
    }
    
}

export type Rekening_Mutatie_ = (
    context: Rekening_Mutatie_.I,
    abort: p_i.Abort<Rekening_Mutatie_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Rekening_Mutatie_.L.Jaren>
    },
    parameters: {
        readonly 'Beheer': Rekening_Mutatie_.P.Beheer
        readonly 'Grootboekrekeningen': Rekening_Mutatie_.P.Grootboekrekeningen
        readonly 'Jaarbeheer': Rekening_Mutatie_.P.Jaarbeheer
        readonly 'Handelstransacties': Rekening_Mutatie_.P.Handelstransacties
    },
) => Rekening_Mutatie_.O

export namespace Jaren_ {
    
    export type I = i_unresolved.Jaren
    
    export type O = i_resolved.Jaren
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type Beheer = i_resolved.Beheer_
        
    }
    
}

export type Jaren_ = (
    context: Jaren_.I,
    abort: p_i.Abort<Jaren_.E>,
    lookups: symbol,
    parameters: {
        readonly 'Beheer': Jaren_.P.Beheer
    },
) => Jaren_.O

export namespace Root_ {
    
    export type I = i_unresolved.Root
    
    export type O = i_resolved.Root
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Root_ = (
    context: Root_.I,
    abort: p_i.Abort<Root_.E>,
    lookups: symbol,
    parameters: symbol,
) => Root_.O

export namespace Eerste_boekjaar_ {
    
    export type I = i_unresolved.Eerste_boekjaar
    
    export type O = i_resolved.Eerste_boekjaar
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type Jaren = i_resolved.Jaren_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Eerste_boekjaar_ = (
    context: Eerste_boekjaar_.I,
    abort: p_i.Abort<Eerste_boekjaar_.E>,
    lookups: {
        readonly 'Jaren': p_ri.lookup.Acyclic<Eerste_boekjaar_.L.Jaren>
    },
    parameters: symbol,
) => Eerste_boekjaar_.O
}



import p_change_context from 'pareto-core/refiner/specials/change_context'

import * as _p_sl from 'pareto-core/refiner/specials/lookup'

import p_variables from 'pareto-core/refiner/specials/variables'

import * as s_out from "../schema.js"

export const Fiscaal: declarations.Fiscaal_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Balans_Hoofdcategorieen = p_change_context(
            $['Balans Hoofdcategorieen'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Fiscaal.Balans_Hoofdcategorieen.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Zijde = p_change_context(
                                $['Zijde'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Activa': return p_.option(
                                                            $,
                                                            ($) => ['Activa', p_.literal.nothing()],
                                                        )
                                                    case 'Passiva': return p_.option(
                                                            $,
                                                            ($) => ['Passiva', p_.literal.nothing()],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = p_change_context(
                                $['Subcategorieen'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.nothing(),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Resultaat_Hoofdcategorieen = p_change_context(
            $['Resultaat Hoofdcategorieen'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Fiscaal.Resultaat_Hoofdcategorieen.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Zijde = p_change_context(
                                $['Zijde'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Kosten': return p_.option(
                                                            $,
                                                            ($) => ['Kosten', p_.literal.nothing()],
                                                        )
                                                    case 'Opbrengsten': return p_.option(
                                                            $,
                                                            ($) => ['Opbrengsten', p_.literal.nothing()],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = p_change_context(
                                $['Subcategorieen'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.nothing(),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Balans Hoofdcategorieen': prop_Balans_Hoofdcategorieen,
            'Resultaat Hoofdcategorieen': prop_Resultaat_Hoofdcategorieen,
        }
    },
)

export const Grootboek_Categorieen: declarations.Grootboek_Categorieen_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Correctietypes_vennootschapsbelasting = p_change_context(
            $['Correctietypes vennootschapsbelasting'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Te_corrigeren_promillage = p_change_context(
                                $['Te corrigeren promillage'],
                                ($) => $,
                            )
                            return {
                                'Te corrigeren promillage': prop_Te_corrigeren_promillage,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Balans = p_change_context(
            $['Balans'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Grootboek_Categorieen.Balans.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Zijde = p_change_context(
                                $['Zijde'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Grootboek_Categorieen.Balans.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Activa': return p_.option(
                                                            $,
                                                            ($) => ['Activa', p_.literal.nothing()],
                                                        )
                                                    case 'Passiva': return p_.option(
                                                            $,
                                                            ($) => ['Passiva', p_.literal.nothing()],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = p_change_context(
                                $['Subcategorieen'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Grootboek_Categorieen.Balans.D.Subcategorieen.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Hoofdcategorie_fiscus = p_change_context(
                                                    $['Hoofdcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            $p['Fiscaal']['Balans Hoofdcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )

                                                const prop_Subcategorie_fiscus = p_change_context(
                                                    $['Subcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            prop_Hoofdcategorie_fiscus['l entry']['Subcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )
                                                return {
                                                    'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Resultaat = p_change_context(
            $['Resultaat'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Grootboek_Categorieen.Resultaat.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Zijde = p_change_context(
                                $['Zijde'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Grootboek_Categorieen.Resultaat.D.Zijde => {
                                                switch ($[0]) {
                                                    case 'Kosten': return p_.option(
                                                            $,
                                                            ($) => ['Kosten', p_.literal.nothing()],
                                                        )
                                                    case 'Opbrengsten': return p_.option(
                                                            $,
                                                            ($) => ['Opbrengsten', p_.literal.nothing()],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Subcategorieen = p_change_context(
                                $['Subcategorieen'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Grootboek_Categorieen.Resultaat.D.Subcategorieen.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Hoofdcategorie_fiscus = p_change_context(
                                                    $['Hoofdcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            $p['Fiscaal']['Resultaat Hoofdcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )

                                                const prop_Subcategorie_fiscus = p_change_context(
                                                    $['Subcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            prop_Hoofdcategorie_fiscus['l entry']['Subcategorieen'],
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )
                                                return {
                                                    'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Zijde': prop_Zijde,
                                'Subcategorieen': prop_Subcategorieen,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Correctietypes vennootschapsbelasting': prop_Correctietypes_vennootschapsbelasting,
            'Balans': prop_Balans,
            'Resultaat': prop_Resultaat,
        }
    },
)

export const Beheer: declarations.Beheer_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_BTW$mi_categorieen = p_change_context(
            $['BTW-categorieen'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Beheer.BTW$mi_categorieen.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_BTW$mi_heffing = p_change_context(
                                $['BTW-heffing'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state(
                                            $['l state']).decide(
                                            ($): s_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                                switch ($[0]) {
                                                    case 'Ja': return p_.option(
                                                            $,
                                                            ($) => ['Ja', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_BTW$mi_promillage = p_change_context(
                                                                        $['BTW-promillage'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'BTW-promillage': prop_BTW$mi_promillage,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Nee': return p_.option(
                                                            $,
                                                            ($) => ['Nee', p_.literal.nothing()],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )
                            return {
                                'BTW-heffing': prop_BTW$mi_heffing,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Grootboekrekeningen = p_change_context(
            $['Grootboekrekeningen'],
            ($) => p_.literal.group_resolve(
                () => {

                    const prop_Balans = p_change_context(
                        $['Balans'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Beheer.Grootboekrekeningen.Balans.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.group_resolve(
                                    () => {

                                        const prop_Hoofdcategorie = p_change_context(
                                            $['Hoofdcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboek Categorieen'].Balans,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Subcategorie = p_change_context(
                                            $['Subcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    prop_Hoofdcategorie['l entry']['Subcategorieen'],
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Zijde = p_change_context(
                                            $['Zijde'],
                                            ($) => p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return p_.from.state($['l state']).decide(
                                                        ($): s_out.Beheer.Grootboekrekeningen.Balans.D.Zijde => {
                                                            switch ($[0]) {
                                                                case 'Activa': return p_.option(
                                                                        $,
                                                                        ($) => ['Activa', p_.literal.nothing()],
                                                                    )
                                                                case 'Passiva': return p_.option(
                                                                        $,
                                                                        ($) => ['Passiva', p_.literal.nothing()],
                                                                    )
                                                                default: return p_.exhaustive(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'Hoofdcategorie': prop_Hoofdcategorie,
                                            'Subcategorie': prop_Subcategorie,
                                            'Zijde': prop_Zijde,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )

                    const prop_Resultaat = p_change_context(
                        $['Resultaat'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Beheer.Grootboekrekeningen.Resultaat.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.group_resolve(
                                    () => {

                                        const prop_Hoofdcategorie = p_change_context(
                                            $['Hoofdcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboek Categorieen'].Resultaat,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Subcategorie = p_change_context(
                                            $['Subcategorie'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    prop_Hoofdcategorie['l entry']['Subcategorieen'],
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Zijde = p_change_context(
                                            $['Zijde'],
                                            ($) => p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return p_.from.state($['l state']).decide(
                                                        ($): s_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde => {
                                                            switch ($[0]) {
                                                                case 'Kosten': return p_.option(
                                                                        $,
                                                                        ($) => ['Kosten', p_.literal.group_resolve(
                                                                            () => {

                                                                                const prop_Correctie_op_vennootschapsbelasting = p_change_context(
                                                                                    $['Correctie op vennootschapsbelasting'],
                                                                                    ($) => p_variables(
                                                                                        () => {

                                                                                            const var_location = $['l location']
                                                                                            return p_.from.state($['l state']).decide(
                                                                                                ($): s_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'Ja': return p_.option(
                                                                                                                $,
                                                                                                                ($) => ['Ja', p_.literal.group_resolve(
                                                                                                                    () => {

                                                                                                                        const prop_Correctietype = p_change_context(
                                                                                                                            $['Correctietype'],
                                                                                                                            ($) => ({
                                                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                                    $p['Grootboek Categorieen']['Correctietypes vennootschapsbelasting'],
                                                                                                                                ).get_entry(
                                                                                                                                    $['l reference'],
                                                                                                                                    {
                                                                                                                                        no_such_entry: () => abort(
                                                                                                                                            {
                                                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                                'location': $['l location'],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        no_context_lookup: () => abort(
                                                                                                                                            {
                                                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                                                'location': $['l location'],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        cycle_detected: () => abort(
                                                                                                                                            {
                                                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                                                'location': $['l location'],
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                'l id': $['l reference'],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'Correctietype': prop_Correctietype,
                                                                                                                        }
                                                                                                                    },
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'Nee': return p_.option(
                                                                                                                $,
                                                                                                                ($) => ['Nee', p_.literal.nothing()],
                                                                                                            )
                                                                                                        default: return p_.exhaustive(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        },
                                                                                    ),
                                                                                )
                                                                                return {
                                                                                    'Correctie op vennootschapsbelasting': prop_Correctie_op_vennootschapsbelasting,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'Opbrengsten': return p_.option(
                                                                        $,
                                                                        ($) => ['Opbrengsten', p_.literal.nothing()],
                                                                    )
                                                                default: return p_.exhaustive(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'Hoofdcategorie': prop_Hoofdcategorie,
                                            'Subcategorie': prop_Subcategorie,
                                            'Zijde': prop_Zijde,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )
                    return {
                        'Balans': prop_Balans,
                        'Resultaat': prop_Resultaat,
                    }
                },
            ),
        )

        const prop_Rekeningen = p_change_context(
            $['Rekeningen'],
            ($) => p_.literal.group_resolve(
                () => {

                    const prop_Bank = p_change_context(
                        $['Bank'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Beheer.Rekeningen.Bank.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.nothing(),
                            ),
                        ),
                    )

                    const prop_Informeel = p_change_context(
                        $['Informeel'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Beheer.Rekeningen.Informeel.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.nothing(),
                            ),
                        ),
                    )
                    return {
                        'Bank': prop_Bank,
                        'Informeel': prop_Informeel,
                    }
                },
            ),
        )

        const prop_Gebruikers = p_change_context(
            $['Gebruikers'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Beheer.Gebruikers.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Volledige_naam = p_change_context(
                                $['Volledige naam'],
                                ($) => $,
                            )

                            const prop_Wachtwoord = p_change_context(
                                $['Wachtwoord'],
                                ($) => $,
                            )
                            return {
                                'Volledige naam': prop_Volledige_naam,
                                'Wachtwoord': prop_Wachtwoord,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Klanten = p_change_context(
            $['Klanten'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Beheer.Klanten.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            const prop_Licentieovereenkomsten = p_change_context(
                                $['Licentieovereenkomsten'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Beheer.Klanten.D.Licentieovereenkomsten.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Periodes = p_change_context(
                                                    $['Periodes'],
                                                    ($) => p_.from.dictionary($['l dictionary'],
                                                    ).resolve(
                                                        ($, id, $a, $c): s_out.Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D => p_change_context(
                                                            $['l entry'],
                                                            ($) => p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Bedrag = p_change_context(
                                                                        $['Bedrag'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Bedrag': prop_Bedrag,
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                )
                                                return {
                                                    'Periodes': prop_Periodes,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )

                            const prop_Projecten = p_change_context(
                                $['Projecten'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Beheer.Klanten.D.Projecten.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Offertes = p_change_context(
                                                    $['Offertes'],
                                                    ($) => p_.from.dictionary($['l dictionary'],
                                                    ).resolve(
                                                        ($, id, $a, $c): s_out.Beheer.Klanten.D.Projecten.D.Offertes.D => p_change_context(
                                                            $['l entry'],
                                                            ($) => p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Opbrengsten = p_change_context(
                                                                        $['Opbrengsten'],
                                                                        ($) => p_.from.dictionary($['l dictionary'],
                                                                        ).resolve(
                                                                            ($, id, $a, $c): s_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D => p_change_context(
                                                                                $['l entry'],
                                                                                ($) => p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Type = p_change_context(
                                                                                            $['Type'],
                                                                                            ($) => p_variables(
                                                                                                () => {

                                                                                                    const var_location = $['l location']
                                                                                                    return p_.from.state($['l state']).decide(
                                                                                                        ($): s_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                                            switch ($[0]) {
                                                                                                                case 'Project': return p_.option(
                                                                                                                        $,
                                                                                                                        ($) => ['Project', p_.literal.group_resolve(
                                                                                                                            () => {

                                                                                                                                const prop_Bedrag = p_change_context(
                                                                                                                                    $['Bedrag'],
                                                                                                                                    ($) => $,
                                                                                                                                )

                                                                                                                                const prop_Betaaldatum = p_change_context(
                                                                                                                                    $['Betaaldatum'],
                                                                                                                                    ($) => $,
                                                                                                                                )
                                                                                                                                return {
                                                                                                                                    'Bedrag': prop_Bedrag,
                                                                                                                                    'Betaaldatum': prop_Betaaldatum,
                                                                                                                                }
                                                                                                                            },
                                                                                                                        )],
                                                                                                                    )
                                                                                                                default: return p_.exhaustive(
                                                                                                                        $[0],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    )
                                                                                                },
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'Type': prop_Type,
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    )
                                                                    return {
                                                                        'Opbrengsten': prop_Opbrengsten,
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                )
                                                return {
                                                    'Offertes': prop_Offertes,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Licentieovereenkomsten': prop_Licentieovereenkomsten,
                                'Projecten': prop_Projecten,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Leveranciers = p_change_context(
            $['Leveranciers'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Beheer.Leveranciers.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.nothing(),
                ),
            ),
        )

        const prop_Medewerkers = p_change_context(
            $['Medewerkers'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Beheer.Medewerkers.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.nothing(),
                ),
            ),
        )
        return {
            'BTW-categorieen': prop_BTW$mi_categorieen,
            'Grootboekrekeningen': prop_Grootboekrekeningen,
            'Rekeningen': prop_Rekeningen,
            'Gebruikers': prop_Gebruikers,
            'Klanten': prop_Klanten,
            'Leveranciers': prop_Leveranciers,
            'Medewerkers': prop_Medewerkers,
        }
    },
)

export const Grootboekrekeningen: declarations.Grootboekrekeningen_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Balans = p_change_context(
            $['Balans'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Grootboekrekeningen.Balans.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {

                            return {
                                'Stam': p_.from.dictionary($p.Beheer.Grootboekrekeningen.Balans).get_entry(
                                    id,
                                    {
                                        no_such_entry: () => abort(
                                            {
                                                'type': ['lookup', ['no such entry', id]],
                                                'location': {
                                                    'start': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    },
                                                    'end': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    }
                                                },
                                            },
                                        )
                                    }
                                ),
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Resultaat = p_change_context(
            $['Resultaat'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Grootboekrekeningen.Resultaat.D => p_change_context(
                    $['l entry'],
                    ($) => ({
                        'Stam': p_.from.dictionary($p.Beheer.Grootboekrekeningen.Resultaat).get_entry(
                            id,
                            {
                                no_such_entry: () => abort(
                                    {
                                        'type': ['lookup', ['no such entry', id]],
                                        'location': {
                                            'start': {
                                                'absolute': 0,
                                                'relative': {
                                                    'line': 0,
                                                    'column': 0
                                                }
                                            },
                                            'end': {
                                                'absolute': 0,
                                                'relative': {
                                                    'line': 0,
                                                    'column': 0
                                                }
                                            }
                                        },
                                    },
                                )
                            }
                        ),
                    }),
                ),
            ),
        )
        return {
            'Balans': prop_Balans,
            'Resultaat': prop_Resultaat,
        }
    },
)

export const Jaarbeheer: declarations.Jaarbeheer_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Resultaat = p_change_context(
            $['Resultaat'],
            ($) => p_.literal.group_resolve(
                () => {

                    const prop_Grootboekrekening_voor_BTW_afrondingen = p_change_context(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Resultaat,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Salarisrondes = p_change_context(
                        $['Salarisrondes'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Jaarbeheer.Resultaat.Salarisrondes.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.nothing(),
                            ),
                        ),
                    )

                    const prop_BTW_periodes = p_change_context(
                        $['BTW periodes'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Jaarbeheer.Resultaat.BTW_periodes.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.group_resolve(
                                    () => {

                                        const prop_1$pe__BTW$mi_categorieen = p_change_context(
                                            $['1. BTW-categorieen'],
                                            ($) => p_.from.dictionary($['l dictionary'],
                                            ).resolve(
                                                ($, id, $a, $c): s_out.Jaarbeheer.Resultaat.BTW_periodes.D._11$pe__BTW$mi_categorieen.D => p_change_context(
                                                    $['l entry'],
                                                    ($) => p_.literal.nothing(),
                                                ),
                                            ),
                                        )

                                        const prop_Documenten = p_change_context(
                                            $['Documenten'],
                                            ($) => p_.from.dictionary($['l dictionary'],
                                            ).resolve(
                                                ($, id, $a, $c): s_out.Jaarbeheer.Resultaat.BTW_periodes.D.Documenten.D => p_change_context(
                                                    $['l entry'],
                                                    ($) => p_.literal.group_resolve(
                                                        () => {

                                                            const prop_Bestand = p_change_context(
                                                                $['Bestand'],
                                                                ($) => $,
                                                            )
                                                            return {
                                                                'Bestand': prop_Bestand,
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        )

                                        const prop_Omschrijving = p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        )

                                        const prop_Status = p_change_context(
                                            $['Status'],
                                            ($) => p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return p_.from.state($['l state']).decide(
                                                        ($): s_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status => {
                                                            switch ($[0]) {
                                                                case 'Aangegeven': return p_.option(
                                                                        $,
                                                                        ($) => ['Aangegeven', p_.literal.group_resolve(
                                                                            () => {

                                                                                const prop_Afronding = p_change_context(
                                                                                    $['Afronding'],
                                                                                    ($) => $,
                                                                                )

                                                                                const prop_Bedrag = p_change_context(
                                                                                    $['Bedrag'],
                                                                                    ($) => $,
                                                                                )

                                                                                const prop_Datum = p_change_context(
                                                                                    $['Datum'],
                                                                                    ($) => $,
                                                                                )
                                                                                return {
                                                                                    'Afronding': prop_Afronding,
                                                                                    'Bedrag': prop_Bedrag,
                                                                                    'Datum': prop_Datum,
                                                                                }
                                                                            },
                                                                        )],
                                                                    )
                                                                case 'Openstaand': return p_.option(
                                                                        $,
                                                                        ($) => ['Openstaand', p_.literal.nothing()],
                                                                    )
                                                                default: return p_.exhaustive(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            '1. BTW-categorieen': prop_1$pe__BTW$mi_categorieen,
                                            'Documenten': prop_Documenten,
                                            'Omschrijving': prop_Omschrijving,
                                            'Status': prop_Status,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )
                    return {
                        'Grootboekrekening voor BTW afrondingen': prop_Grootboekrekening_voor_BTW_afrondingen,
                        'Salarisrondes': prop_Salarisrondes,
                        'BTW periodes': prop_BTW_periodes,
                    }
                },
            ),
        )

        const prop_Balans = p_change_context(
            $['Balans'],
            ($) => p_.literal.group_resolve(
                () => {

                    const prop_Beginsaldo_nog_aan_te_geven_BTW = p_change_context(
                        $['Beginsaldo nog aan te geven BTW'],
                        ($) => $,
                    )

                    const prop_Beginsaldo_winstreserve = p_change_context(
                        $['Beginsaldo winstreserve'],
                        ($) => $,
                    )

                    const prop_Grootboekrekening_voor_nog_aan_te_geven_BTW = p_change_context(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_resultaat_dit_jaar = p_change_context(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_winstreserve = p_change_context(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_Inkoop_saldo = p_change_context(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Grootboekrekening_voor_Verkoop_saldo = p_change_context(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => ({
                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                $p['Grootboekrekeningen'].Balans,
                            ).get_entry(
                                $['l reference'],
                                {
                                    no_such_entry: () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    no_context_lookup: () => abort(
                                        {
                                            'type': ['lookup', ['no context lookup', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                    cycle_detected: () => abort(
                                        {
                                            'type': ['lookup', ['cycle detected', null]],
                                            'location': $['l location'],
                                        },
                                    ),
                                },
                            ),
                            'l id': $['l reference'],
                        }),
                    )

                    const prop_Informele_rekeningen = p_change_context(
                        $['Informele rekeningen'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Jaarbeheer.Balans.Informele_rekeningen.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.group_resolve(
                                    () => {

                                        const prop_Beginsaldo = p_change_context(
                                            $['Beginsaldo'],
                                            ($) => $,
                                        )

                                        const prop_Grootboekrekening = p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboekrekeningen'].Balans,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Nieuw = p_change_context(
                                            $['Nieuw'],
                                            ($) => p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return p_.from.state($['l state']).decide(
                                                        ($): s_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw => {
                                                            switch ($[0]) {
                                                                case 'Ja': return p_.option(
                                                                        $,
                                                                        ($) => ['Ja', p_.literal.nothing()],
                                                                    )
                                                                case 'Nee': return p_.option(
                                                                        $,
                                                                        ($) => ['Nee', p_variables(
                                                                            () => {

                                                                                const var_constraint_Niet_Nieuw = p_.from.state($p['Eerste boekjaar']).decide(
                                                                                    ($) => {
                                                                                        switch ($[0]) {
                                                                                            case 'Nee': return p_.option(
                                                                                                    $,
                                                                                                    ($) => $,
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    {
                                                                                                        'type': ['constraint', ['state', {
                                                                                                            'expected': "Nee",
                                                                                                            'found': $[0],
                                                                                                        }]],
                                                                                                        'location': var_location,
                                                                                                    },
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                                return p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Rekening = p_change_context(
                                                                                            $['Rekening'],
                                                                                            ($) => Verwijzing_naar_Informele_rekening(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                {
                                                                                                    'Jaarbeheer': var_constraint_Niet_Nieuw['Vorig boekjaar']['l entry']['Jaarbeheer'],
                                                                                                },
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'Rekening': prop_Rekening,
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                default: return p_.exhaustive(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )
                                        return {
                                            'Beginsaldo': prop_Beginsaldo,
                                            'Grootboekrekening': prop_Grootboekrekening,
                                            'Nieuw': prop_Nieuw,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )

                    const prop_Bankrekeningen = p_change_context(
                        $['Bankrekeningen'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Jaarbeheer.Balans.Bankrekeningen.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.group_resolve(
                                    () => {

                                        const prop_Beginsaldo = p_change_context(
                                            $['Beginsaldo'],
                                            ($) => $,
                                        )

                                        const prop_Grootboekrekening = p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => ({
                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                    $p['Grootboekrekeningen'].Balans,
                                                ).get_entry(
                                                    $['l reference'],
                                                    {
                                                        no_such_entry: () => abort(
                                                            {
                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        no_context_lookup: () => abort(
                                                            {
                                                                'type': ['lookup', ['no context lookup', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                        cycle_detected: () => abort(
                                                            {
                                                                'type': ['lookup', ['cycle detected', null]],
                                                                'location': $['l location'],
                                                            },
                                                        ),
                                                    },
                                                ),
                                                'l id': $['l reference'],
                                            }),
                                        )

                                        const prop_Nieuw = p_change_context(
                                            $['Nieuw'],
                                            ($) => p_variables(
                                                () => {

                                                    const var_location = $['l location']
                                                    return p_.from.state($['l state']).decide(
                                                        ($): s_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw => {
                                                            switch ($[0]) {
                                                                case 'Ja': return p_.option(
                                                                        $,
                                                                        ($) => ['Ja', p_.literal.nothing()],
                                                                    )
                                                                case 'Nee': return p_.option(
                                                                        $,
                                                                        ($) => ['Nee', p_variables(
                                                                            () => {

                                                                                const var_constraint_Niet_Nieuw = p_.from.state($p['Eerste boekjaar']).decide(
                                                                                    ($) => {
                                                                                        switch ($[0]) {
                                                                                            case 'Nee': return p_.option(
                                                                                                    $,
                                                                                                    ($) => $,
                                                                                                )
                                                                                            default:
                                                                                                return abort(
                                                                                                    {
                                                                                                        'type': ['constraint', ['state', {
                                                                                                            'expected': "Nee",
                                                                                                            'found': $[0],
                                                                                                        }]],
                                                                                                        'location': var_location,
                                                                                                    },
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                                return p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Rekening = p_change_context(
                                                                                            $['Rekening'],
                                                                                            ($) => Verwijzing_naar_Bankrekening(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                p_.literal.nothing(),
                                                                                                {
                                                                                                    'Jaarbeheer': var_constraint_Niet_Nieuw['Vorig boekjaar']['l entry']['Jaarbeheer'],
                                                                                                },
                                                                                            ),
                                                                                        )
                                                                                        return {
                                                                                            'Rekening': prop_Rekening,
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                default: return p_.exhaustive(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                },
                                            ),
                                        )

                                        const prop_Mutaties = p_change_context(
                                            $['Mutaties'],
                                            ($) => p_.from.dictionary($['l dictionary'],
                                            ).resolve(
                                                ($, id, $a, $c): s_out.Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D => p_change_context(
                                                    $['l entry'],
                                                    ($) => p_.literal.group_resolve(
                                                        () => {

                                                            const prop_Bedrag = p_change_context(
                                                                $['Bedrag'],
                                                                ($) => $,
                                                            )

                                                            const prop_Datum = p_change_context(
                                                                $['Datum'],
                                                                ($) => $,
                                                            )

                                                            const prop_Omschrijving = p_change_context(
                                                                $['Omschrijving'],
                                                                ($) => $,
                                                            )
                                                            return {
                                                                'Bedrag': prop_Bedrag,
                                                                'Datum': prop_Datum,
                                                                'Omschrijving': prop_Omschrijving,
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        )
                                        return {
                                            'Beginsaldo': prop_Beginsaldo,
                                            'Grootboekrekening': prop_Grootboekrekening,
                                            'Nieuw': prop_Nieuw,
                                            'Mutaties': prop_Mutaties,
                                        }
                                    },
                                ),
                            ),
                        ),
                    )

                    const prop_Overige_balans_items = p_change_context(
                        $['Overige balans items'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Jaarbeheer.Balans.Overige_balans_items.D => p_change_context(
                                $['l entry'],
                                ($) => Overige_balans_item(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    $l,
                                    $p,
                                ),
                            ),
                        ),
                    )

                    const prop_Verrekenposten = p_change_context(
                        $['Verrekenposten'],
                        ($) => p_.from.dictionary($['l dictionary'],
                        ).resolve(
                            ($, id, $a, $c): s_out.Jaarbeheer.Balans.Verrekenposten.D => p_change_context(
                                $['l entry'],
                                ($) => p_.literal.nothing(),
                            ),
                        ),
                    )
                    return {
                        'Beginsaldo nog aan te geven BTW': prop_Beginsaldo_nog_aan_te_geven_BTW,
                        'Beginsaldo winstreserve': prop_Beginsaldo_winstreserve,
                        'Grootboekrekening voor nog aan te geven BTW': prop_Grootboekrekening_voor_nog_aan_te_geven_BTW,
                        'Grootboekrekening voor resultaat dit jaar': prop_Grootboekrekening_voor_resultaat_dit_jaar,
                        'Grootboekrekening voor winstreserve': prop_Grootboekrekening_voor_winstreserve,
                        'Grootboekrekening voor Inkoop saldo': prop_Grootboekrekening_voor_Inkoop_saldo,
                        'Grootboekrekening voor Verkoop saldo': prop_Grootboekrekening_voor_Verkoop_saldo,
                        'Informele rekeningen': prop_Informele_rekeningen,
                        'Bankrekeningen': prop_Bankrekeningen,
                        'Overige balans items': prop_Overige_balans_items,
                        'Verrekenposten': prop_Verrekenposten,
                    }
                },
            ),
        )
        return {
            'Resultaat': prop_Resultaat,
            'Balans': prop_Balans,
        }
    },
)

export const Overige_balans_item: declarations.Overige_balans_item_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Beginsaldo = p_change_context(
            $['Beginsaldo'],
            ($) => $,
        )

        const prop_Grootboekrekening = p_change_context(
            $['Grootboekrekening'],
            ($) => ({
                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                    $p['Grootboekrekeningen'].Balans,
                ).get_entry(
                    $['l reference'],
                    {
                        no_such_entry: () => abort(
                            {
                                'type': ['lookup', ['no such entry', $['l reference']]],
                                'location': $['l location'],
                            },
                        ),
                        no_context_lookup: () => abort(
                            {
                                'type': ['lookup', ['no context lookup', null]],
                                'location': $['l location'],
                            },
                        ),
                        cycle_detected: () => abort(
                            {
                                'type': ['lookup', ['cycle detected', null]],
                                'location': $['l location'],
                            },
                        ),
                    },
                ),
                'l id': $['l reference'],
            }),
        )

        const prop_Nieuw = p_change_context(
            $['Nieuw'],
            ($) => p_variables(
                () => {

                    const var_location = $['l location']
                    return p_.from.state($['l state']).decide(
                        ($): s_out.Overige_balans_item.Nieuw => {
                            switch ($[0]) {
                                case 'Ja': return p_.option(
                                        $,
                                        ($) => ['Ja', p_.literal.nothing()],
                                    )
                                case 'Nee': return p_.option(
                                        $,
                                        ($) => ['Nee', p_variables(
                                            () => {

                                                const var_constraint_Volgend_boekjaar = p_.from.state($p['Eerste boekjaar']).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'Nee': return p_.option(
                                                                    $,
                                                                    ($) => $,
                                                                )
                                                            default:
                                                                return abort(
                                                                    {
                                                                        'type': ['constraint', ['state', {
                                                                            'expected': "Nee",
                                                                            'found': $[0],
                                                                        }]],
                                                                        'location': var_location,
                                                                    },
                                                                )
                                                        }
                                                    },
                                                )
                                                return p_.literal.group_resolve(
                                                    () => {

                                                        const prop_Balans_item = p_change_context(
                                                            $['Balans item'],
                                                            ($) => ({
                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                    var_constraint_Volgend_boekjaar['Vorig boekjaar']['l entry']['Jaarbeheer']['Balans']['Overige balans items'],
                                                                ).get_entry(
                                                                    $['l reference'],
                                                                    {
                                                                        no_such_entry: () => abort(
                                                                            {
                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                'location': $['l location'],
                                                                            },
                                                                        ),
                                                                        no_context_lookup: () => abort(
                                                                            {
                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                'location': $['l location'],
                                                                            },
                                                                        ),
                                                                        cycle_detected: () => abort(
                                                                            {
                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                'location': $['l location'],
                                                                            },
                                                                        ),
                                                                    },
                                                                ),
                                                                'l id': $['l reference'],
                                                            }),
                                                        )
                                                        return {
                                                            'Balans item': prop_Balans_item,
                                                        }
                                                    },
                                                )
                                            },
                                        )],
                                    )
                                default: return p_.exhaustive(
                                        $[0],
                                    )
                            }
                        },
                    )
                },
            ),
        )
        return {
            'Beginsaldo': prop_Beginsaldo,
            'Grootboekrekening': prop_Grootboekrekening,
            'Nieuw': prop_Nieuw,
        }
    },
)

export const Verwijzing_naar_Informele_rekening: declarations.Verwijzing_naar_Informele_rekening_ = ($, abort, $l, $p) => ({
    'l entry': _p_sl.acyclic.from_resolved_dictionary(
        $p['Jaarbeheer'].Balans['Informele rekeningen'],
    ).get_entry(
        $['l reference'],
        {
            no_such_entry: () => abort(
                {
                    'type': ['lookup', ['no such entry', $['l reference']]],
                    'location': $['l location'],
                },
            ),
            no_context_lookup: () => abort(
                {
                    'type': ['lookup', ['no context lookup', null]],
                    'location': $['l location'],
                },
            ),
            cycle_detected: () => abort(
                {
                    'type': ['lookup', ['cycle detected', null]],
                    'location': $['l location'],
                },
            ),
        },
    ),
    'l id': $['l reference'],
})

export const Verwijzing_naar_Bankrekening: declarations.Verwijzing_naar_Bankrekening_ = ($, abort, $l, $p) => ({
    'l entry': _p_sl.acyclic.from_resolved_dictionary(
        $p['Jaarbeheer'].Balans['Bankrekeningen'],
    ).get_entry(
        $['l reference'],
        {
            no_such_entry: () => abort(
                {
                    'type': ['lookup', ['no such entry', $['l reference']]],
                    'location': $['l location'],
                },
            ),
            no_context_lookup: () => abort(
                {
                    'type': ['lookup', ['no context lookup', null]],
                    'location': $['l location'],
                },
            ),
            cycle_detected: () => abort(
                {
                    'type': ['lookup', ['cycle detected', null]],
                    'location': $['l location'],
                },
            ),
        },
    ),
    'l id': $['l reference'],
})

export const Handelstransacties: declarations.Handelstransacties_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Inkopen = p_change_context(
            $['Inkopen'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Handelstransacties.Inkopen.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        (): s_out.Handelstransacties.Inkopen.D => {

                            const prop_Afhandeling = p_change_context(
                                $['Afhandeling'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Handelstransacties.Inkopen.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Mutaties': return p_.option(
                                                            $,
                                                            ($) => ['Mutaties', p_.literal.nothing()],
                                                        )
                                                    case 'Nog te betalen': return p_.option(
                                                            $,
                                                            ($) => ['Nog te betalen', {
                                                                'Betalingstermijn': $.Betalingstermijn
                                                            }],
                                                        )
                                                    case 'Rekening courant': return p_.option(
                                                            $,
                                                            ($) => ['Rekening courant', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Rekening_courant = p_change_context(
                                                                        $['Rekening courant'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Rekening courant': prop_Rekening_courant,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )


                            const prop_BTW$mi_periode = p_change_context(
                                $['BTW-periode'],
                                ($) => ({
                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                        $p['Jaarbeheer'].Resultaat['BTW periodes'],
                                    ).get_entry(
                                        $['l reference'],
                                        {
                                            no_such_entry: () => abort(
                                                {
                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            no_context_lookup: () => abort(
                                                {
                                                    'type': ['lookup', ['no context lookup', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            cycle_detected: () => abort(
                                                {
                                                    'type': ['lookup', ['cycle detected', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                        },
                                    ),
                                    'l id': $['l reference'],
                                }),
                            )

                            // const prop_BTW$mi_regime = p_change_context(
                            //     $['BTW-regime'],
                            //     ($) => p_variables(
                            //         () => {

                            //             const var_location = $['l location']
                            //             return p_.from.state(//                 $['l state']).decide(
                            //                 ($): s_out.Handelstransacties.Inkopen.D.BTW$mi_regime => {
                            //                     switch ($[0]) {
                            //                         case 'Binnenland: heffing verlegd':
                            //                             return p_.option(
                            //                                 $,
                            //                                 ($) => ['Binnenland: heffing verlegd', p_.literal.nothing()],
                            //                             )
                            //                         case 'Geen BTW van toepassing':
                            //                             return p_.option(
                            //                                 $,
                            //                                 ($) => ['Geen BTW van toepassing', p_.literal.nothing()],
                            //                             )
                            //                         case 'Import van buiten de EU':
                            //                             return p_.option(
                            //                                 $,
                            //                                 ($) => ['Import van buiten de EU', p_.literal.nothing()],
                            //                             )
                            //                         case 'Intracommunautair':
                            //                             return p_.option(
                            //                                 $,
                            //                                 ($) => ['Intracommunautair', p_.literal.nothing()],
                            //                             )
                            //                         case 'Standaard':
                            //                             return p_.option(
                            //                                 $,
                            //                                 ($) => ['Standaard', p_.literal.group_resolve(
                            //                                     () => {

                            //                                         return {
                            //                                             'BTW-periode': prop_BTW$mi_periode,
                            //                                         }
                            //                                     },
                            //                                 )],
                            //                             )
                            //                         default:
                            //                             return p_.exhaustive(
                            //                                 $[0],
                            //                             )
                            //                     }
                            //                 },
                            //             )
                            //         },
                            //     ),
                            // )

                            const prop_Brondocument = p_change_context(
                                $['Brondocument'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Handelstransacties.Inkopen.D.Brondocument => {
                                                switch ($[0]) {
                                                    case 'Toegevoegd': return p_.option(
                                                            $,
                                                            ($) => ['Toegevoegd', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Document = p_change_context(
                                                                        $['Document'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Document': prop_Document,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Niet van toepassing': return p_.option(
                                                            $,
                                                            ($) => ['Niet van toepassing', p_.literal.nothing()],
                                                        )
                                                    case 'Ontbreekt': return p_.option(
                                                            $,
                                                            ($) => ['Ontbreekt', p_.literal.nothing()],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Datum = p_change_context(
                                $['Datum'],
                                ($) => $,
                            )

                            const prop_Regels = p_change_context(
                                $['Regels'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Handelstransacties.Inkopen.D.Regels.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Bedrag = p_change_context(
                                                    $['Bedrag'],
                                                    ($) => p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return p_.from.state($['l state']).decide(
                                                                ($): s_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag => {
                                                                    switch ($[0]) {
                                                                        case 'Bekend': return p_.option(
                                                                                $,
                                                                                ($) => ['Bekend', p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_BTW$mi_bedrag = p_change_context(
                                                                                            $['BTW-bedrag'],
                                                                                            ($) => $,
                                                                                        )

                                                                                        const prop_Bedrag_inclusief_geheven_BTW = p_change_context(
                                                                                            $['Bedrag inclusief geheven BTW'],
                                                                                            ($) => $,
                                                                                        )
                                                                                        return {
                                                                                            'BTW-bedrag': prop_BTW$mi_bedrag,
                                                                                            'Bedrag inclusief geheven BTW': prop_Bedrag_inclusief_geheven_BTW,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default: return p_.exhaustive(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )

                                                const prop_Omschrijving = p_change_context(
                                                    $['Omschrijving'],
                                                    ($) => $,
                                                )

                                                const prop_Type = p_change_context(
                                                    $['Type'],
                                                    ($) => p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return p_.from.state($['l state']).decide(
                                                                ($): s_out.Handelstransacties.Inkopen.D.Regels.D.Type => {
                                                                    switch ($[0]) {
                                                                        case 'Balans': return p_.option(
                                                                                $,
                                                                                ($) => ['Balans', p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Balans_item = p_change_context(
                                                                                            $['Balans item'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Jaarbeheer'].Balans['Overige balans items'],
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Balans item': prop_Balans_item,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Kosten': return p_.option(
                                                                                $,
                                                                                ($) => ['Kosten', p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Grootboekrekening = p_change_context(
                                                                                            $['Grootboekrekening'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Grootboekrekeningen'].Resultaat,
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Grootboekrekening': prop_Grootboekrekening,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default: return p_.exhaustive(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )
                                                return {
                                                    'Bedrag': prop_Bedrag,
                                                    'Omschrijving': prop_Omschrijving,
                                                    'Type': prop_Type,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )

                            const prop_Type = p_change_context(
                                $['Type'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Handelstransacties.Inkopen.D.Type => {
                                                switch ($[0]) {
                                                    case 'Bonnetje': return p_.option(
                                                            $,
                                                            ($) => ['Bonnetje', p_.literal.nothing()],
                                                        )
                                                    case 'Inkoop (met crediteur)': return p_.option(
                                                            $,
                                                            ($) => ['Inkoop (met crediteur)', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Crediteur = p_change_context(
                                                                        $['Crediteur'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Beheer'].Leveranciers,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )

                                                                    const prop_Factuurnummer = p_change_context(
                                                                        $['Factuurnummer'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Crediteur': prop_Crediteur,
                                                                        'Factuurnummer': prop_Factuurnummer,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Loonheffing': return p_.option(
                                                            $,
                                                            ($) => ['Loonheffing', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Ronde = p_change_context(
                                                                        $['Ronde'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Resultaat.Salarisrondes,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Ronde': prop_Ronde,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Salaris': return p_.option(
                                                            $,
                                                            ($) => ['Salaris', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Ronde = p_change_context(
                                                                        $['Ronde'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Resultaat.Salarisrondes,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )

                                                                    const prop_Medewerker = p_change_context(
                                                                        $['Medewerker'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Beheer'].Medewerkers,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Ronde': prop_Ronde,
                                                                        'Medewerker': prop_Medewerker,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )
                            return {
                                'Afhandeling': prop_Afhandeling,
                                'BTW-periode': prop_BTW$mi_periode,
                                // 'BTW-regime': prop_BTW$mi_regime,
                                'Brondocument': prop_Brondocument,
                                'Datum': prop_Datum,
                                'Regels': prop_Regels,
                                'Type': prop_Type,
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Verkopen = p_change_context(
            $['Verkopen'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Handelstransacties.Verkopen.D => p_change_context(
                    $['l entry'],
                    ($) => p_.literal.group_resolve(
                        () => {
                            const prop_Datum = p_change_context(
                                $['Datum'],
                                ($) => $,
                            )

                            const prop_Betalingstermijn = p_change_context(
                                $['Betalingstermijn'],
                                ($) => $,
                            )

                            const prop_BTW$mi_periode = p_change_context(
                                $['BTW-periode'],
                                ($) => ({
                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                        $p['Jaarbeheer'].Resultaat['BTW periodes'],
                                    ).get_entry(
                                        $['l reference'],
                                        {
                                            no_such_entry: () => abort(
                                                {
                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            no_context_lookup: () => abort(
                                                {
                                                    'type': ['lookup', ['no context lookup', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            cycle_detected: () => abort(
                                                {
                                                    'type': ['lookup', ['cycle detected', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                        },
                                    ),
                                    'l id': $['l reference'],
                                }),
                            )

                            const prop_Brondocument = p_change_context(
                                $['Brondocument'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Handelstransacties.Verkopen.D.Brondocument => {
                                                switch ($[0]) {
                                                    case 'Toegevoegd': return p_.option(
                                                            $,
                                                            ($) => ['Toegevoegd', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Document = p_change_context(
                                                                        $['Document'],
                                                                        ($) => $,
                                                                    )
                                                                    return {
                                                                        'Document': prop_Document,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Debiteur = p_change_context(
                                $['Debiteur'],
                                ($) => ({
                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                        $p['Beheer'].Klanten,
                                    ).get_entry(
                                        $['l reference'],
                                        {
                                            no_such_entry: () => abort(
                                                {
                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            no_context_lookup: () => abort(
                                                {
                                                    'type': ['lookup', ['no context lookup', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                            cycle_detected: () => abort(
                                                {
                                                    'type': ['lookup', ['cycle detected', null]],
                                                    'location': $['l location'],
                                                },
                                            ),
                                        },
                                    ),
                                    'l id': $['l reference'],
                                }),
                            )

                            const prop_Contracttype = p_change_context(
                                $['Contracttype'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Handelstransacties.Verkopen.D.Contracttype => {
                                                switch ($[0]) {
                                                    case 'Project': return p_.option(
                                                            $,
                                                            ($) => ['Project', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Project = p_change_context(
                                                                        $['Project'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                prop_Debiteur['l entry'].Projecten,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )

                                                                    const prop_Offerte = p_change_context(
                                                                        $['Offerte'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                prop_Project['l entry']['Offertes'],
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Project': prop_Project,
                                                                        'Offerte': prop_Offerte,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    case 'Licentieovereenkomst': return p_.option(
                                                            $,
                                                            ($) => ['Licentieovereenkomst', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Overeenkomst = p_change_context(
                                                                        $['Overeenkomst'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                prop_Debiteur['l entry'].Licentieovereenkomsten,
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Overeenkomst': prop_Overeenkomst,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const parent_Contracttype = prop_Contracttype

                            const prop_Afhandeling = p_change_context(
                                $['Afhandeling'],
                                ($) => p_variables(
                                    () => {

                                        const var_location = $['l location']
                                        return p_.from.state($['l state']).decide(
                                            ($): s_out.Handelstransacties.Verkopen.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Mutaties': return p_.option(
                                                            $,
                                                            ($) => ['Mutaties', p_.literal.nothing()],
                                                        )
                                                    case 'Rekening courant': return p_.option(
                                                            $,
                                                            ($) => ['Rekening courant', p_.literal.group_resolve(
                                                                () => {

                                                                    const prop_Rekening_courant = p_change_context(
                                                                        $['Rekening courant'],
                                                                        ($) => ({
                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                            ).get_entry(
                                                                                $['l reference'],
                                                                                {
                                                                                    no_such_entry: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    no_context_lookup: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                    cycle_detected: () => abort(
                                                                                        {
                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                            'location': $['l location'],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            'l id': $['l reference'],
                                                                        }),
                                                                    )
                                                                    return {
                                                                        'Rekening courant': prop_Rekening_courant,
                                                                    }
                                                                },
                                                            )],
                                                        )
                                                    default: return p_.exhaustive(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )
                                    },
                                ),
                            )

                            const prop_Regels = p_change_context(
                                $['Regels'],
                                ($) => p_.from.dictionary($['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Handelstransacties.Verkopen.D.Regels.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_BTW$mi_regime = p_change_context(
                                                    $['BTW-regime'],
                                                    ($) => p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return p_.from.state($['l state']).decide(
                                                                ($): s_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                                    switch ($[0]) {
                                                                        case 'Intracommunautair': return p_.option(
                                                                                $,
                                                                                ($) => ['Intracommunautair', p_.literal.nothing()],
                                                                            )
                                                                        case 'Standaard': return p_.option(
                                                                                $,
                                                                                ($) => ['Standaard', p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_BTW$mi_categorie = p_change_context(
                                                                                            $['BTW-categorie'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Beheer']['BTW-categorieen'],
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'BTW-categorie': prop_BTW$mi_categorie,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Binnenland: heffing verlegd': return p_.option(
                                                                                $,
                                                                                ($) => ['Binnenland: heffing verlegd', p_.literal.nothing()],
                                                                            )
                                                                        default: return p_.exhaustive(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )

                                                const prop_Bedrag_exclusief_BTW = p_change_context(
                                                    $['Bedrag exclusief BTW'],
                                                    ($) => $,
                                                )

                                                const prop_Contracttype = p_change_context(
                                                    $['Contracttype'],
                                                    ($) => p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return p_.from.state($['l state']).decide(
                                                                ($): s_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype => {
                                                                    switch ($[0]) {
                                                                        case 'Project': return p_.option(
                                                                                $,
                                                                                ($) => ['Project', p_variables(
                                                                                    () => {

                                                                                        const var_constraint_Definitie = p_.from.state(parent_Contracttype).decide(
                                                                                            ($) => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Project': return p_.option(
                                                                                                            $,
                                                                                                            ($) => $,
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            {
                                                                                                                'type': ['constraint', ['state', {
                                                                                                                    'expected': "Project",
                                                                                                                    'found': $[0],
                                                                                                                }]],
                                                                                                                'location': var_location,
                                                                                                            },
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                        return p_.literal.group_resolve(
                                                                                            () => {

                                                                                                const prop_Opbrengst = p_change_context(
                                                                                                    $['Opbrengst'],
                                                                                                    ($) => ({
                                                                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                            var_constraint_Definitie['Offerte']['l entry']['Opbrengsten'],
                                                                                                        ).get_entry(
                                                                                                            $['l reference'],
                                                                                                            {
                                                                                                                no_such_entry: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                no_context_lookup: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                cycle_detected: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l id': $['l reference'],
                                                                                                    }),
                                                                                                )
                                                                                                return {
                                                                                                    'Opbrengst': prop_Opbrengst,
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Los': return p_.option(
                                                                                $,
                                                                                ($) => ['Los', p_.literal.nothing()],
                                                                            )
                                                                        case 'Licentieovereenkomst': return p_.option(
                                                                                $,
                                                                                ($) => ['Licentieovereenkomst', p_variables(
                                                                                    () => {

                                                                                        const var_constraint_Definitie = p_.from.state(parent_Contracttype).decide(
                                                                                            ($) => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Licentieovereenkomst': return p_.option(
                                                                                                            $,
                                                                                                            ($) => $,
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            {
                                                                                                                'type': ['constraint', ['state', {
                                                                                                                    'expected': "Licentieovereenkomst",
                                                                                                                    'found': $[0],
                                                                                                                }]],
                                                                                                                'location': var_location,
                                                                                                            },
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                        return p_.literal.group_resolve(
                                                                                            () => {

                                                                                                const prop_Periode = p_change_context(
                                                                                                    $['Periode'],
                                                                                                    ($) => ({
                                                                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                            var_constraint_Definitie['Overeenkomst']['l entry']['Periodes'],
                                                                                                        ).get_entry(
                                                                                                            $['l reference'],
                                                                                                            {
                                                                                                                no_such_entry: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                no_context_lookup: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                                cycle_detected: () => abort(
                                                                                                                    {
                                                                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                                                                        'location': $['l location'],
                                                                                                                    },
                                                                                                                ),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l id': $['l reference'],
                                                                                                    }),
                                                                                                )
                                                                                                return {
                                                                                                    'Periode': prop_Periode,
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default: return p_.exhaustive(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )

                                                const prop_Omschrijving = p_change_context(
                                                    $['Omschrijving'],
                                                    ($) => $,
                                                )

                                                const prop_Type = p_change_context(
                                                    $['Type'],
                                                    ($) => p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return p_.from.state($['l state']).decide(
                                                                ($): s_out.Handelstransacties.Verkopen.D.Regels.D.Type => {
                                                                    switch ($[0]) {
                                                                        case 'Opbrengsten': return p_.option(
                                                                                $,
                                                                                ($) => ['Opbrengsten', p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Grootboekrekening = p_change_context(
                                                                                            $['Grootboekrekening'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Grootboekrekeningen'].Resultaat,
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Grootboekrekening': prop_Grootboekrekening,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        case 'Balans': return p_.option(
                                                                                $,
                                                                                ($) => ['Balans', p_.literal.group_resolve(
                                                                                    () => {

                                                                                        const prop_Balans_item = p_change_context(
                                                                                            $['Balans item'],
                                                                                            ($) => ({
                                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                    $p['Jaarbeheer'].Balans['Overige balans items'],
                                                                                                ).get_entry(
                                                                                                    $['l reference'],
                                                                                                    {
                                                                                                        no_such_entry: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        no_context_lookup: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                        cycle_detected: () => abort(
                                                                                                            {
                                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                                'location': $['l location'],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                'l id': $['l reference'],
                                                                                            }),
                                                                                        )
                                                                                        return {
                                                                                            'Balans item': prop_Balans_item,
                                                                                        }
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default: return p_.exhaustive(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )
                                                return {
                                                    'BTW-regime': prop_BTW$mi_regime,
                                                    'Bedrag exclusief BTW': prop_Bedrag_exclusief_BTW,
                                                    'Contracttype': prop_Contracttype,
                                                    'Omschrijving': prop_Omschrijving,
                                                    'Type': prop_Type,
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            )
                            return {
                                'Datum': prop_Datum,
                                'Betalingstermijn': prop_Betalingstermijn,
                                'BTW-periode': prop_BTW$mi_periode,
                                'Brondocument': prop_Brondocument,
                                'Debiteur': prop_Debiteur,
                                'Contracttype': prop_Contracttype,
                                'Afhandeling': prop_Afhandeling,
                                'Regels': prop_Regels,
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Inkopen': prop_Inkopen,
            'Verkopen': prop_Verkopen,
        }
    },
)

export const Rekening_Mutatie: declarations.Rekening_Mutatie_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Jaar = p_change_context(
            $['Jaar'],
            ($) => p_.from.optional($,
            ).map(
                ($) => ({
                    'l entry': $l['Jaren'].get_entry(
                        $['l reference'],
                        {
                            no_such_entry: () => abort(
                                {
                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                    'location': $['l location'],
                                },
                            ),
                            no_context_lookup: () => abort(
                                {
                                    'type': ['lookup', ['no context lookup', null]],
                                    'location': $['l location'],
                                },
                            ),
                            cycle_detected: () => abort(
                                {
                                    'type': ['lookup', ['cycle detected', null]],
                                    'location': $['l location'],
                                },
                            ),
                        },
                    ),
                    'l id': $['l reference'],
                }),
            ),
        )



        const temp_jaar_beheer = p_.from.optional(prop_Jaar).decide(
            ($) => $['l entry'].Jaarbeheer,
            () => $p.Jaarbeheer
        )

        const temp_handelstransacties = p_.from.optional(prop_Jaar).decide(
            ($) => $['l entry'].Handelstransacties,
            () => $p.Handelstransacties
        )

        const prop_type = p_change_context(
            $['type'],
            ($) => p_variables(
                () => {

                    const var_location = $['l location']
                    return p_.from.state($['l state']).decide(
                        ($): s_out.Rekening_Mutatie.type_ => {
                            switch ($[0]) {
                                case 'Inkoop': return p_.option(
                                        $,
                                        ($) => ['Inkoop', {
                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                temp_handelstransacties.Inkopen,
                                            ).get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }],
                                    )
                                case 'Verkoop': return p_.option(
                                        $,
                                        ($) => ['Verkoop', {
                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                temp_handelstransacties.Verkopen,
                                            ).get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }],
                                    )
                                case 'BTW-periode': return p_.option(
                                        $,
                                        ($) => ['BTW-periode', {
                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                temp_jaar_beheer.Resultaat['BTW periodes'],
                                            ).get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }],
                                    )
                                default: return p_.exhaustive(
                                        $[0],
                                    )
                            }
                        },
                    )
                },
            ),
        )
        return {
            'Jaar': prop_Jaar,
            'type': prop_type,
        }
    },
)

export const Mutaties: declarations.Mutaties_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    (): s_out.Mutaties => {

        const prop_Verrekenposten: s_out.Mutaties.Verrekenposten = p_change_context(
            $['Verrekenposten'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Mutaties.Verrekenposten.D => p_change_context(
                    $['l entry'],
                    ($) => p_variables(
                        (): s_out.Mutaties.Verrekenposten.D => {

                            // const var_referenced_entry = _pdev.implement_me(
                            //     "IM: referenced entry",
                            // )
                            return {
                                'Stam': p_.from.dictionary($p.Jaarbeheer.Balans.Verrekenposten).get_entry(
                                    id,
                                    {
                                        no_such_entry: () => abort(
                                            {
                                                'type': ['lookup', ['no such entry', id]],
                                                'location': {
                                                    'start': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    },
                                                    'end': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    }
                                                },
                                            },
                                        )
                                    }
                                ),
                                'Mutaties': p_.from.dictionary($.Mutaties['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Mutaties.Verrekenposten.D.Mutaties.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Bedrag = p_change_context(
                                                    $['Bedrag'],
                                                    ($) => $,
                                                )

                                                const prop_Afhandeling = p_change_context(
                                                    $['Afhandeling'],
                                                    ($) => p_variables(
                                                        () => {

                                                            const var_location = $['l location']
                                                            return p_.from.state($['l state']).decide(
                                                                ($): s_out.Mutaties.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                                    switch ($[0]) {
                                                                        case 'Resultaat': return p_.option(
                                                                                $,
                                                                                ($) => ['Resultaat', Rekening_Mutatie(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    $l,
                                                                                    $p,
                                                                                )],
                                                                            )
                                                                        case 'Balans': return p_.option(
                                                                                $,
                                                                                ($) => ['Balans', p_variables(
                                                                                    () => {

                                                                                        const var_location = $['l location']
                                                                                        return p_.from.state($['l state']).decide(
                                                                                            ($): s_out.Mutaties.Verrekenposten.D.Mutaties.D.Afhandeling.Balans => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Informele rekening': return p_.option(
                                                                                                            $,
                                                                                                            ($) => ['Informele rekening', p_.literal.group_resolve(
                                                                                                                () => {

                                                                                                                    const prop_Informele_rekening = p_change_context(
                                                                                                                        $['Informele rekening'],
                                                                                                                        ($) => ({
                                                                                                                            'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                                $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                                                                            ).get_entry(
                                                                                                                                $['l reference'],
                                                                                                                                {
                                                                                                                                    no_such_entry: () => abort(
                                                                                                                                        {
                                                                                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                            'location': $['l location'],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    no_context_lookup: () => abort(
                                                                                                                                        {
                                                                                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                                                                                            'location': $['l location'],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    cycle_detected: () => abort(
                                                                                                                                        {
                                                                                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                                                                                            'location': $['l location'],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l id': $['l reference'],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                    return {
                                                                                                                        'Informele rekening': prop_Informele_rekening,
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        )
                                                                                                    default: return p_.exhaustive(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                )],
                                                                            )
                                                                        default: return p_.exhaustive(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )
                                                        },
                                                    ),
                                                )
                                                return {
                                                    'Bedrag': prop_Bedrag,
                                                    'Afhandeling': prop_Afhandeling,
                                                }
                                            },
                                        ),
                                    ),
                                )
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Bankrekeningen: s_out.Mutaties.Bankrekeningen = p_change_context(
            $['Bankrekeningen'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Mutaties.Bankrekeningen.D => p_change_context(
                    $['l entry'],
                    ($) => p_variables(
                        (): s_out.Mutaties.Bankrekeningen.D => {
                            const $v_bankrekening = p_.from.dictionary($p.Jaarbeheer.Balans.Bankrekeningen).get_entry(
                                id,
                                {
                                    'no_such_entry': () => abort(
                                        {
                                            'type': ['lookup', ['no such entry', id]],
                                            'location': {
                                                'start': {
                                                    'absolute': 0,
                                                    'relative': {
                                                        'line': 0,
                                                        'column': 0
                                                    }
                                                },
                                                'end': {
                                                    'absolute': 0,
                                                    'relative': {
                                                        'line': 0,
                                                        'column': 0
                                                    }
                                                }
                                            },
                                        },
                                    ),
                                }
                            )
                            // const var_referenced_entry = _pdev.implement_me(
                            //     "IM: referenced entry",
                            // )
                            return {
                                'Stam': $v_bankrekening,
                                'Mutatie Verwerkingen': p_.from.dictionary($['Mutatie Verwerkingen']['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D => p_change_context(
                                        $['l entry'],
                                        ($): s_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D => p_variables(
                                            (): s_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D => {

                                                // const var_location = $['l location']
                                                return {
                                                    'Stam': p_.from.dictionary($v_bankrekening.Mutaties).get_entry(
                                                        id,
                                                        {
                                                            'no_such_entry': () => abort(
                                                                {
                                                                    'type': ['lookup', ['no such entry', id]],
                                                                    'location': {
                                                                        'start': {
                                                                            'absolute': 0,
                                                                            'relative': {
                                                                                'line': 0,
                                                                                'column': 0
                                                                            }
                                                                        },
                                                                        'end': {
                                                                            'absolute': 0,
                                                                            'relative': {
                                                                                'line': 0,
                                                                                'column': 0
                                                                            }
                                                                        }
                                                                    },
                                                                },
                                                            ),
                                                        }
                                                    ),
                                                    'type': p_.from.state($.type['l state']).decide(
                                                        ($): s_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D.type_ => {
                                                            switch ($[0]) {
                                                                case 'Resultaat': return p_.option(
                                                                        $,
                                                                        ($) => ['Resultaat', Rekening_Mutatie(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            $l,
                                                                            $p,
                                                                        )],
                                                                    )
                                                                case 'Balans': return p_.option(
                                                                        $,
                                                                        ($) => ['Balans', p_variables(
                                                                            () => {

                                                                                const var_location = $['l location']
                                                                                return p_.from.state($['l state']).decide(
                                                                                    ($): s_out.Mutaties.Bankrekeningen.D.Mutatie_Verwerkingen.D.type_.Balans => {
                                                                                        switch ($[0]) {
                                                                                            case 'Verrekenpost': return p_.option(
                                                                                                    $,
                                                                                                    ($) => ['Verrekenpost', p_.literal.group_resolve(
                                                                                                        () => {

                                                                                                            const prop_Verrekenpost = p_change_context(
                                                                                                                $['Verrekenpost'],
                                                                                                                ($) => ({
                                                                                                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                        $p['Jaarbeheer'].Balans.Verrekenposten,
                                                                                                                    ).get_entry(
                                                                                                                        $['l reference'],
                                                                                                                        {
                                                                                                                            no_such_entry: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            no_context_lookup: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no context lookup', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            cycle_detected: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['cycle detected', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'l id': $['l reference'],
                                                                                                                }),
                                                                                                            )
                                                                                                            return {
                                                                                                                'Verrekenpost': prop_Verrekenpost,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            case 'Informele rekening': return p_.option(
                                                                                                    $,
                                                                                                    ($) => ['Informele rekening', p_.literal.group_resolve(
                                                                                                        () => {

                                                                                                            const prop_Informele_rekening = p_change_context(
                                                                                                                $['Informele rekening'],
                                                                                                                ($) => ({
                                                                                                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                                                        $p['Jaarbeheer'].Balans['Informele rekeningen'],
                                                                                                                    ).get_entry(
                                                                                                                        $['l reference'],
                                                                                                                        {
                                                                                                                            no_such_entry: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            no_context_lookup: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['no context lookup', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            cycle_detected: () => abort(
                                                                                                                                {
                                                                                                                                    'type': ['lookup', ['cycle detected', null]],
                                                                                                                                    'location': $['l location'],
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    'l id': $['l reference'],
                                                                                                                }),
                                                                                                            )
                                                                                                            return {
                                                                                                                'Informele rekening': prop_Informele_rekening,
                                                                                                            }
                                                                                                        },
                                                                                                    )],
                                                                                                )
                                                                                            default: return p_.exhaustive(
                                                                                                    $[0],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )
                                                                            },
                                                                        )],
                                                                    )
                                                                default: return p_.exhaustive(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )
                                                }
                                            },
                                        ),
                                    ),
                                )
                            }
                        },
                    ),
                ),
            ),
        )

        const prop_Overige_Balans_Items = p_change_context(
            $['Overige Balans Items'],
            ($) => p_.from.dictionary($['l dictionary'],
            ).resolve(
                ($, id, $a, $c): s_out.Mutaties.Overige_Balans_Items.D => p_change_context(
                    $['l entry'],
                    ($): s_out.Mutaties.Overige_Balans_Items.D => p_variables(
                        (): s_out.Mutaties.Overige_Balans_Items.D => {

                            // const var_referenced_entry = _pdev.implement_me(
                            //     "IM: referenced entry",
                            // )
                            return {
                                'Stam': p_.from.dictionary($p.Jaarbeheer.Balans['Overige balans items']).get_entry(
                                    id,
                                    {
                                        'no_such_entry': () => abort(
                                            {
                                                'type': ['lookup', ['no such entry', id]],
                                                'location': {
                                                    'start': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    },
                                                    'end': {
                                                        'absolute': 0,
                                                        'relative': {
                                                            'line': 0,
                                                            'column': 0
                                                        }
                                                    }
                                                },
                                            },
                                        ),
                                    }
                                ),
                                'Memoriaal Boekingen': p_.from.dictionary($['Memoriaal Boekingen']['l dictionary'],
                                ).resolve(
                                    ($, id, $a, $c): s_out.Mutaties.Overige_Balans_Items.D.Memoriaal_Boekingen.D => p_change_context(
                                        $['l entry'],
                                        ($) => p_.literal.group_resolve(
                                            () => {

                                                const prop_Bedrag = p_change_context(
                                                    $['Bedrag'],
                                                    ($) => $,
                                                )

                                                const prop_Datum = p_change_context(
                                                    $['Datum'],
                                                    ($) => $,
                                                )

                                                const prop_Grootboekrekening = p_change_context(
                                                    $['Grootboekrekening'],
                                                    ($) => ({
                                                        'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                            $p['Grootboekrekeningen'].Resultaat,
                                                        ).get_entry(
                                                            $['l reference'],
                                                            {
                                                                no_such_entry: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                no_context_lookup: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['no context lookup', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                                cycle_detected: () => abort(
                                                                    {
                                                                        'type': ['lookup', ['cycle detected', null]],
                                                                        'location': $['l location'],
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        'l id': $['l reference'],
                                                    }),
                                                )

                                                const prop_Omschrijving = p_change_context(
                                                    $['Omschrijving'],
                                                    ($) => $,
                                                )
                                                return {
                                                    'Bedrag': prop_Bedrag,
                                                    'Datum': prop_Datum,
                                                    'Grootboekrekening': prop_Grootboekrekening,
                                                    'Omschrijving': prop_Omschrijving,
                                                }
                                            },
                                        ),
                                    ),
                                )
                            }
                        },
                    ),
                ),
            ),
        )
        return {
            'Verrekenposten': prop_Verrekenposten,
            'Bankrekeningen': prop_Bankrekeningen,
            'Overige Balans Items': prop_Overige_Balans_Items,
        }
    },
)

export const Eerste_boekjaar: declarations.Eerste_boekjaar_ = ($, abort, $l, $p) => p_variables(
    () => {

        const var_location = $['l location']
        return p_.from.state($['l state']).decide(
            ($): s_out.Eerste_boekjaar => {
                switch ($[0]) {
                    case 'Ja': return p_.option(
                            $,
                            ($) => ['Ja', p_.literal.nothing()],
                        )
                    case 'Nee': return p_.option(
                            $,
                            ($) => ['Nee', p_.literal.group_resolve(
                                () => {

                                    const prop_Vorig_boekjaar = p_change_context(
                                        $['Vorig boekjaar'],
                                        ($) => ({
                                            'l entry': $l['Jaren'].get_entry(
                                                $['l reference'],
                                                {
                                                    no_such_entry: () => abort(
                                                        {
                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    no_context_lookup: () => abort(
                                                        {
                                                            'type': ['lookup', ['no context lookup', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                    cycle_detected: () => abort(
                                                        {
                                                            'type': ['lookup', ['cycle detected', null]],
                                                            'location': $['l location'],
                                                        },
                                                    ),
                                                },
                                            ),
                                            'l id': $['l reference'],
                                        }),
                                    )
                                    return {
                                        'Vorig boekjaar': prop_Vorig_boekjaar,
                                    }
                                },
                            )],
                        )
                    default: return p_.exhaustive(
                            $[0],
                        )
                }
            },
        )
    },
)

export const Jaren: declarations.Jaren_ = ($, abort, $l, $p) => p_.from.dictionary($['l dictionary'],
).resolve(
    ($, id, $a, $c): s_out.Jaren.D => p_change_context(
        $['l entry'],
        ($) => p_.literal.group_resolve(
            () => {

                const prop_Afgesloten = p_change_context(
                    $['Afgesloten'],
                    ($) => p_variables(
                        () => {

                            const var_location = $['l location']
                            return p_.from.state($['l state']).decide(
                                ($): s_out.Jaren.D.Afgesloten => {
                                    switch ($[0]) {
                                        case 'Ja': return p_.option(
                                                $,
                                                ($) => ['Ja', p_.literal.nothing()],
                                            )
                                        case 'Nee': return p_.option(
                                                $,
                                                ($) => ['Nee', p_.literal.nothing()],
                                            )
                                        default: return p_.exhaustive(
                                                $[0],
                                            )
                                    }
                                },
                            )
                        },
                    ),
                )

                const prop_Startdatum_boekjaar = p_change_context(
                    $['Startdatum boekjaar'],
                    ($) => $,
                )

                const prop_Grootboekrekeningen = p_change_context(
                    $['Grootboekrekeningen'],
                    ($) => Grootboekrekeningen(
                        $,
                        ($) => abort(
                            $,
                        ),
                        p_.literal.nothing(),
                        {
                            'Beheer': $p['Beheer'],
                        },
                    ),
                )

                const prop_Eerste_boekjaar = p_change_context(
                    $['Eerste boekjaar'],
                    ($) => Eerste_boekjaar(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'Jaren': $a,
                        },
                        p_.literal.nothing(),
                    ),
                )

                const prop_Jaarbeheer = p_change_context(
                    $['Jaarbeheer'],
                    ($) => Jaarbeheer(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'Jaren': $a,
                        },
                        {
                            'Grootboekrekeningen': prop_Grootboekrekeningen,
                            'Eerste boekjaar': prop_Eerste_boekjaar,
                        },
                    ),
                )

                const prop_Handelstransacties = p_change_context(
                    $['Handelstransacties'],
                    ($) => Handelstransacties(
                        $,
                        ($) => abort(
                            $,
                        ),
                        p_.literal.nothing(),
                        {
                            'Beheer': $p['Beheer'],
                            'Grootboekrekeningen': prop_Grootboekrekeningen,
                            'Jaarbeheer': prop_Jaarbeheer,
                        },
                    ),
                )

                const prop_Mutaties = p_change_context(
                    $['Mutaties'],
                    ($) => Mutaties(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'Jaren': $a,
                        },
                        {
                            'Beheer': $p['Beheer'],
                            'Grootboekrekeningen': prop_Grootboekrekeningen,
                            'Jaarbeheer': prop_Jaarbeheer,
                            'Handelstransacties': prop_Handelstransacties,
                        },
                    ),
                )
                return {
                    'Afgesloten': prop_Afgesloten,
                    'Startdatum boekjaar': prop_Startdatum_boekjaar,
                    'Grootboekrekeningen': prop_Grootboekrekeningen,
                    'Eerste boekjaar': prop_Eerste_boekjaar,
                    'Jaarbeheer': prop_Jaarbeheer,
                    'Handelstransacties': prop_Handelstransacties,
                    'Mutaties': prop_Mutaties,
                }
            },
        ),
    ),
)

export const Root: declarations.Root_ = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_Fiscaal = p_change_context(
            $['Fiscaal'],
            ($) => Fiscaal(
                $,
                ($) => abort(
                    $,
                ),
                p_.literal.nothing(),
                p_.literal.nothing(),
            ),
        )

        const prop_Categorieen = p_change_context(
            $['Categorieen'],
            ($) => Grootboek_Categorieen(
                $,
                ($) => abort(
                    $,
                ),
                p_.literal.nothing(),
                {
                    'Fiscaal': prop_Fiscaal,
                },
            ),
        )

        const prop_Beheer = p_change_context(
            $['Beheer'],
            ($) => Beheer(
                $,
                ($) => abort(
                    $,
                ),
                p_.literal.nothing(),
                {
                    'Grootboek Categorieen': prop_Categorieen,
                },
            ),
        )

        const prop_Jaren = p_change_context(
            $['Jaren'],
            ($) => Jaren(
                $,
                ($) => abort(
                    $,
                ),
                p_.literal.nothing(),
                {
                    'Beheer': prop_Beheer,
                },
            ),
        )
        return {
            'Fiscaal': prop_Fiscaal,
            'Categorieen': prop_Categorieen,
            'Beheer': prop_Beheer,
            'Jaren': prop_Jaren,
        }
    },
)
