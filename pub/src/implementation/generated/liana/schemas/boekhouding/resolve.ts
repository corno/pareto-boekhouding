
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/resolve"

export const Fiscaal: t_signatures.Fiscaal = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Balans_Hoofdcategorieen = _p_cc(
            $['Balans Hoofdcategorieen'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Resultaat_Hoofdcategorieen = _p_cc(
            $['Resultaat Hoofdcategorieen'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Balans Hoofdcategorieen': prop_Balans_Hoofdcategorieen,
            'Resultaat Hoofdcategorieen': prop_Resultaat_Hoofdcategorieen,
        }
    }
)

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Correctietypes_vennootschapsbelasting = _p_cc(
            $['Correctietypes vennootschapsbelasting'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Balans = _p_cc(
            $['Balans'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Correctietypes vennootschapsbelasting': prop_Correctietypes_vennootschapsbelasting,
            'Balans': prop_Balans,
            'Resultaat': prop_Resultaat,
        }
    }
)

export const Beheer: t_signatures.Beheer = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_BTW$mi_categorieen = _p_cc(
            $['BTW-categorieen'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Grootboekrekeningen = _p_cc(
            $['Grootboekrekeningen'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_Balans = _p_cc(
                        $['Balans'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Resultaat = _p_cc(
                        $['Resultaat'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    return {
                        'Balans': prop_Balans,
                        'Resultaat': prop_Resultaat,
                    }
                }
            )
        )
        
        const prop_Rekeningen = _p_cc(
            $['Rekeningen'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_Bank = _p_cc(
                        $['Bank'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Informeel = _p_cc(
                        $['Informeel'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    return {
                        'Bank': prop_Bank,
                        'Informeel': prop_Informeel,
                    }
                }
            )
        )
        
        const prop_Gebruikers = _p_cc(
            $['Gebruikers'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Klanten = _p_cc(
            $['Klanten'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Leveranciers = _p_cc(
            $['Leveranciers'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Medewerkers = _p_cc(
            $['Medewerkers'],
            ($) => _p_unreachable_code_path(
            )
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
    }
)

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Balans = _p_cc(
            $['Balans'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Balans': prop_Balans,
            'Resultaat': prop_Resultaat,
        }
    }
)

export const Jaarbeheer: t_signatures.Jaarbeheer = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_Grootboekrekening_voor_BTW_afrondingen = _p_cc(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Salarisrondes = _p_cc(
                        $['Salarisrondes'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_BTW_periodes = _p_cc(
                        $['BTW periodes'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    return {
                        'Grootboekrekening voor BTW afrondingen': prop_Grootboekrekening_voor_BTW_afrondingen,
                        'Salarisrondes': prop_Salarisrondes,
                        'BTW periodes': prop_BTW_periodes,
                    }
                }
            )
        )
        
        const prop_Balans = _p_cc(
            $['Balans'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_Beginsaldo_nog_aan_te_geven_BTW = _p_cc(
                        $['Beginsaldo nog aan te geven BTW'],
                        ($) => $
                    )
                    
                    const prop_Beginsaldo_winstreserve = _p_cc(
                        $['Beginsaldo winstreserve'],
                        ($) => $
                    )
                    
                    const prop_Grootboekrekening_voor_nog_aan_te_geven_BTW = _p_cc(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Grootboekrekening_voor_resultaat_dit_jaar = _p_cc(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Grootboekrekening_voor_winstreserve = _p_cc(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Grootboekrekening_voor_Inkoop_saldo = _p_cc(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Grootboekrekening_voor_Verkoop_saldo = _p_cc(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Informele_rekeningen = _p_cc(
                        $['Informele rekeningen'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Bankrekeningen = _p_cc(
                        $['Bankrekeningen'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Overige_balans_items = _p_cc(
                        $['Overige balans items'],
                        ($) => _p_unreachable_code_path(
                        )
                    )
                    
                    const prop_Verrekenposten = _p_cc(
                        $['Verrekenposten'],
                        ($) => _p_unreachable_code_path(
                        )
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
                }
            )
        )
        return {
            'Resultaat': prop_Resultaat,
            'Balans': prop_Balans,
        }
    }
)

export const Overige_balans_item: t_signatures.Overige_balans_item = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Beginsaldo = _p_cc(
            $['Beginsaldo'],
            ($) => $
        )
        
        const prop_Grootboekrekening = _p_cc(
            $['Grootboekrekening'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Nieuw = _p_cc(
            $['Nieuw'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Beginsaldo': prop_Beginsaldo,
            'Grootboekrekening': prop_Grootboekrekening,
            'Nieuw': prop_Nieuw,
        }
    }
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Inkopen = _p_cc(
            $['Inkopen'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Verkopen = _p_cc(
            $['Verkopen'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Inkopen': prop_Inkopen,
            'Verkopen': prop_Verkopen,
        }
    }
)

export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Jaar = _p_cc(
            $['Jaar'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Jaar': prop_Jaar,
            'type': prop_type,
        }
    }
)

export const Mutaties: t_signatures.Mutaties = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Verrekenpost_mutaties = _p_cc(
            $['Verrekenpost mutaties'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Bankrekening_Mutatie_Verwerkingen = _p_cc(
            $['Bankrekening Mutatie Verwerkingen'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Memoriaal_boekingen = _p_cc(
            $['Memoriaal boekingen'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Verrekenpost mutaties': prop_Verrekenpost_mutaties,
            'Bankrekening Mutatie Verwerkingen': prop_Bankrekening_Mutatie_Verwerkingen,
            'Memoriaal boekingen': prop_Memoriaal_boekingen,
        }
    }
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Jaren: t_signatures.Jaren = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Root: t_signatures.Root = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Fiscaal = _p_cc(
            $['Fiscaal'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Categorieen = _p_cc(
            $['Categorieen'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Beheer = _p_cc(
            $['Beheer'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_Jaren = _p_cc(
            $['Jaren'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'Fiscaal': prop_Fiscaal,
            'Categorieen': prop_Categorieen,
            'Beheer': prop_Beheer,
            'Jaren': prop_Jaren,
        }
    }
)
